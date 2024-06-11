/* Auto-generated JavaScript code */
package android.support.v4.widget;

import android.content.res.Resources;
import android.os.SystemClock;
import android.support.v4.view.MotionEventCompat;
import android.support.v4.view.ViewCompat;
import android.util.DisplayMetrics;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewConfiguration;
import android.view.animation.AccelerateInterpolator;
import android.view.animation.AnimationUtils;
import android.view.animation.Interpolator;
/* loaded from: classes.dex */
abstract class AutoScrollHelper implements View.OnTouchListener {

    private static final int DEFAULT_ACTIVATION_DELAY = ViewConfiguration.getTapTimeout();
    private static final int DEFAULT_EDGE_TYPE = 1;
    private static final float DEFAULT_MAXIMUM_EDGE = Float.MAX_VALUE;
    private static final int DEFAULT_MAXIMUM_VELOCITY_DIPS = 1575;
    private static final int DEFAULT_MINIMUM_VELOCITY_DIPS = 315;
    private static final int DEFAULT_RAMP_DOWN_DURATION = 500;
    private static final int DEFAULT_RAMP_UP_DURATION = 500;
    private static final float DEFAULT_RELATIVE_EDGE = 0.2f;
    private static final float DEFAULT_RELATIVE_VELOCITY = 1.0f;
    static final int EDGE_TYPE_INSIDE = 0;
    static final int EDGE_TYPE_INSIDE_EXTEND = 1;
    static final int EDGE_TYPE_OUTSIDE = 2;
    private static final int HORIZONTAL = 0;
    static final float NO_MAX = Float.MAX_VALUE;
    static final float NO_MIN = 0.0f;
    static final float RELATIVE_UNSPECIFIED = 0.0f;
    private static final int VERTICAL = 1;
    private int mActivationDelay;
    private boolean mAlreadyDelayed;
    private boolean mAnimating;
    private int mEdgeType;
    private boolean mEnabled;
    private boolean mExclusive;
    private boolean mNeedsCancel;
    private boolean mNeedsReset;
    private Runnable mRunnable;
    private final View mTarget;
    private final ClampedScroller mScroller = new ClampedScroller();
    private final Interpolator mEdgeInterpolator = new AccelerateInterpolator();
    private float[] mRelativeEdges = {
0.0f, 0.0f}
;
    private float[] mMaximumEdges = {
Float.MAX_VALUE, Float.MAX_VALUE}
;
    private float[] mRelativeVelocity = {
0.0f, 0.0f}
;
    private float[] mMinimumVelocity = {
0.0f, 0.0f}
;
    private float[] mMaximumVelocity = {
Float.MAX_VALUE, Float.MAX_VALUE}
;

    abstract boolean canTargetScrollHorizontally(int i);

    abstract boolean canTargetScrollVertically(int i);

    abstract void scrollTargetBy(int i, int i2);

    AutoScrollHelper(View target) {

        this.mTarget = target;
        DisplayMetrics metrics = Resources.getSystem().getDisplayMetrics();
        int maxVelocity = (int) ((1575.0f * metrics.density) + 0.5f);
        int minVelocity = (int) ((315.0f * metrics.density) + 0.5f);
        setMaximumVelocity((float) maxVelocity, (float) maxVelocity);
        setMinimumVelocity((float) minVelocity, (float) minVelocity);
        setEdgeType(1);
        setMaximumEdges(Float.MAX_VALUE, Float.MAX_VALUE);
        setRelativeEdges(DEFAULT_RELATIVE_EDGE, DEFAULT_RELATIVE_EDGE);
        setRelativeVelocity(DEFAULT_RELATIVE_VELOCITY, DEFAULT_RELATIVE_VELOCITY);
        setActivationDelay(DEFAULT_ACTIVATION_DELAY);
        setRampUpDuration(500);
        setRampDownDuration(500);
    }


    AutoScrollHelper setEnabled(boolean enabled) {

        if (this.mEnabled && !enabled) {

            requestStop();
        }

        this.mEnabled = enabled;
        return this;
    }


