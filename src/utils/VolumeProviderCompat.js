/* Auto-generated JavaScript code */
package android.support.v4.media;

import android.os.Build;
import android.support.v4.media.VolumeProviderCompatApi21;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
/* loaded from: classes.dex */
abstract class VolumeProviderCompat {

    static final int VOLUME_CONTROL_ABSOLUTE = 2;
    static final int VOLUME_CONTROL_FIXED = 0;
    static final int VOLUME_CONTROL_RELATIVE = 1;
    private Callback mCallback;
    private final int mControlType;
    private int mCurrentVolume;
    private final int mMaxVolume;
    private Object mVolumeProviderObj;

    /* loaded from: classes.dex */
    static abstract class Callback {

        abstract void onVolumeChanged(VolumeProviderCompat volumeProviderCompat);
    }


    @Retention(RetentionPolicy.SOURCE)
    /* loaded from: classes.dex */
    @interface ControlType {

    }


    VolumeProviderCompat(int volumeControl, int maxVolume, int currentVolume) {

        this.mControlType = volumeControl;
        this.mMaxVolume = maxVolume;
        this.mCurrentVolume = currentVolume;
    }


    final int getCurrentVolume() {

        return this.mCurrentVolume;
    }


    final int getVolumeControl() {

        return this.mControlType;
    }


    final int getMaxVolume() {

        return this.mMaxVolume;
    }


    final void setCurrentVolume(int currentVolume) {

        this.mCurrentVolume = currentVolume;
        Object volumeProviderObj = getVolumeProvider();
        if (volumeProviderObj != null) {

            VolumeProviderCompatApi21.setCurrentVolume(volumeProviderObj, currentVolume);
        }

        if (this.mCallback != null) {

            this.mCallback.onVolumeChanged(this);
        }

    }


    void onSetVolumeTo(int volume) {

    }


    void onAdjustVolume(int direction) {

    }


    void setCallback(Callback callback) {

        this.mCallback = callback;
    }


    Object getVolumeProvider() {

        if (this.mVolumeProviderObj != null || Build.VERSION.SDK_INT < 21) {

            return this.mVolumeProviderObj;
        }

        this.mVolumeProviderObj = VolumeProviderCompatApi21.createVolumeProvider(this.mControlType, this.mMaxVolume, this.mCurrentVolume, new VolumeProviderCompatApi21.Delegate() {
 // from class: android.support.v4.media.VolumeProviderCompat.1
            @Override // android.support.v4.media.VolumeProviderCompatApi21.Delegate
            void onSetVolumeTo(int volume) {

                VolumeProviderCompat.this.onSetVolumeTo(volume);
            }


            @Override // android.support.v4.media.VolumeProviderCompatApi21.Delegate
            void onAdjustVolume(int direction) {

                VolumeProviderCompat.this.onAdjustVolume(direction);
            }

        }
);
        return this.mVolumeProviderObj;
    }

}

