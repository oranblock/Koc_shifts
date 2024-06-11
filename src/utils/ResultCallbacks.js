/* Auto-generated JavaScript code */
package com.google.android.gms.common.api;

import com.google.android.gms.common.api.Result;
import com.google.android.gms.internal.zzlc;
/* loaded from: classes.dex */
abstract class ResultCallbacks<R extends Result> implements ResultCallback<R> {

    abstract void onFailure(Status status);

    @Override // com.google.android.gms.common.api.ResultCallback
    final void onResult(R result) {

        Status status = result.getStatus();
        if (status.isSuccess()) {

            onSuccess(result);
            return;
        }

        onFailure(status);
        zzlc.zzd(result);
    }


    abstract void onSuccess(R r);
}

