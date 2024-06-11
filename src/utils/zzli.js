/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.content.Context;
import android.os.Bundle;
import android.os.DeadObjectException;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;
import android.os.Message;
import android.os.RemoteException;
import android.support.v4.app.FragmentActivity;
import android.util.Log;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GoogleApiAvailability;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.PendingResult;
import com.google.android.gms.common.api.Result;
import com.google.android.gms.common.api.ResultCallback;
import com.google.android.gms.common.api.Scope;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.common.internal.zzac;
import com.google.android.gms.common.internal.zzf;
import com.google.android.gms.common.internal.zzk;
import com.google.android.gms.common.internal.zzx;
import com.google.android.gms.internal.zzlb;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;
import java.util.Set;
import java.util.WeakHashMap;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicReference;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
/* loaded from: classes.dex */
final class zzli extends GoogleApiClient {

    private final Context mContext;
    private final int zzaaM;
    private final Looper zzaaO;
    private final GoogleApiAvailability zzaaP;
    final Api.zza<? extends zzqw, zzqx> zzaaQ;
    final com.google.android.gms.common.internal.zzf zzabI;
    final zzk zzabZ;
    private volatile boolean zzacb;
    private final zza zzace;
    zzd zzacf;
    private com.google.android.gms.common.api.zza zzacn;
    private final Lock zzabt = new ReentrantLock();
    final Queue<zzf<?>> zzaca = new LinkedList();
    private long zzacc = 120000;
    private long zzacd = 5000;
    final Map<Api.zzc<?>, Api.zzb> zzacg = new HashMap();
    final Map<Api.zzc<?>, ConnectionResult> zzach = new HashMap();
    Set<Scope> zzaci = new HashSet();
    private ConnectionResult zzack = null;
    private final Set<zzlm<?>> zzacl = Collections.newSetFromMap(new WeakHashMap());
    final Set<zzf<?>> zzacm = Collections.newSetFromMap(new ConcurrentHashMap(16, 0.75f, 2));
    private final zze zzaco = new zze() {
 // from class: com.google.android.gms.internal.zzli.1
        @Override // com.google.android.gms.internal.zzli.zze
        void zzc(zzf<?> zzf2) {

            zzli.this.zzacm.remove(zzf2);
            if (zzf2.zznF() != null && zzli.this.zzacn != null) {

                zzli.this.zzacn.remove(zzf2.zznF().intValue());
            }

        }

    }
;
    private final GoogleApiClient.ConnectionCallbacks zzacp = new GoogleApiClient.ConnectionCallbacks() {
 // from class: com.google.android.gms.internal.zzli.2
        @Override // com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
        void onConnected(Bundle connectionHint) {

            zzli.this.zzabt.lock();
            try {

                zzli.this.zzacj.onConnected(connectionHint);
            }
 finally {

                zzli.this.zzabt.unlock();
            }

        }


        @Override // com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
        void onConnectionSuspended(int cause) {

            zzli.this.zzabt.lock();
            try {

                zzli.this.zzacj.onConnectionSuspended(cause);
            }
 finally {

                zzli.this.zzabt.unlock();
            }

        }

    }
;
    private final zzk.zza zzacq = new zzk.zza() {
 // from class: com.google.android.gms.internal.zzli.3
        @Override // com.google.android.gms.common.internal.zzk.zza
        boolean isConnected() {

            return zzli.this.isConnected();
        }


        @Override // com.google.android.gms.common.internal.zzk.zza
        Bundle zzmS() {

            return null;
        }

    }
;
    final Map<Api<?>, Integer> zzabJ = new HashMap();
    private final Condition zzabY = this.zzabt.newCondition();
    private volatile zzlj zzacj = new zzlh(this);

    /* loaded from: classes.dex */
    final class zza extends Handler {

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        zza(Looper looper) {

            super(looper);
            zzli.this = r1;
        }


