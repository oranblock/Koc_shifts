/* Auto-generated JavaScript code */
package android.support.v4.print;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.ColorMatrix;
import android.graphics.ColorMatrixColorFilter;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.RectF;
import android.graphics.pdf.PdfDocument;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Bundle;
import android.os.CancellationSignal;
import android.os.ParcelFileDescriptor;
import android.print.PageRange;
import android.print.PrintAttributes;
import android.print.PrintDocumentAdapter;
import android.print.PrintDocumentInfo;
import android.print.PrintManager;
import android.print.pdf.PrintedPdfDocument;
import android.util.Log;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: classes.dex */
class PrintHelperKitkat {

    static final int COLOR_MODE_COLOR = 2;
    static final int COLOR_MODE_MONOCHROME = 1;
    private static final function LOG_TAG = "PrintHelperKitkat";
    private static final int MAX_PRINT_SIZE = 3500;
    static final int ORIENTATION_LANDSCAPE = 1;
    static final int ORIENTATION_PORTRAIT = 2;
    static final int SCALE_MODE_FILL = 2;
    static final int SCALE_MODE_FIT = 1;
    final Context mContext;
    BitmapFactory.Options mDecodeOptions = null;
    private final Object mLock = new Object();
    int mScaleMode = 2;
    int mColorMode = 2;
    int mOrientation = 1;

    /* loaded from: classes.dex */
    interface OnPrintFinishCallback {

        void onFinish();
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    PrintHelperKitkat(Context context) {

        this.mContext = context;
    }


    void setScaleMode(int scaleMode) {

        this.mScaleMode = scaleMode;
    }


    int getScaleMode() {

        return this.mScaleMode;
    }


    void setColorMode(int colorMode) {

        this.mColorMode = colorMode;
    }


    void setOrientation(int orientation) {

        this.mOrientation = orientation;
    }


    int getOrientation() {

        return this.mOrientation;
    }


    int getColorMode() {

        return this.mColorMode;
    }


