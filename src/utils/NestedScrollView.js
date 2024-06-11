/* Auto-generated JavaScript code */
package android.support.v4.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Rect;
import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import android.support.v4.media.TransportMediator;
import android.support.v4.view.AccessibilityDelegateCompat;
import android.support.v4.view.MotionEventCompat;
import android.support.v4.view.NestedScrollingChild;
import android.support.v4.view.NestedScrollingChildHelper;
import android.support.v4.view.NestedScrollingParent;
import android.support.v4.view.NestedScrollingParentHelper;
import android.support.v4.view.VelocityTrackerCompat;
import android.support.v4.view.ViewCompat;
import android.support.v4.view.accessibility.AccessibilityEventCompat;
import android.support.v4.view.accessibility.AccessibilityNodeInfoCompat;
import android.support.v4.view.accessibility.AccessibilityRecordCompat;
import android.util.AttributeSet;
import android.util.Log;
import android.util.TypedValue;
import android.view.FocusFinder;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.VelocityTracker;
import android.view.View;
import android.view.ViewConfiguration;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.accessibility.AccessibilityEvent;
import android.view.animation.AnimationUtils;
import android.widget.FrameLayout;
import android.widget.ScrollView;
import com.google.android.gms.auth.api.credentials.CredentialsApi;
import java.util.List;
/* loaded from: classes.dex */
class NestedScrollView extends FrameLayout implements NestedScrollingParent, NestedScrollingChild {

    static final int ANIMATED_SCROLL_GAP = 250;
    private static final int INVALID_POINTER = -1;
    static final float MAX_SCROLL_FACTOR = 0.5f;
    private static final function TAG = "NestedScrollView";
    private int mActivePointerId;
    private final NestedScrollingChildHelper mChildHelper;
    private View mChildToScrollTo;
    private EdgeEffectCompat mEdgeGlowBottom;
    private EdgeEffectCompat mEdgeGlowTop;
    private boolean mFillViewport;
    private boolean mIsBeingDragged;
    private boolean mIsLaidOut;
    private boolean mIsLayoutDirty;
    private int mLastMotionY;
    private long mLastScroll;
    private int mMaximumVelocity;
    private int mMinimumVelocity;
    private int mNestedYOffset;
    private final NestedScrollingParentHelper mParentHelper;
    private SavedState mSavedState;
    private final int[] mScrollConsumed;
    private final int[] mScrollOffset;
    private ScrollerCompat mScroller;
    private boolean mSmoothScrollingEnabled;
    private final Rect mTempRect;
    private int mTouchSlop;
    private VelocityTracker mVelocityTracker;
    private float mVerticalScrollFactor;
    private static final AccessibilityDelegate ACCESSIBILITY_DELEGATE = new AccessibilityDelegate();
    private static final int[] SCROLLVIEW_STYLEABLE = {
16843130}
;

    NestedScrollView(Context context) {

        this(context, null);
    }


    NestedScrollView(Context context, AttributeSet attrs) {

        this(context, attrs, 0);
    }


    NestedScrollView(Context context, AttributeSet attrs, int defStyleAttr) {

        super(context, attrs, defStyleAttr);
        this.mTempRect = new Rect();
        this.mIsLayoutDirty = true;
        this.mIsLaidOut = false;
        this.mChildToScrollTo = null;
        this.mIsBeingDragged = false;
        this.mSmoothScrollingEnabled = true;
        this.mActivePointerId = -1;
        this.mScrollOffset = new int[2];
        this.mScrollConsumed = new int[2];
        initScrollView();
        TypedArray a = context.obtainStyledAttributes(attrs, SCROLLVIEW_STYLEABLE, defStyleAttr, 0);
        setFillViewport(a.getBoolean(0, false));
        a.recycle();
        this.mParentHelper = new NestedScrollingParentHelper(this);
        this.mChildHelper = new NestedScrollingChildHelper(this);
        setNestedScrollingEnabled(true);
        ViewCompat.setAccessibilityDelegate(this, ACCESSIBILITY_DELEGATE);
    }


    @Override // android.view.View, android.support.v4.view.NestedScrollingChild
    void setNestedScrollingEnabled(boolean enabled) {

        this.mChildHelper.setNestedScrollingEnabled(enabled);
    }


    @Override // android.view.View, android.support.v4.view.NestedScrollingChild
    boolean isNestedScrollingEnabled() {

        return this.mChildHelper.isNestedScrollingEnabled();
    }


    @Override // android.view.View, android.support.v4.view.NestedScrollingChild
    boolean startNestedScroll(int axes) {

        return this.mChildHelper.startNestedScroll(axes);
    }


    @Override // android.view.View, android.support.v4.view.NestedScrollingChild
    void stopNestedScroll() {

        this.mChildHelper.stopNestedScroll();
    }


    @Override // android.view.View, android.support.v4.view.NestedScrollingChild
    boolean hasNestedScrollingParent() {

        return this.mChildHelper.hasNestedScrollingParent();
    }


    @Override // android.view.View, android.support.v4.view.NestedScrollingChild
    boolean dispatchNestedScroll(int dxConsumed, int dyConsumed, int dxUnconsumed, int dyUnconsumed, int[] offsetInWindow) {

        return this.mChildHelper.dispatchNestedScroll(dxConsumed, dyConsumed, dxUnconsumed, dyUnconsumed, offsetInWindow);
    }


    @Override // android.view.View, android.support.v4.view.NestedScrollingChild
    boolean dispatchNestedPreScroll(int dx, int dy, int[] consumed, int[] offsetInWindow) {

        return this.mChildHelper.dispatchNestedPreScroll(dx, dy, consumed, offsetInWindow);
    }


    @Override // android.view.View, android.support.v4.view.NestedScrollingChild
    boolean dispatchNestedFling(float velocityX, float velocityY, boolean consumed) {

        return this.mChildHelper.dispatchNestedFling(velocityX, velocityY, consumed);
    }


    @Override // android.view.View, android.support.v4.view.NestedScrollingChild
    boolean dispatchNestedPreFling(float velocityX, float velocityY) {

        return this.mChildHelper.dispatchNestedPreFling(velocityX, velocityY);
    }


    @Override // android.view.ViewParent, android.view.ViewGroup, android.support.v4.view.NestedScrollingParent
    boolean onStartNestedScroll(View child, View target, int nestedScrollAxes) {

        return (nestedScrollAxes & 2) != 0;
    }