    boolean isEnabled() {

        return this.mEnabled;
    }


    AutoScrollHelper setExclusive(boolean exclusive) {

        this.mExclusive = exclusive;
        return this;
    }


    boolean isExclusive() {

        return this.mExclusive;
    }


    AutoScrollHelper setMaximumVelocity(float horizontalMax, float verticalMax) {

        this.mMaximumVelocity[0] = horizontalMax / 1000.0f;
        this.mMaximumVelocity[1] = verticalMax / 1000.0f;
        return this;
    }


    AutoScrollHelper setMinimumVelocity(float horizontalMin, float verticalMin) {

        this.mMinimumVelocity[0] = horizontalMin / 1000.0f;
        this.mMinimumVelocity[1] = verticalMin / 1000.0f;
        return this;
    }


    AutoScrollHelper setRelativeVelocity(float horizontal, float vertical) {

        this.mRelativeVelocity[0] = horizontal / 1000.0f;
        this.mRelativeVelocity[1] = vertical / 1000.0f;
        return this;
    }


    AutoScrollHelper setEdgeType(int type) {

        this.mEdgeType = type;
        return this;
    }


    AutoScrollHelper setRelativeEdges(float horizontal, float vertical) {

        this.mRelativeEdges[0] = horizontal;
        this.mRelativeEdges[1] = vertical;
        return this;
    }


    AutoScrollHelper setMaximumEdges(float horizontalMax, float verticalMax) {

        this.mMaximumEdges[0] = horizontalMax;
        this.mMaximumEdges[1] = verticalMax;
        return this;
    }


    AutoScrollHelper setActivationDelay(int delayMillis) {

        this.mActivationDelay = delayMillis;
        return this;
    }


    AutoScrollHelper setRampUpDuration(int durationMillis) {

        this.mScroller.setRampUpDuration(durationMillis);
        return this;
    }


    AutoScrollHelper setRampDownDuration(int durationMillis) {

        this.mScroller.setRampDownDuration(durationMillis);
        return this;
    }


    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    @Override // android.view.View.OnTouchListener
    boolean onTouch(View v, MotionEvent event) {

        boolean z = true;
        if (!this.mEnabled) {

            return false;
        }

        switch (MotionEventCompat.getActionMasked(event)) {

            case 0:
                this.mNeedsCancel = true;
                this.mAlreadyDelayed = false;
                this.mScroller.setTargetVelocity(computeTargetVelocity(0, event.getX(), (float) v.getWidth(), (float) this.mTarget.getWidth()), computeTargetVelocity(1, event.getY(), (float) v.getHeight(), (float) this.mTarget.getHeight()));
                if (!this.mAnimating && shouldAnimate()) {

                    startAnimating();
                    break;
                }

                break;
            case 1:
            case 3:
                requestStop();
                break;
            case 2:
                this.mScroller.setTargetVelocity(computeTargetVelocity(0, event.getX(), (float) v.getWidth(), (float) this.mTarget.getWidth()), computeTargetVelocity(1, event.getY(), (float) v.getHeight(), (float) this.mTarget.getHeight()));
                if (!this.mAnimating) {

                    startAnimating();
                    break;
                }

                break;
        }

        if (!this.mExclusive || !this.mAnimating) {

            z = false;
        }

        return z;
    }


    /* JADX INFO: Access modifiers changed from: private */
    boolean shouldAnimate() {

        ClampedScroller scroller = this.mScroller;
        int verticalDirection = scroller.getVerticalDirection();
        int horizontalDirection = scroller.getHorizontalDirection();
        return (verticalDirection != 0 && canTargetScrollVertically(verticalDirection)) || (horizontalDirection != 0 && canTargetScrollHorizontally(horizontalDirection));
    }


