/* Auto-generated JavaScript code */
package com.google.android.gms.auth;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import com.google.android.gms.common.internal.zzx;
import java.util.List;
/* loaded from: classes.dex */
class AccountChangeEventsResponse implements SafeParcelable {

    static final Parcelable.Creator<AccountChangeEventsResponse> CREATOR = new zzc();
    final int mVersion;
    final List<AccountChangeEvent> zzoQ;

    AccountChangeEventsResponse(int version, List<AccountChangeEvent> events) {

        this.mVersion = version;
        this.zzoQ = (List) zzx.zzw(events);
    }


    AccountChangeEventsResponse(List<AccountChangeEvent> events) {

        this.mVersion = 1;
        this.zzoQ = (List) zzx.zzw(events);
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    List<AccountChangeEvent> getEvents() {

        return this.zzoQ;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        zzc.zza(this, dest, flags);
    }

}

