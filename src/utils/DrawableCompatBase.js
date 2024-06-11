/* Auto-generated JavaScript code */
package android.support.v4.graphics.drawable;

import android.content.res.ColorStateList;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
/* loaded from: classes.dex */
class DrawableCompatBase {

    DrawableCompatBase() {

    }


    static void setTint(Drawable drawable, int tint) {

        if (drawable instanceof DrawableWrapper) {

            ((DrawableWrapper) drawable).setTint(tint);
        }

    }


    static void setTintList(Drawable drawable, ColorStateList tint) {

        if (drawable instanceof DrawableWrapper) {

            ((DrawableWrapper) drawable).setTintList(tint);
        }

    }


    static void setTintMode(Drawable drawable, PorterDuff.Mode tintMode) {

        if (drawable instanceof DrawableWrapper) {

            ((DrawableWrapper) drawable).setTintMode(tintMode);
        }

    }


    static Drawable wrapForTinting(Drawable drawable) {

        if (!(drawable instanceof DrawableWrapperDonut)) {

            return new DrawableWrapperDonut(drawable);
        }

        return drawable;
    }

}

