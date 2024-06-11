/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.os.RemoteException;
import android.util.Log;
import android.util.Pair;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.PendingResult;
import com.google.android.gms.common.api.Releasable;
import com.google.android.gms.common.api.Result;
import com.google.android.gms.common.api.ResultCallback;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.common.internal.zzq;
import com.google.android.gms.common.internal.zzx;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
/* loaded from: classes.dex */
abstract class zzlc<R extends Result> extends PendingResult<R> {

    private boolean zzL;
    private volatile R zzaaX;
    protected final zza<R> zzabi;
    private ResultCallback<? super R> zzabk;
    private volatile boolean zzabl;
    private boolean zzabm;
    private zzq zzabn;
    private Integer zzabo;
    private volatile zzlq<R> zzabp;
    private final Object zzabh = new Object();
    private final CountDownLatch zzoS = new CountDownLatch(1);
    private final ArrayList<PendingResult.zza> zzabj = new ArrayList<>();

    /* loaded from: classes.dex */
    static class zza<R extends Result> extends Handler {

        zza() {

            this(Looper.getMainLooper());
        }


        zza(Looper looper) {

            super(looper);
        }


        /* JADX WARN: Multi-variable type inference failed */
        @Override // android.os.Handler
        void handleMessage(Message msg) {

            switch (msg.what) {

                case 1:
                    Pair pair = (Pair) msg.obj;
                    zzb((ResultCallback) pair.first, (Result) pair.second);
                    return;
                case 2:
                    ((zzlc) msg.obj).zzw(Status.zzabe);
                    return;
                default:
                    Log.wtf("BasePendingResult", "Don't know how to handle message: " + msg.what, new Exception());
                    return;
            }

        }


        void zza(ResultCallback<? super R> resultCallback, R r) {

            sendMessage(obtainMessage(1, new Pair(resultCallback, r)));
        }


        void zza(zzlc<R> zzlc, long j) {

            sendMessageDelayed(obtainMessage(2, zzlc), j);
        }


        protected void zzb(ResultCallback<? super R> resultCallback, R r) {

            try {

                resultCallback.onResult(r);
            }
 catch (RuntimeException e) {

                zzlc.zzd(r);
                throw e;
            }

        }


        void zznM() {

            removeMessages(2);
        }

    }


    @Deprecated
    zzlc(Looper looper) {

        this.zzabi = new zza<>(looper);
    }


    zzlc(GoogleApiClient googleApiClient) {

        this.zzabi = new zza<>(googleApiClient != null ? googleApiClient.getLooper() : Looper.getMainLooper());
    }


    private R get() {

        R r;
        boolean z = true;
        synchronized (this.zzabh) {

            if (this.zzabl) {

                z = false;
            }

            zzx.zza(z, "Result has already been consumed.");
            zzx.zza(isReady(), "Result is not ready.");
            r = this.zzaaX;
            this.zzaaX = null;
            this.zzabk = null;
            this.zzabl = true;
        }

        zznL();
        return r;
    }


    private void zzc(R r) {

        this.zzaaX = r;
        this.zzabn = null;
        this.zzoS.countDown();
        Status status = this.zzaaX.getStatus();
        if (this.zzabk != null) {

            this.zzabi.zznM();
            if (!this.zzL) {

                this.zzabi.zza((ResultCallback<? super ResultCallback<? super R>>) this.zzabk, (ResultCallback<? super R>) get());
            }

        }

        Iterator<PendingResult.zza> it = this.zzabj.iterator();
        while (it.hasNext()) {

            it.next().zzt(status);
        }

        this.zzabj.clear();
    }


    static void zzd(Result result) {

        if (result instanceof Releasable) {

            try {

                ((Releasable) result).release();
            }
 catch (RuntimeException e) {

                Log.w("BasePendingResult", "Unable to release " + result, e);
            }

        }

    }


    @Override // com.google.android.gms.common.api.PendingResult
    final R await() {

        boolean z = true;
        zzx.zza(Looper.myLooper() != Looper.getMainLooper(), "await must not be called on the UI thread");
        zzx.zza(!this.zzabl, "Result has already been consumed");
        if (this.zzabp != null) {

            z = false;
        }

        zzx.zza(z, "Cannot await if then() has been called.");
        try {

            this.zzoS.await();
        }
 catch (InterruptedException e) {

            zzw(Status.zzabc);
        }

        zzx.zza(isReady(), "Result is not ready.");
        return get();
    }


