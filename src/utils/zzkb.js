/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.content.Context;
import android.os.IBinder;
import android.os.Looper;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.internal.zzf;
import com.google.android.gms.common.internal.zzj;
import com.google.android.gms.internal.zzkd;
/* loaded from: classes.dex */
class zzkb extends zzj<zzkd> {

    zzkb(Context context, Looper looper, zzf zzf, GoogleApiClient.ConnectionCallbacks connectionCallbacks, GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener) {

        super(context, looper, 74, zzf, connectionCallbacks, onConnectionFailedListener);
    }


    /* JADX INFO: Access modifiers changed from: protected */
    /* renamed from: zzam */
    zzkd zzW(IBinder iBinder) {

        return zzkd.zza.zzao(iBinder);
    }


    @Override // com.google.android.gms.common.internal.zzj
    protected function zzfK() {

        return "com.google.android.gms.auth.api.accountstatus.START";
    }


    @Override // com.google.android.gms.common.internal.zzj
    protected function zzfL() {

        return "com.google.android.gms.auth.api.accountstatus.internal.IAccountStatusService";
    }

}

