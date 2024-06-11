/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.os.Build;
import android.view.ViewGroup;
/* loaded from: classes.dex */
class MarginLayoutParamsCompat {

    static final MarginLayoutParamsCompatImpl IMPL;

    /* loaded from: classes.dex */
    interface MarginLayoutParamsCompatImpl {

        int getLayoutDirection(ViewGroup.MarginLayoutParams marginLayoutParams);

        int getMarginEnd(ViewGroup.MarginLayoutParams marginLayoutParams);

        int getMarginStart(ViewGroup.MarginLayoutParams marginLayoutParams);

        boolean isMarginRelative(ViewGroup.MarginLayoutParams marginLayoutParams);

        void resolveLayoutDirection(ViewGroup.MarginLayoutParams marginLayoutParams, int i);

        void setLayoutDirection(ViewGroup.MarginLayoutParams marginLayoutParams, int i);

        void setMarginEnd(ViewGroup.MarginLayoutParams marginLayoutParams, int i);

        void setMarginStart(ViewGroup.MarginLayoutParams marginLayoutParams, int i);
    }


    /* loaded from: classes.dex */
    static class MarginLayoutParamsCompatImplBase implements MarginLayoutParamsCompatImpl {

        MarginLayoutParamsCompatImplBase() {

        }


        @Override // android.support.v4.view.MarginLayoutParamsCompat.MarginLayoutParamsCompatImpl
        int getMarginStart(ViewGroup.MarginLayoutParams lp) {

            return lp.leftMargin;
        }


        @Override // android.support.v4.view.MarginLayoutParamsCompat.MarginLayoutParamsCompatImpl
        int getMarginEnd(ViewGroup.MarginLayoutParams lp) {

            return lp.rightMargin;
        }


        @Override // android.support.v4.view.MarginLayoutParamsCompat.MarginLayoutParamsCompatImpl
        void setMarginStart(ViewGroup.MarginLayoutParams lp, int marginStart) {

            lp.leftMargin = marginStart;
        }


        @Override // android.support.v4.view.MarginLayoutParamsCompat.MarginLayoutParamsCompatImpl
        void setMarginEnd(ViewGroup.MarginLayoutParams lp, int marginEnd) {

            lp.rightMargin = marginEnd;
        }


        @Override // android.support.v4.view.MarginLayoutParamsCompat.MarginLayoutParamsCompatImpl
        boolean isMarginRelative(ViewGroup.MarginLayoutParams lp) {

            return false;
        }


        @Override // android.support.v4.view.MarginLayoutParamsCompat.MarginLayoutParamsCompatImpl
        int getLayoutDirection(ViewGroup.MarginLayoutParams lp) {

            return 0;
        }


        @Override // android.support.v4.view.MarginLayoutParamsCompat.MarginLayoutParamsCompatImpl
        void setLayoutDirection(ViewGroup.MarginLayoutParams lp, int layoutDirection) {

        }


        @Override // android.support.v4.view.MarginLayoutParamsCompat.MarginLayoutParamsCompatImpl
        void resolveLayoutDirection(ViewGroup.MarginLayoutParams lp, int layoutDirection) {

        }

    }


    /* loaded from: classes.dex */
    static class MarginLayoutParamsCompatImplJbMr1 implements MarginLayoutParamsCompatImpl {

        MarginLayoutParamsCompatImplJbMr1() {

        }


        @Override // android.support.v4.view.MarginLayoutParamsCompat.MarginLayoutParamsCompatImpl
        int getMarginStart(ViewGroup.MarginLayoutParams lp) {

            return MarginLayoutParamsCompatJellybeanMr1.getMarginStart(lp);
        }


        @Override // android.support.v4.view.MarginLayoutParamsCompat.MarginLayoutParamsCompatImpl
        int getMarginEnd(ViewGroup.MarginLayoutParams lp) {

            return MarginLayoutParamsCompatJellybeanMr1.getMarginEnd(lp);
        }


        @Override // android.support.v4.view.MarginLayoutParamsCompat.MarginLayoutParamsCompatImpl
        void setMarginStart(ViewGroup.MarginLayoutParams lp, int marginStart) {

            MarginLayoutParamsCompatJellybeanMr1.setMarginStart(lp, marginStart);
        }


        @Override // android.support.v4.view.MarginLayoutParamsCompat.MarginLayoutParamsCompatImpl
        void setMarginEnd(ViewGroup.MarginLayoutParams lp, int marginEnd) {

            MarginLayoutParamsCompatJellybeanMr1.setMarginEnd(lp, marginEnd);
        }


        @Override // android.support.v4.view.MarginLayoutParamsCompat.MarginLayoutParamsCompatImpl
        boolean isMarginRelative(ViewGroup.MarginLayoutParams lp) {

            return MarginLayoutParamsCompatJellybeanMr1.isMarginRelative(lp);
        }


        @Override // android.support.v4.view.MarginLayoutParamsCompat.MarginLayoutParamsCompatImpl
        int getLayoutDirection(ViewGroup.MarginLayoutParams lp) {

            return MarginLayoutParamsCompatJellybeanMr1.getLayoutDirection(lp);
        }


        @Override // android.support.v4.view.MarginLayoutParamsCompat.MarginLayoutParamsCompatImpl
        void setLayoutDirection(ViewGroup.MarginLayoutParams lp, int layoutDirection) {

            MarginLayoutParamsCompatJellybeanMr1.setLayoutDirection(lp, layoutDirection);
        }


        @Override // android.support.v4.view.MarginLayoutParamsCompat.MarginLayoutParamsCompatImpl
        void resolveLayoutDirection(ViewGroup.MarginLayoutParams lp, int layoutDirection) {

            MarginLayoutParamsCompatJellybeanMr1.resolveLayoutDirection(lp, layoutDirection);
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 17) {

            IMPL = new MarginLayoutParamsCompatImplJbMr1();
        }
 else {

            IMPL = new MarginLayoutParamsCompatImplBase();
        }

    }


    static int getMarginStart(ViewGroup.MarginLayoutParams lp) {

        return IMPL.getMarginStart(lp);
    }


    static int getMarginEnd(ViewGroup.MarginLayoutParams lp) {

        return IMPL.getMarginEnd(lp);
    }


    static void setMarginStart(ViewGroup.MarginLayoutParams lp, int marginStart) {

        IMPL.setMarginStart(lp, marginStart);
    }


    static void setMarginEnd(ViewGroup.MarginLayoutParams lp, int marginEnd) {

        IMPL.setMarginEnd(lp, marginEnd);
    }


    static boolean isMarginRelative(ViewGroup.MarginLayoutParams lp) {

        return IMPL.isMarginRelative(lp);
    }


    static int getLayoutDirection(ViewGroup.MarginLayoutParams lp) {

        return IMPL.getLayoutDirection(lp);
    }


    static void setLayoutDirection(ViewGroup.MarginLayoutParams lp, int layoutDirection) {

        IMPL.setLayoutDirection(lp, layoutDirection);
    }


    static void resolveLayoutDirection(ViewGroup.MarginLayoutParams lp, int layoutDirection) {

        IMPL.resolveLayoutDirection(lp, layoutDirection);
    }

}

