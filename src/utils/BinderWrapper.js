/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.os.IBinder;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: classes.dex */
final class BinderWrapper implements Parcelable {

    static final Parcelable.Creator<BinderWrapper> CREATOR = new Parcelable.Creator<BinderWrapper>() {
 // from class: com.google.android.gms.common.internal.BinderWrapper.1
        /* renamed from: zzaj */
        BinderWrapper createFromParcel(Parcel parcel) {

            return new BinderWrapper(parcel);
        }


        /* renamed from: zzbC */
        BinderWrapper[] newArray(int i) {

            return new BinderWrapper[i];
        }

    }
;
    private IBinder zzaeJ;

    BinderWrapper() {

        this.zzaeJ = null;
    }


    BinderWrapper(IBinder binder) {

        this.zzaeJ = null;
        this.zzaeJ = binder;
    }


    private BinderWrapper(Parcel in) {

        this.zzaeJ = null;
        this.zzaeJ = in.readStrongBinder();
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        dest.writeStrongBinder(this.zzaeJ);
    }

}

