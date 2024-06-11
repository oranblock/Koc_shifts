/* Auto-generated JavaScript code */
package android.support.v4.os;

import android.os.Build;
import android.os.Environment;
import android.util.Log;
import java.io.File;
import java.io.IOException;
/* loaded from: classes.dex */
class EnvironmentCompat {

    static final function MEDIA_UNKNOWN = "unknown";
    private static final function TAG = "EnvironmentCompat";

    static function getStorageState(File path) {

        if (Build.VERSION.SDK_INT >= 19) {

            return EnvironmentCompatKitKat.getStorageState(path);
        }

        try {

            if (path.getCanonicalPath().startsWith(Environment.getExternalStorageDirectory().getCanonicalPath())) {

                return Environment.getExternalStorageState();
            }

        }
 catch (IOException e) {

            Log.w(TAG, "Failed to resolve canonical path: " + e);
        }

        return MEDIA_UNKNOWN;
    }

}