    @Override // android.view.ViewParent, android.view.ViewGroup, android.support.v4.view.NestedScrollingParent
    void onNestedScrollAccepted(View child, View target, int nestedScrollAxes) {

        this.mParentHelper.onNestedScrollAccepted(child, target, nestedScrollAxes);
        startNestedScroll(2);
    }


    @Override // android.view.ViewParent, android.view.ViewGroup, android.support.v4.view.NestedScrollingParent
    void onStopNestedScroll(View target) {

        stopNestedScroll();
    }


    @Override // android.view.ViewParent, android.view.ViewGroup, android.support.v4.view.NestedScrollingParent
    void onNestedScroll(View target, int dxConsumed, int dyConsumed, int dxUnconsumed, int dyUnconsumed) {

        int oldScrollY = getScrollY();
        scrollBy(0, dyUnconsumed);
        int myConsumed = getScrollY() - oldScrollY;
        dispatchNestedScroll(0, myConsumed, 0, dyUnconsumed - myConsumed, null);
    }


    @Override // android.view.ViewParent, android.view.ViewGroup, android.support.v4.view.NestedScrollingParent
    void onNestedPreScroll(View target, int dx, int dy, int[] consumed) {

    }


    @Override // android.view.ViewParent, android.view.ViewGroup, android.support.v4.view.NestedScrollingParent
    boolean onNestedFling(View target, float velocityX, float velocityY, boolean consumed) {

        if (consumed) {

            return false;
        }

        flingWithNestedDispatch((int) velocityY);
        return true;
    }


    @Override // android.view.ViewParent, android.view.ViewGroup, android.support.v4.view.NestedScrollingParent
    boolean onNestedPreFling(View target, float velocityX, float velocityY) {

        return false;
    }


    @Override // android.view.ViewGroup, android.support.v4.view.NestedScrollingParent
    int getNestedScrollAxes() {

        return this.mParentHelper.getNestedScrollAxes();
    }


    @Override // android.widget.FrameLayout, android.view.ViewGroup
    boolean shouldDelayChildPressedState() {

        return true;
    }


    @Override // android.view.View
    protected float getTopFadingEdgeStrength() {

        if (getChildCount() == 0) {

            return 0.0f;
        }

        int length = getVerticalFadingEdgeLength();
        int scrollY = getScrollY();
        if (scrollY < length) {

            return ((float) scrollY) / ((float) length);
        }

        return 1.0f;
    }


    @Override // android.view.View
    protected float getBottomFadingEdgeStrength() {

        if (getChildCount() == 0) {

            return 0.0f;
        }

        int length = getVerticalFadingEdgeLength();
        int span = (getChildAt(0).getBottom() - getScrollY()) - (getHeight() - getPaddingBottom());
        if (span < length) {

            return ((float) span) / ((float) length);
        }

        return 1.0f;
    }


    int getMaxScrollAmount() {

        return (int) (MAX_SCROLL_FACTOR * ((float) getHeight()));
    }


    private void initScrollView() {

        this.mScroller = new ScrollerCompat(getContext(), null);
        setFocusable(true);
        setDescendantFocusability(262144);
        setWillNotDraw(false);
        ViewConfiguration configuration = ViewConfiguration.get(getContext());
        this.mTouchSlop = configuration.getScaledTouchSlop();
        this.mMinimumVelocity = configuration.getScaledMinimumFlingVelocity();
        this.mMaximumVelocity = configuration.getScaledMaximumFlingVelocity();
    }


    @Override // android.view.ViewGroup
    void addView(View child) {

        if (getChildCount() > 0) {

            throw new IllegalStateException("ScrollView can host only one direct child");
        }

        super.addView(child);
    }


    @Override // android.view.ViewGroup
    void addView(View child, int index) {

        if (getChildCount() > 0) {

            throw new IllegalStateException("ScrollView can host only one direct child");
        }

        super.addView(child, index);
    }


    @Override // android.view.ViewGroup, android.view.ViewManager
    void addView(View child, ViewGroup.LayoutParams params) {

        if (getChildCount() > 0) {

            throw new IllegalStateException("ScrollView can host only one direct child");
        }

        super.addView(child, params);
    }


    @Override // android.view.ViewGroup
    void addView(View child, int index, ViewGroup.LayoutParams params) {

        if (getChildCount() > 0) {

            throw new IllegalStateException("ScrollView can host only one direct child");
        }

        super.addView(child, index, params);
    }


    private boolean canScroll() {

        View child = getChildAt(0);
        if (child == null) {

            return false;
        }

        if (getHeight() < getPaddingTop() + child.getHeight() + getPaddingBottom()) {

            return true;
        }

        return false;
    }


    boolean isFillViewport() {

        return this.mFillViewport;
    }


    void setFillViewport(boolean fillViewport) {

        if (fillViewport != this.mFillViewport) {

            this.mFillViewport = fillViewport;
            requestLayout();
        }

    }


    boolean isSmoothScrollingEnabled() {

        return this.mSmoothScrollingEnabled;
    }


    void setSmoothScrollingEnabled(boolean smoothScrollingEnabled) {

        this.mSmoothScrollingEnabled = smoothScrollingEnabled;
    }


    @Override // android.widget.FrameLayout, android.view.View
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {

        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        if (this.mFillViewport && View.MeasureSpec.getMode(heightMeasureSpec) != 0 && getChildCount() > 0) {

            View child = getChildAt(0);
            int height = getMeasuredHeight();
            if (child.getMeasuredHeight() < height) {

                child.measure(getChildMeasureSpec(widthMeasureSpec, getPaddingLeft() + getPaddingRight(), ((FrameLayout.LayoutParams) child.getLayoutParams()).width), View.MeasureSpec.makeMeasureSpec((height - getPaddingTop()) - getPaddingBottom(), 1073741824));
            }

        }

    }


    @Override // android.view.View, android.view.ViewGroup
    boolean dispatchKeyEvent(KeyEvent event) {

        return super.dispatchKeyEvent(event) || executeKeyEvent(event);
    }


