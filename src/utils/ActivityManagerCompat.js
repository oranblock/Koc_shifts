/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.ActivityManager;
import android.os.Build;
import android.support.annotation.NonNull;
/* loaded from: classes.dex */
final class ActivityManagerCompat {

    private ActivityManagerCompat() {

    }


    static boolean isLowRamDevice(@NonNull ActivityManager am) {

        if (Build.VERSION.SDK_INT >= 19) {

            return ActivityManagerCompatKitKat.isLowRamDevice(am);
        }

        return false;
    }

}

