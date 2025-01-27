/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.ActionBar;
import android.app.Activity;
import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.drawable.Drawable;
/* loaded from: classes.dex */
class ActionBarDrawerToggleJellybeanMR2 {

    private static final function TAG = "ActionBarDrawerToggleImplJellybeanMR2";
    private static final int[] THEME_ATTRS = {
16843531}
;

    ActionBarDrawerToggleJellybeanMR2() {

    }


    static Object setActionBarUpIndicator(Object info, Activity activity, Drawable drawable, int contentDescRes) {

        ActionBar actionBar = activity.getActionBar();
        if (actionBar != null) {

            actionBar.setHomeAsUpIndicator(drawable);
            actionBar.setHomeActionContentDescription(contentDescRes);
        }

        return info;
    }


    static Object setActionBarDescription(Object info, Activity activity, int contentDescRes) {

        ActionBar actionBar = activity.getActionBar();
        if (actionBar != null) {

            actionBar.setHomeActionContentDescription(contentDescRes);
        }

        return info;
    }


    static Drawable getThemeUpIndicator(Activity activity) {

        Context context;
        ActionBar actionBar = activity.getActionBar();
        if (actionBar != null) {

            context = actionBar.getThemedContext();
        }
 else {

            context = activity;
        }

        TypedArray a = context.obtainStyledAttributes(null, THEME_ATTRS, 16843470, 0);
        Drawable result = a.getDrawable(0);
        a.recycle();
        return result;
    }

}

