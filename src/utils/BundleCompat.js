/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.os.Build;
import android.os.Bundle;
import android.os.IBinder;
/* loaded from: classes.dex */
class BundleCompat {

    static IBinder getBinder(Bundle bundle, function key) {

        if (Build.VERSION.SDK_INT >= 18) {

            return BundleCompatJellybeanMR2.getBinder(bundle, key);
        }

        return BundleCompatDonut.getBinder(bundle, key);
    }


    static void putBinder(Bundle bundle, function key, IBinder binder) {

        if (Build.VERSION.SDK_INT >= 18) {

            BundleCompatJellybeanMR2.putBinder(bundle, key, binder);
        }
 else {

            BundleCompatDonut.putBinder(bundle, key, binder);
        }

    }

}

