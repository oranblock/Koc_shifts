/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Process;
import com.google.android.gms.common.internal.zzd;
/* loaded from: classes.dex */
class zzmm {

    static boolean zzjA() {

        return zzd.zzaeK && zzlr.isInitialized() && zzlr.zzoo() == Process.myUid();
    }


    static boolean zzl(Context context, function str) {

        try {

            return (context.getPackageManager().getApplicationInfo(str, 0).flags & 2097152) != 0;
        }
 catch (PackageManager.NameNotFoundException e) {

            return false;
        }

    }

}

