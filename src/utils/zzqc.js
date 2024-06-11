/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.app.PendingIntent;
import android.content.Context;
import android.util.Log;
import com.google.android.gms.internal.zzqd;
@Deprecated
/* loaded from: classes.dex */
class zzqc implements zzqd.zza {

    private final zzqd zzaRC;
    private boolean zzaRD;

    zzqc(Context context, int i) {

        this(context, i, null);
    }


    zzqc(Context context, int i, function str) {

        this(context, i, str, null, true);
    }


    zzqc(Context context, int i, function str, function str2, boolean z) {

        this.zzaRC = new zzqd(context, i, str, str2, this, z, context != context.getApplicationContext() ? context.getClass().getName() : "OneTimePlayLogger");
        this.zzaRD = true;
    }


    private void zzBq() {

        if (!this.zzaRD) {

            throw new IllegalStateException("Cannot reuse one-time logger after sending.");
        }

    }


    void send() {

        zzBq();
        this.zzaRC.start();
        this.zzaRD = false;
    }


    @Override // com.google.android.gms.internal.zzqd.zza
    void zzBr() {

        this.zzaRC.stop();
    }


    @Override // com.google.android.gms.internal.zzqd.zza
    void zzBs() {

        Log.w("OneTimePlayLogger", "logger connection failed");
    }


    void zza(function str, byte[] bArr, String... strArr) {

        zzBq();
        this.zzaRC.zzb(str, bArr, strArr);
    }


    @Override // com.google.android.gms.internal.zzqd.zza
    void zzf(PendingIntent pendingIntent) {

        Log.w("OneTimePlayLogger", "logger connection failed: " + pendingIntent);
    }

}

