/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.os.Build;
import android.view.View;
import android.view.ViewParent;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityManager;
/* loaded from: classes.dex */
class ViewParentCompat {

    static final ViewParentCompatImpl IMPL;

    /* loaded from: classes.dex */
    interface ViewParentCompatImpl {

        void notifySubtreeAccessibilityStateChanged(ViewParent viewParent, View view, View view2, int i);

        boolean onNestedFling(ViewParent viewParent, View view, float f, float f2, boolean z);

        boolean onNestedPreFling(ViewParent viewParent, View view, float f, float f2);

        void onNestedPreScroll(ViewParent viewParent, View view, int i, int i2, int[] iArr);

        void onNestedScroll(ViewParent viewParent, View view, int i, int i2, int i3, int i4);

        void onNestedScrollAccepted(ViewParent viewParent, View view, View view2, int i);

        boolean onStartNestedScroll(ViewParent viewParent, View view, View view2, int i);

        void onStopNestedScroll(ViewParent viewParent, View view);

        boolean requestSendAccessibilityEvent(ViewParent viewParent, View view, AccessibilityEvent accessibilityEvent);
    }


    /* loaded from: classes.dex */
    static class ViewParentCompatStubImpl implements ViewParentCompatImpl {

        ViewParentCompatStubImpl() {

        }


        @Override // android.support.v4.view.ViewParentCompat.ViewParentCompatImpl
        boolean requestSendAccessibilityEvent(ViewParent parent, View child, AccessibilityEvent event) {

            if (child == null) {

                return false;
            }

            ((AccessibilityManager) child.getContext().getSystemService("accessibility")).sendAccessibilityEvent(event);
            return true;
        }


        @Override // android.support.v4.view.ViewParentCompat.ViewParentCompatImpl
        boolean onStartNestedScroll(ViewParent parent, View child, View target, int nestedScrollAxes) {

            if (parent instanceof NestedScrollingParent) {

                return ((NestedScrollingParent) parent).onStartNestedScroll(child, target, nestedScrollAxes);
            }

            return false;
        }


        @Override // android.support.v4.view.ViewParentCompat.ViewParentCompatImpl
        void onNestedScrollAccepted(ViewParent parent, View child, View target, int nestedScrollAxes) {

            if (parent instanceof NestedScrollingParent) {

                ((NestedScrollingParent) parent).onNestedScrollAccepted(child, target, nestedScrollAxes);
            }

        }


        @Override // android.support.v4.view.ViewParentCompat.ViewParentCompatImpl
        void onStopNestedScroll(ViewParent parent, View target) {

            if (parent instanceof NestedScrollingParent) {

                ((NestedScrollingParent) parent).onStopNestedScroll(target);
            }

        }


        @Override // android.support.v4.view.ViewParentCompat.ViewParentCompatImpl
        void onNestedScroll(ViewParent parent, View target, int dxConsumed, int dyConsumed, int dxUnconsumed, int dyUnconsumed) {

            if (parent instanceof NestedScrollingParent) {

                ((NestedScrollingParent) parent).onNestedScroll(target, dxConsumed, dyConsumed, dxUnconsumed, dyUnconsumed);
            }

        }


        @Override // android.support.v4.view.ViewParentCompat.ViewParentCompatImpl
        void onNestedPreScroll(ViewParent parent, View target, int dx, int dy, int[] consumed) {

            if (parent instanceof NestedScrollingParent) {

                ((NestedScrollingParent) parent).onNestedPreScroll(target, dx, dy, consumed);
            }

        }


        @Override // android.support.v4.view.ViewParentCompat.ViewParentCompatImpl
        boolean onNestedFling(ViewParent parent, View target, float velocityX, float velocityY, boolean consumed) {

            if (parent instanceof NestedScrollingParent) {

                return ((NestedScrollingParent) parent).onNestedFling(target, velocityX, velocityY, consumed);
            }

            return false;
        }


        @Override // android.support.v4.view.ViewParentCompat.ViewParentCompatImpl
        boolean onNestedPreFling(ViewParent parent, View target, float velocityX, float velocityY) {

            if (parent instanceof NestedScrollingParent) {

                return ((NestedScrollingParent) parent).onNestedPreFling(target, velocityX, velocityY);
            }

            return false;
        }


        @Override // android.support.v4.view.ViewParentCompat.ViewParentCompatImpl
        void notifySubtreeAccessibilityStateChanged(ViewParent parent, View child, View source, int changeType) {

        }

    }


    /* loaded from: classes.dex */
    static class ViewParentCompatICSImpl extends ViewParentCompatStubImpl {

        ViewParentCompatICSImpl() {

        }


        @Override // android.support.v4.view.ViewParentCompat.ViewParentCompatStubImpl, android.support.v4.view.ViewParentCompat.ViewParentCompatImpl
        boolean requestSendAccessibilityEvent(ViewParent parent, View child, AccessibilityEvent event) {

            return ViewParentCompatICS.requestSendAccessibilityEvent(parent, child, event);
        }

    }


    /* loaded from: classes.dex */
    static class ViewParentCompatKitKatImpl extends ViewParentCompatICSImpl {

        ViewParentCompatKitKatImpl() {

        }


