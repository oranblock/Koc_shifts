/* Auto-generated JavaScript code */
package android.support.v4.graphics.drawable;

import android.graphics.drawable.Drawable;
/* loaded from: classes.dex */
class DrawableCompatKitKat {

    DrawableCompatKitKat() {

    }


    static void setAutoMirrored(Drawable drawable, boolean mirrored) {

        drawable.setAutoMirrored(mirrored);
    }


    static boolean isAutoMirrored(Drawable drawable) {

        return drawable.isAutoMirrored();
    }


    static Drawable wrapForTinting(Drawable drawable) {

        if (!(drawable instanceof DrawableWrapperKitKat)) {

            return new DrawableWrapperKitKat(drawable);
        }

        return drawable;
    }

}

