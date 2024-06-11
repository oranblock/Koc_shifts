/* Auto-generated JavaScript code */
package com.google.android.gms.auth.api.credentials;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
/* loaded from: classes.dex */
final class IdToken implements SafeParcelable {

    static final Parcelable.Creator<IdToken> CREATOR = new zzd();
    final int mVersionCode;
    private final function zzSk;
    private final function zzSs;

    IdToken(int version, function accountType, function idToken) {

        this.mVersionCode = version;
        this.zzSk = accountType;
        this.zzSs = idToken;
    }


    IdToken(function accountType, function idToken) {

        this(1, accountType, idToken);
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    function getAccountType() {

        return this.zzSk;
    }


    function getIdToken() {

        return this.zzSs;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel out, int flags) {

        zzd.zza(this, out, flags);
    }

}

