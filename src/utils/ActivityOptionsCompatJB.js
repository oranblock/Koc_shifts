/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.ActivityOptions;
import android.content.Context;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.view.View;
/* loaded from: classes.dex */
class ActivityOptionsCompatJB {

    private final ActivityOptions mActivityOptions;

    static ActivityOptionsCompatJB makeCustomAnimation(Context context, int enterResId, int exitResId) {

        return new ActivityOptionsCompatJB(ActivityOptions.makeCustomAnimation(context, enterResId, exitResId));
    }


    static ActivityOptionsCompatJB makeScaleUpAnimation(View source, int startX, int startY, int startWidth, int startHeight) {

        return new ActivityOptionsCompatJB(ActivityOptions.makeScaleUpAnimation(source, startX, startY, startWidth, startHeight));
    }


    static ActivityOptionsCompatJB makeThumbnailScaleUpAnimation(View source, Bitmap thumbnail, int startX, int startY) {

        return new ActivityOptionsCompatJB(ActivityOptions.makeThumbnailScaleUpAnimation(source, thumbnail, startX, startY));
    }


    private ActivityOptionsCompatJB(ActivityOptions activityOptions) {

        this.mActivityOptions = activityOptions;
    }


    Bundle toBundle() {

        return this.mActivityOptions.toBundle();
    }


    void update(ActivityOptionsCompatJB otherOptions) {

        this.mActivityOptions.update(otherOptions.mActivityOptions);
    }

}