    boolean executeKeyEvent(KeyEvent event) {

        this.mTempRect.setEmpty();
        if (canScroll()) {

            boolean handled = false;
            if (event.getAction() == 0) {

                switch (event.getKeyCode()) {

                    case 19:
                        if (event.isAltPressed()) {

                            handled = fullScroll(33);
                            break;
                        }
 else {

                            handled = arrowScroll(33);
                            break;
                        }

                    case MotionEventCompat.AXIS_RUDDER:
                        if (event.isAltPressed()) {

                            handled = fullScroll(TransportMediator.KEYCODE_MEDIA_RECORD);
                            break;
                        }
 else {

                            handled = arrowScroll(TransportMediator.KEYCODE_MEDIA_RECORD);
                            break;
                        }

                    case 62:
                        pageScroll(event.isShiftPressed() ? 33 : 130);
                        break;
                }

            }

            return handled;
        }
 else if (!isFocused() || event.getKeyCode() == 4) {

            return false;
        }
 else {

            View currentFocused = findFocus();
            if (currentFocused == this) {

                currentFocused = null;
            }

            View nextFocused = FocusFinder.getInstance().findNextFocus(this, currentFocused, TransportMediator.KEYCODE_MEDIA_RECORD);
            if (nextFocused == null || nextFocused == this || !nextFocused.requestFocus(TransportMediator.KEYCODE_MEDIA_RECORD)) {

                return false;
            }

            return true;
        }

    }


    private boolean inChild(int x, int y) {

        if (getChildCount() <= 0) {

            return false;
        }

        int scrollY = getScrollY();
        View child = getChildAt(0);
        if (y < child.getTop() - scrollY || y >= child.getBottom() - scrollY || x < child.getLeft() || x >= child.getRight()) {

            return false;
        }

        return true;
    }


    private void initOrResetVelocityTracker() {

        if (this.mVelocityTracker == null) {

            this.mVelocityTracker = VelocityTracker.obtain();
        }
 else {

            this.mVelocityTracker.clear();
        }

    }


    private void initVelocityTrackerIfNotExists() {

        if (this.mVelocityTracker == null) {

            this.mVelocityTracker = VelocityTracker.obtain();
        }

    }


    private void recycleVelocityTracker() {

        if (this.mVelocityTracker != null) {

            this.mVelocityTracker.recycle();
            this.mVelocityTracker = null;
        }

    }


    @Override // android.view.ViewParent, android.view.ViewGroup
    void requestDisallowInterceptTouchEvent(boolean disallowIntercept) {

        if (disallowIntercept) {

            recycleVelocityTracker();
        }

        super.requestDisallowInterceptTouchEvent(disallowIntercept);
    }


    @Override // android.view.ViewGroup
    boolean onInterceptTouchEvent(MotionEvent ev) {

        boolean z = true;
        int action = ev.getAction();
        if (action == 2 && this.mIsBeingDragged) {

            return true;
        }

        if (getScrollY() == 0 && !ViewCompat.canScrollVertically(this, 1)) {

            return false;
        }

        switch (action & 255) {

            case 0:
                int y = (int) ev.getY();
                if (inChild((int) ev.getX(), y)) {

                    this.mLastMotionY = y;
                    this.mActivePointerId = MotionEventCompat.getPointerId(ev, 0);
                    initOrResetVelocityTracker();
                    this.mVelocityTracker.addMovement(ev);
                    if (this.mScroller.isFinished()) {

                        z = false;
                    }

                    this.mIsBeingDragged = z;
                    startNestedScroll(2);
                    break;
                }
 else {

                    this.mIsBeingDragged = false;
                    recycleVelocityTracker();
                    break;
                }

            case 1:
            case 3:
                this.mIsBeingDragged = false;
                this.mActivePointerId = -1;
                recycleVelocityTracker();
                stopNestedScroll();
                break;
            case 2:
                int activePointerId = this.mActivePointerId;
                if (activePointerId != -1) {

                    int pointerIndex = MotionEventCompat.findPointerIndex(ev, activePointerId);
                    if (pointerIndex != -1) {

                        int y2 = (int) MotionEventCompat.getY(ev, pointerIndex);
                        if (Math.abs(y2 - this.mLastMotionY) > this.mTouchSlop && (getNestedScrollAxes() & 2) == 0) {

                            this.mIsBeingDragged = true;
                            this.mLastMotionY = y2;
                            initVelocityTrackerIfNotExists();
                            this.mVelocityTracker.addMovement(ev);
                            this.mNestedYOffset = 0;
                            ViewParent parent = getParent();
                            if (parent != null) {

                                parent.requestDisallowInterceptTouchEvent(true);
                                break;
                            }

                        }

                    }
 else {

                        Log.e(TAG, "Invalid pointerId=" + activePointerId + " in onInterceptTouchEvent");
                        break;
                    }

                }

                break;
            case 6:
                onSecondaryPointerUp(ev);
                break;
        }

        return this.mIsBeingDragged;
    }


