/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.content.res.Configuration;
import android.content.res.Resources;
/* loaded from: classes.dex */
final class zzmq {

    static boolean zzb(Resources resources) {

        if (resources == null) {

            return false;
        }

        return (zzmx.zzqu() && ((resources.getConfiguration().screenLayout & 15) > 3)) || zzc(resources);
    }


    private static boolean zzc(Resources resources) {

        Configuration configuration = resources.getConfiguration();
        return zzmx.zzqw() && (configuration.screenLayout & 15) <= 3 && configuration.smallestScreenWidthDp >= 600;
    }

}

