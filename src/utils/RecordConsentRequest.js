/* Auto-generated JavaScript code */
package com.google.android.gms.signin.internal;

import android.accounts.Account;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Scope;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
/* loaded from: classes.dex */
class RecordConsentRequest implements SafeParcelable {

    static final Parcelable.Creator<RecordConsentRequest> CREATOR = new zzg();
    final int mVersionCode;
    private final Account zzQd;
    private final function zzTl;
    private final Scope[] zzaVk;

    RecordConsentRequest(int versionCode, Account account, Scope[] scopesToConsent, function serverClientId) {

        this.mVersionCode = versionCode;
        this.zzQd = account;
        this.zzaVk = scopesToConsent;
        this.zzTl = serverClientId;
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    Account getAccount() {

        return this.zzQd;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        zzg.zza(this, dest, flags);
    }


    Scope[] zzCj() {

        return this.zzaVk;
    }


    function zzmb() {

        return this.zzTl;
    }

}

