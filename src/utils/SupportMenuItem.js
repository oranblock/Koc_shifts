/* Auto-generated JavaScript code */
package android.support.v4.internal.view;

import android.support.v4.view.ActionProvider;
import android.support.v4.view.MenuItemCompat;
import android.view.MenuItem;
import android.view.View;
/* loaded from: classes.dex */
interface SupportMenuItem extends MenuItem {

    static final int SHOW_AS_ACTION_ALWAYS;
    static final int SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW;
    static final int SHOW_AS_ACTION_IF_ROOM;
    static final int SHOW_AS_ACTION_NEVER;
    static final int SHOW_AS_ACTION_WITH_TEXT;

    @Override // android.view.MenuItem
    boolean collapseActionView();

    @Override // android.view.MenuItem
    boolean expandActionView();

    @Override // android.view.MenuItem
    View getActionView();

    ActionProvider getSupportActionProvider();

    @Override // android.view.MenuItem
    boolean isActionViewExpanded();

    @Override // android.view.MenuItem
    MenuItem setActionView(int i);

    @Override // android.view.MenuItem
    MenuItem setActionView(View view);

    @Override // android.view.MenuItem
    void setShowAsAction(int i);

    @Override // android.view.MenuItem
    MenuItem setShowAsActionFlags(int i);

    SupportMenuItem setSupportActionProvider(ActionProvider actionProvider);

    SupportMenuItem setSupportOnActionExpandListener(MenuItemCompat.OnActionExpandListener onActionExpandListener);
}

