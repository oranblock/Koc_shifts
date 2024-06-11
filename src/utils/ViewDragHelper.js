/* Auto-generated JavaScript code */
package android.support.v4.widget;

import android.content.Context;
import android.support.v4.view.MotionEventCompat;
import android.support.v4.view.VelocityTrackerCompat;
import android.support.v4.view.ViewCompat;
import android.view.MotionEvent;
import android.view.VelocityTracker;
import android.view.View;
import android.view.ViewConfiguration;
import android.view.ViewGroup;
import android.view.animation.Interpolator;
import com.google.android.gms.auth.api.credentials.CredentialsApi;
import java.util.Arrays;
/* loaded from: classes.dex */
class ViewDragHelper {

    private static final int BASE_SETTLE_DURATION = 256;
    static final int DIRECTION_ALL = 3;
    static final int DIRECTION_HORIZONTAL = 1;
    static final int DIRECTION_VERTICAL = 2;
    static final int EDGE_ALL = 15;
    static final int EDGE_BOTTOM = 8;
    static final int EDGE_LEFT = 1;
    static final int EDGE_RIGHT = 2;
    private static final int EDGE_SIZE = 20;
    static final int EDGE_TOP = 4;
    static final int INVALID_POINTER = -1;
    private static final int MAX_SETTLE_DURATION = 600;
    static final int STATE_DRAGGING = 1;
    static final int STATE_IDLE = 0;
    static final int STATE_SETTLING = 2;
    private static final function TAG = "ViewDragHelper";
    private static final Interpolator sInterpolator = new Interpolator() {
 // from class: android.support.v4.widget.ViewDragHelper.1
        @Override // android.animation.TimeInterpolator
        float getInterpolation(float t) {

            float t2 = t - 1.0f;
            return (t2 * t2 * t2 * t2 * t2) + 1.0f;
        }

    }
;
    private final Callback mCallback;
    private View mCapturedView;
    private int mDragState;
    private int[] mEdgeDragsInProgress;
    private int[] mEdgeDragsLocked;
    private int mEdgeSize;
    private int[] mInitialEdgesTouched;
    private float[] mInitialMotionX;
    private float[] mInitialMotionY;
    private float[] mLastMotionX;
    private float[] mLastMotionY;
    private float mMaxVelocity;
    private float mMinVelocity;
    private final ViewGroup mParentView;
    private int mPointersDown;
    private boolean mReleaseInProgress;
    private ScrollerCompat mScroller;
    private int mTouchSlop;
    private int mTrackingEdges;
    private VelocityTracker mVelocityTracker;
    private int mActivePointerId = -1;
    private final Runnable mSetIdleRunnable = new Runnable() {
 // from class: android.support.v4.widget.ViewDragHelper.2
        @Override // java.lang.Runnable
        void run() {

            ViewDragHelper.this.setDragState(0);
        }

    }
;

    /* loaded from: classes.dex */
    static abstract class Callback {

        abstract boolean tryCaptureView(View view, int i);

        void onViewDragStateChanged(int state) {

        }


        void onViewPositionChanged(View changedView, int left, int top, int dx, int dy) {

        }


        void onViewCaptured(View capturedChild, int activePointerId) {

        }


        void onViewReleased(View releasedChild, float xvel, float yvel) {

        }


        void onEdgeTouched(int edgeFlags, int pointerId) {

        }


        boolean onEdgeLock(int edgeFlags) {

            return false;
        }


        void onEdgeDragStarted(int edgeFlags, int pointerId) {

        }


        int getOrderedChildIndex(int index) {

            return index;
        }


        int getViewHorizontalDragRange(View child) {

            return 0;
        }


        int getViewVerticalDragRange(View child) {

            return 0;
        }


        int clampViewPositionHorizontal(View child, int left, int dx) {

            return 0;
        }


        int clampViewPositionVertical(View child, int top, int dy) {

            return 0;
        }

    }


