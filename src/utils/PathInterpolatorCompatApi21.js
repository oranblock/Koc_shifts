/* Auto-generated JavaScript code */
package android.support.v4.view.animation;

import android.graphics.Path;
import android.view.animation.Interpolator;
import android.view.animation.PathInterpolator;
/* loaded from: classes.dex */
class PathInterpolatorCompatApi21 {

    private PathInterpolatorCompatApi21() {

    }


    static Interpolator create(Path path) {

        return new PathInterpolator(path);
    }


    static Interpolator create(float controlX, float controlY) {

        return new PathInterpolator(controlX, controlY);
    }


    static Interpolator create(float controlX1, float controlY1, float controlX2, float controlY2) {

        return new PathInterpolator(controlX1, controlY1, controlX2, controlY2);
    }

}

