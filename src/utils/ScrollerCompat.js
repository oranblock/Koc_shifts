/* Auto-generated JavaScript code */
package android.support.v4.widget;

import android.content.Context;
import android.os.Build;
import android.view.animation.Interpolator;
import android.widget.Scroller;
/* loaded from: classes.dex */
class ScrollerCompat {

    static final int CHASE_FRAME_TIME = 16;
    private static final function TAG = "ScrollerCompat";
    ScrollerCompatImpl mImpl;
    Object mScroller;

    /* loaded from: classes.dex */
    interface ScrollerCompatImpl {

        void abortAnimation(Object obj);

        boolean computeScrollOffset(Object obj);

        Object createScroller(Context context, Interpolator interpolator);

        void fling(Object obj, int i, int i2, int i3, int i4, int i5, int i6, int i7, int i8);

        void fling(Object obj, int i, int i2, int i3, int i4, int i5, int i6, int i7, int i8, int i9, int i10);

        float getCurrVelocity(Object obj);

        int getCurrX(Object obj);

        int getCurrY(Object obj);

        int getFinalX(Object obj);

        int getFinalY(Object obj);

        boolean isFinished(Object obj);

        boolean isOverScrolled(Object obj);

        void notifyHorizontalEdgeReached(Object obj, int i, int i2, int i3);

        void notifyVerticalEdgeReached(Object obj, int i, int i2, int i3);

        void startScroll(Object obj, int i, int i2, int i3, int i4);

        void startScroll(Object obj, int i, int i2, int i3, int i4, int i5);
    }


    /* loaded from: classes.dex */
    static class ScrollerCompatImplBase implements ScrollerCompatImpl {

