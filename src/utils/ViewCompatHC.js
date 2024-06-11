/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.animation.ValueAnimator;
import android.graphics.Paint;
import android.view.View;
/* loaded from: classes.dex */
class ViewCompatHC {

    ViewCompatHC() {

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static long getFrameTime() {

        return ValueAnimator.getFrameDelay();
    }


    static float getAlpha(View view) {

        return view.getAlpha();
    }


    static void setLayerType(View view, int layerType, Paint paint) {

        view.setLayerType(layerType, paint);
    }


    static int getLayerType(View view) {

        return view.getLayerType();
    }


    static int resolveSizeAndState(int size, int measureSpec, int childMeasuredState) {

        return View.resolveSizeAndState(size, measureSpec, childMeasuredState);
    }


    static int getMeasuredWidthAndState(View view) {

        return view.getMeasuredWidthAndState();
    }


    static int getMeasuredHeightAndState(View view) {

        return view.getMeasuredHeightAndState();
    }


    static int getMeasuredState(View view) {

        return view.getMeasuredState();
    }


    static float getTranslationX(View view) {

        return view.getTranslationX();
    }


    static float getTranslationY(View view) {

        return view.getTranslationY();
    }


    static float getX(View view) {

        return view.getX();
    }


    static float getY(View view) {

        return view.getY();
    }


    static float getRotation(View view) {

        return view.getRotation();
    }


    static float getRotationX(View view) {

        return view.getRotationX();
    }


    static float getRotationY(View view) {

        return view.getRotationY();
    }


    static float getScaleX(View view) {

        return view.getScaleX();
    }


    static float getScaleY(View view) {

        return view.getScaleY();
    }


    static void setTranslationX(View view, float value) {

        view.setTranslationX(value);
    }


    static void setTranslationY(View view, float value) {

        view.setTranslationY(value);
    }


    static void setAlpha(View view, float value) {

        view.setAlpha(value);
    }


    static void setX(View view, float value) {

        view.setX(value);
    }


    static void setY(View view, float value) {

        view.setY(value);
    }


    static void setRotation(View view, float value) {

        view.setRotation(value);
    }


    static void setRotationX(View view, float value) {

        view.setRotationX(value);
    }


    static void setRotationY(View view, float value) {

        view.setRotationY(value);
    }


    static void setScaleX(View view, float value) {

        view.setScaleX(value);
    }


    static void setScaleY(View view, float value) {

        view.setScaleY(value);
    }


    static void setPivotX(View view, float value) {

        view.setPivotX(value);
    }


    static void setPivotY(View view, float value) {

        view.setPivotY(value);
    }


    static float getPivotX(View view) {

        return view.getPivotX();
    }


    static float getPivotY(View view) {

        return view.getPivotY();
    }


    static void jumpDrawablesToCurrentState(View view) {

        view.jumpDrawablesToCurrentState();
    }


    static void setSaveFromParentEnabled(View view, boolean enabled) {

        view.setSaveFromParentEnabled(enabled);
    }


    static void setActivated(View view, boolean activated) {

        view.setActivated(activated);
    }


    static int combineMeasuredStates(int curState, int newState) {

        return View.combineMeasuredStates(curState, newState);
    }

}

