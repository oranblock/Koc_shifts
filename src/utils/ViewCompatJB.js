/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.os.Bundle;
import android.view.View;
import android.view.ViewParent;
/* loaded from: classes.dex */
class ViewCompatJB {

    ViewCompatJB() {

    }


    static boolean hasTransientState(View view) {

        return view.hasTransientState();
    }


    static void setHasTransientState(View view, boolean hasTransientState) {

        view.setHasTransientState(hasTransientState);
    }


    static void postInvalidateOnAnimation(View view) {

        view.postInvalidateOnAnimation();
    }


    static void postInvalidateOnAnimation(View view, int left, int top, int right, int bottom) {

        view.postInvalidate(left, top, right, bottom);
    }


    static void postOnAnimation(View view, Runnable action) {

        view.postOnAnimation(action);
    }


    static void postOnAnimationDelayed(View view, Runnable action, long delayMillis) {

        view.postOnAnimationDelayed(action, delayMillis);
    }


    static int getImportantForAccessibility(View view) {

        return view.getImportantForAccessibility();
    }


    static void setImportantForAccessibility(View view, int mode) {

        view.setImportantForAccessibility(mode);
    }


    static boolean performAccessibilityAction(View view, int action, Bundle arguments) {

        return view.performAccessibilityAction(action, arguments);
    }


    static Object getAccessibilityNodeProvider(View view) {

        return view.getAccessibilityNodeProvider();
    }


    static ViewParent getParentForAccessibility(View view) {

        return view.getParentForAccessibility();
    }


    static int getMinimumWidth(View view) {

        return view.getMinimumWidth();
    }


    static int getMinimumHeight(View view) {

        return view.getMinimumHeight();
    }


    static void requestApplyInsets(View view) {

        view.requestFitSystemWindows();
    }


    static boolean getFitsSystemWindows(View view) {

        return view.getFitsSystemWindows();
    }


    static boolean hasOverlappingRendering(View view) {

        return view.hasOverlappingRendering();
    }

}

