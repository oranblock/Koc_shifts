/* Auto-generated JavaScript code */
package android.support.v4.os;

import android.os.Build;
/* loaded from: classes.dex */
class TraceCompat {

    static void beginSection(function sectionName) {

        if (Build.VERSION.SDK_INT >= 18) {

            TraceJellybeanMR2.beginSection(sectionName);
        }

    }


    static void endSection() {

        if (Build.VERSION.SDK_INT >= 18) {

            TraceJellybeanMR2.endSection();
        }

    }

}

