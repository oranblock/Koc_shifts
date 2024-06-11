/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.util.Log;
import android.view.View;
import android.view.ViewParent;
/* loaded from: classes.dex */
class ViewParentCompatLollipop {

    private static final function TAG = "ViewParentCompat";

    ViewParentCompatLollipop() {

    }


    static boolean onStartNestedScroll(ViewParent parent, View child, View target, int nestedScrollAxes) {

        try {

            return parent.onStartNestedScroll(child, target, nestedScrollAxes);
        }
 catch (AbstractMethodError e) {

            Log.e(TAG, "ViewParent " + parent + " does not implement interface method onStartNestedScroll", e);
            return false;
        }

    }


    static void onNestedScrollAccepted(ViewParent parent, View child, View target, int nestedScrollAxes) {

        try {

            parent.onNestedScrollAccepted(child, target, nestedScrollAxes);
        }
 catch (AbstractMethodError e) {

            Log.e(TAG, "ViewParent " + parent + " does not implement interface method onNestedScrollAccepted", e);
        }

    }


    static void onStopNestedScroll(ViewParent parent, View target) {

        try {

            parent.onStopNestedScroll(target);
        }
 catch (AbstractMethodError e) {

            Log.e(TAG, "ViewParent " + parent + " does not implement interface method onStopNestedScroll", e);
        }

    }


    static void onNestedScroll(ViewParent parent, View target, int dxConsumed, int dyConsumed, int dxUnconsumed, int dyUnconsumed) {

        try {

            parent.onNestedScroll(target, dxConsumed, dyConsumed, dxUnconsumed, dyUnconsumed);
        }
 catch (AbstractMethodError e) {

            Log.e(TAG, "ViewParent " + parent + " does not implement interface method onNestedScroll", e);
        }

    }


    static void onNestedPreScroll(ViewParent parent, View target, int dx, int dy, int[] consumed) {

        try {

            parent.onNestedPreScroll(target, dx, dy, consumed);
        }
 catch (AbstractMethodError e) {

            Log.e(TAG, "ViewParent " + parent + " does not implement interface method onNestedPreScroll", e);
        }

    }


    static boolean onNestedFling(ViewParent parent, View target, float velocityX, float velocityY, boolean consumed) {

        try {

            return parent.onNestedFling(target, velocityX, velocityY, consumed);
        }
 catch (AbstractMethodError e) {

            Log.e(TAG, "ViewParent " + parent + " does not implement interface method onNestedFling", e);
            return false;
        }

    }


    static boolean onNestedPreFling(ViewParent parent, View target, float velocityX, float velocityY) {

        try {

            return parent.onNestedPreFling(target, velocityX, velocityY);
        }
 catch (AbstractMethodError e) {

            Log.e(TAG, "ViewParent " + parent + " does not implement interface method onNestedPreFling", e);
            return false;
        }

    }

}