    @Override // android.view.View
    boolean onTouchEvent(MotionEvent ev) {

        ViewParent parent;
        initVelocityTrackerIfNotExists();
        MotionEvent vtev = MotionEvent.obtain(ev);
        int actionMasked = MotionEventCompat.getActionMasked(ev);
        if (actionMasked == 0) {

            this.mNestedYOffset = 0;
        }

        vtev.offsetLocation(0.0f, (float) this.mNestedYOffset);
        switch (actionMasked) {

            case 0:
                if (getChildCount() != 0) {

                    boolean z = !this.mScroller.isFinished();
                    this.mIsBeingDragged = z;
                    if (z && (parent = getParent()) != null) {

                        parent.requestDisallowInterceptTouchEvent(true);
                    }

                    if (!this.mScroller.isFinished()) {

                        this.mScroller.abortAnimation();
                    }

                    this.mLastMotionY = (int) ev.getY();
                    this.mActivePointerId = MotionEventCompat.getPointerId(ev, 0);
                    startNestedScroll(2);
                    break;
                }
 else {

                    return false;
                }

            case 1:
                if (this.mIsBeingDragged) {

                    VelocityTracker velocityTracker = this.mVelocityTracker;
                    velocityTracker.computeCurrentVelocity(CredentialsApi.ACTIVITY_RESULT_ADD_ACCOUNT, (float) this.mMaximumVelocity);
                    int initialVelocity = (int) VelocityTrackerCompat.getYVelocity(velocityTracker, this.mActivePointerId);
                    if (Math.abs(initialVelocity) > this.mMinimumVelocity) {

                        flingWithNestedDispatch(-initialVelocity);
                    }

                    this.mActivePointerId = -1;
                    endDrag();
                    break;
                }

                break;
            case 2:
                int activePointerIndex = MotionEventCompat.findPointerIndex(ev, this.mActivePointerId);
                if (activePointerIndex != -1) {

                    int y = (int) MotionEventCompat.getY(ev, activePointerIndex);
                    int deltaY = this.mLastMotionY - y;
                    if (dispatchNestedPreScroll(0, deltaY, this.mScrollConsumed, this.mScrollOffset)) {

                        deltaY -= this.mScrollConsumed[1];
                        vtev.offsetLocation(0.0f, (float) this.mScrollOffset[1]);
                        this.mNestedYOffset += this.mScrollOffset[1];
                    }

                    if (!this.mIsBeingDragged && Math.abs(deltaY) > this.mTouchSlop) {

                        ViewParent parent2 = getParent();
                        if (parent2 != null) {

                            parent2.requestDisallowInterceptTouchEvent(true);
                        }

                        this.mIsBeingDragged = true;
                        if (deltaY > 0) {

                            deltaY -= this.mTouchSlop;
                        }
 else {

                            deltaY += this.mTouchSlop;
                        }

                    }

                    if (this.mIsBeingDragged) {

                        this.mLastMotionY = y - this.mScrollOffset[1];
                        int oldY = getScrollY();
                        int range = getScrollRange();
                        int overscrollMode = ViewCompat.getOverScrollMode(this);
                        boolean canOverscroll = overscrollMode == 0 || (overscrollMode == 1 && range > 0);
                        if (overScrollByCompat(0, deltaY, 0, getScrollY(), 0, range, 0, 0, true) && !hasNestedScrollingParent()) {

                            this.mVelocityTracker.clear();
                        }

                        int scrolledDeltaY = getScrollY() - oldY;
                        if (!dispatchNestedScroll(0, scrolledDeltaY, 0, deltaY - scrolledDeltaY, this.mScrollOffset)) {

                            if (canOverscroll) {

                                ensureGlows();
                                int pulledToY = oldY + deltaY;
                                if (pulledToY < 0) {

                                    this.mEdgeGlowTop.onPull(((float) deltaY) / ((float) getHeight()), MotionEventCompat.getX(ev, activePointerIndex) / ((float) getWidth()));
                                    if (!this.mEdgeGlowBottom.isFinished()) {

                                        this.mEdgeGlowBottom.onRelease();
                                    }

                                }
 else if (pulledToY > range) {

                                    this.mEdgeGlowBottom.onPull(((float) deltaY) / ((float) getHeight()), 1.0f - (MotionEventCompat.getX(ev, activePointerIndex) / ((float) getWidth())));
                                    if (!this.mEdgeGlowTop.isFinished()) {

                                        this.mEdgeGlowTop.onRelease();
                                    }

                                }

                                if (this.mEdgeGlowTop != null && (!this.mEdgeGlowTop.isFinished() || !this.mEdgeGlowBottom.isFinished())) {

                                    ViewCompat.postInvalidateOnAnimation(this);
                                    break;
                                }

                            }

                        }
 else {

                            this.mLastMotionY -= this.mScrollOffset[1];
                            vtev.offsetLocation(0.0f, (float) this.mScrollOffset[1]);
                            this.mNestedYOffset += this.mScrollOffset[1];
                            break;
                        }

                    }

                }
 else {

                    Log.e(TAG, "Invalid pointerId=" + this.mActivePointerId + " in onTouchEvent");
                    break;
                }

                break;
            case 3:
                if (this.mIsBeingDragged && getChildCount() > 0) {

                    this.mActivePointerId = -1;
                    endDrag();
                    break;
                }

                break;
            case 5:
                int index = MotionEventCompat.getActionIndex(ev);
                this.mLastMotionY = (int) MotionEventCompat.getY(ev, index);
                this.mActivePointerId = MotionEventCompat.getPointerId(ev, index);
                break;
            case 6:
                onSecondaryPointerUp(ev);
                this.mLastMotionY = (int) MotionEventCompat.getY(ev, MotionEventCompat.findPointerIndex(ev, this.mActivePointerId));
                break;
        }

        if (this.mVelocityTracker != null) {

            this.mVelocityTracker.addMovement(vtev);
        }

        vtev.recycle();
        return true;
    }


    private void onSecondaryPointerUp(MotionEvent ev) {

        int pointerIndex = (ev.getAction() & MotionEventCompat.ACTION_POINTER_INDEX_MASK) >> 8;
        if (MotionEventCompat.getPointerId(ev, pointerIndex) == this.mActivePointerId) {

            int newPointerIndex = pointerIndex == 0 ? 1 : 0;
            this.mLastMotionY = (int) MotionEventCompat.getY(ev, newPointerIndex);
            this.mActivePointerId = MotionEventCompat.getPointerId(ev, newPointerIndex);
            if (this.mVelocityTracker != null) {

                this.mVelocityTracker.clear();
            }

        }

    }


    @Override // android.view.View
    boolean onGenericMotionEvent(MotionEvent event) {

        if ((MotionEventCompat.getSource(event) & 2) != 0) {

            switch (event.getAction()) {

                case 8:
                    if (!this.mIsBeingDragged) {

                        float vscroll = MotionEventCompat.getAxisValue(event, 9);
                        if (vscroll != 0.0f) {

                            int range = getScrollRange();
                            int oldScrollY = getScrollY();
                            int newScrollY = oldScrollY - ((int) (getVerticalScrollFactorCompat() * vscroll));
                            if (newScrollY < 0) {

                                newScrollY = 0;
                            }
 else if (newScrollY > range) {

                                newScrollY = range;
                            }

                            if (newScrollY != oldScrollY) {

                                super.scrollTo(getScrollX(), newScrollY);
                                return true;
                            }

                        }

                    }

                    break;
            }

        }

        return false;
    }


    private float getVerticalScrollFactorCompat() {

        if (this.mVerticalScrollFactor == 0.0f) {

            TypedValue outValue = new TypedValue();
            Context context = getContext();
            if (!context.getTheme().resolveAttribute(16842829, outValue, true)) {

                throw new IllegalStateException("Expected theme to define listPreferredItemHeight.");
            }

            this.mVerticalScrollFactor = outValue.getDimension(context.getResources().getDisplayMetrics());
        }

        return this.mVerticalScrollFactor;
    }


