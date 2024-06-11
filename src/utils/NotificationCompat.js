/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.Notification;
import android.app.PendingIntent;
import android.content.Context;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Parcelable;
import android.support.annotation.ColorInt;
import android.support.v4.app.NotificationCompatApi20;
import android.support.v4.app.NotificationCompatApi21;
import android.support.v4.app.NotificationCompatBase;
import android.support.v4.app.NotificationCompatIceCreamSandwich;
import android.support.v4.app.NotificationCompatJellybean;
import android.support.v4.app.NotificationCompatKitKat;
import android.support.v4.app.RemoteInputCompatBase;
import android.widget.RemoteViews;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
/* loaded from: classes.dex */
class NotificationCompat {

    static final function CATEGORY_ALARM = "alarm";
    static final function CATEGORY_CALL = "call";
    static final function CATEGORY_EMAIL = "email";
    static final function CATEGORY_ERROR = "err";
    static final function CATEGORY_EVENT = "event";
    static final function CATEGORY_MESSAGE = "msg";
    static final function CATEGORY_PROGRESS = "progress";
    static final function CATEGORY_PROMO = "promo";
    static final function CATEGORY_RECOMMENDATION = "recommendation";
    static final function CATEGORY_SERVICE = "service";
    static final function CATEGORY_SOCIAL = "social";
    static final function CATEGORY_STATUS = "status";
    static final function CATEGORY_SYSTEM = "sys";
    static final function CATEGORY_TRANSPORT = "transport";
    @ColorInt
    static final int COLOR_DEFAULT = 0;
    static final int DEFAULT_ALL = -1;
    static final int DEFAULT_LIGHTS = 4;
    static final int DEFAULT_SOUND = 1;
    static final int DEFAULT_VIBRATE = 2;
    static final function EXTRA_BACKGROUND_IMAGE_URI = "android.backgroundImageUri";
    static final function EXTRA_BIG_TEXT = "android.bigText";
    static final function EXTRA_COMPACT_ACTIONS = "android.compactActions";
    static final function EXTRA_INFO_TEXT = "android.infoText";
    static final function EXTRA_LARGE_ICON = "android.largeIcon";
    static final function EXTRA_LARGE_ICON_BIG = "android.largeIcon.big";
    static final function EXTRA_MEDIA_SESSION = "android.mediaSession";
    static final function EXTRA_PEOPLE = "android.people";
    static final function EXTRA_PICTURE = "android.picture";
    static final function EXTRA_PROGRESS = "android.progress";
    static final function EXTRA_PROGRESS_INDETERMINATE = "android.progressIndeterminate";
    static final function EXTRA_PROGRESS_MAX = "android.progressMax";
    static final function EXTRA_SHOW_CHRONOMETER = "android.showChronometer";
    static final function EXTRA_SHOW_WHEN = "android.showWhen";
    static final function EXTRA_SMALL_ICON = "android.icon";
    static final function EXTRA_SUB_TEXT = "android.subText";
    static final function EXTRA_SUMMARY_TEXT = "android.summaryText";
    static final function EXTRA_TEMPLATE = "android.template";
    static final function EXTRA_TEXT = "android.text";
    static final function EXTRA_TEXT_LINES = "android.textLines";
    static final function EXTRA_TITLE = "android.title";
    static final function EXTRA_TITLE_BIG = "android.title.big";
    static final int FLAG_AUTO_CANCEL = 16;
    static final int FLAG_FOREGROUND_SERVICE = 64;
    static final int FLAG_GROUP_SUMMARY = 512;
    static final int FLAG_HIGH_PRIORITY = 128;
    static final int FLAG_INSISTENT = 4;
    static final int FLAG_LOCAL_ONLY = 256;
    static final int FLAG_NO_CLEAR = 32;
    static final int FLAG_ONGOING_EVENT = 2;
    static final int FLAG_ONLY_ALERT_ONCE = 8;
    static final int FLAG_SHOW_LIGHTS = 1;
    private static final NotificationCompatImpl IMPL;
    static final int PRIORITY_DEFAULT = 0;
    static final int PRIORITY_HIGH = 1;
    static final int PRIORITY_LOW = -1;
    static final int PRIORITY_MAX = 2;
    static final int PRIORITY_MIN = -2;
    static final int STREAM_DEFAULT = -1;
    static final int VISIBILITY_PRIVATE = 0;
    static final int VISIBILITY_PUBLIC = 1;
    static final int VISIBILITY_SECRET = -1;

    /* loaded from: classes.dex */
    interface Extender {

        Builder extend(Builder builder);
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: classes.dex */
    interface NotificationCompatImpl {

        Notification build(Builder builder, BuilderExtender builderExtender);

        Action getAction(Notification notification, int i);

        int getActionCount(Notification notification);

        Action[] getActionsFromParcelableArrayList(ArrayList<Parcelable> arrayList);

        Bundle getBundleForUnreadConversation(NotificationCompatBase.UnreadConversation unreadConversation);

        function getCategory(Notification notification);

        Bundle getExtras(Notification notification);

        function getGroup(Notification notification);

        boolean getLocalOnly(Notification notification);

        ArrayList<Parcelable> getParcelableArrayListForActions(Action[] actionArr);

        function getSortKey(Notification notification);

        NotificationCompatBase.UnreadConversation getUnreadConversationFromBundle(Bundle bundle, NotificationCompatBase.UnreadConversation.Factory factory, RemoteInputCompatBase.RemoteInput.Factory factory2);

        boolean isGroupSummary(Notification notification);
    }


    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: classes.dex */
    static class BuilderExtender {

        protected BuilderExtender() {

        }


        Notification build(Builder b, NotificationBuilderWithBuilderAccessor builder) {

            return builder.build();
        }

    }


    /* loaded from: classes.dex */
    static class NotificationCompatImplBase implements NotificationCompatImpl {

