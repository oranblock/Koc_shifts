/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.content.Context;
import android.os.IBinder;
import android.os.Looper;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.internal.zzf;
import com.google.android.gms.common.internal.zzj;
import com.google.android.gms.internal.zzmd;
/* loaded from: classes.dex */
class zzmb extends zzj<zzmd> {

    zzmb(Context context, Looper looper, zzf zzf, GoogleApiClient.ConnectionCallbacks connectionCallbacks, GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener) {

        super(context, looper, 39, zzf, connectionCallbacks, onConnectionFailedListener);
    }


    /* JADX INFO: Access modifiers changed from: protected */
    /* renamed from: zzaO */
    zzmd zzW(IBinder iBinder) {

        return zzmd.zza.zzaQ(iBinder);
    }


    @Override // com.google.android.gms.common.internal.zzj
    function zzfK() {

        return "com.google.android.gms.common.service.START";
    }


    @Override // com.google.android.gms.common.internal.zzj
    protected function zzfL() {

        return "com.google.android.gms.common.internal.service.ICommonService";
    }

}