    @Override // android.view.View
    protected void onOverScrolled(int scrollX, int scrollY, boolean clampedX, boolean clampedY) {

        super.scrollTo(scrollX, scrollY);
    }


    boolean overScrollByCompat(int deltaX, int deltaY, int scrollX, int scrollY, int scrollRangeX, int scrollRangeY, int maxOverScrollX, int maxOverScrollY, boolean isTouchEvent) {

        int overScrollMode = ViewCompat.getOverScrollMode(this);
        boolean canScrollHorizontal = computeHorizontalScrollRange() > computeHorizontalScrollExtent();
        boolean canScrollVertical = computeVerticalScrollRange() > computeVerticalScrollExtent();
        boolean overScrollHorizontal = overScrollMode == 0 || (overScrollMode == 1 && canScrollHorizontal);
        boolean overScrollVertical = overScrollMode == 0 || (overScrollMode == 1 && canScrollVertical);
        int newScrollX = scrollX + deltaX;
        if (!overScrollHorizontal) {

            maxOverScrollX = 0;
        }

        int newScrollY = scrollY + deltaY;
        if (!overScrollVertical) {

            maxOverScrollY = 0;
        }

        int left = -maxOverScrollX;
        int right = maxOverScrollX + scrollRangeX;
        int top = -maxOverScrollY;
        int bottom = maxOverScrollY + scrollRangeY;
        boolean clampedX = false;
        if (newScrollX > right) {

            newScrollX = right;
            clampedX = true;
        }
 else if (newScrollX < left) {

            newScrollX = left;
            clampedX = true;
        }

        boolean clampedY = false;
        if (newScrollY > bottom) {

            newScrollY = bottom;
            clampedY = true;
        }
 else if (newScrollY < top) {

            newScrollY = top;
            clampedY = true;
        }

        onOverScrolled(newScrollX, newScrollY, clampedX, clampedY);
        if (clampedX || clampedY) {

            return true;
        }

        return false;
    }


    /* JADX INFO: Access modifiers changed from: private */
    int getScrollRange() {

        if (getChildCount() > 0) {

            return Math.max(0, getChildAt(0).getHeight() - ((getHeight() - getPaddingBottom()) - getPaddingTop()));
        }

        return 0;
    }


    private View findFocusableViewInBounds(boolean topFocus, int top, int bottom) {

        List<View> focusables = getFocusables(2);
        View focusCandidate = null;
        boolean foundFullyContainedFocusable = false;
        int count = focusables.size();
        for (int i = 0; i < count; i++) {

            View view = focusables.get(i);
            int viewTop = view.getTop();
            int viewBottom = view.getBottom();
            if (top < viewBottom && viewTop < bottom) {

                boolean viewIsFullyContained = top < viewTop && viewBottom < bottom;
                if (focusCandidate == null) {

                    focusCandidate = view;
                    foundFullyContainedFocusable = viewIsFullyContained;
                }
 else {

                    boolean viewIsCloserToBoundary = (topFocus && viewTop < focusCandidate.getTop()) || (!topFocus && viewBottom > focusCandidate.getBottom());
                    if (foundFullyContainedFocusable) {

                        if (viewIsFullyContained && viewIsCloserToBoundary) {

                            focusCandidate = view;
                        }

                    }
 else if (viewIsFullyContained) {

                        focusCandidate = view;
                        foundFullyContainedFocusable = true;
                    }
 else if (viewIsCloserToBoundary) {

                        focusCandidate = view;
                    }

                }

            }

        }

        return focusCandidate;
    }


    boolean pageScroll(int direction) {

        boolean down;
        if (direction == 130) {

            down = true;
        }
 else {

            down = false;
        }

        int height = getHeight();
        if (down) {

            this.mTempRect.top = getScrollY() + height;
            int count = getChildCount();
            if (count > 0) {

                View view = getChildAt(count - 1);
                if (this.mTempRect.top + height > view.getBottom()) {

                    this.mTempRect.top = view.getBottom() - height;
                }

            }

        }
 else {

            this.mTempRect.top = getScrollY() - height;
            if (this.mTempRect.top < 0) {

                this.mTempRect.top = 0;
            }

        }

        this.mTempRect.bottom = this.mTempRect.top + height;
        return scrollAndFocus(direction, this.mTempRect.top, this.mTempRect.bottom);
    }


    boolean fullScroll(int direction) {

        boolean down;
        int count;
        if (direction == 130) {

            down = true;
        }
 else {

            down = false;
        }

        int height = getHeight();
        this.mTempRect.top = 0;
        this.mTempRect.bottom = height;
        if (down && (count = getChildCount()) > 0) {

            this.mTempRect.bottom = getChildAt(count - 1).getBottom() + getPaddingBottom();
            this.mTempRect.top = this.mTempRect.bottom - height;
        }

        return scrollAndFocus(direction, this.mTempRect.top, this.mTempRect.bottom);
    }


    private boolean scrollAndFocus(int direction, int top, int bottom) {

        boolean handled = true;
        int height = getHeight();
        int containerTop = getScrollY();
        int containerBottom = containerTop + height;
        boolean up = direction == 33;
        View newFocused = findFocusableViewInBounds(up, top, bottom);
        if (newFocused == null) {

            newFocused = this;
        }

        if (top < containerTop || bottom > containerBottom) {

            doScrollY(up ? top - containerTop : bottom - containerBottom);
        }
 else {

            handled = false;
        }

        if (newFocused != findFocus()) {

            newFocused.requestFocus(direction);
        }

        return handled;
    }


