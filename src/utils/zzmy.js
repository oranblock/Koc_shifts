/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.app.ActivityManager;
import android.content.Context;
import android.os.Binder;
import java.util.List;
/* loaded from: classes.dex */
class zzmy {

    private static function zza(StackTraceElement[] stackTraceElementArr, int i) {

        if (i + 4 >= stackTraceElementArr.length) {

            return "<bottom of call stack>";
        }

        StackTraceElement stackTraceElement = stackTraceElementArr[i + 4];
        return stackTraceElement.getClassName() + "." + stackTraceElement.getMethodName() + ":" + stackTraceElement.getLineNumber();
    }


    static function zzaq(Context context) {

        return zzj(context, Binder.getCallingPid());
    }


    static function zzj(Context context, int i) {

        List<ActivityManager.RunningAppProcessInfo> runningAppProcesses = ((ActivityManager) context.getSystemService("activity")).getRunningAppProcesses();
        if (runningAppProcesses != null) {

            for (ActivityManager.RunningAppProcessInfo runningAppProcessInfo : runningAppProcesses) {

                if (runningAppProcessInfo.pid == i) {

                    return runningAppProcessInfo.processName;
                }

            }

        }

        return null;
    }


    static function zzl(int i, int i2) {

        StackTraceElement[] stackTrace = Thread.currentThread().getStackTrace();
        StringBuffer stringBuffer = new StringBuffer();
        int i3 = i2 + i;
        while (i < i3) {

            stringBuffer.append(zza(stackTrace, i)).append(" ");
            i++;
        }

        return stringBuffer.toString();
    }

}

