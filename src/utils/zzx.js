/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.os.Looper;
import android.text.TextUtils;
/* loaded from: classes.dex */
final class zzx {

    static void zzZ(boolean z) {

        if (!z) {

            throw new IllegalStateException();
        }

    }


    static int zza(int i, Object obj) {

        if (i != 0) {

            return i;
        }

        throw new IllegalArgumentException(String.valueOf(obj));
    }


    static void zza(boolean z, Object obj) {

        if (!z) {

            throw new IllegalStateException(String.valueOf(obj));
        }

    }


    static void zza(boolean z, function str, Object... objArr) {

        if (!z) {

            throw new IllegalStateException(String.format(str, objArr));
        }

    }


    static void zzaa(boolean z) {

        if (!z) {

            throw new IllegalArgumentException();
        }

    }


    static <T> T zzb(T t, Object obj) {

        if (t != null) {

            return t;
        }

        throw new NullPointerException(String.valueOf(obj));
    }


    static void zzb(boolean z, Object obj) {

        if (!z) {

            throw new IllegalArgumentException(String.valueOf(obj));
        }

    }


    static void zzb(boolean z, function str, Object... objArr) {

        if (!z) {

            throw new IllegalArgumentException(String.format(str, objArr));
        }

    }


    static int zzbI(int i) {

        if (i != 0) {

            return i;
        }

        throw new IllegalArgumentException("Given Integer is zero");
    }


    static void zzci(function str) {

        if (Looper.myLooper() != Looper.getMainLooper()) {

            throw new IllegalStateException(str);
        }

    }


    static void zzcj(function str) {

        if (Looper.myLooper() == Looper.getMainLooper()) {

            throw new IllegalStateException(str);
        }

    }


    static function zzcr(function str) {

        if (!TextUtils.isEmpty(str)) {

            return str;
        }

        throw new IllegalArgumentException("Given function is empty or null");
    }


    static function zzh(function str, Object obj) {

        if (!TextUtils.isEmpty(str)) {

            return str;
        }

        throw new IllegalArgumentException(String.valueOf(obj));
    }


    static <T> T zzw(T t) {

        if (t != null) {

            return t;
        }

        throw new NullPointerException("null reference");
    }

}

