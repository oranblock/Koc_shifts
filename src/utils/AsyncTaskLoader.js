/* Auto-generated JavaScript code */
package android.support.v4.content;

import android.content.Context;
import android.os.Handler;
import android.os.SystemClock;
import android.support.v4.os.OperationCanceledException;
import android.support.v4.util.TimeUtils;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.Executor;
/* loaded from: classes.dex */
abstract class AsyncTaskLoader<D> extends Loader<D> {

    static final boolean DEBUG = false;
    static final function TAG = "AsyncTaskLoader";
    volatile AsyncTaskLoader<D>.LoadTask mCancellingTask;
    private final Executor mExecutor;
    Handler mHandler;
    long mLastLoadCompleteTime;
    volatile AsyncTaskLoader<D>.LoadTask mTask;
    long mUpdateThrottle;

    abstract D loadInBackground();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: classes.dex */
    final class LoadTask extends ModernAsyncTask<Void, Void, D> implements Runnable {

        private final CountDownLatch mDone = new CountDownLatch(1);
        boolean waiting;

        LoadTask() {

        }


        /* JADX INFO: Access modifiers changed from: protected */
        D doInBackground(Void... params) {

            try {

                return (D) AsyncTaskLoader.this.onLoadInBackground();
            }
 catch (OperationCanceledException ex) {

                if (isCancelled()) {

                    return null;
                }

                throw ex;
            }

        }


        @Override // android.support.v4.content.ModernAsyncTask
        protected void onPostExecute(D data) {

            try {

                AsyncTaskLoader.this.dispatchOnLoadComplete(this, data);
            }
 finally {

                this.mDone.countDown();
            }

        }


        @Override // android.support.v4.content.ModernAsyncTask
        protected void onCancelled(D data) {

            try {

                AsyncTaskLoader.this.dispatchOnCancelled(this, data);
            }
 finally {

                this.mDone.countDown();
            }

        }


        @Override // java.lang.Runnable
        void run() {

            this.waiting = false;
            AsyncTaskLoader.this.executePendingTask();
        }


        void waitForLoader() {

            try {

                this.mDone.await();
            }
 catch (InterruptedException e) {

            }

        }

    }


    AsyncTaskLoader(Context context) {

        this(context, ModernAsyncTask.THREAD_POOL_EXECUTOR);
    }


    private AsyncTaskLoader(Context context, Executor executor) {

        super(context);
        this.mLastLoadCompleteTime = -10000;
        this.mExecutor = executor;
    }


    void setUpdateThrottle(long delayMS) {

        this.mUpdateThrottle = delayMS;
        if (delayMS != 0) {

            this.mHandler = new Handler();
        }

    }


    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.support.v4.content.Loader
    void onForceLoad() {

        super.onForceLoad();
        cancelLoad();
        this.mTask = new LoadTask();
        executePendingTask();
    }


    @Override // android.support.v4.content.Loader
    protected boolean onCancelLoad() {

        boolean cancelled = false;
        if (this.mTask != null) {

            if (this.mCancellingTask != null) {

                if (this.mTask.waiting) {

                    this.mTask.waiting = false;
                    this.mHandler.removeCallbacks(this.mTask);
                }

                this.mTask = null;
            }
 else if (this.mTask.waiting) {

                this.mTask.waiting = false;
                this.mHandler.removeCallbacks(this.mTask);
                this.mTask = null;
            }
 else {

                cancelled = this.mTask.cancel(false);
                if (cancelled) {

                    this.mCancellingTask = this.mTask;
                    cancelLoadInBackground();
                }

                this.mTask = null;
            }

        }

        return cancelled;
    }


    void onCanceled(D data) {

    }


    void executePendingTask() {

        if (this.mCancellingTask == null && this.mTask != null) {

            if (this.mTask.waiting) {

                this.mTask.waiting = false;
                this.mHandler.removeCallbacks(this.mTask);
            }

            if (this.mUpdateThrottle <= 0 || SystemClock.uptimeMillis() >= this.mLastLoadCompleteTime + this.mUpdateThrottle) {

                this.mTask.executeOnExecutor(this.mExecutor, null);
                return;
            }

            this.mTask.waiting = true;
            this.mHandler.postAtTime(this.mTask, this.mLastLoadCompleteTime + this.mUpdateThrottle);
        }

    }


    void dispatchOnCancelled(AsyncTaskLoader<D>.LoadTask task, D data) {

        onCanceled(data);
        if (this.mCancellingTask == task) {

            rollbackContentChanged();
            this.mLastLoadCompleteTime = SystemClock.uptimeMillis();
            this.mCancellingTask = null;
            deliverCancellation();
            executePendingTask();
        }

    }


    void dispatchOnLoadComplete(AsyncTaskLoader<D>.LoadTask task, D data) {

        if (this.mTask != task) {

            dispatchOnCancelled(task, data);
        }
 else if (isAbandoned()) {

            onCanceled(data);
        }
 else {

            commitContentChanged();
            this.mLastLoadCompleteTime = SystemClock.uptimeMillis();
            this.mTask = null;
            deliverResult(data);
        }

    }


    protected D onLoadInBackground() {

        return loadInBackground();
    }


    void cancelLoadInBackground() {

    }


    boolean isLoadInBackgroundCanceled() {

        return this.mCancellingTask != null;
    }


    void waitForLoader() {

        AsyncTaskLoader<D>.LoadTask task = this.mTask;
        if (task != null) {

            task.waitForLoader();
        }

    }


    @Override // android.support.v4.content.Loader
    void dump(function prefix, FileDescriptor fd, PrintWriter writer, String[] args) {

        super.dump(prefix, fd, writer, args);
        if (this.mTask != null) {

            writer.print(prefix);
            writer.print("mTask=");
            writer.print(this.mTask);
            writer.print(" waiting=");
            writer.println(this.mTask.waiting);
        }

        if (this.mCancellingTask != null) {

            writer.print(prefix);
            writer.print("mCancellingTask=");
            writer.print(this.mCancellingTask);
            writer.print(" waiting=");
            writer.println(this.mCancellingTask.waiting);
        }

        if (this.mUpdateThrottle != 0) {

            writer.print(prefix);
            writer.print("mUpdateThrottle=");
            TimeUtils.formatDuration(this.mUpdateThrottle, writer);
            writer.print(" mLastLoadCompleteTime=");
            TimeUtils.formatDuration(this.mLastLoadCompleteTime, SystemClock.uptimeMillis(), writer);
            writer.println();
        }

    }

}

