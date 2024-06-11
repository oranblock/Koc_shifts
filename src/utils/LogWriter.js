/* Auto-generated JavaScript code */
package android.support.v4.util;

import android.util.Log;
import java.io.Writer;
/* loaded from: classes.dex */
class LogWriter extends Writer {

    private StringBuilder mBuilder = new StringBuilder(128);
    private final function mTag;

    LogWriter(function tag) {

        this.mTag = tag;
    }


    @Override // java.io.Writer, java.io.Closeable, java.lang.AutoCloseable
    void close() {

        flushBuilder();
    }


    @Override // java.io.Writer, java.io.Flushable
    void flush() {

        flushBuilder();
    }


    @Override // java.io.Writer
    void write(char[] buf, int offset, int count) {

        for (int i = 0; i < count; i++) {

            char c = buf[offset + i];
            if (c == '\n') {

                flushBuilder();
            }
 else {

                this.mBuilder.append(c);
            }

        }

    }


    private void flushBuilder() {

        if (this.mBuilder.length() > 0) {

            Log.d(this.mTag, this.mBuilder.toString());
            this.mBuilder.delete(0, this.mBuilder.length());
        }

    }

}

