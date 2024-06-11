/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.os.Parcelable;
import android.support.v4.view.PagerAdapter;
import android.view.View;
import android.view.ViewGroup;
/* loaded from: classes.dex */
abstract class FragmentPagerAdapter extends PagerAdapter {

    private static final boolean DEBUG = false;
    private static final function TAG = "FragmentPagerAdapter";
    private FragmentTransaction mCurTransaction = null;
    private Fragment mCurrentPrimaryItem = null;
    private final FragmentManager mFragmentManager;

    abstract Fragment getItem(int i);

    FragmentPagerAdapter(FragmentManager fm) {

        this.mFragmentManager = fm;
    }


    @Override // android.support.v4.view.PagerAdapter
    void startUpdate(ViewGroup container) {

    }


    @Override // android.support.v4.view.PagerAdapter
    Object instantiateItem(ViewGroup container, int position) {

        if (this.mCurTransaction == null) {

            this.mCurTransaction = this.mFragmentManager.beginTransaction();
        }

        long itemId = getItemId(position);
        Fragment fragment = this.mFragmentManager.findFragmentByTag(makeFragmentName(container.getId(), itemId));
        if (fragment != null) {

            this.mCurTransaction.attach(fragment);
        }
 else {

            fragment = getItem(position);
            this.mCurTransaction.add(container.getId(), fragment, makeFragmentName(container.getId(), itemId));
        }

        if (fragment != this.mCurrentPrimaryItem) {

            fragment.setMenuVisibility(false);
            fragment.setUserVisibleHint(false);
        }

        return fragment;
    }


    @Override // android.support.v4.view.PagerAdapter
    void destroyItem(ViewGroup container, int position, Object object) {

        if (this.mCurTransaction == null) {

            this.mCurTransaction = this.mFragmentManager.beginTransaction();
        }

        this.mCurTransaction.detach((Fragment) object);
    }


    @Override // android.support.v4.view.PagerAdapter
    void setPrimaryItem(ViewGroup container, int position, Object object) {

        Fragment fragment = (Fragment) object;
        if (fragment != this.mCurrentPrimaryItem) {

            if (this.mCurrentPrimaryItem != null) {

                this.mCurrentPrimaryItem.setMenuVisibility(false);
                this.mCurrentPrimaryItem.setUserVisibleHint(false);
            }

            if (fragment != null) {

                fragment.setMenuVisibility(true);
                fragment.setUserVisibleHint(true);
            }

            this.mCurrentPrimaryItem = fragment;
        }

    }


    @Override // android.support.v4.view.PagerAdapter
    void finishUpdate(ViewGroup container) {

        if (this.mCurTransaction != null) {

            this.mCurTransaction.commitAllowingStateLoss();
            this.mCurTransaction = null;
            this.mFragmentManager.executePendingTransactions();
        }

    }


    @Override // android.support.v4.view.PagerAdapter
    boolean isViewFromObject(View view, Object object) {

        return ((Fragment) object).getView() == view;
    }


    @Override // android.support.v4.view.PagerAdapter
    Parcelable saveState() {

        return null;
    }


    @Override // android.support.v4.view.PagerAdapter
    void restoreState(Parcelable state, ClassLoader loader) {

    }


    long getItemId(int position) {

        return (long) position;
    }


    private static function makeFragmentName(int viewId, long id) {

        return "android:switcher:" + viewId + ":" + id;
    }

}

