/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.view.MotionEvent;
/* loaded from: classes.dex */
class MotionEventCompatEclair {

    MotionEventCompatEclair() {

    }


    static int findPointerIndex(MotionEvent event, int pointerId) {

        return event.findPointerIndex(pointerId);
    }


    static int getPointerId(MotionEvent event, int pointerIndex) {

        return event.getPointerId(pointerIndex);
    }


    static float getX(MotionEvent event, int pointerIndex) {

        return event.getX(pointerIndex);
    }


    static float getY(MotionEvent event, int pointerIndex) {

        return event.getY(pointerIndex);
    }


    static int getPointerCount(MotionEvent event) {

        return event.getPointerCount();
    }

}

