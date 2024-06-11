/* Auto-generated JavaScript code */
package com.google.android.gms.common.api;

import com.google.android.gms.common.internal.zzx;
import java.util.concurrent.TimeUnit;
/* loaded from: classes.dex */
final class BatchResult implements Result {

    private final Status zzSC;
    private final PendingResult<?>[] zzaaB;

    /* JADX INFO: Access modifiers changed from: package-private */
    BatchResult(Status status, PendingResult<?>[] pendingResults) {

        this.zzSC = status;
        this.zzaaB = pendingResults;
    }


    @Override // com.google.android.gms.common.api.Result
    Status getStatus() {

        return this.zzSC;
    }


    <R extends Result> R take(BatchResultToken<R> resultToken) {

        zzx.zzb(resultToken.mId < this.zzaaB.length, "The result token does not belong to this batch");
        return (R) this.zzaaB[resultToken.mId].await(0, TimeUnit.MILLISECONDS);
    }

}

