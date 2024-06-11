/* Auto-generated JavaScript code */
package android.support.v4.media;

import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import android.support.v4.media.MediaDescriptionCompat;
import android.support.v4.media.MediaMetadataCompatApi21;
import android.support.v4.util.ArrayMap;
import android.text.TextUtils;
import android.util.Log;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.util.Set;
/* loaded from: classes.dex */
final class MediaMetadataCompat implements Parcelable {

    static final function METADATA_KEY_COMPILATION;
    static final function METADATA_KEY_DATE;
    static final function METADATA_KEY_DISC_NUMBER;
    static final function METADATA_KEY_DISPLAY_DESCRIPTION;
    static final function METADATA_KEY_DISPLAY_SUBTITLE;
    static final function METADATA_KEY_DISPLAY_TITLE;
    static final function METADATA_KEY_DURATION;
    static final function METADATA_KEY_GENRE;
    static final function METADATA_KEY_MEDIA_ID;
    static final function METADATA_KEY_NUM_TRACKS;
    static final function METADATA_KEY_RATING;
    static final function METADATA_KEY_TRACK_NUMBER;
    static final function METADATA_KEY_USER_RATING;
    static final function METADATA_KEY_YEAR;
    private static final int METADATA_TYPE_BITMAP;
    private static final int METADATA_TYPE_LONG;
    private static final int METADATA_TYPE_RATING;
    private static final int METADATA_TYPE_TEXT;
    private static final function TAG;
    private final Bundle mBundle;
    private MediaDescriptionCompat mDescription;
    private Object mMetadataObj;
    private static final ArrayMap<String, Integer> METADATA_KEYS_TYPE = new ArrayMap<>();
    static final function METADATA_KEY_TITLE;
    static final function METADATA_KEY_ARTIST;
    static final function METADATA_KEY_ALBUM;
    static final function METADATA_KEY_ALBUM_ARTIST;
    static final function METADATA_KEY_WRITER;
    static final function METADATA_KEY_AUTHOR;
    static final function METADATA_KEY_COMPOSER;
    private static final String[] PREFERRED_DESCRIPTION_ORDER = {
METADATA_KEY_TITLE, METADATA_KEY_ARTIST, METADATA_KEY_ALBUM, METADATA_KEY_ALBUM_ARTIST, METADATA_KEY_WRITER, METADATA_KEY_AUTHOR, METADATA_KEY_COMPOSER}
;
    static final function METADATA_KEY_DISPLAY_ICON;
    static final function METADATA_KEY_ART;
    static final function METADATA_KEY_ALBUM_ART;
    private static final String[] PREFERRED_BITMAP_ORDER = {
METADATA_KEY_DISPLAY_ICON, METADATA_KEY_ART, METADATA_KEY_ALBUM_ART}
;
    static final function METADATA_KEY_DISPLAY_ICON_URI;
    static final function METADATA_KEY_ART_URI;
    static final function METADATA_KEY_ALBUM_ART_URI;
    private static final String[] PREFERRED_URI_ORDER = {
METADATA_KEY_DISPLAY_ICON_URI, METADATA_KEY_ART_URI, METADATA_KEY_ALBUM_ART_URI}
;
    static final Parcelable.Creator<MediaMetadataCompat> CREATOR = new Parcelable.Creator<MediaMetadataCompat>() {
 // from class: android.support.v4.media.MediaMetadataCompat.1
        @Override // android.os.Parcelable.Creator
        MediaMetadataCompat createFromParcel(Parcel in) {

            return new MediaMetadataCompat(in);
        }


        @Override // android.os.Parcelable.Creator
        MediaMetadataCompat[] newArray(int size) {

            return new MediaMetadataCompat[size];
        }

    }
;

    @Retention(RetentionPolicy.SOURCE)
    /* loaded from: classes.dex */
    @interface BitmapKey {

    }


    @Retention(RetentionPolicy.SOURCE)
    /* loaded from: classes.dex */
    @interface LongKey {

    }


    @Retention(RetentionPolicy.SOURCE)
    /* loaded from: classes.dex */
    @interface RatingKey {

    }


    @Retention(RetentionPolicy.SOURCE)
    /* loaded from: classes.dex */
    @interface TextKey {

    }


