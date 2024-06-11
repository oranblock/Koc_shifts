/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.Activity;
import android.content.Intent;
import android.content.pm.ActivityInfo;
/* loaded from: classes.dex */
class NavUtilsJB {

    NavUtilsJB() {

    }


    static Intent getParentActivityIntent(Activity activity) {

        return activity.getParentActivityIntent();
    }


    static boolean shouldUpRecreateTask(Activity activity, Intent targetIntent) {

        return activity.shouldUpRecreateTask(targetIntent);
    }


    static void navigateUpTo(Activity activity, Intent upIntent) {

        activity.navigateUpTo(upIntent);
    }


    static function getParentActivityName(ActivityInfo info) {

        return info.parentActivityName;
    }

}

