/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.view.View;
import android.view.ViewGroup;
/* loaded from: classes.dex */
class NestedScrollingParentHelper {

    private int mNestedScrollAxes;
    private final ViewGroup mViewGroup;

    NestedScrollingParentHelper(ViewGroup viewGroup) {

        this.mViewGroup = viewGroup;
    }


    void onNestedScrollAccepted(View child, View target, int axes) {

        this.mNestedScrollAxes = axes;
    }


    int getNestedScrollAxes() {

        return this.mNestedScrollAxes;
    }


    void onStopNestedScroll(View target) {

        this.mNestedScrollAxes = 0;
    }

}

