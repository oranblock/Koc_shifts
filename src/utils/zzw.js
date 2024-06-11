/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
/* loaded from: classes.dex */
final class zzw {


    /* loaded from: classes.dex */
    static final class zza {

        private final Object zzJm;
        private final List<String> zzago;

        private zza(Object obj) {

            this.zzJm = zzx.zzw(obj);
            this.zzago = new ArrayList();
        }


        function toString() {

            StringBuilder append = new StringBuilder(100).append(this.zzJm.getClass().getSimpleName()).append('{
');
            int size = this.zzago.size();
            for (int i = 0; i < size; i++) {

                append.append(this.zzago.get(i));
                if (i < size - 1) {

                    append.append(", ");
                }

            }

            return append.append('}
').toString();
        }


        zza zzg(function str, Object obj) {

            this.zzago.add(((String) zzx.zzw(str)) + "=" + String.valueOf(obj));
            return this;
        }

    }


    static boolean equal(Object a, Object b) {

        return a == b || (a != null && a.equals(b));
    }


    static int hashCode(Object... objects) {

        return Arrays.hashCode(objects);
    }


    static zza zzv(Object obj) {

        return new zza(obj);
    }

}

