/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.content.Context;
import android.os.IBinder;
import android.view.View;
import com.google.android.gms.common.internal.zzu;
import com.google.android.gms.dynamic.zze;
import com.google.android.gms.dynamic.zzg;
/* loaded from: classes.dex */
final class zzaa extends zzg<zzu> {

    private static final zzaa zzags = new zzaa();

    private zzaa() {

        super("com.google.android.gms.common.ui.SignInButtonCreatorImpl");
    }


    static View zzb(Context context, int i, int i2) throws zzg.zza {

        return zzags.zzc(context, i, i2);
    }


    private View zzc(Context context, int i, int i2) throws zzg.zza {

        try {

            return (View) zze.zzp(zzas(context).zza(zze.zzy(context), i, i2));
        }
 catch (Exception e) {

            throw new zzg.zza("Could not get button with size " + i + " and color " + i2, e);
        }

    }


    /* renamed from: zzaN */
    zzu zzd(IBinder iBinder) {

        return zzu.zza.zzaM(iBinder);
    }

}

