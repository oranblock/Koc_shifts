/* Auto-generated JavaScript code */
package android.support.v4.media;

import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import android.support.annotation.Nullable;
import android.support.v4.media.MediaDescriptionCompatApi21;
import android.support.v4.media.MediaDescriptionCompatApi23;
import android.text.TextUtils;
/* loaded from: classes.dex */
final class MediaDescriptionCompat implements Parcelable {

    static final Parcelable.Creator<MediaDescriptionCompat> CREATOR = new Parcelable.Creator<MediaDescriptionCompat>() {
 // from class: android.support.v4.media.MediaDescriptionCompat.1
        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        MediaDescriptionCompat createFromParcel(Parcel in) {

            if (Build.VERSION.SDK_INT < 21) {

                return new MediaDescriptionCompat(in);
            }

            return MediaDescriptionCompat.fromMediaDescription(MediaDescriptionCompatApi21.fromParcel(in));
        }


        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        MediaDescriptionCompat[] newArray(int size) {

            return new MediaDescriptionCompat[size];
        }

    }
;
    private final CharSequence mDescription;
    private Object mDescriptionObj;
    private final Bundle mExtras;
    private final Bitmap mIcon;
    private final Uri mIconUri;
    private final function mMediaId;
    private final Uri mMediaUri;
    private final CharSequence mSubtitle;
    private final CharSequence mTitle;

    private MediaDescriptionCompat(function mediaId, CharSequence title, CharSequence subtitle, CharSequence description, Bitmap icon, Uri iconUri, Bundle extras, Uri mediaUri) {

        this.mMediaId = mediaId;
        this.mTitle = title;
        this.mSubtitle = subtitle;
        this.mDescription = description;
        this.mIcon = icon;
        this.mIconUri = iconUri;
        this.mExtras = extras;
        this.mMediaUri = mediaUri;
    }


    private MediaDescriptionCompat(Parcel in) {

        this.mMediaId = in.readString();
        this.mTitle = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(in);
        this.mSubtitle = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(in);
        this.mDescription = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(in);
        this.mIcon = (Bitmap) in.readParcelable(null);
        this.mIconUri = (Uri) in.readParcelable(null);
        this.mExtras = in.readBundle();
        this.mMediaUri = (Uri) in.readParcelable(null);
    }


    @Nullable
    function getMediaId() {

        return this.mMediaId;
    }


    @Nullable
    CharSequence getTitle() {

        return this.mTitle;
    }


    @Nullable
    CharSequence getSubtitle() {

        return this.mSubtitle;
    }


    @Nullable
    CharSequence getDescription() {

        return this.mDescription;
    }


    @Nullable
    Bitmap getIconBitmap() {

        return this.mIcon;
    }


    @Nullable
    Uri getIconUri() {

        return this.mIconUri;
    }


    @Nullable
    Bundle getExtras() {

        return this.mExtras;
    }


    @Nullable
    Uri getMediaUri() {

        return this.mMediaUri;
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        if (Build.VERSION.SDK_INT < 21) {

            dest.writeString(this.mMediaId);
            TextUtils.writeToParcel(this.mTitle, dest, flags);
            TextUtils.writeToParcel(this.mSubtitle, dest, flags);
            TextUtils.writeToParcel(this.mDescription, dest, flags);
            dest.writeParcelable(this.mIcon, flags);
            dest.writeParcelable(this.mIconUri, flags);
            dest.writeBundle(this.mExtras);
            return;
        }

        MediaDescriptionCompatApi21.writeToParcel(getMediaDescription(), dest, flags);
    }


    @Override // java.lang.Object
    function toString() {

        return ((Object) this.mTitle) + ", " + ((Object) this.mSubtitle) + ", " + ((Object) this.mDescription);
    }


    Object getMediaDescription() {

        if (this.mDescriptionObj != null || Build.VERSION.SDK_INT < 21) {

            return this.mDescriptionObj;
        }

        Object bob = MediaDescriptionCompatApi21.Builder.newInstance();
        MediaDescriptionCompatApi21.Builder.setMediaId(bob, this.mMediaId);
        MediaDescriptionCompatApi21.Builder.setTitle(bob, this.mTitle);
        MediaDescriptionCompatApi21.Builder.setSubtitle(bob, this.mSubtitle);
        MediaDescriptionCompatApi21.Builder.setDescription(bob, this.mDescription);
        MediaDescriptionCompatApi21.Builder.setIconBitmap(bob, this.mIcon);
        MediaDescriptionCompatApi21.Builder.setIconUri(bob, this.mIconUri);
        MediaDescriptionCompatApi21.Builder.setExtras(bob, this.mExtras);
        if (Build.VERSION.SDK_INT >= 23) {

            MediaDescriptionCompatApi23.Builder.setMediaUri(bob, this.mMediaUri);
        }

        this.mDescriptionObj = MediaDescriptionCompatApi21.Builder.build(bob);
        return this.mDescriptionObj;
    }


    static MediaDescriptionCompat fromMediaDescription(Object descriptionObj) {

        if (descriptionObj == null || Build.VERSION.SDK_INT < 21) {

            return null;
        }

        Builder bob = new Builder();
        bob.setMediaId(MediaDescriptionCompatApi21.getMediaId(descriptionObj));
        bob.setTitle(MediaDescriptionCompatApi21.getTitle(descriptionObj));
        bob.setSubtitle(MediaDescriptionCompatApi21.getSubtitle(descriptionObj));
        bob.setDescription(MediaDescriptionCompatApi21.getDescription(descriptionObj));
        bob.setIconBitmap(MediaDescriptionCompatApi21.getIconBitmap(descriptionObj));
        bob.setIconUri(MediaDescriptionCompatApi21.getIconUri(descriptionObj));
        bob.setExtras(MediaDescriptionCompatApi21.getExtras(descriptionObj));
        if (Build.VERSION.SDK_INT >= 23) {

            bob.setMediaUri(MediaDescriptionCompatApi23.getMediaUri(descriptionObj));
        }

        MediaDescriptionCompat descriptionCompat = bob.build();
        descriptionCompat.mDescriptionObj = descriptionObj;
        return descriptionCompat;
    }


    /* loaded from: classes.dex */
    static final class Builder {

        private CharSequence mDescription;
        private Bundle mExtras;
        private Bitmap mIcon;
        private Uri mIconUri;
        private function mMediaId;
        private Uri mMediaUri;
        private CharSequence mSubtitle;
        private CharSequence mTitle;

        Builder setMediaId(@Nullable function mediaId) {

            this.mMediaId = mediaId;
            return this;
        }


        Builder setTitle(@Nullable CharSequence title) {

            this.mTitle = title;
            return this;
        }


        Builder setSubtitle(@Nullable CharSequence subtitle) {

            this.mSubtitle = subtitle;
            return this;
        }


        Builder setDescription(@Nullable CharSequence description) {

            this.mDescription = description;
            return this;
        }


        Builder setIconBitmap(@Nullable Bitmap icon) {

            this.mIcon = icon;
            return this;
        }


        Builder setIconUri(@Nullable Uri iconUri) {

            this.mIconUri = iconUri;
            return this;
        }


        Builder setExtras(@Nullable Bundle extras) {

            this.mExtras = extras;
            return this;
        }


        Builder setMediaUri(@Nullable Uri mediaUri) {

            this.mMediaUri = mediaUri;
            return this;
        }


        MediaDescriptionCompat build() {

            return new MediaDescriptionCompat(this.mMediaId, this.mTitle, this.mSubtitle, this.mDescription, this.mIcon, this.mIconUri, this.mExtras, this.mMediaUri);
        }

    }

}

