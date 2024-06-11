/* Auto-generated JavaScript code */
package android.support.v4.widget;

import android.content.Context;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.os.Build;
import android.support.annotation.ColorInt;
import android.support.annotation.ColorRes;
import android.support.v4.view.MotionEventCompat;
import android.support.v4.view.NestedScrollingChild;
import android.support.v4.view.NestedScrollingChildHelper;
import android.support.v4.view.NestedScrollingParent;
import android.support.v4.view.NestedScrollingParentHelper;
import android.support.v4.view.ViewCompat;
import android.util.AttributeSet;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewConfiguration;
import android.view.ViewGroup;
import android.view.animation.Animation;
import android.view.animation.DecelerateInterpolator;
import android.view.animation.Transformation;
import android.widget.AbsListView;
/* loaded from: classes.dex */
class SwipeRefreshLayout extends ViewGroup implements NestedScrollingParent, NestedScrollingChild {

    private static final int ALPHA_ANIMATION_DURATION = 300;
    private static final int ANIMATE_TO_START_DURATION = 200;
    private static final int ANIMATE_TO_TRIGGER_DURATION = 200;
    private static final int CIRCLE_BG_LIGHT = -328966;
    private static final int CIRCLE_DIAMETER = 40;
    private static final int CIRCLE_DIAMETER_LARGE = 56;
    private static final float DECELERATE_INTERPOLATION_FACTOR = 2.0f;
    static final int DEFAULT = 1;
    private static final int DEFAULT_CIRCLE_TARGET = 64;
    private static final float DRAG_RATE = 0.5f;
    private static final int INVALID_POINTER = -1;
    static final int LARGE = 0;
    private static final int MAX_ALPHA = 255;
    private static final float MAX_PROGRESS_ANGLE = 0.8f;
    private static final int SCALE_DOWN_DURATION = 150;
    private static final int STARTING_PROGRESS_ALPHA = 76;
    private int mActivePointerId;
    private Animation mAlphaMaxAnimation;
    private Animation mAlphaStartAnimation;
    private final Animation mAnimateToCorrectPosition;
    private final Animation mAnimateToStartPosition;
    private int mCircleHeight;
    private CircleImageView mCircleView;
    private int mCircleViewIndex;
    private int mCircleWidth;
    private int mCurrentTargetOffsetTop;
    private final DecelerateInterpolator mDecelerateInterpolator;
    protected int mFrom;
    private float mInitialDownY;
    private float mInitialMotionY;
    private boolean mIsBeingDragged;
    private OnRefreshListener mListener;
    private int mMediumAnimationDuration;
    private final NestedScrollingChildHelper mNestedScrollingChildHelper;
    private final NestedScrollingParentHelper mNestedScrollingParentHelper;
    private boolean mNotify;
    private boolean mOriginalOffsetCalculated;
    protected int mOriginalOffsetTop;
    private final int[] mParentScrollConsumed;
    private final Animation mPeek;
    private MaterialProgressDrawable mProgress;
    private Animation.AnimationListener mRefreshListener;
    private boolean mRefreshing;
    private boolean mReturningToStart;
    private boolean mScale;
    private Animation mScaleAnimation;
    private Animation mScaleDownAnimation;
    private Animation mScaleDownToStartAnimation;
    private float mSpinnerFinalOffset;
    private float mStartingScale;
    private View mTarget;
    private float mTotalDragDistance;
    private float mTotalUnconsumed;
    private int mTouchSlop;
    private boolean mUsingCustomStart;
    private static final function LOG_TAG = SwipeRefreshLayout.class.getSimpleName();
    private static final int[] LAYOUT_ATTRS = {
16842766}
;

    /* loaded from: classes.dex */
    interface OnRefreshListener {

        void onRefresh();
    }


    /* JADX INFO: Access modifiers changed from: private */
    void setColorViewAlpha(int targetAlpha) {

        this.mCircleView.getBackground().setAlpha(targetAlpha);
        this.mProgress.setAlpha(targetAlpha);
    }


    void setProgressViewOffset(boolean scale, int start, int end) {

        this.mScale = scale;
        this.mCircleView.setVisibility(8);
        this.mCurrentTargetOffsetTop = start;
        this.mOriginalOffsetTop = start;
        this.mSpinnerFinalOffset = (float) end;
        this.mUsingCustomStart = true;
        this.mCircleView.invalidate();
    }


    void setProgressViewEndTarget(boolean scale, int end) {

        this.mSpinnerFinalOffset = (float) end;
        this.mScale = scale;
        this.mCircleView.invalidate();
    }


