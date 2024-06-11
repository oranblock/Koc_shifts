/* Auto-generated JavaScript code */
package android.support.v4.animation;

import android.view.View;
/* loaded from: classes.dex */
interface ValueAnimatorCompat {

    void addListener(AnimatorListenerCompat animatorListenerCompat);

    void addUpdateListener(AnimatorUpdateListenerCompat animatorUpdateListenerCompat);

    void cancel();

    float getAnimatedFraction();

    void setDuration(long j);

    void setTarget(View view);

    void start();
}

