/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.os.Build;
/* loaded from: classes.dex */
class ScaleGestureDetectorCompat {

    static final ScaleGestureDetectorImpl IMPL;

    /* loaded from: classes.dex */
    interface ScaleGestureDetectorImpl {

        boolean isQuickScaleEnabled(Object obj);

        void setQuickScaleEnabled(Object obj, boolean z);
    }


    /* loaded from: classes.dex */
    private static class BaseScaleGestureDetectorImpl implements ScaleGestureDetectorImpl {

        private BaseScaleGestureDetectorImpl() {

        }


        @Override // android.support.v4.view.ScaleGestureDetectorCompat.ScaleGestureDetectorImpl
        void setQuickScaleEnabled(Object o, boolean enabled) {

        }


        @Override // android.support.v4.view.ScaleGestureDetectorCompat.ScaleGestureDetectorImpl
        boolean isQuickScaleEnabled(Object o) {

            return false;
        }

    }


    /* loaded from: classes.dex */
    private static class ScaleGestureDetectorCompatKitKatImpl implements ScaleGestureDetectorImpl {

        private ScaleGestureDetectorCompatKitKatImpl() {

        }


        @Override // android.support.v4.view.ScaleGestureDetectorCompat.ScaleGestureDetectorImpl
        void setQuickScaleEnabled(Object o, boolean enabled) {

            ScaleGestureDetectorCompatKitKat.setQuickScaleEnabled(o, enabled);
        }


        @Override // android.support.v4.view.ScaleGestureDetectorCompat.ScaleGestureDetectorImpl
        boolean isQuickScaleEnabled(Object o) {

            return ScaleGestureDetectorCompatKitKat.isQuickScaleEnabled(o);
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 19) {

            IMPL = new ScaleGestureDetectorCompatKitKatImpl();
        }
 else {

            IMPL = new BaseScaleGestureDetectorImpl();
        }

    }


    private ScaleGestureDetectorCompat() {

    }


    static void setQuickScaleEnabled(Object scaleGestureDetector, boolean enabled) {

        IMPL.setQuickScaleEnabled(scaleGestureDetector, enabled);
    }


    static boolean isQuickScaleEnabled(Object scaleGestureDetector) {

        return IMPL.isQuickScaleEnabled(scaleGestureDetector);
    }

}

