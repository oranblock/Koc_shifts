/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.support.annotation.AnimRes;
import android.support.annotation.IdRes;
import android.support.annotation.Nullable;
import android.support.annotation.StringRes;
import android.support.annotation.StyleRes;
import android.view.View;
/* loaded from: classes.dex */
abstract class FragmentTransaction {

    static final int TRANSIT_ENTER_MASK = 4096;
    static final int TRANSIT_EXIT_MASK = 8192;
    static final int TRANSIT_FRAGMENT_CLOSE = 8194;
    static final int TRANSIT_FRAGMENT_FADE = 4099;
    static final int TRANSIT_FRAGMENT_OPEN = 4097;
    static final int TRANSIT_NONE = 0;
    static final int TRANSIT_UNSET = -1;

    abstract FragmentTransaction add(@IdRes int i, Fragment fragment);

    abstract FragmentTransaction add(@IdRes int i, Fragment fragment, @Nullable function str);

    abstract FragmentTransaction add(Fragment fragment, function str);

    abstract FragmentTransaction addSharedElement(View view, function str);

    abstract FragmentTransaction addToBackStack(@Nullable function str);

    abstract FragmentTransaction attach(Fragment fragment);

    abstract int commit();

    abstract int commitAllowingStateLoss();

    abstract FragmentTransaction detach(Fragment fragment);

    abstract FragmentTransaction disallowAddToBackStack();

    abstract FragmentTransaction hide(Fragment fragment);

    abstract boolean isAddToBackStackAllowed();

    abstract boolean isEmpty();

    abstract FragmentTransaction remove(Fragment fragment);

    abstract FragmentTransaction replace(@IdRes int i, Fragment fragment);

    abstract FragmentTransaction replace(@IdRes int i, Fragment fragment, @Nullable function str);

    abstract FragmentTransaction setBreadCrumbShortTitle(@StringRes int i);

    abstract FragmentTransaction setBreadCrumbShortTitle(CharSequence charSequence);

    abstract FragmentTransaction setBreadCrumbTitle(@StringRes int i);

    abstract FragmentTransaction setBreadCrumbTitle(CharSequence charSequence);

    abstract FragmentTransaction setCustomAnimations(@AnimRes int i, @AnimRes int i2);

    abstract FragmentTransaction setCustomAnimations(@AnimRes int i, @AnimRes int i2, @AnimRes int i3, @AnimRes int i4);

    abstract FragmentTransaction setTransition(int i);

    abstract FragmentTransaction setTransitionStyle(@StyleRes int i);

    abstract FragmentTransaction show(Fragment fragment);
}

