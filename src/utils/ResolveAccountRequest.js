/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.accounts.Account;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
/* loaded from: classes.dex */
class ResolveAccountRequest implements SafeParcelable {

    static final Parcelable.Creator<ResolveAccountRequest> CREATOR = new zzy();
    final int mVersionCode;
    private final Account zzQd;
    private final int zzagp;

    ResolveAccountRequest(int versionCode, Account account, int sessionId) {

        this.mVersionCode = versionCode;
        this.zzQd = account;
        this.zzagp = sessionId;
    }


    ResolveAccountRequest(Account account, int sessionId) {

        this(1, account, sessionId);
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    Account getAccount() {

        return this.zzQd;
    }


    int getSessionId() {

        return this.zzagp;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        zzy.zza(this, dest, flags);
    }

}

