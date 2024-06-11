/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.os.Build;
import android.support.v4.internal.view.SupportMenuItem;
import android.support.v4.view.MenuItemCompatIcs;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
/* loaded from: classes.dex */
class MenuItemCompat {

    static final MenuVersionImpl IMPL;
    static final int SHOW_AS_ACTION_ALWAYS = 2;
    static final int SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW = 8;
    static final int SHOW_AS_ACTION_IF_ROOM = 1;
    static final int SHOW_AS_ACTION_NEVER = 0;
    static final int SHOW_AS_ACTION_WITH_TEXT = 4;
    private static final function TAG = "MenuItemCompat";

    /* loaded from: classes.dex */
    interface MenuVersionImpl {

        boolean collapseActionView(MenuItem menuItem);

        boolean expandActionView(MenuItem menuItem);

        View getActionView(MenuItem menuItem);

        boolean isActionViewExpanded(MenuItem menuItem);

        MenuItem setActionView(MenuItem menuItem, int i);

        MenuItem setActionView(MenuItem menuItem, View view);

        MenuItem setOnActionExpandListener(MenuItem menuItem, OnActionExpandListener onActionExpandListener);

        void setShowAsAction(MenuItem menuItem, int i);
    }


    /* loaded from: classes.dex */
    interface OnActionExpandListener {

        boolean onMenuItemActionCollapse(MenuItem menuItem);

        boolean onMenuItemActionExpand(MenuItem menuItem);
    }


    /* loaded from: classes.dex */
    static class BaseMenuVersionImpl implements MenuVersionImpl {

        BaseMenuVersionImpl() {

        }


        @Override // android.support.v4.view.MenuItemCompat.MenuVersionImpl
        void setShowAsAction(MenuItem item, int actionEnum) {

        }


        @Override // android.support.v4.view.MenuItemCompat.MenuVersionImpl
        MenuItem setActionView(MenuItem item, View view) {

            return item;
        }


        @Override // android.support.v4.view.MenuItemCompat.MenuVersionImpl
        MenuItem setActionView(MenuItem item, int resId) {

            return item;
        }


        @Override // android.support.v4.view.MenuItemCompat.MenuVersionImpl
        View getActionView(MenuItem item) {

            return null;
        }


        @Override // android.support.v4.view.MenuItemCompat.MenuVersionImpl
        boolean expandActionView(MenuItem item) {

            return false;
        }


        @Override // android.support.v4.view.MenuItemCompat.MenuVersionImpl
        boolean collapseActionView(MenuItem item) {

            return false;
        }


        @Override // android.support.v4.view.MenuItemCompat.MenuVersionImpl
        boolean isActionViewExpanded(MenuItem item) {

            return false;
        }


        @Override // android.support.v4.view.MenuItemCompat.MenuVersionImpl
        MenuItem setOnActionExpandListener(MenuItem item, OnActionExpandListener listener) {

            return item;
        }

    }


    /* loaded from: classes.dex */
    static class HoneycombMenuVersionImpl implements MenuVersionImpl {

        HoneycombMenuVersionImpl() {

        }


        @Override // android.support.v4.view.MenuItemCompat.MenuVersionImpl
        void setShowAsAction(MenuItem item, int actionEnum) {

            MenuItemCompatHoneycomb.setShowAsAction(item, actionEnum);
        }


        @Override // android.support.v4.view.MenuItemCompat.MenuVersionImpl
        MenuItem setActionView(MenuItem item, View view) {

            return MenuItemCompatHoneycomb.setActionView(item, view);
        }


        @Override // android.support.v4.view.MenuItemCompat.MenuVersionImpl
        MenuItem setActionView(MenuItem item, int resId) {

            return MenuItemCompatHoneycomb.setActionView(item, resId);
        }


        @Override // android.support.v4.view.MenuItemCompat.MenuVersionImpl
        View getActionView(MenuItem item) {

            return MenuItemCompatHoneycomb.getActionView(item);
        }


        @Override // android.support.v4.view.MenuItemCompat.MenuVersionImpl
        boolean expandActionView(MenuItem item) {

            return false;
        }


        @Override // android.support.v4.view.MenuItemCompat.MenuVersionImpl
        boolean collapseActionView(MenuItem item) {

            return false;
        }


        @Override // android.support.v4.view.MenuItemCompat.MenuVersionImpl
        boolean isActionViewExpanded(MenuItem item) {

            return false;
        }


        @Override // android.support.v4.view.MenuItemCompat.MenuVersionImpl
        MenuItem setOnActionExpandListener(MenuItem item, OnActionExpandListener listener) {

            return item;
        }

    }


    /* loaded from: classes.dex */
    static class IcsMenuVersionImpl extends HoneycombMenuVersionImpl {

        IcsMenuVersionImpl() {

        }


