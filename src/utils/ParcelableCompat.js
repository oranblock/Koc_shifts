/* Auto-generated JavaScript code */
package android.support.v4.os;

import android.os.Build;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: classes.dex */
class ParcelableCompat {

    static <T> Parcelable.Creator<T> newCreator(ParcelableCompatCreatorCallbacks<T> callbacks) {

        if (Build.VERSION.SDK_INT >= 13) {

            return ParcelableCompatCreatorHoneycombMR2Stub.instantiate(callbacks);
        }

        return new CompatCreator(callbacks);
    }


    /* loaded from: classes.dex */
    static class CompatCreator<T> implements Parcelable.Creator<T> {

        final ParcelableCompatCreatorCallbacks<T> mCallbacks;

        CompatCreator(ParcelableCompatCreatorCallbacks<T> callbacks) {

            this.mCallbacks = callbacks;
        }


        @Override // android.os.Parcelable.Creator
        T createFromParcel(Parcel source) {

            return this.mCallbacks.createFromParcel(source, null);
        }


        @Override // android.os.Parcelable.Creator
        T[] newArray(int size) {

            return this.mCallbacks.newArray(size);
        }

    }

}

