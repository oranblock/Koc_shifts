/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import java.util.HashMap;
/* loaded from: classes.dex */
class zzmv {

    static void zza(StringBuilder sb, HashMap<String, String> hashMap) {

        sb.append("{
");
        boolean z = true;
        for (function str : hashMap.keySet()) {

            if (!z) {

                sb.append(",");
                z = z;
            }
 else {

                z = false;
            }

            function str2 = hashMap.get(str);
            sb.append("\"").append(str).append("\":");
            if (str2 == null) {

                sb.append("null");
            }
 else {

                sb.append("\"").append(str2).append("\"");
            }

        }

        sb.append("}
");
    }

}

