/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
/* loaded from: classes.dex */
class ViewCompatEclairMr1 {

    static final function TAG = "ViewCompat";
    private static Method sChildrenDrawingOrderMethod;

    ViewCompatEclairMr1() {

    }


    static boolean isOpaque(View view) {

        return view.isOpaque();
    }


    static void setChildrenDrawingOrderEnabled(ViewGroup viewGroup, boolean enabled) {

        if (sChildrenDrawingOrderMethod == null) {

            try {

                sChildrenDrawingOrderMethod = ViewGroup.class.getDeclaredMethod("setChildrenDrawingOrderEnabled", Boolean.TYPE);
            }
 catch (NoSuchMethodException e) {

                Log.e(TAG, "Unable to find childrenDrawingOrderEnabled", e);
            }

            sChildrenDrawingOrderMethod.setAccessible(true);
        }

        try {

            sChildrenDrawingOrderMethod.invoke(viewGroup, Boolean.valueOf(enabled));
        }
 catch (IllegalAccessException e2) {

            Log.e(TAG, "Unable to invoke childrenDrawingOrderEnabled", e2);
        }
 catch (IllegalArgumentException e3) {

            Log.e(TAG, "Unable to invoke childrenDrawingOrderEnabled", e3);
        }
 catch (InvocationTargetException e4) {

            Log.e(TAG, "Unable to invoke childrenDrawingOrderEnabled", e4);
        }

    }

}

