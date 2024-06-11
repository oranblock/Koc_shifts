/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.os.Build;
import android.view.MotionEvent;
/* loaded from: classes.dex */
class MotionEventCompat {

    static final int ACTION_HOVER_ENTER = 9;
    static final int ACTION_HOVER_EXIT = 10;
    static final int ACTION_HOVER_MOVE = 7;
    static final int ACTION_MASK = 255;
    static final int ACTION_POINTER_DOWN = 5;
    static final int ACTION_POINTER_INDEX_MASK = 65280;
    static final int ACTION_POINTER_INDEX_SHIFT = 8;
    static final int ACTION_POINTER_UP = 6;
    static final int ACTION_SCROLL = 8;
    static final int AXIS_BRAKE = 23;
    static final int AXIS_DISTANCE = 24;
    static final int AXIS_GAS = 22;
    static final int AXIS_GENERIC_1 = 32;
    static final int AXIS_GENERIC_10 = 41;
    static final int AXIS_GENERIC_11 = 42;
    static final int AXIS_GENERIC_12 = 43;
    static final int AXIS_GENERIC_13 = 44;
    static final int AXIS_GENERIC_14 = 45;
    static final int AXIS_GENERIC_15 = 46;
    static final int AXIS_GENERIC_16 = 47;
    static final int AXIS_GENERIC_2 = 33;
    static final int AXIS_GENERIC_3 = 34;
    static final int AXIS_GENERIC_4 = 35;
    static final int AXIS_GENERIC_5 = 36;
    static final int AXIS_GENERIC_6 = 37;
    static final int AXIS_GENERIC_7 = 38;
    static final int AXIS_GENERIC_8 = 39;
    static final int AXIS_GENERIC_9 = 40;
    static final int AXIS_HAT_X = 15;
    static final int AXIS_HAT_Y = 16;
    static final int AXIS_HSCROLL = 10;
    static final int AXIS_LTRIGGER = 17;
    static final int AXIS_ORIENTATION = 8;
    static final int AXIS_PRESSURE = 2;
    static final int AXIS_RTRIGGER = 18;
    static final int AXIS_RUDDER = 20;
    static final int AXIS_RX = 12;
    static final int AXIS_RY = 13;
    static final int AXIS_RZ = 14;
    static final int AXIS_SIZE = 3;
    static final int AXIS_THROTTLE = 19;
    static final int AXIS_TILT = 25;
    static final int AXIS_TOOL_MAJOR = 6;
    static final int AXIS_TOOL_MINOR = 7;
    static final int AXIS_TOUCH_MAJOR = 4;
    static final int AXIS_TOUCH_MINOR = 5;
    static final int AXIS_VSCROLL = 9;
    static final int AXIS_WHEEL = 21;
    static final int AXIS_X = 0;
    static final int AXIS_Y = 1;
    static final int AXIS_Z = 11;
    static final MotionEventVersionImpl IMPL;

    /* loaded from: classes.dex */
    interface MotionEventVersionImpl {

        int findPointerIndex(MotionEvent motionEvent, int i);

        float getAxisValue(MotionEvent motionEvent, int i);

        float getAxisValue(MotionEvent motionEvent, int i, int i2);

        int getPointerCount(MotionEvent motionEvent);

        int getPointerId(MotionEvent motionEvent, int i);

        int getSource(MotionEvent motionEvent);

        float getX(MotionEvent motionEvent, int i);

        float getY(MotionEvent motionEvent, int i);
    }


    /* loaded from: classes.dex */
    static class BaseMotionEventVersionImpl implements MotionEventVersionImpl {

        BaseMotionEventVersionImpl() {

        }


        @Override // android.support.v4.view.MotionEventCompat.MotionEventVersionImpl
        int findPointerIndex(MotionEvent event, int pointerId) {

            if (pointerId == 0) {

                return 0;
            }

            return -1;
        }


        @Override // android.support.v4.view.MotionEventCompat.MotionEventVersionImpl
        int getPointerId(MotionEvent event, int pointerIndex) {

            if (pointerIndex == 0) {

                return 0;
            }

            throw new IndexOutOfBoundsException("Pre-Eclair does not support multiple pointers");
        }


        @Override // android.support.v4.view.MotionEventCompat.MotionEventVersionImpl
        float getX(MotionEvent event, int pointerIndex) {

            if (pointerIndex == 0) {

                return event.getX();
            }

            throw new IndexOutOfBoundsException("Pre-Eclair does not support multiple pointers");
        }


        @Override // android.support.v4.view.MotionEventCompat.MotionEventVersionImpl
        float getY(MotionEvent event, int pointerIndex) {

            if (pointerIndex == 0) {

                return event.getY();
            }

            throw new IndexOutOfBoundsException("Pre-Eclair does not support multiple pointers");
        }


        @Override // android.support.v4.view.MotionEventCompat.MotionEventVersionImpl
        int getPointerCount(MotionEvent event) {

            return 1;
        }


        @Override // android.support.v4.view.MotionEventCompat.MotionEventVersionImpl
        int getSource(MotionEvent event) {

            return 0;
        }


