/* Auto-generated JavaScript code */
package com.google.android.gms.common.data;

import android.os.Bundle;
import java.util.ArrayList;
/* loaded from: classes.dex */
final class DataBufferUtils {

    private DataBufferUtils() {

    }


    /* JADX WARN: Multi-variable type inference failed */
    static <T, E extends Freezable<T>> ArrayList<T> freezeAndClose(DataBuffer<E> buffer) {

        ArrayList<T> arrayList = (ArrayList<T>) new ArrayList(buffer.getCount());
        try {

            for (E e : buffer) {

                arrayList.add(e.freeze());
            }

            return arrayList;
        }
 finally {

            buffer.close();
        }

    }


    static boolean hasData(DataBuffer<?> buffer) {

        return buffer != null && buffer.getCount() > 0;
    }


    static boolean hasNextPage(DataBuffer<?> buffer) {

        Bundle zzor = buffer.zzor();
        return (zzor == null || zzor.getString("next_page_token") == null) ? false : true;
    }


    static boolean hasPrevPage(DataBuffer<?> buffer) {

        Bundle zzor = buffer.zzor();
        return (zzor == null || zzor.getString("prev_page_token") == null) ? false : true;
    }

}