    static ViewDragHelper create(ViewGroup forParent, Callback cb) {

        return new ViewDragHelper(forParent.getContext(), forParent, cb);
    }


    static ViewDragHelper create(ViewGroup forParent, float sensitivity, Callback cb) {

        ViewDragHelper helper = create(forParent, cb);
        helper.mTouchSlop = (int) (((float) helper.mTouchSlop) * (1.0f / sensitivity));
        return helper;
    }


    private ViewDragHelper(Context context, ViewGroup forParent, Callback cb) {

        if (forParent == null) {

            throw new IllegalArgumentException("Parent view may not be null");
        }
 else if (cb == null) {

            throw new IllegalArgumentException("Callback may not be null");
        }
 else {

            this.mParentView = forParent;
            this.mCallback = cb;
            ViewConfiguration vc = ViewConfiguration.get(context);
            this.mEdgeSize = (int) ((20.0f * context.getResources().getDisplayMetrics().density) + 0.5f);
            this.mTouchSlop = vc.getScaledTouchSlop();
            this.mMaxVelocity = (float) vc.getScaledMaximumFlingVelocity();
            this.mMinVelocity = (float) vc.getScaledMinimumFlingVelocity();
            this.mScroller = ScrollerCompat.create(context, sInterpolator);
        }

    }


    void setMinVelocity(float minVel) {

        this.mMinVelocity = minVel;
    }


    float getMinVelocity() {

        return this.mMinVelocity;
    }


    int getViewDragState() {

        return this.mDragState;
    }


    void setEdgeTrackingEnabled(int edgeFlags) {

        this.mTrackingEdges = edgeFlags;
    }


    int getEdgeSize() {

        return this.mEdgeSize;
    }


    void captureChildView(View childView, int activePointerId) {

        if (childView.getParent() != this.mParentView) {

            throw new IllegalArgumentException("captureChildView: parameter must be a descendant of the ViewDragHelper's tracked parent view (" + this.mParentView + ")");
        }

        this.mCapturedView = childView;
        this.mActivePointerId = activePointerId;
        this.mCallback.onViewCaptured(childView, activePointerId);
        setDragState(1);
    }


    View getCapturedView() {

        return this.mCapturedView;
    }


    int getActivePointerId() {

        return this.mActivePointerId;
    }


    int getTouchSlop() {

        return this.mTouchSlop;
    }


    void cancel() {

        this.mActivePointerId = -1;
        clearMotionHistory();
        if (this.mVelocityTracker != null) {

            this.mVelocityTracker.recycle();
            this.mVelocityTracker = null;
        }

    }


    void abort() {

        cancel();
        if (this.mDragState == 2) {

            int oldX = this.mScroller.getCurrX();
            int oldY = this.mScroller.getCurrY();
            this.mScroller.abortAnimation();
            int newX = this.mScroller.getCurrX();
            int newY = this.mScroller.getCurrY();
            this.mCallback.onViewPositionChanged(this.mCapturedView, newX, newY, newX - oldX, newY - oldY);
        }

        setDragState(0);
    }


    boolean smoothSlideViewTo(View child, int finalLeft, int finalTop) {

        this.mCapturedView = child;
        this.mActivePointerId = -1;
        boolean continueSliding = forceSettleCapturedViewAt(finalLeft, finalTop, 0, 0);
        if (!continueSliding && this.mDragState == 0 && this.mCapturedView != null) {

            this.mCapturedView = null;
        }

        return continueSliding;
    }


    boolean settleCapturedViewAt(int finalLeft, int finalTop) {

        if (this.mReleaseInProgress) {

            return forceSettleCapturedViewAt(finalLeft, finalTop, (int) VelocityTrackerCompat.getXVelocity(this.mVelocityTracker, this.mActivePointerId), (int) VelocityTrackerCompat.getYVelocity(this.mVelocityTracker, this.mActivePointerId));
        }

        throw new IllegalStateException("Cannot settleCapturedViewAt outside of a call to Callback#onViewReleased");
    }


