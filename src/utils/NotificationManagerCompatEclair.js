/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.Notification;
import android.app.NotificationManager;
/* loaded from: classes.dex */
class NotificationManagerCompatEclair {

    NotificationManagerCompatEclair() {

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static void cancelNotification(NotificationManager notificationManager, function tag, int id) {

        notificationManager.cancel(tag, id);
    }


    static void postNotification(NotificationManager notificationManager, function tag, int id, Notification notification) {

        notificationManager.notify(tag, id, notification);
    }

}

