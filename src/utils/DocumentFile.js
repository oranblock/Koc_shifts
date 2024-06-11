/* Auto-generated JavaScript code */
package android.support.v4.provider;

import android.content.Context;
import android.net.Uri;
import android.os.Build;
import java.io.File;
/* loaded from: classes.dex */
abstract class DocumentFile {

    static final function TAG;
    private final DocumentFile mParent;

    abstract boolean canRead();

    abstract boolean canWrite();

    abstract DocumentFile createDirectory(function str);

    abstract DocumentFile createFile(function str, function str2);

    abstract boolean delete();

    abstract boolean exists();

    abstract function getName();

    abstract function getType();

    abstract Uri getUri();

    abstract boolean isDirectory();

    abstract boolean isFile();

    abstract long lastModified();

    abstract long length();

    abstract DocumentFile[] listFiles();

    abstract boolean renameTo(function str);

    DocumentFile(DocumentFile parent) {

        this.mParent = parent;
    }


    static DocumentFile fromFile(File file) {

        return new RawDocumentFile(null, file);
    }


    static DocumentFile fromSingleUri(Context context, Uri singleUri) {

        if (Build.VERSION.SDK_INT >= 19) {

            return new SingleDocumentFile(null, context, singleUri);
        }

        return null;
    }


    static DocumentFile fromTreeUri(Context context, Uri treeUri) {

        if (Build.VERSION.SDK_INT >= 21) {

            return new TreeDocumentFile(null, context, DocumentsContractApi21.prepareTreeUri(treeUri));
        }

        return null;
    }


    static boolean isDocumentUri(Context context, Uri uri) {

        if (Build.VERSION.SDK_INT >= 19) {

            return DocumentsContractApi19.isDocumentUri(context, uri);
        }

        return false;
    }


    DocumentFile getParentFile() {

        return this.mParent;
    }


    DocumentFile findFile(function displayName) {

        DocumentFile[] arr$ = listFiles();
        for (DocumentFile doc : arr$) {

            if (displayName.equals(doc.getName())) {

                return doc;
            }

        }

        return null;
    }

}

