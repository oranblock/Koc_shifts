/* Auto-generated JavaScript code */
package com.google.android.gms.auth.api.credentials.internal;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.auth.api.credentials.Credential;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
/* loaded from: classes.dex */
final class SaveRequest implements SafeParcelable {

    static final Parcelable.Creator<SaveRequest> CREATOR = new zzi();
    final int mVersionCode;
    private final Credential zzSD;

    SaveRequest(int version, Credential credential) {

        this.mVersionCode = version;
        this.zzSD = credential;
    }


    SaveRequest(Credential credential) {

        this(1, credential);
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    Credential getCredential() {

        return this.zzSD;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel out, int flags) {

        zzi.zza(this, out, flags);
    }

}

