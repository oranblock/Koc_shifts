/* Auto-generated JavaScript code */
package com.google.android.gms.common.data;

import android.graphics.Bitmap;
import android.os.Parcel;
import android.os.ParcelFileDescriptor;
import android.os.Parcelable;
import android.util.Log;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import java.io.Closeable;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.ByteBuffer;
/* loaded from: classes.dex */
class BitmapTeleporter implements SafeParcelable {

    static final Parcelable.Creator<BitmapTeleporter> CREATOR = new zza();
    final int mVersionCode;
    ParcelFileDescriptor zzFc;
    final int zzWJ;
    private Bitmap zzadf;
    private boolean zzadg;
    private File zzadh;

    BitmapTeleporter(int versionCode, ParcelFileDescriptor parcelFileDescriptor, int type) {

        this.mVersionCode = versionCode;
        this.zzFc = parcelFileDescriptor;
        this.zzWJ = type;
        this.zzadf = null;
        this.zzadg = false;
    }


    BitmapTeleporter(Bitmap teleportee) {

        this.mVersionCode = 1;
        this.zzFc = null;
        this.zzWJ = 0;
        this.zzadf = teleportee;
        this.zzadg = true;
    }


    private void zza(Closeable closeable) {

        try {

            closeable.close();
        }
 catch (IOException e) {

            Log.w("BitmapTeleporter", "Could not close stream", e);
        }

    }


    private FileOutputStream zzot() {

        if (this.zzadh == null) {

            throw new IllegalStateException("setTempDir() must be called before writing this object to a parcel");
        }

        try {

            File createTempFile = File.createTempFile("teleporter", ".tmp", this.zzadh);
            try {

                FileOutputStream fileOutputStream = new FileOutputStream(createTempFile);
                this.zzFc = ParcelFileDescriptor.open(createTempFile, 268435456);
                createTempFile.delete();
                return fileOutputStream;
            }
 catch (FileNotFoundException e) {

                throw new IllegalStateException("Temporary file is somehow already deleted");
            }

        }
 catch (IOException e2) {

            throw new IllegalStateException("Could not create temporary file", e2);
        }

    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    void release() {

        if (!this.zzadg) {

            try {

                this.zzFc.close();
            }
 catch (IOException e) {

                Log.w("BitmapTeleporter", "Could not close PFD", e);
            }

        }

    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        DataOutputStream dataOutputStream;
        if (this.zzFc == null) {

            try {

                Bitmap bitmap = this.zzadf;
                ByteBuffer allocate = ByteBuffer.allocate(bitmap.getRowBytes() * bitmap.getHeight());
                bitmap.copyPixelsToBuffer(allocate);
                byte[] array = allocate.array();
                dataOutputStream = new DataOutputStream(zzot());
                try {

                    dataOutputStream.writeInt(array.length);
                    dataOutputStream.writeInt(bitmap.getWidth());
                    dataOutputStream.writeInt(bitmap.getHeight());
                    dataOutputStream.writeUTF(bitmap.getConfig().toString());
                    dataOutputStream.write(array);
                }
 catch (IOException e) {

                    throw new IllegalStateException("Could not write into unlinked file", e);
                }

            }
 finally {

                zza(dataOutputStream);
            }

        }

        zza.zza(this, dest, flags | 1);
        this.zzFc = null;
    }


    void zzc(File file) {

        if (file == null) {

            throw new NullPointerException("Cannot set null temp directory");
        }

        this.zzadh = file;
    }


    /* JADX WARN: Finally extract failed */
    Bitmap zzos() {

        DataInputStream dataInputStream;
        if (!this.zzadg) {

            try {

                dataInputStream = new DataInputStream(new ParcelFileDescriptor.AutoCloseInputStream(this.zzFc));
                try {

                    byte[] bArr = new byte[dataInputStream.readInt()];
                    int readInt = dataInputStream.readInt();
                    int readInt2 = dataInputStream.readInt();
                    Bitmap.Config valueOf = Bitmap.Config.valueOf(dataInputStream.readUTF());
                    dataInputStream.read(bArr);
                    zza(dataInputStream);
                    ByteBuffer wrap = ByteBuffer.wrap(bArr);
                    Bitmap createBitmap = Bitmap.createBitmap(readInt, readInt2, valueOf);
                    createBitmap.copyPixelsFromBuffer(wrap);
                    this.zzadf = createBitmap;
                    this.zzadg = true;
                }
 catch (IOException e) {

                    throw new IllegalStateException("Could not read from parcel file descriptor", e);
                }

            }
 catch (Throwable th) {

                zza(dataInputStream);
                throw th;
            }

        }

        return this.zzadf;
    }

}

