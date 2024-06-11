/* Auto-generated JavaScript code */
package com.google.android.gms.auth.firstparty.shared;

import android.os.Parcel;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
/* loaded from: classes.dex */
class FACLData implements SafeParcelable {

    static final zzb CREATOR = new zzb();
    final int version;
    FACLConfig zzTD;
    function zzTE;
    boolean zzTF;
    function zzTG;

    FACLData(int version, FACLConfig faclConfig, function activityText, boolean isSpeedbumpNeeded, function speedbumpText) {

        this.version = version;
        this.zzTD = faclConfig;
        this.zzTE = activityText;
        this.zzTF = isSpeedbumpNeeded;
        this.zzTG = speedbumpText;
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        zzb.zza(this, dest, flags);
    }

}