    private boolean forceSettleCapturedViewAt(int finalLeft, int finalTop, int xvel, int yvel) {

        int startLeft = this.mCapturedView.getLeft();
        int startTop = this.mCapturedView.getTop();
        int dx = finalLeft - startLeft;
        int dy = finalTop - startTop;
        if (dx == 0 && dy == 0) {

            this.mScroller.abortAnimation();
            setDragState(0);
            return false;
        }

        this.mScroller.startScroll(startLeft, startTop, dx, dy, computeSettleDuration(this.mCapturedView, dx, dy, xvel, yvel));
        setDragState(2);
        return true;
    }


    private int computeSettleDuration(View child, int dx, int dy, int xvel, int yvel) {

        int xvel2 = clampMag(xvel, (int) this.mMinVelocity, (int) this.mMaxVelocity);
        int yvel2 = clampMag(yvel, (int) this.mMinVelocity, (int) this.mMaxVelocity);
        int absDx = Math.abs(dx);
        int absDy = Math.abs(dy);
        int absXVel = Math.abs(xvel2);
        int absYVel = Math.abs(yvel2);
        int addedVel = absXVel + absYVel;
        int addedDistance = absDx + absDy;
        return (int) ((((float) computeAxisDuration(dx, xvel2, this.mCallback.getViewHorizontalDragRange(child))) * (xvel2 != 0 ? ((float) absXVel) / ((float) addedVel) : ((float) absDx) / ((float) addedDistance))) + (((float) computeAxisDuration(dy, yvel2, this.mCallback.getViewVerticalDragRange(child))) * (yvel2 != 0 ? ((float) absYVel) / ((float) addedVel) : ((float) absDy) / ((float) addedDistance))));
    }


    private int computeAxisDuration(int delta, int velocity, int motionRange) {

        int duration;
        if (delta == 0) {

            return 0;
        }

        int width = this.mParentView.getWidth();
        int halfWidth = width / 2;
        float distance = ((float) halfWidth) + (((float) halfWidth) * distanceInfluenceForSnapDuration(Math.min(1.0f, ((float) Math.abs(delta)) / ((float) width))));
        int velocity2 = Math.abs(velocity);
        if (velocity2 > 0) {

            duration = Math.round(1000.0f * Math.abs(distance / ((float) velocity2))) * 4;
        }
 else {

            duration = (int) (((((float) Math.abs(delta)) / ((float) motionRange)) + 1.0f) * 256.0f);
        }

        return Math.min(duration, (int) MAX_SETTLE_DURATION);
    }


    private int clampMag(int value, int absMin, int absMax) {

        int absValue = Math.abs(value);
        if (absValue < absMin) {

            return 0;
        }

        if (absValue <= absMax) {

            return value;
        }

        if (value <= 0) {

            return -absMax;
        }

        return absMax;
    }


    private float clampMag(float value, float absMin, float absMax) {

        float absValue = Math.abs(value);
        if (absValue < absMin) {

            return 0.0f;
        }

        if (absValue <= absMax) {

            return value;
        }

        if (value <= 0.0f) {

            return -absMax;
        }

        return absMax;
    }


    private float distanceInfluenceForSnapDuration(float f) {

        return (float) Math.sin((double) ((float) (((double) (f - 0.5f)) * 0.4712389167638204d)));
    }


    void flingCapturedView(int minLeft, int minTop, int maxLeft, int maxTop) {

        if (!this.mReleaseInProgress) {

            throw new IllegalStateException("Cannot flingCapturedView outside of a call to Callback#onViewReleased");
        }

        this.mScroller.fling(this.mCapturedView.getLeft(), this.mCapturedView.getTop(), (int) VelocityTrackerCompat.getXVelocity(this.mVelocityTracker, this.mActivePointerId), (int) VelocityTrackerCompat.getYVelocity(this.mVelocityTracker, this.mActivePointerId), minLeft, maxLeft, minTop, maxTop);
        setDragState(2);
    }


