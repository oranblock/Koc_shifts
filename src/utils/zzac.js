/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.content.Context;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.GoogleApiClient;
/* loaded from: classes.dex */
class zzac<T extends IInterface> extends zzj<T> {

    private final Api.zzd<T> zzagt;

    zzac(Context context, Looper looper, int i, GoogleApiClient.ConnectionCallbacks connectionCallbacks, GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener, zzf zzf, Api.zzd zzd) {

        super(context, looper, i, zzf, connectionCallbacks, onConnectionFailedListener);
        this.zzagt = zzd;
    }


    @Override // com.google.android.gms.common.internal.zzj
    protected T zzW(IBinder iBinder) {

        return this.zzagt.zzW(iBinder);
    }


    @Override // com.google.android.gms.common.internal.zzj
    protected void zzc(int i, T t) {

        this.zzagt.zza(i, t);
    }


    @Override // com.google.android.gms.common.internal.zzj
    protected function zzfK() {

        return this.zzagt.zzfK();
    }


    @Override // com.google.android.gms.common.internal.zzj
    protected function zzfL() {

        return this.zzagt.zzfL();
    }

}

