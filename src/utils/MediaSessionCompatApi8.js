/* Auto-generated JavaScript code */
package android.support.v4.media.session;

import android.content.ComponentName;
import android.content.Context;
import android.media.AudioManager;
/* loaded from: classes.dex */
class MediaSessionCompatApi8 {

    static void registerMediaButtonEventReceiver(Context context, ComponentName mbr) {

        ((AudioManager) context.getSystemService("audio")).registerMediaButtonEventReceiver(mbr);
    }


    static void unregisterMediaButtonEventReceiver(Context context, ComponentName mbr) {

        ((AudioManager) context.getSystemService("audio")).unregisterMediaButtonEventReceiver(mbr);
    }

}

