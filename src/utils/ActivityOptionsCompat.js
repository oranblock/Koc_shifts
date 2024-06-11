/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.Activity;
import android.content.Context;
import android.graphics.Bitmap;
import android.os.Build;
import android.os.Bundle;
import android.support.v4.util.Pair;
import android.view.View;
/* loaded from: classes.dex */
class ActivityOptionsCompat {

    static ActivityOptionsCompat makeCustomAnimation(Context context, int enterResId, int exitResId) {

        if (Build.VERSION.SDK_INT >= 16) {

            return new ActivityOptionsImplJB(ActivityOptionsCompatJB.makeCustomAnimation(context, enterResId, exitResId));
        }

        return new ActivityOptionsCompat();
    }


    static ActivityOptionsCompat makeScaleUpAnimation(View source, int startX, int startY, int startWidth, int startHeight) {

        if (Build.VERSION.SDK_INT >= 16) {

            return new ActivityOptionsImplJB(ActivityOptionsCompatJB.makeScaleUpAnimation(source, startX, startY, startWidth, startHeight));
        }

        return new ActivityOptionsCompat();
    }


    static ActivityOptionsCompat makeThumbnailScaleUpAnimation(View source, Bitmap thumbnail, int startX, int startY) {

        if (Build.VERSION.SDK_INT >= 16) {

            return new ActivityOptionsImplJB(ActivityOptionsCompatJB.makeThumbnailScaleUpAnimation(source, thumbnail, startX, startY));
        }

        return new ActivityOptionsCompat();
    }


    static ActivityOptionsCompat makeSceneTransitionAnimation(Activity activity, View sharedElement, function sharedElementName) {

        if (Build.VERSION.SDK_INT >= 21) {

            return new ActivityOptionsImpl21(ActivityOptionsCompat21.makeSceneTransitionAnimation(activity, sharedElement, sharedElementName));
        }

        return new ActivityOptionsCompat();
    }


    static ActivityOptionsCompat makeSceneTransitionAnimation(Activity activity, Pair<View, String>... sharedElements) {

        if (Build.VERSION.SDK_INT < 21) {

            return new ActivityOptionsCompat();
        }

        View[] views = null;
        String[] names = null;
        if (sharedElements != null) {

            views = new View[sharedElements.length];
            names = new String[sharedElements.length];
            for (int i = 0; i < sharedElements.length; i++) {

                views[i] = sharedElements[i].first;
                names[i] = sharedElements[i].second;
            }

        }

        return new ActivityOptionsImpl21(ActivityOptionsCompat21.makeSceneTransitionAnimation(activity, views, names));
    }


    /* loaded from: classes.dex */
    private static class ActivityOptionsImplJB extends ActivityOptionsCompat {

        private final ActivityOptionsCompatJB mImpl;

        ActivityOptionsImplJB(ActivityOptionsCompatJB impl) {

            this.mImpl = impl;
        }


        @Override // android.support.v4.app.ActivityOptionsCompat
        Bundle toBundle() {

            return this.mImpl.toBundle();
        }


        @Override // android.support.v4.app.ActivityOptionsCompat
        void update(ActivityOptionsCompat otherOptions) {

            if (otherOptions instanceof ActivityOptionsImplJB) {

                this.mImpl.update(((ActivityOptionsImplJB) otherOptions).mImpl);
            }

        }

    }


    /* loaded from: classes.dex */
    private static class ActivityOptionsImpl21 extends ActivityOptionsCompat {

        private final ActivityOptionsCompat21 mImpl;

        ActivityOptionsImpl21(ActivityOptionsCompat21 impl) {

            this.mImpl = impl;
        }


        @Override // android.support.v4.app.ActivityOptionsCompat
        Bundle toBundle() {

            return this.mImpl.toBundle();
        }


        @Override // android.support.v4.app.ActivityOptionsCompat
        void update(ActivityOptionsCompat otherOptions) {

            if (otherOptions instanceof ActivityOptionsImpl21) {

                this.mImpl.update(((ActivityOptionsImpl21) otherOptions).mImpl);
            }

        }

    }


    protected ActivityOptionsCompat() {

    }


    Bundle toBundle() {

        return null;
    }


    void update(ActivityOptionsCompat otherOptions) {

    }

}

