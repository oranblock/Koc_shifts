/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.graphics.drawable.Drawable;
import com.google.android.gms.common.internal.zzw;
/* loaded from: classes.dex */
final class zzlv extends zzmg<zza, Drawable> {


    /* loaded from: classes.dex */
    static final class zza {

        final int zzaeE;
        final int zzaeF;

        zza(int i, int i2) {

            this.zzaeE = i;
            this.zzaeF = i2;
        }


        boolean equals(Object obj) {

            if (!(obj instanceof zza)) {

                return false;
            }

            if (this == obj) {

                return true;
            }

            zza zza = (zza) obj;
            return zza.zzaeE == this.zzaeE && zza.zzaeF == this.zzaeF;
        }


        int hashCode() {

            return zzw.hashCode(Integer.valueOf(this.zzaeE), Integer.valueOf(this.zzaeF));
        }

    }


    zzlv() {

        super(10);
    }

}

