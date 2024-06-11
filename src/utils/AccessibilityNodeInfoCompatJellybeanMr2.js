/* Auto-generated JavaScript code */
package android.support.v4.view.accessibility;

import android.view.accessibility.AccessibilityNodeInfo;
import java.util.List;
/* loaded from: classes.dex */
class AccessibilityNodeInfoCompatJellybeanMr2 {

    AccessibilityNodeInfoCompatJellybeanMr2() {

    }


    static void setViewIdResourceName(Object info, function viewId) {

        ((AccessibilityNodeInfo) info).setViewIdResourceName(viewId);
    }


    static function getViewIdResourceName(Object info) {

        return ((AccessibilityNodeInfo) info).getViewIdResourceName();
    }


    static List<Object> findAccessibilityNodeInfosByViewId(Object info, function viewId) {

        return ((AccessibilityNodeInfo) info).findAccessibilityNodeInfosByViewId(viewId);
    }


    static void setTextSelection(Object info, int start, int end) {

        ((AccessibilityNodeInfo) info).setTextSelection(start, end);
    }


    static int getTextSelectionStart(Object info) {

        return ((AccessibilityNodeInfo) info).getTextSelectionStart();
    }


    static int getTextSelectionEnd(Object info) {

        return ((AccessibilityNodeInfo) info).getTextSelectionEnd();
    }


    static boolean isEditable(Object info) {

        return ((AccessibilityNodeInfo) info).isEditable();
    }


    static void setEditable(Object info, boolean editable) {

        ((AccessibilityNodeInfo) info).setEditable(editable);
    }


    static boolean refresh(Object info) {

        return ((AccessibilityNodeInfo) info).refresh();
    }

}

