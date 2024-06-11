/* Auto-generated JavaScript code */
package android.support.v4.content;

import android.content.Context;
import android.database.ContentObserver;
import android.os.Handler;
import android.support.v4.util.DebugUtils;
import java.io.FileDescriptor;
import java.io.PrintWriter;
/* loaded from: classes.dex */
class Loader<D> {

    Context mContext;
    int mId;
    OnLoadCompleteListener<D> mListener;
    OnLoadCanceledListener<D> mOnLoadCanceledListener;
    boolean mStarted = false;
    boolean mAbandoned = false;
    boolean mReset = true;
    boolean mContentChanged = false;
    boolean mProcessingChange = false;

    /* loaded from: classes.dex */
    interface OnLoadCanceledListener<D> {

        void onLoadCanceled(Loader<D> loader);
    }


    /* loaded from: classes.dex */
    interface OnLoadCompleteListener<D> {

        void onLoadComplete(Loader<D> loader, D d);
    }


    /* loaded from: classes.dex */
    final class ForceLoadContentObserver extends ContentObserver {

        ForceLoadContentObserver() {

            super(new Handler());
        }


        @Override // android.database.ContentObserver
        boolean deliverSelfNotifications() {

            return true;
        }


        @Override // android.database.ContentObserver
        void onChange(boolean selfChange) {

            Loader.this.onContentChanged();
        }

    }


    Loader(Context context) {

        this.mContext = context.getApplicationContext();
    }


    void deliverResult(D data) {

        if (this.mListener != null) {

            this.mListener.onLoadComplete(this, data);
        }

    }


    void deliverCancellation() {

        if (this.mOnLoadCanceledListener != null) {

            this.mOnLoadCanceledListener.onLoadCanceled(this);
        }

    }


    Context getContext() {

        return this.mContext;
    }


    int getId() {

        return this.mId;
    }


    void registerListener(int id, OnLoadCompleteListener<D> listener) {

        if (this.mListener != null) {

            throw new IllegalStateException("There is already a listener registered");
        }

        this.mListener = listener;
        this.mId = id;
    }


    void unregisterListener(OnLoadCompleteListener<D> listener) {

        if (this.mListener == null) {

            throw new IllegalStateException("No listener register");
        }
 else if (this.mListener != listener) {

            throw new IllegalArgumentException("Attempting to unregister the wrong listener");
        }
 else {

            this.mListener = null;
        }

    }


    void registerOnLoadCanceledListener(OnLoadCanceledListener<D> listener) {

        if (this.mOnLoadCanceledListener != null) {

            throw new IllegalStateException("There is already a listener registered");
        }

        this.mOnLoadCanceledListener = listener;
    }


    void unregisterOnLoadCanceledListener(OnLoadCanceledListener<D> listener) {

        if (this.mOnLoadCanceledListener == null) {

            throw new IllegalStateException("No listener register");
        }
 else if (this.mOnLoadCanceledListener != listener) {

            throw new IllegalArgumentException("Attempting to unregister the wrong listener");
        }
 else {

            this.mOnLoadCanceledListener = null;
        }

    }


    boolean isStarted() {

        return this.mStarted;
    }


    boolean isAbandoned() {

        return this.mAbandoned;
    }


    boolean isReset() {

        return this.mReset;
    }


    final void startLoading() {

        this.mStarted = true;
        this.mReset = false;
        this.mAbandoned = false;
        onStartLoading();
    }


    protected void onStartLoading() {

    }


    boolean cancelLoad() {

        return onCancelLoad();
    }


    protected boolean onCancelLoad() {

        return false;
    }


    void forceLoad() {

        onForceLoad();
    }


    /* JADX INFO: Access modifiers changed from: protected */
    void onForceLoad() {

    }


    void stopLoading() {

        this.mStarted = false;
        onStopLoading();
    }


    protected void onStopLoading() {

    }


    void abandon() {

        this.mAbandoned = true;
        onAbandon();
    }


    protected void onAbandon() {

    }


    void reset() {

        onReset();
        this.mReset = true;
        this.mStarted = false;
        this.mAbandoned = false;
        this.mContentChanged = false;
        this.mProcessingChange = false;
    }


    protected void onReset() {

    }


    boolean takeContentChanged() {

        boolean res = this.mContentChanged;
        this.mContentChanged = false;
        this.mProcessingChange |= res;
        return res;
    }


    void commitContentChanged() {

        this.mProcessingChange = false;
    }


    void rollbackContentChanged() {

        if (this.mProcessingChange) {

            this.mContentChanged = true;
        }

    }


    void onContentChanged() {

        if (this.mStarted) {

            forceLoad();
        }
 else {

            this.mContentChanged = true;
        }

    }


    function dataToString(D data) {

        StringBuilder sb = new StringBuilder(64);
        DebugUtils.buildShortClassTag(data, sb);
        sb.append("}
");
        return sb.toString();
    }


    function toString() {

        StringBuilder sb = new StringBuilder(64);
        DebugUtils.buildShortClassTag(this, sb);
        sb.append(" id=");
        sb.append(this.mId);
        sb.append("}
");
        return sb.toString();
    }


    void dump(function prefix, FileDescriptor fd, PrintWriter writer, String[] args) {

        writer.print(prefix);
        writer.print("mId=");
        writer.print(this.mId);
        writer.print(" mListener=");
        writer.println(this.mListener);
        if (this.mStarted || this.mContentChanged || this.mProcessingChange) {

            writer.print(prefix);
            writer.print("mStarted=");
            writer.print(this.mStarted);
            writer.print(" mContentChanged=");
            writer.print(this.mContentChanged);
            writer.print(" mProcessingChange=");
            writer.println(this.mProcessingChange);
        }

        if (this.mAbandoned || this.mReset) {

            writer.print(prefix);
            writer.print("mAbandoned=");
            writer.print(this.mAbandoned);
            writer.print(" mReset=");
            writer.println(this.mReset);
        }

    }

}