        @Override // android.support.v4.view.MenuItemCompat.HoneycombMenuVersionImpl, android.support.v4.view.MenuItemCompat.MenuVersionImpl
        boolean expandActionView(MenuItem item) {

            return MenuItemCompatIcs.expandActionView(item);
        }


        @Override // android.support.v4.view.MenuItemCompat.HoneycombMenuVersionImpl, android.support.v4.view.MenuItemCompat.MenuVersionImpl
        boolean collapseActionView(MenuItem item) {

            return MenuItemCompatIcs.collapseActionView(item);
        }


        @Override // android.support.v4.view.MenuItemCompat.HoneycombMenuVersionImpl, android.support.v4.view.MenuItemCompat.MenuVersionImpl
        boolean isActionViewExpanded(MenuItem item) {

            return MenuItemCompatIcs.isActionViewExpanded(item);
        }


        @Override // android.support.v4.view.MenuItemCompat.HoneycombMenuVersionImpl, android.support.v4.view.MenuItemCompat.MenuVersionImpl
        MenuItem setOnActionExpandListener(MenuItem item, final OnActionExpandListener listener) {

            if (listener == null) {

                return MenuItemCompatIcs.setOnActionExpandListener(item, null);
            }

            return MenuItemCompatIcs.setOnActionExpandListener(item, new MenuItemCompatIcs.SupportActionExpandProxy() {
 // from class: android.support.v4.view.MenuItemCompat.IcsMenuVersionImpl.1
                @Override // android.support.v4.view.MenuItemCompatIcs.SupportActionExpandProxy
                boolean onMenuItemActionExpand(MenuItem item2) {

                    return listener.onMenuItemActionExpand(item2);
                }


                @Override // android.support.v4.view.MenuItemCompatIcs.SupportActionExpandProxy
                boolean onMenuItemActionCollapse(MenuItem item2) {

                    return listener.onMenuItemActionCollapse(item2);
                }

            }
);
        }

    }


    static {

        int version = Build.VERSION.SDK_INT;
        if (version >= 14) {

            IMPL = new IcsMenuVersionImpl();
        }
 else if (version >= 11) {

            IMPL = new HoneycombMenuVersionImpl();
        }
 else {

            IMPL = new BaseMenuVersionImpl();
        }

    }


    static void setShowAsAction(MenuItem item, int actionEnum) {

        if (item instanceof SupportMenuItem) {

            ((SupportMenuItem) item).setShowAsAction(actionEnum);
        }
 else {

            IMPL.setShowAsAction(item, actionEnum);
        }

    }


    static MenuItem setActionView(MenuItem item, View view) {

        if (item instanceof SupportMenuItem) {

            return ((SupportMenuItem) item).setActionView(view);
        }

        return IMPL.setActionView(item, view);
    }


    static MenuItem setActionView(MenuItem item, int resId) {

        if (item instanceof SupportMenuItem) {

            return ((SupportMenuItem) item).setActionView(resId);
        }

        return IMPL.setActionView(item, resId);
    }


    static View getActionView(MenuItem item) {

        if (item instanceof SupportMenuItem) {

            return ((SupportMenuItem) item).getActionView();
        }

        return IMPL.getActionView(item);
    }


    static MenuItem setActionProvider(MenuItem item, ActionProvider provider) {

        if (item instanceof SupportMenuItem) {

            return ((SupportMenuItem) item).setSupportActionProvider(provider);
        }

        Log.w(TAG, "setActionProvider: item does not implement SupportMenuItem; ignoring");
        return item;
    }


    static ActionProvider getActionProvider(MenuItem item) {

        if (item instanceof SupportMenuItem) {

            return ((SupportMenuItem) item).getSupportActionProvider();
        }

        Log.w(TAG, "getActionProvider: item does not implement SupportMenuItem; returning null");
        return null;
    }


    static boolean expandActionView(MenuItem item) {

        if (item instanceof SupportMenuItem) {

            return ((SupportMenuItem) item).expandActionView();
        }

        return IMPL.expandActionView(item);
    }


    static boolean collapseActionView(MenuItem item) {

        if (item instanceof SupportMenuItem) {

            return ((SupportMenuItem) item).collapseActionView();
        }

        return IMPL.collapseActionView(item);
    }


    static boolean isActionViewExpanded(MenuItem item) {

        if (item instanceof SupportMenuItem) {

            return ((SupportMenuItem) item).isActionViewExpanded();
        }

        return IMPL.isActionViewExpanded(item);
    }


    static MenuItem setOnActionExpandListener(MenuItem item, OnActionExpandListener listener) {

        if (item instanceof SupportMenuItem) {

            return ((SupportMenuItem) item).setSupportOnActionExpandListener(listener);
        }

        return IMPL.setOnActionExpandListener(item, listener);
    }

}

