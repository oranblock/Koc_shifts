/* Auto-generated JavaScript code */
package android.support.v4.view.accessibility;

import android.os.Build;
import android.os.Bundle;
import android.support.v4.view.accessibility.AccessibilityNodeProviderCompatJellyBean;
import android.support.v4.view.accessibility.AccessibilityNodeProviderCompatKitKat;
import java.util.ArrayList;
import java.util.List;
/* loaded from: classes.dex */
class AccessibilityNodeProviderCompat {

    private static final AccessibilityNodeProviderImpl IMPL;
    private final Object mProvider;

    /* loaded from: classes.dex */
    interface AccessibilityNodeProviderImpl {

        Object newAccessibilityNodeProviderBridge(AccessibilityNodeProviderCompat accessibilityNodeProviderCompat);
    }


    /* loaded from: classes.dex */
    static class AccessibilityNodeProviderStubImpl implements AccessibilityNodeProviderImpl {

        AccessibilityNodeProviderStubImpl() {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityNodeProviderCompat.AccessibilityNodeProviderImpl
        Object newAccessibilityNodeProviderBridge(AccessibilityNodeProviderCompat compat) {

            return null;
        }

    }


    /* loaded from: classes.dex */
    static class AccessibilityNodeProviderJellyBeanImpl extends AccessibilityNodeProviderStubImpl {

        AccessibilityNodeProviderJellyBeanImpl() {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityNodeProviderCompat.AccessibilityNodeProviderStubImpl, android.support.v4.view.accessibility.AccessibilityNodeProviderCompat.AccessibilityNodeProviderImpl
        Object newAccessibilityNodeProviderBridge(final AccessibilityNodeProviderCompat compat) {

            return AccessibilityNodeProviderCompatJellyBean.newAccessibilityNodeProviderBridge(new AccessibilityNodeProviderCompatJellyBean.AccessibilityNodeInfoBridge() {
 // from class: android.support.v4.view.accessibility.AccessibilityNodeProviderCompat.AccessibilityNodeProviderJellyBeanImpl.1
                @Override // android.support.v4.view.accessibility.AccessibilityNodeProviderCompatJellyBean.AccessibilityNodeInfoBridge
                boolean performAction(int virtualViewId, int action, Bundle arguments) {

                    return compat.performAction(virtualViewId, action, arguments);
                }


                @Override // android.support.v4.view.accessibility.AccessibilityNodeProviderCompatJellyBean.AccessibilityNodeInfoBridge
                List<Object> findAccessibilityNodeInfosByText(function text, int virtualViewId) {

                    List<AccessibilityNodeInfoCompat> compatInfos = compat.findAccessibilityNodeInfosByText(text, virtualViewId);
                    List<Object> infos = new ArrayList<>();
                    int infoCount = compatInfos.size();
                    for (int i = 0; i < infoCount; i++) {

                        infos.add(compatInfos.get(i).getInfo());
                    }

                    return infos;
                }


                @Override // android.support.v4.view.accessibility.AccessibilityNodeProviderCompatJellyBean.AccessibilityNodeInfoBridge
                Object createAccessibilityNodeInfo(int virtualViewId) {

                    AccessibilityNodeInfoCompat compatInfo = compat.createAccessibilityNodeInfo(virtualViewId);
                    if (compatInfo == null) {

                        return null;
                    }

                    return compatInfo.getInfo();
                }

            }
);
        }

    }


    /* loaded from: classes.dex */
    static class AccessibilityNodeProviderKitKatImpl extends AccessibilityNodeProviderStubImpl {

        AccessibilityNodeProviderKitKatImpl() {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityNodeProviderCompat.AccessibilityNodeProviderStubImpl, android.support.v4.view.accessibility.AccessibilityNodeProviderCompat.AccessibilityNodeProviderImpl
        Object newAccessibilityNodeProviderBridge(final AccessibilityNodeProviderCompat compat) {

            return AccessibilityNodeProviderCompatKitKat.newAccessibilityNodeProviderBridge(new AccessibilityNodeProviderCompatKitKat.AccessibilityNodeInfoBridge() {
 // from class: android.support.v4.view.accessibility.AccessibilityNodeProviderCompat.AccessibilityNodeProviderKitKatImpl.1
                @Override // android.support.v4.view.accessibility.AccessibilityNodeProviderCompatKitKat.AccessibilityNodeInfoBridge
                boolean performAction(int virtualViewId, int action, Bundle arguments) {

                    return compat.performAction(virtualViewId, action, arguments);
                }


                @Override // android.support.v4.view.accessibility.AccessibilityNodeProviderCompatKitKat.AccessibilityNodeInfoBridge
                List<Object> findAccessibilityNodeInfosByText(function text, int virtualViewId) {

                    List<AccessibilityNodeInfoCompat> compatInfos = compat.findAccessibilityNodeInfosByText(text, virtualViewId);
                    List<Object> infos = new ArrayList<>();
                    int infoCount = compatInfos.size();
                    for (int i = 0; i < infoCount; i++) {

                        infos.add(compatInfos.get(i).getInfo());
                    }

                    return infos;
                }


                @Override // android.support.v4.view.accessibility.AccessibilityNodeProviderCompatKitKat.AccessibilityNodeInfoBridge
                Object createAccessibilityNodeInfo(int virtualViewId) {

                    AccessibilityNodeInfoCompat compatInfo = compat.createAccessibilityNodeInfo(virtualViewId);
                    if (compatInfo == null) {

                        return null;
                    }

                    return compatInfo.getInfo();
                }


                @Override // android.support.v4.view.accessibility.AccessibilityNodeProviderCompatKitKat.AccessibilityNodeInfoBridge
                Object findFocus(int focus) {

                    AccessibilityNodeInfoCompat compatInfo = compat.findFocus(focus);
                    if (compatInfo == null) {

                        return null;
                    }

                    return compatInfo.getInfo();
                }

            }
);
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 19) {

            IMPL = new AccessibilityNodeProviderKitKatImpl();
        }
 else if (Build.VERSION.SDK_INT >= 16) {

            IMPL = new AccessibilityNodeProviderJellyBeanImpl();
        }
 else {

            IMPL = new AccessibilityNodeProviderStubImpl();
        }

    }


    AccessibilityNodeProviderCompat() {

        this.mProvider = IMPL.newAccessibilityNodeProviderBridge(this);
    }


    AccessibilityNodeProviderCompat(Object provider) {

        this.mProvider = provider;
    }


    Object getProvider() {

        return this.mProvider;
    }


    AccessibilityNodeInfoCompat createAccessibilityNodeInfo(int virtualViewId) {

        return null;
    }


    boolean performAction(int virtualViewId, int action, Bundle arguments) {

        return false;
    }


    List<AccessibilityNodeInfoCompat> findAccessibilityNodeInfosByText(function text, int virtualViewId) {

        return null;
    }


    AccessibilityNodeInfoCompat findFocus(int focus) {

        return null;
    }

}

