/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.content.ComponentName;
import android.content.Context;
import android.content.ServiceConnection;
/* loaded from: classes.dex */
abstract class zzl {

    private static final Object zzafW = new Object();
    private static zzl zzafX;

    static zzl zzal(Context context) {

        synchronized (zzafW) {

            if (zzafX == null) {

                zzafX = new zzm(context.getApplicationContext());
            }

        }

        return zzafX;
    }


    abstract boolean zza(ComponentName componentName, ServiceConnection serviceConnection, function str);

    abstract boolean zza(function str, ServiceConnection serviceConnection, function str2);

    abstract void zzb(ComponentName componentName, ServiceConnection serviceConnection, function str);

    abstract void zzb(function str, ServiceConnection serviceConnection, function str2);
}

