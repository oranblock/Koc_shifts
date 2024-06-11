/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.PowerManager;
/* loaded from: classes.dex */
final class zzmr {

    private static IntentFilter zzail = new IntentFilter("android.intent.action.BATTERY_CHANGED");

    static int zzao(Context context) {

        int i = 1;
        if (context == null || context.getApplicationContext() == null) {

            return -1;
        }

        Intent registerReceiver = context.getApplicationContext().registerReceiver(null, zzail);
        boolean z = ((registerReceiver == null ? 0 : registerReceiver.getIntExtra("plugged", 0)) & 7) != 0;
        int i2 = (zzmx.zzqC() ? ((PowerManager) context.getSystemService("power")).isInteractive() : ((PowerManager) context.getSystemService("power")).isScreenOn() ? 1 : 0) << 1;
        if (!z) {

            i = 0;
        }

        return i2 | i;
    }


    static float zzap(Context context) {

        Intent registerReceiver = context.getApplicationContext().registerReceiver(null, zzail);
        if (registerReceiver == null) {

            return Float.NaN;
        }

        return ((float) registerReceiver.getIntExtra("level", -1)) / ((float) registerReceiver.getIntExtra("scale", -1));
    }

}

