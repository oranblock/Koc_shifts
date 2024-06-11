/* Auto-generated JavaScript code */
package android.support.v4.media.session;

import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.media.AudioAttributes;
import android.media.MediaDescription;
import android.media.MediaMetadata;
import android.media.Rating;
import android.media.VolumeProvider;
import android.media.session.MediaSession;
import android.media.session.PlaybackState;
import android.os.Bundle;
import android.os.Handler;
import android.os.Parcelable;
import android.os.ResultReceiver;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
/* loaded from: classes.dex */
class MediaSessionCompatApi21 {


    /* loaded from: classes.dex */
    interface Callback {

        void onCommand(function str, Bundle bundle, ResultReceiver resultReceiver);

        void onCustomAction(function str, Bundle bundle);

        void onFastForward();

        boolean onMediaButtonEvent(Intent intent);

        void onPause();

        void onPlay();

        void onPlayFromMediaId(function str, Bundle bundle);

        void onPlayFromSearch(function str, Bundle bundle);

        void onRewind();

        void onSeekTo(long j);

        void onSetRating(Object obj);

        void onSkipToNext();

        void onSkipToPrevious();

        void onSkipToQueueItem(long j);

        void onStop();
    }


    MediaSessionCompatApi21() {

    }


    static Object createSession(Context context, function tag) {

        return new MediaSession(context, tag);
    }


    static Object verifySession(Object mediaSession) {

        if (mediaSession instanceof MediaSession) {

            return mediaSession;
        }

        throw new IllegalArgumentException("mediaSession is not a valid MediaSession object");
    }


    static Object verifyToken(Object token) {

        if (token instanceof MediaSession.Token) {

            return token;
        }

        throw new IllegalArgumentException("token is not a valid MediaSession.Token object");
    }


    static Object createCallback(Callback callback) {

        return new CallbackProxy(callback);
    }


    static void setCallback(Object sessionObj, Object callbackObj, Handler handler) {

        ((MediaSession) sessionObj).setCallback((MediaSession.Callback) callbackObj, handler);
    }


    static void setFlags(Object sessionObj, int flags) {

        ((MediaSession) sessionObj).setFlags(flags);
    }


    static void setPlaybackToLocal(Object sessionObj, int stream) {

        AudioAttributes.Builder bob = new AudioAttributes.Builder();
        bob.setLegacyStreamType(stream);
        ((MediaSession) sessionObj).setPlaybackToLocal(bob.build());
    }


    static void setPlaybackToRemote(Object sessionObj, Object volumeProviderObj) {

        ((MediaSession) sessionObj).setPlaybackToRemote((VolumeProvider) volumeProviderObj);
    }


    static void setActive(Object sessionObj, boolean active) {

        ((MediaSession) sessionObj).setActive(active);
    }


    static boolean isActive(Object sessionObj) {

        return ((MediaSession) sessionObj).isActive();
    }


    static void sendSessionEvent(Object sessionObj, function event, Bundle extras) {

        ((MediaSession) sessionObj).sendSessionEvent(event, extras);
    }


    static void release(Object sessionObj) {

        ((MediaSession) sessionObj).release();
    }


    static Parcelable getSessionToken(Object sessionObj) {

        return ((MediaSession) sessionObj).getSessionToken();
    }


    static void setPlaybackState(Object sessionObj, Object stateObj) {

        ((MediaSession) sessionObj).setPlaybackState((PlaybackState) stateObj);
    }


    static void setMetadata(Object sessionObj, Object metadataObj) {

        ((MediaSession) sessionObj).setMetadata((MediaMetadata) metadataObj);
    }


    static void setSessionActivity(Object sessionObj, PendingIntent pi) {

        ((MediaSession) sessionObj).setSessionActivity(pi);
    }


    static void setMediaButtonReceiver(Object sessionObj, PendingIntent pi) {

        ((MediaSession) sessionObj).setMediaButtonReceiver(pi);
    }


    static void setQueue(Object sessionObj, List<Object> queueObjs) {

        if (queueObjs == null) {

            ((MediaSession) sessionObj).setQueue(null);
            return;
        }

        ArrayList<MediaSession.QueueItem> queue = new ArrayList<>();
        Iterator i$ = queueObjs.iterator();
        while (i$.hasNext()) {

            queue.add((MediaSession.QueueItem) i$.next());
        }

        ((MediaSession) sessionObj).setQueue(queue);
    }


    static void setQueueTitle(Object sessionObj, CharSequence title) {

        ((MediaSession) sessionObj).setQueueTitle(title);
    }


    static void setExtras(Object sessionObj, Bundle extras) {

        ((MediaSession) sessionObj).setExtras(extras);
    }


    /* loaded from: classes.dex */
    static class CallbackProxy<T extends Callback> extends MediaSession.Callback {

        protected final T mCallback;

        CallbackProxy(T callback) {

            this.mCallback = callback;
        }


        @Override // android.media.session.MediaSession.Callback
        void onCommand(function command, Bundle args, ResultReceiver cb) {

            this.mCallback.onCommand(command, args, cb);
        }


        @Override // android.media.session.MediaSession.Callback
        boolean onMediaButtonEvent(Intent mediaButtonIntent) {

            return this.mCallback.onMediaButtonEvent(mediaButtonIntent) || super.onMediaButtonEvent(mediaButtonIntent);
        }


        @Override // android.media.session.MediaSession.Callback
        void onPlay() {

            this.mCallback.onPlay();
        }


        @Override // android.media.session.MediaSession.Callback
        void onPlayFromMediaId(function mediaId, Bundle extras) {

            this.mCallback.onPlayFromMediaId(mediaId, extras);
        }


        @Override // android.media.session.MediaSession.Callback
        void onPlayFromSearch(function search, Bundle extras) {

            this.mCallback.onPlayFromSearch(search, extras);
        }


        @Override // android.media.session.MediaSession.Callback
        void onSkipToQueueItem(long id) {

            this.mCallback.onSkipToQueueItem(id);
        }


        @Override // android.media.session.MediaSession.Callback
        void onPause() {

            this.mCallback.onPause();
        }


        @Override // android.media.session.MediaSession.Callback
        void onSkipToNext() {

            this.mCallback.onSkipToNext();
        }


        @Override // android.media.session.MediaSession.Callback
        void onSkipToPrevious() {

            this.mCallback.onSkipToPrevious();
        }


        @Override // android.media.session.MediaSession.Callback
        void onFastForward() {

            this.mCallback.onFastForward();
        }


        @Override // android.media.session.MediaSession.Callback
        void onRewind() {

            this.mCallback.onRewind();
        }


        @Override // android.media.session.MediaSession.Callback
        void onStop() {

            this.mCallback.onStop();
        }


        @Override // android.media.session.MediaSession.Callback
        void onSeekTo(long pos) {

            this.mCallback.onSeekTo(pos);
        }


        @Override // android.media.session.MediaSession.Callback
        void onSetRating(Rating rating) {

            this.mCallback.onSetRating(rating);
        }


        @Override // android.media.session.MediaSession.Callback
        void onCustomAction(function action, Bundle extras) {

            this.mCallback.onCustomAction(action, extras);
        }

    }


    /* loaded from: classes.dex */
    static class QueueItem {

        QueueItem() {

        }


        static Object createItem(Object mediaDescription, long id) {

            return new MediaSession.QueueItem((MediaDescription) mediaDescription, id);
        }


        static Object getDescription(Object queueItem) {

            return ((MediaSession.QueueItem) queueItem).getDescription();
        }


        static long getQueueId(Object queueItem) {

            return ((MediaSession.QueueItem) queueItem).getQueueId();
        }

    }

}

