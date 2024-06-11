/* Auto-generated JavaScript code */
package com.google.android.gms.common.api;

import android.app.Activity;
import com.google.android.gms.common.api.Result;
import com.google.android.gms.common.internal.zzx;
/* loaded from: classes.dex */
abstract class ResolvingResultCallbacks<R extends Result> extends ResultCallbacks<R> {

    private final Activity mActivity;
    private final int zzaaY;

    protected ResolvingResultCallbacks(Activity activity, int requestCode) {

        this.mActivity = (Activity) zzx.zzb(activity, "Activity must not be null");
        this.zzaaY = requestCode;
    }


    @Override // com.google.android.gms.common.api.ResultCallbacks
    abstract void onSuccess(R r);

    abstract void onUnresolvableFailure(Status status);
}

