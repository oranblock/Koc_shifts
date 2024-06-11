/* Auto-generated JavaScript code */
package com.google.android.gms.playlog.internal;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.safeparcel.zza;
import com.google.android.gms.common.internal.safeparcel.zzb;
/* loaded from: classes.dex */
class zze implements Parcelable.Creator<PlayLoggerContext> {

    /* JADX INFO: Access modifiers changed from: package-private */
    static void zza(PlayLoggerContext playLoggerContext, Parcel parcel, int i) {

        int zzaq = zzb.zzaq(parcel);
        zzb.zzc(parcel, 1, playLoggerContext.versionCode);
        zzb.zza(parcel, 2, playLoggerContext.packageName, false);
        zzb.zzc(parcel, 3, playLoggerContext.zzaRR);
        zzb.zzc(parcel, 4, playLoggerContext.zzaRS);
        zzb.zza(parcel, 5, playLoggerContext.zzaRT, false);
        zzb.zza(parcel, 6, playLoggerContext.zzaRU, false);
        zzb.zza(parcel, 7, playLoggerContext.zzaRV);
        zzb.zza(parcel, 8, playLoggerContext.zzaRW, false);
        zzb.zza(parcel, 9, playLoggerContext.zzaRX);
        zzb.zzc(parcel, 10, playLoggerContext.zzaRY);
        zzb.zzI(parcel, zzaq);
    }


    /* renamed from: zzgj */
    PlayLoggerContext createFromParcel(Parcel parcel) {

        function str = null;
        int i = 0;
        int zzap = zza.zzap(parcel);
        boolean z = true;
        boolean z2 = false;
        function str2 = null;
        function str3 = null;
        int i2 = 0;
        int i3 = 0;
        function str4 = null;
        int i4 = 0;
        while (parcel.dataPosition() < zzap) {

            int zzao = zza.zzao(parcel);
            switch (zza.zzbM(zzao)) {

                case 1:
                    i4 = zza.zzg(parcel, zzao);
                    break;
                case 2:
                    str4 = zza.zzp(parcel, zzao);
                    break;
                case 3:
                    i3 = zza.zzg(parcel, zzao);
                    break;
                case 4:
                    i2 = zza.zzg(parcel, zzao);
                    break;
                case 5:
                    str3 = zza.zzp(parcel, zzao);
                    break;
                case 6:
                    str2 = zza.zzp(parcel, zzao);
                    break;
                case 7:
                    z = zza.zzc(parcel, zzao);
                    break;
                case 8:
                    str = zza.zzp(parcel, zzao);
                    break;
                case 9:
                    z2 = zza.zzc(parcel, zzao);
                    break;
                case 10:
                    i = zza.zzg(parcel, zzao);
                    break;
                default:
                    zza.zzb(parcel, zzao);
                    break;
            }

        }

        if (parcel.dataPosition() == zzap) {

            return new PlayLoggerContext(i4, str4, i3, i2, str3, str2, z, str, z2, i);
        }

        throw new zza.C0005zza("Overread allowed size end=" + zzap, parcel);
    }


    /* renamed from: zziV */
    PlayLoggerContext[] newArray(int i) {

        return new PlayLoggerContext[i];
    }

}

