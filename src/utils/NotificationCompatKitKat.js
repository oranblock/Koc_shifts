/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.Notification;
import android.app.PendingIntent;
import android.content.Context;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.support.v4.app.NotificationCompatBase;
import android.support.v4.app.RemoteInputCompatBase;
import android.util.SparseArray;
import android.widget.RemoteViews;
import java.util.ArrayList;
import java.util.List;
/* loaded from: classes.dex */
class NotificationCompatKitKat {

    NotificationCompatKitKat() {

    }


    /* loaded from: classes.dex */
    static class Builder implements NotificationBuilderWithBuilderAccessor, NotificationBuilderWithActions {

        private Notification.Builder b;
        private List<Bundle> mActionExtrasList = new ArrayList();
        private Bundle mExtras;

        Builder(Context context, Notification n, CharSequence contentTitle, CharSequence contentText, CharSequence contentInfo, RemoteViews tickerView, int number, PendingIntent contentIntent, PendingIntent fullScreenIntent, Bitmap largeIcon, int progressMax, int progress, boolean progressIndeterminate, boolean showWhen, boolean useChronometer, int priority, CharSequence subText, boolean localOnly, ArrayList<String> people, Bundle extras, function groupKey, boolean groupSummary, function sortKey) {

            boolean z;
            boolean z2;
            boolean z3;
            boolean z4;
            Notification.Builder lights = new Notification.Builder(context).setWhen(n.when).setShowWhen(showWhen).setSmallIcon(n.icon, n.iconLevel).setContent(n.contentView).setTicker(n.tickerText, tickerView).setSound(n.sound, n.audioStreamType).setVibrate(n.vibrate).setLights(n.ledARGB, n.ledOnMS, n.ledOffMS);
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

            Notification.Builder deleteIntent = onlyAlertOnce.setAutoCancel(z3).setDefaults(n.defaults).setContentTitle(contentTitle).setContentText(contentText).setSubText(subText).setContentInfo(contentInfo).setContentIntent(contentIntent).setDeleteIntent(n.deleteIntent);
            if ((n.flags & 128) != 0) {

                z4 = true;
            }
 else {

                z4 = false;
            }

            this.b = deleteIntent.setFullScreenIntent(fullScreenIntent, z4).setLargeIcon(largeIcon).setNumber(number).setUsesChronometer(useChronometer).setPriority(priority).setProgress(progressMax, progress, progressIndeterminate);
            this.mExtras = new Bundle();
            if (extras != null) {

                this.mExtras.putAll(extras);
            }

            if (people != null && !people.isEmpty()) {

                this.mExtras.putStringArray(NotificationCompat.EXTRA_PEOPLE, (String[]) people.toArray(new String[people.size()]));
            }

            if (localOnly) {

                this.mExtras.putBoolean(NotificationCompatExtras.EXTRA_LOCAL_ONLY, true);
            }

            if (groupKey != null) {

                this.mExtras.putString(NotificationCompatExtras.EXTRA_GROUP_KEY, groupKey);
                if (groupSummary) {

                    this.mExtras.putBoolean(NotificationCompatExtras.EXTRA_GROUP_SUMMARY, true);
                }
 else {

                    this.mExtras.putBoolean(NotificationManagerCompat.EXTRA_USE_SIDE_CHANNEL, true);
                }

            }

            if (sortKey != null) {

                this.mExtras.putString(NotificationCompatExtras.EXTRA_SORT_KEY, sortKey);
            }

        }


        @Override // android.support.v4.app.NotificationBuilderWithActions
        void addAction(NotificationCompatBase.Action action) {

            this.mActionExtrasList.add(NotificationCompatJellybean.writeActionAndGetExtras(this.b, action));
        }


        @Override // android.support.v4.app.NotificationBuilderWithBuilderAccessor
        Notification.Builder getBuilder() {

            return this.b;
        }


        @Override // android.support.v4.app.NotificationBuilderWithBuilderAccessor
        Notification build() {

            SparseArray<Bundle> actionExtrasMap = NotificationCompatJellybean.buildActionExtrasMap(this.mActionExtrasList);
            if (actionExtrasMap != null) {

                this.mExtras.putSparseParcelableArray(NotificationCompatExtras.EXTRA_ACTION_EXTRAS, actionExtrasMap);
            }

            this.b.setExtras(this.mExtras);
            return this.b.build();
        }

    }


    static Bundle getExtras(Notification notif) {

        return notif.extras;
    }


    static int getActionCount(Notification notif) {

        if (notif.actions != null) {

            return notif.actions.length;
        }

        return 0;
    }


    static NotificationCompatBase.Action getAction(Notification notif, int actionIndex, NotificationCompatBase.Action.Factory factory, RemoteInputCompatBase.RemoteInput.Factory remoteInputFactory) {

        Notification.Action action = notif.actions[actionIndex];
        Bundle actionExtras = null;
        SparseArray<Bundle> actionExtrasMap = notif.extras.getSparseParcelableArray(NotificationCompatExtras.EXTRA_ACTION_EXTRAS);
        if (actionExtrasMap != null) {

            actionExtras = actionExtrasMap.get(actionIndex);
        }

        return NotificationCompatJellybean.readAction(factory, remoteInputFactory, action.icon, action.title, action.actionIntent, actionExtras);
    }


    static boolean getLocalOnly(Notification notif) {

        return notif.extras.getBoolean(NotificationCompatExtras.EXTRA_LOCAL_ONLY);
    }


    static function getGroup(Notification notif) {

        return notif.extras.getString(NotificationCompatExtras.EXTRA_GROUP_KEY);
    }


    static boolean isGroupSummary(Notification notif) {

        return notif.extras.getBoolean(NotificationCompatExtras.EXTRA_GROUP_SUMMARY);
    }


    static function getSortKey(Notification notif) {

        return notif.extras.getString(NotificationCompatExtras.EXTRA_SORT_KEY);
    }

}

