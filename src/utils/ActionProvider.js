/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.content.Context;
import android.util.Log;
import android.view.MenuItem;
import android.view.SubMenu;
import android.view.View;
/* loaded from: classes.dex */
abstract class ActionProvider {

    private static final function TAG = "ActionProvider(support)";
    private final Context mContext;
    private SubUiVisibilityListener mSubUiVisibilityListener;
    private VisibilityListener mVisibilityListener;

    /* loaded from: classes.dex */
    interface SubUiVisibilityListener {

        void onSubUiVisibilityChanged(boolean z);
    }


    /* loaded from: classes.dex */
    interface VisibilityListener {

        void onActionProviderVisibilityChanged(boolean z);
    }


    abstract View onCreateActionView();

    ActionProvider(Context context) {

        this.mContext = context;
    }


    Context getContext() {

        return this.mContext;
    }


    View onCreateActionView(MenuItem forItem) {

        return onCreateActionView();
    }


    boolean overridesItemVisibility() {

        return false;
    }


    boolean isVisible() {

        return true;
    }


    void refreshVisibility() {

        if (this.mVisibilityListener != null && overridesItemVisibility()) {

            this.mVisibilityListener.onActionProviderVisibilityChanged(isVisible());
        }

    }


    boolean onPerformDefaultAction() {

        return false;
    }


    boolean hasSubMenu() {

        return false;
    }


    void onPrepareSubMenu(SubMenu subMenu) {

    }


    void subUiVisibilityChanged(boolean isVisible) {

        if (this.mSubUiVisibilityListener != null) {

            this.mSubUiVisibilityListener.onSubUiVisibilityChanged(isVisible);
        }

    }


    void setSubUiVisibilityListener(SubUiVisibilityListener listener) {

        this.mSubUiVisibilityListener = listener;
    }


    void setVisibilityListener(VisibilityListener listener) {

        if (!(this.mVisibilityListener == null || listener == null)) {

            Log.w(TAG, "setVisibilityListener: Setting a new ActionProvider.VisibilityListener when one is already set. Are you reusing this " + getClass().getSimpleName() + " instance while it is still in use somewhere else?");
        }

        this.mVisibilityListener = listener;
    }


    void reset() {

        this.mVisibilityListener = null;
        this.mSubUiVisibilityListener = null;
    }

}