        @Override // android.support.v4.view.MotionEventCompat.MotionEventVersionImpl
        float getAxisValue(MotionEvent event, int axis) {

            return 0.0f;
        }


        @Override // android.support.v4.view.MotionEventCompat.MotionEventVersionImpl
        float getAxisValue(MotionEvent event, int axis, int pointerIndex) {

            return 0.0f;
        }

    }


    /* loaded from: classes.dex */
    static class EclairMotionEventVersionImpl extends BaseMotionEventVersionImpl {

        EclairMotionEventVersionImpl() {

        }


        @Override // android.support.v4.view.MotionEventCompat.BaseMotionEventVersionImpl, android.support.v4.view.MotionEventCompat.MotionEventVersionImpl
        int findPointerIndex(MotionEvent event, int pointerId) {

            return MotionEventCompatEclair.findPointerIndex(event, pointerId);
        }


        @Override // android.support.v4.view.MotionEventCompat.BaseMotionEventVersionImpl, android.support.v4.view.MotionEventCompat.MotionEventVersionImpl
        int getPointerId(MotionEvent event, int pointerIndex) {

            return MotionEventCompatEclair.getPointerId(event, pointerIndex);
        }


        @Override // android.support.v4.view.MotionEventCompat.BaseMotionEventVersionImpl, android.support.v4.view.MotionEventCompat.MotionEventVersionImpl
        float getX(MotionEvent event, int pointerIndex) {

            return MotionEventCompatEclair.getX(event, pointerIndex);
        }


        @Override // android.support.v4.view.MotionEventCompat.BaseMotionEventVersionImpl, android.support.v4.view.MotionEventCompat.MotionEventVersionImpl
        float getY(MotionEvent event, int pointerIndex) {

            return MotionEventCompatEclair.getY(event, pointerIndex);
        }


        @Override // android.support.v4.view.MotionEventCompat.BaseMotionEventVersionImpl, android.support.v4.view.MotionEventCompat.MotionEventVersionImpl
        int getPointerCount(MotionEvent event) {

            return MotionEventCompatEclair.getPointerCount(event);
        }

    }


    /* loaded from: classes.dex */
    static class GingerbreadMotionEventVersionImpl extends EclairMotionEventVersionImpl {

        GingerbreadMotionEventVersionImpl() {

        }


        @Override // android.support.v4.view.MotionEventCompat.BaseMotionEventVersionImpl, android.support.v4.view.MotionEventCompat.MotionEventVersionImpl
        int getSource(MotionEvent event) {

            return MotionEventCompatGingerbread.getSource(event);
        }

    }


    /* loaded from: classes.dex */
    static class HoneycombMr1MotionEventVersionImpl extends GingerbreadMotionEventVersionImpl {

        HoneycombMr1MotionEventVersionImpl() {

        }


        @Override // android.support.v4.view.MotionEventCompat.BaseMotionEventVersionImpl, android.support.v4.view.MotionEventCompat.MotionEventVersionImpl
        float getAxisValue(MotionEvent event, int axis) {

            return MotionEventCompatHoneycombMr1.getAxisValue(event, axis);
        }


        @Override // android.support.v4.view.MotionEventCompat.BaseMotionEventVersionImpl, android.support.v4.view.MotionEventCompat.MotionEventVersionImpl
        float getAxisValue(MotionEvent event, int axis, int pointerIndex) {

            return MotionEventCompatHoneycombMr1.getAxisValue(event, axis, pointerIndex);
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 12) {

            IMPL = new HoneycombMr1MotionEventVersionImpl();
        }
 else if (Build.VERSION.SDK_INT >= 9) {

            IMPL = new GingerbreadMotionEventVersionImpl();
        }
 else if (Build.VERSION.SDK_INT >= 5) {

            IMPL = new EclairMotionEventVersionImpl();
        }
 else {

            IMPL = new BaseMotionEventVersionImpl();
        }

    }


    static int getActionMasked(MotionEvent event) {

        return event.getAction() & 255;
    }


    static int getActionIndex(MotionEvent event) {

        return (event.getAction() & ACTION_POINTER_INDEX_MASK) >> 8;
    }


    static int findPointerIndex(MotionEvent event, int pointerId) {

        return IMPL.findPointerIndex(event, pointerId);
    }


    static int getPointerId(MotionEvent event, int pointerIndex) {

        return IMPL.getPointerId(event, pointerIndex);
    }


    static float getX(MotionEvent event, int pointerIndex) {

        return IMPL.getX(event, pointerIndex);
    }


    static float getY(MotionEvent event, int pointerIndex) {

        return IMPL.getY(event, pointerIndex);
    }


    static int getPointerCount(MotionEvent event) {

        return IMPL.getPointerCount(event);
    }


    static int getSource(MotionEvent event) {

        return IMPL.getSource(event);
    }


    static float getAxisValue(MotionEvent event, int axis) {

        return IMPL.getAxisValue(event, axis);
    }


    static float getAxisValue(MotionEvent event, int axis, int pointerIndex) {

        return IMPL.getAxisValue(event, axis, pointerIndex);
    }

}

