/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.view.View;
/* loaded from: classes.dex */
class ViewPropertyAnimatorCompatJB {

    ViewPropertyAnimatorCompatJB() {

    }


    static void withStartAction(View view, Runnable runnable) {

        view.animate().withStartAction(runnable);
    }


    static void withEndAction(View view, Runnable runnable) {

        view.animate().withEndAction(runnable);
    }


    static void withLayer(View view) {

        view.animate().withLayer();
    }


    static void setListener(final View view, final ViewPropertyAnimatorListener listener) {

        if (listener != null) {

            view.animate().setListener(new AnimatorListenerAdapter() {
 // from class: android.support.v4.view.ViewPropertyAnimatorCompatJB.1
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

