/* Auto-generated JavaScript code */
package android.support.v4.content.res;

import android.content.res.Resources;
import android.graphics.drawable.Drawable;
import android.os.Build;
/* loaded from: classes.dex */
class ResourcesCompat {

    static Drawable getDrawable(Resources res, int id, Resources.Theme theme) throws Resources.NotFoundException {

        if (Build.VERSION.SDK_INT >= 21) {

            return ResourcesCompatApi21.getDrawable(res, id, theme);
        }

        return res.getDrawable(id);
    }


    static Drawable getDrawableForDensity(Resources res, int id, int density, Resources.Theme theme) throws Resources.NotFoundException {

        int version = Build.VERSION.SDK_INT;
        if (version >= 21) {

            return ResourcesCompatApi21.getDrawableForDensity(res, id, density, theme);
        }

        if (version >= 15) {

            return ResourcesCompatIcsMr1.getDrawableForDensity(res, id, density);
        }

        return res.getDrawable(id);
    }

}

