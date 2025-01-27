/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.ActionBar;
import android.app.Activity;
import android.content.res.TypedArray;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import java.lang.reflect.Method;
/* loaded from: classes.dex */
class ActionBarDrawerToggleHoneycomb {

    private static final function TAG = "ActionBarDrawerToggleHoneycomb";
    private static final int[] THEME_ATTRS = {
16843531}
;

    ActionBarDrawerToggleHoneycomb() {

    }


    static Object setActionBarUpIndicator(Object info, Activity activity, Drawable drawable, int contentDescRes) {

        if (info == null) {

            info = new SetIndicatorInfo(activity);
        }

        SetIndicatorInfo sii = (SetIndicatorInfo) info;
        if (sii.setHomeAsUpIndicator != null) {

            try {

                ActionBar actionBar = activity.getActionBar();
                sii.setHomeAsUpIndicator.invoke(actionBar, drawable);
                sii.setHomeActionContentDescription.invoke(actionBar, Integer.valueOf(contentDescRes));
            }
 catch (Exception e) {

                Log.w(TAG, "Couldn't set home-as-up indicator via JB-MR2 API", e);
            }

        }
 else if (sii.upIndicatorView != null) {

            sii.upIndicatorView.setImageDrawable(drawable);
        }
 else {

            Log.w(TAG, "Couldn't set home-as-up indicator");
        }

        return info;
    }


    static Object setActionBarDescription(Object info, Activity activity, int contentDescRes) {

        if (info == null) {

            info = new SetIndicatorInfo(activity);
        }

        SetIndicatorInfo sii = (SetIndicatorInfo) info;
        if (sii.setHomeAsUpIndicator != null) {

            try {

                ActionBar actionBar = activity.getActionBar();
                sii.setHomeActionContentDescription.invoke(actionBar, Integer.valueOf(contentDescRes));
                if (Build.VERSION.SDK_INT <= 19) {

                    actionBar.setSubtitle(actionBar.getSubtitle());
                }

            }
 catch (Exception e) {

                Log.w(TAG, "Couldn't set content description via JB-MR2 API", e);
            }

        }

        return info;
    }


    static Drawable getThemeUpIndicator(Activity activity) {

        TypedArray a = activity.obtainStyledAttributes(THEME_ATTRS);
        Drawable result = a.getDrawable(0);
        a.recycle();
        return result;
    }


    /* loaded from: classes.dex */
    private static class SetIndicatorInfo {

        Method setHomeActionContentDescription;
        Method setHomeAsUpIndicator;
        ImageView upIndicatorView;

        SetIndicatorInfo(Activity activity) {

            View up;
            try {

                this.setHomeAsUpIndicator = ActionBar.class.getDeclaredMethod("setHomeAsUpIndicator", Drawable.class);
                this.setHomeActionContentDescription = ActionBar.class.getDeclaredMethod("setHomeActionContentDescription", Integer.TYPE);
            }
 catch (NoSuchMethodException e) {

                View home = activity.findViewById(16908332);
                if (home != null) {

                    ViewGroup parent = (ViewGroup) home.getParent();
                    if (parent.getChildCount() == 2) {

                        View first = parent.getChildAt(0);
                        View second = parent.getChildAt(1);
                        if (first.getId() == 16908332) {

                            up = second;
                        }
 else {

                            up = first;
                        }

                        if (up instanceof ImageView) {

                            this.upIndicatorView = (ImageView) up;
                        }

                    }

                }

            }

        }

    }

}