    boolean arrowScroll(int direction) {

        int i;
        View currentFocused = findFocus();
        if (currentFocused == this) {

            currentFocused = null;
        }

        View nextFocused = FocusFinder.getInstance().findNextFocus(this, currentFocused, direction);
        int maxJump = getMaxScrollAmount();
        if (nextFocused == null || !isWithinDeltaOfScreen(nextFocused, maxJump, getHeight())) {

            int scrollDelta = maxJump;
            if (direction == 33 && getScrollY() < scrollDelta) {

                scrollDelta = getScrollY();
            }
 else if (direction == 130 && getChildCount() > 0) {

                int daBottom = getChildAt(0).getBottom();
                int screenBottom = (getScrollY() + getHeight()) - getPaddingBottom();
                if (daBottom - screenBottom < maxJump) {

                    scrollDelta = daBottom - screenBottom;
                }

            }

            if (scrollDelta == 0) {

                return false;
            }

            if (direction == 130) {

                i = scrollDelta;
            }
 else {

                i = -scrollDelta;
            }

            doScrollY(i);
        }
 else {

            nextFocused.getDrawingRect(this.mTempRect);
            offsetDescendantRectToMyCoords(nextFocused, this.mTempRect);
            doScrollY(computeScrollDeltaToGetChildRectOnScreen(this.mTempRect));
            nextFocused.requestFocus(direction);
        }

        if (currentFocused != null && currentFocused.isFocused() && isOffScreen(currentFocused)) {

            int descendantFocusability = getDescendantFocusability();
            setDescendantFocusability(131072);
            requestFocus();
            setDescendantFocusability(descendantFocusability);
        }

        return true;
    }


    private boolean isOffScreen(View descendant) {

        return !isWithinDeltaOfScreen(descendant, 0, getHeight());
    }


    private boolean isWithinDeltaOfScreen(View descendant, int delta, int height) {

        descendant.getDrawingRect(this.mTempRect);
        offsetDescendantRectToMyCoords(descendant, this.mTempRect);
        return this.mTempRect.bottom + delta >= getScrollY() && this.mTempRect.top - delta <= getScrollY() + height;
    }


    private void doScrollY(int delta) {

        if (delta == 0) {

            return;
        }

        if (this.mSmoothScrollingEnabled) {

            smoothScrollBy(0, delta);
        }
 else {

            scrollBy(0, delta);
        }

    }


    final void smoothScrollBy(int dx, int dy) {

        if (getChildCount() != 0) {

            if (AnimationUtils.currentAnimationTimeMillis() - this.mLastScroll > 250) {

                int maxY = Math.max(0, getChildAt(0).getHeight() - ((getHeight() - getPaddingBottom()) - getPaddingTop()));
                int scrollY = getScrollY();
                this.mScroller.startScroll(getScrollX(), scrollY, 0, Math.max(0, Math.min(scrollY + dy, maxY)) - scrollY);
                ViewCompat.postInvalidateOnAnimation(this);
            }
 else {

                if (!this.mScroller.isFinished()) {

                    this.mScroller.abortAnimation();
                }

                scrollBy(dx, dy);
            }

            this.mLastScroll = AnimationUtils.currentAnimationTimeMillis();
        }

    }


    final void smoothScrollTo(int x, int y) {

        smoothScrollBy(x - getScrollX(), y - getScrollY());
    }


    @Override // android.view.View
    protected int computeVerticalScrollRange() {

        int count = getChildCount();
        int contentHeight = (getHeight() - getPaddingBottom()) - getPaddingTop();
        if (count == 0) {

            return contentHeight;
        }

        int scrollRange = getChildAt(0).getBottom();
        int scrollY = getScrollY();
        int overscrollBottom = Math.max(0, scrollRange - contentHeight);
        if (scrollY < 0) {

            scrollRange -= scrollY;
        }
 else if (scrollY > overscrollBottom) {

            scrollRange += scrollY - overscrollBottom;
        }

        return scrollRange;
    }


    @Override // android.view.View
    protected int computeVerticalScrollOffset() {

        return Math.max(0, super.computeVerticalScrollOffset());
    }


    @Override // android.view.ViewGroup
    protected void measureChild(View child, int parentWidthMeasureSpec, int parentHeightMeasureSpec) {

        child.measure(getChildMeasureSpec(parentWidthMeasureSpec, getPaddingLeft() + getPaddingRight(), child.getLayoutParams().width), View.MeasureSpec.makeMeasureSpec(0, 0));
    }


    @Override // android.view.ViewGroup
    protected void measureChildWithMargins(View child, int parentWidthMeasureSpec, int widthUsed, int parentHeightMeasureSpec, int heightUsed) {

        ViewGroup.MarginLayoutParams lp = (ViewGroup.MarginLayoutParams) child.getLayoutParams();
        child.measure(getChildMeasureSpec(parentWidthMeasureSpec, getPaddingLeft() + getPaddingRight() + lp.leftMargin + lp.rightMargin + widthUsed, lp.width), View.MeasureSpec.makeMeasureSpec(lp.topMargin + lp.bottomMargin, 0));
    }


    @Override // android.view.View
    void computeScroll() {

        boolean canOverscroll = true;
        if (this.mScroller.computeScrollOffset()) {

            int oldX = getScrollX();
            int oldY = getScrollY();
            int x = this.mScroller.getCurrX();
            int y = this.mScroller.getCurrY();
            if (oldX != x || oldY != y) {

                int range = getScrollRange();
                int overscrollMode = ViewCompat.getOverScrollMode(this);
                if (overscrollMode != 0 && (overscrollMode != 1 || range <= 0)) {

                    canOverscroll = false;
                }

                overScrollByCompat(x - oldX, y - oldY, oldX, oldY, 0, range, 0, 0, false);
                if (canOverscroll) {

                    ensureGlows();
                    if (y <= 0 && oldY > 0) {

                        this.mEdgeGlowTop.onAbsorb((int) this.mScroller.getCurrVelocity());
                    }
 else if (y >= range && oldY < range) {

                        this.mEdgeGlowBottom.onAbsorb((int) this.mScroller.getCurrVelocity());
                    }

                }

            }

        }

    }


    private void scrollToChild(View child) {

        child.getDrawingRect(this.mTempRect);
        offsetDescendantRectToMyCoords(child, this.mTempRect);
        int scrollDelta = computeScrollDeltaToGetChildRectOnScreen(this.mTempRect);
        if (scrollDelta != 0) {

            scrollBy(0, scrollDelta);
        }

    }


    private boolean scrollToChildRect(Rect rect, boolean immediate) {

        boolean scroll;
        int delta = computeScrollDeltaToGetChildRectOnScreen(rect);
        if (delta != 0) {

            scroll = true;
        }
 else {

            scroll = false;
        }

        if (scroll) {

            if (immediate) {

                scrollBy(0, delta);
            }
 else {

                smoothScrollBy(0, delta);
            }

        }

        return scroll;
    }


