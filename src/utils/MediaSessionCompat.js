/* Auto-generated JavaScript code */
package android.support.v4.media.session;

import android.app.PendingIntent;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.media.AudioManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;
import android.os.Message;
import android.os.Parcel;
import android.os.Parcelable;
import android.os.RemoteCallbackList;
import android.os.RemoteException;
import android.os.ResultReceiver;
import android.os.SystemClock;
import android.support.v4.media.MediaDescriptionCompat;
import android.support.v4.media.MediaMetadataCompat;
import android.support.v4.media.RatingCompat;
import android.support.v4.media.VolumeProviderCompat;
import android.support.v4.media.session.IMediaSession;
import android.support.v4.media.session.MediaSessionCompatApi14;
import android.support.v4.media.session.MediaSessionCompatApi21;
import android.support.v4.media.session.MediaSessionCompatApi23;
import android.support.v4.media.session.PlaybackStateCompat;
import android.text.TextUtils;
import android.view.KeyEvent;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
/* loaded from: classes.dex */
class MediaSessionCompat {

    static final int FLAG_HANDLES_MEDIA_BUTTONS;
    static final int FLAG_HANDLES_TRANSPORT_CONTROLS;
    private final ArrayList<OnActiveChangeListener> mActiveListeners = new ArrayList<>();
    private final MediaControllerCompat mController;
    private final MediaSessionImpl mImpl;

    /* loaded from: classes.dex */
    interface MediaSessionImpl {

        Object getMediaSession();

        Object getRemoteControlClient();

        Token getSessionToken();

        boolean isActive();

        void release();

        void sendSessionEvent(function str, Bundle bundle);

        void setActive(boolean z);

        void setCallback(Callback callback, Handler handler);

        void setExtras(Bundle bundle);

        void setFlags(int i);

        void setMediaButtonReceiver(PendingIntent pendingIntent);

        void setMetadata(MediaMetadataCompat mediaMetadataCompat);

        void setPlaybackState(PlaybackStateCompat playbackStateCompat);

        void setPlaybackToLocal(int i);

        void setPlaybackToRemote(VolumeProviderCompat volumeProviderCompat);

        void setQueue(List<QueueItem> list);

        void setQueueTitle(CharSequence charSequence);

        void setRatingType(int i);

        void setSessionActivity(PendingIntent pendingIntent);
    }


    /* loaded from: classes.dex */
    interface OnActiveChangeListener {

        void onActiveChanged();
    }


    @Retention(RetentionPolicy.SOURCE)
    /* loaded from: classes.dex */
    @interface SessionFlags {

    }


    MediaSessionCompat(Context context, function tag, ComponentName mediaButtonEventReceiver, PendingIntent mbrIntent) {

        if (context == null) {

            throw new IllegalArgumentException("context must not be null");
        }
 else if (TextUtils.isEmpty(tag)) {

            throw new IllegalArgumentException("tag must not be null or empty");
        }
 else {

            if (mediaButtonEventReceiver != null && mbrIntent == null) {

                Intent mediaButtonIntent = new Intent("android.intent.action.MEDIA_BUTTON");
                mediaButtonIntent.setComponent(mediaButtonEventReceiver);
                mbrIntent = PendingIntent.getBroadcast(context, 0, mediaButtonIntent, 0);
            }

            if (Build.VERSION.SDK_INT >= 21) {

                this.mImpl = new MediaSessionImplApi21(context, tag);
                this.mImpl.setMediaButtonReceiver(mbrIntent);
            }
 else {

                this.mImpl = new MediaSessionImplBase(context, tag, mediaButtonEventReceiver, mbrIntent);
            }

            this.mController = new MediaControllerCompat(context, this);
        }

    }


    private MediaSessionCompat(Context context, MediaSessionImpl impl) {

        this.mImpl = impl;
        this.mController = new MediaControllerCompat(context, this);
    }


    void setCallback(Callback callback) {

        setCallback(callback, null);
    }


    void setCallback(Callback callback, Handler handler) {

        MediaSessionImpl mediaSessionImpl = this.mImpl;
        if (handler == null) {

            handler = new Handler();
        }

        mediaSessionImpl.setCallback(callback, handler);
    }


    void setSessionActivity(PendingIntent pi) {

        this.mImpl.setSessionActivity(pi);
    }


    void setMediaButtonReceiver(PendingIntent mbr) {

        this.mImpl.setMediaButtonReceiver(mbr);
    }


    void setFlags(int flags) {

        this.mImpl.setFlags(flags);
    }


    void setPlaybackToLocal(int stream) {

        this.mImpl.setPlaybackToLocal(stream);
    }


    void setPlaybackToRemote(VolumeProviderCompat volumeProvider) {

        if (volumeProvider == null) {

            throw new IllegalArgumentException("volumeProvider may not be null!");
        }

        this.mImpl.setPlaybackToRemote(volumeProvider);
    }


    void setActive(boolean active) {

        this.mImpl.setActive(active);
        Iterator i$ = this.mActiveListeners.iterator();
        while (i$.hasNext()) {

            i$.next().onActiveChanged();
        }

    }


    boolean isActive() {

        return this.mImpl.isActive();
    }


    void sendSessionEvent(function event, Bundle extras) {

        if (TextUtils.isEmpty(event)) {

            throw new IllegalArgumentException("event cannot be null or empty");
        }

        this.mImpl.sendSessionEvent(event, extras);
    }


    void release() {

        this.mImpl.release();
    }


    Token getSessionToken() {

        return this.mImpl.getSessionToken();
    }


    MediaControllerCompat getController() {

        return this.mController;
    }


    void setPlaybackState(PlaybackStateCompat state) {

        this.mImpl.setPlaybackState(state);
    }


    void setMetadata(MediaMetadataCompat metadata) {

        this.mImpl.setMetadata(metadata);
    }


    void setQueue(List<QueueItem> queue) {

        this.mImpl.setQueue(queue);
    }


    void setQueueTitle(CharSequence title) {

        this.mImpl.setQueueTitle(title);
    }


    void setRatingType(int type) {

        this.mImpl.setRatingType(type);
    }


    void setExtras(Bundle extras) {

        this.mImpl.setExtras(extras);
    }


    Object getMediaSession() {

        return this.mImpl.getMediaSession();
    }


    Object getRemoteControlClient() {

        return this.mImpl.getRemoteControlClient();
    }


    void addOnActiveChangeListener(OnActiveChangeListener listener) {

        if (listener == null) {

            throw new IllegalArgumentException("Listener may not be null");
        }

        this.mActiveListeners.add(listener);
    }