    private void startAnimating() {

        if (this.mRunnable == null) {

            this.mRunnable = new ScrollAnimationRunnable();
        }

        this.mAnimating = true;
        this.mNeedsReset = true;
        if (this.mAlreadyDelayed || this.mActivationDelay <= 0) {

            this.mRunnable.run();
        }
 else {

            ViewCompat.postOnAnimationDelayed(this.mTarget, this.mRunnable, (long) this.mActivationDelay);
        }

        this.mAlreadyDelayed = true;
    }


    private void requestStop() {

        if (this.mNeedsReset) {

            this.mAnimating = false;
        }
 else {

            this.mScroller.requestStop();
        }

    }


    private float computeTargetVelocity(int direction, float coordinate, float srcSize, float dstSize) {

        float value = getEdgeValue(this.mRelativeEdges[direction], srcSize, this.mMaximumEdges[direction], coordinate);
        if (value == 0.0f) {

            return 0.0f;
        }

        float relativeVelocity = this.mRelativeVelocity[direction];
        float minimumVelocity = this.mMinimumVelocity[direction];
        float maximumVelocity = this.mMaximumVelocity[direction];
        float targetVelocity = relativeVelocity * dstSize;
        if (value > 0.0f) {

            return constrain(value * targetVelocity, minimumVelocity, maximumVelocity);
        }

        return -constrain((-value) * targetVelocity, minimumVelocity, maximumVelocity);
    }


    private float getEdgeValue(float relativeValue, float size, float maxValue, float current) {

        float interpolated;
        float edgeSize = constrain(relativeValue * size, 0.0f, maxValue);
        float value = constrainEdgeValue(size - current, edgeSize) - constrainEdgeValue(current, edgeSize);
        if (value < 0.0f) {

            interpolated = -this.mEdgeInterpolator.getInterpolation(-value);
        }
 else if (value <= 0.0f) {

            return 0.0f;
        }
 else {

            interpolated = this.mEdgeInterpolator.getInterpolation(value);
        }

        return constrain(interpolated, -1.0f, (float) DEFAULT_RELATIVE_VELOCITY);
    }


