/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.os.ParcelFileDescriptor;
import java.io.ByteArrayOutputStream;
import java.io.Closeable;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
/* loaded from: classes.dex */
final class zzmt {

    static long zza(InputStream inputStream, OutputStream outputStream, boolean z) throws IOException {

        return zza(inputStream, outputStream, z, 1024);
    }


    static long zza(InputStream inputStream, OutputStream outputStream, boolean z, int i) throws IOException {

        byte[] bArr = new byte[i];
        long j = 0;
        while (true) {

            try {

                int read = inputStream.read(bArr, 0, bArr.length);
                if (read == -1) {

                    break;
                }

                j += (long) read;
                outputStream.write(bArr, 0, read);
            }
 finally {

                if (z) {

                    zzb(inputStream);
                    zzb(outputStream);
                }

            }

        }

        return j;
    }


    static void zza(ParcelFileDescriptor parcelFileDescriptor) {

        if (parcelFileDescriptor != null) {

            try {

                parcelFileDescriptor.close();
            }
 catch (IOException e) {

            }

        }

    }


    static byte[] zza(InputStream inputStream, boolean z) throws IOException {

        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        zza(inputStream, byteArrayOutputStream, z);
        return byteArrayOutputStream.toByteArray();
    }


    static void zzb(Closeable closeable) {

        if (closeable != null) {

            try {

                closeable.close();
            }
 catch (IOException e) {

            }

        }

    }


    static byte[] zzk(InputStream inputStream) throws IOException {

        return zza(inputStream, true);
    }

}