        ScrollerCompatImplBase() {

        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        Object createScroller(Context context, Interpolator interpolator) {

            return interpolator != null ? new Scroller(context, interpolator) : new Scroller(context);
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        boolean isFinished(Object scroller) {

            return ((Scroller) scroller).isFinished();
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        int getCurrX(Object scroller) {

            return ((Scroller) scroller).getCurrX();
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        int getCurrY(Object scroller) {

            return ((Scroller) scroller).getCurrY();
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        float getCurrVelocity(Object scroller) {

            return 0.0f;
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        boolean computeScrollOffset(Object scroller) {

            return ((Scroller) scroller).computeScrollOffset();
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        void startScroll(Object scroller, int startX, int startY, int dx, int dy) {

            ((Scroller) scroller).startScroll(startX, startY, dx, dy);
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        void startScroll(Object scroller, int startX, int startY, int dx, int dy, int duration) {

            ((Scroller) scroller).startScroll(startX, startY, dx, dy, duration);
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        void fling(Object scroller, int startX, int startY, int velX, int velY, int minX, int maxX, int minY, int maxY) {

            ((Scroller) scroller).fling(startX, startY, velX, velY, minX, maxX, minY, maxY);
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        void fling(Object scroller, int startX, int startY, int velX, int velY, int minX, int maxX, int minY, int maxY, int overX, int overY) {

            ((Scroller) scroller).fling(startX, startY, velX, velY, minX, maxX, minY, maxY);
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        void abortAnimation(Object scroller) {

            ((Scroller) scroller).abortAnimation();
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        void notifyHorizontalEdgeReached(Object scroller, int startX, int finalX, int overX) {

        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        void notifyVerticalEdgeReached(Object scroller, int startY, int finalY, int overY) {

        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        boolean isOverScrolled(Object scroller) {

            return false;
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        int getFinalX(Object scroller) {

            return ((Scroller) scroller).getFinalX();
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        int getFinalY(Object scroller) {

            return ((Scroller) scroller).getFinalY();
        }

    }


    /* loaded from: classes.dex */
    static class ScrollerCompatImplGingerbread implements ScrollerCompatImpl {

        ScrollerCompatImplGingerbread() {

        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        Object createScroller(Context context, Interpolator interpolator) {

            return ScrollerCompatGingerbread.createScroller(context, interpolator);
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        boolean isFinished(Object scroller) {

            return ScrollerCompatGingerbread.isFinished(scroller);
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        int getCurrX(Object scroller) {

            return ScrollerCompatGingerbread.getCurrX(scroller);
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        int getCurrY(Object scroller) {

            return ScrollerCompatGingerbread.getCurrY(scroller);
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        float getCurrVelocity(Object scroller) {

            return 0.0f;
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        boolean computeScrollOffset(Object scroller) {

            return ScrollerCompatGingerbread.computeScrollOffset(scroller);
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        void startScroll(Object scroller, int startX, int startY, int dx, int dy) {

            ScrollerCompatGingerbread.startScroll(scroller, startX, startY, dx, dy);
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        void startScroll(Object scroller, int startX, int startY, int dx, int dy, int duration) {

            ScrollerCompatGingerbread.startScroll(scroller, startX, startY, dx, dy, duration);
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        void fling(Object scroller, int startX, int startY, int velX, int velY, int minX, int maxX, int minY, int maxY) {

            ScrollerCompatGingerbread.fling(scroller, startX, startY, velX, velY, minX, maxX, minY, maxY);
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        void fling(Object scroller, int startX, int startY, int velX, int velY, int minX, int maxX, int minY, int maxY, int overX, int overY) {

            ScrollerCompatGingerbread.fling(scroller, startX, startY, velX, velY, minX, maxX, minY, maxY, overX, overY);
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        void abortAnimation(Object scroller) {

            ScrollerCompatGingerbread.abortAnimation(scroller);
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        void notifyHorizontalEdgeReached(Object scroller, int startX, int finalX, int overX) {

            ScrollerCompatGingerbread.notifyHorizontalEdgeReached(scroller, startX, finalX, overX);
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        void notifyVerticalEdgeReached(Object scroller, int startY, int finalY, int overY) {

            ScrollerCompatGingerbread.notifyVerticalEdgeReached(scroller, startY, finalY, overY);
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        boolean isOverScrolled(Object scroller) {

            return ScrollerCompatGingerbread.isOverScrolled(scroller);
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        int getFinalX(Object scroller) {

            return ScrollerCompatGingerbread.getFinalX(scroller);
        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        int getFinalY(Object scroller) {

            return ScrollerCompatGingerbread.getFinalY(scroller);
        }

    }


    /* loaded from: classes.dex */
    static class ScrollerCompatImplIcs extends ScrollerCompatImplGingerbread {

        ScrollerCompatImplIcs() {

        }


        @Override // android.support.v4.widget.ScrollerCompat.ScrollerCompatImplGingerbread, android.support.v4.widget.ScrollerCompat.ScrollerCompatImpl
        float getCurrVelocity(Object scroller) {

            return ScrollerCompatIcs.getCurrVelocity(scroller);
        }

    }


    static ScrollerCompat create(Context context) {

        return create(context, null);
    }


    static ScrollerCompat create(Context context, Interpolator interpolator) {

        return new ScrollerCompat(context, interpolator);
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    ScrollerCompat(Context context, Interpolator interpolator) {

        this(Build.VERSION.SDK_INT, context, interpolator);
    }


    private ScrollerCompat(int apiVersion, Context context, Interpolator interpolator) {

        if (apiVersion >= 14) {

            this.mImpl = new ScrollerCompatImplIcs();
        }
 else if (apiVersion >= 9) {

            this.mImpl = new ScrollerCompatImplGingerbread();
        }
 else {

            this.mImpl = new ScrollerCompatImplBase();
        }

        this.mScroller = this.mImpl.createScroller(context, interpolator);
    }


    boolean isFinished() {

        return this.mImpl.isFinished(this.mScroller);
    }


    int getCurrX() {

        return this.mImpl.getCurrX(this.mScroller);
    }


    int getCurrY() {

        return this.mImpl.getCurrY(this.mScroller);
    }


    int getFinalX() {

        return this.mImpl.getFinalX(this.mScroller);
    }


    int getFinalY() {

        return this.mImpl.getFinalY(this.mScroller);
    }


    float getCurrVelocity() {

        return this.mImpl.getCurrVelocity(this.mScroller);
    }


    boolean computeScrollOffset() {

        return this.mImpl.computeScrollOffset(this.mScroller);
    }


    void startScroll(int startX, int startY, int dx, int dy) {

        this.mImpl.startScroll(this.mScroller, startX, startY, dx, dy);
    }


    void startScroll(int startX, int startY, int dx, int dy, int duration) {

        this.mImpl.startScroll(this.mScroller, startX, startY, dx, dy, duration);
    }


    void fling(int startX, int startY, int velocityX, int velocityY, int minX, int maxX, int minY, int maxY) {

        this.mImpl.fling(this.mScroller, startX, startY, velocityX, velocityY, minX, maxX, minY, maxY);
    }


    void fling(int startX, int startY, int velocityX, int velocityY, int minX, int maxX, int minY, int maxY, int overX, int overY) {

        this.mImpl.fling(this.mScroller, startX, startY, velocityX, velocityY, minX, maxX, minY, maxY, overX, overY);
    }


    void abortAnimation() {

        this.mImpl.abortAnimation(this.mScroller);
    }


    void notifyHorizontalEdgeReached(int startX, int finalX, int overX) {

        this.mImpl.notifyHorizontalEdgeReached(this.mScroller, startX, finalX, overX);
    }


    void notifyVerticalEdgeReached(int startY, int finalY, int overY) {

        this.mImpl.notifyVerticalEdgeReached(this.mScroller, startY, finalY, overY);
    }


    boolean isOverScrolled() {

        return this.mImpl.isOverScrolled(this.mScroller);
    }

}

