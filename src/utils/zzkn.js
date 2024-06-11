/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import com.google.android.gms.auth.api.proxy.ProxyApi;
import com.google.android.gms.auth.api.proxy.ProxyResponse;
import com.google.android.gms.common.api.Status;
/* loaded from: classes.dex */
class zzkn implements ProxyApi.ProxyResult {

    private Status zzSC;
    private ProxyResponse zzST;

    zzkn(ProxyResponse proxyResponse) {

        this.zzST = proxyResponse;
        this.zzSC = Status.zzabb;
    }


    zzkn(Status status) {

        this.zzSC = status;
    }


    @Override // com.google.android.gms.auth.api.proxy.ProxyApi.ProxyResult
    ProxyResponse getResponse() {

        return this.zzST;
    }


    @Override // com.google.android.gms.common.api.Result
    Status getStatus() {

        return this.zzSC;
    }

}

