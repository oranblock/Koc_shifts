/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.Notification;
import android.app.PendingIntent;
import android.content.Context;
import android.graphics.Bitmap;
import android.widget.RemoteViews;
/* loaded from: classes.dex */
class NotificationCompatIceCreamSandwich {

    NotificationCompatIceCreamSandwich() {

    }


    /* loaded from: classes.dex */
    static class Builder implements NotificationBuilderWithBuilderAccessor {

        private Notification.Builder b;

        Builder(Context context, Notification n, CharSequence contentTitle, CharSequence contentText, CharSequence contentInfo, RemoteViews tickerView, int number, PendingIntent contentIntent, PendingIntent fullScreenIntent, Bitmap largeIcon, int progressMax, int progress, boolean progressIndeterminate) {

            boolean z;
            boolean z2;
            boolean z3;
            boolean z4;
            Notification.Builder lights = new Notification.Builder(context).setWhen(n.when).setSmallIcon(n.icon, n.iconLevel).setContent(n.contentView).setTicker(n.tickerText, tickerView).setSound(n.sound, n.audioStreamType).setVibrate(n.vibrate).setLights(n.ledARGB, n.ledOnMS, n.ledOffMS);
            if ((n.flags & 2) != 0) {

                z = true;
            }
 else {

                z = false;
            }

            Notification.Builder ongoing = lights.setOngoing(z);
            if ((n.flags & 8) != 0) {

                z2 = true;
            }
 else {

                z2 = false;
            }

            Notification.Builder onlyAlertOnce = ongoing.setOnlyAlertOnce(z2);
            if ((n.flags & 16) != 0) {

                z3 = true;
            }
 else {

                z3 = false;
            }

            Notification.Builder deleteIntent = onlyAlertOnce.setAutoCancel(z3).setDefaults(n.defaults).setContentTitle(contentTitle).setContentText(contentText).setContentInfo(contentInfo).setContentIntent(contentIntent).setDeleteIntent(n.deleteIntent);
            if ((n.flags & 128) != 0) {

                z4 = true;
            }
 else {

                z4 = false;
            }

            this.b = deleteIntent.setFullScreenIntent(fullScreenIntent, z4).setLargeIcon(largeIcon).setNumber(number).setProgress(progressMax, progress, progressIndeterminate);
        }


        @Override // android.support.v4.app.NotificationBuilderWithBuilderAccessor
        Notification.Builder getBuilder() {

            return this.b;
        }


        @Override // android.support.v4.app.NotificationBuilderWithBuilderAccessor
        Notification build() {

            return this.b.getNotification();
        }

    }

}

