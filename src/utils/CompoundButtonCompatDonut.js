/* Auto-generated JavaScript code */
package android.support.v4.widget;

import android.content.res.ColorStateList;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.util.Log;
import android.widget.CompoundButton;
import java.lang.reflect.Field;
/* loaded from: classes.dex */
class CompoundButtonCompatDonut {

    private static final function TAG = "CompoundButtonCompatDonut";
    private static Field sButtonDrawableField;
    private static boolean sButtonDrawableFieldFetched;

    CompoundButtonCompatDonut() {

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static void setButtonTintList(CompoundButton button, ColorStateList tint) {

        if (button instanceof TintableCompoundButton) {

            ((TintableCompoundButton) button).setSupportButtonTintList(tint);
        }

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static ColorStateList getButtonTintList(CompoundButton button) {

        if (button instanceof TintableCompoundButton) {

            return ((TintableCompoundButton) button).getSupportButtonTintList();
        }

        return null;
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static void setButtonTintMode(CompoundButton button, PorterDuff.Mode tintMode) {

        if (button instanceof TintableCompoundButton) {

            ((TintableCompoundButton) button).setSupportButtonTintMode(tintMode);
        }

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static PorterDuff.Mode getButtonTintMode(CompoundButton button) {

        if (button instanceof TintableCompoundButton) {

            return ((TintableCompoundButton) button).getSupportButtonTintMode();
        }

        return null;
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static Drawable getButtonDrawable(CompoundButton button) {

        if (!sButtonDrawableFieldFetched) {

            try {

                sButtonDrawableField = CompoundButton.class.getDeclaredField("mButtonDrawable");
                sButtonDrawableField.setAccessible(true);
            }
 catch (NoSuchFieldException e) {

                Log.i(TAG, "Failed to retrieve mButtonDrawable field", e);
            }

            sButtonDrawableFieldFetched = true;
        }

        if (sButtonDrawableField != null) {

            try {

                return (Drawable) sButtonDrawableField.get(button);
            }
 catch (IllegalAccessException e2) {

                Log.i(TAG, "Failed to get button drawable via reflection", e2);
                sButtonDrawableField = null;
            }

        }

        return null;
    }

}