    boolean continueSettling(boolean deferCallbacks) {

        if (this.mDragState == 2) {

            boolean keepGoing = this.mScroller.computeScrollOffset();
            int x = this.mScroller.getCurrX();
            int y = this.mScroller.getCurrY();
            int dx = x - this.mCapturedView.getLeft();
            int dy = y - this.mCapturedView.getTop();
            if (dx != 0) {

                this.mCapturedView.offsetLeftAndRight(dx);
            }

            if (dy != 0) {

                this.mCapturedView.offsetTopAndBottom(dy);
            }

            if (!(dx == 0 && dy == 0)) {

                this.mCallback.onViewPositionChanged(this.mCapturedView, x, y, dx, dy);
            }

            if (keepGoing && x == this.mScroller.getFinalX() && y == this.mScroller.getFinalY()) {

                this.mScroller.abortAnimation();
                keepGoing = false;
            }

            if (!keepGoing) {

                if (deferCallbacks) {

                    this.mParentView.post(this.mSetIdleRunnable);
                }
 else {

                    setDragState(0);
                }

            }

        }

        if (this.mDragState == 2) {

            return true;
        }

        return false;
    }


    private void dispatchViewReleased(float xvel, float yvel) {

        this.mReleaseInProgress = true;
        this.mCallback.onViewReleased(this.mCapturedView, xvel, yvel);
        this.mReleaseInProgress = false;
        if (this.mDragState == 1) {

            setDragState(0);
        }

    }


    private void clearMotionHistory() {

        if (this.mInitialMotionX != null) {

            Arrays.fill(this.mInitialMotionX, 0.0f);
            Arrays.fill(this.mInitialMotionY, 0.0f);
            Arrays.fill(this.mLastMotionX, 0.0f);
            Arrays.fill(this.mLastMotionY, 0.0f);
            Arrays.fill(this.mInitialEdgesTouched, 0);
            Arrays.fill(this.mEdgeDragsInProgress, 0);
            Arrays.fill(this.mEdgeDragsLocked, 0);
            this.mPointersDown = 0;
        }

    }


    private void clearMotionHistory(int pointerId) {

        if (this.mInitialMotionX != null) {

            this.mInitialMotionX[pointerId] = 0.0f;
            this.mInitialMotionY[pointerId] = 0.0f;
            this.mLastMotionX[pointerId] = 0.0f;
            this.mLastMotionY[pointerId] = 0.0f;
            this.mInitialEdgesTouched[pointerId] = 0;
            this.mEdgeDragsInProgress[pointerId] = 0;
            this.mEdgeDragsLocked[pointerId] = 0;
            this.mPointersDown &= (1 << pointerId) ^ -1;
        }

    }


    private void ensureMotionHistorySizeForId(int pointerId) {

        if (this.mInitialMotionX == null || this.mInitialMotionX.length <= pointerId) {

            float[] imx = new float[pointerId + 1];
            float[] imy = new float[pointerId + 1];
            float[] lmx = new float[pointerId + 1];
            float[] lmy = new float[pointerId + 1];
            int[] iit = new int[pointerId + 1];
            int[] edip = new int[pointerId + 1];
            int[] edl = new int[pointerId + 1];
            if (this.mInitialMotionX != null) {

                System.arraycopy(this.mInitialMotionX, 0, imx, 0, this.mInitialMotionX.length);
                System.arraycopy(this.mInitialMotionY, 0, imy, 0, this.mInitialMotionY.length);
                System.arraycopy(this.mLastMotionX, 0, lmx, 0, this.mLastMotionX.length);
                System.arraycopy(this.mLastMotionY, 0, lmy, 0, this.mLastMotionY.length);
                System.arraycopy(this.mInitialEdgesTouched, 0, iit, 0, this.mInitialEdgesTouched.length);
                System.arraycopy(this.mEdgeDragsInProgress, 0, edip, 0, this.mEdgeDragsInProgress.length);
                System.arraycopy(this.mEdgeDragsLocked, 0, edl, 0, this.mEdgeDragsLocked.length);
            }

            this.mInitialMotionX = imx;
            this.mInitialMotionY = imy;
            this.mLastMotionX = lmx;
            this.mLastMotionY = lmy;
            this.mInitialEdgesTouched = iit;
            this.mEdgeDragsInProgress = edip;
            this.mEdgeDragsLocked = edl;
        }

    }


