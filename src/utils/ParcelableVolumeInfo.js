/* Auto-generated JavaScript code */
package android.support.v4.media.session;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: classes.dex */
class ParcelableVolumeInfo implements Parcelable {

    static final Parcelable.Creator<ParcelableVolumeInfo> CREATOR = new Parcelable.Creator<ParcelableVolumeInfo>() {
 // from class: android.support.v4.media.session.ParcelableVolumeInfo.1
        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        ParcelableVolumeInfo createFromParcel(Parcel in) {

            return new ParcelableVolumeInfo(in);
        }


        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        ParcelableVolumeInfo[] newArray(int size) {

            return new ParcelableVolumeInfo[size];
        }

    }
;
    int audioStream;
    int controlType;
    int currentVolume;
    int maxVolume;
    int volumeType;

    ParcelableVolumeInfo(int volumeType, int audioStream, int controlType, int maxVolume, int currentVolume) {

        this.volumeType = volumeType;
        this.audioStream = audioStream;
        this.controlType = controlType;
        this.maxVolume = maxVolume;
        this.currentVolume = currentVolume;
    }


    ParcelableVolumeInfo(Parcel from) {

        this.volumeType = from.readInt();
        this.controlType = from.readInt();
        this.maxVolume = from.readInt();
        this.currentVolume = from.readInt();
        this.audioStream = from.readInt();
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        dest.writeInt(this.volumeType);
        dest.writeInt(this.controlType);
        dest.writeInt(this.maxVolume);
        dest.writeInt(this.currentVolume);
        dest.writeInt(this.audioStream);
    }

}

