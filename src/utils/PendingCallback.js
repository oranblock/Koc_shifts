/* Auto-generated JavaScript code */
package com.google.android.gms.gcm;

import android.os.IBinder;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: classes.dex */
class PendingCallback implements Parcelable {

    static final Parcelable.Creator<PendingCallback> CREATOR = new Parcelable.Creator<PendingCallback>() {
 // from class: com.google.android.gms.gcm.PendingCallback.1
        /* renamed from: zzet */
        PendingCallback createFromParcel(Parcel parcel) {

            return new PendingCallback(parcel);
        }


        /* renamed from: zzgD */
        PendingCallback[] newArray(int i) {

            return new PendingCallback[i];
        }

    }
;
    final IBinder zzaeJ;

    PendingCallback(Parcel in) {

        this.zzaeJ = in.readStrongBinder();
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    IBinder getIBinder() {

        return this.zzaeJ;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel parcel, int i) {

        parcel.writeStrongBinder(this.zzaeJ);
    }

}

