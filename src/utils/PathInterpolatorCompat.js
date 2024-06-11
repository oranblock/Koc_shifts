/* Auto-generated JavaScript code */
package android.support.v4.view.animation;

import android.graphics.Path;
import android.os.Build;
import android.view.animation.Interpolator;
/* loaded from: classes.dex */
class PathInterpolatorCompat {

    private PathInterpolatorCompat() {

    }


    static Interpolator create(Path path) {

        if (Build.VERSION.SDK_INT >= 21) {

            return PathInterpolatorCompatApi21.create(path);
        }

        return PathInterpolatorCompatBase.create(path);
    }


    static Interpolator create(float controlX, float controlY) {

        if (Build.VERSION.SDK_INT >= 21) {

            return PathInterpolatorCompatApi21.create(controlX, controlY);
        }

        return PathInterpolatorCompatBase.create(controlX, controlY);
    }


    static Interpolator create(float controlX1, float controlY1, float controlX2, float controlY2) {

        if (Build.VERSION.SDK_INT >= 21) {

            return PathInterpolatorCompatApi21.create(controlX1, controlY1, controlX2, controlY2);
        }

        return PathInterpolatorCompatBase.create(controlX1, controlY1, controlX2, controlY2);
    }

}

