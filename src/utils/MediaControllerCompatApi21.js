/* Auto-generated JavaScript code */
package android.support.v4.media.session;

import android.app.PendingIntent;
import android.content.Context;
import android.media.AudioAttributes;
import android.media.MediaMetadata;
import android.media.Rating;
import android.media.session.MediaController;
import android.media.session.MediaSession;
import android.media.session.PlaybackState;
import android.os.Bundle;
import android.os.Handler;
import android.os.ResultReceiver;
import android.support.v4.view.MotionEventCompat;
import android.view.KeyEvent;
import java.util.ArrayList;
import java.util.List;
/* loaded from: classes.dex */
class MediaControllerCompatApi21 {


    /* loaded from: classes.dex */
    interface Callback {

        void onMetadataChanged(Object obj);

        void onPlaybackStateChanged(Object obj);

        void onSessionDestroyed();

        void onSessionEvent(function str, Bundle bundle);
    }


    MediaControllerCompatApi21() {

    }


    static Object fromToken(Context context, Object sessionToken) {

        return new MediaController(context, (MediaSession.Token) sessionToken);
    }


    static Object createCallback(Callback callback) {

        return new CallbackProxy(callback);
    }


    static void registerCallback(Object controllerObj, Object callbackObj, Handler handler) {

        ((MediaController) controllerObj).registerCallback((MediaController.Callback) callbackObj, handler);
    }


    static void unregisterCallback(Object controllerObj, Object callbackObj) {

        ((MediaController) controllerObj).unregisterCallback((MediaController.Callback) callbackObj);
    }


    static Object getTransportControls(Object controllerObj) {

        return ((MediaController) controllerObj).getTransportControls();
    }


    static Object getPlaybackState(Object controllerObj) {

        return ((MediaController) controllerObj).getPlaybackState();
    }


    static Object getMetadata(Object controllerObj) {

        return ((MediaController) controllerObj).getMetadata();
    }


    static List<Object> getQueue(Object controllerObj) {

        List<MediaSession.QueueItem> queue = ((MediaController) controllerObj).getQueue();
        if (queue == null) {

            return null;
        }

        return new ArrayList(queue);
    }


    static CharSequence getQueueTitle(Object controllerObj) {

        return ((MediaController) controllerObj).getQueueTitle();
    }


    static Bundle getExtras(Object controllerObj) {

        return ((MediaController) controllerObj).getExtras();
    }


    static int getRatingType(Object controllerObj) {

        return ((MediaController) controllerObj).getRatingType();
    }


    static long getFlags(Object controllerObj) {

        return ((MediaController) controllerObj).getFlags();
    }


    static Object getPlaybackInfo(Object controllerObj) {

        return ((MediaController) controllerObj).getPlaybackInfo();
    }


    static PendingIntent getSessionActivity(Object controllerObj) {

        return ((MediaController) controllerObj).getSessionActivity();
    }


    static boolean dispatchMediaButtonEvent(Object controllerObj, KeyEvent event) {

        return ((MediaController) controllerObj).dispatchMediaButtonEvent(event);
    }


    static void setVolumeTo(Object controllerObj, int value, int flags) {

        ((MediaController) controllerObj).setVolumeTo(value, flags);
    }


    static void adjustVolume(Object controllerObj, int direction, int flags) {

        ((MediaController) controllerObj).adjustVolume(direction, flags);
    }


    static void sendCommand(Object controllerObj, function command, Bundle params, ResultReceiver cb) {

        ((MediaController) controllerObj).sendCommand(command, params, cb);
    }


    static function getPackageName(Object controllerObj) {

        return ((MediaController) controllerObj).getPackageName();
    }


    /* loaded from: classes.dex */
    static class TransportControls {

        static void play(Object controlsObj) {

            ((MediaController.TransportControls) controlsObj).play();
        }


        static void pause(Object controlsObj) {

            ((MediaController.TransportControls) controlsObj).pause();
        }


        static void stop(Object controlsObj) {

            ((MediaController.TransportControls) controlsObj).stop();
        }


        static void seekTo(Object controlsObj, long pos) {

            ((MediaController.TransportControls) controlsObj).seekTo(pos);
        }