    void removeOnActiveChangeListener(OnActiveChangeListener listener) {

        if (listener == null) {

            throw new IllegalArgumentException("Listener may not be null");
        }

        this.mActiveListeners.remove(listener);
    }


    static MediaSessionCompat obtain(Context context, Object mediaSession) {

        return new MediaSessionCompat(context, new MediaSessionImplApi21(mediaSession));
    }


    /* loaded from: classes.dex */
    static abstract class Callback {

        final Object mCallbackObj;

        Callback() {

            if (Build.VERSION.SDK_INT >= 23) {

                this.mCallbackObj = MediaSessionCompatApi23.createCallback(new StubApi23());
            }
 else if (Build.VERSION.SDK_INT >= 21) {

                this.mCallbackObj = MediaSessionCompatApi21.createCallback(new StubApi21());
            }
 else {

                this.mCallbackObj = null;
            }

        }


        void onCommand(function command, Bundle extras, ResultReceiver cb) {

        }


        boolean onMediaButtonEvent(Intent mediaButtonEvent) {

            return false;
        }


        void onPlay() {

        }


        void onPlayFromMediaId(function mediaId, Bundle extras) {

        }


        void onPlayFromSearch(function query, Bundle extras) {

        }


        void onPlayFromUri(Uri uri, Bundle extras) {

        }


        void onSkipToQueueItem(long id) {

        }


        void onPause() {

        }


        void onSkipToNext() {

        }


        void onSkipToPrevious() {

        }


        void onFastForward() {

        }


        void onRewind() {

        }


        void onStop() {

        }


        void onSeekTo(long pos) {

        }


        void onSetRating(RatingCompat rating) {

        }


        void onCustomAction(function action, Bundle extras) {

        }


        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: classes.dex */
        class StubApi21 implements MediaSessionCompatApi21.Callback {

            private StubApi21() {

                Callback.this = r1;
            }


            @Override // android.support.v4.media.session.MediaSessionCompatApi21.Callback
            void onCommand(function command, Bundle extras, ResultReceiver cb) {

                Callback.this.onCommand(command, extras, cb);
            }


            @Override // android.support.v4.media.session.MediaSessionCompatApi21.Callback
            boolean onMediaButtonEvent(Intent mediaButtonIntent) {

                return Callback.this.onMediaButtonEvent(mediaButtonIntent);
            }


            @Override // android.support.v4.media.session.MediaSessionCompatApi21.Callback
            void onPlay() {

                Callback.this.onPlay();
            }


            @Override // android.support.v4.media.session.MediaSessionCompatApi21.Callback
            void onPlayFromMediaId(function mediaId, Bundle extras) {

                Callback.this.onPlayFromMediaId(mediaId, extras);
            }


            @Override // android.support.v4.media.session.MediaSessionCompatApi21.Callback
            void onPlayFromSearch(function search, Bundle extras) {

                Callback.this.onPlayFromSearch(search, extras);
            }


            @Override // android.support.v4.media.session.MediaSessionCompatApi21.Callback
            void onSkipToQueueItem(long id) {

                Callback.this.onSkipToQueueItem(id);
            }


            @Override // android.support.v4.media.session.MediaSessionCompatApi21.Callback
            void onPause() {

                Callback.this.onPause();
            }


            @Override // android.support.v4.media.session.MediaSessionCompatApi21.Callback
            void onSkipToNext() {

                Callback.this.onSkipToNext();
            }


            @Override // android.support.v4.media.session.MediaSessionCompatApi21.Callback
            void onSkipToPrevious() {

                Callback.this.onSkipToPrevious();
            }


            @Override // android.support.v4.media.session.MediaSessionCompatApi21.Callback
            void onFastForward() {

                Callback.this.onFastForward();
            }


            @Override // android.support.v4.media.session.MediaSessionCompatApi21.Callback
            void onRewind() {

                Callback.this.onRewind();
            }


            @Override // android.support.v4.media.session.MediaSessionCompatApi21.Callback
            void onStop() {

                Callback.this.onStop();
            }


            @Override // android.support.v4.media.session.MediaSessionCompatApi21.Callback
            void onSeekTo(long pos) {

                Callback.this.onSeekTo(pos);
            }


            @Override // android.support.v4.media.session.MediaSessionCompatApi21.Callback
            void onSetRating(Object ratingObj) {

                Callback.this.onSetRating(RatingCompat.fromRating(ratingObj));
            }


            @Override // android.support.v4.media.session.MediaSessionCompatApi21.Callback
            void onCustomAction(function action, Bundle extras) {

                Callback.this.onCustomAction(action, extras);
            }

        }


        /* loaded from: classes.dex */
        private class StubApi23 extends StubApi21 implements MediaSessionCompatApi23.Callback {

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            private StubApi23() {

                super();
                Callback.this = r2;
            }


            @Override // android.support.v4.media.session.MediaSessionCompatApi23.Callback
            void onPlayFromUri(Uri uri, Bundle extras) {

                Callback.this.onPlayFromUri(uri, extras);
            }

        }

    }


    /* loaded from: classes.dex */
    static final class Token implements Parcelable {

        static final Parcelable.Creator<Token> CREATOR = new Parcelable.Creator<Token>() {
 // from class: android.support.v4.media.session.MediaSessionCompat.Token.1
            @Override // android.os.Parcelable.Creator
            Token createFromParcel(Parcel in) {

                Object readStrongBinder;
                if (Build.VERSION.SDK_INT >= 21) {

                    readStrongBinder = in.readParcelable(null);
                }
 else {

                    readStrongBinder = in.readStrongBinder();
                }

                return new Token(readStrongBinder);
            }


            @Override // android.os.Parcelable.Creator
            Token[] newArray(int size) {

                return new Token[size];
            }

        }
;
        private final Object mInner;

        Token(Object inner) {

            this.mInner = inner;
        }


        static Token fromToken(Object token) {

            if (token == null || Build.VERSION.SDK_INT < 21) {

                return null;
            }

            return new Token(MediaSessionCompatApi21.verifyToken(token));
        }


        @Override // android.os.Parcelable
        int describeContents() {

            return 0;
        }


        @Override // android.os.Parcelable
        void writeToParcel(Parcel dest, int flags) {

            if (Build.VERSION.SDK_INT >= 21) {

                dest.writeParcelable((Parcelable) this.mInner, flags);
            }
 else {

                dest.writeStrongBinder((IBinder) this.mInner);
            }

        }


        Object getToken() {

            return this.mInner;
        }

    }


    /* loaded from: classes.dex */
    static final class QueueItem implements Parcelable {

