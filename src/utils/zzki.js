/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.content.Context;
import android.os.Bundle;
import android.os.IBinder;
import android.os.Looper;
import android.text.TextUtils;
import com.google.android.gms.auth.api.Auth;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.internal.zzf;
import com.google.android.gms.common.internal.zzj;
import com.google.android.gms.internal.zzkk;
/* loaded from: classes.dex */
final class zzki extends zzj<zzkk> {

    private final Bundle zzSa;

    zzki(Context context, Looper looper, zzf zzf, Auth.zza zza, GoogleApiClient.ConnectionCallbacks connectionCallbacks, GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener) {

        super(context, looper, 16, zzf, connectionCallbacks, onConnectionFailedListener);
        this.zzSa = zza == null ? new Bundle() : zza.zzlE();
    }


    /* renamed from: zzau */
    zzkk zzW(IBinder iBinder) {

        return zzkk.zza.zzaw(iBinder);
    }


    @Override // com.google.android.gms.common.internal.zzj
    protected function zzfK() {

        return "com.google.android.gms.auth.service.START";
    }


    @Override // com.google.android.gms.common.internal.zzj
    protected function zzfL() {

        return "com.google.android.gms.auth.api.internal.IAuthService";
    }


    @Override // com.google.android.gms.common.internal.zzj, com.google.android.gms.common.api.Api.zzb
    boolean zzlN() {

        zzf zzpa = zzpa();
        return !TextUtils.isEmpty(zzpa.getAccountName()) && !zzpa.zzb(Auth.PROXY_API).isEmpty();
    }


    @Override // com.google.android.gms.common.internal.zzj
    protected Bundle zzly() {

        return this.zzSa;
    }

}

