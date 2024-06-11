/* Auto-generated JavaScript code */
package android.support.v4.widget;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.support.annotation.NonNull;
import android.support.v4.view.ViewCompat;
import android.support.v4.view.animation.FastOutSlowInInterpolator;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.Interpolator;
import android.view.animation.LinearInterpolator;
import android.view.animation.Transformation;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: classes.dex */
class MaterialProgressDrawable extends Drawable implements Animatable {

    private static final int ANIMATION_DURATION = 1332;
    private static final int ARROW_HEIGHT = 5;
    private static final int ARROW_HEIGHT_LARGE = 6;
    private static final float ARROW_OFFSET_ANGLE = 5.0f;
    private static final int ARROW_WIDTH = 10;
    private static final int ARROW_WIDTH_LARGE = 12;
    private static final float CENTER_RADIUS = 8.75f;
    private static final float CENTER_RADIUS_LARGE = 12.5f;
    private static final int CIRCLE_DIAMETER = 40;
    private static final int CIRCLE_DIAMETER_LARGE = 56;
    private static final float COLOR_START_DELAY_OFFSET = 0.75f;
    static final int DEFAULT = 1;
    private static final float END_TRIM_START_DELAY_OFFSET = 0.5f;
    private static final float FULL_ROTATION = 1080.0f;
    static final int LARGE = 0;
    private static final Interpolator LINEAR_INTERPOLATOR = new LinearInterpolator();
    private static final Interpolator MATERIAL_INTERPOLATOR = new FastOutSlowInInterpolator();
    private static final float MAX_PROGRESS_ARC = 0.8f;
    private static final float NUM_POINTS = 5.0f;
    private static final float START_TRIM_DURATION_OFFSET = 0.5f;
    private static final float STROKE_WIDTH = 2.5f;
    private static final float STROKE_WIDTH_LARGE = 3.0f;
    private Animation mAnimation;
    boolean mFinishing;
    private double mHeight;
    private View mParent;
    private Resources mResources;
    private float mRotation;
    private float mRotationCount;
    private double mWidth;
    private final int[] COLORS = {
ViewCompat.MEASURED_STATE_MASK}
;
    private final ArrayList<Animation> mAnimators = new ArrayList<>();
    private final Drawable.Callback mCallback = new Drawable.Callback() {
 // from class: android.support.v4.widget.MaterialProgressDrawable.3
        @Override // android.graphics.drawable.Drawable.Callback
        void invalidateDrawable(Drawable d) {

            MaterialProgressDrawable.this.invalidateSelf();
        }


        @Override // android.graphics.drawable.Drawable.Callback
        void scheduleDrawable(Drawable d, Runnable what, long when) {

            MaterialProgressDrawable.this.scheduleSelf(what, when);
        }


        @Override // android.graphics.drawable.Drawable.Callback
        void unscheduleDrawable(Drawable d, Runnable what) {

            MaterialProgressDrawable.this.unscheduleSelf(what);
        }

    }
;
    private final Ring mRing = new Ring(this.mCallback);

    @Retention(RetentionPolicy.CLASS)
    /* loaded from: classes.dex */
    @interface ProgressDrawableSize {

    }


    MaterialProgressDrawable(Context context, View parent) {

        this.mParent = parent;
        this.mResources = context.getResources();
        this.mRing.setColors(this.COLORS);
        updateSizes(1);
        setupAnimators();
    }


    private void setSizeParameters(double progressCircleWidth, double progressCircleHeight, double centerRadius, double strokeWidth, float arrowWidth, float arrowHeight) {

        Ring ring = this.mRing;
        float screenDensity = this.mResources.getDisplayMetrics().density;
        this.mWidth = ((double) screenDensity) * progressCircleWidth;
        this.mHeight = ((double) screenDensity) * progressCircleHeight;
        ring.setStrokeWidth(((float) strokeWidth) * screenDensity);
        ring.setCenterRadius(((double) screenDensity) * centerRadius);
        ring.setColorIndex(0);
        ring.setArrowDimensions(arrowWidth * screenDensity, arrowHeight * screenDensity);
        ring.setInsets((int) this.mWidth, (int) this.mHeight);
    }


