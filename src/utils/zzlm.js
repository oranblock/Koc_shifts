/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import com.google.android.gms.common.internal.zzx;
/* loaded from: classes.dex */
final class zzlm<L> {

    private volatile L mListener;
    private final zzlm<L>.zza zzacG;

    /* loaded from: classes.dex */
    private final class zza extends Handler {

        zza(Looper looper) {

            super(looper);
        }


        @Override // android.os.Handler
        void handleMessage(Message msg) {

            boolean z = true;
            if (msg.what != 1) {

                z = false;
            }

            zzx.zzaa(z);
            zzlm.this.zzb((zzb) msg.obj);
        }

    }


    /* loaded from: classes.dex */
    interface zzb<L> {

        void zznN();

        void zzq(L l);
    }


    zzlm(Looper looper, L l) {

        this.zzacG = new zza(looper);
        this.mListener = (L) zzx.zzb(l, "Listener must not be null");
    }


    void clear() {

        this.mListener = null;
    }


    void zza(zzb<? super L> zzb2) {

        zzx.zzb(zzb2, "Notifier must not be null");
        this.zzacG.sendMessage(this.zzacG.obtainMessage(1, zzb2));
    }


    void zzb(zzb<? super L> zzb2) {

        Object obj = (L) this.mListener;
        if (obj == null) {

            zzb2.zznN();
            return;
        }

        try {

            zzb2.zzq(obj);
        }
 catch (RuntimeException e) {

            zzb2.zznN();
            throw e;
        }

    }

}

