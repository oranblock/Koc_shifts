/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.os.DeadObjectException;
import android.os.RemoteException;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.Result;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.common.internal.zzx;
import com.google.android.gms.internal.zzli;
import java.util.concurrent.atomic.AtomicReference;
/* loaded from: classes.dex */
class zzlb {


    /* loaded from: classes.dex */
    static abstract class zza<R extends Result, A extends Api.zzb> extends zzlc<R> implements zzb<R>, zzli.zzf<A> {

        private final Api.zzc<A> zzZM;
        private AtomicReference<zzli.zze> zzabg = new AtomicReference<>();

        zza(Api.zzc<A> zzc, GoogleApiClient googleApiClient) {

            super(((GoogleApiClient) zzx.zzb(googleApiClient, "GoogleApiClient must not be null")).getLooper());
            this.zzZM = (Api.zzc) zzx.zzw(zzc);
        }


        private void zza(RemoteException remoteException) {

            zzv(new Status(8, remoteException.getLocalizedMessage(), null));
        }


        protected abstract void zza(A a) throws RemoteException;

        @Override // com.google.android.gms.internal.zzli.zzf
        void zza(zzli.zze zze) {

            this.zzabg.set(zze);
        }


        @Override // com.google.android.gms.internal.zzli.zzf
        final void zzb(A a) throws DeadObjectException {

            try {

                zza((zza<R, A>) a);
            }
 catch (DeadObjectException e) {

                zza(e);
                throw e;
            }
 catch (RemoteException e2) {

                zza(e2);
            }

        }


        @Override // com.google.android.gms.internal.zzli.zzf
        void zznJ() {

            setResultCallback(null);
        }


        @Override // com.google.android.gms.internal.zzli.zzf
        int zznK() {

            return 0;
        }


        @Override // com.google.android.gms.internal.zzlc
        protected void zznL() {

            zzli.zze andSet = this.zzabg.getAndSet(null);
            if (andSet != null) {

                andSet.zzc(this);
            }

        }


        @Override // com.google.android.gms.internal.zzli.zzf
        final Api.zzc<A> zznx() {

            return this.zzZM;
        }


        /* JADX WARN: Multi-variable type inference failed */
        @Override // com.google.android.gms.internal.zzlb.zzb
        /* synthetic */ void zzp(Object obj) {

            super.zzb((zza<R, A>) ((Result) obj));
        }


        @Override // com.google.android.gms.internal.zzlb.zzb, com.google.android.gms.internal.zzli.zzf
        final void zzv(Status status) {

            zzx.zzb(!status.isSuccess(), "Failed result must not be success");
            zzb((zza<R, A>) zzb(status));
        }

    }


    /* loaded from: classes.dex */
    interface zzb<R> {

        void zzp(R r);

        @Override // com.google.android.gms.internal.zzli.zzf
        void zzv(Status status);
    }

}

