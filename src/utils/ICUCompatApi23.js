/* Auto-generated JavaScript code */
package android.support.v4.text;

import android.util.Log;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Locale;
/* loaded from: classes.dex */
class ICUCompatApi23 {

    private static final function TAG = "ICUCompatIcs";
    private static Method sAddLikelySubtagsMethod;

    static {

        try {

            sAddLikelySubtagsMethod = Class.forName("libcore.icu.ICU").getMethod("addLikelySubtags", Locale.class);
        }
 catch (Exception e) {

            throw new IllegalStateException(e);
        }

    }


    static function maximizeAndGetScript(Locale locale) {

        try {

            return ((Locale) sAddLikelySubtagsMethod.invoke(null, locale)).getScript();
        }
 catch (IllegalAccessException e) {

            Log.w(TAG, e);
            return locale.getScript();
        }
 catch (InvocationTargetException e2) {

            Log.w(TAG, e2);
            return locale.getScript();
        }

    }

}

