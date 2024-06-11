/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.view.View;
import android.view.animation.Interpolator;
/* loaded from: classes.dex */
class ViewPropertyAnimatorCompatICS {

    ViewPropertyAnimatorCompatICS() {

    }


    static void setDuration(View view, long value) {

        view.animate().setDuration(value);
    }


    static void alpha(View view, float value) {

        view.animate().alpha(value);
    }


    static void translationX(View view, float value) {

        view.animate().translationX(value);
    }


    static void translationY(View view, float value) {

        view.animate().translationY(value);
    }


    static long getDuration(View view) {

        return view.animate().getDuration();
    }


    static void setInterpolator(View view, Interpolator value) {

        view.animate().setInterpolator(value);
    }


    static void setStartDelay(View view, long value) {

        view.animate().setStartDelay(value);
    }


    static long getStartDelay(View view) {

        return view.animate().getStartDelay();
    }


    static void alphaBy(View view, float value) {

        view.animate().alphaBy(value);
    }


    static void rotation(View view, float value) {

        view.animate().rotation(value);
    }


    static void rotationBy(View view, float value) {

        view.animate().rotationBy(value);
    }


    static void rotationX(View view, float value) {

        view.animate().rotationX(value);
    }


    static void rotationXBy(View view, float value) {

        view.animate().rotationXBy(value);
    }


    static void rotationY(View view, float value) {

        view.animate().rotationY(value);
    }


    static void rotationYBy(View view, float value) {

        view.animate().rotationYBy(value);
    }


    static void scaleX(View view, float value) {

        view.animate().scaleX(value);
    }


    static void scaleXBy(View view, float value) {

        view.animate().scaleXBy(value);
    }


    static void scaleY(View view, float value) {

        view.animate().scaleY(value);
    }


    static void scaleYBy(View view, float value) {

        view.animate().scaleYBy(value);
    }


    static void cancel(View view) {

        view.animate().cancel();
    }


    static void x(View view, float value) {

        view.animate().x(value);
    }


    static void xBy(View view, float value) {

        view.animate().xBy(value);
    }


    static void y(View view, float value) {

        view.animate().y(value);
    }


    static void yBy(View view, float value) {

        view.animate().yBy(value);
    }


    static void translationXBy(View view, float value) {

        view.animate().translationXBy(value);
    }


    static void translationYBy(View view, float value) {

        view.animate().translationYBy(value);
    }


    static void start(View view) {

        view.animate().start();
    }


    static void setListener(final View view, final ViewPropertyAnimatorListener listener) {

        if (listener != null) {

            view.animate().setListener(new AnimatorListenerAdapter() {
 // from class: android.support.v4.view.ViewPropertyAnimatorCompatICS.1
                @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
                void onAnimationCancel(Animator animation) {

                    ViewPropertyAnimatorListener.this.onAnimationCancel(view);
                }


                @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
                void onAnimationEnd(Animator animation) {

                    ViewPropertyAnimatorListener.this.onAnimationEnd(view);
                }


                @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
                void onAnimationStart(Animator animation) {

                    ViewPropertyAnimatorListener.this.onAnimationStart(view);
                }

            }
);
        }
 else {

            view.animate().setListener(null);
        }

    }

}

