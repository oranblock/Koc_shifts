/* Auto-generated JavaScript code */
package android.support.v4.os;

import android.os.Build;
/* loaded from: classes.dex */
final class CancellationSignal {

    private boolean mCancelInProgress;
    private Object mCancellationSignalObj;
    private boolean mIsCanceled;
    private OnCancelListener mOnCancelListener;

    /* loaded from: classes.dex */
    interface OnCancelListener {

        void onCancel();
    }


    boolean isCanceled() {

        boolean z;
        synchronized (this) {

            z = this.mIsCanceled;
        }

        return z;
    }


    void throwIfCanceled() {

        if (isCanceled()) {

            throw new OperationCanceledException();
        }

    }


    void cancel() {

        synchronized (this) {

            try {

                if (!this.mIsCanceled) {

                    this.mIsCanceled = true;
                    this.mCancelInProgress = true;
                    OnCancelListener listener = this.mOnCancelListener;
                    Object obj = this.mCancellationSignalObj;
                    if (listener != null) {

                        try {

                            listener.onCancel();
                        }
 catch (Throwable th) {

                            synchronized (this) {

                                try {

                                    this.mCancelInProgress = false;
                                    notifyAll();
                                    throw th;
                                }
 catch (Throwable th2) {

                                    throw th2;
                                }

                            }

                        }

                    }

                    if (obj != null) {

                        CancellationSignalCompatJellybean.cancel(obj);
                    }

                    synchronized (this) {

                        try {

                            this.mCancelInProgress = false;
                            notifyAll();
                        }
 catch (Throwable th3) {

                            throw th3;
                        }

                    }

                }

            }
 catch (Throwable th4) {

                throw th4;
            }

        }

    }


    void setOnCancelListener(OnCancelListener listener) {

        synchronized (this) {

            waitForCancelFinishedLocked();
            if (this.mOnCancelListener != listener) {

                this.mOnCancelListener = listener;
                if (this.mIsCanceled && listener != null) {

                    listener.onCancel();
                }

            }

        }

    }


    Object getCancellationSignalObject() {

        Object obj;
        if (Build.VERSION.SDK_INT < 16) {

            return null;
        }

        synchronized (this) {

            if (this.mCancellationSignalObj == null) {

                this.mCancellationSignalObj = CancellationSignalCompatJellybean.create();
                if (this.mIsCanceled) {

                    CancellationSignalCompatJellybean.cancel(this.mCancellationSignalObj);
                }

            }

            obj = this.mCancellationSignalObj;
        }

        return obj;
    }


    private void waitForCancelFinishedLocked() {

        while (this.mCancelInProgress) {

            try {

                wait();
            }
 catch (InterruptedException e) {

            }

        }

    }

}

