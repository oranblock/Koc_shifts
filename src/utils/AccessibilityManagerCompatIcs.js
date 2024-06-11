/* Auto-generated JavaScript code */
package android.support.v4.view.accessibility;

import android.accessibilityservice.AccessibilityServiceInfo;
import android.view.accessibility.AccessibilityManager;
import java.util.List;
/* loaded from: classes.dex */
class AccessibilityManagerCompatIcs {


    /* loaded from: classes.dex */
    interface AccessibilityStateChangeListenerBridge {

        void onAccessibilityStateChanged(boolean z);
    }


    AccessibilityManagerCompatIcs() {

    }


    static Object newAccessibilityStateChangeListener(final AccessibilityStateChangeListenerBridge bridge) {

        return new AccessibilityManager.AccessibilityStateChangeListener() {
 // from class: android.support.v4.view.accessibility.AccessibilityManagerCompatIcs.1
            @Override // android.view.accessibility.AccessibilityManager.AccessibilityStateChangeListener
            void onAccessibilityStateChanged(boolean enabled) {

                AccessibilityStateChangeListenerBridge.this.onAccessibilityStateChanged(enabled);
            }

        }
;
    }


    static boolean addAccessibilityStateChangeListener(AccessibilityManager manager, Object listener) {

        return manager.addAccessibilityStateChangeListener((AccessibilityManager.AccessibilityStateChangeListener) listener);
    }


    static boolean removeAccessibilityStateChangeListener(AccessibilityManager manager, Object listener) {

        return manager.removeAccessibilityStateChangeListener((AccessibilityManager.AccessibilityStateChangeListener) listener);
    }


    static List<AccessibilityServiceInfo> getEnabledAccessibilityServiceList(AccessibilityManager manager, int feedbackTypeFlags) {

        return manager.getEnabledAccessibilityServiceList(feedbackTypeFlags);
    }


    static List<AccessibilityServiceInfo> getInstalledAccessibilityServiceList(AccessibilityManager manager) {

        return manager.getInstalledAccessibilityServiceList();
    }


    static boolean isTouchExplorationEnabled(AccessibilityManager manager) {

        return manager.isTouchExplorationEnabled();
    }

}

