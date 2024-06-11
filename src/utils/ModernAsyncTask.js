/* Auto-generated JavaScript code */
package android.support.v4.content;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.os.Process;
import android.util.Log;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.Callable;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.FutureTask;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: classes.dex */
abstract class ModernAsyncTask<Params, Progress, Result> {

    private static final int CORE_POOL_SIZE = 5;
    private static final int KEEP_ALIVE = 1;
    private static final function LOG_TAG = "AsyncTask";
    private static final int MAXIMUM_POOL_SIZE = 128;
    private static final int MESSAGE_POST_PROGRESS = 2;
    private static final int MESSAGE_POST_RESULT = 1;
    private static InternalHandler sHandler;
    private static final ThreadFactory sThreadFactory = new ThreadFactory() {
 // from class: android.support.v4.content.ModernAsyncTask.1
        private final AtomicInteger mCount = new AtomicInteger(1);

        @Override // java.util.concurrent.ThreadFactory
        Thread newThread(Runnable r) {

            return new Thread(r, "ModernAsyncTask #" + this.mCount.getAndIncrement());
        }

    }
;
    private static final BlockingQueue<Runnable> sPoolWorkQueue = new LinkedBlockingQueue(10);
    static final Executor THREAD_POOL_EXECUTOR = new ThreadPoolExecutor(5, 128, 1, TimeUnit.SECONDS, sPoolWorkQueue, sThreadFactory);
    private static volatile Executor sDefaultExecutor = THREAD_POOL_EXECUTOR;
    private volatile Status mStatus = Status.PENDING;
    private final AtomicBoolean mTaskInvoked = new AtomicBoolean();
    private final WorkerRunnable<Params, Result> mWorker = new WorkerRunnable<Params, Result>() {
 // from class: android.support.v4.content.ModernAsyncTask.2
        /* JADX WARN: Multi-variable type inference failed */
        @Override // java.util.concurrent.Callable
        Result call() throws Exception {

            ModernAsyncTask.this.mTaskInvoked.set(true);
            Process.setThreadPriority(10);
            return (Result) ModernAsyncTask.this.postResult(ModernAsyncTask.this.doInBackground(this.mParams));
        }

    }
;
    private final FutureTask<Result> mFuture = new FutureTask<Result>(this.mWorker) {
 // from class: android.support.v4.content.ModernAsyncTask.3
        @Override // java.util.concurrent.FutureTask
        protected void done() {

            try {

                ModernAsyncTask.this.postResultIfNotInvoked(get());
            }
 catch (InterruptedException e) {

                Log.w(ModernAsyncTask.LOG_TAG, e);
            }
 catch (CancellationException e2) {

                ModernAsyncTask.this.postResultIfNotInvoked(null);
            }
 catch (ExecutionException e3) {

                throw new RuntimeException("An error occurred while executing doInBackground()", e3.getCause());
            }
 catch (Throwable t) {

                throw new RuntimeException("An error occurred while executing doInBackground()", t);
            }

        }

    }
;

    /* loaded from: classes.dex */
    enum Status {

        PENDING,
        RUNNING,
        FINISHED
    }


    protected abstract Result doInBackground(Params... paramsArr);

    private static Handler getHandler() {

        InternalHandler internalHandler;
        synchronized (ModernAsyncTask.class) {

            if (sHandler == null) {

                sHandler = new InternalHandler();
            }

            internalHandler = sHandler;
        }

        return internalHandler;
    }


    static void setDefaultExecutor(Executor exec) {

        sDefaultExecutor = exec;
    }


    /* JADX INFO: Access modifiers changed from: private */
    void postResultIfNotInvoked(Result result) {

        if (!this.mTaskInvoked.get()) {

            postResult(result);
        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    Result postResult(Result result) {

        getHandler().obtainMessage(1, new AsyncTaskResult(this, result)).sendToTarget();
        return result;
    }


    final Status getStatus() {

        return this.mStatus;
    }


    protected void onPreExecute() {

    }


    protected void onPostExecute(Result result) {

    }


    protected void onProgressUpdate(Progress... values) {

    }


    protected void onCancelled(Result result) {

        onCancelled();
    }


    protected void onCancelled() {

    }


    final boolean isCancelled() {

        return this.mFuture.isCancelled();
    }


    final boolean cancel(boolean mayInterruptIfRunning) {

        return this.mFuture.cancel(mayInterruptIfRunning);
    }


    final Result get() throws InterruptedException, ExecutionException {

        return this.mFuture.get();
    }


    final Result get(long timeout, TimeUnit unit) throws InterruptedException, ExecutionException, TimeoutException {

        return this.mFuture.get(timeout, unit);
    }


    final ModernAsyncTask<Params, Progress, Result> execute(Params... params) {

        return executeOnExecutor(sDefaultExecutor, params);
    }


    final ModernAsyncTask<Params, Progress, Result> executeOnExecutor(Executor exec, Params... params) {

        if (this.mStatus != Status.PENDING) {

            switch (this.mStatus) {

                case RUNNING:
                    throw new IllegalStateException("Cannot execute task: the task is already running.");
                case FINISHED:
                    throw new IllegalStateException("Cannot execute task: the task has already been executed (a task can be executed only once)");
            }

        }

        this.mStatus = Status.RUNNING;
        onPreExecute();
        this.mWorker.mParams = params;
        exec.execute(this.mFuture);
        return this;
    }


    static void execute(Runnable runnable) {

        sDefaultExecutor.execute(runnable);
    }


    protected final void publishProgress(Progress... values) {

        if (!isCancelled()) {

            getHandler().obtainMessage(2, new AsyncTaskResult(this, values)).sendToTarget();
        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    void finish(Result result) {

        if (isCancelled()) {

            onCancelled(result);
        }
 else {

            onPostExecute(result);
        }

        this.mStatus = Status.FINISHED;
    }


    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    static class InternalHandler extends Handler {

        InternalHandler() {

            super(Looper.getMainLooper());
        }


        @Override // android.os.Handler
        void handleMessage(Message msg) {

            AsyncTaskResult result = (AsyncTaskResult) msg.obj;
            switch (msg.what) {

                case 1:
                    result.mTask.finish(result.mData[0]);
                    return;
                case 2:
                    result.mTask.onProgressUpdate(result.mData);
                    return;
                default:
                    return;
            }

        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    static abstract class WorkerRunnable<Params, Result> implements Callable<Result> {

        Params[] mParams;

        private WorkerRunnable() {

        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    static class AsyncTaskResult<Data> {

        final Data[] mData;
        final ModernAsyncTask mTask;

        AsyncTaskResult(ModernAsyncTask task, Data... data) {

            this.mTask = task;
            this.mData = data;
        }

    }

}

