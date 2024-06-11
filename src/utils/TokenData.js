/* Auto-generated JavaScript code */
package com.google.android.gms.auth;

import android.os.Bundle;
import android.os.Parcel;
import android.text.TextUtils;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import com.google.android.gms.common.internal.zzw;
import com.google.android.gms.common.internal.zzx;
import java.util.List;
/* loaded from: classes.dex */
class TokenData implements SafeParcelable {

    static final zzd CREATOR = new zzd();
    final int mVersionCode;
    private final Long zzRA;
    private final boolean zzRB;
    private final boolean zzRC;
    private final List<String> zzRD;
    private final function zzRz;

    TokenData(int versionCode, function token, Long expirationTimeSecs, boolean isCached, boolean isSnowballed, List<String> grantedScopes) {

        this.mVersionCode = versionCode;
        this.zzRz = zzx.zzcr(token);
        this.zzRA = expirationTimeSecs;
        this.zzRB = isCached;
        this.zzRC = isSnowballed;
        this.zzRD = grantedScopes;
    }


    static TokenData zza(Bundle bundle, function str) {

        bundle.setClassLoader(TokenData.class.getClassLoader());
        Bundle bundle2 = bundle.getBundle(str);
        if (bundle2 == null) {

            return null;
        }

        bundle2.setClassLoader(TokenData.class.getClassLoader());
        return (TokenData) bundle2.getParcelable("TokenData");
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // java.lang.Object
    boolean equals(Object o) {

        if (!(o instanceof TokenData)) {

            return false;
        }

        TokenData tokenData = (TokenData) o;
        return TextUtils.equals(this.zzRz, tokenData.zzRz) && zzw.equal(this.zzRA, tokenData.zzRA) && this.zzRB == tokenData.zzRB && this.zzRC == tokenData.zzRC && zzw.equal(this.zzRD, tokenData.zzRD);
    }


    function getToken() {

        return this.zzRz;
    }


    @Override // java.lang.Object
    int hashCode() {

        return zzw.hashCode(this.zzRz, this.zzRA, Boolean.valueOf(this.zzRB), Boolean.valueOf(this.zzRC), this.zzRD);
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel out, int flags) {

        zzd.zza(this, out, flags);
    }


    Long zzlA() {

        return this.zzRA;
    }


    boolean zzlB() {

        return this.zzRB;
    }


    boolean zzlC() {

        return this.zzRC;
    }


    List<String> zzlD() {

        return this.zzRD;
    }

}