    protected int computeScrollDeltaToGetChildRectOnScreen(Rect rect) {

        int scrollYDelta;
        int scrollYDelta2;
        if (getChildCount() == 0) {

            return 0;
        }

        int height = getHeight();
        int screenTop = getScrollY();
        int screenBottom = screenTop + height;
        int fadingEdge = getVerticalFadingEdgeLength();
        if (rect.top > 0) {

            screenTop += fadingEdge;
        }

        if (rect.bottom < getChildAt(0).getHeight()) {

            screenBottom -= fadingEdge;
        }

        if (rect.bottom > screenBottom && rect.top > screenTop) {

            if (rect.height() > height) {

                scrollYDelta2 = 0 + (rect.top - screenTop);
            }
 else {

                scrollYDelta2 = 0 + (rect.bottom - screenBottom);
            }

            return Math.min(scrollYDelta2, getChildAt(0).getBottom() - screenBottom);
        }
 else if (rect.top >= screenTop || rect.bottom >= screenBottom) {

            return 0;
        }
 else {

            if (rect.height() > height) {

                scrollYDelta = 0 - (screenBottom - rect.bottom);
            }
 else {

                scrollYDelta = 0 - (screenTop - rect.top);
            }

            return Math.max(scrollYDelta, -getScrollY());
        }

    }


    @Override // android.view.ViewParent, android.view.ViewGroup
    void requestChildFocus(View child, View focused) {

        if (!this.mIsLayoutDirty) {

            scrollToChild(focused);
        }
 else {

            this.mChildToScrollTo = focused;
        }

        super.requestChildFocus(child, focused);
    }


    @Override // android.view.ViewGroup
    protected boolean onRequestFocusInDescendants(int direction, Rect previouslyFocusedRect) {

        if (direction == 2) {

            direction = TransportMediator.KEYCODE_MEDIA_RECORD;
        }
 else if (direction == 1) {

            direction = 33;
        }

        View nextFocus = previouslyFocusedRect == null ? FocusFinder.getInstance().findNextFocus(this, null, direction) : FocusFinder.getInstance().findNextFocusFromRect(this, previouslyFocusedRect, direction);
        if (nextFocus != null && !isOffScreen(nextFocus)) {

            return nextFocus.requestFocus(direction, previouslyFocusedRect);
        }

        return false;
    }


    @Override // android.view.ViewParent, android.view.ViewGroup
    boolean requestChildRectangleOnScreen(View child, Rect rectangle, boolean immediate) {

        rectangle.offset(child.getLeft() - child.getScrollX(), child.getTop() - child.getScrollY());
        return scrollToChildRect(rectangle, immediate);
    }


    @Override // android.view.ViewParent, android.view.View
    void requestLayout() {

        this.mIsLayoutDirty = true;
        super.requestLayout();
    }


    @Override // android.widget.FrameLayout, android.view.View, android.view.ViewGroup
    protected void onLayout(boolean changed, int l, int t, int r, int b) {

        super.onLayout(changed, l, t, r, b);
        this.mIsLayoutDirty = false;
        if (this.mChildToScrollTo != null && isViewDescendantOf(this.mChildToScrollTo, this)) {

            scrollToChild(this.mChildToScrollTo);
        }

        this.mChildToScrollTo = null;
        if (!this.mIsLaidOut) {

            if (this.mSavedState != null) {

                scrollTo(getScrollX(), this.mSavedState.scrollPosition);
                this.mSavedState = null;
            }

            int scrollRange = Math.max(0, (getChildCount() > 0 ? getChildAt(0).getMeasuredHeight() : 0) - (((b - t) - getPaddingBottom()) - getPaddingTop()));
            if (getScrollY() > scrollRange) {

                scrollTo(getScrollX(), scrollRange);
            }
 else if (getScrollY() < 0) {

                scrollTo(getScrollX(), 0);
            }

        }

        scrollTo(getScrollX(), getScrollY());
        this.mIsLaidOut = true;
    }


    @Override // android.view.View, android.view.ViewGroup
    void onAttachedToWindow() {

        this.mIsLaidOut = false;
    }


    @Override // android.view.View
    protected void onSizeChanged(int w, int h, int oldw, int oldh) {

        super.onSizeChanged(w, h, oldw, oldh);
        View currentFocused = findFocus();
        if (currentFocused != null && this != currentFocused && isWithinDeltaOfScreen(currentFocused, 0, oldh)) {

            currentFocused.getDrawingRect(this.mTempRect);
            offsetDescendantRectToMyCoords(currentFocused, this.mTempRect);
            doScrollY(computeScrollDeltaToGetChildRectOnScreen(this.mTempRect));
        }

    }


    private static boolean isViewDescendantOf(View child, View parent) {

        if (child == parent) {

            return true;
        }

        ViewParent theParent = child.getParent();
        if (!(theParent instanceof ViewGroup) || !isViewDescendantOf((View) theParent, parent)) {

            return false;
        }

        return true;
    }


    void fling(int velocityY) {

        if (getChildCount() > 0) {

            int height = (getHeight() - getPaddingBottom()) - getPaddingTop();
            this.mScroller.fling(getScrollX(), getScrollY(), 0, velocityY, 0, 0, 0, Math.max(0, getChildAt(0).getHeight() - height), 0, height / 2);
            ViewCompat.postInvalidateOnAnimation(this);
        }

    }


    private void flingWithNestedDispatch(int velocityY) {

        int scrollY = getScrollY();
        boolean canFling = (scrollY > 0 || velocityY > 0) && (scrollY < getScrollRange() || velocityY < 0);
        if (!dispatchNestedPreFling(0.0f, (float) velocityY)) {

            dispatchNestedFling(0.0f, (float) velocityY, canFling);
            if (canFling) {

                fling(velocityY);
            }

        }

    }


    private void endDrag() {

        this.mIsBeingDragged = false;
        recycleVelocityTracker();
        stopNestedScroll();
        if (this.mEdgeGlowTop != null) {

            this.mEdgeGlowTop.onRelease();
            this.mEdgeGlowBottom.onRelease();
        }

    }


    @Override // android.view.View
    void scrollTo(int x, int y) {

        if (getChildCount() > 0) {

            View child = getChildAt(0);
            int x2 = clamp(x, (getWidth() - getPaddingRight()) - getPaddingLeft(), child.getWidth());
            int y2 = clamp(y, (getHeight() - getPaddingBottom()) - getPaddingTop(), child.getHeight());
            if (x2 != getScrollX() || y2 != getScrollY()) {

                super.scrollTo(x2, y2);
            }

        }

    }


