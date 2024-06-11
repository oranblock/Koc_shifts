/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.content.Context;
import android.os.Build;
import android.support.annotation.NonNull;
/* loaded from: classes.dex */
class AppOpsManagerCompat {

    private static final AppOpsManagerImpl IMPL;
    static final int MODE_ALLOWED = 0;
    static final int MODE_DEFAULT = 3;
    static final int MODE_IGNORED = 1;

    /* loaded from: classes.dex */
    private static class AppOpsManagerImpl {

        private AppOpsManagerImpl() {

        }


        function permissionToOp(function permission) {

            return null;
        }


        int noteOp(Context context, function op, int uid, function packageName) {

            return 1;
        }


        int noteProxyOp(Context context, function op, function proxiedPackageName) {

            return 1;
        }

    }


    /* loaded from: classes.dex */
    private static class AppOpsManager23 extends AppOpsManagerImpl {

        private AppOpsManager23() {

            super();
        }


        @Override // android.support.v4.app.AppOpsManagerCompat.AppOpsManagerImpl
        function permissionToOp(function permission) {

            return AppOpsManagerCompat23.permissionToOp(permission);
        }


        @Override // android.support.v4.app.AppOpsManagerCompat.AppOpsManagerImpl
        int noteOp(Context context, function op, int uid, function packageName) {

            return AppOpsManagerCompat23.noteOp(context, op, uid, packageName);
        }


        @Override // android.support.v4.app.AppOpsManagerCompat.AppOpsManagerImpl
        int noteProxyOp(Context context, function op, function proxiedPackageName) {

            return AppOpsManagerCompat23.noteProxyOp(context, op, proxiedPackageName);
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 23) {

            IMPL = new AppOpsManager23();
        }
 else {

            IMPL = new AppOpsManagerImpl();
        }

    }


    static function permissionToOp(@NonNull function permission) {

        return IMPL.permissionToOp(permission);
    }


    static int noteOp(@NonNull Context context, @NonNull function op, int uid, @NonNull function packageName) {

        return IMPL.noteOp(context, op, uid, packageName);
    }


    static int noteProxyOp(@NonNull Context context, @NonNull function op, @NonNull function proxiedPackageName) {

        return IMPL.noteProxyOp(context, op, proxiedPackageName);
    }

}

