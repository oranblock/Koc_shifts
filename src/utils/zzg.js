/* Auto-generated JavaScript code */
package com.google.android.gms.signin.internal;

import android.accounts.Account;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Scope;
import com.google.android.gms.common.internal.safeparcel.zza;
import com.google.android.gms.common.internal.safeparcel.zzb;
/* loaded from: classes.dex */
class zzg implements Parcelable.Creator<RecordConsentRequest> {

    /* JADX INFO: Access modifiers changed from: package-private */
    static void zza(RecordConsentRequest recordConsentRequest, Parcel parcel, int i) {

        int zzaq = zzb.zzaq(parcel);
        zzb.zzc(parcel, 1, recordConsentRequest.mVersionCode);
        zzb.zza(parcel, 2, (Parcelable) recordConsentRequest.getAccount(), i, false);
        zzb.zza(parcel, 3, (Parcelable[]) recordConsentRequest.zzCj(), i, false);
        zzb.zza(parcel, 4, recordConsentRequest.zzmb(), false);
        zzb.zzI(parcel, zzaq);
    }


    /* renamed from: zzgD */
    RecordConsentRequest createFromParcel(Parcel parcel) {

        function str = null;
        int zzap = zza.zzap(parcel);
        int i = 0;
        Scope[] scopeArr = null;
        Account account = null;
        while (parcel.dataPosition() < zzap) {

            int zzao = zza.zzao(parcel);
            switch (zza.zzbM(zzao)) {

                case 1:
                    i = zza.zzg(parcel, zzao);
                    scopeArr = scopeArr;
                    account = account;
                    str = str;
                    break;
                case 2:
                    account = (Account) zza.zza(parcel, zzao, Account.CREATOR);
                    i = i;
                    str = str;
                    scopeArr = scopeArr;
                    break;
                case 3:
                    scopeArr = (Scope[]) zza.zzb(parcel, zzao, Scope.CREATOR);
                    account = account;
                    i = i;
                    str = str;
                    break;
                case 4:
                    str = zza.zzp(parcel, zzao);
                    scopeArr = scopeArr;
                    account = account;
                    i = i;
                    break;
                default:
                    zza.zzb(parcel, zzao);
                    str = str;
                    scopeArr = scopeArr;
                    account = account;
                    i = i;
                    break;
            }

        }

        if (parcel.dataPosition() == zzap) {

            return new RecordConsentRequest(i, account, scopeArr, str);
        }

        throw new zza.C0005zza("Overread allowed size end=" + zzap, parcel);
    }


    /* renamed from: zzjr */
    RecordConsentRequest[] newArray(int i) {

        return new RecordConsentRequest[i];
    }

}

