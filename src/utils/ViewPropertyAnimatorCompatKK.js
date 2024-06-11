/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.animation.ValueAnimator;
import android.view.View;
/* loaded from: classes.dex */
class ViewPropertyAnimatorCompatKK {

    ViewPropertyAnimatorCompatKK() {

    }


    static void setUpdateListener(final View view, final ViewPropertyAnimatorUpdateListener listener) {

        view.animate().setUpdateListener(new ValueAnimator.AnimatorUpdateListener() {
 // from class: android.support.v4.view.ViewPropertyAnimatorCompatKK.1
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            void onAnimationUpdate(ValueAnimator valueAnimator) {

                ViewPropertyAnimatorUpdateListener.this.onAnimationUpdate(view);
            }

        }
);
    }

}

