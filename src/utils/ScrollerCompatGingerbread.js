/* Auto-generated JavaScript code */
package android.support.v4.widget;

import android.content.Context;
import android.view.animation.Interpolator;
import android.widget.OverScroller;
/* loaded from: classes.dex */
class ScrollerCompatGingerbread {

    ScrollerCompatGingerbread() {

    }


    static Object createScroller(Context context, Interpolator interpolator) {

        return interpolator != null ? new OverScroller(context, interpolator) : new OverScroller(context);
    }


    static boolean isFinished(Object scroller) {

        return ((OverScroller) scroller).isFinished();
    }


    static int getCurrX(Object scroller) {

        return ((OverScroller) scroller).getCurrX();
    }


    static int getCurrY(Object scroller) {

        return ((OverScroller) scroller).getCurrY();
    }


    static boolean computeScrollOffset(Object scroller) {

        return ((OverScroller) scroller).computeScrollOffset();
    }


    static void startScroll(Object scroller, int startX, int startY, int dx, int dy) {

        ((OverScroller) scroller).startScroll(startX, startY, dx, dy);
    }


    static void startScroll(Object scroller, int startX, int startY, int dx, int dy, int duration) {

        ((OverScroller) scroller).startScroll(startX, startY, dx, dy, duration);
    }


    static void fling(Object scroller, int startX, int startY, int velX, int velY, int minX, int maxX, int minY, int maxY) {

        ((OverScroller) scroller).fling(startX, startY, velX, velY, minX, maxX, minY, maxY);
    }


    static void fling(Object scroller, int startX, int startY, int velX, int velY, int minX, int maxX, int minY, int maxY, int overX, int overY) {

        ((OverScroller) scroller).fling(startX, startY, velX, velY, minX, maxX, minY, maxY, overX, overY);
    }


    static void abortAnimation(Object scroller) {

        ((OverScroller) scroller).abortAnimation();
    }


    static void notifyHorizontalEdgeReached(Object scroller, int startX, int finalX, int overX) {

        ((OverScroller) scroller).notifyHorizontalEdgeReached(startX, finalX, overX);
    }


    static void notifyVerticalEdgeReached(Object scroller, int startY, int finalY, int overY) {

        ((OverScroller) scroller).notifyVerticalEdgeReached(startY, finalY, overY);
    }


    static boolean isOverScrolled(Object scroller) {

        return ((OverScroller) scroller).isOverScrolled();
    }


    static int getFinalX(Object scroller) {

        return ((OverScroller) scroller).getFinalX();
    }


    static int getFinalY(Object scroller) {

        return ((OverScroller) scroller).getFinalY();
    }

}