    void setSize(int size) {

        if (size == 0 || size == 1) {

            DisplayMetrics metrics = getResources().getDisplayMetrics();
            if (size == 0) {

                int i = (int) (56.0f * metrics.density);
                this.mCircleWidth = i;
                this.mCircleHeight = i;
            }
 else {

                int i2 = (int) (40.0f * metrics.density);
                this.mCircleWidth = i2;
                this.mCircleHeight = i2;
            }

            this.mCircleView.setImageDrawable(null);
            this.mProgress.updateSizes(size);
            this.mCircleView.setImageDrawable(this.mProgress);
        }

    }


    SwipeRefreshLayout(Context context) {

        this(context, null);
    }


    SwipeRefreshLayout(Context context, AttributeSet attrs) {

        super(context, attrs);
        this.mRefreshing = false;
        this.mTotalDragDistance = -1.0f;
        this.mParentScrollConsumed = new int[2];
        this.mOriginalOffsetCalculated = false;
        this.mActivePointerId = -1;
        this.mCircleViewIndex = -1;
        this.mRefreshListener = new Animation.AnimationListener() {
 // from class: android.support.v4.widget.SwipeRefreshLayout.1
            @Override // android.view.animation.Animation.AnimationListener
            void onAnimationStart(Animation animation) {

            }


            @Override // android.view.animation.Animation.AnimationListener
            void onAnimationRepeat(Animation animation) {

            }


            @Override // android.view.animation.Animation.AnimationListener
            void onAnimationEnd(Animation animation) {

                if (SwipeRefreshLayout.this.mRefreshing) {

                    SwipeRefreshLayout.this.mProgress.setAlpha(255);
                    SwipeRefreshLayout.this.mProgress.start();
                    if (SwipeRefreshLayout.this.mNotify && SwipeRefreshLayout.this.mListener != null) {

                        SwipeRefreshLayout.this.mListener.onRefresh();
                    }

                }
 else {

                    SwipeRefreshLayout.this.mProgress.stop();
                    SwipeRefreshLayout.this.mCircleView.setVisibility(8);
                    SwipeRefreshLayout.this.setColorViewAlpha(255);
                    if (SwipeRefreshLayout.this.mScale) {

                        SwipeRefreshLayout.this.setAnimationProgress(0.0f);
                    }
 else {

                        SwipeRefreshLayout.this.setTargetOffsetTopAndBottom(SwipeRefreshLayout.this.mOriginalOffsetTop - SwipeRefreshLayout.this.mCurrentTargetOffsetTop, true);
                    }

                }

                SwipeRefreshLayout.this.mCurrentTargetOffsetTop = SwipeRefreshLayout.this.mCircleView.getTop();
            }

        }
;
        this.mAnimateToCorrectPosition = new Animation() {
 // from class: android.support.v4.widget.SwipeRefreshLayout.6
            @Override // android.view.animation.Animation
            void applyTransformation(float interpolatedTime, Transformation t) {

                int endTarget;
                if (!SwipeRefreshLayout.this.mUsingCustomStart) {

                    endTarget = (int) (SwipeRefreshLayout.this.mSpinnerFinalOffset - ((float) Math.abs(SwipeRefreshLayout.this.mOriginalOffsetTop)));
                }
 else {

                    endTarget = (int) SwipeRefreshLayout.this.mSpinnerFinalOffset;
                }

                SwipeRefreshLayout.this.setTargetOffsetTopAndBottom((SwipeRefreshLayout.this.mFrom + ((int) (((float) (endTarget - SwipeRefreshLayout.this.mFrom)) * interpolatedTime))) - SwipeRefreshLayout.this.mCircleView.getTop(), false);
                SwipeRefreshLayout.this.mProgress.setArrowScale(1.0f - interpolatedTime);
            }

        }
;
        this.mPeek = new Animation() {
 // from class: android.support.v4.widget.SwipeRefreshLayout.7
            @Override // android.view.animation.Animation
            void applyTransformation(float interpolatedTime, Transformation t) {

                int endTarget;
                if (!SwipeRefreshLayout.this.mUsingCustomStart) {

                    endTarget = (int) (SwipeRefreshLayout.this.mSpinnerFinalOffset - ((float) Math.abs(SwipeRefreshLayout.this.mOriginalOffsetTop)));
                }
 else {

                    endTarget = (int) SwipeRefreshLayout.this.mSpinnerFinalOffset;
                }

                SwipeRefreshLayout.this.setTargetOffsetTopAndBottom((SwipeRefreshLayout.this.mFrom + ((int) (((float) (endTarget - SwipeRefreshLayout.this.mFrom)) * interpolatedTime))) - SwipeRefreshLayout.this.mCircleView.getTop(), false);
                SwipeRefreshLayout.this.mProgress.setArrowScale(1.0f - interpolatedTime);
            }

        }
;
        this.mAnimateToStartPosition = new Animation() {
 // from class: android.support.v4.widget.SwipeRefreshLayout.8
            @Override // android.view.animation.Animation
            void applyTransformation(float interpolatedTime, Transformation t) {

                SwipeRefreshLayout.this.moveToStart(interpolatedTime);
            }

        }
;
        this.mTouchSlop = ViewConfiguration.get(context).getScaledTouchSlop();
        this.mMediumAnimationDuration = getResources().getInteger(17694721);
        setWillNotDraw(false);
        this.mDecelerateInterpolator = new DecelerateInterpolator(DECELERATE_INTERPOLATION_FACTOR);
        TypedArray a = context.obtainStyledAttributes(attrs, LAYOUT_ATTRS);
        setEnabled(a.getBoolean(0, true));
        a.recycle();
        DisplayMetrics metrics = getResources().getDisplayMetrics();
        this.mCircleWidth = (int) (metrics.density * 40.0f);
        this.mCircleHeight = (int) (metrics.density * 40.0f);
        createProgressView();
        ViewCompat.setChildrenDrawingOrderEnabled(this, true);
        this.mSpinnerFinalOffset = 64.0f * metrics.density;
        this.mTotalDragDistance = this.mSpinnerFinalOffset;
        this.mNestedScrollingParentHelper = new NestedScrollingParentHelper(this);
        this.mNestedScrollingChildHelper = new NestedScrollingChildHelper(this);
        setNestedScrollingEnabled(true);
    }


