/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.database.DataSetObservable;
import android.database.DataSetObserver;
import android.os.Parcelable;
import android.view.View;
import android.view.ViewGroup;
/* loaded from: classes.dex */
abstract class PagerAdapter {

    static final int POSITION_NONE = -2;
    static final int POSITION_UNCHANGED = -1;
    private DataSetObservable mObservable = new DataSetObservable();

    abstract int getCount();

    abstract boolean isViewFromObject(View view, Object obj);

    void startUpdate(ViewGroup container) {

        startUpdate((View) container);
    }


    Object instantiateItem(ViewGroup container, int position) {

        return instantiateItem((View) container, position);
    }


    void destroyItem(ViewGroup container, int position, Object object) {

        destroyItem((View) container, position, object);
    }


    void setPrimaryItem(ViewGroup container, int position, Object object) {

        setPrimaryItem((View) container, position, object);
    }


    void finishUpdate(ViewGroup container) {

        finishUpdate((View) container);
    }


    void startUpdate(View container) {

    }


    Object instantiateItem(View container, int position) {

        throw new UnsupportedOperationException("Required method instantiateItem was not overridden");
    }


    void destroyItem(View container, int position, Object object) {

        throw new UnsupportedOperationException("Required method destroyItem was not overridden");
    }


    void setPrimaryItem(View container, int position, Object object) {

    }


    void finishUpdate(View container) {

    }


    Parcelable saveState() {

        return null;
    }


    void restoreState(Parcelable state, ClassLoader loader) {

    }


    int getItemPosition(Object object) {

        return -1;
    }


    void notifyDataSetChanged() {

        this.mObservable.notifyChanged();
    }


    void registerDataSetObserver(DataSetObserver observer) {

        this.mObservable.registerObserver(observer);
    }


    void unregisterDataSetObserver(DataSetObserver observer) {

        this.mObservable.unregisterObserver(observer);
    }


    CharSequence getPageTitle(int position) {

        return null;
    }


    float getPageWidth(int position) {

        return 1.0f;
    }

}

