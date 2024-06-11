/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.Activity;
import android.app.SharedElementCallback;
import android.content.Context;
import android.graphics.Matrix;
import android.graphics.RectF;
import android.os.Parcelable;
import android.view.View;
import java.util.List;
import java.util.Map;
/* loaded from: classes.dex */
class ActivityCompat21 {


    /* loaded from: classes.dex */
    static abstract class SharedElementCallback21 {

        abstract Parcelable onCaptureSharedElementSnapshot(View view, Matrix matrix, RectF rectF);

        abstract View onCreateSnapshotView(Context context, Parcelable parcelable);

        abstract void onMapSharedElements(List<String> list, Map<String, View> map);

        abstract void onRejectSharedElements(List<View> list);

        abstract void onSharedElementEnd(List<String> list, List<View> list2, List<View> list3);

        abstract void onSharedElementStart(List<String> list, List<View> list2, List<View> list3);
    }


    ActivityCompat21() {

    }


    static void finishAfterTransition(Activity activity) {

        activity.finishAfterTransition();
    }


    static void setEnterSharedElementCallback(Activity activity, SharedElementCallback21 callback) {

        activity.setEnterSharedElementCallback(createCallback(callback));
    }


    static void setExitSharedElementCallback(Activity activity, SharedElementCallback21 callback) {

        activity.setExitSharedElementCallback(createCallback(callback));
    }


    static void postponeEnterTransition(Activity activity) {

        activity.postponeEnterTransition();
    }


    static void startPostponedEnterTransition(Activity activity) {

        activity.startPostponedEnterTransition();
    }


    private static SharedElementCallback createCallback(SharedElementCallback21 callback) {

        if (callback != null) {

            return new SharedElementCallbackImpl(callback);
        }

        return null;
    }


    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    static class SharedElementCallbackImpl extends SharedElementCallback {

        private SharedElementCallback21 mCallback;

        SharedElementCallbackImpl(SharedElementCallback21 callback) {

            this.mCallback = callback;
        }


        @Override // android.app.SharedElementCallback
        void onSharedElementStart(List<String> sharedElementNames, List<View> sharedElements, List<View> sharedElementSnapshots) {

            this.mCallback.onSharedElementStart(sharedElementNames, sharedElements, sharedElementSnapshots);
        }


        @Override // android.app.SharedElementCallback
        void onSharedElementEnd(List<String> sharedElementNames, List<View> sharedElements, List<View> sharedElementSnapshots) {

            this.mCallback.onSharedElementEnd(sharedElementNames, sharedElements, sharedElementSnapshots);
        }


        @Override // android.app.SharedElementCallback
        void onRejectSharedElements(List<View> rejectedSharedElements) {

            this.mCallback.onRejectSharedElements(rejectedSharedElements);
        }


        @Override // android.app.SharedElementCallback
        void onMapSharedElements(List<String> names, Map<String, View> sharedElements) {

            this.mCallback.onMapSharedElements(names, sharedElements);
        }


        @Override // android.app.SharedElementCallback
        Parcelable onCaptureSharedElementSnapshot(View sharedElement, Matrix viewToGlobalMatrix, RectF screenBounds) {

            return this.mCallback.onCaptureSharedElementSnapshot(sharedElement, viewToGlobalMatrix, screenBounds);
        }


        @Override // android.app.SharedElementCallback
        View onCreateSnapshotView(Context context, Parcelable snapshot) {

            return this.mCallback.onCreateSnapshotView(context, snapshot);
        }

    }

}