    private float constrainEdgeValue(float current, float leading) {

        if (leading == 0.0f) {

            return 0.0f;
        }

        switch (this.mEdgeType) {

            case 0:
            case 1:
                if (current >= leading) {

                    return 0.0f;
                }

                if (current >= 0.0f) {

                    return DEFAULT_RELATIVE_VELOCITY - (current / leading);
                }

                if (!this.mAnimating || this.mEdgeType != 1) {

                    return 0.0f;
                }

                return DEFAULT_RELATIVE_VELOCITY;
            case 2:
                if (current < 0.0f) {

                    return current / (-leading);
                }

                return 0.0f;
            default:
                return 0.0f;
        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    static int constrain(int value, int min, int max) {

        if (value > max) {

            return max;
        }

        if (value < min) {

            return min;
        }

        return value;
    }


    /* JADX INFO: Access modifiers changed from: private */
    static float constrain(float value, float min, float max) {

        if (value > max) {

            return max;
        }

        if (value < min) {

            return min;
        }

        return value;
    }


    /* JADX INFO: Access modifiers changed from: private */
    void cancelTargetTouch() {

        long eventTime = SystemClock.uptimeMillis();
        MotionEvent cancel = MotionEvent.obtain(eventTime, eventTime, 3, 0.0f, 0.0f, 0);
        this.mTarget.onTouchEvent(cancel);
        cancel.recycle();
    }


    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    class ScrollAnimationRunnable implements Runnable {

        private ScrollAnimationRunnable() {

        }


        @Override // java.lang.Runnable
        void run() {

            if (AutoScrollHelper.this.mAnimating) {

                if (AutoScrollHelper.this.mNeedsReset) {

                    AutoScrollHelper.this.mNeedsReset = false;
                    AutoScrollHelper.this.mScroller.start();
                }

                ClampedScroller scroller = AutoScrollHelper.this.mScroller;
                if (scroller.isFinished() || !AutoScrollHelper.this.shouldAnimate()) {

                    AutoScrollHelper.this.mAnimating = false;
                    return;
                }

                if (AutoScrollHelper.this.mNeedsCancel) {

                    AutoScrollHelper.this.mNeedsCancel = false;
                    AutoScrollHelper.this.cancelTargetTouch();
                }

                scroller.computeScrollDelta();
                AutoScrollHelper.this.scrollTargetBy(scroller.getDeltaX(), scroller.getDeltaY());
                ViewCompat.postOnAnimation(AutoScrollHelper.this.mTarget, this);
            }

        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    static class ClampedScroller {

        private int mEffectiveRampDown;
        private int mRampDownDuration;
        private int mRampUpDuration;
        private float mStopValue;
        private float mTargetVelocityX;
        private float mTargetVelocityY;
        private long mStartTime = Long.MIN_VALUE;
        private long mStopTime = -1;
        private long mDeltaTime = 0;
        private int mDeltaX = 0;
        private int mDeltaY = 0;

        void setRampUpDuration(int durationMillis) {

            this.mRampUpDuration = durationMillis;
        }


        void setRampDownDuration(int durationMillis) {

            this.mRampDownDuration = durationMillis;
        }


        void start() {

            this.mStartTime = AnimationUtils.currentAnimationTimeMillis();
            this.mStopTime = -1;
            this.mDeltaTime = this.mStartTime;
            this.mStopValue = 0.5f;
            this.mDeltaX = 0;
            this.mDeltaY = 0;
        }


        void requestStop() {

            long currentTime = AnimationUtils.currentAnimationTimeMillis();
            this.mEffectiveRampDown = AutoScrollHelper.constrain((int) (currentTime - this.mStartTime), 0, this.mRampDownDuration);
            this.mStopValue = getValueAt(currentTime);
            this.mStopTime = currentTime;
        }


        boolean isFinished() {

            return this.mStopTime > 0 && AnimationUtils.currentAnimationTimeMillis() > this.mStopTime + ((long) this.mEffectiveRampDown);
        }


        private float getValueAt(long currentTime) {

            if (currentTime < this.mStartTime) {

                return 0.0f;
            }

            if (this.mStopTime < 0 || currentTime < this.mStopTime) {

                return AutoScrollHelper.constrain(((float) (currentTime - this.mStartTime)) / ((float) this.mRampUpDuration), 0.0f, (float) AutoScrollHelper.DEFAULT_RELATIVE_VELOCITY) * 0.5f;
            }

            long elapsedSinceEnd = currentTime - this.mStopTime;
            return (AutoScrollHelper.constrain(((float) elapsedSinceEnd) / ((float) this.mEffectiveRampDown), 0.0f, (float) AutoScrollHelper.DEFAULT_RELATIVE_VELOCITY) * this.mStopValue) + (AutoScrollHelper.DEFAULT_RELATIVE_VELOCITY - this.mStopValue);
        }


        private float interpolateValue(float value) {

            return (-4.0f * value * value) + (4.0f * value);
        }


        void computeScrollDelta() {

            if (this.mDeltaTime == 0) {

                throw new RuntimeException("Cannot compute scroll delta before calling start()");
            }

            long currentTime = AnimationUtils.currentAnimationTimeMillis();
            float scale = interpolateValue(getValueAt(currentTime));
            long elapsedSinceDelta = currentTime - this.mDeltaTime;
            this.mDeltaTime = currentTime;
            this.mDeltaX = (int) (((float) elapsedSinceDelta) * scale * this.mTargetVelocityX);
            this.mDeltaY = (int) (((float) elapsedSinceDelta) * scale * this.mTargetVelocityY);
        }


        void setTargetVelocity(float x, float y) {

            this.mTargetVelocityX = x;
            this.mTargetVelocityY = y;
        }


        int getHorizontalDirection() {

            return (int) (this.mTargetVelocityX / Math.abs(this.mTargetVelocityX));
        }


        int getVerticalDirection() {

            return (int) (this.mTargetVelocityY / Math.abs(this.mTargetVelocityY));
        }


        int getDeltaX() {

            return this.mDeltaX;
        }


        int getDeltaY() {

            return this.mDeltaY;
        }

    }

}

