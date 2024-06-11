/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.accounts.Account;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.safeparcel.zza;
import com.google.android.gms.common.internal.safeparcel.zzb;
/* loaded from: classes.dex */
class zzy implements Parcelable.Creator<ResolveAccountRequest> {

    /* JADX INFO: Access modifiers changed from: package-private */
    static void zza(ResolveAccountRequest resolveAccountRequest, Parcel parcel, int i) {

        int zzaq = zzb.zzaq(parcel);
        zzb.zzc(parcel, 1, resolveAccountRequest.mVersionCode);
        zzb.zza(parcel, 2, (Parcelable) resolveAccountRequest.getAccount(), i, false);
        zzb.zzc(parcel, 3, resolveAccountRequest.getSessionId());
        zzb.zzI(parcel, zzaq);
    }


    /* renamed from: zzal */
    ResolveAccountRequest createFromParcel(Parcel parcel) {

        int i = 0;
        int zzap = zza.zzap(parcel);
        Account account = null;
        int i2 = 0;
        while (parcel.dataPosition() < zzap) {

            int zzao = zza.zzao(parcel);
            switch (zza.zzbM(zzao)) {

                case 1:
                    i2 = zza.zzg(parcel, zzao);
                    account = account;
                    i = i;
                    break;
                case 2:
                    account = (Account) zza.zza(parcel, zzao, Account.CREATOR);
                    i2 = i2;
                    i = i;
                    break;
                case 3:
                    i = zza.zzg(parcel, zzao);
                    account = account;
                    i2 = i2;
                    break;
                default:
                    zza.zzb(parcel, zzao);
                    i = i;
                    account = account;
                    i2 = i2;
                    break;
            }

        }

        if (parcel.dataPosition() == zzap) {

            return new ResolveAccountRequest(i2, account, i);
        }

        throw new zza.C0005zza("Overread allowed size end=" + zzap, parcel);
    }


    /* renamed from: zzbJ */
    ResolveAccountRequest[] newArray(int i) {

        return new ResolveAccountRequest[i];
    }

}

