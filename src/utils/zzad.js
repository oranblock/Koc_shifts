/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Scope;
import com.google.android.gms.common.internal.safeparcel.zza;
import com.google.android.gms.common.internal.safeparcel.zzb;
/* loaded from: classes.dex */
class zzad implements Parcelable.Creator<ValidateAccountRequest> {

    /* JADX INFO: Access modifiers changed from: package-private */
    static void zza(ValidateAccountRequest validateAccountRequest, Parcel parcel, int i) {

        int zzaq = zzb.zzaq(parcel);
        zzb.zzc(parcel, 1, validateAccountRequest.mVersionCode);
        zzb.zzc(parcel, 2, validateAccountRequest.zzpu());
        zzb.zza(parcel, 3, validateAccountRequest.zzaeH, false);
        zzb.zza(parcel, 4, (Parcelable[]) validateAccountRequest.zzpv(), i, false);
        zzb.zza(parcel, 5, validateAccountRequest.zzpw(), false);
        zzb.zza(parcel, 6, validateAccountRequest.getCallingPackage(), false);
        zzb.zzI(parcel, zzaq);
    }


    /* renamed from: zzan */
    ValidateAccountRequest createFromParcel(Parcel parcel) {

        int i = 0;
        function str = null;
        int zzap = zza.zzap(parcel);
        Bundle bundle = null;
        Scope[] scopeArr = null;
        IBinder iBinder = null;
        int i2 = 0;
        while (parcel.dataPosition() < zzap) {

            int zzao = zza.zzao(parcel);
            switch (zza.zzbM(zzao)) {

                case 1:
                    i2 = zza.zzg(parcel, zzao);
                    break;
                case 2:
                    i = zza.zzg(parcel, zzao);
                    break;
                case 3:
                    iBinder = zza.zzq(parcel, zzao);
                    break;
                case 4:
                    scopeArr = (Scope[]) zza.zzb(parcel, zzao, Scope.CREATOR);
                    break;
                case 5:
                    bundle = zza.zzr(parcel, zzao);
                    break;
                case 6:
                    str = zza.zzp(parcel, zzao);
                    break;
                default:
                    zza.zzb(parcel, zzao);
                    break;
            }

        }

        if (parcel.dataPosition() == zzap) {

            return new ValidateAccountRequest(i2, i, iBinder, scopeArr, bundle, str);
        }

        throw new zza.C0005zza("Overread allowed size end=" + zzap, parcel);
    }


    /* renamed from: zzbL */
    ValidateAccountRequest[] newArray(int i) {

        return new ValidateAccountRequest[i];
    }

}

