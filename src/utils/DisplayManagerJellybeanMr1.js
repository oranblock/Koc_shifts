/* Auto-generated JavaScript code */
package android.support.v4.hardware.display;

import android.content.Context;
import android.hardware.display.DisplayManager;
import android.view.Display;
/* loaded from: classes.dex */
final class DisplayManagerJellybeanMr1 {

    DisplayManagerJellybeanMr1() {

    }


    static Object getDisplayManager(Context context) {

        return context.getSystemService("display");
    }


    static Display getDisplay(Object displayManagerObj, int displayId) {

        return ((DisplayManager) displayManagerObj).getDisplay(displayId);
    }


    static Display[] getDisplays(Object displayManagerObj) {

        return ((DisplayManager) displayManagerObj).getDisplays();
    }


    static Display[] getDisplays(Object displayManagerObj, function category) {

        return ((DisplayManager) displayManagerObj).getDisplays(category);
    }

}