    void updateSizes(@ProgressDrawableSize int size) {

        if (size == 0) {

            setSizeParameters(56.0d, 56.0d, 12.5d, 3.0d, 12.0f, 6.0f);
        }
 else {

            setSizeParameters(40.0d, 40.0d, 8.75d, 2.5d, 10.0f, 5.0f);
        }

    }


    void showArrow(boolean show) {

        this.mRing.setShowArrow(show);
    }


    void setArrowScale(float scale) {

        this.mRing.setArrowScale(scale);
    }


    void setStartEndTrim(float startAngle, float endAngle) {

        this.mRing.setStartTrim(startAngle);
        this.mRing.setEndTrim(endAngle);
    }


    void setProgressRotation(float rotation) {

        this.mRing.setRotation(rotation);
    }


    void setBackgroundColor(int color) {

        this.mRing.setBackgroundColor(color);
    }


    void setColorSchemeColors(int... colors) {

        this.mRing.setColors(colors);
        this.mRing.setColorIndex(0);
    }


    @Override // android.graphics.drawable.Drawable
    int getIntrinsicHeight() {

        return (int) this.mHeight;
    }


    @Override // android.graphics.drawable.Drawable
    int getIntrinsicWidth() {

        return (int) this.mWidth;
    }


    @Override // android.graphics.drawable.Drawable
    void draw(Canvas c) {

        Rect bounds = getBounds();
        int saveCount = c.save();
        c.rotate(this.mRotation, bounds.exactCenterX(), bounds.exactCenterY());
        this.mRing.draw(c, bounds);
        c.restoreToCount(saveCount);
    }


    @Override // android.graphics.drawable.Drawable
    void setAlpha(int alpha) {

        this.mRing.setAlpha(alpha);
    }


    @Override // android.graphics.drawable.Drawable
    int getAlpha() {

        return this.mRing.getAlpha();
    }


    @Override // android.graphics.drawable.Drawable
    void setColorFilter(ColorFilter colorFilter) {

        this.mRing.setColorFilter(colorFilter);
    }


    void setRotation(float rotation) {

        this.mRotation = rotation;
        invalidateSelf();
    }


    private float getRotation() {

        return this.mRotation;
    }


    @Override // android.graphics.drawable.Drawable
    int getOpacity() {

        return -3;
    }


    @Override // android.graphics.drawable.Animatable
    boolean isRunning() {

        ArrayList<Animation> animators = this.mAnimators;
        int N = animators.size();
        for (int i = 0; i < N; i++) {

            Animation animator = animators.get(i);
            if (animator.hasStarted() && !animator.hasEnded()) {

                return true;
            }

        }

        return false;
    }


    @Override // android.graphics.drawable.Animatable
    void start() {

        this.mAnimation.reset();
        this.mRing.storeOriginals();
        if (this.mRing.getEndTrim() != this.mRing.getStartTrim()) {

            this.mFinishing = true;
            this.mAnimation.setDuration(666);
            this.mParent.startAnimation(this.mAnimation);
            return;
        }

        this.mRing.setColorIndex(0);
        this.mRing.resetOriginals();
        this.mAnimation.setDuration(1332);
        this.mParent.startAnimation(this.mAnimation);
    }


    @Override // android.graphics.drawable.Animatable
    void stop() {

        this.mParent.clearAnimation();
        setRotation(0.0f);
        this.mRing.setShowArrow(false);
        this.mRing.setColorIndex(0);
        this.mRing.resetOriginals();
    }


    /* JADX INFO: Access modifiers changed from: private */
    float getMinProgressArc(Ring ring) {

        return (float) Math.toRadians(((double) ring.getStrokeWidth()) / (6.283185307179586d * ring.getCenterRadius()));
    }


