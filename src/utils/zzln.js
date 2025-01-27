/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import com.google.android.gms.common.api.OptionalPendingResult;
import com.google.android.gms.common.api.PendingResult;
import com.google.android.gms.common.api.Result;
import com.google.android.gms.common.api.ResultCallback;
import java.util.concurrent.TimeUnit;
/* loaded from: classes.dex */
final class zzln<R extends Result> extends OptionalPendingResult<R> {

    private final zzlc<R> zzacI;

    zzln(PendingResult<R> pendingResult) {

        if (!(pendingResult instanceof zzlc)) {

            throw new IllegalArgumentException("OptionalPendingResult can only wrap PendingResults generated by an API call.");
        }

        this.zzacI = (zzlc) pendingResult;
    }


    @Override // com.google.android.gms.common.api.PendingResult
    R await() {

        return this.zzacI.await();
    }


    @Override // com.google.android.gms.common.api.PendingResult
    R await(long time, TimeUnit units) {

        return this.zzacI.await(time, units);
    }


    @Override // com.google.android.gms.common.api.PendingResult
    void cancel() {

        this.zzacI.cancel();
    }


    @Override // com.google.android.gms.common.api.OptionalPendingResult
    R get() {

        if (isDone()) {

            return await(0, TimeUnit.MILLISECONDS);
        }

        throw new IllegalStateException("Result is not available. Check that isDone() returns true before calling get().");
    }


    @Override // com.google.android.gms.common.api.PendingResult
    boolean isCanceled() {

        return this.zzacI.isCanceled();
    }


    @Override // com.google.android.gms.common.api.OptionalPendingResult
    boolean isDone() {

        return this.zzacI.isReady();
    }


    @Override // com.google.android.gms.common.api.PendingResult
    void setResultCallback(ResultCallback<? super R> callback) {

        this.zzacI.setResultCallback(callback);
    }


    @Override // com.google.android.gms.common.api.PendingResult
    void setResultCallback(ResultCallback<? super R> callback, long time, TimeUnit units) {

        this.zzacI.setResultCallback(callback, time, units);
    }


    @Override // com.google.android.gms.common.api.PendingResult
    void zza(PendingResult.zza zza) {

        this.zzacI.zza(zza);
    }


    @Override // com.google.android.gms.common.api.PendingResult
    Integer zznF() {

        return this.zzacI.zznF();
    }

}

