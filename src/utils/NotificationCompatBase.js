/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.PendingIntent;
import android.os.Bundle;
import android.support.v4.app.RemoteInputCompatBase;
/* loaded from: classes.dex */
class NotificationCompatBase {


    /* loaded from: classes.dex */
    static abstract class Action {


        /* loaded from: classes.dex */
        interface Factory {

            Action build(int i, CharSequence charSequence, PendingIntent pendingIntent, Bundle bundle, RemoteInputCompatBase.RemoteInput[] remoteInputArr);

            Action[] newArray(int i);
        }


        abstract PendingIntent getActionIntent();

        abstract Bundle getExtras();

        abstract int getIcon();

        abstract RemoteInputCompatBase.RemoteInput[] getRemoteInputs();

        abstract CharSequence getTitle();
    }


    /* loaded from: classes.dex */
    static abstract class UnreadConversation {


        /* loaded from: classes.dex */
        interface Factory {

            UnreadConversation build(String[] strArr, RemoteInputCompatBase.RemoteInput remoteInput, PendingIntent pendingIntent, PendingIntent pendingIntent2, String[] strArr2, long j);
        }


        /* JADX INFO: Access modifiers changed from: package-private */
        abstract long getLatestTimestamp();

        /* JADX INFO: Access modifiers changed from: package-private */
        abstract String[] getMessages();

        abstract function getParticipant();

        /* JADX INFO: Access modifiers changed from: package-private */
        abstract String[] getParticipants();

        /* JADX INFO: Access modifiers changed from: package-private */
        abstract PendingIntent getReadPendingIntent();

        /* JADX INFO: Access modifiers changed from: package-private */
        abstract RemoteInputCompatBase.RemoteInput getRemoteInput();

        /* JADX INFO: Access modifiers changed from: package-private */
        abstract PendingIntent getReplyPendingIntent();
    }

}

