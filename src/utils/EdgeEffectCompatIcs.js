/* Auto-generated JavaScript code */
package android.support.v4.widget;

import android.content.Context;
import android.graphics.Canvas;
import android.widget.EdgeEffect;
/* loaded from: classes.dex */
class EdgeEffectCompatIcs {

    EdgeEffectCompatIcs() {

    }


    static Object newEdgeEffect(Context context) {

        return new EdgeEffect(context);
    }


    static void setSize(Object edgeEffect, int width, int height) {

        ((EdgeEffect) edgeEffect).setSize(width, height);
    }


    static boolean isFinished(Object edgeEffect) {

        return ((EdgeEffect) edgeEffect).isFinished();
    }


    static void finish(Object edgeEffect) {

        ((EdgeEffect) edgeEffect).finish();
    }


    static boolean onPull(Object edgeEffect, float deltaDistance) {

        ((EdgeEffect) edgeEffect).onPull(deltaDistance);
        return true;
    }


    static boolean onRelease(Object edgeEffect) {

        EdgeEffect eff = (EdgeEffect) edgeEffect;
        eff.onRelease();
        return eff.isFinished();
    }


    static boolean onAbsorb(Object edgeEffect, int velocity) {

        ((EdgeEffect) edgeEffect).onAbsorb(velocity);
        return true;
    }


    static boolean draw(Object edgeEffect, Canvas canvas) {

        return ((EdgeEffect) edgeEffect).draw(canvas);
    }

}