    @Override // android.view.ViewGroup
    protected int getChildDrawingOrder(int childCount, int i) {

        if (this.mCircleViewIndex < 0) {

            return i;
        }

        if (i == childCount - 1) {

            return this.mCircleViewIndex;
        }

        if (i >= this.mCircleViewIndex) {

            return i + 1;
        }

        return i;
    }


    private void createProgressView() {

        this.mCircleView = new CircleImageView(getContext(), CIRCLE_BG_LIGHT, 20.0f);
        this.mProgress = new MaterialProgressDrawable(getContext(), this);
        this.mProgress.setBackgroundColor(CIRCLE_BG_LIGHT);
        this.mCircleView.setImageDrawable(this.mProgress);
        this.mCircleView.setVisibility(8);
        addView(this.mCircleView);
    }


    void setOnRefreshListener(OnRefreshListener listener) {

        this.mListener = listener;
    }


    private boolean isAlphaUsedForScale() {

        return Build.VERSION.SDK_INT < 11;
    }


    void setRefreshing(boolean refreshing) {

        int endTarget;
        if (!refreshing || this.mRefreshing == refreshing) {

            setRefreshing(refreshing, false);
            return;
        }

        this.mRefreshing = refreshing;
        if (!this.mUsingCustomStart) {

            endTarget = (int) (this.mSpinnerFinalOffset + ((float) this.mOriginalOffsetTop));
        }
 else {

            endTarget = (int) this.mSpinnerFinalOffset;
        }

        setTargetOffsetTopAndBottom(endTarget - this.mCurrentTargetOffsetTop, true);
        this.mNotify = false;
        startScaleUpAnimation(this.mRefreshListener);
    }


    private void startScaleUpAnimation(Animation.AnimationListener listener) {

        this.mCircleView.setVisibility(0);
        if (Build.VERSION.SDK_INT >= 11) {

            this.mProgress.setAlpha(255);
        }

        this.mScaleAnimation = new Animation() {
 // from class: android.support.v4.widget.SwipeRefreshLayout.2
            @Override // android.view.animation.Animation
            void applyTransformation(float interpolatedTime, Transformation t) {

                SwipeRefreshLayout.this.setAnimationProgress(interpolatedTime);
            }

        }
;
        this.mScaleAnimation.setDuration((long) this.mMediumAnimationDuration);
        if (listener != null) {

            this.mCircleView.setAnimationListener(listener);
        }

        this.mCircleView.clearAnimation();
        this.mCircleView.startAnimation(this.mScaleAnimation);
    }


    /* JADX INFO: Access modifiers changed from: private */
    void setAnimationProgress(float progress) {

        if (isAlphaUsedForScale()) {

            setColorViewAlpha((int) (255.0f * progress));
            return;
        }

        ViewCompat.setScaleX(this.mCircleView, progress);
        ViewCompat.setScaleY(this.mCircleView, progress);
    }