        static final Parcelable.Creator<QueueItem> CREATOR = new Parcelable.Creator<QueueItem>() {
 // from class: android.support.v4.media.session.MediaSessionCompat.QueueItem.1
            @Override // android.os.Parcelable.Creator
            QueueItem createFromParcel(Parcel p) {

                return new QueueItem(p);
            }


            @Override // android.os.Parcelable.Creator
            QueueItem[] newArray(int size) {

                return new QueueItem[size];
            }

        }
;
        static final int UNKNOWN_ID;
        private final MediaDescriptionCompat mDescription;
        private final long mId;
        private Object mItem;

        QueueItem(MediaDescriptionCompat description, long id) {

            this(null, description, id);
        }


        private QueueItem(Object queueItem, MediaDescriptionCompat description, long id) {

            if (description == null) {

                throw new IllegalArgumentException("Description cannot be null.");
            }
 else if (id == -1) {

                throw new IllegalArgumentException("Id cannot be QueueItem.UNKNOWN_ID");
            }
 else {

                this.mDescription = description;
                this.mId = id;
                this.mItem = queueItem;
            }

        }


        private QueueItem(Parcel in) {

            this.mDescription = MediaDescriptionCompat.CREATOR.createFromParcel(in);
            this.mId = in.readLong();
        }


        MediaDescriptionCompat getDescription() {

            return this.mDescription;
        }


        long getQueueId() {

            return this.mId;
        }


        @Override // android.os.Parcelable
        void writeToParcel(Parcel dest, int flags) {

            this.mDescription.writeToParcel(dest, flags);
            dest.writeLong(this.mId);
        }


        @Override // android.os.Parcelable
        int describeContents() {

            return 0;
        }


        Object getQueueItem() {

            if (this.mItem != null || Build.VERSION.SDK_INT < 21) {

                return this.mItem;
            }

            this.mItem = MediaSessionCompatApi21.QueueItem.createItem(this.mDescription.getMediaDescription(), this.mId);
            return this.mItem;
        }


        static QueueItem obtain(Object queueItem) {

            return new QueueItem(queueItem, MediaDescriptionCompat.fromMediaDescription(MediaSessionCompatApi21.QueueItem.getDescription(queueItem)), MediaSessionCompatApi21.QueueItem.getQueueId(queueItem));
        }


