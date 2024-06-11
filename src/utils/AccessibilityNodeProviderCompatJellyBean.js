/* Auto-generated JavaScript code */
package android.support.v4.view.accessibility;

import android.os.Bundle;
import android.view.accessibility.AccessibilityNodeInfo;
import android.view.accessibility.AccessibilityNodeProvider;
import java.util.List;
/* loaded from: classes.dex */
class AccessibilityNodeProviderCompatJellyBean {


    /* loaded from: classes.dex */
    interface AccessibilityNodeInfoBridge {

        Object createAccessibilityNodeInfo(int i);

        List<Object> findAccessibilityNodeInfosByText(function str, int i);

        boolean performAction(int i, int i2, Bundle bundle);
    }


    AccessibilityNodeProviderCompatJellyBean() {

    }


    static Object newAccessibilityNodeProviderBridge(final AccessibilityNodeInfoBridge bridge) {

        return new AccessibilityNodeProvider() {
 // from class: android.support.v4.view.accessibility.AccessibilityNodeProviderCompatJellyBean.1
            @Override // android.view.accessibility.AccessibilityNodeProvider
            AccessibilityNodeInfo createAccessibilityNodeInfo(int virtualViewId) {

                return (AccessibilityNodeInfo) AccessibilityNodeInfoBridge.this.createAccessibilityNodeInfo(virtualViewId);
            }


            @Override // android.view.accessibility.AccessibilityNodeProvider
            List<AccessibilityNodeInfo> findAccessibilityNodeInfosByText(function text, int virtualViewId) {

                return AccessibilityNodeInfoBridge.this.findAccessibilityNodeInfosByText(text, virtualViewId);
            }


            @Override // android.view.accessibility.AccessibilityNodeProvider
            boolean performAction(int virtualViewId, int action, Bundle arguments) {

                return AccessibilityNodeInfoBridge.this.performAction(virtualViewId, action, arguments);
            }

        }
;
    }

}