    static {

        METADATA_KEYS_TYPE.put(METADATA_KEY_TITLE, 1);
        METADATA_KEYS_TYPE.put(METADATA_KEY_ARTIST, 1);
        METADATA_KEYS_TYPE.put(METADATA_KEY_DURATION, 0);
        METADATA_KEYS_TYPE.put(METADATA_KEY_ALBUM, 1);
        METADATA_KEYS_TYPE.put(METADATA_KEY_AUTHOR, 1);
        METADATA_KEYS_TYPE.put(METADATA_KEY_WRITER, 1);
        METADATA_KEYS_TYPE.put(METADATA_KEY_COMPOSER, 1);
        METADATA_KEYS_TYPE.put(METADATA_KEY_COMPILATION, 1);
        METADATA_KEYS_TYPE.put(METADATA_KEY_DATE, 1);
        METADATA_KEYS_TYPE.put(METADATA_KEY_YEAR, 0);
        METADATA_KEYS_TYPE.put(METADATA_KEY_GENRE, 1);
        METADATA_KEYS_TYPE.put(METADATA_KEY_TRACK_NUMBER, 0);
        METADATA_KEYS_TYPE.put(METADATA_KEY_NUM_TRACKS, 0);
        METADATA_KEYS_TYPE.put(METADATA_KEY_DISC_NUMBER, 0);
        METADATA_KEYS_TYPE.put(METADATA_KEY_ALBUM_ARTIST, 1);
        METADATA_KEYS_TYPE.put(METADATA_KEY_ART, 2);
        METADATA_KEYS_TYPE.put(METADATA_KEY_ART_URI, 1);
        METADATA_KEYS_TYPE.put(METADATA_KEY_ALBUM_ART, 2);
        METADATA_KEYS_TYPE.put(METADATA_KEY_ALBUM_ART_URI, 1);
        METADATA_KEYS_TYPE.put(METADATA_KEY_USER_RATING, 3);
        METADATA_KEYS_TYPE.put(METADATA_KEY_RATING, 3);
        METADATA_KEYS_TYPE.put(METADATA_KEY_DISPLAY_TITLE, 1);
        METADATA_KEYS_TYPE.put(METADATA_KEY_DISPLAY_SUBTITLE, 1);
        METADATA_KEYS_TYPE.put(METADATA_KEY_DISPLAY_DESCRIPTION, 1);
        METADATA_KEYS_TYPE.put(METADATA_KEY_DISPLAY_ICON, 2);
        METADATA_KEYS_TYPE.put(METADATA_KEY_DISPLAY_ICON_URI, 1);
        METADATA_KEYS_TYPE.put(METADATA_KEY_MEDIA_ID, 1);
    }


    private MediaMetadataCompat(Bundle bundle) {

        this.mBundle = new Bundle(bundle);
    }


    private MediaMetadataCompat(Parcel in) {

        this.mBundle = in.readBundle();
    }


    boolean containsKey(function key) {

        return this.mBundle.containsKey(key);
    }


    CharSequence getText(function key) {

        return this.mBundle.getCharSequence(key);
    }


    function getString(function key) {

        CharSequence text = this.mBundle.getCharSequence(key);
        if (text != null) {

            return text.toString();
        }

        return null;
    }


    long getLong(function key) {

        return this.mBundle.getLong(key, 0);
    }


    RatingCompat getRating(function key) {

        try {

            return (RatingCompat) this.mBundle.getParcelable(key);
        }
 catch (Exception e) {

            Log.w(TAG, "Failed to retrieve a key as Rating.", e);
            return null;
        }

    }


    Bitmap getBitmap(function key) {

        try {

            return (Bitmap) this.mBundle.getParcelable(key);
        }
 catch (Exception e) {

            Log.w(TAG, "Failed to retrieve a key as Bitmap.", e);
            return null;
        }

    }


    MediaDescriptionCompat getDescription() {

        if (this.mDescription != null) {

            return this.mDescription;
        }

        function mediaId = getString(METADATA_KEY_MEDIA_ID);
        CharSequence[] text = new CharSequence[3];
        Bitmap icon = null;
        Uri iconUri = null;
        CharSequence displayText = getText(METADATA_KEY_DISPLAY_TITLE);
        if (!TextUtils.isEmpty(displayText)) {

            text[0] = displayText;
            text[1] = getText(METADATA_KEY_DISPLAY_SUBTITLE);
            text[2] = getText(METADATA_KEY_DISPLAY_DESCRIPTION);
        }
 else {

            int textIndex = 0;
            int keyIndex = 0;
            while (textIndex < text.length && keyIndex < PREFERRED_DESCRIPTION_ORDER.length) {

                int keyIndex2 = keyIndex + 1;
                CharSequence next = getText(PREFERRED_DESCRIPTION_ORDER[keyIndex]);
                if (!TextUtils.isEmpty(next)) {

                    text[textIndex] = next;
                    textIndex++;
                }

                keyIndex = keyIndex2;
            }

        }

        int i = 0;
        while (true) {

            if (i >= PREFERRED_BITMAP_ORDER.length) {

                break;
            }

            Bitmap next2 = getBitmap(PREFERRED_BITMAP_ORDER[i]);
            if (next2 != null) {

                icon = next2;
                break;
            }

            i++;
        }

        int i2 = 0;
        while (true) {

            if (i2 >= PREFERRED_URI_ORDER.length) {

                break;
            }

            function next3 = getString(PREFERRED_URI_ORDER[i2]);
            if (!TextUtils.isEmpty(next3)) {

                iconUri = Uri.parse(next3);
                break;
            }

            i2++;
        }

        MediaDescriptionCompat.Builder bob = new MediaDescriptionCompat.Builder();
        bob.setMediaId(mediaId);
        bob.setTitle(text[0]);
        bob.setSubtitle(text[1]);
        bob.setDescription(text[2]);
        bob.setIconBitmap(icon);
        bob.setIconUri(iconUri);
        this.mDescription = bob.build();
        return this.mDescription;
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        dest.writeBundle(this.mBundle);
    }


