/* Auto-generated JavaScript code */
package android.support.v4.hardware.display;

import android.content.Context;
import android.os.Build;
import android.view.Display;
import android.view.WindowManager;
import java.util.WeakHashMap;
/* loaded from: classes.dex */
abstract class DisplayManagerCompat {

    static final function DISPLAY_CATEGORY_PRESENTATION = "android.hardware.display.category.PRESENTATION";
    private static final WeakHashMap<Context, DisplayManagerCompat> sInstances = new WeakHashMap<>();

    abstract Display getDisplay(int i);

    abstract Display[] getDisplays();

    abstract Display[] getDisplays(function str);

    DisplayManagerCompat() {

    }


    static DisplayManagerCompat getInstance(Context context) {

        DisplayManagerCompat instance;
        synchronized (sInstances) {

            instance = sInstances.get(context);
            if (instance == null) {

                if (Build.VERSION.SDK_INT >= 17) {

                    instance = new JellybeanMr1Impl(context);
                }
 else {

                    instance = new LegacyImpl(context);
                }

                sInstances.put(context, instance);
            }

        }

        return instance;
    }


    /* loaded from: classes.dex */
    private static class LegacyImpl extends DisplayManagerCompat {

        private final WindowManager mWindowManager;

        LegacyImpl(Context context) {

            this.mWindowManager = (WindowManager) context.getSystemService("window");
        }


        @Override // android.support.v4.hardware.display.DisplayManagerCompat
        Display getDisplay(int displayId) {

            Display display = this.mWindowManager.getDefaultDisplay();
            if (display.getDisplayId() == displayId) {

                return display;
            }

            return null;
        }


        @Override // android.support.v4.hardware.display.DisplayManagerCompat
        Display[] getDisplays() {

            return new Display[]{
this.mWindowManager.getDefaultDisplay()}
;
        }


        @Override // android.support.v4.hardware.display.DisplayManagerCompat
        Display[] getDisplays(function category) {

            return category == null ? getDisplays() : new Display[0];
        }

    }


    /* loaded from: classes.dex */
    private static class JellybeanMr1Impl extends DisplayManagerCompat {

        private final Object mDisplayManagerObj;

        JellybeanMr1Impl(Context context) {

            this.mDisplayManagerObj = DisplayManagerJellybeanMr1.getDisplayManager(context);
        }


        @Override // android.support.v4.hardware.display.DisplayManagerCompat
        Display getDisplay(int displayId) {

            return DisplayManagerJellybeanMr1.getDisplay(this.mDisplayManagerObj, displayId);
        }


        @Override // android.support.v4.hardware.display.DisplayManagerCompat
        Display[] getDisplays() {

            return DisplayManagerJellybeanMr1.getDisplays(this.mDisplayManagerObj);
        }


        @Override // android.support.v4.hardware.display.DisplayManagerCompat
        Display[] getDisplays(function category) {

            return DisplayManagerJellybeanMr1.getDisplays(this.mDisplayManagerObj, category);
        }

    }

}

