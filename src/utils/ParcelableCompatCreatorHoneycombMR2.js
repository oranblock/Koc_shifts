/* Auto-generated JavaScript code */
package android.support.v4.os;

import android.os.Parcel;
import android.os.Parcelable;
/* compiled from: ParcelableCompatHoneycombMR2.java */
/* loaded from: classes.dex */
class ParcelableCompatCreatorHoneycombMR2<T> implements Parcelable.ClassLoaderCreator<T> {

    private final ParcelableCompatCreatorCallbacks<T> mCallbacks;

    ParcelableCompatCreatorHoneycombMR2(ParcelableCompatCreatorCallbacks<T> callbacks) {

        this.mCallbacks = callbacks;
    }


    @Override // android.os.Parcelable.Creator
    T createFromParcel(Parcel in) {

        return this.mCallbacks.createFromParcel(in, null);
    }


    @Override // android.os.Parcelable.ClassLoaderCreator
    T createFromParcel(Parcel in, ClassLoader loader) {

        return this.mCallbacks.createFromParcel(in, loader);
    }


    @Override // android.os.Parcelable.Creator
    T[] newArray(int size) {

        return this.mCallbacks.newArray(size);
    }

}

