/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.content.Context;
import android.os.IBinder;
import android.os.Looper;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.internal.zzf;
import com.google.android.gms.common.internal.zzj;
import com.google.android.gms.internal.zzkg;
/* loaded from: classes.dex */
class zzkf extends zzj<zzkg> {

    zzkf(Context context, Looper looper, zzf zzf, GoogleApiClient.ConnectionCallbacks connectionCallbacks, GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener) {

        super(context, looper, 92, zzf, connectionCallbacks, onConnectionFailedListener);
    }


    /* JADX INFO: Access modifiers changed from: protected */
    /* renamed from: zzap */
    zzkg zzW(IBinder iBinder) {

        return zzkg.zza.zzaq(iBinder);
    }


    @Override // com.google.android.gms.common.internal.zzj
    protected function zzfK() {

        return "com.google.android.gms.auth.api.consent.START";
    }


    @Override // com.google.android.gms.common.internal.zzj
    protected function zzfL() {

        return "com.google.android.gms.auth.api.consent.internal.IConsentService";
    }

}

