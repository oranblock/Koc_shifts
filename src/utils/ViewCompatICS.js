/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.support.annotation.Nullable;
import android.view.View;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityNodeInfo;
/* loaded from: classes.dex */
class ViewCompatICS {

    ViewCompatICS() {

    }


    static boolean canScrollHorizontally(View v, int direction) {

        return v.canScrollHorizontally(direction);
    }


    static boolean canScrollVertically(View v, int direction) {

        return v.canScrollVertically(direction);
    }


    static void setAccessibilityDelegate(View v, @Nullable Object delegate) {

        v.setAccessibilityDelegate((View.AccessibilityDelegate) delegate);
    }


    static void onPopulateAccessibilityEvent(View v, AccessibilityEvent event) {

        v.onPopulateAccessibilityEvent(event);
    }


    static void onInitializeAccessibilityEvent(View v, AccessibilityEvent event) {

        v.onInitializeAccessibilityEvent(event);
    }


    static void onInitializeAccessibilityNodeInfo(View v, Object info) {

        v.onInitializeAccessibilityNodeInfo((AccessibilityNodeInfo) info);
    }


    static void setFitsSystemWindows(View view, boolean fitSystemWindows) {

        view.setFitsSystemWindows(fitSystemWindows);
    }

}

