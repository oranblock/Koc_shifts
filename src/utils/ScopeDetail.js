/* Auto-generated JavaScript code */
package com.google.android.gms.auth.firstparty.shared;

import android.os.Parcel;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import java.util.List;
/* loaded from: classes.dex */
class ScopeDetail implements SafeParcelable {

    static final zzc CREATOR = new zzc();
    function description;
    final int version;
    function zzTH;
    function zzTI;
    function zzTJ;
    function zzTK;
    List<String> zzTL;
    FACLData zzTM;

    ScopeDetail(int version, function description, function detail, function iconBase64, function paclPickerDataBase64, function service, List<String> warnings, FACLData friendPickerData) {

        this.version = version;
        this.description = description;
        this.zzTH = detail;
        this.zzTI = iconBase64;
        this.zzTJ = paclPickerDataBase64;
        this.zzTK = service;
        this.zzTL = warnings;
        this.zzTM = friendPickerData;
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        zzc.zza(this, dest, flags);
    }

}

