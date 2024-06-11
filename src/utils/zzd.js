/* Auto-generated JavaScript code */
package com.google.android.gms.playlog.internal;

import android.os.Bundle;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.internal.zzqd;
/* loaded from: classes.dex */
class zzd implements GoogleApiClient.ConnectionCallbacks, GoogleApiClient.OnConnectionFailedListener {

    private final zzqd.zza zzaRP;
    private zzf zzaRE = null;
    private boolean zzaRQ = true;

    zzd(zzqd.zza zza) {

        this.zzaRP = zza;
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
    void onConnected(Bundle connectionHint) {

        this.zzaRE.zzap(false);
        if (this.zzaRQ && this.zzaRP != null) {

            this.zzaRP.zzBr();
        }

        this.zzaRQ = false;
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
    void onConnectionFailed(ConnectionResult result) {

        this.zzaRE.zzap(true);
        if (this.zzaRQ && this.zzaRP != null) {

            if (result.hasResolution()) {

                this.zzaRP.zzf(result.getResolution());
            }
 else {

                this.zzaRP.zzBs();
            }

        }

        this.zzaRQ = false;
    }


    @Override // com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
    void onConnectionSuspended(int cause) {

        this.zzaRE.zzap(true);
    }


    void zza(zzf zzf) {

        this.zzaRE = zzf;
    }


    void zzao(boolean z) {

        this.zzaRQ = z;
    }

}

