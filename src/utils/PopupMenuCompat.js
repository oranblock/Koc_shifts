/* Auto-generated JavaScript code */
package android.support.v4.widget;

import android.os.Build;
import android.view.View;
/* loaded from: classes.dex */
class PopupMenuCompat {

    static final PopupMenuImpl IMPL;

    /* loaded from: classes.dex */
    interface PopupMenuImpl {

        View.OnTouchListener getDragToOpenListener(Object obj);
    }


    /* loaded from: classes.dex */
    static class BasePopupMenuImpl implements PopupMenuImpl {

        BasePopupMenuImpl() {

        }


        @Override // android.support.v4.widget.PopupMenuCompat.PopupMenuImpl
        View.OnTouchListener getDragToOpenListener(Object popupMenu) {

            return null;
        }

    }


    /* loaded from: classes.dex */
    static class KitKatPopupMenuImpl extends BasePopupMenuImpl {

        KitKatPopupMenuImpl() {

        }


        @Override // android.support.v4.widget.PopupMenuCompat.BasePopupMenuImpl, android.support.v4.widget.PopupMenuCompat.PopupMenuImpl
        View.OnTouchListener getDragToOpenListener(Object popupMenu) {

            return PopupMenuCompatKitKat.getDragToOpenListener(popupMenu);
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 19) {

            IMPL = new KitKatPopupMenuImpl();
        }
 else {

            IMPL = new BasePopupMenuImpl();
        }

    }


    private PopupMenuCompat() {

    }


    static View.OnTouchListener getDragToOpenListener(Object popupMenu) {

        return IMPL.getDragToOpenListener(popupMenu);
    }

}

