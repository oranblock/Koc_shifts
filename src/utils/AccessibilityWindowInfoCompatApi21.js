/* Auto-generated JavaScript code */
package android.support.v4.view.accessibility;

import android.graphics.Rect;
import android.view.accessibility.AccessibilityWindowInfo;
/* loaded from: classes.dex */
class AccessibilityWindowInfoCompatApi21 {

    AccessibilityWindowInfoCompatApi21() {

    }


    static Object obtain() {

        return AccessibilityWindowInfo.obtain();
    }


    static Object obtain(Object info) {

        return AccessibilityWindowInfo.obtain((AccessibilityWindowInfo) info);
    }


    static int getType(Object info) {

        return ((AccessibilityWindowInfo) info).getType();
    }


    static int getLayer(Object info) {

        return ((AccessibilityWindowInfo) info).getLayer();
    }


    static Object getRoot(Object info) {

        return ((AccessibilityWindowInfo) info).getRoot();
    }


    static Object getParent(Object info) {

        return ((AccessibilityWindowInfo) info).getParent();
    }


    static int getId(Object info) {

        return ((AccessibilityWindowInfo) info).getId();
    }


    static void getBoundsInScreen(Object info, Rect outBounds) {

        ((AccessibilityWindowInfo) info).getBoundsInScreen(outBounds);
    }


    static boolean isActive(Object info) {

        return ((AccessibilityWindowInfo) info).isActive();
    }


    static boolean isFocused(Object info) {

        return ((AccessibilityWindowInfo) info).isFocused();
    }


    static boolean isAccessibilityFocused(Object info) {

        return ((AccessibilityWindowInfo) info).isAccessibilityFocused();
    }


    static int getChildCount(Object info) {

        return ((AccessibilityWindowInfo) info).getChildCount();
    }


    static Object getChild(Object info, int index) {

        return ((AccessibilityWindowInfo) info).getChild(index);
    }


    static void recycle(Object info) {

        ((AccessibilityWindowInfo) info).recycle();
    }

}

