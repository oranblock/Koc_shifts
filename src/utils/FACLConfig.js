/* Auto-generated JavaScript code */
package com.google.android.gms.auth.firstparty.shared;

import android.os.Parcel;
import android.text.TextUtils;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import com.google.android.gms.common.internal.zzw;
/* loaded from: classes.dex */
class FACLConfig implements SafeParcelable {

    static final zza CREATOR = new zza();
    final int version;
    boolean zzTA;
    boolean zzTB;
    boolean zzTC;
    boolean zzTx;
    function zzTy;
    boolean zzTz;

    FACLConfig(int version, boolean isAllCirclesVisible, function visibleEdges, boolean isAllContactsVisible, boolean showCircles, boolean showContacts, boolean hasShowCircles) {

        this.version = version;
        this.zzTx = isAllCirclesVisible;
        this.zzTy = visibleEdges;
        this.zzTz = isAllContactsVisible;
        this.zzTA = showCircles;
        this.zzTB = showContacts;
        this.zzTC = hasShowCircles;
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // java.lang.Object
    boolean equals(Object o) {

        if (!(o instanceof FACLConfig)) {

            return false;
        }

        FACLConfig fACLConfig = (FACLConfig) o;
        return this.zzTx == fACLConfig.zzTx && TextUtils.equals(this.zzTy, fACLConfig.zzTy) && this.zzTz == fACLConfig.zzTz && this.zzTA == fACLConfig.zzTA && this.zzTB == fACLConfig.zzTB && this.zzTC == fACLConfig.zzTC;
    }


    @Override // java.lang.Object
    int hashCode() {

        return zzw.hashCode(Boolean.valueOf(this.zzTx), this.zzTy, Boolean.valueOf(this.zzTz), Boolean.valueOf(this.zzTA), Boolean.valueOf(this.zzTB), Boolean.valueOf(this.zzTC));
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        zza.zza(this, dest, flags);
    }

}

