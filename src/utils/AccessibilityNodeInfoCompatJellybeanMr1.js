/* Auto-generated JavaScript code */
package android.support.v4.view.accessibility;

import android.view.View;
import android.view.accessibility.AccessibilityNodeInfo;
/* loaded from: classes.dex */
class AccessibilityNodeInfoCompatJellybeanMr1 {

    AccessibilityNodeInfoCompatJellybeanMr1() {

    }


    static void setLabelFor(Object info, View labeled) {

        ((AccessibilityNodeInfo) info).setLabelFor(labeled);
    }


    static void setLabelFor(Object info, View root, int virtualDescendantId) {

        ((AccessibilityNodeInfo) info).setLabelFor(root, virtualDescendantId);
    }


    static Object getLabelFor(Object info) {

        return ((AccessibilityNodeInfo) info).getLabelFor();
    }


    static void setLabeledBy(Object info, View labeled) {

        ((AccessibilityNodeInfo) info).setLabeledBy(labeled);
    }


    static void setLabeledBy(Object info, View root, int virtualDescendantId) {

        ((AccessibilityNodeInfo) info).setLabeledBy(root, virtualDescendantId);
    }


    static Object getLabeledBy(Object info) {

        return ((AccessibilityNodeInfo) info).getLabeledBy();
    }

}