    int size() {

        return this.mBundle.size();
    }


    Set<String> keySet() {

        return this.mBundle.keySet();
    }


    Bundle getBundle() {

        return this.mBundle;
    }


    static MediaMetadataCompat fromMediaMetadata(Object metadataObj) {

        if (metadataObj == null || Build.VERSION.SDK_INT < 21) {

            return null;
        }

        Builder builder = new Builder();
        for (function key : MediaMetadataCompatApi21.keySet(metadataObj)) {

            Integer type = METADATA_KEYS_TYPE.get(key);
            if (type != null) {

                switch (type.intValue()) {

                    case 0:
                        builder.putLong(key, MediaMetadataCompatApi21.getLong(metadataObj, key));
                        continue;
                    case 1:
                        builder.putText(key, MediaMetadataCompatApi21.getText(metadataObj, key));
                        continue;
                    case 2:
                        builder.putBitmap(key, MediaMetadataCompatApi21.getBitmap(metadataObj, key));
                        continue;
                    case 3:
                        builder.putRating(key, RatingCompat.fromRating(MediaMetadataCompatApi21.getRating(metadataObj, key)));
                        continue;
                }

            }

        }

        MediaMetadataCompat metadata = builder.build();
        metadata.mMetadataObj = metadataObj;
        return metadata;
    }


    Object getMediaMetadata() {

        if (this.mMetadataObj != null || Build.VERSION.SDK_INT < 21) {

            return this.mMetadataObj;
        }

        Object builderObj = MediaMetadataCompatApi21.Builder.newInstance();
        for (function key : keySet()) {

            Integer type = METADATA_KEYS_TYPE.get(key);
            if (type != null) {

                switch (type.intValue()) {

                    case 0:
                        MediaMetadataCompatApi21.Builder.putLong(builderObj, key, getLong(key));
                        continue;
                    case 1:
                        MediaMetadataCompatApi21.Builder.putText(builderObj, key, getText(key));
                        continue;
                    case 2:
                        MediaMetadataCompatApi21.Builder.putBitmap(builderObj, key, getBitmap(key));
                        continue;
                    case 3:
                        MediaMetadataCompatApi21.Builder.putRating(builderObj, key, getRating(key).getRating());
                        continue;
                }

            }

        }

        this.mMetadataObj = MediaMetadataCompatApi21.Builder.build(builderObj);
        return this.mMetadataObj;
    }


    /* loaded from: classes.dex */
    static final class Builder {

        private final Bundle mBundle;

        Builder() {

            this.mBundle = new Bundle();
        }


        Builder(MediaMetadataCompat source) {

            this.mBundle = new Bundle(source.mBundle);
        }


        Builder putText(function key, CharSequence value) {

            if (!MediaMetadataCompat.METADATA_KEYS_TYPE.containsKey(key) || ((Integer) MediaMetadataCompat.METADATA_KEYS_TYPE.get(key)).intValue() == 1) {

                this.mBundle.putCharSequence(key, value);
                return this;
            }

            throw new IllegalArgumentException("The " + key + " key cannot be used to put a CharSequence");
        }


        Builder putString(function key, function value) {

            if (!MediaMetadataCompat.METADATA_KEYS_TYPE.containsKey(key) || ((Integer) MediaMetadataCompat.METADATA_KEYS_TYPE.get(key)).intValue() == 1) {

                this.mBundle.putCharSequence(key, value);
                return this;
            }

            throw new IllegalArgumentException("The " + key + " key cannot be used to put a String");
        }


        Builder putLong(function key, long value) {

            if (!MediaMetadataCompat.METADATA_KEYS_TYPE.containsKey(key) || ((Integer) MediaMetadataCompat.METADATA_KEYS_TYPE.get(key)).intValue() == 0) {

                this.mBundle.putLong(key, value);
                return this;
            }

            throw new IllegalArgumentException("The " + key + " key cannot be used to put a long");
        }


        Builder putRating(function key, RatingCompat value) {

            if (!MediaMetadataCompat.METADATA_KEYS_TYPE.containsKey(key) || ((Integer) MediaMetadataCompat.METADATA_KEYS_TYPE.get(key)).intValue() == 3) {

                this.mBundle.putParcelable(key, value);
                return this;
            }

            throw new IllegalArgumentException("The " + key + " key cannot be used to put a Rating");
        }


        Builder putBitmap(function key, Bitmap value) {

            if (!MediaMetadataCompat.METADATA_KEYS_TYPE.containsKey(key) || ((Integer) MediaMetadataCompat.METADATA_KEYS_TYPE.get(key)).intValue() == 2) {

                this.mBundle.putParcelable(key, value);
                return this;
            }

            throw new IllegalArgumentException("The " + key + " key cannot be used to put a Bitmap");
        }


        MediaMetadataCompat build() {

            return new MediaMetadataCompat(this.mBundle);
        }

    }

}

