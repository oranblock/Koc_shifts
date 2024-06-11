/* Auto-generated JavaScript code */
package com.google.android.gms.signin.internal;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
/* loaded from: classes.dex */
class AuthAccountResult implements SafeParcelable {

    static final Parcelable.Creator<AuthAccountResult> CREATOR = new zza();
    final int mVersionCode;

    AuthAccountResult() {

        this(1);
    }


    AuthAccountResult(int versionCode) {

        this.mVersionCode = versionCode;
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        zza.zza(this, dest, flags);
    }

}

