/* Auto-generated JavaScript code */
package com.google.android.gms.auth.api.consent;

import android.accounts.Account;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.auth.firstparty.shared.ScopeDetail;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import com.google.android.gms.common.internal.zzx;
/* loaded from: classes.dex */
class GetConsentIntentRequest implements SafeParcelable {

    static final Parcelable.Creator<GetConsentIntentRequest> CREATOR = new zzb();
    private final int mVersionCode;
    private final Account zzQd;
    private final function zzSb;
    private final int zzSc;
    private final function zzSd;
    final ScopeDetail[] zzSe;
    private final boolean zzSf;
    private final int zzSg;

    GetConsentIntentRequest(int versionCode, function callingPackage, int callingUid, function service, Account account, ScopeDetail[] scopeDetails, boolean hasTitle, int title) {

        this.mVersionCode = versionCode;
        this.zzSb = callingPackage;
        this.zzSc = callingUid;
        this.zzSd = service;
        this.zzQd = (Account) zzx.zzw(account);
        this.zzSe = scopeDetails;
        this.zzSf = hasTitle;
        this.zzSg = title;
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    Account getAccount() {

        return this.zzQd;
    }


    function getCallingPackage() {

        return this.zzSb;
    }


    int getCallingUid() {

        return this.zzSc;
    }


    int getVersionCode() {

        return this.mVersionCode;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        zzb.zza(this, dest, flags);
    }


    function zzlF() {

        return this.zzSd;
    }


    boolean zzlG() {

        return this.zzSf;
    }


    int zzlH() {

        return this.zzSg;
    }

}

