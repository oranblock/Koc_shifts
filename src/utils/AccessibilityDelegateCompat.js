/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.os.Build;
import android.os.Bundle;
import android.support.v4.view.AccessibilityDelegateCompatIcs;
import android.support.v4.view.AccessibilityDelegateCompatJellyBean;
import android.support.v4.view.accessibility.AccessibilityNodeInfoCompat;
import android.support.v4.view.accessibility.AccessibilityNodeProviderCompat;
import android.view.View;
import android.view.ViewGroup;
import android.view.accessibility.AccessibilityEvent;
/* loaded from: classes.dex */
class AccessibilityDelegateCompat {

    private static final Object DEFAULT_DELEGATE;
    private static final AccessibilityDelegateImpl IMPL;
    final Object mBridge = IMPL.newAccessiblityDelegateBridge(this);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: classes.dex */
    interface AccessibilityDelegateImpl {

        boolean dispatchPopulateAccessibilityEvent(Object obj, View view, AccessibilityEvent accessibilityEvent);

        AccessibilityNodeProviderCompat getAccessibilityNodeProvider(Object obj, View view);

        Object newAccessiblityDelegateBridge(AccessibilityDelegateCompat accessibilityDelegateCompat);

        Object newAccessiblityDelegateDefaultImpl();

        void onInitializeAccessibilityEvent(Object obj, View view, AccessibilityEvent accessibilityEvent);

        void onInitializeAccessibilityNodeInfo(Object obj, View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat);

        void onPopulateAccessibilityEvent(Object obj, View view, AccessibilityEvent accessibilityEvent);

        boolean onRequestSendAccessibilityEvent(Object obj, ViewGroup viewGroup, View view, AccessibilityEvent accessibilityEvent);

        boolean performAccessibilityAction(Object obj, View view, int i, Bundle bundle);

        void sendAccessibilityEvent(Object obj, View view, int i);

        void sendAccessibilityEventUnchecked(Object obj, View view, AccessibilityEvent accessibilityEvent);
    }


    /* loaded from: classes.dex */
    static class AccessibilityDelegateStubImpl implements AccessibilityDelegateImpl {

