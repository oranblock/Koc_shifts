/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
/* loaded from: classes.dex */
class ActivityCompatJB {

    ActivityCompatJB() {

    }


    static void startActivity(Context context, Intent intent, Bundle options) {

        context.startActivity(intent, options);
    }


    static void startActivityForResult(Activity activity, Intent intent, int requestCode, Bundle options) {

        activity.startActivityForResult(intent, requestCode, options);
    }


    static void finishAffinity(Activity activity) {

        activity.finishAffinity();
    }

}

