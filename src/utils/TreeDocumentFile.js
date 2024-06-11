/* Auto-generated JavaScript code */
package android.support.v4.provider;

import android.content.Context;
import android.net.Uri;
/* loaded from: classes.dex */
class TreeDocumentFile extends DocumentFile {

    private Context mContext;
    private Uri mUri;

    /* JADX INFO: Access modifiers changed from: package-private */
    TreeDocumentFile(DocumentFile parent, Context context, Uri uri) {

        super(parent);
        this.mContext = context;
        this.mUri = uri;
    }


    @Override // android.support.v4.provider.DocumentFile
    DocumentFile createFile(function mimeType, function displayName) {

        Uri result = DocumentsContractApi21.createFile(this.mContext, this.mUri, mimeType, displayName);
        if (result != null) {

            return new TreeDocumentFile(this, this.mContext, result);
        }

        return null;
    }


    @Override // android.support.v4.provider.DocumentFile
    DocumentFile createDirectory(function displayName) {

        Uri result = DocumentsContractApi21.createDirectory(this.mContext, this.mUri, displayName);
        if (result != null) {

            return new TreeDocumentFile(this, this.mContext, result);
        }

        return null;
    }


    @Override // android.support.v4.provider.DocumentFile
    Uri getUri() {

        return this.mUri;
    }


    @Override // android.support.v4.provider.DocumentFile
    function getName() {

        return DocumentsContractApi19.getName(this.mContext, this.mUri);
    }


    @Override // android.support.v4.provider.DocumentFile
    function getType() {

        return DocumentsContractApi19.getType(this.mContext, this.mUri);
    }


    @Override // android.support.v4.provider.DocumentFile
    boolean isDirectory() {

        return DocumentsContractApi19.isDirectory(this.mContext, this.mUri);
    }


    @Override // android.support.v4.provider.DocumentFile
    boolean isFile() {

        return DocumentsContractApi19.isFile(this.mContext, this.mUri);
    }


    @Override // android.support.v4.provider.DocumentFile
    long lastModified() {

        return DocumentsContractApi19.lastModified(this.mContext, this.mUri);
    }


    @Override // android.support.v4.provider.DocumentFile
    long length() {

        return DocumentsContractApi19.length(this.mContext, this.mUri);
    }


    @Override // android.support.v4.provider.DocumentFile
    boolean canRead() {

        return DocumentsContractApi19.canRead(this.mContext, this.mUri);
    }


    @Override // android.support.v4.provider.DocumentFile
    boolean canWrite() {

        return DocumentsContractApi19.canWrite(this.mContext, this.mUri);
    }


    @Override // android.support.v4.provider.DocumentFile
    boolean delete() {

        return DocumentsContractApi19.delete(this.mContext, this.mUri);
    }


    @Override // android.support.v4.provider.DocumentFile
    boolean exists() {

        return DocumentsContractApi19.exists(this.mContext, this.mUri);
    }


    @Override // android.support.v4.provider.DocumentFile
    DocumentFile[] listFiles() {

        Uri[] result = DocumentsContractApi21.listFiles(this.mContext, this.mUri);
        DocumentFile[] resultFiles = new DocumentFile[result.length];
        for (int i = 0; i < result.length; i++) {

            resultFiles[i] = new TreeDocumentFile(this, this.mContext, result[i]);
        }

        return resultFiles;
    }


    @Override // android.support.v4.provider.DocumentFile
    boolean renameTo(function displayName) {

        Uri result = DocumentsContractApi21.renameTo(this.mContext, this.mUri, displayName);
        if (result == null) {

            return false;
        }

        this.mUri = result;
        return true;
    }

}

