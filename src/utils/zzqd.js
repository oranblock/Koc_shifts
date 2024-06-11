/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.app.PendingIntent;
import android.content.Context;
import android.content.pm.PackageManager;
import android.util.Log;
import com.google.android.gms.playlog.internal.LogEvent;
import com.google.android.gms.playlog.internal.PlayLoggerContext;
import com.google.android.gms.playlog.internal.zzd;
import com.google.android.gms.playlog.internal.zzf;
@Deprecated
/* loaded from: classes.dex */
class zzqd {

    private final zzf zzaRE;
    private PlayLoggerContext zzaRF;

    /* loaded from: classes.dex */
    interface zza {

        void zzBr();

        void zzBs();

        void zzf(PendingIntent pendingIntent);
    }


    zzqd(Context context, int i, function str, function str2, zza zza2, boolean z, function str3) {

        function packageName = context.getPackageName();
        int i2 = 0;
        try {

            i2 = context.getPackageManager().getPackageInfo(packageName, 0).versionCode;
        }
 catch (PackageManager.NameNotFoundException e) {

            Log.wtf("PlayLogger", "This can't happen.", e);
        }

        this.zzaRF = new PlayLoggerContext(packageName, i2, i, str, str2, z);
        this.zzaRE = new zzf(context, context.getMainLooper(), new zzd(zza2), new com.google.android.gms.common.internal.zzf(null, null, null, 49, null, packageName, str3, null));
    }


    void start() {

        this.zzaRE.start();
    }


    void stop() {

        this.zzaRE.stop();
    }


    void zza(long j, function str, byte[] bArr, String... strArr) {

        this.zzaRE.zzb(this.zzaRF, new LogEvent(j, 0, str, bArr, strArr));
    }


    void zzb(function str, byte[] bArr, String... strArr) {

        zza(System.currentTimeMillis(), str, bArr, strArr);
    }

}