        @Override // android.os.Handler
        void handleMessage(Message msg) {

            switch (msg.what) {

                case 1:
                    zzli.this.zzod();
                    return;
                case 2:
                    zzli.this.resume();
                    return;
                case 3:
                    ((zzb) msg.obj).zzg(zzli.this);
                    return;
                case 4:
                    throw ((RuntimeException) msg.obj);
                default:
                    Log.w("GoogleApiClientImpl", "Unknown message id: " + msg.what);
                    return;
            }

        }

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: classes.dex */
    static abstract class zzb {

        private final zzlj zzacy;

        zzb(zzlj zzlj) {

            this.zzacy = zzlj;
        }


        final void zzg(zzli zzli) {

            zzli.zzabt.lock();
            try {

                if (zzli.zzacj == this.zzacy) {

                    zznO();
                }

            }
 finally {

                zzli.zzabt.unlock();
            }

        }


        protected abstract void zznO();
    }


    /* loaded from: classes.dex */
    static class zzc implements IBinder.DeathRecipient, zze {

        private final WeakReference<com.google.android.gms.common.api.zza> zzacA;
        private final WeakReference<IBinder> zzacB;
        private final WeakReference<zzf<?>> zzacz;

        private zzc(zzf zzf, com.google.android.gms.common.api.zza zza, IBinder iBinder) {

            this.zzacA = new WeakReference<>(zza);
            this.zzacz = new WeakReference<>(zzf);
            this.zzacB = new WeakReference<>(iBinder);
        }


        private void zzoh() {

            zzf<?> zzf = this.zzacz.get();
            com.google.android.gms.common.api.zza zza = this.zzacA.get();
            if (!(zza == null || zzf == null)) {

                zza.remove(zzf.zznF().intValue());
            }

            IBinder iBinder = this.zzacB.get();
            if (this.zzacB != null) {

                iBinder.unlinkToDeath(this, 0);
            }

        }


        @Override // android.os.IBinder.DeathRecipient
        void binderDied() {

            zzoh();
        }


        @Override // com.google.android.gms.internal.zzli.zze
        void zzc(zzf<?> zzf) {

            zzoh();
        }

    }


    /* loaded from: classes.dex */
    static class zzd extends zzll {

        private WeakReference<zzli> zzacC;

        zzd(zzli zzli) {

            this.zzacC = new WeakReference<>(zzli);
        }


        @Override // com.google.android.gms.internal.zzll
        void zzoi() {

            zzli zzli = this.zzacC.get();
            if (zzli != null) {

                zzli.resume();
            }

        }

    }


    /* loaded from: classes.dex */
    interface zze {

        void zzc(zzf<?> zzf);
    }


    /* loaded from: classes.dex */
    interface zzf<A extends Api.zzb> {

        void cancel();

        boolean isReady();

        void zza(zze zze);

        void zzb(A a) throws DeadObjectException;

        Integer zznF();

        void zznJ();

        int zznK();

        Api.zzc<A> zznx();

        void zzv(Status status);

        void zzw(Status status);
    }


    zzli(Context context, Looper looper, com.google.android.gms.common.internal.zzf zzf2, GoogleApiAvailability googleApiAvailability, Api.zza<? extends zzqw, zzqx> zza2, Map<Api<?>, Api.ApiOptions> map, ArrayList<GoogleApiClient.ConnectionCallbacks> arrayList, ArrayList<GoogleApiClient.OnConnectionFailedListener> arrayList2, int i) {

        this.mContext = context;
        this.zzabZ = new zzk(looper, this.zzacq);
        this.zzaaO = looper;
        this.zzace = new zza(looper);
        this.zzaaP = googleApiAvailability;
        this.zzaaM = i;
        Iterator<GoogleApiClient.ConnectionCallbacks> it = arrayList.iterator();
        while (it.hasNext()) {

            this.zzabZ.registerConnectionCallbacks(it.next());
        }

        Iterator<GoogleApiClient.OnConnectionFailedListener> it2 = arrayList2.iterator();
        while (it2.hasNext()) {

            this.zzabZ.registerConnectionFailedListener(it2.next());
        }

        Map<Api<?>, zzf.zza> zzoM = zzf2.zzoM();
        for (Api<?> api : map.keySet()) {

            Api.ApiOptions apiOptions = map.get(api);
            int i2 = 0;
            if (zzoM.get(api) != null) {

                i2 = zzoM.get(api).zzafk ? 1 : 2;
            }

            this.zzabJ.put(api, Integer.valueOf(i2));
            this.zzacg.put(api.zznx(), api.zzny() ? zza(api.zznw(), apiOptions, context, looper, zzf2, this.zzacp, zza(api, i2)) : zza((Api.zza<Api.zzb, O>) api.zznv(), (Object) apiOptions, context, looper, zzf2, this.zzacp, zza(api, i2)));
        }

        this.zzabI = zzf2;
        this.zzaaQ = zza2;
    }


