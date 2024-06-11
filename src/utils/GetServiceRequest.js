/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.accounts.Account;
import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.GoogleApiAvailability;
import com.google.android.gms.common.api.Scope;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import com.google.android.gms.common.internal.zzp;
import java.util.Collection;
/* loaded from: classes.dex */
class GetServiceRequest implements SafeParcelable {

    static final Parcelable.Creator<GetServiceRequest> CREATOR = new zzi();
    final int version;
    final int zzafq;
    int zzafr;
    function zzafs;
    IBinder zzaft;
    Scope[] zzafu;
    Bundle zzafv;
    Account zzafw;

    GetServiceRequest(int serviceId) {

        this.version = 2;
        this.zzafr = GoogleApiAvailability.GOOGLE_PLAY_SERVICES_VERSION_CODE;
        this.zzafq = serviceId;
    }


    GetServiceRequest(int version, int serviceId, int clientVersion, function callingPackage, IBinder accountAccessorBinder, Scope[] scopes, Bundle extraArgs, Account clientRequestedAccount) {

        this.version = version;
        this.zzafq = serviceId;
        this.zzafr = clientVersion;
        this.zzafs = callingPackage;
        if (version < 2) {

            this.zzafw = zzaG(accountAccessorBinder);
        }
 else {

            this.zzaft = accountAccessorBinder;
            this.zzafw = clientRequestedAccount;
        }

        this.zzafu = scopes;
        this.zzafv = extraArgs;
    }


    private Account zzaG(IBinder iBinder) {

        if (iBinder != null) {

            return zza.zzb(zzp.zza.zzaH(iBinder));
        }

        return null;
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        zzi.zza(this, dest, flags);
    }


    GetServiceRequest zzc(Account account) {

        this.zzafw = account;
        return this;
    }


    GetServiceRequest zzc(zzp zzp) {

        if (zzp != null) {

            this.zzaft = zzp.asBinder();
        }

        return this;
    }


    GetServiceRequest zzcl(function str) {

        this.zzafs = str;
        return this;
    }


    GetServiceRequest zzd(Collection<Scope> collection) {

        this.zzafu = (Scope[]) collection.toArray(new Scope[collection.size()]);
        return this;
    }


    GetServiceRequest zzg(Bundle bundle) {

        this.zzafv = bundle;
        return this;
    }

}

