/* Auto-generated JavaScript code */
package android.support.v4.graphics.drawable;

import android.content.res.ColorStateList;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.DrawableContainer;
import android.graphics.drawable.GradientDrawable;
/* loaded from: classes.dex */
class DrawableCompatLollipop {

    DrawableCompatLollipop() {

    }


    static void setHotspot(Drawable drawable, float x, float y) {

        drawable.setHotspot(x, y);
    }


    static void setHotspotBounds(Drawable drawable, int left, int top, int right, int bottom) {

        drawable.setHotspotBounds(left, top, right, bottom);
    }


    static void setTint(Drawable drawable, int tint) {

        if (drawable instanceof DrawableWrapperLollipop) {

            DrawableCompatBase.setTint(drawable, tint);
        }
 else {

            drawable.setTint(tint);
        }

    }


    static void setTintList(Drawable drawable, ColorStateList tint) {

        if (drawable instanceof DrawableWrapperLollipop) {

            DrawableCompatBase.setTintList(drawable, tint);
        }
 else {

            drawable.setTintList(tint);
        }

    }


    static void setTintMode(Drawable drawable, PorterDuff.Mode tintMode) {

        if (drawable instanceof DrawableWrapperLollipop) {

            DrawableCompatBase.setTintMode(drawable, tintMode);
        }
 else {

            drawable.setTintMode(tintMode);
        }

    }


    static Drawable wrapForTinting(Drawable drawable) {

        if ((drawable instanceof GradientDrawable) || (drawable instanceof DrawableContainer)) {

            return new DrawableWrapperLollipop(drawable);
        }

        return drawable;
    }

}