    @Override // com.google.android.gms.common.api.PendingResult
    final R await(long time, TimeUnit units) {

        boolean z = true;
        zzx.zza(time <= 0 || Looper.myLooper() != Looper.getMainLooper(), "await must not be called on the UI thread when time is greater than zero.");
        zzx.zza(!this.zzabl, "Result has already been consumed.");
        if (this.zzabp != null) {

            z = false;
        }

        zzx.zza(z, "Cannot await if then() has been called.");
        try {

            if (!this.zzoS.await(time, units)) {

                zzw(Status.zzabe);
            }

        }
 catch (InterruptedException e) {

            zzw(Status.zzabc);
        }

        zzx.zza(isReady(), "Result is not ready.");
        return get();
    }


    @Override // com.google.android.gms.common.api.PendingResult
    void cancel() {

        synchronized (this.zzabh) {

            if (!this.zzL && !this.zzabl) {

                if (this.zzabn != null) {

                    try {

                        this.zzabn.cancel();
                    }
 catch (RemoteException e) {

                    }

                }

                zzd(this.zzaaX);
                this.zzabk = null;
                this.zzL = true;
                zzc(zzb(Status.zzabf));
            }

        }

    }


    @Override // com.google.android.gms.common.api.PendingResult
    boolean isCanceled() {

        boolean z;
        synchronized (this.zzabh) {

            z = this.zzL;
        }

        return z;
    }


    final boolean isReady() {

        return this.zzoS.getCount() == 0;
    }


    @Override // com.google.android.gms.common.api.PendingResult
    final void setResultCallback(ResultCallback<? super R> callback) {

        boolean z = true;
        zzx.zza(!this.zzabl, "Result has already been consumed.");
        synchronized (this.zzabh) {

            if (this.zzabp != null) {

                z = false;
            }

            zzx.zza(z, "Cannot set callbacks if then() has been called.");
            if (!isCanceled()) {

                if (isReady()) {

                    this.zzabi.zza((ResultCallback<? super ResultCallback<? super R>>) callback, (ResultCallback<? super R>) get());
                }
 else {

                    this.zzabk = callback;
                }

            }

        }

    }


    @Override // com.google.android.gms.common.api.PendingResult
    final void setResultCallback(ResultCallback<? super R> callback, long time, TimeUnit units) {

        boolean z = true;
        zzx.zza(!this.zzabl, "Result has already been consumed.");
        synchronized (this.zzabh) {

            if (this.zzabp != null) {

                z = false;
            }

            zzx.zza(z, "Cannot set callbacks if then() has been called.");
            if (!isCanceled()) {

                if (isReady()) {

                    this.zzabi.zza((ResultCallback<? super ResultCallback<? super R>>) callback, (ResultCallback<? super R>) get());
                }
 else {

                    this.zzabk = callback;
                    this.zzabi.zza(this, units.toMillis(time));
                }

            }

        }

    }


    @Override // com.google.android.gms.common.api.PendingResult
    final void zza(PendingResult.zza zza2) {

        boolean z = true;
        zzx.zza(!this.zzabl, "Result has already been consumed.");
        if (zza2 == null) {

            z = false;
        }

        zzx.zzb(z, "Callback cannot be null.");
        synchronized (this.zzabh) {

            if (isReady()) {

                zza2.zzt(this.zzaaX.getStatus());
            }
 else {

                this.zzabj.add(zza2);
            }

        }

    }


    protected final void zza(zzq zzq) {

        synchronized (this.zzabh) {

            this.zzabn = zzq;
        }

    }


    protected abstract R zzb(Status status);

    final void zzb(R r) {

        boolean z = true;
        synchronized (this.zzabh) {

            if (this.zzabm || this.zzL) {

                zzd(r);
                return;
            }

            zzx.zza(!isReady(), "Results have already been set");
            if (this.zzabl) {

                z = false;
            }

            zzx.zza(z, "Result has already been consumed");
            zzc(r);
        }

    }


    @Override // com.google.android.gms.common.api.PendingResult
    Integer zznF() {

        return this.zzabo;
    }


    protected void zznL() {

    }


    final void zzw(Status status) {

        synchronized (this.zzabh) {

            if (!isReady()) {

                zzb((zzlc<R>) zzb(status));
                this.zzabm = true;
            }

        }

    }

}

