/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.os.IBinder;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import com.google.android.gms.common.internal.zzp;
/* loaded from: classes.dex */
class ResolveAccountResponse implements SafeParcelable {

    static final Parcelable.Creator<ResolveAccountResponse> CREATOR = new zzz();
    final int mVersionCode;
    private boolean zzabG;
    IBinder zzaeH;
    private ConnectionResult zzagq;
    private boolean zzagr;

    ResolveAccountResponse(int connectionResultStatusCode) {

        this(new ConnectionResult(connectionResultStatusCode, null));
    }


    ResolveAccountResponse(int versionCode, IBinder accountAccessorBinder, ConnectionResult connectionResult, boolean saveDefaultAccount, boolean isFromCrossClientAuth) {

        this.mVersionCode = versionCode;
        this.zzaeH = accountAccessorBinder;
        this.zzagq = connectionResult;
        this.zzabG = saveDefaultAccount;
        this.zzagr = isFromCrossClientAuth;
    }


    ResolveAccountResponse(ConnectionResult result) {

        this(1, null, result, false, false);
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

        if (!(o instanceof ResolveAccountResponse)) {

            return false;
        }

        ResolveAccountResponse resolveAccountResponse = (ResolveAccountResponse) o;
        return this.zzagq.equals(resolveAccountResponse.zzagq) && zzpq().equals(resolveAccountResponse.zzpq());
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        zzz.zza(this, dest, flags);
    }


    zzp zzpq() {

        return zzp.zza.zzaH(this.zzaeH);
    }


    ConnectionResult zzpr() {

        return this.zzagq;
    }


    boolean zzps() {

        return this.zzabG;
    }


    boolean zzpt() {

        return this.zzagr;
    }

}

