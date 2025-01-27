/* Auto-generated JavaScript code */
package android.support.v4.media;

import android.os.SystemClock;
import android.view.KeyEvent;
/* loaded from: classes.dex */
abstract class TransportPerformer {

    static final int AUDIOFOCUS_GAIN = 1;
    static final int AUDIOFOCUS_GAIN_TRANSIENT = 2;
    static final int AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK = 3;
    static final int AUDIOFOCUS_LOSS = -1;
    static final int AUDIOFOCUS_LOSS_TRANSIENT = -2;
    static final int AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK = -3;

    abstract long onGetCurrentPosition();

    abstract long onGetDuration();

    abstract boolean onIsPlaying();

    abstract void onPause();

    abstract void onSeekTo(long j);

    abstract void onStart();

    abstract void onStop();

    int onGetBufferPercentage() {

        return 100;
    }


    int onGetTransportControlFlags() {

        return 60;
    }


    boolean onMediaButtonDown(int keyCode, KeyEvent event) {

        switch (keyCode) {

            case 79:
            case 85:
                if (!onIsPlaying()) {

                    onStart();
                    break;
                }
 else {

                    onPause();
                    break;
                }

            case 86:
                onStop();
                break;
            case TransportMediator.KEYCODE_MEDIA_PLAY /* 126 */:
                onStart();
                break;
            case TransportMediator.KEYCODE_MEDIA_PAUSE /* 127 */:
                onPause();
                break;
        }

        return true;
    }


    boolean onMediaButtonUp(int keyCode, KeyEvent event) {

        return true;
    }


    void onAudioFocusChange(int focusChange) {

        int keyCode = 0;
        switch (focusChange) {

            case -1:
                keyCode = TransportMediator.KEYCODE_MEDIA_PAUSE;
                break;
        }

        if (keyCode != 0) {

            long now = SystemClock.uptimeMillis();
            onMediaButtonDown(keyCode, new KeyEvent(now, now, 0, keyCode, 0));
            onMediaButtonUp(keyCode, new KeyEvent(now, now, 1, keyCode, 0));
        }

    }

}