    private int evaluateColorChange(float fraction, int startValue, int endValue) {

        int startInt = Integer.valueOf(startValue).intValue();
        int startA = (startInt >> 24) & 255;
        int startR = (startInt >> 16) & 255;
        int startG = (startInt >> 8) & 255;
        int startB = startInt & 255;
        int endInt = Integer.valueOf(endValue).intValue();
        return ((((int) (((float) (((endInt >> 24) & 255) - startA)) * fraction)) + startA) << 24) | ((((int) (((float) (((endInt >> 16) & 255) - startR)) * fraction)) + startR) << 16) | ((((int) (((float) (((endInt >> 8) & 255) - startG)) * fraction)) + startG) << 8) | (((int) (((float) ((endInt & 255) - startB)) * fraction)) + startB);
    }


    /* JADX INFO: Access modifiers changed from: private */
    void updateRingColor(float interpolatedTime, Ring ring) {

        if (interpolatedTime > COLOR_START_DELAY_OFFSET) {

            ring.setColor(evaluateColorChange((interpolatedTime - COLOR_START_DELAY_OFFSET) / 0.25f, ring.getStartingColor(), ring.getNextColor()));
        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    void applyFinishTranslation(float interpolatedTime, Ring ring) {

        updateRingColor(interpolatedTime, ring);
        float targetRotation = (float) (Math.floor((double) (ring.getStartingRotation() / MAX_PROGRESS_ARC)) + 1.0d);
        ring.setStartTrim(ring.getStartingStartTrim() + (((ring.getStartingEndTrim() - getMinProgressArc(ring)) - ring.getStartingStartTrim()) * interpolatedTime));
        ring.setEndTrim(ring.getStartingEndTrim());
        ring.setRotation(ring.getStartingRotation() + ((targetRotation - ring.getStartingRotation()) * interpolatedTime));
    }


    private void setupAnimators() {

        final Ring ring = this.mRing;
        Animation animation = new Animation() {
 // from class: android.support.v4.widget.MaterialProgressDrawable.1
            @Override // android.view.animation.Animation
            void applyTransformation(float interpolatedTime, Transformation t) {

                if (MaterialProgressDrawable.this.mFinishing) {

                    MaterialProgressDrawable.this.applyFinishTranslation(interpolatedTime, ring);
                    return;
                }

                float minProgressArc = MaterialProgressDrawable.this.getMinProgressArc(ring);
                float startingEndTrim = ring.getStartingEndTrim();
                float startingTrim = ring.getStartingStartTrim();
                float startingRotation = ring.getStartingRotation();
                MaterialProgressDrawable.this.updateRingColor(interpolatedTime, ring);
                if (interpolatedTime <= 0.5f) {

                    ring.setStartTrim(startingTrim + ((MaterialProgressDrawable.MAX_PROGRESS_ARC - minProgressArc) * MaterialProgressDrawable.MATERIAL_INTERPOLATOR.getInterpolation(interpolatedTime / 0.5f)));
                }

                if (interpolatedTime > 0.5f) {

                    ring.setEndTrim(startingEndTrim + (MaterialProgressDrawable.MATERIAL_INTERPOLATOR.getInterpolation((interpolatedTime - 0.5f) / 0.5f) * (MaterialProgressDrawable.MAX_PROGRESS_ARC - minProgressArc)));
                }

                ring.setRotation(startingRotation + (0.25f * interpolatedTime));
                MaterialProgressDrawable.this.setRotation((216.0f * interpolatedTime) + (MaterialProgressDrawable.FULL_ROTATION * (MaterialProgressDrawable.this.mRotationCount / 5.0f)));
            }

        }
;
        animation.setRepeatCount(-1);
        animation.setRepeatMode(1);
        animation.setInterpolator(LINEAR_INTERPOLATOR);
        animation.setAnimationListener(new Animation.AnimationListener() {
 // from class: android.support.v4.widget.MaterialProgressDrawable.2
            @Override // android.view.animation.Animation.AnimationListener
            void onAnimationStart(Animation animation2) {

                MaterialProgressDrawable.this.mRotationCount = 0.0f;
            }


            @Override // android.view.animation.Animation.AnimationListener
            void onAnimationEnd(Animation animation2) {

            }


            @Override // android.view.animation.Animation.AnimationListener
            void onAnimationRepeat(Animation animation2) {

                ring.storeOriginals();
                ring.goToNextColor();
                ring.setStartTrim(ring.getEndTrim());
                if (MaterialProgressDrawable.this.mFinishing) {

                    MaterialProgressDrawable.this.mFinishing = false;
                    animation2.setDuration(1332);
                    ring.setShowArrow(false);
                    return;
                }

                MaterialProgressDrawable.this.mRotationCount = (MaterialProgressDrawable.this.mRotationCount + 1.0f) % 5.0f;
            }

        }
);
        this.mAnimation = animation;
    }


    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    static class Ring {

        private int mAlpha;
        private Path mArrow;
        private int mArrowHeight;
        private float mArrowScale;
        private int mArrowWidth;
        private int mBackgroundColor;
        private final Drawable.Callback mCallback;
        private int mColorIndex;
        private int[] mColors;
        private int mCurrentColor;
        private double mRingCenterRadius;
        private boolean mShowArrow;
        private float mStartingEndTrim;
        private float mStartingRotation;
        private float mStartingStartTrim;
        private final RectF mTempBounds = new RectF();
        private final Paint mPaint = new Paint();
        private final Paint mArrowPaint = new Paint();
        private float mStartTrim = 0.0f;
        private float mEndTrim = 0.0f;
        private float mRotation = 0.0f;
        private float mStrokeWidth = 5.0f;
        private float mStrokeInset = MaterialProgressDrawable.STROKE_WIDTH;
        private final Paint mCirclePaint = new Paint(1);

        Ring(Drawable.Callback callback) {

            this.mCallback = callback;
            this.mPaint.setStrokeCap(Paint.Cap.SQUARE);
            this.mPaint.setAntiAlias(true);
            this.mPaint.setStyle(Paint.Style.STROKE);
            this.mArrowPaint.setStyle(Paint.Style.FILL);
            this.mArrowPaint.setAntiAlias(true);
        }


        void setBackgroundColor(int color) {

            this.mBackgroundColor = color;
        }


        void setArrowDimensions(float width, float height) {

            this.mArrowWidth = (int) width;
            this.mArrowHeight = (int) height;
        }


        void draw(Canvas c, Rect bounds) {

            RectF arcBounds = this.mTempBounds;
            arcBounds.set(bounds);
            arcBounds.inset(this.mStrokeInset, this.mStrokeInset);
            float startAngle = (this.mStartTrim + this.mRotation) * 360.0f;
            float sweepAngle = ((this.mEndTrim + this.mRotation) * 360.0f) - startAngle;
            this.mPaint.setColor(this.mCurrentColor);
            c.drawArc(arcBounds, startAngle, sweepAngle, false, this.mPaint);
            drawTriangle(c, startAngle, sweepAngle, bounds);
            if (this.mAlpha < 255) {

                this.mCirclePaint.setColor(this.mBackgroundColor);
                this.mCirclePaint.setAlpha(255 - this.mAlpha);
                c.drawCircle(bounds.exactCenterX(), bounds.exactCenterY(), (float) (bounds.width() / 2), this.mCirclePaint);
            }

        }


        private void drawTriangle(Canvas c, float startAngle, float sweepAngle, Rect bounds) {

            if (this.mShowArrow) {

                if (this.mArrow == null) {

                    this.mArrow = new Path();
                    this.mArrow.setFillType(Path.FillType.EVEN_ODD);
                }
 else {

                    this.mArrow.reset();
                }

                float inset = ((float) (((int) this.mStrokeInset) / 2)) * this.mArrowScale;
                float x = (float) ((this.mRingCenterRadius * Math.cos(0.0d)) + ((double) bounds.exactCenterX()));
                float y = (float) ((this.mRingCenterRadius * Math.sin(0.0d)) + ((double) bounds.exactCenterY()));
                this.mArrow.moveTo(0.0f, 0.0f);
                this.mArrow.lineTo(((float) this.mArrowWidth) * this.mArrowScale, 0.0f);
                this.mArrow.lineTo((((float) this.mArrowWidth) * this.mArrowScale) / 2.0f, ((float) this.mArrowHeight) * this.mArrowScale);
                this.mArrow.offset(x - inset, y);
                this.mArrow.close();
                this.mArrowPaint.setColor(this.mCurrentColor);
                c.rotate((startAngle + sweepAngle) - 5.0f, bounds.exactCenterX(), bounds.exactCenterY());
                c.drawPath(this.mArrow, this.mArrowPaint);
            }

        }


        void setColors(@NonNull int[] colors) {

            this.mColors = colors;
            setColorIndex(0);
        }


        void setColor(int color) {

            this.mCurrentColor = color;
        }


        void setColorIndex(int index) {

            this.mColorIndex = index;
            this.mCurrentColor = this.mColors[this.mColorIndex];
        }


        int getNextColor() {

            return this.mColors[getNextColorIndex()];
        }


        private int getNextColorIndex() {

            return (this.mColorIndex + 1) % this.mColors.length;
        }


        void goToNextColor() {

            setColorIndex(getNextColorIndex());
        }


        void setColorFilter(ColorFilter filter) {

            this.mPaint.setColorFilter(filter);
            invalidateSelf();
        }


        void setAlpha(int alpha) {

            this.mAlpha = alpha;
        }


        int getAlpha() {

            return this.mAlpha;
        }


        void setStrokeWidth(float strokeWidth) {

            this.mStrokeWidth = strokeWidth;
            this.mPaint.setStrokeWidth(strokeWidth);
            invalidateSelf();
        }


        float getStrokeWidth() {

            return this.mStrokeWidth;
        }


        void setStartTrim(float startTrim) {

            this.mStartTrim = startTrim;
            invalidateSelf();
        }


        float getStartTrim() {

            return this.mStartTrim;
        }


        float getStartingStartTrim() {

            return this.mStartingStartTrim;
        }


        float getStartingEndTrim() {

            return this.mStartingEndTrim;
        }


        int getStartingColor() {

            return this.mColors[this.mColorIndex];
        }


        void setEndTrim(float endTrim) {

            this.mEndTrim = endTrim;
            invalidateSelf();
        }


        float getEndTrim() {

            return this.mEndTrim;
        }


        void setRotation(float rotation) {

            this.mRotation = rotation;
            invalidateSelf();
        }


        float getRotation() {

            return this.mRotation;
        }


        void setInsets(int width, int height) {

            float insets;
            float minEdge = (float) Math.min(width, height);
            if (this.mRingCenterRadius <= 0.0d || minEdge < 0.0f) {

                insets = (float) Math.ceil((double) (this.mStrokeWidth / 2.0f));
            }
 else {

                insets = (float) (((double) (minEdge / 2.0f)) - this.mRingCenterRadius);
            }

            this.mStrokeInset = insets;
        }


        float getInsets() {

            return this.mStrokeInset;
        }


        void setCenterRadius(double centerRadius) {

            this.mRingCenterRadius = centerRadius;
        }


        double getCenterRadius() {

            return this.mRingCenterRadius;
        }


        void setShowArrow(boolean show) {

            if (this.mShowArrow != show) {

                this.mShowArrow = show;
                invalidateSelf();
            }

        }


        void setArrowScale(float scale) {

            if (scale != this.mArrowScale) {

                this.mArrowScale = scale;
                invalidateSelf();
            }

        }


        float getStartingRotation() {

            return this.mStartingRotation;
        }


        void storeOriginals() {

            this.mStartingStartTrim = this.mStartTrim;
            this.mStartingEndTrim = this.mEndTrim;
            this.mStartingRotation = this.mRotation;
        }


        void resetOriginals() {

            this.mStartingStartTrim = 0.0f;
            this.mStartingEndTrim = 0.0f;
            this.mStartingRotation = 0.0f;
            setStartTrim(0.0f);
            setEndTrim(0.0f);
            setRotation(0.0f);
        }


        private void invalidateSelf() {

            this.mCallback.invalidateDrawable(null);
        }

    }

}

