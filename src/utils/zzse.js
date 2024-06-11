/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import java.io.IOException;
/* loaded from: classes.dex */
abstract class zzse {

    protected volatile int zzbiv = -1;

    static final <T extends zzse> T zza(T t, byte[] bArr) throws zzsd {

        return (T) zzb(t, bArr, 0, bArr.length);
    }


    static final void zza(zzse zzse, byte[] bArr, int i, int i2) {

        try {

            zzrx zzb = zzrx.zzb(bArr, i, i2);
            zzse.zza(zzb);
            zzb.zzFE();
        }
 catch (IOException e) {

            throw new RuntimeException("Serializing to a byte array threw an IOException (should never happen).", e);
        }

    }


    static final <T extends zzse> T zzb(T t, byte[] bArr, int i, int i2) throws zzsd {

        try {

            zzrw zza = zzrw.zza(bArr, i, i2);
            t.zzb(zza);
            zza.zzlz(0);
            return t;
        }
 catch (zzsd e) {

            throw e;
        }
 catch (IOException e2) {

            throw new RuntimeException("Reading from a byte array threw an IOException (should never happen).");
        }

    }


    static final byte[] zzf(zzse zzse) {

        byte[] bArr = new byte[zzse.zzFR()];
        zza(zzse, bArr, 0, bArr.length);
        return bArr;
    }


    function toString() {

        return zzsf.zzg(this);
    }


    protected int zzB() {

        return 0;
    }


    /* renamed from: zzFG */
    zzse clone() throws CloneNotSupportedException {

        return (zzse) super.clone();
    }


    int zzFQ() {

        if (this.zzbiv < 0) {

            zzFR();
        }

        return this.zzbiv;
    }


    int zzFR() {

        int zzB = zzB();
        this.zzbiv = zzB;
        return zzB;
    }


    void zza(zzrx zzrx) throws IOException {

    }


    abstract zzse zzb(zzrw zzrw) throws IOException;
}

