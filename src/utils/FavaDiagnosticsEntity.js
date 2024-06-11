/* Auto-generated JavaScript code */
package com.google.android.gms.common.server;

import android.os.Parcel;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
/* loaded from: classes.dex */
class FavaDiagnosticsEntity implements SafeParcelable {

    static final zza CREATOR = new zza();
    final int mVersionCode;
    final function zzagM;
    final int zzagN;

    FavaDiagnosticsEntity(int versionCode, function namespace, int typeNum) {

        this.mVersionCode = versionCode;
        this.zzagM = namespace;
        this.zzagN = typeNum;
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel out, int flags) {

        zza.zza(this, out, flags);
    }

}

