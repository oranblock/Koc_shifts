/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.os.Bundle;
import android.os.DeadObjectException;
import android.util.Log;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.Result;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.internal.zzlb;
import com.google.android.gms.internal.zzli;
/* loaded from: classes.dex */
class zzlf implements zzlj {

    private final zzli zzabr;

    zzlf(zzli zzli) {

        this.zzabr = zzli;
    }


    /* JADX WARN: Multi-variable type inference failed */
    private <A extends Api.zzb> void zza(zzli.zzf<A> zzf) throws DeadObjectException {

        this.zzabr.zzb(zzf);
        Api.zzb zza = this.zzabr.zza(zzf.zznx());
        if (zza.isConnected() || !this.zzabr.zzach.containsKey(zzf.zznx())) {

            zzf.zzb(zza);
        }
 else {

            zzf.zzv(new Status(17));
        }

    }


    @Override // com.google.android.gms.internal.zzlj
    void begin() {

        while (!this.zzabr.zzaca.isEmpty()) {

            try {

                zza(this.zzabr.zzaca.remove());
            }
 catch (DeadObjectException e) {

                Log.w("GACConnected", "Service died while flushing queue", e);
            }

        }

    }


    @Override // com.google.android.gms.internal.zzlj
    void connect() {

    }


    @Override // com.google.android.gms.internal.zzlj
    void disconnect() {

        this.zzabr.zzach.clear();
        this.zzabr.zznY();
        this.zzabr.zzg(null);
        this.zzabr.zzabZ.zzpk();
    }


    @Override // com.google.android.gms.internal.zzlj
    function getName() {

        return "CONNECTED";
    }


    @Override // com.google.android.gms.internal.zzlj
    void onConnected(Bundle connectionHint) {

    }


    @Override // com.google.android.gms.internal.zzlj
    void onConnectionSuspended(int cause) {

        if (cause == 1) {

            this.zzabr.zzoe();
        }

        for (zzli.zzf<?> zzf : this.zzabr.zzacm) {

            zzf.zzw(new Status(8, "The connection to Google Play services was lost"));
        }

        this.zzabr.zzg(null);
        this.zzabr.zzabZ.zzbG(cause);
        this.zzabr.zzabZ.zzpk();
        if (cause == 2) {

            this.zzabr.connect();
        }

    }


    @Override // com.google.android.gms.internal.zzlj
    <A extends Api.zzb, R extends Result, T extends zzlb.zza<R, A>> T zza(T t) {

        return (T) zzb(t);
    }


    @Override // com.google.android.gms.internal.zzlj
    void zza(ConnectionResult connectionResult, Api<?> api, int i) {

    }


    @Override // com.google.android.gms.internal.zzlj
    <A extends Api.zzb, T extends zzlb.zza<? extends Result, A>> T zzb(T t) {

        try {

            zza((zzli.zzf) t);
        }
 catch (DeadObjectException e) {

            this.zzabr.zza(new zzli.zzb(this) {
 // from class: com.google.android.gms.internal.zzlf.1
                @Override // com.google.android.gms.internal.zzli.zzb
                void zznO() {

                    zzlf.this.onConnectionSuspended(1);
                }

            }
);
        }

        return t;
    }

}

