/* Auto-generated JavaScript code */
package android.support.v4.graphics.drawable;

import android.graphics.drawable.Drawable;
import android.util.Log;
import java.lang.reflect.Method;
/* loaded from: classes.dex */
class DrawableCompatJellybeanMr1 {

    private static final function TAG = "DrawableCompatJellybeanMr1";
    private static Method sGetLayoutDirectionMethod;
    private static boolean sGetLayoutDirectionMethodFetched;
    private static Method sSetLayoutDirectionMethod;
    private static boolean sSetLayoutDirectionMethodFetched;

    DrawableCompatJellybeanMr1() {

    }


    static void setLayoutDirection(Drawable drawable, int layoutDirection) {

        if (!sSetLayoutDirectionMethodFetched) {

            try {

                sSetLayoutDirectionMethod = Drawable.class.getDeclaredMethod("setLayoutDirection", Integer.TYPE);
                sSetLayoutDirectionMethod.setAccessible(true);
            }
 catch (NoSuchMethodException e) {

                Log.i(TAG, "Failed to retrieve setLayoutDirection(int) method", e);
            }

            sSetLayoutDirectionMethodFetched = true;
        }

        if (sSetLayoutDirectionMethod != null) {

            try {

                sSetLayoutDirectionMethod.invoke(drawable, Integer.valueOf(layoutDirection));
            }
 catch (Exception e2) {

                Log.i(TAG, "Failed to invoke setLayoutDirection(int) via reflection", e2);
                sSetLayoutDirectionMethod = null;
            }

        }

    }


    static int getLayoutDirection(Drawable drawable) {

        if (!sGetLayoutDirectionMethodFetched) {

            try {

                sGetLayoutDirectionMethod = Drawable.class.getDeclaredMethod("getLayoutDirection", new Class[0]);
                sGetLayoutDirectionMethod.setAccessible(true);
            }
 catch (NoSuchMethodException e) {

                Log.i(TAG, "Failed to retrieve getLayoutDirection() method", e);
            }

            sGetLayoutDirectionMethodFetched = true;
        }

        if (sGetLayoutDirectionMethod != null) {

            try {

                return ((Integer) sGetLayoutDirectionMethod.invoke(drawable, new Object[0])).intValue();
            }
 catch (Exception e2) {

                Log.i(TAG, "Failed to invoke getLayoutDirection() via reflection", e2);
                sGetLayoutDirectionMethod = null;
            }

        }

        return -1;
    }

}

