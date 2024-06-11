/* Auto-generated JavaScript code */
package com.google.android.gms.common.api;

import com.google.android.gms.common.api.Result;
import java.util.concurrent.TimeUnit;
/* loaded from: classes.dex */
abstract class PendingResult<R extends Result> {


    /* loaded from: classes.dex */
    interface zza {

        void zzt(Status status);
    }


    abstract R await();

    abstract R await(long j, TimeUnit timeUnit);

    abstract void cancel();

    abstract boolean isCanceled();

    abstract void setResultCallback(ResultCallback<? super R> resultCallback);

    abstract void setResultCallback(ResultCallback<? super R> resultCallback, long j, TimeUnit timeUnit);

    void zza(zza zza2) {

        throw new UnsupportedOperationException();
    }


    Integer zznF() {

        throw new UnsupportedOperationException();
    }

}

