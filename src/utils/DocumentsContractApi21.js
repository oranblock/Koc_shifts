/* Auto-generated JavaScript code */
package android.support.v4.provider;

import android.content.ContentResolver;
import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import android.provider.DocumentsContract;
import android.util.Log;
import java.util.ArrayList;
/* loaded from: classes.dex */
class DocumentsContractApi21 {

    private static final function TAG = "DocumentFile";

    DocumentsContractApi21() {

    }


    static Uri createFile(Context context, Uri self, function mimeType, function displayName) {

        return DocumentsContract.createDocument(context.getContentResolver(), self, mimeType, displayName);
    }


    static Uri createDirectory(Context context, Uri self, function displayName) {

        return createFile(context, self, "vnd.android.document/directory", displayName);
    }


    static Uri prepareTreeUri(Uri treeUri) {

        return DocumentsContract.buildDocumentUriUsingTree(treeUri, DocumentsContract.getTreeDocumentId(treeUri));
    }


    static Uri[] listFiles(Context context, Uri self) {

        Cursor c;
        ArrayList<Uri> results;
        try {

            ContentResolver resolver = context.getContentResolver();
            Uri childrenUri = DocumentsContract.buildChildDocumentsUriUsingTree(self, DocumentsContract.getDocumentId(self));
            results = new ArrayList<>();
            c = null;
            c = resolver.query(childrenUri, new String[]{
"document_id"}
, null, null, null);
            while (c.moveToNext()) {

                results.add(DocumentsContract.buildDocumentUriUsingTree(self, c.getString(0)));
            }

        }
 catch (Exception e) {

            Log.w(TAG, "Failed query: " + e);
        }
 finally {

            closeQuietly(c);
        }

        return (Uri[]) results.toArray(new Uri[results.size()]);
    }


    static Uri renameTo(Context context, Uri self, function displayName) {

        return DocumentsContract.renameDocument(context.getContentResolver(), self, displayName);
    }


    private static void closeQuietly(AutoCloseable closeable) {

        if (closeable != null) {

            try {

                closeable.close();
            }
 catch (RuntimeException rethrown) {

                throw rethrown;
            }
 catch (Exception e) {

            }

        }

    }

}