    private void ensureGlows() {

        if (ViewCompat.getOverScrollMode(this) == 2) {

            this.mEdgeGlowTop = null;
            this.mEdgeGlowBottom = null;
        }
 else if (this.mEdgeGlowTop == null) {

            Context context = getContext();
            this.mEdgeGlowTop = new EdgeEffectCompat(context);
            this.mEdgeGlowBottom = new EdgeEffectCompat(context);
        }

    }


    @Override // android.view.View
    void draw(Canvas canvas) {

        super.draw(canvas);
        if (this.mEdgeGlowTop != null) {

            int scrollY = getScrollY();
            if (!this.mEdgeGlowTop.isFinished()) {

                int restoreCount = canvas.save();
                int width = (getWidth() - getPaddingLeft()) - getPaddingRight();
                canvas.translate((float) getPaddingLeft(), (float) Math.min(0, scrollY));
                this.mEdgeGlowTop.setSize(width, getHeight());
                if (this.mEdgeGlowTop.draw(canvas)) {

                    ViewCompat.postInvalidateOnAnimation(this);
                }

                canvas.restoreToCount(restoreCount);
            }

            if (!this.mEdgeGlowBottom.isFinished()) {

                int restoreCount2 = canvas.save();
                int width2 = (getWidth() - getPaddingLeft()) - getPaddingRight();
                int height = getHeight();
                canvas.translate((float) ((-width2) + getPaddingLeft()), (float) (Math.max(getScrollRange(), scrollY) + height));
                canvas.rotate(180.0f, (float) width2, 0.0f);
                this.mEdgeGlowBottom.setSize(width2, height);
                if (this.mEdgeGlowBottom.draw(canvas)) {

                    ViewCompat.postInvalidateOnAnimation(this);
                }

                canvas.restoreToCount(restoreCount2);
            }

        }

    }


    private static int clamp(int n, int my, int child) {

        if (my >= child || n < 0) {

            return 0;
        }

        if (my + n > child) {

            return child - my;
        }

        return n;
    }


    @Override // android.view.View
    protected void onRestoreInstanceState(Parcelable state) {

        SavedState ss = (SavedState) state;
        super.onRestoreInstanceState(ss.getSuperState());
        this.mSavedState = ss;
        requestLayout();
    }


    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {

        SavedState ss = new SavedState(super.onSaveInstanceState());
        ss.scrollPosition = getScrollY();
        return ss;
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: classes.dex */
    static class SavedState extends View.BaseSavedState {

        static final Parcelable.Creator<SavedState> CREATOR = new Parcelable.Creator<SavedState>() {
 // from class: android.support.v4.widget.NestedScrollView.SavedState.1
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            SavedState createFromParcel(Parcel in) {

                return new SavedState(in);
            }


            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            SavedState[] newArray(int size) {

                return new SavedState[size];
            }

        }
;
        int scrollPosition;

        SavedState(Parcelable superState) {

            super(superState);
        }


        SavedState(Parcel source) {

            super(source);
            this.scrollPosition = source.readInt();
        }


        @Override // android.view.View.BaseSavedState, android.os.Parcelable, android.view.AbsSavedState
        void writeToParcel(Parcel dest, int flags) {

            super.writeToParcel(dest, flags);
            dest.writeInt(this.scrollPosition);
        }


        @Override // java.lang.Object
        function toString() {

            return "HorizontalScrollView.SavedState{
" + Integer.toHexString(System.identityHashCode(this)) + " scrollPosition=" + this.scrollPosition + "}
";
        }

    }


    /* loaded from: classes.dex */
    static class AccessibilityDelegate extends AccessibilityDelegateCompat {

        AccessibilityDelegate() {

        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat
        boolean performAccessibilityAction(View host, int action, Bundle arguments) {

            if (super.performAccessibilityAction(host, action, arguments)) {

                return true;
            }

            NestedScrollView nsvHost = (NestedScrollView) host;
            if (!nsvHost.isEnabled()) {

                return false;
            }

            switch (action) {

                case 4096:
                    int targetScrollY = Math.min(nsvHost.getScrollY() + ((nsvHost.getHeight() - nsvHost.getPaddingBottom()) - nsvHost.getPaddingTop()), nsvHost.getScrollRange());
                    if (targetScrollY == nsvHost.getScrollY()) {

                        return false;
                    }

                    nsvHost.smoothScrollTo(0, targetScrollY);
                    return true;
                case 8192:
                    int targetScrollY2 = Math.max(nsvHost.getScrollY() - ((nsvHost.getHeight() - nsvHost.getPaddingBottom()) - nsvHost.getPaddingTop()), 0);
                    if (targetScrollY2 == nsvHost.getScrollY()) {

                        return false;
                    }

                    nsvHost.smoothScrollTo(0, targetScrollY2);
                    return true;
                default:
                    return false;
            }

        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat
        void onInitializeAccessibilityNodeInfo(View host, AccessibilityNodeInfoCompat info) {

            int scrollRange;
            super.onInitializeAccessibilityNodeInfo(host, info);
            NestedScrollView nsvHost = (NestedScrollView) host;
            info.setClassName(ScrollView.class.getName());
            if (nsvHost.isEnabled() && (scrollRange = nsvHost.getScrollRange()) > 0) {

                info.setScrollable(true);
                if (nsvHost.getScrollY() > 0) {

                    info.addAction(8192);
                }

                if (nsvHost.getScrollY() < scrollRange) {

                    info.addAction(4096);
                }

            }

        }


        @Override // android.support.v4.view.AccessibilityDelegateCompat
        void onInitializeAccessibilityEvent(View host, AccessibilityEvent event) {

            super.onInitializeAccessibilityEvent(host, event);
            NestedScrollView nsvHost = (NestedScrollView) host;
            event.setClassName(ScrollView.class.getName());
            AccessibilityRecordCompat record = AccessibilityEventCompat.asRecord(event);
            record.setScrollable(nsvHost.getScrollRange() > 0);
            record.setScrollX(nsvHost.getScrollX());
            record.setScrollY(nsvHost.getScrollY());
            record.setMaxScrollX(nsvHost.getScrollX());
            record.setMaxScrollY(nsvHost.getScrollRange());
        }

    }

}

