/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.content.Context;
import android.os.Looper;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.internal.zzf;
/* loaded from: classes.dex */
final class zzlx {

    static final Api.zzc<zzmb> zzRk = new Api.zzc<>();
    private static final Api.zza<zzmb, Api.ApiOptions.NoOptions> zzRl = new Api.zza<zzmb, Api.ApiOptions.NoOptions>() {
 // from class: com.google.android.gms.internal.zzlx.1
        /* renamed from: zze */
        zzmb zza(Context context, Looper looper, zzf zzf, Api.ApiOptions.NoOptions noOptions, GoogleApiClient.ConnectionCallbacks connectionCallbacks, GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener) {

            return new zzmb(context, looper, zzf, connectionCallbacks, onConnectionFailedListener);
        }

    }
;
    static final Api<Api.ApiOptions.NoOptions> API = new Api<>("Common.API", zzRl, zzRk);
    static final zzly zzagw = new zzlz();
}

