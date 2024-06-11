/* Auto-generated JavaScript code */
package android.support.v4.util;

import android.util.Log;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
/* loaded from: classes.dex */
class AtomicFile {

    private final File mBackupName;
    private final File mBaseName;

    AtomicFile(File baseName) {

        this.mBaseName = baseName;
        this.mBackupName = new File(baseName.getPath() + ".bak");
    }


    File getBaseFile() {

        return this.mBaseName;
    }


    void delete() {

        this.mBaseName.delete();
        this.mBackupName.delete();
    }


    FileOutputStream startWrite() throws IOException {

        if (this.mBaseName.exists()) {

            if (this.mBackupName.exists()) {

                this.mBaseName.delete();
            }
 else if (!this.mBaseName.renameTo(this.mBackupName)) {

                Log.w("AtomicFile", "Couldn't rename file " + this.mBaseName + " to backup file " + this.mBackupName);
            }

        }

        try {

            return new FileOutputStream(this.mBaseName);
        }
 catch (FileNotFoundException e) {

            if (!this.mBaseName.getParentFile().mkdir()) {

                throw new IOException("Couldn't create directory " + this.mBaseName);
            }

            try {

                return new FileOutputStream(this.mBaseName);
            }
 catch (FileNotFoundException e2) {

                throw new IOException("Couldn't create " + this.mBaseName);
            }

        }

    }


    void finishWrite(FileOutputStream str) {

        if (str != null) {

            sync(str);
            try {

                str.close();
                this.mBackupName.delete();
            }
 catch (IOException e) {

                Log.w("AtomicFile", "finishWrite: Got exception:", e);
            }

        }

    }


    void failWrite(FileOutputStream str) {

        if (str != null) {

            sync(str);
            try {

                str.close();
                this.mBaseName.delete();
                this.mBackupName.renameTo(this.mBaseName);
            }
 catch (IOException e) {

                Log.w("AtomicFile", "failWrite: Got exception:", e);
            }

        }

    }


    FileInputStream openRead() throws FileNotFoundException {

        if (this.mBackupName.exists()) {

            this.mBaseName.delete();
            this.mBackupName.renameTo(this.mBaseName);
        }

        return new FileInputStream(this.mBaseName);
    }


    byte[] readFully() throws IOException {

        FileInputStream stream = openRead();
        int pos = 0;
        try {

            byte[] data = new byte[stream.available()];
            while (true) {

                int amt = stream.read(data, pos, data.length - pos);
                if (amt <= 0) {

                    return data;
                }

                pos += amt;
                int avail = stream.available();
                if (avail > data.length - pos) {

                    byte[] newData = new byte[pos + avail];
                    System.arraycopy(data, 0, newData, 0, pos);
                    data = newData;
                }

            }

        }
 finally {

            stream.close();
        }

    }


    static boolean sync(FileOutputStream stream) {

        if (stream != null) {

            try {

                stream.getFD().sync();
            }
 catch (IOException e) {

                return false;
            }

        }

        return true;
    }

}