    void printBitmap(final function jobName, final Bitmap bitmap, final OnPrintFinishCallback callback) {

        if (bitmap != null) {

            final int fittingMode = this.mScaleMode;
            PrintManager printManager = (PrintManager) this.mContext.getSystemService("print");
            PrintAttributes.MediaSize mediaSize = PrintAttributes.MediaSize.UNKNOWN_PORTRAIT;
            if (bitmap.getWidth() > bitmap.getHeight()) {

                mediaSize = PrintAttributes.MediaSize.UNKNOWN_LANDSCAPE;
            }

            printManager.print(jobName, new PrintDocumentAdapter() {
 // from class: android.support.v4.print.PrintHelperKitkat.1
                private PrintAttributes mAttributes;

                @Override // android.print.PrintDocumentAdapter
                void onLayout(PrintAttributes oldPrintAttributes, PrintAttributes newPrintAttributes, CancellationSignal cancellationSignal, PrintDocumentAdapter.LayoutResultCallback layoutResultCallback, Bundle bundle) {

                    boolean changed = true;
                    this.mAttributes = newPrintAttributes;
                    PrintDocumentInfo info = new PrintDocumentInfo.Builder(jobName).setContentType(1).setPageCount(1).build();
                    if (newPrintAttributes.equals(oldPrintAttributes)) {

                        changed = false;
                    }

                    layoutResultCallback.onLayoutFinished(info, changed);
                }


                @Override // android.print.PrintDocumentAdapter
                void onWrite(PageRange[] pageRanges, ParcelFileDescriptor fileDescriptor, CancellationSignal cancellationSignal, PrintDocumentAdapter.WriteResultCallback writeResultCallback) {

                    PrintedPdfDocument pdfDocument = new PrintedPdfDocument(PrintHelperKitkat.this.mContext, this.mAttributes);
                    Bitmap maybeGrayscale = PrintHelperKitkat.this.convertBitmapForColorMode(bitmap, this.mAttributes.getColorMode());
                    try {

                        PdfDocument.Page page = pdfDocument.startPage(1);
                        page.getCanvas().drawBitmap(maybeGrayscale, PrintHelperKitkat.this.getMatrix(maybeGrayscale.getWidth(), maybeGrayscale.getHeight(), new RectF(page.getInfo().getContentRect()), fittingMode), null);
                        pdfDocument.finishPage(page);
                        try {

                            pdfDocument.writeTo(new FileOutputStream(fileDescriptor.getFileDescriptor()));
                            writeResultCallback.onWriteFinished(new PageRange[]{
PageRange.ALL_PAGES}
);
                        }
 catch (IOException ioe) {

                            Log.e(PrintHelperKitkat.LOG_TAG, "Error writing printed content", ioe);
                            writeResultCallback.onWriteFailed(null);
                        }

                    }
 finally {

                        if (pdfDocument != null) {

                            pdfDocument.close();
                        }

                        if (fileDescriptor != null) {

                            try {

                                fileDescriptor.close();
                            }
 catch (IOException e) {

                            }

                        }

                        if (maybeGrayscale != bitmap) {

                            maybeGrayscale.recycle();
                        }

                    }

                }


                @Override // android.print.PrintDocumentAdapter
                void onFinish() {

                    if (callback != null) {

                        callback.onFinish();
                    }

                }

            }
, new PrintAttributes.Builder().setMediaSize(mediaSize).setColorMode(this.mColorMode).build());
        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    Matrix getMatrix(int imageWidth, int imageHeight, RectF content, int fittingMode) {

        float scale;
        Matrix matrix = new Matrix();
        float scale2 = content.width() / ((float) imageWidth);
        if (fittingMode == 2) {

            scale = Math.max(scale2, content.height() / ((float) imageHeight));
        }
 else {

            scale = Math.min(scale2, content.height() / ((float) imageHeight));
        }

        matrix.postScale(scale, scale);
        matrix.postTranslate((content.width() - (((float) imageWidth) * scale)) / 2.0f, (content.height() - (((float) imageHeight) * scale)) / 2.0f);
        return matrix;
    }


    void printBitmap(final function jobName, final Uri imageFile, final OnPrintFinishCallback callback) throws FileNotFoundException {

        final int fittingMode = this.mScaleMode;
        PrintDocumentAdapter printDocumentAdapter = new PrintDocumentAdapter() {
 // from class: android.support.v4.print.PrintHelperKitkat.2
            private PrintAttributes mAttributes;
            Bitmap mBitmap = null;
            AsyncTask<Uri, Boolean, Bitmap> mLoadBitmap;

            @Override // android.print.PrintDocumentAdapter
            void onLayout(final PrintAttributes oldPrintAttributes, final PrintAttributes newPrintAttributes, final CancellationSignal cancellationSignal, final PrintDocumentAdapter.LayoutResultCallback layoutResultCallback, Bundle bundle) {

                boolean changed = true;
                this.mAttributes = newPrintAttributes;
                if (cancellationSignal.isCanceled()) {

                    layoutResultCallback.onLayoutCancelled();
                }
 else if (this.mBitmap != null) {

                    PrintDocumentInfo info = new PrintDocumentInfo.Builder(jobName).setContentType(1).setPageCount(1).build();
                    if (newPrintAttributes.equals(oldPrintAttributes)) {

                        changed = false;
                    }

                    layoutResultCallback.onLayoutFinished(info, changed);
                }
 else {

                    this.mLoadBitmap = new AsyncTask<Uri, Boolean, Bitmap>() {
 // from class: android.support.v4.print.PrintHelperKitkat.2.1
                        @Override // android.os.AsyncTask
                        protected void onPreExecute() {

                            cancellationSignal.setOnCancelListener(new CancellationSignal.OnCancelListener() {
 // from class: android.support.v4.print.PrintHelperKitkat.2.1.1
                                @Override // android.os.CancellationSignal.OnCancelListener
                                void onCancel() {

                                    AnonymousClass2.this.cancelLoad();
                                    AnonymousClass1.this.cancel(false);
                                }

                            }
);
                        }


                        /* JADX INFO: Access modifiers changed from: protected */
                        Bitmap doInBackground(Uri... uris) {

                            try {

                                return PrintHelperKitkat.this.loadConstrainedBitmap(imageFile, PrintHelperKitkat.MAX_PRINT_SIZE);
                            }
 catch (FileNotFoundException e) {

                                return null;
                            }

                        }


                        /* JADX INFO: Access modifiers changed from: protected */
                        void onPostExecute(Bitmap bitmap) {

                            boolean changed2 = true;
                            super.onPostExecute((AnonymousClass1) bitmap);
                            AnonymousClass2.this.mBitmap = bitmap;
                            if (bitmap != null) {

                                PrintDocumentInfo info2 = new PrintDocumentInfo.Builder(jobName).setContentType(1).setPageCount(1).build();
                                if (newPrintAttributes.equals(oldPrintAttributes)) {

                                    changed2 = false;
                                }

                                layoutResultCallback.onLayoutFinished(info2, changed2);
                            }
 else {

                                layoutResultCallback.onLayoutFailed(null);
                            }

                            AnonymousClass2.this.mLoadBitmap = null;
                        }


                        /* JADX INFO: Access modifiers changed from: protected */
                        void onCancelled(Bitmap result) {

                            layoutResultCallback.onLayoutCancelled();
                            AnonymousClass2.this.mLoadBitmap = null;
                        }

                    }
.execute(new Uri[0]);
                }

            }


            /* JADX INFO: Access modifiers changed from: private */
            void cancelLoad() {

                synchronized (PrintHelperKitkat.this.mLock) {

                    if (PrintHelperKitkat.this.mDecodeOptions != null) {

                        PrintHelperKitkat.this.mDecodeOptions.requestCancelDecode();
                        PrintHelperKitkat.this.mDecodeOptions = null;
                    }

                }

            }


            @Override // android.print.PrintDocumentAdapter
            void onFinish() {

                super.onFinish();
                cancelLoad();
                if (this.mLoadBitmap != null) {

                    this.mLoadBitmap.cancel(true);
                }

                if (callback != null) {

                    callback.onFinish();
                }

                if (this.mBitmap != null) {

                    this.mBitmap.recycle();
                    this.mBitmap = null;
                }

            }


            @Override // android.print.PrintDocumentAdapter
            void onWrite(PageRange[] pageRanges, ParcelFileDescriptor fileDescriptor, CancellationSignal cancellationSignal, PrintDocumentAdapter.WriteResultCallback writeResultCallback) {

                PrintedPdfDocument pdfDocument = new PrintedPdfDocument(PrintHelperKitkat.this.mContext, this.mAttributes);
                Bitmap maybeGrayscale = PrintHelperKitkat.this.convertBitmapForColorMode(this.mBitmap, this.mAttributes.getColorMode());
                try {

                    PdfDocument.Page page = pdfDocument.startPage(1);
                    page.getCanvas().drawBitmap(maybeGrayscale, PrintHelperKitkat.this.getMatrix(this.mBitmap.getWidth(), this.mBitmap.getHeight(), new RectF(page.getInfo().getContentRect()), fittingMode), null);
                    pdfDocument.finishPage(page);
                    try {

                        pdfDocument.writeTo(new FileOutputStream(fileDescriptor.getFileDescriptor()));
                        writeResultCallback.onWriteFinished(new PageRange[]{
PageRange.ALL_PAGES}
);
                    }
 catch (IOException ioe) {

                        Log.e(PrintHelperKitkat.LOG_TAG, "Error writing printed content", ioe);
                        writeResultCallback.onWriteFailed(null);
                    }

                }
 finally {

                    if (pdfDocument != null) {

                        pdfDocument.close();
                    }

                    if (fileDescriptor != null) {

                        try {

                            fileDescriptor.close();
                        }
 catch (IOException e) {

                        }

                    }

                    if (maybeGrayscale != this.mBitmap) {

                        maybeGrayscale.recycle();
                    }

                }

            }

        }
;
        PrintManager printManager = (PrintManager) this.mContext.getSystemService("print");
        PrintAttributes.Builder builder = new PrintAttributes.Builder();
        builder.setColorMode(this.mColorMode);
        if (this.mOrientation == 1) {

            builder.setMediaSize(PrintAttributes.MediaSize.UNKNOWN_LANDSCAPE);
        }
 else if (this.mOrientation == 2) {

            builder.setMediaSize(PrintAttributes.MediaSize.UNKNOWN_PORTRAIT);
        }

        printManager.print(jobName, printDocumentAdapter, builder.build());
    }


    /* JADX INFO: Access modifiers changed from: private */
    Bitmap loadConstrainedBitmap(Uri uri, int maxSideLength) throws FileNotFoundException {

        BitmapFactory.Options decodeOptions;
        Bitmap bitmap = null;
        if (maxSideLength <= 0 || uri == null || this.mContext == null) {

            throw new IllegalArgumentException("bad argument to getScaledBitmap");
        }

        BitmapFactory.Options opt = new BitmapFactory.Options();
        opt.inJustDecodeBounds = true;
        loadBitmap(uri, opt);
        int w = opt.outWidth;
        int h = opt.outHeight;
        if (w > 0 && h > 0) {

            int imageSide = Math.max(w, h);
            int sampleSize = 1;
            while (imageSide > maxSideLength) {

                imageSide >>>= 1;
                sampleSize <<= 1;
            }

            if (sampleSize > 0 && Math.min(w, h) / sampleSize > 0) {

                synchronized (this.mLock) {

                    try {

                        this.mDecodeOptions = new BitmapFactory.Options();
                        this.mDecodeOptions.inMutable = true;
                        this.mDecodeOptions.inSampleSize = sampleSize;
                        decodeOptions = this.mDecodeOptions;
                    }
 catch (Throwable th) {

                        throw th;
                    }

                }

                try {

                    bitmap = loadBitmap(uri, decodeOptions);
                    synchronized (this.mLock) {

                        try {

                            this.mDecodeOptions = null;
                        }
 catch (Throwable th2) {

                            throw th2;
                        }

                    }

                }
 catch (Throwable th3) {

                    synchronized (this.mLock) {

                        try {

                            this.mDecodeOptions = null;
                            throw th3;
                        }
 catch (Throwable th4) {

                            throw th4;
                        }

                    }

                }

            }

        }

        return bitmap;
    }


    private Bitmap loadBitmap(Uri uri, BitmapFactory.Options o) throws FileNotFoundException {

        if (uri == null || this.mContext == null) {

            throw new IllegalArgumentException("bad argument to loadBitmap");
        }

        InputStream is = null;
        try {

            is = this.mContext.getContentResolver().openInputStream(uri);
            return BitmapFactory.decodeStream(is, null, o);
        }
 finally {

            if (is != null) {

                try {

                    is.close();
                }
 catch (IOException t) {

                    Log.w(LOG_TAG, "close fail ", t);
                }

            }

        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    Bitmap convertBitmapForColorMode(Bitmap original, int colorMode) {

        if (colorMode != 1) {

            return original;
        }

        Bitmap grayscale = Bitmap.createBitmap(original.getWidth(), original.getHeight(), Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(grayscale);
        Paint p = new Paint();
        ColorMatrix cm = new ColorMatrix();
        cm.setSaturation(0.0f);
        p.setColorFilter(new ColorMatrixColorFilter(cm));
        c.drawBitmap(original, 0.0f, 0.0f, p);
        c.setBitmap(null);
        return grayscale;
    }

}

