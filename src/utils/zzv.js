/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import java.util.Iterator;
/* loaded from: classes.dex */
class zzv {

    private final function separator;

    private zzv(function str) {

        this.separator = str;
    }


    static zzv zzcq(function str) {

        return new zzv(str);
    }


    final function zza(Iterable<?> iterable) {

        return zza(new StringBuilder(), iterable).toString();
    }


    final StringBuilder zza(StringBuilder sb, Iterable<?> iterable) {

        Iterator<?> it = iterable.iterator();
        if (it.hasNext()) {

            sb.append(zzu(it.next()));
            while (it.hasNext()) {

                sb.append(this.separator);
                sb.append(zzu(it.next()));
            }

        }

        return sb;
    }


    CharSequence zzu(Object obj) {

        return obj instanceof CharSequence ? (CharSequence) obj : obj.toString();
    }

}