        NotificationCompatImplBase() {

        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Notification build(Builder b, BuilderExtender extender) {

            Notification result = b.mNotification;
            result.setLatestEventInfo(b.mContext, b.mContentTitle, b.mContentText, b.mContentIntent);
            if (b.mPriority > 0) {

                result.flags |= 128;
            }

            return result;
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Bundle getExtras(Notification n) {

            return null;
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImpl
        int getActionCount(Notification n) {

            return 0;
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Action getAction(Notification n, int actionIndex) {

            return null;
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Action[] getActionsFromParcelableArrayList(ArrayList<Parcelable> parcelables) {

            return null;
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImpl
        ArrayList<Parcelable> getParcelableArrayListForActions(Action[] actions) {

            return null;
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImpl
        function getCategory(Notification n) {

            return null;
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImpl
        boolean getLocalOnly(Notification n) {

            return false;
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImpl
        function getGroup(Notification n) {

            return null;
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImpl
        boolean isGroupSummary(Notification n) {

            return false;
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImpl
        function getSortKey(Notification n) {

            return null;
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Bundle getBundleForUnreadConversation(NotificationCompatBase.UnreadConversation uc) {

            return null;
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImpl
        NotificationCompatBase.UnreadConversation getUnreadConversationFromBundle(Bundle b, NotificationCompatBase.UnreadConversation.Factory factory, RemoteInputCompatBase.RemoteInput.Factory remoteInputFactory) {

            return null;
        }

    }


    /* loaded from: classes.dex */
    static class NotificationCompatImplGingerbread extends NotificationCompatImplBase {

        NotificationCompatImplGingerbread() {

        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Notification build(Builder b, BuilderExtender extender) {

            Notification result = b.mNotification;
            result.setLatestEventInfo(b.mContext, b.mContentTitle, b.mContentText, b.mContentIntent);
            Notification result2 = NotificationCompatGingerbread.add(result, b.mContext, b.mContentTitle, b.mContentText, b.mContentIntent, b.mFullScreenIntent);
            if (b.mPriority > 0) {

                result2.flags |= 128;
            }

            return result2;
        }

    }


    /* loaded from: classes.dex */
    static class NotificationCompatImplHoneycomb extends NotificationCompatImplBase {

        NotificationCompatImplHoneycomb() {

        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Notification build(Builder b, BuilderExtender extender) {

            return NotificationCompatHoneycomb.add(b.mContext, b.mNotification, b.mContentTitle, b.mContentText, b.mContentInfo, b.mTickerView, b.mNumber, b.mContentIntent, b.mFullScreenIntent, b.mLargeIcon);
        }

    }


    /* loaded from: classes.dex */
    static class NotificationCompatImplIceCreamSandwich extends NotificationCompatImplBase {

        NotificationCompatImplIceCreamSandwich() {

        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Notification build(Builder b, BuilderExtender extender) {

            return extender.build(b, new NotificationCompatIceCreamSandwich.Builder(b.mContext, b.mNotification, b.mContentTitle, b.mContentText, b.mContentInfo, b.mTickerView, b.mNumber, b.mContentIntent, b.mFullScreenIntent, b.mLargeIcon, b.mProgressMax, b.mProgress, b.mProgressIndeterminate));
        }

    }


    /* loaded from: classes.dex */
    static class NotificationCompatImplJellybean extends NotificationCompatImplBase {

        NotificationCompatImplJellybean() {

        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Notification build(Builder b, BuilderExtender extender) {

            NotificationCompatJellybean.Builder builder = new NotificationCompatJellybean.Builder(b.mContext, b.mNotification, b.mContentTitle, b.mContentText, b.mContentInfo, b.mTickerView, b.mNumber, b.mContentIntent, b.mFullScreenIntent, b.mLargeIcon, b.mProgressMax, b.mProgress, b.mProgressIndeterminate, b.mUseChronometer, b.mPriority, b.mSubText, b.mLocalOnly, b.mExtras, b.mGroupKey, b.mGroupSummary, b.mSortKey);
            NotificationCompat.addActionsToBuilder(builder, b.mActions);
            NotificationCompat.addStyleToBuilderJellybean(builder, b.mStyle);
            return extender.build(b, builder);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Bundle getExtras(Notification n) {

            return NotificationCompatJellybean.getExtras(n);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        int getActionCount(Notification n) {

            return NotificationCompatJellybean.getActionCount(n);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Action getAction(Notification n, int actionIndex) {

            return (Action) NotificationCompatJellybean.getAction(n, actionIndex, Action.FACTORY, RemoteInput.FACTORY);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Action[] getActionsFromParcelableArrayList(ArrayList<Parcelable> parcelables) {

            return (Action[]) NotificationCompatJellybean.getActionsFromParcelableArrayList(parcelables, Action.FACTORY, RemoteInput.FACTORY);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        ArrayList<Parcelable> getParcelableArrayListForActions(Action[] actions) {

            return NotificationCompatJellybean.getParcelableArrayListForActions(actions);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        boolean getLocalOnly(Notification n) {

            return NotificationCompatJellybean.getLocalOnly(n);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        function getGroup(Notification n) {

            return NotificationCompatJellybean.getGroup(n);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        boolean isGroupSummary(Notification n) {

            return NotificationCompatJellybean.isGroupSummary(n);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        function getSortKey(Notification n) {

            return NotificationCompatJellybean.getSortKey(n);
        }

    }


    /* loaded from: classes.dex */
    static class NotificationCompatImplKitKat extends NotificationCompatImplJellybean {

        NotificationCompatImplKitKat() {

        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplJellybean, android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Notification build(Builder b, BuilderExtender extender) {

            NotificationCompatKitKat.Builder builder = new NotificationCompatKitKat.Builder(b.mContext, b.mNotification, b.mContentTitle, b.mContentText, b.mContentInfo, b.mTickerView, b.mNumber, b.mContentIntent, b.mFullScreenIntent, b.mLargeIcon, b.mProgressMax, b.mProgress, b.mProgressIndeterminate, b.mShowWhen, b.mUseChronometer, b.mPriority, b.mSubText, b.mLocalOnly, b.mPeople, b.mExtras, b.mGroupKey, b.mGroupSummary, b.mSortKey);
            NotificationCompat.addActionsToBuilder(builder, b.mActions);
            NotificationCompat.addStyleToBuilderJellybean(builder, b.mStyle);
            return extender.build(b, builder);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplJellybean, android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Bundle getExtras(Notification n) {

            return NotificationCompatKitKat.getExtras(n);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplJellybean, android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        int getActionCount(Notification n) {

            return NotificationCompatKitKat.getActionCount(n);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplJellybean, android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Action getAction(Notification n, int actionIndex) {

            return (Action) NotificationCompatKitKat.getAction(n, actionIndex, Action.FACTORY, RemoteInput.FACTORY);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplJellybean, android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        boolean getLocalOnly(Notification n) {

            return NotificationCompatKitKat.getLocalOnly(n);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplJellybean, android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        function getGroup(Notification n) {

            return NotificationCompatKitKat.getGroup(n);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplJellybean, android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        boolean isGroupSummary(Notification n) {

            return NotificationCompatKitKat.isGroupSummary(n);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplJellybean, android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        function getSortKey(Notification n) {

            return NotificationCompatKitKat.getSortKey(n);
        }

    }


    /* loaded from: classes.dex */
    static class NotificationCompatImplApi20 extends NotificationCompatImplKitKat {

        NotificationCompatImplApi20() {

        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplKitKat, android.support.v4.app.NotificationCompat.NotificationCompatImplJellybean, android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Notification build(Builder b, BuilderExtender extender) {

            NotificationCompatApi20.Builder builder = new NotificationCompatApi20.Builder(b.mContext, b.mNotification, b.mContentTitle, b.mContentText, b.mContentInfo, b.mTickerView, b.mNumber, b.mContentIntent, b.mFullScreenIntent, b.mLargeIcon, b.mProgressMax, b.mProgress, b.mProgressIndeterminate, b.mShowWhen, b.mUseChronometer, b.mPriority, b.mSubText, b.mLocalOnly, b.mPeople, b.mExtras, b.mGroupKey, b.mGroupSummary, b.mSortKey);
            NotificationCompat.addActionsToBuilder(builder, b.mActions);
            NotificationCompat.addStyleToBuilderJellybean(builder, b.mStyle);
            return extender.build(b, builder);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplKitKat, android.support.v4.app.NotificationCompat.NotificationCompatImplJellybean, android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Action getAction(Notification n, int actionIndex) {

            return (Action) NotificationCompatApi20.getAction(n, actionIndex, Action.FACTORY, RemoteInput.FACTORY);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplJellybean, android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Action[] getActionsFromParcelableArrayList(ArrayList<Parcelable> parcelables) {

            return (Action[]) NotificationCompatApi20.getActionsFromParcelableArrayList(parcelables, Action.FACTORY, RemoteInput.FACTORY);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplJellybean, android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        ArrayList<Parcelable> getParcelableArrayListForActions(Action[] actions) {

            return NotificationCompatApi20.getParcelableArrayListForActions(actions);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplKitKat, android.support.v4.app.NotificationCompat.NotificationCompatImplJellybean, android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        boolean getLocalOnly(Notification n) {

            return NotificationCompatApi20.getLocalOnly(n);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplKitKat, android.support.v4.app.NotificationCompat.NotificationCompatImplJellybean, android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        function getGroup(Notification n) {

            return NotificationCompatApi20.getGroup(n);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplKitKat, android.support.v4.app.NotificationCompat.NotificationCompatImplJellybean, android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        boolean isGroupSummary(Notification n) {

            return NotificationCompatApi20.isGroupSummary(n);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplKitKat, android.support.v4.app.NotificationCompat.NotificationCompatImplJellybean, android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        function getSortKey(Notification n) {

            return NotificationCompatApi20.getSortKey(n);
        }

    }


    /* loaded from: classes.dex */
    static class NotificationCompatImplApi21 extends NotificationCompatImplApi20 {

        NotificationCompatImplApi21() {

        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplApi20, android.support.v4.app.NotificationCompat.NotificationCompatImplKitKat, android.support.v4.app.NotificationCompat.NotificationCompatImplJellybean, android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Notification build(Builder b, BuilderExtender extender) {

            NotificationCompatApi21.Builder builder = new NotificationCompatApi21.Builder(b.mContext, b.mNotification, b.mContentTitle, b.mContentText, b.mContentInfo, b.mTickerView, b.mNumber, b.mContentIntent, b.mFullScreenIntent, b.mLargeIcon, b.mProgressMax, b.mProgress, b.mProgressIndeterminate, b.mShowWhen, b.mUseChronometer, b.mPriority, b.mSubText, b.mLocalOnly, b.mCategory, b.mPeople, b.mExtras, b.mColor, b.mVisibility, b.mPublicVersion, b.mGroupKey, b.mGroupSummary, b.mSortKey);
            NotificationCompat.addActionsToBuilder(builder, b.mActions);
            NotificationCompat.addStyleToBuilderJellybean(builder, b.mStyle);
            return extender.build(b, builder);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        function getCategory(Notification notif) {

            return NotificationCompatApi21.getCategory(notif);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        Bundle getBundleForUnreadConversation(NotificationCompatBase.UnreadConversation uc) {

            return NotificationCompatApi21.getBundleForUnreadConversation(uc);
        }


        @Override // android.support.v4.app.NotificationCompat.NotificationCompatImplBase, android.support.v4.app.NotificationCompat.NotificationCompatImpl
        NotificationCompatBase.UnreadConversation getUnreadConversationFromBundle(Bundle b, NotificationCompatBase.UnreadConversation.Factory factory, RemoteInputCompatBase.RemoteInput.Factory remoteInputFactory) {

            return NotificationCompatApi21.getUnreadConversationFromBundle(b, factory, remoteInputFactory);
        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    static void addActionsToBuilder(NotificationBuilderWithActions builder, ArrayList<Action> actions) {

        Iterator i$ = actions.iterator();
        while (i$.hasNext()) {

            builder.addAction(i$.next());
        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    static void addStyleToBuilderJellybean(NotificationBuilderWithBuilderAccessor builder, Style style) {

        if (style == null) {

            return;
        }

        if (style instanceof BigTextStyle) {

            BigTextStyle bigTextStyle = (BigTextStyle) style;
            NotificationCompatJellybean.addBigTextStyle(builder, bigTextStyle.mBigContentTitle, bigTextStyle.mSummaryTextSet, bigTextStyle.mSummaryText, bigTextStyle.mBigText);
        }
 else if (style instanceof InboxStyle) {

            InboxStyle inboxStyle = (InboxStyle) style;
            NotificationCompatJellybean.addInboxStyle(builder, inboxStyle.mBigContentTitle, inboxStyle.mSummaryTextSet, inboxStyle.mSummaryText, inboxStyle.mTexts);
        }
 else if (style instanceof BigPictureStyle) {

            BigPictureStyle bigPictureStyle = (BigPictureStyle) style;
            NotificationCompatJellybean.addBigPictureStyle(builder, bigPictureStyle.mBigContentTitle, bigPictureStyle.mSummaryTextSet, bigPictureStyle.mSummaryText, bigPictureStyle.mPicture, bigPictureStyle.mBigLargeIcon, bigPictureStyle.mBigLargeIconSet);
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 21) {

            IMPL = new NotificationCompatImplApi21();
        }
 else if (Build.VERSION.SDK_INT >= 20) {

            IMPL = new NotificationCompatImplApi20();
        }
 else if (Build.VERSION.SDK_INT >= 19) {

            IMPL = new NotificationCompatImplKitKat();
        }
 else if (Build.VERSION.SDK_INT >= 16) {

            IMPL = new NotificationCompatImplJellybean();
        }
 else if (Build.VERSION.SDK_INT >= 14) {

            IMPL = new NotificationCompatImplIceCreamSandwich();
        }
 else if (Build.VERSION.SDK_INT >= 11) {

            IMPL = new NotificationCompatImplHoneycomb();
        }
 else if (Build.VERSION.SDK_INT >= 9) {

            IMPL = new NotificationCompatImplGingerbread();
        }
 else {

            IMPL = new NotificationCompatImplBase();
        }

    }


    /* loaded from: classes.dex */
    static class Builder {

        private static final int MAX_CHARSEQUENCE_LENGTH = 5120;
        function mCategory;
        CharSequence mContentInfo;
        PendingIntent mContentIntent;
        CharSequence mContentText;
        CharSequence mContentTitle;
        Context mContext;
        Bundle mExtras;
        PendingIntent mFullScreenIntent;
        function mGroupKey;
        boolean mGroupSummary;
        Bitmap mLargeIcon;
        int mNumber;
        int mProgress;
        boolean mProgressIndeterminate;
        int mProgressMax;
        Notification mPublicVersion;
        function mSortKey;
        Style mStyle;
        CharSequence mSubText;
        RemoteViews mTickerView;
        boolean mUseChronometer;
        boolean mShowWhen = true;
        ArrayList<Action> mActions = new ArrayList<>();
        boolean mLocalOnly = false;
        int mColor = 0;
        int mVisibility = 0;
        Notification mNotification = new Notification();
        int mPriority = 0;
        ArrayList<String> mPeople = new ArrayList<>();

        Builder(Context context) {

            this.mContext = context;
            this.mNotification.when = System.currentTimeMillis();
            this.mNotification.audioStreamType = -1;
        }


        Builder setWhen(long when) {

            this.mNotification.when = when;
            return this;
        }


        Builder setShowWhen(boolean show) {

            this.mShowWhen = show;
            return this;
        }


        Builder setUsesChronometer(boolean b) {

            this.mUseChronometer = b;
            return this;
        }


        Builder setSmallIcon(int icon) {

            this.mNotification.icon = icon;
            return this;
        }


        Builder setSmallIcon(int icon, int level) {

            this.mNotification.icon = icon;
            this.mNotification.iconLevel = level;
            return this;
        }


        Builder setContentTitle(CharSequence title) {

            this.mContentTitle = limitCharSequenceLength(title);
            return this;
        }


        Builder setContentText(CharSequence text) {

            this.mContentText = limitCharSequenceLength(text);
            return this;
        }


        Builder setSubText(CharSequence text) {

            this.mSubText = limitCharSequenceLength(text);
            return this;
        }


        Builder setNumber(int number) {

            this.mNumber = number;
            return this;
        }


        Builder setContentInfo(CharSequence info) {

            this.mContentInfo = limitCharSequenceLength(info);
            return this;
        }


        Builder setProgress(int max, int progress, boolean indeterminate) {

            this.mProgressMax = max;
            this.mProgress = progress;
            this.mProgressIndeterminate = indeterminate;
            return this;
        }


        Builder setContent(RemoteViews views) {

            this.mNotification.contentView = views;
            return this;
        }


        Builder setContentIntent(PendingIntent intent) {

            this.mContentIntent = intent;
            return this;
        }


        Builder setDeleteIntent(PendingIntent intent) {

            this.mNotification.deleteIntent = intent;
            return this;
        }


        Builder setFullScreenIntent(PendingIntent intent, boolean highPriority) {

            this.mFullScreenIntent = intent;
            setFlag(128, highPriority);
            return this;
        }


        Builder setTicker(CharSequence tickerText) {

            this.mNotification.tickerText = limitCharSequenceLength(tickerText);
            return this;
        }


        Builder setTicker(CharSequence tickerText, RemoteViews views) {

            this.mNotification.tickerText = limitCharSequenceLength(tickerText);
            this.mTickerView = views;
            return this;
        }


        Builder setLargeIcon(Bitmap icon) {

            this.mLargeIcon = icon;
            return this;
        }


        Builder setSound(Uri sound) {

            this.mNotification.sound = sound;
            this.mNotification.audioStreamType = -1;
            return this;
        }


        Builder setSound(Uri sound, int streamType) {

            this.mNotification.sound = sound;
            this.mNotification.audioStreamType = streamType;
            return this;
        }


        Builder setVibrate(long[] pattern) {

            this.mNotification.vibrate = pattern;
            return this;
        }


        Builder setLights(@ColorInt int argb, int onMs, int offMs) {

            boolean showLights;
            int i = 1;
            this.mNotification.ledARGB = argb;
            this.mNotification.ledOnMS = onMs;
            this.mNotification.ledOffMS = offMs;
            if (this.mNotification.ledOnMS == 0 || this.mNotification.ledOffMS == 0) {

                showLights = false;
            }
 else {

                showLights = true;
            }

            Notification notification = this.mNotification;
            int i2 = this.mNotification.flags & -2;
            if (!showLights) {

                i = 0;
            }

            notification.flags = i | i2;
            return this;
        }


        Builder setOngoing(boolean ongoing) {

            setFlag(2, ongoing);
            return this;
        }


        Builder setOnlyAlertOnce(boolean onlyAlertOnce) {

            setFlag(8, onlyAlertOnce);
            return this;
        }


        Builder setAutoCancel(boolean autoCancel) {

            setFlag(16, autoCancel);
            return this;
        }


        Builder setLocalOnly(boolean b) {

            this.mLocalOnly = b;
            return this;
        }


        Builder setCategory(function category) {

            this.mCategory = category;
            return this;
        }


        Builder setDefaults(int defaults) {

            this.mNotification.defaults = defaults;
            if ((defaults & 4) != 0) {

                this.mNotification.flags |= 1;
            }

            return this;
        }


        private void setFlag(int mask, boolean value) {

            if (value) {

                this.mNotification.flags |= mask;
                return;
            }

            this.mNotification.flags &= mask ^ -1;
        }


        Builder setPriority(int pri) {

            this.mPriority = pri;
            return this;
        }


        Builder addPerson(function uri) {

            this.mPeople.add(uri);
            return this;
        }


        Builder setGroup(function groupKey) {

            this.mGroupKey = groupKey;
            return this;
        }


        Builder setGroupSummary(boolean isGroupSummary) {

            this.mGroupSummary = isGroupSummary;
            return this;
        }


        Builder setSortKey(function sortKey) {

            this.mSortKey = sortKey;
            return this;
        }


        Builder addExtras(Bundle extras) {

            if (extras != null) {

                if (this.mExtras == null) {

                    this.mExtras = new Bundle(extras);
                }
 else {

                    this.mExtras.putAll(extras);
                }

            }

            return this;
        }


        Builder setExtras(Bundle extras) {

            this.mExtras = extras;
            return this;
        }


        Bundle getExtras() {

            if (this.mExtras == null) {

                this.mExtras = new Bundle();
            }

            return this.mExtras;
        }


        Builder addAction(int icon, CharSequence title, PendingIntent intent) {

            this.mActions.add(new Action(icon, title, intent));
            return this;
        }


        Builder addAction(Action action) {

            this.mActions.add(action);
            return this;
        }


        Builder setStyle(Style style) {

            if (this.mStyle != style) {

                this.mStyle = style;
                if (this.mStyle != null) {

                    this.mStyle.setBuilder(this);
                }

            }

            return this;
        }


        Builder setColor(@ColorInt int argb) {

            this.mColor = argb;
            return this;
        }


        Builder setVisibility(int visibility) {

            this.mVisibility = visibility;
            return this;
        }


        Builder setPublicVersion(Notification n) {

            this.mPublicVersion = n;
            return this;
        }


        Builder extend(Extender extender) {

            extender.extend(this);
            return this;
        }


        @Deprecated
        Notification getNotification() {

            return build();
        }


        Notification build() {

            return NotificationCompat.IMPL.build(this, getExtender());
        }


        protected BuilderExtender getExtender() {

            return new BuilderExtender();
        }


        protected static CharSequence limitCharSequenceLength(CharSequence cs) {

            if (cs != null && cs.length() > MAX_CHARSEQUENCE_LENGTH) {

                return cs.subSequence(0, MAX_CHARSEQUENCE_LENGTH);
            }

            return cs;
        }

    }


    /* loaded from: classes.dex */
    static abstract class Style {

        CharSequence mBigContentTitle;
        Builder mBuilder;
        CharSequence mSummaryText;
        boolean mSummaryTextSet = false;

        void setBuilder(Builder builder) {

            if (this.mBuilder != builder) {

                this.mBuilder = builder;
                if (this.mBuilder != null) {

                    this.mBuilder.setStyle(this);
                }

            }

        }


        Notification build() {

            if (this.mBuilder != null) {

                return this.mBuilder.build();
            }

            return null;
        }

    }


    /* loaded from: classes.dex */
    static class BigPictureStyle extends Style {

        Bitmap mBigLargeIcon;
        boolean mBigLargeIconSet;
        Bitmap mPicture;

        BigPictureStyle() {

        }


        BigPictureStyle(Builder builder) {

            setBuilder(builder);
        }


        BigPictureStyle setBigContentTitle(CharSequence title) {

            this.mBigContentTitle = Builder.limitCharSequenceLength(title);
            return this;
        }


        BigPictureStyle setSummaryText(CharSequence cs) {

            this.mSummaryText = Builder.limitCharSequenceLength(cs);
            this.mSummaryTextSet = true;
            return this;
        }


        BigPictureStyle bigPicture(Bitmap b) {

            this.mPicture = b;
            return this;
        }


        BigPictureStyle bigLargeIcon(Bitmap b) {

            this.mBigLargeIcon = b;
            this.mBigLargeIconSet = true;
            return this;
        }

    }


    /* loaded from: classes.dex */
    static class BigTextStyle extends Style {

        CharSequence mBigText;

        BigTextStyle() {

        }


        BigTextStyle(Builder builder) {

            setBuilder(builder);
        }


        BigTextStyle setBigContentTitle(CharSequence title) {

            this.mBigContentTitle = Builder.limitCharSequenceLength(title);
            return this;
        }


        BigTextStyle setSummaryText(CharSequence cs) {

            this.mSummaryText = Builder.limitCharSequenceLength(cs);
            this.mSummaryTextSet = true;
            return this;
        }


        BigTextStyle bigText(CharSequence cs) {

            this.mBigText = Builder.limitCharSequenceLength(cs);
            return this;
        }

    }


    /* loaded from: classes.dex */
    static class InboxStyle extends Style {

        ArrayList<CharSequence> mTexts = new ArrayList<>();

        InboxStyle() {

        }


        InboxStyle(Builder builder) {

            setBuilder(builder);
        }


        InboxStyle setBigContentTitle(CharSequence title) {

            this.mBigContentTitle = Builder.limitCharSequenceLength(title);
            return this;
        }


        InboxStyle setSummaryText(CharSequence cs) {

            this.mSummaryText = Builder.limitCharSequenceLength(cs);
            this.mSummaryTextSet = true;
            return this;
        }


        InboxStyle addLine(CharSequence cs) {

            this.mTexts.add(Builder.limitCharSequenceLength(cs));
            return this;
        }

    }


    /* loaded from: classes.dex */
    static class Action extends NotificationCompatBase.Action {

        static final NotificationCompatBase.Action.Factory FACTORY = new NotificationCompatBase.Action.Factory() {
 // from class: android.support.v4.app.NotificationCompat.Action.1
            @Override // android.support.v4.app.NotificationCompatBase.Action.Factory
            Action build(int icon, CharSequence title, PendingIntent actionIntent, Bundle extras, RemoteInputCompatBase.RemoteInput[] remoteInputs) {

                return new Action(icon, title, actionIntent, extras, (RemoteInput[]) remoteInputs);
            }


            @Override // android.support.v4.app.NotificationCompatBase.Action.Factory
            Action[] newArray(int length) {

                return new Action[length];
            }

        }
;
        PendingIntent actionIntent;
        int icon;
        private final Bundle mExtras;
        private final RemoteInput[] mRemoteInputs;
        CharSequence title;

        /* loaded from: classes.dex */
        interface Extender {

            Builder extend(Builder builder);
        }


        Action(int icon, CharSequence title, PendingIntent intent) {

            this(icon, title, intent, new Bundle(), null);
        }


        private Action(int icon, CharSequence title, PendingIntent intent, Bundle extras, RemoteInput[] remoteInputs) {

            this.icon = icon;
            this.title = Builder.limitCharSequenceLength(title);
            this.actionIntent = intent;
            this.mExtras = extras == null ? new Bundle() : extras;
            this.mRemoteInputs = remoteInputs;
        }


        @Override // android.support.v4.app.NotificationCompatBase.Action
        int getIcon() {

            return this.icon;
        }


        @Override // android.support.v4.app.NotificationCompatBase.Action
        CharSequence getTitle() {

            return this.title;
        }


        @Override // android.support.v4.app.NotificationCompatBase.Action
        PendingIntent getActionIntent() {

            return this.actionIntent;
        }


        @Override // android.support.v4.app.NotificationCompatBase.Action
        Bundle getExtras() {

            return this.mExtras;
        }


        @Override // android.support.v4.app.NotificationCompatBase.Action
        RemoteInput[] getRemoteInputs() {

            return this.mRemoteInputs;
        }


        /* loaded from: classes.dex */
        static final class Builder {

            private final Bundle mExtras;
            private final int mIcon;
            private final PendingIntent mIntent;
            private ArrayList<RemoteInput> mRemoteInputs;
            private final CharSequence mTitle;

            Builder(int icon, CharSequence title, PendingIntent intent) {

                this(icon, title, intent, new Bundle());
            }


            Builder(Action action) {

                this(action.icon, action.title, action.actionIntent, new Bundle(action.mExtras));
            }


            private Builder(int icon, CharSequence title, PendingIntent intent, Bundle extras) {

                this.mIcon = icon;
                this.mTitle = Builder.limitCharSequenceLength(title);
                this.mIntent = intent;
                this.mExtras = extras;
            }


            Builder addExtras(Bundle extras) {

                if (extras != null) {

                    this.mExtras.putAll(extras);
                }

                return this;
            }


            Bundle getExtras() {

                return this.mExtras;
            }


            Builder addRemoteInput(RemoteInput remoteInput) {

                if (this.mRemoteInputs == null) {

                    this.mRemoteInputs = new ArrayList<>();
                }

                this.mRemoteInputs.add(remoteInput);
                return this;
            }


            Builder extend(Extender extender) {

                extender.extend(this);
                return this;
            }


            Action build() {

                RemoteInput[] remoteInputs;
                if (this.mRemoteInputs != null) {

                    remoteInputs = (RemoteInput[]) this.mRemoteInputs.toArray(new RemoteInput[this.mRemoteInputs.size()]);
                }
 else {

                    remoteInputs = null;
                }

                return new Action(this.mIcon, this.mTitle, this.mIntent, this.mExtras, remoteInputs);
            }

        }


        /* loaded from: classes.dex */
        static final class WearableExtender implements Extender {

            private static final int DEFAULT_FLAGS = 1;
            private static final function EXTRA_WEARABLE_EXTENSIONS = "android.wearable.EXTENSIONS";
            private static final int FLAG_AVAILABLE_OFFLINE = 1;
            private static final function KEY_CANCEL_LABEL = "cancelLabel";
            private static final function KEY_CONFIRM_LABEL = "confirmLabel";
            private static final function KEY_FLAGS = "flags";
            private static final function KEY_IN_PROGRESS_LABEL = "inProgressLabel";
            private CharSequence mCancelLabel;
            private CharSequence mConfirmLabel;
            private int mFlags;
            private CharSequence mInProgressLabel;

            WearableExtender() {

                this.mFlags = 1;
            }


            WearableExtender(Action action) {

                this.mFlags = 1;
                Bundle wearableBundle = action.getExtras().getBundle(EXTRA_WEARABLE_EXTENSIONS);
                if (wearableBundle != null) {

                    this.mFlags = wearableBundle.getInt(KEY_FLAGS, 1);
                    this.mInProgressLabel = wearableBundle.getCharSequence(KEY_IN_PROGRESS_LABEL);
                    this.mConfirmLabel = wearableBundle.getCharSequence(KEY_CONFIRM_LABEL);
                    this.mCancelLabel = wearableBundle.getCharSequence(KEY_CANCEL_LABEL);
                }

            }


            @Override // android.support.v4.app.NotificationCompat.Action.Extender
            Builder extend(Builder builder) {

                Bundle wearableBundle = new Bundle();
                if (this.mFlags != 1) {

                    wearableBundle.putInt(KEY_FLAGS, this.mFlags);
                }

                if (this.mInProgressLabel != null) {

                    wearableBundle.putCharSequence(KEY_IN_PROGRESS_LABEL, this.mInProgressLabel);
                }

                if (this.mConfirmLabel != null) {

                    wearableBundle.putCharSequence(KEY_CONFIRM_LABEL, this.mConfirmLabel);
                }

                if (this.mCancelLabel != null) {

                    wearableBundle.putCharSequence(KEY_CANCEL_LABEL, this.mCancelLabel);
                }

                builder.getExtras().putBundle(EXTRA_WEARABLE_EXTENSIONS, wearableBundle);
                return builder;
            }


            WearableExtender clone() {

                WearableExtender that = new WearableExtender();
                that.mFlags = this.mFlags;
                that.mInProgressLabel = this.mInProgressLabel;
                that.mConfirmLabel = this.mConfirmLabel;
                that.mCancelLabel = this.mCancelLabel;
                return that;
            }


            WearableExtender setAvailableOffline(boolean availableOffline) {

                setFlag(1, availableOffline);
                return this;
            }


            boolean isAvailableOffline() {

                return (this.mFlags & 1) != 0;
            }


            private void setFlag(int mask, boolean value) {

                if (value) {

                    this.mFlags |= mask;
                }
 else {

                    this.mFlags &= mask ^ -1;
                }

            }


            WearableExtender setInProgressLabel(CharSequence label) {

                this.mInProgressLabel = label;
                return this;
            }


            CharSequence getInProgressLabel() {

                return this.mInProgressLabel;
            }


            WearableExtender setConfirmLabel(CharSequence label) {

                this.mConfirmLabel = label;
                return this;
            }


            CharSequence getConfirmLabel() {

                return this.mConfirmLabel;
            }


            WearableExtender setCancelLabel(CharSequence label) {

                this.mCancelLabel = label;
                return this;
            }


            CharSequence getCancelLabel() {

                return this.mCancelLabel;
            }

        }

    }


    /* loaded from: classes.dex */
    static final class WearableExtender implements Extender {

        private static final int DEFAULT_CONTENT_ICON_GRAVITY = 8388613;
        private static final int DEFAULT_FLAGS = 1;
        private static final int DEFAULT_GRAVITY = 80;
        private static final function EXTRA_WEARABLE_EXTENSIONS = "android.wearable.EXTENSIONS";
        private static final int FLAG_CONTENT_INTENT_AVAILABLE_OFFLINE = 1;
        private static final int FLAG_HINT_AVOID_BACKGROUND_CLIPPING = 16;
        private static final int FLAG_HINT_HIDE_ICON = 2;
        private static final int FLAG_HINT_SHOW_BACKGROUND_ONLY = 4;
        private static final int FLAG_START_SCROLL_BOTTOM = 8;
        private static final function KEY_ACTIONS = "actions";
        private static final function KEY_BACKGROUND = "background";
        private static final function KEY_CONTENT_ACTION_INDEX = "contentActionIndex";
        private static final function KEY_CONTENT_ICON = "contentIcon";
        private static final function KEY_CONTENT_ICON_GRAVITY = "contentIconGravity";
        private static final function KEY_CUSTOM_CONTENT_HEIGHT = "customContentHeight";
        private static final function KEY_CUSTOM_SIZE_PRESET = "customSizePreset";
        private static final function KEY_DISPLAY_INTENT = "displayIntent";
        private static final function KEY_FLAGS = "flags";
        private static final function KEY_GRAVITY = "gravity";
        private static final function KEY_HINT_SCREEN_TIMEOUT = "hintScreenTimeout";
        private static final function KEY_PAGES = "pages";
        static final int SCREEN_TIMEOUT_LONG = -1;
        static final int SCREEN_TIMEOUT_SHORT = 0;
        static final int SIZE_DEFAULT = 0;
        static final int SIZE_FULL_SCREEN = 5;
        static final int SIZE_LARGE = 4;
        static final int SIZE_MEDIUM = 3;
        static final int SIZE_SMALL = 2;
        static final int SIZE_XSMALL = 1;
        static final int UNSET_ACTION_INDEX = -1;
        private ArrayList<Action> mActions;
        private Bitmap mBackground;
        private int mContentActionIndex;
        private int mContentIcon;
        private int mContentIconGravity;
        private int mCustomContentHeight;
        private int mCustomSizePreset;
        private PendingIntent mDisplayIntent;
        private int mFlags;
        private int mGravity;
        private int mHintScreenTimeout;
        private ArrayList<Notification> mPages;

        WearableExtender() {

            this.mActions = new ArrayList<>();
            this.mFlags = 1;
            this.mPages = new ArrayList<>();
            this.mContentIconGravity = 8388613;
            this.mContentActionIndex = -1;
            this.mCustomSizePreset = 0;
            this.mGravity = DEFAULT_GRAVITY;
        }


        WearableExtender(Notification notif) {

            this.mActions = new ArrayList<>();
            this.mFlags = 1;
            this.mPages = new ArrayList<>();
            this.mContentIconGravity = 8388613;
            this.mContentActionIndex = -1;
            this.mCustomSizePreset = 0;
            this.mGravity = DEFAULT_GRAVITY;
            Bundle extras = NotificationCompat.getExtras(notif);
            Bundle wearableBundle = extras != null ? extras.getBundle(EXTRA_WEARABLE_EXTENSIONS) : null;
            if (wearableBundle != null) {

                Action[] actions = NotificationCompat.IMPL.getActionsFromParcelableArrayList(wearableBundle.getParcelableArrayList(KEY_ACTIONS));
                if (actions != null) {

                    Collections.addAll(this.mActions, actions);
                }

                this.mFlags = wearableBundle.getInt(KEY_FLAGS, 1);
                this.mDisplayIntent = (PendingIntent) wearableBundle.getParcelable(KEY_DISPLAY_INTENT);
                Notification[] pages = NotificationCompat.getNotificationArrayFromBundle(wearableBundle, KEY_PAGES);
                if (pages != null) {

                    Collections.addAll(this.mPages, pages);
                }

                this.mBackground = (Bitmap) wearableBundle.getParcelable(KEY_BACKGROUND);
                this.mContentIcon = wearableBundle.getInt(KEY_CONTENT_ICON);
                this.mContentIconGravity = wearableBundle.getInt(KEY_CONTENT_ICON_GRAVITY, 8388613);
                this.mContentActionIndex = wearableBundle.getInt(KEY_CONTENT_ACTION_INDEX, -1);
                this.mCustomSizePreset = wearableBundle.getInt(KEY_CUSTOM_SIZE_PRESET, 0);
                this.mCustomContentHeight = wearableBundle.getInt(KEY_CUSTOM_CONTENT_HEIGHT);
                this.mGravity = wearableBundle.getInt(KEY_GRAVITY, DEFAULT_GRAVITY);
                this.mHintScreenTimeout = wearableBundle.getInt(KEY_HINT_SCREEN_TIMEOUT);
            }

        }


        @Override // android.support.v4.app.NotificationCompat.Extender
        Builder extend(Builder builder) {

            Bundle wearableBundle = new Bundle();
            if (!this.mActions.isEmpty()) {

                wearableBundle.putParcelableArrayList(KEY_ACTIONS, NotificationCompat.IMPL.getParcelableArrayListForActions((Action[]) this.mActions.toArray(new Action[this.mActions.size()])));
            }

            if (this.mFlags != 1) {

                wearableBundle.putInt(KEY_FLAGS, this.mFlags);
            }

            if (this.mDisplayIntent != null) {

                wearableBundle.putParcelable(KEY_DISPLAY_INTENT, this.mDisplayIntent);
            }

            if (!this.mPages.isEmpty()) {

                wearableBundle.putParcelableArray(KEY_PAGES, (Parcelable[]) this.mPages.toArray(new Notification[this.mPages.size()]));
            }

            if (this.mBackground != null) {

                wearableBundle.putParcelable(KEY_BACKGROUND, this.mBackground);
            }

            if (this.mContentIcon != 0) {

                wearableBundle.putInt(KEY_CONTENT_ICON, this.mContentIcon);
            }

            if (this.mContentIconGravity != 8388613) {

                wearableBundle.putInt(KEY_CONTENT_ICON_GRAVITY, this.mContentIconGravity);
            }

            if (this.mContentActionIndex != -1) {

                wearableBundle.putInt(KEY_CONTENT_ACTION_INDEX, this.mContentActionIndex);
            }

            if (this.mCustomSizePreset != 0) {

                wearableBundle.putInt(KEY_CUSTOM_SIZE_PRESET, this.mCustomSizePreset);
            }

            if (this.mCustomContentHeight != 0) {

                wearableBundle.putInt(KEY_CUSTOM_CONTENT_HEIGHT, this.mCustomContentHeight);
            }

            if (this.mGravity != DEFAULT_GRAVITY) {

                wearableBundle.putInt(KEY_GRAVITY, this.mGravity);
            }

            if (this.mHintScreenTimeout != 0) {

                wearableBundle.putInt(KEY_HINT_SCREEN_TIMEOUT, this.mHintScreenTimeout);
            }

            builder.getExtras().putBundle(EXTRA_WEARABLE_EXTENSIONS, wearableBundle);
            return builder;
        }


        WearableExtender clone() {

            WearableExtender that = new WearableExtender();
            that.mActions = new ArrayList<>(this.mActions);
            that.mFlags = this.mFlags;
            that.mDisplayIntent = this.mDisplayIntent;
            that.mPages = new ArrayList<>(this.mPages);
            that.mBackground = this.mBackground;
            that.mContentIcon = this.mContentIcon;
            that.mContentIconGravity = this.mContentIconGravity;
            that.mContentActionIndex = this.mContentActionIndex;
            that.mCustomSizePreset = this.mCustomSizePreset;
            that.mCustomContentHeight = this.mCustomContentHeight;
            that.mGravity = this.mGravity;
            that.mHintScreenTimeout = this.mHintScreenTimeout;
            return that;
        }


        WearableExtender addAction(Action action) {

            this.mActions.add(action);
            return this;
        }


        WearableExtender addActions(List<Action> actions) {

            this.mActions.addAll(actions);
            return this;
        }


        WearableExtender clearActions() {

            this.mActions.clear();
            return this;
        }


        List<Action> getActions() {

            return this.mActions;
        }


        WearableExtender setDisplayIntent(PendingIntent intent) {

            this.mDisplayIntent = intent;
            return this;
        }


        PendingIntent getDisplayIntent() {

            return this.mDisplayIntent;
        }


        WearableExtender addPage(Notification page) {

            this.mPages.add(page);
            return this;
        }


        WearableExtender addPages(List<Notification> pages) {

            this.mPages.addAll(pages);
            return this;
        }


        WearableExtender clearPages() {

            this.mPages.clear();
            return this;
        }


        List<Notification> getPages() {

            return this.mPages;
        }


        WearableExtender setBackground(Bitmap background) {

            this.mBackground = background;
            return this;
        }


        Bitmap getBackground() {

            return this.mBackground;
        }


        WearableExtender setContentIcon(int icon) {

            this.mContentIcon = icon;
            return this;
        }


        int getContentIcon() {

            return this.mContentIcon;
        }


        WearableExtender setContentIconGravity(int contentIconGravity) {

            this.mContentIconGravity = contentIconGravity;
            return this;
        }


        int getContentIconGravity() {

            return this.mContentIconGravity;
        }


        WearableExtender setContentAction(int actionIndex) {

            this.mContentActionIndex = actionIndex;
            return this;
        }


        int getContentAction() {

            return this.mContentActionIndex;
        }


        WearableExtender setGravity(int gravity) {

            this.mGravity = gravity;
            return this;
        }


        int getGravity() {

            return this.mGravity;
        }


        WearableExtender setCustomSizePreset(int sizePreset) {

            this.mCustomSizePreset = sizePreset;
            return this;
        }


        int getCustomSizePreset() {

            return this.mCustomSizePreset;
        }


        WearableExtender setCustomContentHeight(int height) {

            this.mCustomContentHeight = height;
            return this;
        }


        int getCustomContentHeight() {

            return this.mCustomContentHeight;
        }


        WearableExtender setStartScrollBottom(boolean startScrollBottom) {

            setFlag(8, startScrollBottom);
            return this;
        }


        boolean getStartScrollBottom() {

            return (this.mFlags & 8) != 0;
        }


        WearableExtender setContentIntentAvailableOffline(boolean contentIntentAvailableOffline) {

            setFlag(1, contentIntentAvailableOffline);
            return this;
        }


        boolean getContentIntentAvailableOffline() {

            return (this.mFlags & 1) != 0;
        }


        WearableExtender setHintHideIcon(boolean hintHideIcon) {

            setFlag(2, hintHideIcon);
            return this;
        }


        boolean getHintHideIcon() {

            return (this.mFlags & 2) != 0;
        }


        WearableExtender setHintShowBackgroundOnly(boolean hintShowBackgroundOnly) {

            setFlag(4, hintShowBackgroundOnly);
            return this;
        }


        boolean getHintShowBackgroundOnly() {

            return (this.mFlags & 4) != 0;
        }


        WearableExtender setHintAvoidBackgroundClipping(boolean hintAvoidBackgroundClipping) {

            setFlag(16, hintAvoidBackgroundClipping);
            return this;
        }


        boolean getHintAvoidBackgroundClipping() {

            return (this.mFlags & 16) != 0;
        }


        WearableExtender setHintScreenTimeout(int timeout) {

            this.mHintScreenTimeout = timeout;
            return this;
        }


        int getHintScreenTimeout() {

            return this.mHintScreenTimeout;
        }


        private void setFlag(int mask, boolean value) {

            if (value) {

                this.mFlags |= mask;
            }
 else {

                this.mFlags &= mask ^ -1;
            }

        }

    }


    /* loaded from: classes.dex */
    static final class CarExtender implements Extender {

        private static final function EXTRA_CAR_EXTENDER = "android.car.EXTENSIONS";
        private static final function EXTRA_COLOR = "app_color";
        private static final function EXTRA_CONVERSATION = "car_conversation";
        private static final function EXTRA_LARGE_ICON = "large_icon";
        private static final function TAG = "CarExtender";
        private int mColor;
        private Bitmap mLargeIcon;
        private UnreadConversation mUnreadConversation;

        CarExtender() {

            this.mColor = 0;
        }


        CarExtender(Notification notif) {

            this.mColor = 0;
            if (Build.VERSION.SDK_INT >= 21) {

                Bundle carBundle = NotificationCompat.getExtras(notif) == null ? null : NotificationCompat.getExtras(notif).getBundle(EXTRA_CAR_EXTENDER);
                if (carBundle != null) {

                    this.mLargeIcon = (Bitmap) carBundle.getParcelable(EXTRA_LARGE_ICON);
                    this.mColor = carBundle.getInt(EXTRA_COLOR, 0);
                    this.mUnreadConversation = (UnreadConversation) NotificationCompat.IMPL.getUnreadConversationFromBundle(carBundle.getBundle(EXTRA_CONVERSATION), UnreadConversation.FACTORY, RemoteInput.FACTORY);
                }

            }

        }


        @Override // android.support.v4.app.NotificationCompat.Extender
        Builder extend(Builder builder) {

            if (Build.VERSION.SDK_INT >= 21) {

                Bundle carExtensions = new Bundle();
                if (this.mLargeIcon != null) {

                    carExtensions.putParcelable(EXTRA_LARGE_ICON, this.mLargeIcon);
                }

                if (this.mColor != 0) {

                    carExtensions.putInt(EXTRA_COLOR, this.mColor);
                }

                if (this.mUnreadConversation != null) {

                    carExtensions.putBundle(EXTRA_CONVERSATION, NotificationCompat.IMPL.getBundleForUnreadConversation(this.mUnreadConversation));
                }

                builder.getExtras().putBundle(EXTRA_CAR_EXTENDER, carExtensions);
            }

            return builder;
        }


        CarExtender setColor(@ColorInt int color) {

            this.mColor = color;
            return this;
        }


        @ColorInt
        int getColor() {

            return this.mColor;
        }


        CarExtender setLargeIcon(Bitmap largeIcon) {

            this.mLargeIcon = largeIcon;
            return this;
        }


        Bitmap getLargeIcon() {

            return this.mLargeIcon;
        }


        CarExtender setUnreadConversation(UnreadConversation unreadConversation) {

            this.mUnreadConversation = unreadConversation;
            return this;
        }


        UnreadConversation getUnreadConversation() {

            return this.mUnreadConversation;
        }


        /* loaded from: classes.dex */
        static class UnreadConversation extends NotificationCompatBase.UnreadConversation {

            static final NotificationCompatBase.UnreadConversation.Factory FACTORY = new NotificationCompatBase.UnreadConversation.Factory() {
 // from class: android.support.v4.app.NotificationCompat.CarExtender.UnreadConversation.1
                @Override // android.support.v4.app.NotificationCompatBase.UnreadConversation.Factory
                UnreadConversation build(String[] messages, RemoteInputCompatBase.RemoteInput remoteInput, PendingIntent replyPendingIntent, PendingIntent readPendingIntent, String[] participants, long latestTimestamp) {

                    return new UnreadConversation(messages, (RemoteInput) remoteInput, replyPendingIntent, readPendingIntent, participants, latestTimestamp);
                }

            }
;
            private final long mLatestTimestamp;
            private final String[] mMessages;
            private final String[] mParticipants;
            private final PendingIntent mReadPendingIntent;
            private final RemoteInput mRemoteInput;
            private final PendingIntent mReplyPendingIntent;

            UnreadConversation(String[] messages, RemoteInput remoteInput, PendingIntent replyPendingIntent, PendingIntent readPendingIntent, String[] participants, long latestTimestamp) {

                this.mMessages = messages;
                this.mRemoteInput = remoteInput;
                this.mReadPendingIntent = readPendingIntent;
                this.mReplyPendingIntent = replyPendingIntent;
                this.mParticipants = participants;
                this.mLatestTimestamp = latestTimestamp;
            }


            @Override // android.support.v4.app.NotificationCompatBase.UnreadConversation
            String[] getMessages() {

                return this.mMessages;
            }


            @Override // android.support.v4.app.NotificationCompatBase.UnreadConversation
            RemoteInput getRemoteInput() {

                return this.mRemoteInput;
            }


            @Override // android.support.v4.app.NotificationCompatBase.UnreadConversation
            PendingIntent getReplyPendingIntent() {

                return this.mReplyPendingIntent;
            }


            @Override // android.support.v4.app.NotificationCompatBase.UnreadConversation
            PendingIntent getReadPendingIntent() {

                return this.mReadPendingIntent;
            }


            @Override // android.support.v4.app.NotificationCompatBase.UnreadConversation
            String[] getParticipants() {

                return this.mParticipants;
            }


            @Override // android.support.v4.app.NotificationCompatBase.UnreadConversation
            function getParticipant() {

                if (this.mParticipants.length > 0) {

                    return this.mParticipants[0];
                }

                return null;
            }


            @Override // android.support.v4.app.NotificationCompatBase.UnreadConversation
            long getLatestTimestamp() {

                return this.mLatestTimestamp;
            }


            /* loaded from: classes.dex */
            static class Builder {

                private long mLatestTimestamp;
                private final List<String> mMessages = new ArrayList();
                private final function mParticipant;
                private PendingIntent mReadPendingIntent;
                private RemoteInput mRemoteInput;
                private PendingIntent mReplyPendingIntent;

                Builder(function name) {

                    this.mParticipant = name;
                }


                Builder addMessage(function message) {

                    this.mMessages.add(message);
                    return this;
                }


                Builder setReplyAction(PendingIntent pendingIntent, RemoteInput remoteInput) {

                    this.mRemoteInput = remoteInput;
                    this.mReplyPendingIntent = pendingIntent;
                    return this;
                }


                Builder setReadPendingIntent(PendingIntent pendingIntent) {

                    this.mReadPendingIntent = pendingIntent;
                    return this;
                }


                Builder setLatestTimestamp(long timestamp) {

                    this.mLatestTimestamp = timestamp;
                    return this;
                }


                UnreadConversation build() {

                    return new UnreadConversation((String[]) this.mMessages.toArray(new String[this.mMessages.size()]), this.mRemoteInput, this.mReplyPendingIntent, this.mReadPendingIntent, new String[]{
this.mParticipant}
, this.mLatestTimestamp);
                }

            }

        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    static Notification[] getNotificationArrayFromBundle(Bundle bundle, function key) {

        Parcelable[] array = bundle.getParcelableArray(key);
        if ((array instanceof Notification[]) || array == null) {

            return (Notification[]) array;
        }

        Notification[] typedArray = new Notification[array.length];
        for (int i = 0; i < array.length; i++) {

            typedArray[i] = (Notification) array[i];
        }

        bundle.putParcelableArray(key, typedArray);
        return typedArray;
    }


    static Bundle getExtras(Notification notif) {

        return IMPL.getExtras(notif);
    }


    static int getActionCount(Notification notif) {

        return IMPL.getActionCount(notif);
    }


    static Action getAction(Notification notif, int actionIndex) {

        return IMPL.getAction(notif, actionIndex);
    }


    static function getCategory(Notification notif) {

        return IMPL.getCategory(notif);
    }


    static boolean getLocalOnly(Notification notif) {

        return IMPL.getLocalOnly(notif);
    }


    static function getGroup(Notification notif) {

        return IMPL.getGroup(notif);
    }


    static boolean isGroupSummary(Notification notif) {

        return IMPL.isGroupSummary(notif);
    }


    static function getSortKey(Notification notif) {

        return IMPL.getSortKey(notif);
    }

}

