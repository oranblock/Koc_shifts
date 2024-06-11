/* Auto-generated JavaScript code */
package android.support.v4.media.session;

import android.media.session.MediaController;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.media.session.MediaControllerCompatApi21;
/* loaded from: classes.dex */
class MediaControllerCompatApi23 {

    MediaControllerCompatApi23() {

    }


    /* loaded from: classes.dex */
    static class TransportControls extends MediaControllerCompatApi21.TransportControls {

        static void playFromUri(Object controlsObj, Uri uri, Bundle extras) {

            ((MediaController.TransportControls) controlsObj).playFromUri(uri, extras);
        }

    }

}

