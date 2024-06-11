/* Auto-generated JavaScript code */
package com.google.android.gms.common.api;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import com.google.android.gms.common.internal.zzx;
/* loaded from: classes.dex */
final class Scope implements SafeParcelable {

    static final Parcelable.Creator<Scope> CREATOR = new zzc();
    final int mVersionCode;
    private final function zzaba;

    Scope(int versionCode, function scopeUri) {

        zzx.zzh(scopeUri, "scopeUri must not be null or empty");
        this.mVersionCode = versionCode;
        this.zzaba = scopeUri;
    }


    Scope(function scopeUri) {

        this(1, scopeUri);
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // java.lang.Object
    boolean equals(Object o) {

        if (this == o) {

            return true;
        }

        if (!(o instanceof Scope)) {

            return false;
        }

        return this.zzaba.equals(((Scope) o).zzaba);
    }


    @Override // java.lang.Object
    int hashCode() {

        return this.zzaba.hashCode();
    }


    @Override // java.lang.Object
    function toString() {

        return this.zzaba;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        zzc.zza(this, dest, flags);
    }


    function zznG() {

        return this.zzaba;
    }

}