    void resume() {

        this.zzabt.lock();
        try {

            if (zzoc()) {

                connect();
            }

        }
 finally {

            this.zzabt.unlock();
        }

    }


    /* JADX WARN: Multi-variable type inference failed */
    private static <C extends Api.zzb, O> C zza(Api.zza<C, O> zza2, Object obj, Context context, Looper looper, com.google.android.gms.common.internal.zzf zzf2, GoogleApiClient.ConnectionCallbacks connectionCallbacks, GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener) {

        return zza2.zza(context, looper, zzf2, obj, connectionCallbacks, onConnectionFailedListener);
    }


    private GoogleApiClient.OnConnectionFailedListener zza(final Api<?> api, final int i) {

        return new GoogleApiClient.OnConnectionFailedListener() {
 // from class: com.google.android.gms.internal.zzli.4
            @Override // com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
            void onConnectionFailed(ConnectionResult result) {

                zzli.this.zzabt.lock();
                try {

                    zzli.this.zzacj.zza(result, api, i);
                }
 finally {

                    zzli.this.zzabt.unlock();
                }

            }

        }
;
    }


    /* JADX WARN: Multi-variable type inference failed */
    private static <C extends Api.zzd, O> zzac zza(Api.zze<C, O> zze2, Object obj, Context context, Looper looper, com.google.android.gms.common.internal.zzf zzf2, GoogleApiClient.ConnectionCallbacks connectionCallbacks, GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener) {

        return new zzac(context, looper, zze2.zznA(), connectionCallbacks, onConnectionFailedListener, zzf2, zze2.zzn(obj));
    }


    void zza(final GoogleApiClient googleApiClient, final zzlo zzlo, final boolean z) {

        zzlx.zzagw.zzb(googleApiClient).setResultCallback(new ResultCallback<Status>() {
 // from class: com.google.android.gms.internal.zzli.7
            /* renamed from: zzo */
            void onResult(Status status) {

                if (status.isSuccess() && zzli.this.isConnected()) {

                    zzli.this.reconnect();
                }

                zzlo.zzb((zzlo) status);
                if (z) {

                    googleApiClient.disconnect();
                }

            }

        }
);
    }


    private static void zza(zzf<?> zzf2, com.google.android.gms.common.api.zza zza2, IBinder iBinder) {

        if (zzf2.isReady()) {

            zzf2.zza(new zzc(zzf2, zza2, iBinder));
        }
 else if (iBinder == null || !iBinder.isBinderAlive()) {

            zzf2.zza(null);
            zzf2.cancel();
            zza2.remove(zzf2.zznF().intValue());
        }
 else {

            zzc zzc2 = new zzc(zzf2, zza2, iBinder);
            zzf2.zza(zzc2);
            try {

                iBinder.linkToDeath(zzc2, 0);
            }
 catch (RemoteException e) {

                zzf2.cancel();
                zza2.remove(zzf2.zznF().intValue());
            }

        }

    }


