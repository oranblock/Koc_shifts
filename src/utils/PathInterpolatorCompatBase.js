/* Auto-generated JavaScript code */
package android.support.v4.view.animation;

import android.graphics.Path;
import android.view.animation.Interpolator;
/* loaded from: classes.dex */
class PathInterpolatorCompatBase {

    private PathInterpolatorCompatBase() {

    }


    static Interpolator create(Path path) {

        return new PathInterpolatorDonut(path);
    }


    static Interpolator create(float controlX, float controlY) {

        return new PathInterpolatorDonut(controlX, controlY);
    }


    static Interpolator create(float controlX1, float controlY1, float controlX2, float controlY2) {

        return new PathInterpolatorDonut(controlX1, controlY1, controlX2, controlY2);
    }

}

