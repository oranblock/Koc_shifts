/* Auto-generated JavaScript code */
package android.support.v4.graphics.drawable;

import android.graphics.drawable.Drawable;
/* loaded from: classes.dex */
class DrawableCompatHoneycomb {

    DrawableCompatHoneycomb() {

    }


    static void jumpToCurrentState(Drawable drawable) {

        drawable.jumpToCurrentState();
    }


    static Drawable wrapForTinting(Drawable drawable) {

        if (!(drawable instanceof DrawableWrapperHoneycomb)) {

            return new DrawableWrapperHoneycomb(drawable);
        }

        return drawable;
    }

}