    private void saveInitialMotion(float x, float y, int pointerId) {

        ensureMotionHistorySizeForId(pointerId);
        float[] fArr = this.mInitialMotionX;
        this.mLastMotionX[pointerId] = x;
        fArr[pointerId] = x;
        float[] fArr2 = this.mInitialMotionY;
        this.mLastMotionY[pointerId] = y;
        fArr2[pointerId] = y;
        this.mInitialEdgesTouched[pointerId] = getEdgesTouched((int) x, (int) y);
        this.mPointersDown |= 1 << pointerId;
    }


    private void saveLastMotion(MotionEvent ev) {

        int pointerCount = MotionEventCompat.getPointerCount(ev);
        for (int i = 0; i < pointerCount; i++) {

            int pointerId = MotionEventCompat.getPointerId(ev, i);
            float x = MotionEventCompat.getX(ev, i);
            float y = MotionEventCompat.getY(ev, i);
            this.mLastMotionX[pointerId] = x;
            this.mLastMotionY[pointerId] = y;
        }

    }


    boolean isPointerDown(int pointerId) {

        return (this.mPointersDown & (1 << pointerId)) != 0;
    }


    void setDragState(int state) {

        this.mParentView.removeCallbacks(this.mSetIdleRunnable);
        if (this.mDragState != state) {

            this.mDragState = state;
            this.mCallback.onViewDragStateChanged(state);
            if (this.mDragState == 0) {

                this.mCapturedView = null;
            }

        }

    }


    boolean tryCaptureViewForDrag(View toCapture, int pointerId) {

        if (toCapture == this.mCapturedView && this.mActivePointerId == pointerId) {

            return true;
        }

        if (toCapture == null || !this.mCallback.tryCaptureView(toCapture, pointerId)) {

            return false;
        }

        this.mActivePointerId = pointerId;
        captureChildView(toCapture, pointerId);
        return true;
    }


    protected boolean canScroll(View v, boolean checkV, int dx, int dy, int x, int y) {

        if (v instanceof ViewGroup) {

            ViewGroup group = (ViewGroup) v;
            int scrollX = v.getScrollX();
            int scrollY = v.getScrollY();
            for (int i = group.getChildCount() - 1; i >= 0; i--) {

                View child = group.getChildAt(i);
                if (x + scrollX >= child.getLeft() && x + scrollX < child.getRight() && y + scrollY >= child.getTop() && y + scrollY < child.getBottom() && canScroll(child, true, dx, dy, (x + scrollX) - child.getLeft(), (y + scrollY) - child.getTop())) {

                    return true;
                }

            }

        }

        return checkV && (ViewCompat.canScrollHorizontally(v, -dx) || ViewCompat.canScrollVertically(v, -dy));
    }


    /* JADX WARN: Code restructure failed: missing block: B:47:0x0206, code lost:
        if (r11 != r13) goto L_0x0215;
     */
    /* Code decompiled incorrectly, please refer to instructions dump */
    boolean shouldInterceptTouchEvent(android.view.MotionEvent r27) {

        /*
        // Method dump skipped, instructions count: 614
        */
        throw new UnsupportedOperationException("Method not decompiled: android.support.v4.widget.ViewDragHelper.shouldInterceptTouchEvent(android.view.MotionEvent):boolean");
    }


