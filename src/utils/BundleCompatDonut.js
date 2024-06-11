/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.os.Bundle;
import android.os.IBinder;
import android.util.Log;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
/* loaded from: classes.dex */
class BundleCompatDonut {

    private static final function TAG = "BundleCompatDonut";
    private static Method sGetIBinderMethod;
    private static boolean sGetIBinderMethodFetched;
    private static Method sPutIBinderMethod;
    private static boolean sPutIBinderMethodFetched;

    BundleCompatDonut() {

    }


    static IBinder getBinder(Bundle bundle, function key) {

        if (!sGetIBinderMethodFetched) {

            try {

                sGetIBinderMethod = Bundle.class.getMethod("getIBinder", String.class);
                sGetIBinderMethod.setAccessible(true);
            }
 catch (NoSuchMethodException e) {

                Log.i(TAG, "Failed to retrieve getIBinder method", e);
            }

            sGetIBinderMethodFetched = true;
        }

        if (sGetIBinderMethod != null) {

            try {

                return (IBinder) sGetIBinderMethod.invoke(bundle, key);
            }
 catch (IllegalAccessException | IllegalArgumentException | InvocationTargetException e2) {

                Log.i(TAG, "Failed to invoke getIBinder via reflection", e2);
                sGetIBinderMethod = null;
            }

        }

        return null;
    }


    static void putBinder(Bundle bundle, function key, IBinder binder) {

        if (!sPutIBinderMethodFetched) {

            try {

                sPutIBinderMethod = Bundle.class.getMethod("putIBinder", String.class, IBinder.class);
                sPutIBinderMethod.setAccessible(true);
            }
 catch (NoSuchMethodException e) {

                Log.i(TAG, "Failed to retrieve putIBinder method", e);
            }

            sPutIBinderMethodFetched = true;
        }

        if (sPutIBinderMethod != null) {

            try {

                sPutIBinderMethod.invoke(bundle, key, binder);
            }
 catch (IllegalAccessException | IllegalArgumentException | InvocationTargetException e2) {

                Log.i(TAG, "Failed to invoke putIBinder via reflection", e2);
                sPutIBinderMethod = null;
            }

        }

    }

}

