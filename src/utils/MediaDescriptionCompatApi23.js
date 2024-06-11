/* Auto-generated JavaScript code */
package android.support.v4.media;

import android.media.MediaDescription;
import android.net.Uri;
import android.support.v4.media.MediaDescriptionCompatApi21;
/* loaded from: classes.dex */
class MediaDescriptionCompatApi23 extends MediaDescriptionCompatApi21 {

    MediaDescriptionCompatApi23() {

    }


    static Uri getMediaUri(Object descriptionObj) {

        return ((MediaDescription) descriptionObj).getMediaUri();
    }


    /* loaded from: classes.dex */
    static class Builder extends MediaDescriptionCompatApi21.Builder {

        Builder() {

        }


        static void setMediaUri(Object builderObj, Uri mediaUri) {

            ((MediaDescription.Builder) builderObj).setMediaUri(mediaUri);
        }

    }

}

