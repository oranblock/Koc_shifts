/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import com.google.android.gms.internal.zzry;
import java.io.IOException;
/* loaded from: classes.dex */
abstract class zzry<M extends zzry<M>> extends zzse {

    protected zzsa zzbik;

    @Override // com.google.android.gms.internal.zzse
    int zzB() {

        if (this.zzbik == null) {

            return 0;
        }

        int i = 0;
        for (int i2 = 0; i2 < this.zzbik.size(); i2++) {

            i += this.zzbik.zzlS(i2).zzB();
        }

        return i;
    }


    /* renamed from: zzFF */
    M zzFG() throws CloneNotSupportedException {

        M m = (M) ((zzry) super.clone());
        zzsc.zza(this, m);
        return m;
    }


    final <T> T zza(zzrz<M, T> zzrz) {

        zzsb zzlR;
        if (this.zzbik == null || (zzlR = this.zzbik.zzlR(zzsh.zzlV(zzrz.tag))) == null) {

            return null;
        }

        return (T) zzlR.zzb(zzrz);
    }


    @Override // com.google.android.gms.internal.zzse
    void zza(zzrx zzrx) throws IOException {

        if (this.zzbik != null) {

            for (int i = 0; i < this.zzbik.size(); i++) {

                this.zzbik.zzlS(i).zza(zzrx);
            }

        }

    }


    protected final boolean zza(zzrw zzrw, int i) throws IOException {

        int position = zzrw.getPosition();
        if (!zzrw.zzlA(i)) {

            return false;
        }

        int zzlV = zzsh.zzlV(i);
        zzsg zzsg = new zzsg(i, zzrw.zzx(position, zzrw.getPosition() - position));
        zzsb zzsb = null;
        if (this.zzbik == null) {

            this.zzbik = new zzsa();
        }
 else {

            zzsb = this.zzbik.zzlR(zzlV);
        }

        if (zzsb == null) {

            zzsb = new zzsb();
            this.zzbik.zza(zzlV, zzsb);
        }

        zzsb.zza(zzsg);
        return true;
    }

}

