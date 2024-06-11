/* Auto-generated JavaScript code */
package android.support.v4.widget;

import android.view.View;
import android.widget.ListView;
/* loaded from: classes.dex */
class ListViewAutoScrollHelper extends AutoScrollHelper {

    private final ListView mTarget;

    ListViewAutoScrollHelper(ListView target) {

        super(target);
        this.mTarget = target;
    }


    @Override // android.support.v4.widget.AutoScrollHelper
    void scrollTargetBy(int deltaX, int deltaY) {

        View firstView;
        ListView target = this.mTarget;
        int firstPosition = target.getFirstVisiblePosition();
        if (firstPosition != -1 && (firstView = target.getChildAt(0)) != null) {

            target.setSelectionFromTop(firstPosition, firstView.getTop() - deltaY);
        }

    }


    @Override // android.support.v4.widget.AutoScrollHelper
    boolean canTargetScrollHorizontally(int direction) {

        return false;
    }


    @Override // android.support.v4.widget.AutoScrollHelper
    boolean canTargetScrollVertically(int direction) {

        ListView target = this.mTarget;
        int itemCount = target.getCount();
        if (itemCount == 0) {

            return false;
        }

        int childCount = target.getChildCount();
        int firstPosition = target.getFirstVisiblePosition();
        int lastPosition = firstPosition + childCount;
        if (direction > 0) {

            if (lastPosition >= itemCount && target.getChildAt(childCount - 1).getBottom() <= target.getHeight()) {

                return false;
            }

        }
 else if (direction >= 0) {

            return false;
        }
 else {

            if (firstPosition <= 0 && target.getChildAt(0).getTop() >= 0) {

                return false;
            }

        }

        return true;
    }

}

