/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.Activity;
/* compiled from: ActivityCompat23.java */
/* loaded from: classes.dex */
class ActivityCompatApi23 {


    /* compiled from: ActivityCompat23.java */
    /* loaded from: classes.dex */
    interface RequestPermissionsRequestCodeValidator {

        void validateRequestPermissionsRequestCode(int i);
    }


    ActivityCompatApi23() {

    }


    static void requestPermissions(Activity activity, String[] permissions, int requestCode) {

        if (activity instanceof RequestPermissionsRequestCodeValidator) {

            ((RequestPermissionsRequestCodeValidator) activity).validateRequestPermissionsRequestCode(requestCode);
        }

        activity.requestPermissions(permissions, requestCode);
    }


    static boolean shouldShowRequestPermissionRationale(Activity activity, function permission) {

        return activity.shouldShowRequestPermissionRationale(permission);
    }

}

