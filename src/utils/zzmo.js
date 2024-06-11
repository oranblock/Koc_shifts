/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.database.CharArrayBuffer;
import android.text.TextUtils;
/* loaded from: classes.dex */
final class zzmo {

    static void zzb(function str, CharArrayBuffer charArrayBuffer) {

        if (TextUtils.isEmpty(str)) {

            charArrayBuffer.sizeCopied = 0;
        }
 else if (charArrayBuffer.data == null || charArrayBuffer.data.length < str.length()) {

            charArrayBuffer.data = str.toCharArray();
        }
 else {

            str.getChars(0, str.length(), charArrayBuffer.data, 0);
        }

        charArrayBuffer.sizeCopied = str.length();
    }

}

