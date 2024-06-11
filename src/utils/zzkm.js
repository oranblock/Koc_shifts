/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.content.Context;
import android.os.RemoteException;
import com.google.android.gms.auth.api.proxy.ProxyApi;
import com.google.android.gms.auth.api.proxy.ProxyRequest;
import com.google.android.gms.auth.api.proxy.ProxyResponse;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.PendingResult;
import com.google.android.gms.common.internal.zzx;
/* loaded from: classes.dex */
class zzkm implements ProxyApi {

    @Override // com.google.android.gms.auth.api.proxy.ProxyApi
    PendingResult<ProxyApi.ProxyResult> performProxyRequest(GoogleApiClient client, final ProxyRequest request) {

        zzx.zzw(client);
        zzx.zzw(request);
        return client.zzb(new zzkl(client) {
 // from class: com.google.android.gms.internal.zzkm.1
            @Override // com.google.android.gms.internal.zzkl
            protected void zza(Context context, zzkk zzkk) throws RemoteException {

                zzkk.zza(new zzkh() {
 // from class: com.google.android.gms.internal.zzkm.1.1
                    @Override // com.google.android.gms.internal.zzkh, com.google.android.gms.internal.zzkj
                    void zza(ProxyResponse proxyResponse) {

                        AnonymousClass1.this.zzb((AnonymousClass1) new zzkn(proxyResponse));
                    }

                }
, request);
            }

        }
);
    }

}

