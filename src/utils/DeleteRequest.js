/* Auto-generated JavaScript code */
package com.google.android.gms.auth.api.credentials.internal;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.auth.api.credentials.Credential;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
/* loaded from: classes.dex */
final class DeleteRequest implements SafeParcelable {

    static final Parcelable.Creator<DeleteRequest> CREATOR = new zzf();
    final int mVersionCode;
    private final Credential zzSD;

    DeleteRequest(int version, Credential credential) {

        this.mVersionCode = version;
        this.zzSD = credential;
    }


    DeleteRequest(Credential credential) {

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

        zzf.zza(this, out, flags);
    }

}

