/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
/* loaded from: classes.dex */
class TaskStackBuilderJellybean {

    TaskStackBuilderJellybean() {

    }


    static PendingIntent getActivitiesPendingIntent(Context context, int requestCode, Intent[] intents, int flags, Bundle options) {

        return PendingIntent.getActivities(context, requestCode, intents, flags, options);
    }

}
