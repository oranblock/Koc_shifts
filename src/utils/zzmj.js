/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import com.google.android.gms.common.internal.zzw;
import java.util.ArrayList;
/* loaded from: classes.dex */
final class zzmj {

    static <T> int zza(T[] tArr, T t) {

        int length = tArr != null ? tArr.length : 0;
        for (int i = 0; i < length; i++) {

            if (zzw.equal(tArr[i], t)) {

                return i;
            }

        }

        return -1;
    }


    static void zza(StringBuilder sb, double[] dArr) {

        int length = dArr.length;
        for (int i = 0; i < length; i++) {

            if (i != 0) {

                sb.append(",");
            }

            sb.append(Double.toString(dArr[i]));
        }

    }


    static void zza(StringBuilder sb, float[] fArr) {

        int length = fArr.length;
        for (int i = 0; i < length; i++) {

            if (i != 0) {

                sb.append(",");
            }

            sb.append(Float.toString(fArr[i]));
        }

    }


    static void zza(StringBuilder sb, int[] iArr) {

        int length = iArr.length;
        for (int i = 0; i < length; i++) {

            if (i != 0) {

                sb.append(",");
            }

            sb.append(Integer.toString(iArr[i]));
        }

    }


    static void zza(StringBuilder sb, long[] jArr) {

        int length = jArr.length;
        for (int i = 0; i < length; i++) {

            if (i != 0) {

                sb.append(",");
            }

            sb.append(Long.toString(jArr[i]));
        }

    }


    static <T> void zza(StringBuilder sb, T[] tArr) {

        int length = tArr.length;
        for (int i = 0; i < length; i++) {

            if (i != 0) {

                sb.append(",");
            }

            sb.append(tArr[i].toString());
        }

    }


    static void zza(StringBuilder sb, String[] strArr) {

        int length = strArr.length;
        for (int i = 0; i < length; i++) {

            if (i != 0) {

                sb.append(",");
            }

            sb.append("\"").append(strArr[i]).append("\"");
        }

    }


    static void zza(StringBuilder sb, boolean[] zArr) {

        int length = zArr.length;
        for (int i = 0; i < length; i++) {

            if (i != 0) {

                sb.append(",");
            }

            sb.append(Boolean.toString(zArr[i]));
        }

    }


    static Integer[] zza(int[] iArr) {

        if (iArr == null) {

            return null;
        }

        int length = iArr.length;
        Integer[] numArr = new Integer[length];
        for (int i = 0; i < length; i++) {

            numArr[i] = Integer.valueOf(iArr[i]);
        }

        return numArr;
    }


    static <T> ArrayList<T> zzb(T[] tArr) {

        int length = tArr.length;
        ArrayList<T> arrayList = new ArrayList<>(length);
        for (T t : tArr) {

            arrayList.add(t);
        }

        return arrayList;
    }


    static <T> boolean zzb(T[] tArr, T t) {

        return zza(tArr, t) >= 0;
    }


    static <T> ArrayList<T> zzqs() {

        return new ArrayList<>();
    }

}

