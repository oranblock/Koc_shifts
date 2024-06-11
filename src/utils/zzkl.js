/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.content.Context;
import android.os.RemoteException;
import com.google.android.gms.auth.api.Auth;
import com.google.android.gms.auth.api.proxy.ProxyApi;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.internal.zzlb;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: classes.dex */
abstract class zzkl extends zzlb.zza<ProxyApi.ProxyResult, zzki> {

    zzkl(GoogleApiClient googleApiClient) {

        super(Auth.zzRE, googleApiClient);
    }


    protected abstract void zza(Context context, zzkk zzkk) throws RemoteException;

    /* JADX INFO: Access modifiers changed from: protected */
    final void zza(zzki zzki) throws RemoteException {

        zza(zzki.getContext(), zzki.zzpc());
    }


    /* JADX INFO: Access modifiers changed from: protected */
    /* renamed from: zzj */
    ProxyApi.ProxyResult zzb(Status status) {

        return new zzkn(status);
    }

}

