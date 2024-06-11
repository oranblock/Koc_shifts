/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
/* loaded from: classes.dex */
class zzsb implements Cloneable {

    private zzrz<?, ?> zzbir;
    private Object zzbis;
    private List<zzsg> zzbit = new ArrayList();

    private byte[] toByteArray() throws IOException {

        byte[] bArr = new byte[zzB()];
        zza(zzrx.zzC(bArr));
        return bArr;
    }


    @Override // java.lang.Object
    boolean equals(Object o) {

        if (o == this) {

            return true;
        }

        if (!(o instanceof zzsb)) {

            return false;
        }

        zzsb zzsb = (zzsb) o;
        if (this.zzbis == null || zzsb.zzbis == null) {

            if (this.zzbit != null && zzsb.zzbit != null) {

                return this.zzbit.equals(zzsb.zzbit);
            }

            try {

                return Arrays.equals(toByteArray(), zzsb.toByteArray());
            }
 catch (IOException e) {

                throw new IllegalStateException(e);
            }

        }
 else if (this.zzbir != zzsb.zzbir) {

            return false;
        }
 else {

            if (!this.zzbir.zzbil.isArray()) {

                return this.zzbis.equals(zzsb.zzbis);
            }

            if (this.zzbis instanceof byte[]) {

                return Arrays.equals((byte[]) this.zzbis, (byte[]) zzsb.zzbis);
            }

            if (this.zzbis instanceof int[]) {

                return Arrays.equals((int[]) this.zzbis, (int[]) zzsb.zzbis);
            }

            if (this.zzbis instanceof long[]) {

                return Arrays.equals((long[]) this.zzbis, (long[]) zzsb.zzbis);
            }

            if (this.zzbis instanceof float[]) {

                return Arrays.equals((float[]) this.zzbis, (float[]) zzsb.zzbis);
            }

            if (this.zzbis instanceof double[]) {

                return Arrays.equals((double[]) this.zzbis, (double[]) zzsb.zzbis);
            }

            return this.zzbis instanceof boolean[] ? Arrays.equals((boolean[]) this.zzbis, (boolean[]) zzsb.zzbis) : Arrays.deepEquals((Object[]) this.zzbis, (Object[]) zzsb.zzbis);
        }

    }


    @Override // java.lang.Object
    int hashCode() {

        try {

            return Arrays.hashCode(toByteArray()) + 527;
        }
 catch (IOException e) {

            throw new IllegalStateException(e);
        }

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    int zzB() {

        int i = 0;
        if (this.zzbis != null) {

            return this.zzbir.zzX(this.zzbis);
        }

        for (zzsg zzsg : this.zzbit) {

            i = zzsg.zzB() + i;
        }

        return i;
    }


    /* renamed from: zzFI */
    final zzsb clone() {

        zzsb zzsb = new zzsb();
        try {

            zzsb.zzbir = this.zzbir;
            if (this.zzbit == null) {

                zzsb.zzbit = null;
            }
 else {

                zzsb.zzbit.addAll(this.zzbit);
            }

            if (this.zzbis != null) {

                if (this.zzbis instanceof zzse) {

                    zzsb.zzbis = ((zzse) this.zzbis).clone();
                }
 else if (this.zzbis instanceof byte[]) {

                    zzsb.zzbis = ((byte[]) this.zzbis).clone();
                }
 else if (this.zzbis instanceof byte[][]) {

                    byte[][] bArr = (byte[][]) this.zzbis;
                    byte[][] bArr2 = new byte[bArr.length];
                    zzsb.zzbis = bArr2;
                    for (int i = 0; i < bArr.length; i++) {

                        bArr2[i] = (byte[]) bArr[i].clone();
                    }

                }
 else if (this.zzbis instanceof boolean[]) {

                    zzsb.zzbis = ((boolean[]) this.zzbis).clone();
                }
 else if (this.zzbis instanceof int[]) {

                    zzsb.zzbis = ((int[]) this.zzbis).clone();
                }
 else if (this.zzbis instanceof long[]) {

                    zzsb.zzbis = ((long[]) this.zzbis).clone();
                }
 else if (this.zzbis instanceof float[]) {

                    zzsb.zzbis = ((float[]) this.zzbis).clone();
                }
 else if (this.zzbis instanceof double[]) {

                    zzsb.zzbis = ((double[]) this.zzbis).clone();
                }
 else if (this.zzbis instanceof zzse[]) {

                    zzse[] zzseArr = (zzse[]) this.zzbis;
                    zzse[] zzseArr2 = new zzse[zzseArr.length];
                    zzsb.zzbis = zzseArr2;
                    for (int i2 = 0; i2 < zzseArr.length; i2++) {

                        zzseArr2[i2] = zzseArr[i2].clone();
                    }

                }

            }

            return zzsb;
        }
 catch (CloneNotSupportedException e) {

            throw new AssertionError(e);
        }

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    void zza(zzrx zzrx) throws IOException {

        if (this.zzbis != null) {

            this.zzbir.zza(this.zzbis, zzrx);
            return;
        }

        for (zzsg zzsg : this.zzbit) {

            zzsg.zza(zzrx);
        }

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    void zza(zzsg zzsg) {

        this.zzbit.add(zzsg);
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Multi-variable type inference failed */
    <T> T zzb(zzrz<?, T> zzrz) {

        if (this.zzbis == null) {

            this.zzbir = zzrz;
            this.zzbis = zzrz.zzE(this.zzbit);
            this.zzbit = null;
        }
 else if (this.zzbir != zzrz) {

            throw new IllegalStateException("Tried to getExtension with a differernt Extension.");
        }

        return (T) this.zzbis;
    }

}