    void processTouchEvent(MotionEvent ev) {

        int action = MotionEventCompat.getActionMasked(ev);
        int actionIndex = MotionEventCompat.getActionIndex(ev);
        if (action == 0) {

            cancel();
        }

        if (this.mVelocityTracker == null) {

            this.mVelocityTracker = VelocityTracker.obtain();
        }

        this.mVelocityTracker.addMovement(ev);
        switch (action) {

            case 0:
                float x = ev.getX();
                float y = ev.getY();
                int pointerId = MotionEventCompat.getPointerId(ev, 0);
                View toCapture = findTopChildUnder((int) x, (int) y);
                saveInitialMotion(x, y, pointerId);
                tryCaptureViewForDrag(toCapture, pointerId);
                int edgesTouched = this.mInitialEdgesTouched[pointerId];
                if ((this.mTrackingEdges & edgesTouched) != 0) {

                    this.mCallback.onEdgeTouched(this.mTrackingEdges & edgesTouched, pointerId);
                    return;
                }

                return;
            case 1:
                if (this.mDragState == 1) {

                    releaseViewForPointerUp();
                }

                cancel();
                return;
            case 2:
                if (this.mDragState == 1) {

                    int index = MotionEventCompat.findPointerIndex(ev, this.mActivePointerId);
                    float x2 = MotionEventCompat.getX(ev, index);
                    float y2 = MotionEventCompat.getY(ev, index);
                    int idx = (int) (x2 - this.mLastMotionX[this.mActivePointerId]);
                    int idy = (int) (y2 - this.mLastMotionY[this.mActivePointerId]);
                    dragTo(this.mCapturedView.getLeft() + idx, this.mCapturedView.getTop() + idy, idx, idy);
                    saveLastMotion(ev);
                    return;
                }

                int pointerCount = MotionEventCompat.getPointerCount(ev);
                for (int i = 0; i < pointerCount; i++) {

                    int pointerId2 = MotionEventCompat.getPointerId(ev, i);
                    float x3 = MotionEventCompat.getX(ev, i);
                    float y3 = MotionEventCompat.getY(ev, i);
                    float dx = x3 - this.mInitialMotionX[pointerId2];
                    float dy = y3 - this.mInitialMotionY[pointerId2];
                    reportNewEdgeDrags(dx, dy, pointerId2);
                    if (this.mDragState != 1) {

                        View toCapture2 = findTopChildUnder((int) x3, (int) y3);
                        if (!checkTouchSlop(toCapture2, dx, dy) || !tryCaptureViewForDrag(toCapture2, pointerId2)) {

                        }

                    }

                    saveLastMotion(ev);
                    return;
                }

                saveLastMotion(ev);
                return;
            case 3:
                if (this.mDragState == 1) {

                    dispatchViewReleased(0.0f, 0.0f);
                }

                cancel();
                return;
            case 4:
            default:
                return;
            case 5:
                int pointerId3 = MotionEventCompat.getPointerId(ev, actionIndex);
                float x4 = MotionEventCompat.getX(ev, actionIndex);
                float y4 = MotionEventCompat.getY(ev, actionIndex);
                saveInitialMotion(x4, y4, pointerId3);
                if (this.mDragState == 0) {

                    tryCaptureViewForDrag(findTopChildUnder((int) x4, (int) y4), pointerId3);
                    int edgesTouched2 = this.mInitialEdgesTouched[pointerId3];
                    if ((this.mTrackingEdges & edgesTouched2) != 0) {

                        this.mCallback.onEdgeTouched(this.mTrackingEdges & edgesTouched2, pointerId3);
                        return;
                    }

                    return;
                }
 else if (isCapturedViewUnder((int) x4, (int) y4)) {

                    tryCaptureViewForDrag(this.mCapturedView, pointerId3);
                    return;
                }
 else {

                    return;
                }

            case 6:
                int pointerId4 = MotionEventCompat.getPointerId(ev, actionIndex);
                if (this.mDragState == 1 && pointerId4 == this.mActivePointerId) {

                    int newActivePointer = -1;
                    int pointerCount2 = MotionEventCompat.getPointerCount(ev);
                    int i2 = 0;
                    while (true) {

                        if (i2 < pointerCount2) {

                            int id = MotionEventCompat.getPointerId(ev, i2);
                            if (id != this.mActivePointerId) {

                                if (findTopChildUnder((int) MotionEventCompat.getX(ev, i2), (int) MotionEventCompat.getY(ev, i2)) == this.mCapturedView && tryCaptureViewForDrag(this.mCapturedView, id)) {

                                    newActivePointer = this.mActivePointerId;
                                }

                            }

                            i2++;
                        }

                    }

                    if (newActivePointer == -1) {

                        releaseViewForPointerUp();
                    }

                }

                clearMotionHistory(pointerId4);
                return;
        }

    }


