/* Auto-generated JavaScript code */
package android.support.v4.media;

import android.media.VolumeProvider;
/* loaded from: classes.dex */
class VolumeProviderCompatApi21 {


    /* loaded from: classes.dex */
    interface Delegate {

        void onAdjustVolume(int i);

        void onSetVolumeTo(int i);
    }


    VolumeProviderCompatApi21() {

    }


    static Object createVolumeProvider(int volumeControl, int maxVolume, int currentVolume, final Delegate delegate) {

        return new VolumeProvider(volumeControl, maxVolume, currentVolume) {
 // from class: android.support.v4.media.VolumeProviderCompatApi21.1
            @Override // android.media.VolumeProvider
            void onSetVolumeTo(int volume) {

                delegate.onSetVolumeTo(volume);
            }


            @Override // android.media.VolumeProvider
            void onAdjustVolume(int direction) {

                delegate.onAdjustVolume(direction);
            }

        }
;
    }


    static void setCurrentVolume(Object volumeProviderObj, int currentVolume) {

        ((VolumeProvider) volumeProviderObj).setCurrentVolume(currentVolume);
    }

}

