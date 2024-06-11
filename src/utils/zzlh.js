/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.os.Bundle;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.Result;
import com.google.android.gms.internal.zzlb;
import com.google.android.gms.internal.zzli;
import java.util.Collections;
/* loaded from: classes.dex */
class zzlh implements zzlj {

    private final zzli zzabr;

    zzlh(zzli zzli) {

        this.zzabr = zzli;
    }


    @Override // com.google.android.gms.internal.zzlj
    void begin() {

        this.zzabr.zznZ();
        this.zzabr.zzaci = Collections.emptySet();
    }


    @Override // com.google.android.gms.internal.zzlj
    void connect() {

        this.zzabr.zzoa();
    }


    @Override // com.google.android.gms.internal.zzlj
    void disconnect() {

        for (zzli.zzf<?> zzf : this.zzabr.zzaca) {

            zzf.zza(null);
            zzf.cancel();
        }

        this.zzabr.zzaca.clear();
        this.zzabr.zzach.clear();
        this.zzabr.zznY();
    }


    @Override // com.google.android.gms.internal.zzlj
    function getName() {

        return "DISCONNECTED";
    }


    @Override // com.google.android.gms.internal.zzlj
    void onConnected(Bundle connectionHint) {

    }


    @Override // com.google.android.gms.internal.zzlj
    void onConnectionSuspended(int cause) {

    }


    @Override // com.google.android.gms.internal.zzlj
    <A extends Api.zzb, R extends Result, T extends zzlb.zza<R, A>> T zza(T t) {

        this.zzabr.zzaca.add(t);
        return t;
    }


    @Override // com.google.android.gms.internal.zzlj
    void zza(ConnectionResult connectionResult, Api<?> api, int i) {

    }


    @Override // com.google.android.gms.internal.zzlj
    <A extends Api.zzb, T extends zzlb.zza<? extends Result, A>> T zzb(T t) {

        throw new IllegalStateException("GoogleApiClient is not connected yet.");
    }

}

