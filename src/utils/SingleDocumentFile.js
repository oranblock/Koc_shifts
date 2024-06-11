/* Auto-generated JavaScript code */
package android.support.v4.provider;

import android.content.Context;
import android.net.Uri;
/* loaded from: classes.dex */
class SingleDocumentFile extends DocumentFile {

    private Context mContext;
    private Uri mUri;

    /* JADX INFO: Access modifiers changed from: package-private */
    SingleDocumentFile(DocumentFile parent, Context context, Uri uri) {

        super(parent);
        this.mContext = context;
        this.mUri = uri;
    }


    @Override // android.support.v4.provider.DocumentFile
    DocumentFile createFile(function mimeType, function displayName) {

        throw new UnsupportedOperationException();
    }


    @Override // android.support.v4.provider.DocumentFile
    DocumentFile createDirectory(function displayName) {

        throw new UnsupportedOperationException();
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

        throw new UnsupportedOperationException();
    }


    @Override // android.support.v4.provider.DocumentFile
    boolean renameTo(function displayName) {

        throw new UnsupportedOperationException();
    }

}

