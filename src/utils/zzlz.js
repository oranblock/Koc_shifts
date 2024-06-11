/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.os.RemoteException;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.PendingResult;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.internal.zzlb;
import com.google.android.gms.internal.zzma;
/* loaded from: classes.dex */
final class zzlz implements zzly {


    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    static class zza extends zzlw {

        private final zzlb.zzb<Status> zzagy;

        zza(zzlb.zzb<Status> zzb) {

            this.zzagy = zzb;
        }


        @Override // com.google.android.gms.internal.zzlw, com.google.android.gms.internal.zzmc
        void zzbN(int i) throws RemoteException {

            this.zzagy.zzp(new Status(i));
        }

    }


    @Override // com.google.android.gms.internal.zzly
    PendingResult<Status> zzb(GoogleApiClient googleApiClient) {

        return googleApiClient.zzb(new zzma.zza(googleApiClient) {
 // from class: com.google.android.gms.internal.zzlz.1
            /* JADX INFO: Access modifiers changed from: protected */
            void zza(zzmb zzmb) throws RemoteException {

                zzmb.zzpc().zza(new zza(this));
            }

        }
);
    }

}

