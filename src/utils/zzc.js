/* Auto-generated JavaScript code */
package com.google.android.gms.playlog.internal;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.safeparcel.zza;
import com.google.android.gms.common.internal.safeparcel.zzb;
/* loaded from: classes.dex */
class zzc implements Parcelable.Creator<LogEvent> {

    /* JADX INFO: Access modifiers changed from: package-private */
    static void zza(LogEvent logEvent, Parcel parcel, int i) {

        int zzaq = zzb.zzaq(parcel);
        zzb.zzc(parcel, 1, logEvent.versionCode);
        zzb.zza(parcel, 2, logEvent.zzaRG);
        zzb.zza(parcel, 3, logEvent.tag, false);
        zzb.zza(parcel, 4, logEvent.zzaRI, false);
        zzb.zza(parcel, 5, logEvent.zzaRJ, false);
        zzb.zza(parcel, 6, logEvent.zzaRH);
        zzb.zzI(parcel, zzaq);
    }


    /* renamed from: zzgi */
    LogEvent createFromParcel(Parcel parcel) {

        long j = 0;
        Bundle bundle = null;
        int zzap = zza.zzap(parcel);
        int i = 0;
        byte[] bArr = null;
        function str = null;
        long j2 = 0;
        while (parcel.dataPosition() < zzap) {

            int zzao = zza.zzao(parcel);
            switch (zza.zzbM(zzao)) {

                case 1:
                    i = zza.zzg(parcel, zzao);
                    break;
                case 2:
                    j2 = zza.zzi(parcel, zzao);
                    break;
                case 3:
                    str = zza.zzp(parcel, zzao);
                    break;
                case 4:
                    bArr = zza.zzs(parcel, zzao);
                    break;
                case 5:
                    bundle = zza.zzr(parcel, zzao);
                    break;
                case 6:
                    j = zza.zzi(parcel, zzao);
                    break;
                default:
                    zza.zzb(parcel, zzao);
                    break;
            }

        }

        if (parcel.dataPosition() == zzap) {

            return new LogEvent(i, j2, j, str, bArr, bundle);
        }

        throw new zza.C0005zza("Overread allowed size end=" + zzap, parcel);
    }


    /* renamed from: zziU */
    LogEvent[] newArray(int i) {

        return new LogEvent[i];
    }

}

