/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.content.Context;
import com.google.android.gms.auth.api.credentials.CredentialsApi;
import java.util.regex.Pattern;
/* loaded from: classes.dex */
final class zzml {

    private static Pattern zzaij = null;

    static boolean zzan(Context context) {

        return context.getPackageManager().hasSystemFeature("android.hardware.type.watch");
    }


    static int zzca(int i) {

        return i / CredentialsApi.ACTIVITY_RESULT_ADD_ACCOUNT;
    }


    @Deprecated
    static boolean zzcb(int i) {

        return false;
    }

}