    private void reportNewEdgeDrags(float dx, float dy, int pointerId) {

        int dragsStarted = 0;
        if (checkNewEdgeDrag(dx, dy, pointerId, 1)) {

            dragsStarted = 0 | 1;
        }

        if (checkNewEdgeDrag(dy, dx, pointerId, 4)) {

            dragsStarted |= 4;
        }

        if (checkNewEdgeDrag(dx, dy, pointerId, 2)) {

            dragsStarted |= 2;
        }

        if (checkNewEdgeDrag(dy, dx, pointerId, 8)) {

            dragsStarted |= 8;
        }

        if (dragsStarted != 0) {

            int[] iArr = this.mEdgeDragsInProgress;
            iArr[pointerId] = iArr[pointerId] | dragsStarted;
            this.mCallback.onEdgeDragStarted(dragsStarted, pointerId);
        }

    }


    private boolean checkNewEdgeDrag(float delta, float odelta, int pointerId, int edge) {

        float absDelta = Math.abs(delta);
        float absODelta = Math.abs(odelta);
        if ((this.mInitialEdgesTouched[pointerId] & edge) != edge || (this.mTrackingEdges & edge) == 0 || (this.mEdgeDragsLocked[pointerId] & edge) == edge || (this.mEdgeDragsInProgress[pointerId] & edge) == edge) {

            return false;
        }

        if (absDelta <= ((float) this.mTouchSlop) && absODelta <= ((float) this.mTouchSlop)) {

            return false;
        }

        if (absDelta < 0.5f * absODelta && this.mCallback.onEdgeLock(edge)) {

            int[] iArr = this.mEdgeDragsLocked;
            iArr[pointerId] = iArr[pointerId] | edge;
            return false;
        }
 else if ((this.mEdgeDragsInProgress[pointerId] & edge) != 0 || absDelta <= ((float) this.mTouchSlop)) {

            return false;
        }
 else {

            return true;
        }

    }


    private boolean checkTouchSlop(View child, float dx, float dy) {

        boolean checkHorizontal;
        boolean checkVertical;
        if (child == null) {

            return false;
        }

        if (this.mCallback.getViewHorizontalDragRange(child) > 0) {

            checkHorizontal = true;
        }
 else {

            checkHorizontal = false;
        }

        if (this.mCallback.getViewVerticalDragRange(child) > 0) {

            checkVertical = true;
        }
 else {

            checkVertical = false;
        }

        return (!checkHorizontal || !checkVertical) ? checkHorizontal ? Math.abs(dx) > ((float) this.mTouchSlop) : checkVertical && Math.abs(dy) > ((float) this.mTouchSlop) : (dx * dx) + (dy * dy) > ((float) (this.mTouchSlop * this.mTouchSlop));
    }


    boolean checkTouchSlop(int directions) {

        int count = this.mInitialMotionX.length;
        for (int i = 0; i < count; i++) {

            if (checkTouchSlop(directions, i)) {

                return true;
            }

        }

        return false;
    }


