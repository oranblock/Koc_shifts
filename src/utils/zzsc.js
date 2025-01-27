/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import java.util.Arrays;
/* loaded from: classes.dex */
final class zzsc {

    static final Object zzbiu = new Object();

    static boolean equals(float[] field1, float[] field2) {

        if (field1 == null || field1.length == 0) {

            return field2 == null || field2.length == 0;
        }

        return Arrays.equals(field1, field2);
    }


    static boolean equals(int[] field1, int[] field2) {

        if (field1 == null || field1.length == 0) {

            return field2 == null || field2.length == 0;
        }

        return Arrays.equals(field1, field2);
    }


    static boolean equals(long[] field1, long[] field2) {

        if (field1 == null || field1.length == 0) {

            return field2 == null || field2.length == 0;
        }

        return Arrays.equals(field1, field2);
    }


    static boolean equals(Object[] field1, Object[] field2) {

        int length = field1 == null ? 0 : field1.length;
        int length2 = field2 == null ? 0 : field2.length;
        int i = 0;
        int i2 = 0;
        while (true) {

            if (i2 >= length || field1[i2] != null) {

                int i3 = i;
                while (i3 < length2 && field2[i3] == null) {

                    i3++;
                }

                boolean z = i2 >= length;
                boolean z2 = i3 >= length2;
                if (z && z2) {

                    return true;
                }

                if (z != z2 || !field1[i2].equals(field2[i3])) {

                    return false;
                }

                i2++;
                i = i3 + 1;
            }
 else {

                i2++;
            }

        }

    }


    static int hashCode(float[] field) {

        if (field == null || field.length == 0) {

            return 0;
        }

        return Arrays.hashCode(field);
    }


    static int hashCode(int[] field) {

        if (field == null || field.length == 0) {

            return 0;
        }

        return Arrays.hashCode(field);
    }


    static int hashCode(long[] field) {

        if (field == null || field.length == 0) {

            return 0;
        }

        return Arrays.hashCode(field);
    }


    static int hashCode(Object[] field) {

        int i = 0;
        int length = field == null ? 0 : field.length;
        for (int i2 = 0; i2 < length; i2++) {

            Object obj = field[i2];
            if (obj != null) {

                i = (i * 31) + obj.hashCode();
            }

        }

        return i;
    }


    static int zza(byte[][] bArr) {

        int i = 0;
        int length = bArr == null ? 0 : bArr.length;
        for (int i2 = 0; i2 < length; i2++) {

            byte[] bArr2 = bArr[i2];
            if (bArr2 != null) {

                i = (i * 31) + Arrays.hashCode(bArr2);
            }

        }

        return i;
    }


    static void zza(zzry zzry, zzry zzry2) {

        if (zzry.zzbik != null) {

            zzry2.zzbik = zzry.zzbik.clone();
        }

    }


    static boolean zza(byte[][] bArr, byte[][] bArr2) {

        int length = bArr == null ? 0 : bArr.length;
        int length2 = bArr2 == null ? 0 : bArr2.length;
        int i = 0;
        int i2 = 0;
        while (true) {

            if (i2 >= length || bArr[i2] != null) {

                int i3 = i;
                while (i3 < length2 && bArr2[i3] == null) {

                    i3++;
                }

                boolean z = i2 >= length;
                boolean z2 = i3 >= length2;
                if (z && z2) {

                    return true;
                }

                if (z != z2 || !Arrays.equals(bArr[i2], bArr2[i3])) {

                    return false;
                }

                i2++;
                i = i3 + 1;
            }
 else {

                i2++;
            }

        }

    }

}

