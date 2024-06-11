/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import java.io.IOException;
/* loaded from: classes.dex */
final class zzsh {

    static final int[] zzbix = new int[0];
    static final long[] zzbiy = new long[0];
    static final float[] zzbiz = new float[0];
    static final double[] zzbiA = new double[0];
    static final boolean[] zzbiB = new boolean[0];
    static final String[] zzbiC = new String[0];
    static final byte[][] zzbiD = new byte[0];
    static final byte[] zzbiE = new byte[0];

    /* JADX INFO: Access modifiers changed from: package-private */
    static int zzD(int i, int i2) {

        return (i << 3) | i2;
    }


    static boolean zzb(zzrw zzrw, int i) throws IOException {

        return zzrw.zzlA(i);
    }


    static final int zzc(zzrw zzrw, int i) throws IOException {

        int i2 = 1;
        int position = zzrw.getPosition();
        zzrw.zzlA(i);
        while (zzrw.zzFo() == i) {

            zzrw.zzlA(i);
            i2++;
        }

        zzrw.zzlE(position);
        return i2;
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static int zzlU(int i) {

        return i & 7;
    }


    static int zzlV(int i) {

        return i >>> 3;
    }

}

