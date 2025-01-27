/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.graphics.Rect;
import android.view.Gravity;
/* loaded from: classes.dex */
class GravityCompatJellybeanMr1 {

    GravityCompatJellybeanMr1() {

    }


    static int getAbsoluteGravity(int gravity, int layoutDirection) {

        return Gravity.getAbsoluteGravity(gravity, layoutDirection);
    }


    static void apply(int gravity, int w, int h, Rect container, Rect outRect, int layoutDirection) {

        Gravity.apply(gravity, w, h, container, outRect, layoutDirection);
    }


    static void apply(int gravity, int w, int h, Rect container, int xAdj, int yAdj, Rect outRect, int layoutDirection) {

        Gravity.apply(gravity, w, h, container, xAdj, yAdj, outRect, layoutDirection);
    }


    static void applyDisplay(int gravity, Rect display, Rect inoutObj, int layoutDirection) {

        Gravity.applyDisplay(gravity, display, inoutObj, layoutDirection);
    }

}

