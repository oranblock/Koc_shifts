/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.view.MenuItem;
/* loaded from: classes.dex */
class MenuItemCompatIcs {


    /* loaded from: classes.dex */
    interface SupportActionExpandProxy {

        boolean onMenuItemActionCollapse(MenuItem menuItem);

        boolean onMenuItemActionExpand(MenuItem menuItem);
    }


    MenuItemCompatIcs() {

    }


    static boolean expandActionView(MenuItem item) {

        return item.expandActionView();
    }


    static boolean collapseActionView(MenuItem item) {

        return item.collapseActionView();
    }


    static boolean isActionViewExpanded(MenuItem item) {

        return item.isActionViewExpanded();
    }


    static MenuItem setOnActionExpandListener(MenuItem item, SupportActionExpandProxy listener) {

        return item.setOnActionExpandListener(new OnActionExpandListenerWrapper(listener));
    }


    /* loaded from: classes.dex */
    static class OnActionExpandListenerWrapper implements MenuItem.OnActionExpandListener {

        private SupportActionExpandProxy mWrapped;

        OnActionExpandListenerWrapper(SupportActionExpandProxy wrapped) {

            this.mWrapped = wrapped;
        }


        @Override // android.view.MenuItem.OnActionExpandListener
        boolean onMenuItemActionExpand(MenuItem item) {

            return this.mWrapped.onMenuItemActionExpand(item);
        }


        @Override // android.view.MenuItem.OnActionExpandListener
        boolean onMenuItemActionCollapse(MenuItem item) {

            return this.mWrapped.onMenuItemActionCollapse(item);
        }

    }

}