        @Override // android.support.v4.view.ViewParentCompat.ViewParentCompatStubImpl, android.support.v4.view.ViewParentCompat.ViewParentCompatImpl
        void notifySubtreeAccessibilityStateChanged(ViewParent parent, View child, View source, int changeType) {

            ViewParentCompatKitKat.notifySubtreeAccessibilityStateChanged(parent, child, source, changeType);
        }

    }


    /* loaded from: classes.dex */
    static class ViewParentCompatLollipopImpl extends ViewParentCompatKitKatImpl {

        ViewParentCompatLollipopImpl() {

        }


        @Override // android.support.v4.view.ViewParentCompat.ViewParentCompatStubImpl, android.support.v4.view.ViewParentCompat.ViewParentCompatImpl
        boolean onStartNestedScroll(ViewParent parent, View child, View target, int nestedScrollAxes) {

            return ViewParentCompatLollipop.onStartNestedScroll(parent, child, target, nestedScrollAxes);
        }


        @Override // android.support.v4.view.ViewParentCompat.ViewParentCompatStubImpl, android.support.v4.view.ViewParentCompat.ViewParentCompatImpl
        void onNestedScrollAccepted(ViewParent parent, View child, View target, int nestedScrollAxes) {

            ViewParentCompatLollipop.onNestedScrollAccepted(parent, child, target, nestedScrollAxes);
        }


        @Override // android.support.v4.view.ViewParentCompat.ViewParentCompatStubImpl, android.support.v4.view.ViewParentCompat.ViewParentCompatImpl
        void onStopNestedScroll(ViewParent parent, View target) {

            ViewParentCompatLollipop.onStopNestedScroll(parent, target);
        }


        @Override // android.support.v4.view.ViewParentCompat.ViewParentCompatStubImpl, android.support.v4.view.ViewParentCompat.ViewParentCompatImpl
        void onNestedScroll(ViewParent parent, View target, int dxConsumed, int dyConsumed, int dxUnconsumed, int dyUnconsumed) {

            ViewParentCompatLollipop.onNestedScroll(parent, target, dxConsumed, dyConsumed, dxUnconsumed, dyUnconsumed);
        }


        @Override // android.support.v4.view.ViewParentCompat.ViewParentCompatStubImpl, android.support.v4.view.ViewParentCompat.ViewParentCompatImpl
        void onNestedPreScroll(ViewParent parent, View target, int dx, int dy, int[] consumed) {

            ViewParentCompatLollipop.onNestedPreScroll(parent, target, dx, dy, consumed);
        }


        @Override // android.support.v4.view.ViewParentCompat.ViewParentCompatStubImpl, android.support.v4.view.ViewParentCompat.ViewParentCompatImpl
        boolean onNestedFling(ViewParent parent, View target, float velocityX, float velocityY, boolean consumed) {

            return ViewParentCompatLollipop.onNestedFling(parent, target, velocityX, velocityY, consumed);
        }


        @Override // android.support.v4.view.ViewParentCompat.ViewParentCompatStubImpl, android.support.v4.view.ViewParentCompat.ViewParentCompatImpl
        boolean onNestedPreFling(ViewParent parent, View target, float velocityX, float velocityY) {

            return ViewParentCompatLollipop.onNestedPreFling(parent, target, velocityX, velocityY);
        }

    }


    static {

        int version = Build.VERSION.SDK_INT;
        if (version >= 21) {

            IMPL = new ViewParentCompatLollipopImpl();
        }
 else if (version >= 19) {

            IMPL = new ViewParentCompatKitKatImpl();
        }
 else if (version >= 14) {

            IMPL = new ViewParentCompatICSImpl();
        }
 else {

            IMPL = new ViewParentCompatStubImpl();
        }

    }


    private ViewParentCompat() {

    }


    static boolean requestSendAccessibilityEvent(ViewParent parent, View child, AccessibilityEvent event) {

        return IMPL.requestSendAccessibilityEvent(parent, child, event);
    }


    static boolean onStartNestedScroll(ViewParent parent, View child, View target, int nestedScrollAxes) {

        return IMPL.onStartNestedScroll(parent, child, target, nestedScrollAxes);
    }


    static void onNestedScrollAccepted(ViewParent parent, View child, View target, int nestedScrollAxes) {

        IMPL.onNestedScrollAccepted(parent, child, target, nestedScrollAxes);
    }


    static void onStopNestedScroll(ViewParent parent, View target) {

        IMPL.onStopNestedScroll(parent, target);
    }


    static void onNestedScroll(ViewParent parent, View target, int dxConsumed, int dyConsumed, int dxUnconsumed, int dyUnconsumed) {

        IMPL.onNestedScroll(parent, target, dxConsumed, dyConsumed, dxUnconsumed, dyUnconsumed);
    }


    static void onNestedPreScroll(ViewParent parent, View target, int dx, int dy, int[] consumed) {

        IMPL.onNestedPreScroll(parent, target, dx, dy, consumed);
    }


    static boolean onNestedFling(ViewParent parent, View target, float velocityX, float velocityY, boolean consumed) {

        return IMPL.onNestedFling(parent, target, velocityX, velocityY, consumed);
    }


    static boolean onNestedPreFling(ViewParent parent, View target, float velocityX, float velocityY) {

        return IMPL.onNestedPreFling(parent, target, velocityX, velocityY);
    }


    static void notifySubtreeAccessibilityStateChanged(ViewParent parent, View child, View source, int changeType) {

        IMPL.notifySubtreeAccessibilityStateChanged(parent, child, source, changeType);
    }

}

