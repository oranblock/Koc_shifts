/* Auto-generated JavaScript code */
package android.support.v4.view.accessibility;

import android.accessibilityservice.AccessibilityServiceInfo;
import android.os.Build;
import android.support.v4.view.accessibility.AccessibilityManagerCompatIcs;
import android.view.accessibility.AccessibilityManager;
import java.util.Collections;
import java.util.List;
/* loaded from: classes.dex */
class AccessibilityManagerCompat {

    private static final AccessibilityManagerVersionImpl IMPL;

    /* loaded from: classes.dex */
    interface AccessibilityManagerVersionImpl {

        boolean addAccessibilityStateChangeListener(AccessibilityManager accessibilityManager, AccessibilityStateChangeListenerCompat accessibilityStateChangeListenerCompat);

        List<AccessibilityServiceInfo> getEnabledAccessibilityServiceList(AccessibilityManager accessibilityManager, int i);

        List<AccessibilityServiceInfo> getInstalledAccessibilityServiceList(AccessibilityManager accessibilityManager);

        boolean isTouchExplorationEnabled(AccessibilityManager accessibilityManager);

        Object newAccessiblityStateChangeListener(AccessibilityStateChangeListenerCompat accessibilityStateChangeListenerCompat);

        boolean removeAccessibilityStateChangeListener(AccessibilityManager accessibilityManager, AccessibilityStateChangeListenerCompat accessibilityStateChangeListenerCompat);
    }


    /* loaded from: classes.dex */
    static abstract class AccessibilityStateChangeListenerCompat {

        final Object mListener = AccessibilityManagerCompat.IMPL.newAccessiblityStateChangeListener(this);

        abstract void onAccessibilityStateChanged(boolean z);
    }


    /* loaded from: classes.dex */
    static class AccessibilityManagerStubImpl implements AccessibilityManagerVersionImpl {

        AccessibilityManagerStubImpl() {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityManagerVersionImpl
        Object newAccessiblityStateChangeListener(AccessibilityStateChangeListenerCompat listener) {

            return null;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityManagerVersionImpl
        boolean addAccessibilityStateChangeListener(AccessibilityManager manager, AccessibilityStateChangeListenerCompat listener) {

            return false;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityManagerVersionImpl
        boolean removeAccessibilityStateChangeListener(AccessibilityManager manager, AccessibilityStateChangeListenerCompat listener) {

            return false;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityManagerVersionImpl
        List<AccessibilityServiceInfo> getEnabledAccessibilityServiceList(AccessibilityManager manager, int feedbackTypeFlags) {

            return Collections.emptyList();
        }


        @Override // android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityManagerVersionImpl
        List<AccessibilityServiceInfo> getInstalledAccessibilityServiceList(AccessibilityManager manager) {

            return Collections.emptyList();
        }


        @Override // android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityManagerVersionImpl
        boolean isTouchExplorationEnabled(AccessibilityManager manager) {

            return false;
        }

    }


    /* loaded from: classes.dex */
    static class AccessibilityManagerIcsImpl extends AccessibilityManagerStubImpl {

        AccessibilityManagerIcsImpl() {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityManagerStubImpl, android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityManagerVersionImpl
        Object newAccessiblityStateChangeListener(final AccessibilityStateChangeListenerCompat listener) {

            return AccessibilityManagerCompatIcs.newAccessibilityStateChangeListener(new AccessibilityManagerCompatIcs.AccessibilityStateChangeListenerBridge() {
 // from class: android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityManagerIcsImpl.1
                @Override // android.support.v4.view.accessibility.AccessibilityManagerCompatIcs.AccessibilityStateChangeListenerBridge
                void onAccessibilityStateChanged(boolean enabled) {

                    listener.onAccessibilityStateChanged(enabled);
                }

            }
);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityManagerStubImpl, android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityManagerVersionImpl
        boolean addAccessibilityStateChangeListener(AccessibilityManager manager, AccessibilityStateChangeListenerCompat listener) {

            return AccessibilityManagerCompatIcs.addAccessibilityStateChangeListener(manager, listener.mListener);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityManagerStubImpl, android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityManagerVersionImpl
        boolean removeAccessibilityStateChangeListener(AccessibilityManager manager, AccessibilityStateChangeListenerCompat listener) {

            return AccessibilityManagerCompatIcs.removeAccessibilityStateChangeListener(manager, listener.mListener);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityManagerStubImpl, android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityManagerVersionImpl
        List<AccessibilityServiceInfo> getEnabledAccessibilityServiceList(AccessibilityManager manager, int feedbackTypeFlags) {

            return AccessibilityManagerCompatIcs.getEnabledAccessibilityServiceList(manager, feedbackTypeFlags);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityManagerStubImpl, android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityManagerVersionImpl
        List<AccessibilityServiceInfo> getInstalledAccessibilityServiceList(AccessibilityManager manager) {

            return AccessibilityManagerCompatIcs.getInstalledAccessibilityServiceList(manager);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityManagerStubImpl, android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityManagerVersionImpl
        boolean isTouchExplorationEnabled(AccessibilityManager manager) {

            return AccessibilityManagerCompatIcs.isTouchExplorationEnabled(manager);
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 14) {

            IMPL = new AccessibilityManagerIcsImpl();
        }
 else {

            IMPL = new AccessibilityManagerStubImpl();
        }

    }


    static boolean addAccessibilityStateChangeListener(AccessibilityManager manager, AccessibilityStateChangeListenerCompat listener) {

        return IMPL.addAccessibilityStateChangeListener(manager, listener);
    }


    static boolean removeAccessibilityStateChangeListener(AccessibilityManager manager, AccessibilityStateChangeListenerCompat listener) {

        return IMPL.removeAccessibilityStateChangeListener(manager, listener);
    }


    static List<AccessibilityServiceInfo> getInstalledAccessibilityServiceList(AccessibilityManager manager) {

        return IMPL.getInstalledAccessibilityServiceList(manager);
    }


    static List<AccessibilityServiceInfo> getEnabledAccessibilityServiceList(AccessibilityManager manager, int feedbackTypeFlags) {

        return IMPL.getEnabledAccessibilityServiceList(manager, feedbackTypeFlags);
    }


    static boolean isTouchExplorationEnabled(AccessibilityManager manager) {

        return IMPL.isTouchExplorationEnabled(manager);
    }

}

