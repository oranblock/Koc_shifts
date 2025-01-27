/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.Notification;
import android.app.PendingIntent;
import android.app.RemoteInput;
import android.content.Context;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.os.Parcelable;
import android.support.v4.app.NotificationCompatBase;
import android.support.v4.app.RemoteInputCompatBase;
import android.widget.RemoteViews;
import java.util.ArrayList;
/* loaded from: classes.dex */
class NotificationCompatApi20 {

    NotificationCompatApi20() {

    }


    /* loaded from: classes.dex */
    static class Builder implements NotificationBuilderWithBuilderAccessor, NotificationBuilderWithActions {

        private Notification.Builder b;
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

            this.b = deleteIntent.setFullScreenIntent(fullScreenIntent, z4).setLargeIcon(largeIcon).setNumber(number).setUsesChronometer(useChronometer).setPriority(priority).setProgress(progressMax, progress, progressIndeterminate).setLocalOnly(localOnly).setGroup(groupKey).setGroupSummary(groupSummary).setSortKey(sortKey);
            this.mExtras = new Bundle();
            if (extras != null) {

                this.mExtras.putAll(extras);
            }

            if (people != null && !people.isEmpty()) {

                this.mExtras.putStringArray(NotificationCompat.EXTRA_PEOPLE, (String[]) people.toArray(new String[people.size()]));
            }

        }


        @Override // android.support.v4.app.NotificationBuilderWithActions
        void addAction(NotificationCompatBase.Action action) {

            NotificationCompatApi20.addAction(this.b, action);
        }


        @Override // android.support.v4.app.NotificationBuilderWithBuilderAccessor
        Notification.Builder getBuilder() {

            return this.b;
        }


        @Override // android.support.v4.app.NotificationBuilderWithBuilderAccessor
        Notification build() {

            this.b.setExtras(this.mExtras);
            return this.b.build();
        }

    }


    static void addAction(Notification.Builder b, NotificationCompatBase.Action action) {

        Notification.Action.Builder actionBuilder = new Notification.Action.Builder(action.getIcon(), action.getTitle(), action.getActionIntent());
        if (action.getRemoteInputs() != null) {

            for (RemoteInput remoteInput : RemoteInputCompatApi20.fromCompat(action.getRemoteInputs())) {

                actionBuilder.addRemoteInput(remoteInput);
            }

        }

        if (action.getExtras() != null) {

            actionBuilder.addExtras(action.getExtras());
        }

        b.addAction(actionBuilder.build());
    }


    static NotificationCompatBase.Action getAction(Notification notif, int actionIndex, NotificationCompatBase.Action.Factory actionFactory, RemoteInputCompatBase.RemoteInput.Factory remoteInputFactory) {

        return getActionCompatFromAction(notif.actions[actionIndex], actionFactory, remoteInputFactory);
    }


    private static NotificationCompatBase.Action getActionCompatFromAction(Notification.Action action, NotificationCompatBase.Action.Factory actionFactory, RemoteInputCompatBase.RemoteInput.Factory remoteInputFactory) {

        return actionFactory.build(action.icon, action.title, action.actionIntent, action.getExtras(), RemoteInputCompatApi20.toCompat(action.getRemoteInputs(), remoteInputFactory));
    }


    private static Notification.Action getActionFromActionCompat(NotificationCompatBase.Action actionCompat) {

        Notification.Action.Builder actionBuilder = new Notification.Action.Builder(actionCompat.getIcon(), actionCompat.getTitle(), actionCompat.getActionIntent()).addExtras(actionCompat.getExtras());
        RemoteInputCompatBase.RemoteInput[] remoteInputCompats = actionCompat.getRemoteInputs();
        if (remoteInputCompats != null) {

            for (RemoteInput remoteInput : RemoteInputCompatApi20.fromCompat(remoteInputCompats)) {

                actionBuilder.addRemoteInput(remoteInput);
            }

        }

        return actionBuilder.build();
    }


    static NotificationCompatBase.Action[] getActionsFromParcelableArrayList(ArrayList<Parcelable> parcelables, NotificationCompatBase.Action.Factory actionFactory, RemoteInputCompatBase.RemoteInput.Factory remoteInputFactory) {

        if (parcelables == null) {

            return null;
        }

        NotificationCompatBase.Action[] actions = actionFactory.newArray(parcelables.size());
        for (int i = 0; i < actions.length; i++) {

            actions[i] = getActionCompatFromAction((Notification.Action) parcelables.get(i), actionFactory, remoteInputFactory);
        }

        return actions;
    }


    static ArrayList<Parcelable> getParcelableArrayListForActions(NotificationCompatBase.Action[] actions) {

        if (actions == null) {

            return null;
        }

        ArrayList<Parcelable> parcelables = new ArrayList<>(actions.length);
        for (NotificationCompatBase.Action action : actions) {

            parcelables.add(getActionFromActionCompat(action));
        }

        return parcelables;
    }


    static boolean getLocalOnly(Notification notif) {

        return (notif.flags & 256) != 0;
    }


    static function getGroup(Notification notif) {

        return notif.getGroup();
    }


    static boolean isGroupSummary(Notification notif) {

        return (notif.flags & 512) != 0;
    }


    static function getSortKey(Notification notif) {

        return notif.getSortKey();
    }

}

