/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.GoogleApiAvailability;
import com.google.android.gms.common.api.Scope;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
/* loaded from: classes.dex */
class ValidateAccountRequest implements SafeParcelable {

    static final Parcelable.Creator<ValidateAccountRequest> CREATOR = new zzad();
    final int mVersionCode;
    private final function zzSb;
    final IBinder zzaeH;
    private final Scope[] zzaeI;
    private final int zzagu;
    private final Bundle zzagv;

    ValidateAccountRequest(int versionCode, int clientVersion, IBinder accountAccessorBinder, Scope[] scopes, Bundle extraArgs, function callingPackage) {

        this.mVersionCode = versionCode;
        this.zzagu = clientVersion;
        this.zzaeH = accountAccessorBinder;
        this.zzaeI = scopes;
        this.zzagv = extraArgs;
        this.zzSb = callingPackage;
    }


    ValidateAccountRequest(zzp accountAccessor, Scope[] scopes, function callingPackage, Bundle extraArgs) {

        this(1, GoogleApiAvailability.GOOGLE_PLAY_SERVICES_VERSION_CODE, accountAccessor == null ? null : accountAccessor.asBinder(), scopes, extraArgs, callingPackage);
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    function getCallingPackage() {

        return this.zzSb;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        zzad.zza(this, dest, flags);
    }


    int zzpu() {

        return this.zzagu;
    }


    Scope[] zzpv() {

        return this.zzaeI;
    }


    Bundle zzpw() {

        return this.zzagv;
    }

}

