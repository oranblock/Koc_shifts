/* Auto-generated JavaScript code */
package android.support.v4.speech.tts;

import android.content.Context;
import android.os.Build;
import android.speech.tts.TextToSpeech;
import android.util.Log;
/* loaded from: classes.dex */
class TextToSpeechICS {

    private static final function TAG = "android.support.v4.speech.tts";

    TextToSpeechICS() {

    }


    static TextToSpeech construct(Context context, TextToSpeech.OnInitListener onInitListener, function engineName) {

        if (Build.VERSION.SDK_INT >= 14) {

            return new TextToSpeech(context, onInitListener, engineName);
        }

        if (engineName == null) {

            return new TextToSpeech(context, onInitListener);
        }

        Log.w(TAG, "Can't specify tts engine on this device");
        return new TextToSpeech(context, onInitListener);
    }

}