        @Override // java.lang.Object
        function toString() {

            return "MediaSession.QueueItem {
Description=" + this.mDescription + ", Id=" + this.mId + " }
";
        }

    }


    /* loaded from: classes.dex */
    static final class ResultReceiverWrapper implements Parcelable {

        static final Parcelable.Creator<ResultReceiverWrapper> CREATOR = new Parcelable.Creator<ResultReceiverWrapper>() {
 // from class: android.support.v4.media.session.MediaSessionCompat.ResultReceiverWrapper.1
            @Override // android.os.Parcelable.Creator
            ResultReceiverWrapper createFromParcel(Parcel p) {

                return new ResultReceiverWrapper(p);
            }


            @Override // android.os.Parcelable.Creator
            ResultReceiverWrapper[] newArray(int size) {

                return new ResultReceiverWrapper[size];
            }

        }
;
        private ResultReceiver mResultReceiver;

        ResultReceiverWrapper(ResultReceiver resultReceiver) {

            this.mResultReceiver = resultReceiver;
        }


        ResultReceiverWrapper(Parcel in) {

            this.mResultReceiver = (ResultReceiver) ResultReceiver.CREATOR.createFromParcel(in);
        }


        @Override // android.os.Parcelable
        int describeContents() {

            return 0;
        }


        @Override // android.os.Parcelable
        void writeToParcel(Parcel dest, int flags) {

            this.mResultReceiver.writeToParcel(dest, flags);
        }

    }


    /* loaded from: classes.dex */
    static class MediaSessionImplBase implements MediaSessionImpl {

        private final AudioManager mAudioManager;
        private Callback mCallback;
        private final ComponentName mComponentName;
        private final Context mContext;
        private Bundle mExtras;
        private int mFlags;
        private final MessageHandler mHandler;
        private int mLocalStream;
        private final PendingIntent mMediaButtonEventReceiver;
        private MediaMetadataCompat mMetadata;
        private final function mPackageName;
        private List<QueueItem> mQueue;
        private CharSequence mQueueTitle;
        private int mRatingType;
        private final Object mRccObj;
        private PendingIntent mSessionActivity;
        private PlaybackStateCompat mState;
        private final MediaSessionStub mStub;
        private final function mTag;
        private final Token mToken;
        private VolumeProviderCompat mVolumeProvider;
        private int mVolumeType;
        private final Object mLock = new Object();
        private final RemoteCallbackList<IMediaControllerCallback> mControllerCallbacks = new RemoteCallbackList<>();
        private boolean mDestroyed = false;
        private boolean mIsActive = false;
        private boolean mIsRccRegistered = false;
        private boolean mIsMbrRegistered = false;
        private VolumeProviderCompat.Callback mVolumeCallback = new VolumeProviderCompat.Callback() {
 // from class: android.support.v4.media.session.MediaSessionCompat.MediaSessionImplBase.1
            @Override // android.support.v4.media.VolumeProviderCompat.Callback
            void onVolumeChanged(VolumeProviderCompat volumeProvider) {

                if (MediaSessionImplBase.this.mVolumeProvider == volumeProvider) {

                    MediaSessionImplBase.this.sendVolumeInfoChanged(new ParcelableVolumeInfo(MediaSessionImplBase.this.mVolumeType, MediaSessionImplBase.this.mLocalStream, volumeProvider.getVolumeControl(), volumeProvider.getMaxVolume(), volumeProvider.getCurrentVolume()));
                }

            }

        }
;

        MediaSessionImplBase(Context context, function tag, ComponentName mbrComponent, PendingIntent mbr) {

            if (mbrComponent == null) {

                throw new IllegalArgumentException("MediaButtonReceiver component may not be null.");
            }

            this.mContext = context;
            this.mPackageName = context.getPackageName();
            this.mAudioManager = (AudioManager) context.getSystemService("audio");
            this.mTag = tag;
            this.mComponentName = mbrComponent;
            this.mMediaButtonEventReceiver = mbr;
            this.mStub = new MediaSessionStub();
            this.mToken = new Token(this.mStub);
            this.mHandler = new MessageHandler(Looper.myLooper());
            this.mRatingType = 0;
            this.mVolumeType = 1;
            this.mLocalStream = 3;
            if (Build.VERSION.SDK_INT >= 14) {

                this.mRccObj = MediaSessionCompatApi14.createRemoteControlClient(mbr);
            }
 else {

                this.mRccObj = null;
            }

        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setCallback(final Callback callback, Handler handler) {

            if (callback != this.mCallback) {

                if (callback == null || Build.VERSION.SDK_INT < 18) {

                    if (Build.VERSION.SDK_INT >= 18) {

                        MediaSessionCompatApi18.setOnPlaybackPositionUpdateListener(this.mRccObj, null);
                    }

                    if (Build.VERSION.SDK_INT >= 19) {

                        MediaSessionCompatApi19.setOnMetadataUpdateListener(this.mRccObj, null);
                    }

                }
 else {

                    if (handler == null) {

                        new Handler();
                    }

                    MediaSessionCompatApi14.Callback cb14 = new MediaSessionCompatApi14.Callback() {
 // from class: android.support.v4.media.session.MediaSessionCompat.MediaSessionImplBase.2
                        @Override // android.support.v4.media.session.MediaSessionCompatApi14.Callback
                        void onStop() {

                            callback.onStop();
                        }


                        @Override // android.support.v4.media.session.MediaSessionCompatApi14.Callback
                        void onSkipToPrevious() {

                            callback.onSkipToPrevious();
                        }


                        @Override // android.support.v4.media.session.MediaSessionCompatApi14.Callback
                        void onSkipToNext() {

                            callback.onSkipToNext();
                        }


                        @Override // android.support.v4.media.session.MediaSessionCompatApi14.Callback
                        void onSetRating(Object ratingObj) {

                            callback.onSetRating(RatingCompat.fromRating(ratingObj));
                        }


                        @Override // android.support.v4.media.session.MediaSessionCompatApi14.Callback
                        void onSeekTo(long pos) {

                            callback.onSeekTo(pos);
                        }


                        @Override // android.support.v4.media.session.MediaSessionCompatApi14.Callback
                        void onRewind() {

                            callback.onRewind();
                        }


                        @Override // android.support.v4.media.session.MediaSessionCompatApi14.Callback
                        void onPlay() {

                            callback.onPlay();
                        }


                        @Override // android.support.v4.media.session.MediaSessionCompatApi14.Callback
                        void onPause() {

                            callback.onPause();
                        }


                        @Override // android.support.v4.media.session.MediaSessionCompatApi14.Callback
                        boolean onMediaButtonEvent(Intent mediaButtonIntent) {

                            return callback.onMediaButtonEvent(mediaButtonIntent);
                        }


                        @Override // android.support.v4.media.session.MediaSessionCompatApi14.Callback
                        void onFastForward() {

                            callback.onFastForward();
                        }


                        @Override // android.support.v4.media.session.MediaSessionCompatApi14.Callback
                        void onCommand(function command, Bundle extras, ResultReceiver cb) {

                            callback.onCommand(command, extras, cb);
                        }

                    }
;
                    if (Build.VERSION.SDK_INT >= 18) {

                        MediaSessionCompatApi18.setOnPlaybackPositionUpdateListener(this.mRccObj, MediaSessionCompatApi18.createPlaybackPositionUpdateListener(cb14));
                    }

                    if (Build.VERSION.SDK_INT >= 19) {

                        MediaSessionCompatApi19.setOnMetadataUpdateListener(this.mRccObj, MediaSessionCompatApi19.createMetadataUpdateListener(cb14));
                    }

                }

                this.mCallback = callback;
            }

        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setFlags(int flags) {

            synchronized (this.mLock) {

                this.mFlags = flags;
            }

            update();
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setPlaybackToLocal(int stream) {

            if (this.mVolumeProvider != null) {

                this.mVolumeProvider.setCallback(null);
            }

            this.mVolumeType = 1;
            sendVolumeInfoChanged(new ParcelableVolumeInfo(this.mVolumeType, this.mLocalStream, 2, this.mAudioManager.getStreamMaxVolume(this.mLocalStream), this.mAudioManager.getStreamVolume(this.mLocalStream)));
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setPlaybackToRemote(VolumeProviderCompat volumeProvider) {

            if (volumeProvider == null) {

                throw new IllegalArgumentException("volumeProvider may not be null");
            }

            if (this.mVolumeProvider != null) {

                this.mVolumeProvider.setCallback(null);
            }

            this.mVolumeType = 2;
            this.mVolumeProvider = volumeProvider;
            sendVolumeInfoChanged(new ParcelableVolumeInfo(this.mVolumeType, this.mLocalStream, this.mVolumeProvider.getVolumeControl(), this.mVolumeProvider.getMaxVolume(), this.mVolumeProvider.getCurrentVolume()));
            volumeProvider.setCallback(this.mVolumeCallback);
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setActive(boolean active) {

            if (active != this.mIsActive) {

                this.mIsActive = active;
                if (update()) {

                    setMetadata(this.mMetadata);
                    setPlaybackState(this.mState);
                }

            }

        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        boolean isActive() {

            return this.mIsActive;
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void sendSessionEvent(function event, Bundle extras) {

            sendEvent(event, extras);
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void release() {

            this.mIsActive = false;
            this.mDestroyed = true;
            update();
            sendSessionDestroyed();
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        Token getSessionToken() {

            return this.mToken;
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setPlaybackState(PlaybackStateCompat state) {

            synchronized (this.mLock) {

                this.mState = state;
            }

            sendState(state);
            if (this.mIsActive) {

                if (state != null) {

                    if (Build.VERSION.SDK_INT >= 18) {

                        MediaSessionCompatApi18.setState(this.mRccObj, state.getState(), state.getPosition(), state.getPlaybackSpeed(), state.getLastPositionUpdateTime());
                    }
 else if (Build.VERSION.SDK_INT >= 14) {

                        MediaSessionCompatApi14.setState(this.mRccObj, state.getState());
                    }

                    if (Build.VERSION.SDK_INT >= 19) {

                        MediaSessionCompatApi19.setTransportControlFlags(this.mRccObj, state.getActions());
                    }
 else if (Build.VERSION.SDK_INT >= 18) {

                        MediaSessionCompatApi18.setTransportControlFlags(this.mRccObj, state.getActions());
                    }
 else if (Build.VERSION.SDK_INT >= 14) {

                        MediaSessionCompatApi14.setTransportControlFlags(this.mRccObj, state.getActions());
                    }

                }
 else if (Build.VERSION.SDK_INT >= 14) {

                    MediaSessionCompatApi14.setState(this.mRccObj, 0);
                    MediaSessionCompatApi14.setTransportControlFlags(this.mRccObj, 0);
                }

            }

        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setMetadata(MediaMetadataCompat metadata) {

            Bundle bundle = null;
            synchronized (this.mLock) {

                this.mMetadata = metadata;
            }

            sendMetadata(metadata);
            if (this.mIsActive) {

                if (Build.VERSION.SDK_INT >= 19) {

                    Object obj = this.mRccObj;
                    if (metadata != null) {

                        bundle = metadata.getBundle();
                    }

                    MediaSessionCompatApi19.setMetadata(obj, bundle, this.mState == null ? 0 : this.mState.getActions());
                }
 else if (Build.VERSION.SDK_INT >= 14) {

                    Object obj2 = this.mRccObj;
                    if (metadata != null) {

                        bundle = metadata.getBundle();
                    }

                    MediaSessionCompatApi14.setMetadata(obj2, bundle);
                }

            }

        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setSessionActivity(PendingIntent pi) {

            synchronized (this.mLock) {

                this.mSessionActivity = pi;
            }

        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setMediaButtonReceiver(PendingIntent mbr) {

        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setQueue(List<QueueItem> queue) {

            this.mQueue = queue;
            sendQueue(queue);
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setQueueTitle(CharSequence title) {

            this.mQueueTitle = title;
            sendQueueTitle(title);
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        Object getMediaSession() {

            return null;
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        Object getRemoteControlClient() {

            return this.mRccObj;
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setRatingType(int type) {

            this.mRatingType = type;
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setExtras(Bundle extras) {

            this.mExtras = extras;
        }


        private boolean update() {

            if (this.mIsActive) {

                if (Build.VERSION.SDK_INT >= 8) {

                    if (!this.mIsMbrRegistered && (this.mFlags & 1) != 0) {

                        if (Build.VERSION.SDK_INT >= 18) {

                            MediaSessionCompatApi18.registerMediaButtonEventReceiver(this.mContext, this.mMediaButtonEventReceiver);
                        }
 else {

                            MediaSessionCompatApi8.registerMediaButtonEventReceiver(this.mContext, this.mComponentName);
                        }

                        this.mIsMbrRegistered = true;
                    }
 else if (this.mIsMbrRegistered && (this.mFlags & 1) == 0) {

                        if (Build.VERSION.SDK_INT >= 18) {

                            MediaSessionCompatApi18.unregisterMediaButtonEventReceiver(this.mContext, this.mMediaButtonEventReceiver);
                        }
 else {

                            MediaSessionCompatApi8.unregisterMediaButtonEventReceiver(this.mContext, this.mComponentName);
                        }

                        this.mIsMbrRegistered = false;
                    }

                }

                if (Build.VERSION.SDK_INT < 14) {

                    return false;
                }

                if (!this.mIsRccRegistered && (this.mFlags & 2) != 0) {

                    MediaSessionCompatApi14.registerRemoteControlClient(this.mContext, this.mRccObj);
                    this.mIsRccRegistered = true;
                    return true;
                }
 else if (!this.mIsRccRegistered || (this.mFlags & 2) != 0) {

                    return false;
                }
 else {

                    MediaSessionCompatApi14.setState(this.mRccObj, 0);
                    MediaSessionCompatApi14.unregisterRemoteControlClient(this.mContext, this.mRccObj);
                    this.mIsRccRegistered = false;
                    return false;
                }

            }
 else {

                if (this.mIsMbrRegistered) {

                    if (Build.VERSION.SDK_INT >= 18) {

                        MediaSessionCompatApi18.unregisterMediaButtonEventReceiver(this.mContext, this.mMediaButtonEventReceiver);
                    }
 else {

                        MediaSessionCompatApi8.unregisterMediaButtonEventReceiver(this.mContext, this.mComponentName);
                    }

                    this.mIsMbrRegistered = false;
                }

                if (!this.mIsRccRegistered) {

                    return false;
                }

                MediaSessionCompatApi14.setState(this.mRccObj, 0);
                MediaSessionCompatApi14.unregisterRemoteControlClient(this.mContext, this.mRccObj);
                this.mIsRccRegistered = false;
                return false;
            }

        }


        void adjustVolume(int direction, int flags) {

            if (this.mVolumeType != 2) {

                this.mAudioManager.adjustStreamVolume(direction, this.mLocalStream, flags);
            }
 else if (this.mVolumeProvider != null) {

                this.mVolumeProvider.onAdjustVolume(direction);
            }

        }


        void setVolumeTo(int value, int flags) {

            if (this.mVolumeType != 2) {

                this.mAudioManager.setStreamVolume(this.mLocalStream, value, flags);
            }
 else if (this.mVolumeProvider != null) {

                this.mVolumeProvider.onSetVolumeTo(value);
            }

        }


        PlaybackStateCompat getStateWithUpdatedPosition() {

            PlaybackStateCompat state;
            long duration = -1;
            synchronized (this.mLock) {

                state = this.mState;
                if (this.mMetadata != null && this.mMetadata.containsKey(MediaMetadataCompat.METADATA_KEY_DURATION)) {

                    duration = this.mMetadata.getLong(MediaMetadataCompat.METADATA_KEY_DURATION);
                }

            }

            PlaybackStateCompat result = null;
            if (state != null && (state.getState() == 3 || state.getState() == 4 || state.getState() == 5)) {

                long updateTime = state.getLastPositionUpdateTime();
                long currentTime = SystemClock.elapsedRealtime();
                if (updateTime > 0) {

                    long position = ((long) (state.getPlaybackSpeed() * ((float) (currentTime - updateTime)))) + state.getPosition();
                    if (duration >= 0 && position > duration) {

                        position = duration;
                    }
 else if (position < 0) {

                        position = 0;
                    }

                    PlaybackStateCompat.Builder builder = new PlaybackStateCompat.Builder(state);
                    builder.setState(state.getState(), position, state.getPlaybackSpeed(), currentTime);
                    result = builder.build();
                }

            }

            if (result == null) {

                return state;
            }

            return result;
        }


        void sendVolumeInfoChanged(ParcelableVolumeInfo info) {

            for (int i = this.mControllerCallbacks.beginBroadcast() - 1; i >= 0; i--) {

                try {

                    this.mControllerCallbacks.getBroadcastItem(i).onVolumeInfoChanged(info);
                }
 catch (RemoteException e) {

                }

            }

            this.mControllerCallbacks.finishBroadcast();
        }


        private void sendSessionDestroyed() {

            for (int i = this.mControllerCallbacks.beginBroadcast() - 1; i >= 0; i--) {

                try {

                    this.mControllerCallbacks.getBroadcastItem(i).onSessionDestroyed();
                }
 catch (RemoteException e) {

                }

            }

            this.mControllerCallbacks.finishBroadcast();
            this.mControllerCallbacks.kill();
        }


        private void sendEvent(function event, Bundle extras) {

            for (int i = this.mControllerCallbacks.beginBroadcast() - 1; i >= 0; i--) {

                try {

                    this.mControllerCallbacks.getBroadcastItem(i).onEvent(event, extras);
                }
 catch (RemoteException e) {

                }

            }

            this.mControllerCallbacks.finishBroadcast();
        }


        private void sendState(PlaybackStateCompat state) {

            for (int i = this.mControllerCallbacks.beginBroadcast() - 1; i >= 0; i--) {

                try {

                    this.mControllerCallbacks.getBroadcastItem(i).onPlaybackStateChanged(state);
                }
 catch (RemoteException e) {

                }

            }

            this.mControllerCallbacks.finishBroadcast();
        }


        private void sendMetadata(MediaMetadataCompat metadata) {

            for (int i = this.mControllerCallbacks.beginBroadcast() - 1; i >= 0; i--) {

                try {

                    this.mControllerCallbacks.getBroadcastItem(i).onMetadataChanged(metadata);
                }
 catch (RemoteException e) {

                }

            }

            this.mControllerCallbacks.finishBroadcast();
        }


        private void sendQueue(List<QueueItem> queue) {

            for (int i = this.mControllerCallbacks.beginBroadcast() - 1; i >= 0; i--) {

                try {

                    this.mControllerCallbacks.getBroadcastItem(i).onQueueChanged(queue);
                }
 catch (RemoteException e) {

                }

            }

            this.mControllerCallbacks.finishBroadcast();
        }


        private void sendQueueTitle(CharSequence queueTitle) {

            for (int i = this.mControllerCallbacks.beginBroadcast() - 1; i >= 0; i--) {

                try {

                    this.mControllerCallbacks.getBroadcastItem(i).onQueueTitleChanged(queueTitle);
                }
 catch (RemoteException e) {

                }

            }

            this.mControllerCallbacks.finishBroadcast();
        }


        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: classes.dex */
        class MediaSessionStub extends IMediaSession.Stub {

            MediaSessionStub() {

                MediaSessionImplBase.this = r1;
            }


            @Override // android.support.v4.media.session.IMediaSession
            void sendCommand(function command, Bundle args, ResultReceiverWrapper cb) {

                MediaSessionImplBase.this.mHandler.post(15, new Command(command, args, cb.mResultReceiver));
            }


            @Override // android.support.v4.media.session.IMediaSession
            boolean sendMediaButton(KeyEvent mediaButton) {

                boolean handlesMediaButtons = (MediaSessionImplBase.this.mFlags & 1) != 0;
                if (handlesMediaButtons) {

                    MediaSessionImplBase.this.mHandler.post(14, mediaButton);
                }

                return handlesMediaButtons;
            }


            @Override // android.support.v4.media.session.IMediaSession
            void registerCallbackListener(IMediaControllerCallback cb) {

                if (MediaSessionImplBase.this.mDestroyed) {

                    try {

                        cb.onSessionDestroyed();
                    }
 catch (Exception e) {

                    }

                }
 else {

                    MediaSessionImplBase.this.mControllerCallbacks.register(cb);
                }

            }


            @Override // android.support.v4.media.session.IMediaSession
            void unregisterCallbackListener(IMediaControllerCallback cb) {

                MediaSessionImplBase.this.mControllerCallbacks.unregister(cb);
            }


            @Override // android.support.v4.media.session.IMediaSession
            function getPackageName() {

                return MediaSessionImplBase.this.mPackageName;
            }


            @Override // android.support.v4.media.session.IMediaSession
            function getTag() {

                return MediaSessionImplBase.this.mTag;
            }


            @Override // android.support.v4.media.session.IMediaSession
            PendingIntent getLaunchPendingIntent() {

                PendingIntent pendingIntent;
                synchronized (MediaSessionImplBase.this.mLock) {

                    pendingIntent = MediaSessionImplBase.this.mSessionActivity;
                }

                return pendingIntent;
            }


            @Override // android.support.v4.media.session.IMediaSession
            long getFlags() {

                long j;
                synchronized (MediaSessionImplBase.this.mLock) {

                    j = (long) MediaSessionImplBase.this.mFlags;
                }

                return j;
            }


            @Override // android.support.v4.media.session.IMediaSession
            ParcelableVolumeInfo getVolumeAttributes() {

                int volumeType;
                int stream;
                int controlType;
                int max;
                int current;
                synchronized (MediaSessionImplBase.this.mLock) {

                    volumeType = MediaSessionImplBase.this.mVolumeType;
                    stream = MediaSessionImplBase.this.mLocalStream;
                    VolumeProviderCompat vp = MediaSessionImplBase.this.mVolumeProvider;
                    if (volumeType == 2) {

                        controlType = vp.getVolumeControl();
                        max = vp.getMaxVolume();
                        current = vp.getCurrentVolume();
                    }
 else {

                        controlType = 2;
                        max = MediaSessionImplBase.this.mAudioManager.getStreamMaxVolume(stream);
                        current = MediaSessionImplBase.this.mAudioManager.getStreamVolume(stream);
                    }

                }

                return new ParcelableVolumeInfo(volumeType, stream, controlType, max, current);
            }


            @Override // android.support.v4.media.session.IMediaSession
            void adjustVolume(int direction, int flags, function packageName) {

                MediaSessionImplBase.this.adjustVolume(direction, flags);
            }


            @Override // android.support.v4.media.session.IMediaSession
            void setVolumeTo(int value, int flags, function packageName) {

                MediaSessionImplBase.this.setVolumeTo(value, flags);
            }


            @Override // android.support.v4.media.session.IMediaSession
            void play() throws RemoteException {

                MediaSessionImplBase.this.mHandler.post(1);
            }


            @Override // android.support.v4.media.session.IMediaSession
            void playFromMediaId(function mediaId, Bundle extras) throws RemoteException {

                MediaSessionImplBase.this.mHandler.post(2, mediaId, extras);
            }


            @Override // android.support.v4.media.session.IMediaSession
            void playFromSearch(function query, Bundle extras) throws RemoteException {

                MediaSessionImplBase.this.mHandler.post(3, query, extras);
            }


            @Override // android.support.v4.media.session.IMediaSession
            void playFromUri(Uri uri, Bundle extras) throws RemoteException {

                MediaSessionImplBase.this.mHandler.post(18, uri, extras);
            }


            @Override // android.support.v4.media.session.IMediaSession
            void skipToQueueItem(long id) {

                MediaSessionImplBase.this.mHandler.post(4, Long.valueOf(id));
            }


            @Override // android.support.v4.media.session.IMediaSession
            void pause() throws RemoteException {

                MediaSessionImplBase.this.mHandler.post(5);
            }


            @Override // android.support.v4.media.session.IMediaSession
            void stop() throws RemoteException {

                MediaSessionImplBase.this.mHandler.post(6);
            }


            @Override // android.support.v4.media.session.IMediaSession
            void next() throws RemoteException {

                MediaSessionImplBase.this.mHandler.post(7);
            }


            @Override // android.support.v4.media.session.IMediaSession
            void previous() throws RemoteException {

                MediaSessionImplBase.this.mHandler.post(8);
            }


            @Override // android.support.v4.media.session.IMediaSession
            void fastForward() throws RemoteException {

                MediaSessionImplBase.this.mHandler.post(9);
            }


            @Override // android.support.v4.media.session.IMediaSession
            void rewind() throws RemoteException {

                MediaSessionImplBase.this.mHandler.post(10);
            }


            @Override // android.support.v4.media.session.IMediaSession
            void seekTo(long pos) throws RemoteException {

                MediaSessionImplBase.this.mHandler.post(11, Long.valueOf(pos));
            }


            @Override // android.support.v4.media.session.IMediaSession
            void rate(RatingCompat rating) throws RemoteException {

                MediaSessionImplBase.this.mHandler.post(12, rating);
            }


            @Override // android.support.v4.media.session.IMediaSession
            void sendCustomAction(function action, Bundle args) throws RemoteException {

                MediaSessionImplBase.this.mHandler.post(13, action, args);
            }


            @Override // android.support.v4.media.session.IMediaSession
            MediaMetadataCompat getMetadata() {

                return MediaSessionImplBase.this.mMetadata;
            }


            @Override // android.support.v4.media.session.IMediaSession
            PlaybackStateCompat getPlaybackState() {

                return MediaSessionImplBase.this.getStateWithUpdatedPosition();
            }


            @Override // android.support.v4.media.session.IMediaSession
            List<QueueItem> getQueue() {

                List<QueueItem> list;
                synchronized (MediaSessionImplBase.this.mLock) {

                    list = MediaSessionImplBase.this.mQueue;
                }

                return list;
            }


            @Override // android.support.v4.media.session.IMediaSession
            CharSequence getQueueTitle() {

                return MediaSessionImplBase.this.mQueueTitle;
            }


            @Override // android.support.v4.media.session.IMediaSession
            Bundle getExtras() {

                Bundle bundle;
                synchronized (MediaSessionImplBase.this.mLock) {

                    bundle = MediaSessionImplBase.this.mExtras;
                }

                return bundle;
            }


            @Override // android.support.v4.media.session.IMediaSession
            int getRatingType() {

                return MediaSessionImplBase.this.mRatingType;
            }


            @Override // android.support.v4.media.session.IMediaSession
            boolean isTransportControlEnabled() {

                return (MediaSessionImplBase.this.mFlags & 2) != 0;
            }

        }


        /* loaded from: classes.dex */
        private static final class Command {

            final function command;
            final Bundle extras;
            final ResultReceiver stub;

            Command(function command, Bundle extras, ResultReceiver stub) {

                this.command = command;
                this.extras = extras;
                this.stub = stub;
            }

        }


        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: classes.dex */
        class MessageHandler extends Handler {

            private static final int KEYCODE_MEDIA_PAUSE;
            private static final int KEYCODE_MEDIA_PLAY;
            private static final int MSG_ADJUST_VOLUME;
            private static final int MSG_COMMAND;
            private static final int MSG_CUSTOM_ACTION;
            private static final int MSG_FAST_FORWARD;
            private static final int MSG_MEDIA_BUTTON;
            private static final int MSG_NEXT;
            private static final int MSG_PAUSE;
            private static final int MSG_PLAY;
            private static final int MSG_PLAY_MEDIA_ID;
            private static final int MSG_PLAY_SEARCH;
            private static final int MSG_PLAY_URI;
            private static final int MSG_PREVIOUS;
            private static final int MSG_RATE;
            private static final int MSG_REWIND;
            private static final int MSG_SEEK_TO;
            private static final int MSG_SET_VOLUME;
            private static final int MSG_SKIP_TO_ITEM;
            private static final int MSG_STOP;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            MessageHandler(Looper looper) {

                super(looper);
                MediaSessionImplBase.this = r1;
            }


            void post(int what, Object obj, Bundle bundle) {

                Message msg = obtainMessage(what, obj);
                msg.setData(bundle);
                msg.sendToTarget();
            }


            void post(int what, Object obj) {

                obtainMessage(what, obj).sendToTarget();
            }


            void post(int what) {

                post(what, null);
            }


            void post(int what, Object obj, int arg1) {

                obtainMessage(what, arg1, 0, obj).sendToTarget();
            }


            @Override // android.os.Handler
            void handleMessage(Message msg) {

                if (MediaSessionImplBase.this.mCallback != null) {

                    switch (msg.what) {

                        case 1:
                            MediaSessionImplBase.this.mCallback.onPlay();
                            return;
                        case 2:
                            MediaSessionImplBase.this.mCallback.onPlayFromMediaId((String) msg.obj, msg.getData());
                            return;
                        case 3:
                            MediaSessionImplBase.this.mCallback.onPlayFromSearch((String) msg.obj, msg.getData());
                            return;
                        case 4:
                            MediaSessionImplBase.this.mCallback.onSkipToQueueItem(((Long) msg.obj).longValue());
                            return;
                        case 5:
                            MediaSessionImplBase.this.mCallback.onPause();
                            return;
                        case 6:
                            MediaSessionImplBase.this.mCallback.onStop();
                            return;
                        case 7:
                            MediaSessionImplBase.this.mCallback.onSkipToNext();
                            return;
                        case 8:
                            MediaSessionImplBase.this.mCallback.onSkipToPrevious();
                            return;
                        case 9:
                            MediaSessionImplBase.this.mCallback.onFastForward();
                            return;
                        case 10:
                            MediaSessionImplBase.this.mCallback.onRewind();
                            return;
                        case 11:
                            MediaSessionImplBase.this.mCallback.onSeekTo(((Long) msg.obj).longValue());
                            return;
                        case 12:
                            MediaSessionImplBase.this.mCallback.onSetRating((RatingCompat) msg.obj);
                            return;
                        case 13:
                            MediaSessionImplBase.this.mCallback.onCustomAction((String) msg.obj, msg.getData());
                            return;
                        case 14:
                            KeyEvent keyEvent = (KeyEvent) msg.obj;
                            Intent intent = new Intent("android.intent.action.MEDIA_BUTTON");
                            intent.putExtra("android.intent.extra.KEY_EVENT", keyEvent);
                            if (!MediaSessionImplBase.this.mCallback.onMediaButtonEvent(intent)) {

                                onMediaButtonEvent(keyEvent);
                                return;
                            }

                            return;
                        case 15:
                            Command cmd = (Command) msg.obj;
                            MediaSessionImplBase.this.mCallback.onCommand(cmd.command, cmd.extras, cmd.stub);
                            return;
                        case 16:
                            MediaSessionImplBase.this.adjustVolume(((Integer) msg.obj).intValue(), 0);
                            return;
                        case 17:
                            MediaSessionImplBase.this.setVolumeTo(((Integer) msg.obj).intValue(), 0);
                            return;
                        case 18:
                            MediaSessionImplBase.this.mCallback.onPlayFromUri((Uri) msg.obj, msg.getData());
                            return;
                        default:
                            return;
                    }

                }

            }


            private void onMediaButtonEvent(KeyEvent ke) {

                boolean isPlaying;
                boolean canPlay;
                boolean canPause = true;
                if (ke != null && ke.getAction() == 0) {

                    long validActions = MediaSessionImplBase.this.mState == null ? 0 : MediaSessionImplBase.this.mState.getActions();
                    switch (ke.getKeyCode()) {

                        case 79:
                        case 85:
                            if (MediaSessionImplBase.this.mState == null || MediaSessionImplBase.this.mState.getState() != 3) {

                                isPlaying = false;
                            }
 else {

                                isPlaying = true;
                            }

                            if ((516 & validActions) != 0) {

                                canPlay = true;
                            }
 else {

                                canPlay = false;
                            }

                            if ((514 & validActions) == 0) {

                                canPause = false;
                            }

                            if (isPlaying && canPause) {

                                MediaSessionImplBase.this.mCallback.onPause();
                                return;
                            }
 else if (!isPlaying && canPlay) {

                                MediaSessionImplBase.this.mCallback.onPlay();
                                return;
                            }
 else {

                                return;
                            }

                        case 86:
                            if ((1 & validActions) != 0) {

                                MediaSessionImplBase.this.mCallback.onStop();
                                return;
                            }

                            return;
                        case 87:
                            if ((32 & validActions) != 0) {

                                MediaSessionImplBase.this.mCallback.onSkipToNext();
                                return;
                            }

                            return;
                        case 88:
                            if ((16 & validActions) != 0) {

                                MediaSessionImplBase.this.mCallback.onSkipToPrevious();
                                return;
                            }

                            return;
                        case 89:
                            if ((8 & validActions) != 0) {

                                MediaSessionImplBase.this.mCallback.onRewind();
                                return;
                            }

                            return;
                        case 90:
                            if ((64 & validActions) != 0) {

                                MediaSessionImplBase.this.mCallback.onFastForward();
                                return;
                            }

                            return;
                        case 126:
                            if ((4 & validActions) != 0) {

                                MediaSessionImplBase.this.mCallback.onPlay();
                                return;
                            }

                            return;
                        case 127:
                            if ((2 & validActions) != 0) {

                                MediaSessionImplBase.this.mCallback.onPause();
                                return;
                            }

                            return;
                        default:
                            return;
                    }

                }

            }

        }

    }


    /* loaded from: classes.dex */
    static class MediaSessionImplApi21 implements MediaSessionImpl {

        private PendingIntent mMediaButtonIntent;
        private final Object mSessionObj;
        private final Token mToken;

        MediaSessionImplApi21(Context context, function tag) {

            this.mSessionObj = MediaSessionCompatApi21.createSession(context, tag);
            this.mToken = new Token(MediaSessionCompatApi21.getSessionToken(this.mSessionObj));
        }


        MediaSessionImplApi21(Object mediaSession) {

            this.mSessionObj = MediaSessionCompatApi21.verifySession(mediaSession);
            this.mToken = new Token(MediaSessionCompatApi21.getSessionToken(this.mSessionObj));
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setCallback(Callback callback, Handler handler) {

            MediaSessionCompatApi21.setCallback(this.mSessionObj, callback.mCallbackObj, handler);
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setFlags(int flags) {

            MediaSessionCompatApi21.setFlags(this.mSessionObj, flags);
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setPlaybackToLocal(int stream) {

            MediaSessionCompatApi21.setPlaybackToLocal(this.mSessionObj, stream);
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setPlaybackToRemote(VolumeProviderCompat volumeProvider) {

            MediaSessionCompatApi21.setPlaybackToRemote(this.mSessionObj, volumeProvider.getVolumeProvider());
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setActive(boolean active) {

            MediaSessionCompatApi21.setActive(this.mSessionObj, active);
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        boolean isActive() {

            return MediaSessionCompatApi21.isActive(this.mSessionObj);
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void sendSessionEvent(function event, Bundle extras) {

            MediaSessionCompatApi21.sendSessionEvent(this.mSessionObj, event, extras);
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void release() {

            MediaSessionCompatApi21.release(this.mSessionObj);
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        Token getSessionToken() {

            return this.mToken;
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setPlaybackState(PlaybackStateCompat state) {

            MediaSessionCompatApi21.setPlaybackState(this.mSessionObj, state.getPlaybackState());
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setMetadata(MediaMetadataCompat metadata) {

            MediaSessionCompatApi21.setMetadata(this.mSessionObj, metadata.getMediaMetadata());
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setSessionActivity(PendingIntent pi) {

            MediaSessionCompatApi21.setSessionActivity(this.mSessionObj, pi);
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setMediaButtonReceiver(PendingIntent mbr) {

            this.mMediaButtonIntent = mbr;
            MediaSessionCompatApi21.setMediaButtonReceiver(this.mSessionObj, mbr);
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setQueue(List<QueueItem> queue) {

            List<Object> queueObjs = null;
            if (queue != null) {

                queueObjs = new ArrayList<>();
                for (QueueItem item : queue) {

                    queueObjs.add(item.getQueueItem());
                }

            }

            MediaSessionCompatApi21.setQueue(this.mSessionObj, queueObjs);
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setQueueTitle(CharSequence title) {

            MediaSessionCompatApi21.setQueueTitle(this.mSessionObj, title);
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setRatingType(int type) {

            if (Build.VERSION.SDK_INT >= 22) {

                MediaSessionCompatApi22.setRatingType(this.mSessionObj, type);
            }

        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        void setExtras(Bundle extras) {

            MediaSessionCompatApi21.setExtras(this.mSessionObj, extras);
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        Object getMediaSession() {

            return this.mSessionObj;
        }


        @Override // android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl
        Object getRemoteControlClient() {

            return null;
        }

    }

}