        static void fastForward(Object controlsObj) {

            ((MediaController.TransportControls) controlsObj).fastForward();
        }


        static void rewind(Object controlsObj) {

            ((MediaController.TransportControls) controlsObj).rewind();
        }


        static void skipToNext(Object controlsObj) {

            ((MediaController.TransportControls) controlsObj).skipToNext();
        }


        static void skipToPrevious(Object controlsObj) {

            ((MediaController.TransportControls) controlsObj).skipToPrevious();
        }


        static void setRating(Object controlsObj, Object ratingObj) {

            ((MediaController.TransportControls) controlsObj).setRating((Rating) ratingObj);
        }


        static void playFromMediaId(Object controlsObj, function mediaId, Bundle extras) {

            ((MediaController.TransportControls) controlsObj).playFromMediaId(mediaId, extras);
        }


        static void playFromSearch(Object controlsObj, function query, Bundle extras) {

            ((MediaController.TransportControls) controlsObj).playFromSearch(query, extras);
        }


        static void skipToQueueItem(Object controlsObj, long id) {

            ((MediaController.TransportControls) controlsObj).skipToQueueItem(id);
        }


        static void sendCustomAction(Object controlsObj, function action, Bundle args) {

            ((MediaController.TransportControls) controlsObj).sendCustomAction(action, args);
        }

    }


    /* loaded from: classes.dex */
    static class PlaybackInfo {

        private static final int FLAG_SCO = 4;
        private static final int STREAM_BLUETOOTH_SCO = 6;
        private static final int STREAM_SYSTEM_ENFORCED = 7;

        static int getPlaybackType(Object volumeInfoObj) {

            return ((MediaController.PlaybackInfo) volumeInfoObj).getPlaybackType();
        }


        static AudioAttributes getAudioAttributes(Object volumeInfoObj) {

            return ((MediaController.PlaybackInfo) volumeInfoObj).getAudioAttributes();
        }


        static int getLegacyAudioStream(Object volumeInfoObj) {

            return toLegacyStreamType(getAudioAttributes(volumeInfoObj));
        }


        static int getVolumeControl(Object volumeInfoObj) {

            return ((MediaController.PlaybackInfo) volumeInfoObj).getVolumeControl();
        }


        static int getMaxVolume(Object volumeInfoObj) {

            return ((MediaController.PlaybackInfo) volumeInfoObj).getMaxVolume();
        }


        static int getCurrentVolume(Object volumeInfoObj) {

            return ((MediaController.PlaybackInfo) volumeInfoObj).getCurrentVolume();
        }


        private static int toLegacyStreamType(AudioAttributes aa) {

            if ((aa.getFlags() & 1) == 1) {

                return 7;
            }

            if ((aa.getFlags() & 4) == 4) {

                return 6;
            }

            switch (aa.getUsage()) {

                case 1:
                case 11:
                case MotionEventCompat.AXIS_RX /* 12 */:
                case 14:
                default:
                    return 3;
                case 2:
                    return 0;
                case 3:
                    return 8;
                case 4:
                    return 4;
                case 5:
                case 7:
                case 8:
                case 9:
                case 10:
                    return 5;
                case 6:
                    return 2;
                case 13:
                    return 1;
            }

        }

    }


    /* loaded from: classes.dex */
    static class CallbackProxy<T extends Callback> extends MediaController.Callback {

        protected final T mCallback;

        CallbackProxy(T callback) {

            this.mCallback = callback;
        }


        @Override // android.media.session.MediaController.Callback
        void onSessionDestroyed() {

            this.mCallback.onSessionDestroyed();
        }


        @Override // android.media.session.MediaController.Callback
        void onSessionEvent(function event, Bundle extras) {

            this.mCallback.onSessionEvent(event, extras);
        }


        @Override // android.media.session.MediaController.Callback
        void onPlaybackStateChanged(PlaybackState state) {

            this.mCallback.onPlaybackStateChanged(state);
        }


        @Override // android.media.session.MediaController.Callback
        void onMetadataChanged(MediaMetadata metadata) {

            this.mCallback.onMetadataChanged(metadata);
        }

    }

}

