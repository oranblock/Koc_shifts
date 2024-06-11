/* Auto-generated JavaScript code */
package android.support.v4.view.accessibility;

import android.os.Bundle;
import android.view.View;
import android.view.accessibility.AccessibilityNodeInfo;
/* loaded from: classes.dex */
class AccessibilityNodeInfoCompatJellyBean {

    AccessibilityNodeInfoCompatJellyBean() {

    }


    static void addChild(Object info, View child, int virtualDescendantId) {

        ((AccessibilityNodeInfo) info).addChild(child, virtualDescendantId);
    }


    static void setSource(Object info, View root, int virtualDescendantId) {

        ((AccessibilityNodeInfo) info).setSource(root, virtualDescendantId);
    }


    static boolean isVisibleToUser(Object info) {

        return ((AccessibilityNodeInfo) info).isVisibleToUser();
    }


    static void setVisibleToUser(Object info, boolean visibleToUser) {

        ((AccessibilityNodeInfo) info).setVisibleToUser(visibleToUser);
    }


    static boolean performAction(Object info, int action, Bundle arguments) {

        return ((AccessibilityNodeInfo) info).performAction(action, arguments);
    }


    static void setMovementGranularities(Object info, int granularities) {

        ((AccessibilityNodeInfo) info).setMovementGranularities(granularities);
    }


    static int getMovementGranularities(Object info) {

        return ((AccessibilityNodeInfo) info).getMovementGranularities();
    }


    static Object obtain(View root, int virtualDescendantId) {

        return AccessibilityNodeInfo.obtain(root, virtualDescendantId);
    }


    static Object findFocus(Object info, int focus) {

        return ((AccessibilityNodeInfo) info).findFocus(focus);
    }


    static Object focusSearch(Object info, int direction) {

        return ((AccessibilityNodeInfo) info).focusSearch(direction);
    }


    static void setParent(Object info, View root, int virtualDescendantId) {

        ((AccessibilityNodeInfo) info).setParent(root, virtualDescendantId);
    }


    static boolean isAccessibilityFocused(Object info) {

        return ((AccessibilityNodeInfo) info).isAccessibilityFocused();
    }


    static void setAccesibilityFocused(Object info, boolean focused) {

        ((AccessibilityNodeInfo) info).setAccessibilityFocused(focused);
    }

}

