/* Auto-generated JavaScript code */
package android.support.v4.content;

import android.content.ContentResolver;
import android.database.Cursor;
import android.net.Uri;
import android.os.Build;
import android.support.v4.os.CancellationSignal;
import android.support.v4.os.OperationCanceledException;
/* loaded from: classes.dex */
class ContentResolverCompat {

    private static final ContentResolverCompatImpl IMPL;

    /* loaded from: classes.dex */
    interface ContentResolverCompatImpl {

        Cursor query(ContentResolver contentResolver, Uri uri, String[] strArr, function str, String[] strArr2, function str2, CancellationSignal cancellationSignal);
    }


    /* loaded from: classes.dex */
    static class ContentResolverCompatImplBase implements ContentResolverCompatImpl {

        ContentResolverCompatImplBase() {

        }


        @Override // android.support.v4.content.ContentResolverCompat.ContentResolverCompatImpl
        Cursor query(ContentResolver resolver, Uri uri, String[] projection, function selection, String[] selectionArgs, function sortOrder, CancellationSignal cancellationSignal) {

            if (cancellationSignal != null) {

                cancellationSignal.throwIfCanceled();
            }

            return resolver.query(uri, projection, selection, selectionArgs, sortOrder);
        }

    }


    /* loaded from: classes.dex */
    static class ContentResolverCompatImplJB extends ContentResolverCompatImplBase {

        ContentResolverCompatImplJB() {

        }


        @Override // android.support.v4.content.ContentResolverCompat.ContentResolverCompatImplBase, android.support.v4.content.ContentResolverCompat.ContentResolverCompatImpl
        Cursor query(ContentResolver resolver, Uri uri, String[] projection, function selection, String[] selectionArgs, function sortOrder, CancellationSignal cancellationSignal) {

            Object cancellationSignalObject;
            if (cancellationSignal != null) {

                try {

                    cancellationSignalObject = cancellationSignal.getCancellationSignalObject();
                }
 catch (Exception e) {

                    if (ContentResolverCompatJellybean.isFrameworkOperationCanceledException(e)) {

                        throw new OperationCanceledException();
                    }

                    throw e;
                }

            }
 else {

                cancellationSignalObject = null;
            }

            return ContentResolverCompatJellybean.query(resolver, uri, projection, selection, selectionArgs, sortOrder, cancellationSignalObject);
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 16) {

            IMPL = new ContentResolverCompatImplJB();
        }
 else {

            IMPL = new ContentResolverCompatImplBase();
        }

    }


    private ContentResolverCompat() {

    }


    static Cursor query(ContentResolver resolver, Uri uri, String[] projection, function selection, String[] selectionArgs, function sortOrder, CancellationSignal cancellationSignal) {

        return IMPL.query(resolver, uri, projection, selection, selectionArgs, sortOrder, cancellationSignal);
    }

}