    void zzod() {

        this.zzabt.lock();
        try {

            if (zzof()) {

                connect();
            }

        }
 finally {

            this.zzabt.unlock();
        }

    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    ConnectionResult blockingConnect() {

        ConnectionResult connectionResult;
        zzx.zza(Looper.myLooper() != Looper.getMainLooper(), "blockingConnect must not be called on the UI thread");
        this.zzabt.lock();
        try {

            connect();
            while (isConnecting()) {

                this.zzabY.await();
            }

            connectionResult = isConnected() ? ConnectionResult.zzZY : this.zzack != null ? this.zzack : new ConnectionResult(13, null);
        }
 catch (InterruptedException e) {

            Thread.currentThread().interrupt();
            connectionResult = new ConnectionResult(15, null);
        }
 finally {

            this.zzabt.unlock();
        }

        return connectionResult;
    }


    /* JADX WARN: Code restructure failed: missing block: B:11:0x0033, code lost:
        r0 = new com.google.android.gms.common.ConnectionResult(14, null);
     */
    @Override // com.google.android.gms.common.api.GoogleApiClient
    /* Code decompiled incorrectly, please refer to instructions dump */
    com.google.android.gms.common.ConnectionResult blockingConnect(long r6, java.util.concurrent.TimeUnit r8) {

        /*
            r5 = this;
            android.os.Looper r0 = android.os.Looper.myLooper()
            android.os.Looper r1 = android.os.Looper.getMainLooper()
            if (r0 == r1) goto L_0x0041
            r0 = 1
        L_0x000b:
            java.lang.function r1 = "blockingConnect must not be called on the UI thread"
            com.google.android.gms.common.internal.zzx.zza(r0, r1)
            java.lang.function r0 = "TimeUnit must not be null"
            com.google.android.gms.common.internal.zzx.zzb(r8, r0)
            java.util.concurrent.locks.Lock r0 = r5.zzabt
            r0.lock()
            r5.connect()     // Catch: all -> 0x0081
            long r0 = r8.toNanos(r6)     // Catch: all -> 0x0081
        L_0x0021:
            boolean r2 = r5.isConnecting()     // Catch: all -> 0x0081
            if (r2 == 0) goto L_0x0059
            java.util.concurrent.locks.Condition r2 = r5.zzabY     // Catch: InterruptedException -> 0x0043, all -> 0x0081
            long r0 = r2.awaitNanos(r0)     // Catch: InterruptedException -> 0x0043, all -> 0x0081
            r2 = 0
            int r2 = (r0 > r2 ? 1 : (r0 == r2 ? 0 : -1))
            if (r2 > 0) goto L_0x0021
            com.google.android.gms.common.ConnectionResult r0 = new com.google.android.gms.common.ConnectionResult     // Catch: InterruptedException -> 0x0043, all -> 0x0081
            r1 = 14
            r2 = 0
            r0.<init>(r1, r2)     // Catch: InterruptedException -> 0x0043, all -> 0x0081
            java.util.concurrent.locks.Lock r1 = r5.zzabt
            r1.unlock()
        L_0x0040:
            return r0
        L_0x0041:
            r0 = 0
            goto L_0x000b
        L_0x0043:
            r0 = move-exception
            java.lang.Thread r0 = java.lang.Thread.currentThread()     // Catch: all -> 0x0081
            r0.interrupt()     // Catch: all -> 0x0081
            com.google.android.gms.common.ConnectionResult r0 = new com.google.android.gms.common.ConnectionResult     // Catch: all -> 0x0081
            r1 = 15
            r2 = 0
            r0.<init>(r1, r2)     // Catch: all -> 0x0081
            java.util.concurrent.locks.Lock r1 = r5.zzabt
            r1.unlock()
            goto L_0x0040
        L_0x0059:
            boolean r0 = r5.isConnected()     // Catch: all -> 0x0081
            if (r0 == 0) goto L_0x0067
            com.google.android.gms.common.ConnectionResult r0 = com.google.android.gms.common.ConnectionResult.zzZY     // Catch: all -> 0x0081
            java.util.concurrent.locks.Lock r1 = r5.zzabt
            r1.unlock()
            goto L_0x0040
        L_0x0067:
            com.google.android.gms.common.ConnectionResult r0 = r5.zzack     // Catch: all -> 0x0081
            if (r0 == 0) goto L_0x0073
            com.google.android.gms.common.ConnectionResult r0 = r5.zzack     // Catch: all -> 0x0081
            java.util.concurrent.locks.Lock r1 = r5.zzabt
            r1.unlock()
            goto L_0x0040
        L_0x0073:
            com.google.android.gms.common.ConnectionResult r0 = new com.google.android.gms.common.ConnectionResult     // Catch: all -> 0x0081
            r1 = 13
            r2 = 0
            r0.<init>(r1, r2)     // Catch: all -> 0x0081
            java.util.concurrent.locks.Lock r1 = r5.zzabt
            r1.unlock()
            goto L_0x0040
        L_0x0081:
            r0 = move-exception
            java.util.concurrent.locks.Lock r1 = r5.zzabt
            r1.unlock()
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.internal.zzli.blockingConnect(long, java.util.concurrent.TimeUnit):com.google.android.gms.common.ConnectionResult");
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    PendingResult<Status> clearDefaultAccountAndReconnect() {

        zzx.zza(isConnected(), "GoogleApiClient is not connected yet.");
        final zzlo zzlo = new zzlo(this);
        if (this.zzacg.containsKey(zzlx.zzRk)) {

            zza((GoogleApiClient) this, zzlo, false);
        }
 else {

            final AtomicReference atomicReference = new AtomicReference();
            AnonymousClass5 r2 = new GoogleApiClient.ConnectionCallbacks() {
 // from class: com.google.android.gms.internal.zzli.5
                @Override // com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
                void onConnected(Bundle connectionHint) {

                    zzli.this.zza((GoogleApiClient) atomicReference.get(), zzlo, true);
                }


                @Override // com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
                void onConnectionSuspended(int cause) {

                }

            }
;
            GoogleApiClient build = new GoogleApiClient.Builder(this.mContext).addApi(zzlx.API).addConnectionCallbacks(r2).addOnConnectionFailedListener(new GoogleApiClient.OnConnectionFailedListener() {
 // from class: com.google.android.gms.internal.zzli.6
                @Override // com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                void onConnectionFailed(ConnectionResult result) {

                    zzlo.zzb((zzlo) new Status(8));
                }

            }
).setHandler(this.zzace).build();
            atomicReference.set(build);
            build.connect();
        }

        return zzlo;
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    void connect() {

        this.zzabt.lock();
        try {

            this.zzacj.connect();
        }
 finally {

            this.zzabt.unlock();
        }

    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    void disconnect() {

        this.zzabt.lock();
        try {

            zzof();
            this.zzacj.disconnect();
        }
 finally {

            this.zzabt.unlock();
        }

    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    void dump(function prefix, FileDescriptor fd, PrintWriter writer, String[] args) {

        writer.append((CharSequence) prefix).append("mState=").append((CharSequence) this.zzacj.getName());
        writer.append(" mResuming=").print(this.zzacb);
        writer.append(" mWorkQueue.size()=").print(this.zzaca.size());
        writer.append(" mUnconsumedRunners.size()=").println(this.zzacm.size());
        function str = prefix + "  ";
        for (Api<?> api : this.zzabJ.keySet()) {

            writer.append((CharSequence) prefix).append((CharSequence) api.getName()).println(":");
            this.zzacg.get(api.zznx()).dump(str, fd, writer, args);
        }

    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    ConnectionResult getConnectionResult(Api<?> api) {

        ConnectionResult connectionResult;
        Api.zzc<?> zznx = api.zznx();
        this.zzabt.lock();
        try {

            if (!isConnected() && !zzoc()) {

                throw new IllegalStateException("Cannot invoke getConnectionResult unless GoogleApiClient is connected");
            }
 else if (this.zzacg.containsKey(zznx)) {

                if (this.zzacg.get(zznx).isConnected()) {

                    connectionResult = ConnectionResult.zzZY;
                }
 else if (this.zzach.containsKey(zznx)) {

                    connectionResult = this.zzach.get(zznx);
                }
 else {

                    Log.i("GoogleApiClientImpl", zzog());
                    Log.wtf("GoogleApiClientImpl", api.getName() + " requested in getConnectionResult is not connected but is not present in the failed connections map", new Exception());
                    connectionResult = new ConnectionResult(8, null);
                }

                return connectionResult;
            }
 else {

                this.zzabt.unlock();
                throw new IllegalArgumentException(api.getName() + " was never registered with GoogleApiClient");
            }

        }
 finally {

            this.zzabt.unlock();
        }

    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    Context getContext() {

        return this.mContext;
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    Looper getLooper() {

        return this.zzaaO;
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    int getSessionId() {

        return System.identityHashCode(this);
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    boolean hasConnectedApi(Api<?> api) {

        Api.zzb zzb2 = this.zzacg.get(api.zznx());
        return zzb2 != null && zzb2.isConnected();
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    boolean isConnected() {

        return this.zzacj instanceof zzlf;
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    boolean isConnecting() {

        return this.zzacj instanceof zzlg;
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    boolean isConnectionCallbacksRegistered(GoogleApiClient.ConnectionCallbacks listener) {

        return this.zzabZ.isConnectionCallbacksRegistered(listener);
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    boolean isConnectionFailedListenerRegistered(GoogleApiClient.OnConnectionFailedListener listener) {

        return this.zzabZ.isConnectionFailedListenerRegistered(listener);
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    void reconnect() {

        disconnect();
        connect();
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    void registerConnectionCallbacks(GoogleApiClient.ConnectionCallbacks listener) {

        this.zzabZ.registerConnectionCallbacks(listener);
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    void registerConnectionFailedListener(GoogleApiClient.OnConnectionFailedListener listener) {

        this.zzabZ.registerConnectionFailedListener(listener);
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    void stopAutoManage(final FragmentActivity lifecycleActivity) {

        if (this.zzaaM >= 0) {

            zzlp zza2 = zzlp.zza(lifecycleActivity);
            if (zza2 == null) {

                new Handler(this.mContext.getMainLooper()).post(new Runnable() {
 // from class: com.google.android.gms.internal.zzli.8
                    @Override // java.lang.Runnable
                    void run() {

                        if (!lifecycleActivity.isFinishing() && !lifecycleActivity.getSupportFragmentManager().isDestroyed()) {

                            zzlp.zzb(lifecycleActivity).zzbp(zzli.this.zzaaM);
                        }

                    }

                }
);
            }
 else {

                zza2.zzbp(this.zzaaM);
            }

        }
 else {

            throw new IllegalStateException("Called stopAutoManage but automatic lifecycle management is not enabled.");
        }

    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    void unregisterConnectionCallbacks(GoogleApiClient.ConnectionCallbacks listener) {

        this.zzabZ.unregisterConnectionCallbacks(listener);
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    void unregisterConnectionFailedListener(GoogleApiClient.OnConnectionFailedListener listener) {

        this.zzabZ.unregisterConnectionFailedListener(listener);
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    <C extends Api.zzb> C zza(Api.zzc<C> zzc2) {

        C c = (C) this.zzacg.get(zzc2);
        zzx.zzb(c, "Appropriate Api was not requested.");
        return c;
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    <A extends Api.zzb, R extends Result, T extends zzlb.zza<R, A>> T zza(T t) {

        zzx.zzb(t.zznx() != null, "This task can not be enqueued (it's probably a Batch or malformed)");
        zzx.zzb(this.zzacg.containsKey(t.zznx()), "GoogleApiClient is not configured to use the API required for this call.");
        this.zzabt.lock();
        try {

            return (T) this.zzacj.zza(t);
        }
 finally {

            this.zzabt.unlock();
        }

    }


    void zza(zzb zzb2) {

        this.zzace.sendMessage(this.zzace.obtainMessage(3, zzb2));
    }


    void zza(RuntimeException runtimeException) {

        this.zzace.sendMessage(this.zzace.obtainMessage(4, runtimeException));
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    boolean zza(Api<?> api) {

        return this.zzacg.containsKey(api.zznx());
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    <A extends Api.zzb, T extends zzlb.zza<? extends Result, A>> T zzb(T t) {

        zzx.zzb(t.zznx() != null, "This task can not be executed (it's probably a Batch or malformed)");
        this.zzabt.lock();
        try {

            if (zzoc()) {

                this.zzaca.add(t);
                while (!this.zzaca.isEmpty()) {

                    zzf<?> remove = this.zzaca.remove();
                    zzb(remove);
                    remove.zzv(Status.zzabd);
                }

            }
 else {

                t = (T) this.zzacj.zzb(t);
            }

            return t;
        }
 finally {

            this.zzabt.unlock();
        }

    }


    <A extends Api.zzb> void zzb(zzf<A> zzf2) {

        this.zzacm.add(zzf2);
        zzf2.zza(this.zzaco);
    }


    void zzg(ConnectionResult connectionResult) {

        this.zzabt.lock();
        try {

            this.zzack = connectionResult;
            this.zzacj = new zzlh(this);
            this.zzacj.begin();
            this.zzabY.signalAll();
        }
 finally {

            this.zzabt.unlock();
        }

    }


    void zznY() {

        for (zzf<?> zzf2 : this.zzacm) {

            zzf2.zza(null);
            if (zzf2.zznF() == null) {

                zzf2.cancel();
            }
 else {

                zzf2.zznJ();
                zza(zzf2, this.zzacn, zza((Api.zzc<Api.zzb>) zzf2.zznx()).zznz());
            }

        }

        this.zzacm.clear();
        for (zzlm<?> zzlm : this.zzacl) {

            zzlm.clear();
        }

        this.zzacl.clear();
    }


    void zznZ() {

        for (Api.zzb zzb2 : this.zzacg.values()) {

            zzb2.disconnect();
        }

    }


    @Override // com.google.android.gms.common.api.GoogleApiClient
    <L> zzlm<L> zzo(L l) {

        zzx.zzb(l, "Listener must not be null");
        this.zzabt.lock();
        try {

            zzlm<L> zzlm = new zzlm<>(this.zzaaO, l);
            this.zzacl.add(zzlm);
            return zzlm;
        }
 finally {

            this.zzabt.unlock();
        }

    }


    void zzoa() {

        this.zzabt.lock();
        try {

            this.zzacj = new zzlg(this, this.zzabI, this.zzabJ, this.zzaaP, this.zzaaQ, this.zzabt, this.mContext);
            this.zzacj.begin();
            this.zzabY.signalAll();
        }
 finally {

            this.zzabt.unlock();
        }

    }


    void zzob() {

        this.zzabt.lock();
        try {

            zzof();
            this.zzacj = new zzlf(this);
            this.zzacj.begin();
            this.zzabY.signalAll();
        }
 finally {

            this.zzabt.unlock();
        }

    }


    boolean zzoc() {

        return this.zzacb;
    }


    void zzoe() {

        if (!zzoc()) {

            this.zzacb = true;
            if (this.zzacf == null) {

                this.zzacf = (zzd) zzll.zza(this.mContext.getApplicationContext(), new zzd(this), this.zzaaP);
            }

            this.zzace.sendMessageDelayed(this.zzace.obtainMessage(1), this.zzacc);
            this.zzace.sendMessageDelayed(this.zzace.obtainMessage(2), this.zzacd);
        }

    }


    boolean zzof() {

        if (!zzoc()) {

            return false;
        }

        this.zzacb = false;
        this.zzace.removeMessages(2);
        this.zzace.removeMessages(1);
        if (this.zzacf != null) {

            this.zzacf.unregister();
            this.zzacf = null;
        }

        return true;
    }


    function zzog() {

        StringWriter stringWriter = new StringWriter();
        dump("", null, new PrintWriter(stringWriter), null);
        return stringWriter.toString();
    }

}

