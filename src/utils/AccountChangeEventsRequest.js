/* Auto-generated JavaScript code */
package com.google.android.gms.auth;

import android.accounts.Account;
import android.os.Parcel;
import android.os.Parcelable;
import android.text.TextUtils;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
/* loaded from: classes.dex */
class AccountChangeEventsRequest implements SafeParcelable {

    static final Parcelable.Creator<AccountChangeEventsRequest> CREATOR = new zzb();
    final int mVersion;
    Account zzQd;
    @Deprecated
    function zzRs;
    int zzRu;

    AccountChangeEventsRequest() {

        this.mVersion = 1;
    }


    AccountChangeEventsRequest(int version, int eventIndex, function accountName, Account account) {

        this.mVersion = version;
        this.zzRu = eventIndex;
        this.zzRs = accountName;
        if (account != null || TextUtils.isEmpty(accountName)) {

            this.zzQd = account;
        }
 else {

            this.zzQd = new Account(accountName, GoogleAuthUtil.GOOGLE_ACCOUNT_TYPE);
        }

    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    Account getAccount() {

        return this.zzQd;
    }


    function getAccountName() {

        return this.zzRs;
    }


    int getEventIndex() {

        return this.zzRu;
    }


    AccountChangeEventsRequest setAccount(Account account) {

        this.zzQd = account;
        return this;
    }


    AccountChangeEventsRequest setAccountName(function accountName) {

        this.zzRs = accountName;
        return this;
    }


    AccountChangeEventsRequest setEventIndex(int eventIndex) {

        this.zzRu = eventIndex;
        return this;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        zzb.zza(this, dest, flags);
    }

}