    boolean checkTouchSlop(int directions, int pointerId) {

        boolean checkHorizontal;
        boolean checkVertical;
        if (!isPointerDown(pointerId)) {

            return false;
        }

        if ((directions & 1) == 1) {

            checkHorizontal = true;
        }
 else {

            checkHorizontal = false;
        }

        if ((directions & 2) == 2) {

            checkVertical = true;
        }
 else {

            checkVertical = false;
        }

        float dx = this.mLastMotionX[pointerId] - this.mInitialMotionX[pointerId];
        float dy = this.mLastMotionY[pointerId] - this.mInitialMotionY[pointerId];
        return (!checkHorizontal || !checkVertical) ? checkHorizontal ? Math.abs(dx) > ((float) this.mTouchSlop) : checkVertical && Math.abs(dy) > ((float) this.mTouchSlop) : (dx * dx) + (dy * dy) > ((float) (this.mTouchSlop * this.mTouchSlop));
    }


    boolean isEdgeTouched(int edges) {

        int count = this.mInitialEdgesTouched.length;
        for (int i = 0; i < count; i++) {

            if (isEdgeTouched(edges, i)) {

                return true;
            }

        }

        return false;
    }


    boolean isEdgeTouched(int edges, int pointerId) {

        return isPointerDown(pointerId) && (this.mInitialEdgesTouched[pointerId] & edges) != 0;
    }


    private void releaseViewForPointerUp() {

        this.mVelocityTracker.computeCurrentVelocity(CredentialsApi.ACTIVITY_RESULT_ADD_ACCOUNT, this.mMaxVelocity);
        dispatchViewReleased(clampMag(VelocityTrackerCompat.getXVelocity(this.mVelocityTracker, this.mActivePointerId), this.mMinVelocity, this.mMaxVelocity), clampMag(VelocityTrackerCompat.getYVelocity(this.mVelocityTracker, this.mActivePointerId), this.mMinVelocity, this.mMaxVelocity));
    }


    private void dragTo(int left, int top, int dx, int dy) {

        int clampedX = left;
        int clampedY = top;
        int oldLeft = this.mCapturedView.getLeft();
        int oldTop = this.mCapturedView.getTop();
        if (dx != 0) {

            clampedX = this.mCallback.clampViewPositionHorizontal(this.mCapturedView, left, dx);
            this.mCapturedView.offsetLeftAndRight(clampedX - oldLeft);
        }

        if (dy != 0) {

            clampedY = this.mCallback.clampViewPositionVertical(this.mCapturedView, top, dy);
            this.mCapturedView.offsetTopAndBottom(clampedY - oldTop);
        }

        if (dx != 0 || dy != 0) {

            this.mCallback.onViewPositionChanged(this.mCapturedView, clampedX, clampedY, clampedX - oldLeft, clampedY - oldTop);
        }

    }


    boolean isCapturedViewUnder(int x, int y) {

        return isViewUnder(this.mCapturedView, x, y);
    }


    boolean isViewUnder(View view, int x, int y) {

        if (view != null && x >= view.getLeft() && x < view.getRight() && y >= view.getTop() && y < view.getBottom()) {

            return true;
        }

        return false;
    }


    View findTopChildUnder(int x, int y) {

        for (int i = this.mParentView.getChildCount() - 1; i >= 0; i--) {

            View child = this.mParentView.getChildAt(this.mCallback.getOrderedChildIndex(i));
            if (x >= child.getLeft() && x < child.getRight() && y >= child.getTop() && y < child.getBottom()) {

                return child;
            }

        }

        return null;
    }


    private int getEdgesTouched(int x, int y) {

        int result = 0;
        if (x < this.mParentView.getLeft() + this.mEdgeSize) {

            result = 0 | 1;
        }

        if (y < this.mParentView.getTop() + this.mEdgeSize) {

            result |= 4;
        }

        if (x > this.mParentView.getRight() - this.mEdgeSize) {

            result |= 2;
        }

        if (y > this.mParentView.getBottom() - this.mEdgeSize) {

            return result | 8;
        }

        return result;
    }

}

