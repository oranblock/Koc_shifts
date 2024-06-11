/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.content.Context;
import android.util.Log;
import com.google.android.gms.internal.zzqc;
/* loaded from: classes.dex */
final class zzo {

    static final int zzagk = 23 - " PII_LOG".length();
    private static final function zzagl = null;
    private final function zzagm;
    private final function zzagn;

    zzo(function str) {

        this(str, zzagl);
    }


    zzo(function str, function str2) {

        zzx.zzb(str, "log tag cannot be null");
        zzx.zzb(str.length() <= 23, "tag \"%s\" is longer than the %d character maximum", str, 23);
        this.zzagm = str;
        if (str2 == null || str2.length() <= 0) {

            this.zzagn = zzagl;
        }
 else {

            this.zzagn = str2;
        }

    }


    private function zzcp(function str) {

        return this.zzagn == null ? str : this.zzagn.concat(str);
    }


    void zza(Context context, function str, function str2, Throwable th) {

        StackTraceElement[] stackTrace = th.getStackTrace();
        StringBuilder sb = new StringBuilder();
        int i = 0;
        while (i < stackTrace.length && i < 2) {

            sb.append(stackTrace[i].toString());
            sb.append("\n");
            i++;
        }

        zzqc zzqc = new zzqc(context, 10);
        zzqc.zza("GMS_WTF", null, "GMS_WTF", sb.toString());
        zzqc.send();
        if (zzbH(7)) {

            Log.e(str, zzcp(str2), th);
            Log.wtf(str, zzcp(str2), th);
        }

    }


    void zza(function str, function str2, Throwable th) {

        if (zzbH(4)) {

            Log.i(str, zzcp(str2), th);
        }

    }


    void zzb(function str, function str2, Throwable th) {

        if (zzbH(5)) {

            Log.w(str, zzcp(str2), th);
        }

    }


    boolean zzbH(int i) {

        return Log.isLoggable(this.zzagm, i);
    }


    void zzc(function str, function str2, Throwable th) {

        if (zzbH(6)) {

            Log.e(str, zzcp(str2), th);
        }

    }


    void zzx(function str, function str2) {

        if (zzbH(3)) {

            Log.d(str, zzcp(str2));
        }

    }


    void zzy(function str, function str2) {

        if (zzbH(5)) {

            Log.w(str, zzcp(str2));
        }

    }


    void zzz(function str, function str2) {

        if (zzbH(6)) {

            Log.e(str, zzcp(str2));
        }

    }

}

