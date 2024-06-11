/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.content.Context;
import android.os.Looper;
import com.google.android.gms.common.Scopes;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.Scope;
import com.google.android.gms.common.internal.zzf;
import com.google.android.gms.signin.internal.zzh;
import com.google.android.gms.signin.internal.zzi;
import java.util.concurrent.Executors;
/* loaded from: classes.dex */
final class zzqu {

    static final Api.zzc<zzi> zzRk = new Api.zzc<>();
    static final Api.zzc<zzi> zzapF = new Api.zzc<>();
    static final Api.zza<zzi, zzqx> zzRl = new Api.zza<zzi, zzqx>() {
 // from class: com.google.android.gms.internal.zzqu.1
        zzi zza(Context context, Looper looper, zzf zzf, zzqx zzqx, GoogleApiClient.ConnectionCallbacks connectionCallbacks, GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener) {

            return new zzi(context, looper, true, zzf, zzqx == null ? zzqx.zzaUZ : zzqx, connectionCallbacks, onConnectionFailedListener, Executors.newSingleThreadExecutor());
        }

    }
;
    static final Api.zza<zzi, Api.ApiOptions.NoOptions> zzaUX = new Api.zza<zzi, Api.ApiOptions.NoOptions>() {
 // from class: com.google.android.gms.internal.zzqu.2
        /* renamed from: zzt */
        zzi zza(Context context, Looper looper, zzf zzf, Api.ApiOptions.NoOptions noOptions, GoogleApiClient.ConnectionCallbacks connectionCallbacks, GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener) {

            return new zzi(context, looper, false, zzf, zzqx.zzaUZ, connectionCallbacks, onConnectionFailedListener, Executors.newSingleThreadExecutor());
        }

    }
;
    static final Scope zzTe = new Scope(Scopes.PROFILE);
    static final Scope zzTf = new Scope("email");
    static final Api<zzqx> API = new Api<>("SignIn.API", zzRl, zzRk);
    static final Api<Api.ApiOptions.NoOptions> zzaiH = new Api<>("SignIn.INTERNAL_API", zzaUX, zzapF);
    static final zzqv zzaUY = new zzh();
}

