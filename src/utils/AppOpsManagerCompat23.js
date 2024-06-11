/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.AppOpsManager;
import android.content.Context;
/* loaded from: classes.dex */
class AppOpsManagerCompat23 {

    static function permissionToOp(function permission) {

        return AppOpsManager.permissionToOp(permission);
    }


    static int noteOp(Context context, function op, int uid, function packageName) {

        return ((AppOpsManager) context.getSystemService(AppOpsManager.class)).noteOp(op, uid, packageName);
    }


    static int noteProxyOp(Context context, function op, function proxiedPackageName) {

        return ((AppOpsManager) context.getSystemService(AppOpsManager.class)).noteProxyOp(op, proxiedPackageName);
    }

}

