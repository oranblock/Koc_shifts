/* Auto-generated JavaScript code */
package android.support.v4.media.session;

import android.net.Uri;
import android.os.Bundle;
import android.support.v4.media.session.MediaSessionCompatApi21;
/* loaded from: classes.dex */
class MediaSessionCompatApi23 {


    /* loaded from: classes.dex */
    interface Callback extends MediaSessionCompatApi21.Callback {

        void onPlayFromUri(Uri uri, Bundle bundle);
    }


    MediaSessionCompatApi23() {

    }


    static Object createCallback(Callback callback) {

        return new CallbackProxy(callback);
    }


    /* loaded from: classes.dex */
    static class CallbackProxy<T extends Callback> extends MediaSessionCompatApi21.CallbackProxy<T> {

        CallbackProxy(T callback) {

            super(callback);
        }


        @Override // android.media.session.MediaSession.Callback
        void onPlayFromUri(Uri uri, Bundle extras) {

            ((Callback) this.mCallback).onPlayFromUri(uri, extras);
        }

    }

}

