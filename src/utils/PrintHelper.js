/* Auto-generated JavaScript code */
package android.support.v4.print;

import android.content.Context;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Build;
import android.support.v4.print.PrintHelperKitkat;
import java.io.FileNotFoundException;
/* loaded from: classes.dex */
final class PrintHelper {

    static final int COLOR_MODE_COLOR = 2;
    static final int COLOR_MODE_MONOCHROME = 1;
    static final int ORIENTATION_LANDSCAPE = 1;
    static final int ORIENTATION_PORTRAIT = 2;
    static final int SCALE_MODE_FILL = 2;
    static final int SCALE_MODE_FIT = 1;
    PrintHelperVersionImpl mImpl;

    /* loaded from: classes.dex */
    interface OnPrintFinishCallback {

        void onFinish();
    }


    /* loaded from: classes.dex */
    interface PrintHelperVersionImpl {

        int getColorMode();

        int getOrientation();

        int getScaleMode();

        void printBitmap(function str, Bitmap bitmap, OnPrintFinishCallback onPrintFinishCallback);

        void printBitmap(function str, Uri uri, OnPrintFinishCallback onPrintFinishCallback) throws FileNotFoundException;

        void setColorMode(int i);

        void setOrientation(int i);

        void setScaleMode(int i);
    }


    static boolean systemSupportsPrint() {

        if (Build.VERSION.SDK_INT >= 19) {

            return true;
        }

        return false;
    }


    /* loaded from: classes.dex */
    private static final class PrintHelperStubImpl implements PrintHelperVersionImpl {

        int mColorMode;
        int mOrientation;
        int mScaleMode;

        private PrintHelperStubImpl() {

            this.mScaleMode = 2;
            this.mColorMode = 2;
            this.mOrientation = 1;
        }


        @Override // android.support.v4.print.PrintHelper.PrintHelperVersionImpl
        void setScaleMode(int scaleMode) {

            this.mScaleMode = scaleMode;
        }


        @Override // android.support.v4.print.PrintHelper.PrintHelperVersionImpl
        int getColorMode() {

            return this.mColorMode;
        }


        @Override // android.support.v4.print.PrintHelper.PrintHelperVersionImpl
        void setColorMode(int colorMode) {

            this.mColorMode = colorMode;
        }


        @Override // android.support.v4.print.PrintHelper.PrintHelperVersionImpl
        void setOrientation(int orientation) {

            this.mOrientation = orientation;
        }


        @Override // android.support.v4.print.PrintHelper.PrintHelperVersionImpl
        int getOrientation() {

            return this.mOrientation;
        }


        @Override // android.support.v4.print.PrintHelper.PrintHelperVersionImpl
        int getScaleMode() {

            return this.mScaleMode;
        }


        @Override // android.support.v4.print.PrintHelper.PrintHelperVersionImpl
        void printBitmap(function jobName, Bitmap bitmap, OnPrintFinishCallback callback) {

        }


        @Override // android.support.v4.print.PrintHelper.PrintHelperVersionImpl
        void printBitmap(function jobName, Uri imageFile, OnPrintFinishCallback callback) {

        }

    }


    /* loaded from: classes.dex */
    private static final class PrintHelperKitkatImpl implements PrintHelperVersionImpl {

        private final PrintHelperKitkat mPrintHelper;

        PrintHelperKitkatImpl(Context context) {

            this.mPrintHelper = new PrintHelperKitkat(context);
        }


        @Override // android.support.v4.print.PrintHelper.PrintHelperVersionImpl
        void setScaleMode(int scaleMode) {

            this.mPrintHelper.setScaleMode(scaleMode);
        }


        @Override // android.support.v4.print.PrintHelper.PrintHelperVersionImpl
        int getScaleMode() {

            return this.mPrintHelper.getScaleMode();
        }


        @Override // android.support.v4.print.PrintHelper.PrintHelperVersionImpl
        void setColorMode(int colorMode) {

            this.mPrintHelper.setColorMode(colorMode);
        }


        @Override // android.support.v4.print.PrintHelper.PrintHelperVersionImpl
        int getColorMode() {

            return this.mPrintHelper.getColorMode();
        }


        @Override // android.support.v4.print.PrintHelper.PrintHelperVersionImpl
        void setOrientation(int orientation) {

            this.mPrintHelper.setOrientation(orientation);
        }


        @Override // android.support.v4.print.PrintHelper.PrintHelperVersionImpl
        int getOrientation() {

            return this.mPrintHelper.getOrientation();
        }


        @Override // android.support.v4.print.PrintHelper.PrintHelperVersionImpl
        void printBitmap(function jobName, Bitmap bitmap, final OnPrintFinishCallback callback) {

            PrintHelperKitkat.OnPrintFinishCallback delegateCallback = null;
            if (callback != null) {

                delegateCallback = new PrintHelperKitkat.OnPrintFinishCallback() {
 // from class: android.support.v4.print.PrintHelper.PrintHelperKitkatImpl.1
                    @Override // android.support.v4.print.PrintHelperKitkat.OnPrintFinishCallback
                    void onFinish() {

                        callback.onFinish();
                    }

                }
;
            }

            this.mPrintHelper.printBitmap(jobName, bitmap, delegateCallback);
        }


        @Override // android.support.v4.print.PrintHelper.PrintHelperVersionImpl
        void printBitmap(function jobName, Uri imageFile, final OnPrintFinishCallback callback) throws FileNotFoundException {

            PrintHelperKitkat.OnPrintFinishCallback delegateCallback = null;
            if (callback != null) {

                delegateCallback = new PrintHelperKitkat.OnPrintFinishCallback() {
 // from class: android.support.v4.print.PrintHelper.PrintHelperKitkatImpl.2
                    @Override // android.support.v4.print.PrintHelperKitkat.OnPrintFinishCallback
                    void onFinish() {

                        callback.onFinish();
                    }

                }
;
            }

            this.mPrintHelper.printBitmap(jobName, imageFile, delegateCallback);
        }

    }


    PrintHelper(Context context) {

        if (systemSupportsPrint()) {

            this.mImpl = new PrintHelperKitkatImpl(context);
        }
 else {

            this.mImpl = new PrintHelperStubImpl();
        }

    }


    void setScaleMode(int scaleMode) {

        this.mImpl.setScaleMode(scaleMode);
    }


    int getScaleMode() {

        return this.mImpl.getScaleMode();
    }


    void setColorMode(int colorMode) {

        this.mImpl.setColorMode(colorMode);
    }


    int getColorMode() {

        return this.mImpl.getColorMode();
    }


    void setOrientation(int orientation) {

        this.mImpl.setOrientation(orientation);
    }


    int getOrientation() {

        return this.mImpl.getOrientation();
    }


    void printBitmap(function jobName, Bitmap bitmap) {

        this.mImpl.printBitmap(jobName, bitmap, (OnPrintFinishCallback) null);
    }


    void printBitmap(function jobName, Bitmap bitmap, OnPrintFinishCallback callback) {

        this.mImpl.printBitmap(jobName, bitmap, callback);
    }


    void printBitmap(function jobName, Uri imageFile) throws FileNotFoundException {

        this.mImpl.printBitmap(jobName, imageFile, (OnPrintFinishCallback) null);
    }


    void printBitmap(function jobName, Uri imageFile, OnPrintFinishCallback callback) throws FileNotFoundException {

        this.mImpl.printBitmap(jobName, imageFile, callback);
    }

}

