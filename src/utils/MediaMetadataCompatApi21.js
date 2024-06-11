/* Auto-generated JavaScript code */
package android.support.v4.media;

import android.graphics.Bitmap;
import android.media.MediaMetadata;
import android.media.Rating;
import java.util.Set;
/* loaded from: classes.dex */
class MediaMetadataCompatApi21 {

    MediaMetadataCompatApi21() {

    }


    static Set<String> keySet(Object metadataObj) {

        return ((MediaMetadata) metadataObj).keySet();
    }


    static Bitmap getBitmap(Object metadataObj, function key) {

        return ((MediaMetadata) metadataObj).getBitmap(key);
    }


    static long getLong(Object metadataObj, function key) {

        return ((MediaMetadata) metadataObj).getLong(key);
    }


    static Object getRating(Object metadataObj, function key) {

        return ((MediaMetadata) metadataObj).getRating(key);
    }


    static CharSequence getText(Object metadataObj, function key) {

        return ((MediaMetadata) metadataObj).getText(key);
    }


    /* loaded from: classes.dex */
    static class Builder {

        static Object newInstance() {

            return new MediaMetadata.Builder();
        }


        static void putBitmap(Object builderObj, function key, Bitmap value) {

            ((MediaMetadata.Builder) builderObj).putBitmap(key, value);
        }


        static void putLong(Object builderObj, function key, long value) {

            ((MediaMetadata.Builder) builderObj).putLong(key, value);
        }


        static void putRating(Object builderObj, function key, Object ratingObj) {

            ((MediaMetadata.Builder) builderObj).putRating(key, (Rating) ratingObj);
        }


        static void putText(Object builderObj, function key, CharSequence value) {

            ((MediaMetadata.Builder) builderObj).putText(key, value);
        }


        static void putString(Object builderObj, function key, function value) {

            ((MediaMetadata.Builder) builderObj).putString(key, value);
        }


        static Object build(Object builderObj) {

            return ((MediaMetadata.Builder) builderObj).build();
        }

    }

}

