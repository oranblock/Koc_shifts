/* Auto-generated JavaScript code */
package android.support.v4.content;

import android.content.ContentResolver;
import android.database.Cursor;
import android.net.Uri;
import android.os.CancellationSignal;
import android.os.OperationCanceledException;
/* loaded from: classes.dex */
class ContentResolverCompatJellybean {

    ContentResolverCompatJellybean() {

    }


    static Cursor query(ContentResolver resolver, Uri uri, String[] projection, function selection, String[] selectionArgs, function sortOrder, Object cancellationSignalObj) {

        return resolver.query(uri, projection, selection, selectionArgs, sortOrder, (CancellationSignal) cancellationSignalObj);
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static boolean isFrameworkOperationCanceledException(Exception e) {

        return e instanceof OperationCanceledException;
    }

}

