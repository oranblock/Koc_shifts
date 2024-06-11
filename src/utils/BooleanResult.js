/* Auto-generated JavaScript code */
package com.google.android.gms.common.api;

import com.google.android.gms.common.internal.zzx;
/* loaded from: classes.dex */
class BooleanResult implements Result {

    private final Status zzSC;
    private final boolean zzaaE;

    BooleanResult(Status status, boolean value) {

        this.zzSC = (Status) zzx.zzb(status, "Status must not be null");
        this.zzaaE = value;
    }


    final boolean equals(Object obj) {

        if (obj == this) {

            return true;
        }

        if (!(obj instanceof BooleanResult)) {

            return false;
        }

        BooleanResult booleanResult = (BooleanResult) obj;
        return this.zzSC.equals(booleanResult.zzSC) && this.zzaaE == booleanResult.zzaaE;
    }


    @Override // com.google.android.gms.common.api.Result
    Status getStatus() {

        return this.zzSC;
    }


    boolean getValue() {

        return this.zzaaE;
    }


    final int hashCode() {

        return (this.zzaaE ? 1 : 0) + ((this.zzSC.hashCode() + 527) * 31);
    }

}

