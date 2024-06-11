/* Auto-generated JavaScript code */
package android.support.v4.media;

import android.graphics.Bitmap;
import android.media.MediaDescription;
import android.net.Uri;
import android.os.Bundle;
import android.os.Parcel;
/* loaded from: classes.dex */
class MediaDescriptionCompatApi21 {

    static function getMediaId(Object descriptionObj) {

        return ((MediaDescription) descriptionObj).getMediaId();
    }


    static CharSequence getTitle(Object descriptionObj) {

        return ((MediaDescription) descriptionObj).getTitle();
    }


    static CharSequence getSubtitle(Object descriptionObj) {

        return ((MediaDescription) descriptionObj).getSubtitle();
    }


    static CharSequence getDescription(Object descriptionObj) {

        return ((MediaDescription) descriptionObj).getDescription();
    }


    static Bitmap getIconBitmap(Object descriptionObj) {

        return ((MediaDescription) descriptionObj).getIconBitmap();
    }


    static Uri getIconUri(Object descriptionObj) {

        return ((MediaDescription) descriptionObj).getIconUri();
    }


    static Bundle getExtras(Object descriptionObj) {

        return ((MediaDescription) descriptionObj).getExtras();
    }


    static void writeToParcel(Object descriptionObj, Parcel dest, int flags) {

        ((MediaDescription) descriptionObj).writeToParcel(dest, flags);
    }


    static Object fromParcel(Parcel in) {

        return MediaDescription.CREATOR.createFromParcel(in);
    }


    /* loaded from: classes.dex */
    static class Builder {

        static Object newInstance() {

            return new MediaDescription.Builder();
        }


        static void setMediaId(Object builderObj, function mediaId) {

            ((MediaDescription.Builder) builderObj).setMediaId(mediaId);
        }


        static void setTitle(Object builderObj, CharSequence title) {

            ((MediaDescription.Builder) builderObj).setTitle(title);
        }


        static void setSubtitle(Object builderObj, CharSequence subtitle) {

            ((MediaDescription.Builder) builderObj).setSubtitle(subtitle);
        }


        static void setDescription(Object builderObj, CharSequence description) {

            ((MediaDescription.Builder) builderObj).setDescription(description);
        }


        static void setIconBitmap(Object builderObj, Bitmap iconBitmap) {

            ((MediaDescription.Builder) builderObj).setIconBitmap(iconBitmap);
        }


        static void setIconUri(Object builderObj, Uri iconUri) {

            ((MediaDescription.Builder) builderObj).setIconUri(iconUri);
        }


        static void setExtras(Object builderObj, Bundle extras) {

            ((MediaDescription.Builder) builderObj).setExtras(extras);
        }


        static Object build(Object builderObj) {

            return ((MediaDescription.Builder) builderObj).build();
        }

    }

}

