/* Auto-generated JavaScript code */
package android.support.v4.media.session;

import android.app.PendingIntent;
import android.content.Context;
import android.media.AudioManager;
import android.media.RemoteControlClient;
import android.os.SystemClock;
import android.support.v4.media.session.MediaSessionCompatApi14;
/* loaded from: classes.dex */
class MediaSessionCompatApi18 {

    private static final long ACTION_SEEK_TO = 256;

    static Object createPlaybackPositionUpdateListener(MediaSessionCompatApi14.Callback callback) {

        return new OnPlaybackPositionUpdateListener(callback);
    }


    static void registerMediaButtonEventReceiver(Context context, PendingIntent pi) {

        ((AudioManager) context.getSystemService("audio")).registerMediaButtonEventReceiver(pi);
    }


    static void unregisterMediaButtonEventReceiver(Context context, PendingIntent pi) {

        ((AudioManager) context.getSystemService("audio")).unregisterMediaButtonEventReceiver(pi);
    }


    static void setState(Object rccObj, int state, long position, float speed, long updateTime) {

        long currTime = SystemClock.elapsedRealtime();
        if (state == 3 && position > 0) {

            long diff = 0;
            if (updateTime > 0) {

                diff = currTime - updateTime;
                if (speed > 0.0f && speed != 1.0f) {

                    diff = (long) (((float) diff) * speed);
                }

            }

            position += diff;
        }

        ((RemoteControlClient) rccObj).setPlaybackState(MediaSessionCompatApi14.getRccStateFromState(state), position, speed);
    }


    static void setTransportControlFlags(Object rccObj, long actions) {

        ((RemoteControlClient) rccObj).setTransportControlFlags(getRccTransportControlFlagsFromActions(actions));
    }


    static void setOnPlaybackPositionUpdateListener(Object rccObj, Object onPositionUpdateObj) {

        ((RemoteControlClient) rccObj).setPlaybackPositionUpdateListener((RemoteControlClient.OnPlaybackPositionUpdateListener) onPositionUpdateObj);
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static int getRccTransportControlFlagsFromActions(long actions) {

        int transportControlFlags = MediaSessionCompatApi14.getRccTransportControlFlagsFromActions(actions);
        if ((256 & actions) != 0) {

            return transportControlFlags | 256;
        }

        return transportControlFlags;
    }


    /* loaded from: classes.dex */
    static class OnPlaybackPositionUpdateListener<T extends MediaSessionCompatApi14.Callback> implements RemoteControlClient.OnPlaybackPositionUpdateListener {

        protected final T mCallback;

        OnPlaybackPositionUpdateListener(T callback) {

            this.mCallback = callback;
        }


        @Override // android.media.RemoteControlClient.OnPlaybackPositionUpdateListener
        void onPlaybackPositionUpdate(long newPositionMs) {

            this.mCallback.onSeekTo(newPositionMs);
        }

    }

}