        AccessibilityDelegateStubImpl() {

        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        Object newAccessiblityDelegateDefaultImpl() {

            return null;
        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        Object newAccessiblityDelegateBridge(AccessibilityDelegateCompat listener) {

            return null;
        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        boolean dispatchPopulateAccessibilityEvent(Object delegate, View host, AccessibilityEvent event) {

            return false;
        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        void onInitializeAccessibilityEvent(Object delegate, View host, AccessibilityEvent event) {

        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        void onInitializeAccessibilityNodeInfo(Object delegate, View host, AccessibilityNodeInfoCompat info) {

        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        void onPopulateAccessibilityEvent(Object delegate, View host, AccessibilityEvent event) {

        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        boolean onRequestSendAccessibilityEvent(Object delegate, ViewGroup host, View child, AccessibilityEvent event) {

            return true;
        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        void sendAccessibilityEvent(Object delegate, View host, int eventType) {

        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        void sendAccessibilityEventUnchecked(Object delegate, View host, AccessibilityEvent event) {

        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        AccessibilityNodeProviderCompat getAccessibilityNodeProvider(Object delegate, View host) {

            return null;
        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        boolean performAccessibilityAction(Object delegate, View host, int action, Bundle args) {

            return false;
        }

    }


    /* loaded from: classes.dex */
    static class AccessibilityDelegateIcsImpl extends AccessibilityDelegateStubImpl {

        AccessibilityDelegateIcsImpl() {

        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateStubImpl, android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        Object newAccessiblityDelegateDefaultImpl() {

            return AccessibilityDelegateCompatIcs.newAccessibilityDelegateDefaultImpl();
        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateStubImpl, android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        Object newAccessiblityDelegateBridge(final AccessibilityDelegateCompat compat) {

            return AccessibilityDelegateCompatIcs.newAccessibilityDelegateBridge(new AccessibilityDelegateCompatIcs.AccessibilityDelegateBridge() {
 // from class: android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateIcsImpl.1
                @Override // android.support.v4.view.AccessibilityDelegateCompatIcs.AccessibilityDelegateBridge
                boolean dispatchPopulateAccessibilityEvent(View host, AccessibilityEvent event) {

                    return compat.dispatchPopulateAccessibilityEvent(host, event);
                }


                @Override // android.support.v4.view.AccessibilityDelegateCompatIcs.AccessibilityDelegateBridge
                void onInitializeAccessibilityEvent(View host, AccessibilityEvent event) {

                    compat.onInitializeAccessibilityEvent(host, event);
                }


                @Override // android.support.v4.view.AccessibilityDelegateCompatIcs.AccessibilityDelegateBridge
                void onInitializeAccessibilityNodeInfo(View host, Object info) {

                    compat.onInitializeAccessibilityNodeInfo(host, new AccessibilityNodeInfoCompat(info));
                }


                @Override // android.support.v4.view.AccessibilityDelegateCompatIcs.AccessibilityDelegateBridge
                void onPopulateAccessibilityEvent(View host, AccessibilityEvent event) {

                    compat.onPopulateAccessibilityEvent(host, event);
                }


                @Override // android.support.v4.view.AccessibilityDelegateCompatIcs.AccessibilityDelegateBridge
                boolean onRequestSendAccessibilityEvent(ViewGroup host, View child, AccessibilityEvent event) {

                    return compat.onRequestSendAccessibilityEvent(host, child, event);
                }


                @Override // android.support.v4.view.AccessibilityDelegateCompatIcs.AccessibilityDelegateBridge
                void sendAccessibilityEvent(View host, int eventType) {

                    compat.sendAccessibilityEvent(host, eventType);
                }


                @Override // android.support.v4.view.AccessibilityDelegateCompatIcs.AccessibilityDelegateBridge
                void sendAccessibilityEventUnchecked(View host, AccessibilityEvent event) {

                    compat.sendAccessibilityEventUnchecked(host, event);
                }

            }
);
        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateStubImpl, android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        boolean dispatchPopulateAccessibilityEvent(Object delegate, View host, AccessibilityEvent event) {

            return AccessibilityDelegateCompatIcs.dispatchPopulateAccessibilityEvent(delegate, host, event);
        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateStubImpl, android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        void onInitializeAccessibilityEvent(Object delegate, View host, AccessibilityEvent event) {

            AccessibilityDelegateCompatIcs.onInitializeAccessibilityEvent(delegate, host, event);
        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateStubImpl, android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        void onInitializeAccessibilityNodeInfo(Object delegate, View host, AccessibilityNodeInfoCompat info) {

            AccessibilityDelegateCompatIcs.onInitializeAccessibilityNodeInfo(delegate, host, info.getInfo());
        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateStubImpl, android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        void onPopulateAccessibilityEvent(Object delegate, View host, AccessibilityEvent event) {

            AccessibilityDelegateCompatIcs.onPopulateAccessibilityEvent(delegate, host, event);
        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateStubImpl, android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        boolean onRequestSendAccessibilityEvent(Object delegate, ViewGroup host, View child, AccessibilityEvent event) {

            return AccessibilityDelegateCompatIcs.onRequestSendAccessibilityEvent(delegate, host, child, event);
        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateStubImpl, android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        void sendAccessibilityEvent(Object delegate, View host, int eventType) {

            AccessibilityDelegateCompatIcs.sendAccessibilityEvent(delegate, host, eventType);
        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateStubImpl, android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        void sendAccessibilityEventUnchecked(Object delegate, View host, AccessibilityEvent event) {

            AccessibilityDelegateCompatIcs.sendAccessibilityEventUnchecked(delegate, host, event);
        }

    }


    /* loaded from: classes.dex */
    static class AccessibilityDelegateJellyBeanImpl extends AccessibilityDelegateIcsImpl {

        AccessibilityDelegateJellyBeanImpl() {

        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateIcsImpl, android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateStubImpl, android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        Object newAccessiblityDelegateBridge(final AccessibilityDelegateCompat compat) {

            return AccessibilityDelegateCompatJellyBean.newAccessibilityDelegateBridge(new AccessibilityDelegateCompatJellyBean.AccessibilityDelegateBridgeJellyBean() {
 // from class: android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateJellyBeanImpl.1
                @Override // android.support.v4.view.AccessibilityDelegateCompatJellyBean.AccessibilityDelegateBridgeJellyBean
                boolean dispatchPopulateAccessibilityEvent(View host, AccessibilityEvent event) {

                    return compat.dispatchPopulateAccessibilityEvent(host, event);
                }


                @Override // android.support.v4.view.AccessibilityDelegateCompatJellyBean.AccessibilityDelegateBridgeJellyBean
                void onInitializeAccessibilityEvent(View host, AccessibilityEvent event) {

                    compat.onInitializeAccessibilityEvent(host, event);
                }


                @Override // android.support.v4.view.AccessibilityDelegateCompatJellyBean.AccessibilityDelegateBridgeJellyBean
                void onInitializeAccessibilityNodeInfo(View host, Object info) {

                    compat.onInitializeAccessibilityNodeInfo(host, new AccessibilityNodeInfoCompat(info));
                }


                @Override // android.support.v4.view.AccessibilityDelegateCompatJellyBean.AccessibilityDelegateBridgeJellyBean
                void onPopulateAccessibilityEvent(View host, AccessibilityEvent event) {

                    compat.onPopulateAccessibilityEvent(host, event);
                }


                @Override // android.support.v4.view.AccessibilityDelegateCompatJellyBean.AccessibilityDelegateBridgeJellyBean
                boolean onRequestSendAccessibilityEvent(ViewGroup host, View child, AccessibilityEvent event) {

                    return compat.onRequestSendAccessibilityEvent(host, child, event);
                }


                @Override // android.support.v4.view.AccessibilityDelegateCompatJellyBean.AccessibilityDelegateBridgeJellyBean
                void sendAccessibilityEvent(View host, int eventType) {

                    compat.sendAccessibilityEvent(host, eventType);
                }


                @Override // android.support.v4.view.AccessibilityDelegateCompatJellyBean.AccessibilityDelegateBridgeJellyBean
                void sendAccessibilityEventUnchecked(View host, AccessibilityEvent event) {

                    compat.sendAccessibilityEventUnchecked(host, event);
                }


                @Override // android.support.v4.view.AccessibilityDelegateCompatJellyBean.AccessibilityDelegateBridgeJellyBean
                Object getAccessibilityNodeProvider(View host) {

                    AccessibilityNodeProviderCompat provider = compat.getAccessibilityNodeProvider(host);
                    if (provider != null) {

                        return provider.getProvider();
                    }

                    return null;
                }


                @Override // android.support.v4.view.AccessibilityDelegateCompatJellyBean.AccessibilityDelegateBridgeJellyBean
                boolean performAccessibilityAction(View host, int action, Bundle args) {

                    return compat.performAccessibilityAction(host, action, args);
                }

            }
);
        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateStubImpl, android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        AccessibilityNodeProviderCompat getAccessibilityNodeProvider(Object delegate, View host) {

            Object provider = AccessibilityDelegateCompatJellyBean.getAccessibilityNodeProvider(delegate, host);
            if (provider != null) {

                return new AccessibilityNodeProviderCompat(provider);
            }

            return null;
        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateStubImpl, android.support.v4.view.AccessibilityDelegateCompat.AccessibilityDelegateImpl
        boolean performAccessibilityAction(Object delegate, View host, int action, Bundle args) {

            return AccessibilityDelegateCompatJellyBean.performAccessibilityAction(delegate, host, action, args);
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 16) {

            IMPL = new AccessibilityDelegateJellyBeanImpl();
        }
 else if (Build.VERSION.SDK_INT >= 14) {

            IMPL = new AccessibilityDelegateIcsImpl();
        }
 else {

            IMPL = new AccessibilityDelegateStubImpl();
        }

        DEFAULT_DELEGATE = IMPL.newAccessiblityDelegateDefaultImpl();
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    Object getBridge() {

        return this.mBridge;
    }


    void sendAccessibilityEvent(View host, int eventType) {

        IMPL.sendAccessibilityEvent(DEFAULT_DELEGATE, host, eventType);
    }


    void sendAccessibilityEventUnchecked(View host, AccessibilityEvent event) {

        IMPL.sendAccessibilityEventUnchecked(DEFAULT_DELEGATE, host, event);
    }


    boolean dispatchPopulateAccessibilityEvent(View host, AccessibilityEvent event) {

        return IMPL.dispatchPopulateAccessibilityEvent(DEFAULT_DELEGATE, host, event);
    }


    void onPopulateAccessibilityEvent(View host, AccessibilityEvent event) {

        IMPL.onPopulateAccessibilityEvent(DEFAULT_DELEGATE, host, event);
    }


    void onInitializeAccessibilityEvent(View host, AccessibilityEvent event) {

        IMPL.onInitializeAccessibilityEvent(DEFAULT_DELEGATE, host, event);
    }


    void onInitializeAccessibilityNodeInfo(View host, AccessibilityNodeInfoCompat info) {

        IMPL.onInitializeAccessibilityNodeInfo(DEFAULT_DELEGATE, host, info);
    }


    boolean onRequestSendAccessibilityEvent(ViewGroup host, View child, AccessibilityEvent event) {

        return IMPL.onRequestSendAccessibilityEvent(DEFAULT_DELEGATE, host, child, event);
    }


    AccessibilityNodeProviderCompat getAccessibilityNodeProvider(View host) {

        return IMPL.getAccessibilityNodeProvider(DEFAULT_DELEGATE, host);
    }


    boolean performAccessibilityAction(View host, int action, Bundle args) {

        return IMPL.performAccessibilityAction(DEFAULT_DELEGATE, host, action, args);
    }

}