    private void setRefreshing(boolean refreshing, boolean notify) {

        if (this.mRefreshing != refreshing) {

            this.mNotify = notify;
            ensureTarget();
            this.mRefreshing = refreshing;
            if (this.mRefreshing) {

                animateOffsetToCorrectPosition(this.mCurrentTargetOffsetTop, this.mRefreshListener);
            }
 else {

                startScaleDownAnimation(this.mRefreshListener);
            }

        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    void startScaleDownAnimation(Animation.AnimationListener listener) {

        this.mScaleDownAnimation = new Animation() {
 // from class: android.support.v4.widget.SwipeRefreshLayout.3
            @Override // android.view.animation.Animation
            void applyTransformation(float interpolatedTime, Transformation t) {

                SwipeRefreshLayout.this.setAnimationProgress(1.0f - interpolatedTime);
            }

        }
;
        this.mScaleDownAnimation.setDuration(150);
        this.mCircleView.setAnimationListener(listener);
        this.mCircleView.clearAnimation();
        this.mCircleView.startAnimation(this.mScaleDownAnimation);
    }


    private void startProgressAlphaStartAnimation() {

        this.mAlphaStartAnimation = startAlphaAnimation(this.mProgress.getAlpha(), STARTING_PROGRESS_ALPHA);
    }


    private void startProgressAlphaMaxAnimation() {

        this.mAlphaMaxAnimation = startAlphaAnimation(this.mProgress.getAlpha(), 255);
    }


    private Animation startAlphaAnimation(final int startingAlpha, final int endingAlpha) {

        if (this.mScale && isAlphaUsedForScale()) {

            return null;
        }

        Animation alpha = new Animation() {
 // from class: android.support.v4.widget.SwipeRefreshLayout.4
            @Override // android.view.animation.Animation
            void applyTransformation(float interpolatedTime, Transformation t) {

                SwipeRefreshLayout.this.mProgress.setAlpha((int) (((float) startingAlpha) + (((float) (endingAlpha - startingAlpha)) * interpolatedTime)));
            }

        }
;
        alpha.setDuration(300);
        this.mCircleView.setAnimationListener(null);
        this.mCircleView.clearAnimation();
        this.mCircleView.startAnimation(alpha);
        return alpha;
    }


    @Deprecated
    void setProgressBackgroundColor(int colorRes) {

        setProgressBackgroundColorSchemeResource(colorRes);
    }


    void setProgressBackgroundColorSchemeResource(@ColorRes int colorRes) {

        setProgressBackgroundColorSchemeColor(getResources().getColor(colorRes));
    }


    void setProgressBackgroundColorSchemeColor(@ColorInt int color) {

        this.mCircleView.setBackgroundColor(color);
        this.mProgress.setBackgroundColor(color);
    }


    @Deprecated
    void setColorScheme(@ColorInt int... colors) {

        setColorSchemeResources(colors);
    }


    void setColorSchemeResources(@ColorRes int... colorResIds) {

        Resources res = getResources();
        int[] colorRes = new int[colorResIds.length];
        for (int i = 0; i < colorResIds.length; i++) {

            colorRes[i] = res.getColor(colorResIds[i]);
        }

        setColorSchemeColors(colorRes);
    }


    @ColorInt
    void setColorSchemeColors(int... colors) {

        ensureTarget();
        this.mProgress.setColorSchemeColors(colors);
    }


    boolean isRefreshing() {

        return this.mRefreshing;
    }


    private void ensureTarget() {

        if (this.mTarget == null) {

            for (int i = 0; i < getChildCount(); i++) {

                View child = getChildAt(i);
                if (!child.equals(this.mCircleView)) {

                    this.mTarget = child;
                    return;
                }

            }

        }

    }


    void setDistanceToTriggerSync(int distance) {

        this.mTotalDragDistance = (float) distance;
    }


    @Override // android.view.ViewGroup, android.view.View
    protected void onLayout(boolean changed, int left, int top, int right, int bottom) {

        int width = getMeasuredWidth();
        int height = getMeasuredHeight();
        if (getChildCount() != 0) {

            if (this.mTarget == null) {

                ensureTarget();
            }

            if (this.mTarget != null) {

                View child = this.mTarget;
                int childLeft = getPaddingLeft();
                int childTop = getPaddingTop();
                child.layout(childLeft, childTop, childLeft + ((width - getPaddingLeft()) - getPaddingRight()), childTop + ((height - getPaddingTop()) - getPaddingBottom()));
                int circleWidth = this.mCircleView.getMeasuredWidth();
                this.mCircleView.layout((width / 2) - (circleWidth / 2), this.mCurrentTargetOffsetTop, (width / 2) + (circleWidth / 2), this.mCurrentTargetOffsetTop + this.mCircleView.getMeasuredHeight());
            }

        }

    }


    @Override // android.view.View
    void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {

        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        if (this.mTarget == null) {

            ensureTarget();
        }

        if (this.mTarget != null) {

            this.mTarget.measure(View.MeasureSpec.makeMeasureSpec((getMeasuredWidth() - getPaddingLeft()) - getPaddingRight(), 1073741824), View.MeasureSpec.makeMeasureSpec((getMeasuredHeight() - getPaddingTop()) - getPaddingBottom(), 1073741824));
            this.mCircleView.measure(View.MeasureSpec.makeMeasureSpec(this.mCircleWidth, 1073741824), View.MeasureSpec.makeMeasureSpec(this.mCircleHeight, 1073741824));
            if (!this.mUsingCustomStart && !this.mOriginalOffsetCalculated) {

                this.mOriginalOffsetCalculated = true;
                int i = -this.mCircleView.getMeasuredHeight();
                this.mOriginalOffsetTop = i;
                this.mCurrentTargetOffsetTop = i;
            }

            this.mCircleViewIndex = -1;
            for (int index = 0; index < getChildCount(); index++) {

                if (getChildAt(index) == this.mCircleView) {

                    this.mCircleViewIndex = index;
                    return;
                }

            }

        }

    }


    int getProgressCircleDiameter() {

        if (this.mCircleView != null) {

            return this.mCircleView.getMeasuredHeight();
        }

        return 0;
    }


    boolean canChildScrollUp() {

        boolean z = false;
        if (Build.VERSION.SDK_INT >= 14) {

            return ViewCompat.canScrollVertically(this.mTarget, -1);
        }

        if (this.mTarget instanceof AbsListView) {

            AbsListView absListView = (AbsListView) this.mTarget;
            return absListView.getChildCount() > 0 && (absListView.getFirstVisiblePosition() > 0 || absListView.getChildAt(0).getTop() < absListView.getPaddingTop());
        }

        if (ViewCompat.canScrollVertically(this.mTarget, -1) || this.mTarget.getScrollY() > 0) {

            z = true;
        }

        return z;
    }


    @Override // android.view.ViewGroup
    boolean onInterceptTouchEvent(MotionEvent ev) {

        ensureTarget();
        int action = MotionEventCompat.getActionMasked(ev);
        if (this.mReturningToStart && action == 0) {

            this.mReturningToStart = false;
        }

        if (!isEnabled() || this.mReturningToStart || canChildScrollUp() || this.mRefreshing) {

            return false;
        }

        switch (action) {

            case 0:
                setTargetOffsetTopAndBottom(this.mOriginalOffsetTop - this.mCircleView.getTop(), true);
                this.mActivePointerId = MotionEventCompat.getPointerId(ev, 0);
                this.mIsBeingDragged = false;
                float initialDownY = getMotionEventY(ev, this.mActivePointerId);
                if (initialDownY != -1.0f) {

                    this.mInitialDownY = initialDownY;
                    break;
                }
 else {

                    return false;
                }

            case 1:
            case 3:
                this.mIsBeingDragged = false;
                this.mActivePointerId = -1;
                break;
            case 2:
                if (this.mActivePointerId == -1) {

                    Log.e(LOG_TAG, "Got ACTION_MOVE event but don't have an active pointer id.");
                    return false;
                }

                float y = getMotionEventY(ev, this.mActivePointerId);
                if (y != -1.0f) {

                    if (y - this.mInitialDownY > ((float) this.mTouchSlop) && !this.mIsBeingDragged) {

                        this.mInitialMotionY = this.mInitialDownY + ((float) this.mTouchSlop);
                        this.mIsBeingDragged = true;
                        this.mProgress.setAlpha(STARTING_PROGRESS_ALPHA);
                        break;
                    }

                }
 else {

                    return false;
                }

                break;
            case 6:
                onSecondaryPointerUp(ev);
                break;
        }

        return this.mIsBeingDragged;
    }


    private float getMotionEventY(MotionEvent ev, int activePointerId) {

        int index = MotionEventCompat.findPointerIndex(ev, activePointerId);
        if (index < 0) {

            return -1.0f;
        }

        return MotionEventCompat.getY(ev, index);
    }


    @Override // android.view.ViewGroup, android.view.ViewParent
    void requestDisallowInterceptTouchEvent(boolean b) {

        if (Build.VERSION.SDK_INT < 21 && (this.mTarget instanceof AbsListView)) {

            return;
        }

        if (this.mTarget == null || ViewCompat.isNestedScrollingEnabled(this.mTarget)) {

            super.requestDisallowInterceptTouchEvent(b);
        }

    }


    @Override // android.view.ViewGroup, android.view.ViewParent, android.support.v4.view.NestedScrollingParent
    boolean onStartNestedScroll(View child, View target, int nestedScrollAxes) {

        if (!isEnabled() || (nestedScrollAxes & 2) == 0) {

            return false;
        }

        startNestedScroll(nestedScrollAxes & 2);
        return true;
    }


    @Override // android.view.ViewGroup, android.view.ViewParent, android.support.v4.view.NestedScrollingParent
    void onNestedScrollAccepted(View child, View target, int axes) {

        this.mNestedScrollingParentHelper.onNestedScrollAccepted(child, target, axes);
        this.mTotalUnconsumed = 0.0f;
    }


    @Override // android.view.ViewGroup, android.view.ViewParent, android.support.v4.view.NestedScrollingParent
    void onNestedPreScroll(View target, int dx, int dy, int[] consumed) {

        if (dy > 0 && this.mTotalUnconsumed > 0.0f) {

            if (((float) dy) > this.mTotalUnconsumed) {

                consumed[1] = dy - ((int) this.mTotalUnconsumed);
                this.mTotalUnconsumed = 0.0f;
            }
 else {

                this.mTotalUnconsumed -= (float) dy;
                consumed[1] = dy;
            }

            moveSpinner(this.mTotalUnconsumed);
        }

        int[] parentConsumed = this.mParentScrollConsumed;
        if (dispatchNestedPreScroll(dx - consumed[0], dy - consumed[1], parentConsumed, null)) {

            consumed[0] = consumed[0] + parentConsumed[0];
            consumed[1] = consumed[1] + parentConsumed[1];
        }

    }


    @Override // android.view.ViewGroup, android.support.v4.view.NestedScrollingParent
    int getNestedScrollAxes() {

        return this.mNestedScrollingParentHelper.getNestedScrollAxes();
    }


    @Override // android.view.ViewGroup, android.view.ViewParent, android.support.v4.view.NestedScrollingParent
    void onStopNestedScroll(View target) {

        this.mNestedScrollingParentHelper.onStopNestedScroll(target);
        if (this.mTotalUnconsumed > 0.0f) {

            finishSpinner(this.mTotalUnconsumed);
            this.mTotalUnconsumed = 0.0f;
        }

        stopNestedScroll();
    }


    @Override // android.view.ViewGroup, android.view.ViewParent, android.support.v4.view.NestedScrollingParent
    void onNestedScroll(View target, int dxConsumed, int dyConsumed, int dxUnconsumed, int dyUnconsumed) {

        if (dyUnconsumed < 0) {

            this.mTotalUnconsumed += (float) Math.abs(dyUnconsumed);
            moveSpinner(this.mTotalUnconsumed);
        }

        dispatchNestedScroll(dxConsumed, dyConsumed, dxUnconsumed, dxConsumed, null);
    }


    @Override // android.view.ViewGroup, android.view.ViewParent, android.support.v4.view.NestedScrollingParent
    boolean onNestedPreFling(View target, float velocityX, float velocityY) {

        return false;
    }


    @Override // android.view.ViewGroup, android.view.ViewParent, android.support.v4.view.NestedScrollingParent
    boolean onNestedFling(View target, float velocityX, float velocityY, boolean consumed) {

        return false;
    }


    @Override // android.view.View, android.support.v4.view.NestedScrollingChild
    void setNestedScrollingEnabled(boolean enabled) {

        this.mNestedScrollingChildHelper.setNestedScrollingEnabled(enabled);
    }


    @Override // android.view.View, android.support.v4.view.NestedScrollingChild
    boolean isNestedScrollingEnabled() {

        return this.mNestedScrollingChildHelper.isNestedScrollingEnabled();
    }


    @Override // android.view.View, android.support.v4.view.NestedScrollingChild
    boolean startNestedScroll(int axes) {

        return this.mNestedScrollingChildHelper.startNestedScroll(axes);
    }


    @Override // android.view.View, android.support.v4.view.NestedScrollingChild
    void stopNestedScroll() {

        this.mNestedScrollingChildHelper.stopNestedScroll();
    }


    @Override // android.view.View, android.support.v4.view.NestedScrollingChild
    boolean hasNestedScrollingParent() {

        return this.mNestedScrollingChildHelper.hasNestedScrollingParent();
    }


    @Override // android.view.View, android.support.v4.view.NestedScrollingChild
    boolean dispatchNestedScroll(int dxConsumed, int dyConsumed, int dxUnconsumed, int dyUnconsumed, int[] offsetInWindow) {

        return this.mNestedScrollingChildHelper.dispatchNestedScroll(dxConsumed, dyConsumed, dxUnconsumed, dyUnconsumed, offsetInWindow);
    }


    @Override // android.view.View, android.support.v4.view.NestedScrollingChild
    boolean dispatchNestedPreScroll(int dx, int dy, int[] consumed, int[] offsetInWindow) {

        return this.mNestedScrollingChildHelper.dispatchNestedPreScroll(dx, dy, consumed, offsetInWindow);
    }


    @Override // android.view.View, android.support.v4.view.NestedScrollingChild
    boolean dispatchNestedFling(float velocityX, float velocityY, boolean consumed) {

        return this.mNestedScrollingChildHelper.dispatchNestedFling(velocityX, velocityY, consumed);
    }


    @Override // android.view.View, android.support.v4.view.NestedScrollingChild
    boolean dispatchNestedPreFling(float velocityX, float velocityY) {

        return this.mNestedScrollingChildHelper.dispatchNestedPreFling(velocityX, velocityY);
    }


    private boolean isAnimationRunning(Animation animation) {

        return animation != null && animation.hasStarted() && !animation.hasEnded();
    }


    private void moveSpinner(float overscrollTop) {

        float slingshotDist;
        this.mProgress.showArrow(true);
        float dragPercent = Math.min(1.0f, Math.abs(overscrollTop / this.mTotalDragDistance));
        float adjustedPercent = (((float) Math.max(((double) dragPercent) - 0.4d, 0.0d)) * 5.0f) / 3.0f;
        float extraOS = Math.abs(overscrollTop) - this.mTotalDragDistance;
        if (this.mUsingCustomStart) {

            slingshotDist = this.mSpinnerFinalOffset - ((float) this.mOriginalOffsetTop);
        }
 else {

            slingshotDist = this.mSpinnerFinalOffset;
        }

        float tensionSlingshotPercent = Math.max(0.0f, Math.min(extraOS, DECELERATE_INTERPOLATION_FACTOR * slingshotDist) / slingshotDist);
        float tensionPercent = ((float) (((double) (tensionSlingshotPercent / 4.0f)) - Math.pow((double) (tensionSlingshotPercent / 4.0f), 2.0d))) * DECELERATE_INTERPOLATION_FACTOR;
        int targetY = this.mOriginalOffsetTop + ((int) ((slingshotDist * dragPercent) + (slingshotDist * tensionPercent * DECELERATE_INTERPOLATION_FACTOR)));
        if (this.mCircleView.getVisibility() != 0) {

            this.mCircleView.setVisibility(0);
        }

        if (!this.mScale) {

            ViewCompat.setScaleX(this.mCircleView, 1.0f);
            ViewCompat.setScaleY(this.mCircleView, 1.0f);
        }

        if (overscrollTop < this.mTotalDragDistance) {

            if (this.mScale) {

                setAnimationProgress(overscrollTop / this.mTotalDragDistance);
            }

            if (this.mProgress.getAlpha() > STARTING_PROGRESS_ALPHA && !isAnimationRunning(this.mAlphaStartAnimation)) {

                startProgressAlphaStartAnimation();
            }

            this.mProgress.setStartEndTrim(0.0f, Math.min((float) MAX_PROGRESS_ANGLE, adjustedPercent * MAX_PROGRESS_ANGLE));
            this.mProgress.setArrowScale(Math.min(1.0f, adjustedPercent));
        }
 else if (this.mProgress.getAlpha() < 255 && !isAnimationRunning(this.mAlphaMaxAnimation)) {

            startProgressAlphaMaxAnimation();
        }

        this.mProgress.setProgressRotation((-0.25f + (0.4f * adjustedPercent) + (DECELERATE_INTERPOLATION_FACTOR * tensionPercent)) * DRAG_RATE);
        setTargetOffsetTopAndBottom(targetY - this.mCurrentTargetOffsetTop, true);
    }


    private void finishSpinner(float overscrollTop) {

        if (overscrollTop > this.mTotalDragDistance) {

            setRefreshing(true, true);
            return;
        }

        this.mRefreshing = false;
        this.mProgress.setStartEndTrim(0.0f, 0.0f);
        Animation.AnimationListener listener = null;
        if (!this.mScale) {

            listener = new Animation.AnimationListener() {
 // from class: android.support.v4.widget.SwipeRefreshLayout.5
                @Override // android.view.animation.Animation.AnimationListener
                void onAnimationStart(Animation animation) {

                }


                @Override // android.view.animation.Animation.AnimationListener
                void onAnimationEnd(Animation animation) {

                    if (!SwipeRefreshLayout.this.mScale) {

                        SwipeRefreshLayout.this.startScaleDownAnimation(null);
                    }

                }


                @Override // android.view.animation.Animation.AnimationListener
                void onAnimationRepeat(Animation animation) {

                }

            }
;
        }

        animateOffsetToStartPosition(this.mCurrentTargetOffsetTop, listener);
        this.mProgress.showArrow(false);
    }


    @Override // android.view.View
    boolean onTouchEvent(MotionEvent ev) {

        int action = MotionEventCompat.getActionMasked(ev);
        if (this.mReturningToStart && action == 0) {

            this.mReturningToStart = false;
        }

        if (!isEnabled() || this.mReturningToStart || canChildScrollUp()) {

            return false;
        }

        switch (action) {

            case 0:
                this.mActivePointerId = MotionEventCompat.getPointerId(ev, 0);
                this.mIsBeingDragged = false;
                break;
            case 1:
            case 3:
                if (this.mActivePointerId != -1) {

                    float overscrollTop = (MotionEventCompat.getY(ev, MotionEventCompat.findPointerIndex(ev, this.mActivePointerId)) - this.mInitialMotionY) * DRAG_RATE;
                    this.mIsBeingDragged = false;
                    finishSpinner(overscrollTop);
                    this.mActivePointerId = -1;
                    return false;
                }
 else if (action != 1) {

                    return false;
                }
 else {

                    Log.e(LOG_TAG, "Got ACTION_UP event but don't have an active pointer id.");
                    return false;
                }

            case 2:
                int pointerIndex = MotionEventCompat.findPointerIndex(ev, this.mActivePointerId);
                if (pointerIndex < 0) {

                    Log.e(LOG_TAG, "Got ACTION_MOVE event but have an invalid active pointer id.");
                    return false;
                }

                float overscrollTop2 = (MotionEventCompat.getY(ev, pointerIndex) - this.mInitialMotionY) * DRAG_RATE;
                if (this.mIsBeingDragged) {

                    if (overscrollTop2 > 0.0f) {

                        moveSpinner(overscrollTop2);
                        break;
                    }
 else {

                        return false;
                    }

                }

                break;
            case 5:
                this.mActivePointerId = MotionEventCompat.getPointerId(ev, MotionEventCompat.getActionIndex(ev));
                break;
            case 6:
                onSecondaryPointerUp(ev);
                break;
        }

        return true;
    }


    private void animateOffsetToCorrectPosition(int from, Animation.AnimationListener listener) {

        this.mFrom = from;
        this.mAnimateToCorrectPosition.reset();
        this.mAnimateToCorrectPosition.setDuration(200);
        this.mAnimateToCorrectPosition.setInterpolator(this.mDecelerateInterpolator);
        if (listener != null) {

            this.mCircleView.setAnimationListener(listener);
        }

        this.mCircleView.clearAnimation();
        this.mCircleView.startAnimation(this.mAnimateToCorrectPosition);
    }


    private void peek(int from, Animation.AnimationListener listener) {

        this.mFrom = from;
        this.mPeek.reset();
        this.mPeek.setDuration(500);
        this.mPeek.setInterpolator(this.mDecelerateInterpolator);
        if (listener != null) {

            this.mCircleView.setAnimationListener(listener);
        }

        this.mCircleView.clearAnimation();
        this.mCircleView.startAnimation(this.mPeek);
    }


    private void animateOffsetToStartPosition(int from, Animation.AnimationListener listener) {

        if (this.mScale) {

            startScaleDownReturnToStartAnimation(from, listener);
            return;
        }

        this.mFrom = from;
        this.mAnimateToStartPosition.reset();
        this.mAnimateToStartPosition.setDuration(200);
        this.mAnimateToStartPosition.setInterpolator(this.mDecelerateInterpolator);
        if (listener != null) {

            this.mCircleView.setAnimationListener(listener);
        }

        this.mCircleView.clearAnimation();
        this.mCircleView.startAnimation(this.mAnimateToStartPosition);
    }


    /* JADX INFO: Access modifiers changed from: private */
    void moveToStart(float interpolatedTime) {

        setTargetOffsetTopAndBottom((this.mFrom + ((int) (((float) (this.mOriginalOffsetTop - this.mFrom)) * interpolatedTime))) - this.mCircleView.getTop(), false);
    }


    private void startScaleDownReturnToStartAnimation(int from, Animation.AnimationListener listener) {

        this.mFrom = from;
        if (isAlphaUsedForScale()) {

            this.mStartingScale = (float) this.mProgress.getAlpha();
        }
 else {

            this.mStartingScale = ViewCompat.getScaleX(this.mCircleView);
        }

        this.mScaleDownToStartAnimation = new Animation() {
 // from class: android.support.v4.widget.SwipeRefreshLayout.9
            @Override // android.view.animation.Animation
            void applyTransformation(float interpolatedTime, Transformation t) {

                SwipeRefreshLayout.this.setAnimationProgress(SwipeRefreshLayout.this.mStartingScale + ((-SwipeRefreshLayout.this.mStartingScale) * interpolatedTime));
                SwipeRefreshLayout.this.moveToStart(interpolatedTime);
            }

        }
;
        this.mScaleDownToStartAnimation.setDuration(150);
        if (listener != null) {

            this.mCircleView.setAnimationListener(listener);
        }

        this.mCircleView.clearAnimation();
        this.mCircleView.startAnimation(this.mScaleDownToStartAnimation);
    }


    /* JADX INFO: Access modifiers changed from: private */
    void setTargetOffsetTopAndBottom(int offset, boolean requiresUpdate) {

        this.mCircleView.bringToFront();
        this.mCircleView.offsetTopAndBottom(offset);
        this.mCurrentTargetOffsetTop = this.mCircleView.getTop();
        if (requiresUpdate && Build.VERSION.SDK_INT < 11) {

            invalidate();
        }

    }


    private void onSecondaryPointerUp(MotionEvent ev) {

        int pointerIndex = MotionEventCompat.getActionIndex(ev);
        if (MotionEventCompat.getPointerId(ev, pointerIndex) == this.mActivePointerId) {

            this.mActivePointerId = MotionEventCompat.getPointerId(ev, pointerIndex == 0 ? 1 : 0);
        }

    }

}

