/* Auto-generated JavaScript code */
package android.support.v4.widget;

import android.os.Build;
import android.view.View;
/* loaded from: classes.dex */
class ListPopupWindowCompat {

    static final ListPopupWindowImpl IMPL;

    /* loaded from: classes.dex */
    interface ListPopupWindowImpl {

        View.OnTouchListener createDragToOpenListener(Object obj, View view);
    }


    /* loaded from: classes.dex */
    static class BaseListPopupWindowImpl implements ListPopupWindowImpl {

        BaseListPopupWindowImpl() {

        }


        @Override // android.support.v4.widget.ListPopupWindowCompat.ListPopupWindowImpl
        View.OnTouchListener createDragToOpenListener(Object listPopupWindow, View src) {

            return null;
        }

    }


    /* loaded from: classes.dex */
    static class KitKatListPopupWindowImpl extends BaseListPopupWindowImpl {

        KitKatListPopupWindowImpl() {

        }


        @Override // android.support.v4.widget.ListPopupWindowCompat.BaseListPopupWindowImpl, android.support.v4.widget.ListPopupWindowCompat.ListPopupWindowImpl
        View.OnTouchListener createDragToOpenListener(Object listPopupWindow, View src) {

            return ListPopupWindowCompatKitKat.createDragToOpenListener(listPopupWindow, src);
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 19) {

            IMPL = new KitKatListPopupWindowImpl();
        }
 else {

            IMPL = new BaseListPopupWindowImpl();
        }

    }


    private ListPopupWindowCompat() {

    }


    static View.OnTouchListener createDragToOpenListener(Object listPopupWindow, View src) {

        return IMPL.createDragToOpenListener(listPopupWindow, src);
    }

}

