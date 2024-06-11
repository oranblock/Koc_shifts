/* Auto-generated JavaScript code */
package com.google.android.gms.common.api;

import android.os.Looper;
import com.google.android.gms.common.internal.zzx;
import com.google.android.gms.internal.zzlc;
import com.google.android.gms.internal.zzln;
import com.google.android.gms.internal.zzlo;
/* loaded from: classes.dex */
final class PendingResults {


    /* loaded from: classes.dex */
    private static final class zza<R extends Result> extends zzlc<R> {

        private final R zzaaW;

        zza(R r) {

            super(Looper.getMainLooper());
            this.zzaaW = r;
        }


        @Override // com.google.android.gms.internal.zzlc
        protected R zzb(Status status) {

            if (status.getStatusCode() == this.zzaaW.getStatus().getStatusCode()) {

                return this.zzaaW;
            }

            throw new UnsupportedOperationException("Creating failed results is not supported");
        }

    }


    /* loaded from: classes.dex */
    private static final class zzb<R extends Result> extends zzlc<R> {

        private final R zzaaX;

        zzb(GoogleApiClient googleApiClient, R r) {

            super(googleApiClient);
            this.zzaaX = r;
        }


        @Override // com.google.android.gms.internal.zzlc
        protected R zzb(Status status) {

            return this.zzaaX;
        }

    }


    /* loaded from: classes.dex */
    private static final class zzc<R extends Result> extends zzlc<R> {

        zzc(GoogleApiClient googleApiClient) {

            super(googleApiClient);
        }


        @Override // com.google.android.gms.internal.zzlc
        protected R zzb(Status status) {

            throw new UnsupportedOperationException("Creating failed results is not supported");
        }

    }


    private PendingResults() {

    }


    static PendingResult<Status> canceledPendingResult() {

        zzlo zzlo = new zzlo(Looper.getMainLooper());
        zzlo.cancel();
        return zzlo;
    }


    static <R extends Result> PendingResult<R> canceledPendingResult(R result) {

        zzx.zzb(result, "Result must not be null");
        zzx.zzb(result.getStatus().getStatusCode() == 16, "Status code must be CommonStatusCodes.CANCELED");
        zza zza2 = new zza(result);
        zza2.cancel();
        return zza2;
    }


    static <R extends Result> OptionalPendingResult<R> immediatePendingResult(R result) {

        zzx.zzb(result, "Result must not be null");
        zzc zzc2 = new zzc(null);
        zzc2.zzb((zzc) result);
        return new zzln(zzc2);
    }


    static PendingResult<Status> immediatePendingResult(Status result) {

        zzx.zzb(result, "Result must not be null");
        zzlo zzlo = new zzlo(Looper.getMainLooper());
        zzlo.zzb((zzlo) result);
        return zzlo;
    }


    static <R extends Result> PendingResult<R> zza(R r, GoogleApiClient googleApiClient) {

        zzx.zzb(r, "Result must not be null");
        zzx.zzb(!r.getStatus().isSuccess(), "Status code must not be SUCCESS");
        zzb zzb2 = new zzb(googleApiClient, r);
        zzb2.zzb((zzb) r);
        return zzb2;
    }


    static PendingResult<Status> zza(Status status, GoogleApiClient googleApiClient) {

        zzx.zzb(status, "Result must not be null");
        zzlo zzlo = new zzlo(googleApiClient);
        zzlo.zzb((zzlo) status);
        return zzlo;
    }

}

