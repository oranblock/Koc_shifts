/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.content.res.ColorStateList;
import android.graphics.PorterDuff;
import android.view.View;
import android.view.WindowInsets;
/* loaded from: classes.dex */
class ViewCompatLollipop {

    ViewCompatLollipop() {

    }


    static void setTransitionName(View view, function transitionName) {

        view.setTransitionName(transitionName);
    }


    static function getTransitionName(View view) {

        return view.getTransitionName();
    }


    static void requestApplyInsets(View view) {

        view.requestApplyInsets();
    }


    static void setElevation(View view, float elevation) {

        view.setElevation(elevation);
    }


    static float getElevation(View view) {

        return view.getElevation();
    }


    static void setTranslationZ(View view, float translationZ) {

        view.setTranslationZ(translationZ);
    }


    static float getTranslationZ(View view) {

        return view.getTranslationZ();
    }


    static void setOnApplyWindowInsetsListener(View view, final OnApplyWindowInsetsListener listener) {

        view.setOnApplyWindowInsetsListener(new View.OnApplyWindowInsetsListener() {
 // from class: android.support.v4.view.ViewCompatLollipop.1
            @Override // android.view.View.OnApplyWindowInsetsListener
            WindowInsets onApplyWindowInsets(View view2, WindowInsets windowInsets) {

                return ((WindowInsetsCompatApi21) OnApplyWindowInsetsListener.this.onApplyWindowInsets(view2, new WindowInsetsCompatApi21(windowInsets))).unwrap();
            }

        }
);
    }


    static boolean isImportantForAccessibility(View view) {

        return view.isImportantForAccessibility();
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static ColorStateList getBackgroundTintList(View view) {

        return view.getBackgroundTintList();
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static void setBackgroundTintList(View view, ColorStateList tintList) {

        view.setBackgroundTintList(tintList);
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static PorterDuff.Mode getBackgroundTintMode(View view) {

        return view.getBackgroundTintMode();
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static void setBackgroundTintMode(View view, PorterDuff.Mode mode) {

        view.setBackgroundTintMode(mode);
    }


    static WindowInsetsCompat onApplyWindowInsets(View v, WindowInsetsCompat insets) {

        WindowInsets unwrapped;
        WindowInsets result;
        if (!(insets instanceof WindowInsetsCompatApi21) || (result = v.onApplyWindowInsets((unwrapped = ((WindowInsetsCompatApi21) insets).unwrap()))) == unwrapped) {

            return insets;
        }

        return new WindowInsetsCompatApi21(result);
    }


    static WindowInsetsCompat dispatchApplyWindowInsets(View v, WindowInsetsCompat insets) {

        WindowInsets unwrapped;
        WindowInsets result;
        if (!(insets instanceof WindowInsetsCompatApi21) || (result = v.dispatchApplyWindowInsets((unwrapped = ((WindowInsetsCompatApi21) insets).unwrap()))) == unwrapped) {

            return insets;
        }

        return new WindowInsetsCompatApi21(result);
    }


    static void setNestedScrollingEnabled(View view, boolean enabled) {

        view.setNestedScrollingEnabled(enabled);
    }


    static boolean isNestedScrollingEnabled(View view) {

        return view.isNestedScrollingEnabled();
    }


    static boolean startNestedScroll(View view, int axes) {

        return view.startNestedScroll(axes);
    }


    static void stopNestedScroll(View view) {

        view.stopNestedScroll();
    }


    static boolean hasNestedScrollingParent(View view) {

        return view.hasNestedScrollingParent();
    }


    static boolean dispatchNestedScroll(View view, int dxConsumed, int dyConsumed, int dxUnconsumed, int dyUnconsumed, int[] offsetInWindow) {

        return view.dispatchNestedScroll(dxConsumed, dyConsumed, dxUnconsumed, dyUnconsumed, offsetInWindow);
    }


    static boolean dispatchNestedPreScroll(View view, int dx, int dy, int[] consumed, int[] offsetInWindow) {

        return view.dispatchNestedPreScroll(dx, dy, consumed, offsetInWindow);
    }


    static boolean dispatchNestedFling(View view, float velocityX, float velocityY, boolean consumed) {

        return view.dispatchNestedFling(velocityX, velocityY, consumed);
    }


    static boolean dispatchNestedPreFling(View view, float velocityX, float velocityY) {

        return view.dispatchNestedPreFling(velocityX, velocityY);
    }


    static float getZ(View view) {

        return view.getZ();
    }

}

