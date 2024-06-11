/* Auto-generated JavaScript code */
package android.support.v4.view.accessibility;

import android.view.View;
import android.view.accessibility.AccessibilityNodeInfo;
/* loaded from: classes.dex */
class AccessibilityNodeInfoCompatApi22 {

    AccessibilityNodeInfoCompatApi22() {

    }


    static Object getTraversalBefore(Object info) {

        return ((AccessibilityNodeInfo) info).getTraversalBefore();
    }


    static void setTraversalBefore(Object info, View view) {

        ((AccessibilityNodeInfo) info).setTraversalBefore(view);
    }


    static void setTraversalBefore(Object info, View root, int virtualDescendantId) {

        ((AccessibilityNodeInfo) info).setTraversalBefore(root, virtualDescendantId);
    }


    static Object getTraversalAfter(Object info) {

        return ((AccessibilityNodeInfo) info).getTraversalAfter();
    }


    static void setTraversalAfter(Object info, View view) {

        ((AccessibilityNodeInfo) info).setTraversalAfter(view);
    }


    static void setTraversalAfter(Object info, View root, int virtualDescendantId) {

        ((AccessibilityNodeInfo) info).setTraversalAfter(root, virtualDescendantId);
    }

}

