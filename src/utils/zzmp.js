/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.os.SystemClock;
/* loaded from: classes.dex */
final class zzmp implements zzmn {

    private static zzmp zzaik;

    static synchronized zzmn zzqt() {

        zzmp zzmp;
        synchronized (zzmp.class) {

            if (zzaik == null) {

                zzaik = new zzmp();
            }

            zzmp = zzaik;
        }

        return zzmp;
    }


    @Override // com.google.android.gms.internal.zzmn
    long currentTimeMillis() {

        return System.currentTimeMillis();
    }


    @Override // com.google.android.gms.internal.zzmn
    long elapsedRealtime() {

        return SystemClock.elapsedRealtime();
    }


    @Override // com.google.android.gms.internal.zzmn
    long nanoTime() {

        return System.nanoTime();
    }

}

