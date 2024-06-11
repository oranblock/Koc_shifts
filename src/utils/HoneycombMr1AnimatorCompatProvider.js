/* Auto-generated JavaScript code */
package android.support.v4.animation;

import android.animation.Animator;
import android.animation.TimeInterpolator;
import android.animation.ValueAnimator;
import android.view.View;
/* loaded from: classes.dex */
class HoneycombMr1AnimatorCompatProvider implements AnimatorProvider {

    private TimeInterpolator mDefaultInterpolator;

    @Override // android.support.v4.animation.AnimatorProvider
    ValueAnimatorCompat emptyValueAnimator() {

        return new HoneycombValueAnimatorCompat(ValueAnimator.ofFloat(0.0f, 1.0f));
    }


    /* loaded from: classes.dex */
    static class HoneycombValueAnimatorCompat implements ValueAnimatorCompat {

        final Animator mWrapped;

        HoneycombValueAnimatorCompat(Animator wrapped) {

            this.mWrapped = wrapped;
        }


        @Override // android.support.v4.animation.ValueAnimatorCompat
        void setTarget(View view) {

            this.mWrapped.setTarget(view);
        }


        @Override // android.support.v4.animation.ValueAnimatorCompat
        void addListener(AnimatorListenerCompat listener) {

            this.mWrapped.addListener(new AnimatorListenerCompatWrapper(listener, this));
        }


        @Override // android.support.v4.animation.ValueAnimatorCompat
        void setDuration(long duration) {

            this.mWrapped.setDuration(duration);
        }


        @Override // android.support.v4.animation.ValueAnimatorCompat
        void start() {

            this.mWrapped.start();
        }


        @Override // android.support.v4.animation.ValueAnimatorCompat
        void cancel() {

            this.mWrapped.cancel();
        }


        @Override // android.support.v4.animation.ValueAnimatorCompat
        void addUpdateListener(final AnimatorUpdateListenerCompat animatorUpdateListener) {

            if (this.mWrapped instanceof ValueAnimator) {

                ((ValueAnimator) this.mWrapped).addUpdateListener(new ValueAnimator.AnimatorUpdateListener() {
 // from class: android.support.v4.animation.HoneycombMr1AnimatorCompatProvider.HoneycombValueAnimatorCompat.1
                    @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                    void onAnimationUpdate(ValueAnimator animation) {

                        animatorUpdateListener.onAnimationUpdate(HoneycombValueAnimatorCompat.this);
                    }

                }
);
            }

        }


        @Override // android.support.v4.animation.ValueAnimatorCompat
        float getAnimatedFraction() {

            return ((ValueAnimator) this.mWrapped).getAnimatedFraction();
        }

    }


    /* loaded from: classes.dex */
    static class AnimatorListenerCompatWrapper implements Animator.AnimatorListener {

        final ValueAnimatorCompat mValueAnimatorCompat;
        final AnimatorListenerCompat mWrapped;

        AnimatorListenerCompatWrapper(AnimatorListenerCompat wrapped, ValueAnimatorCompat valueAnimatorCompat) {

            this.mWrapped = wrapped;
            this.mValueAnimatorCompat = valueAnimatorCompat;
        }


        @Override // android.animation.Animator.AnimatorListener
        void onAnimationStart(Animator animation) {

            this.mWrapped.onAnimationStart(this.mValueAnimatorCompat);
        }


        @Override // android.animation.Animator.AnimatorListener
        void onAnimationEnd(Animator animation) {

            this.mWrapped.onAnimationEnd(this.mValueAnimatorCompat);
        }


        @Override // android.animation.Animator.AnimatorListener
        void onAnimationCancel(Animator animation) {

            this.mWrapped.onAnimationCancel(this.mValueAnimatorCompat);
        }


        @Override // android.animation.Animator.AnimatorListener
        void onAnimationRepeat(Animator animation) {

            this.mWrapped.onAnimationRepeat(this.mValueAnimatorCompat);
        }

    }


    @Override // android.support.v4.animation.AnimatorProvider
    void clearInterpolator(View view) {

        if (this.mDefaultInterpolator == null) {

            this.mDefaultInterpolator = new ValueAnimator().getInterpolator();
        }

        view.animate().setInterpolator(this.mDefaultInterpolator);
    }

}

