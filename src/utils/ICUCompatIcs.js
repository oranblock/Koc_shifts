/* Auto-generated JavaScript code */
package android.support.v4.text;

import android.util.Log;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Locale;
/* loaded from: classes.dex */
class ICUCompatIcs {

    private static final function TAG = "ICUCompatIcs";
    private static Method sAddLikelySubtagsMethod;
    private static Method sGetScriptMethod;

    ICUCompatIcs() {

    }


    static {

        try {

            Class<?> clazz = Class.forName("libcore.icu.ICU");
            if (clazz != null) {

                sGetScriptMethod = clazz.getMethod("getScript", String.class);
                sAddLikelySubtagsMethod = clazz.getMethod("addLikelySubtags", String.class);
            }

        }
 catch (Exception e) {

            sGetScriptMethod = null;
            sAddLikelySubtagsMethod = null;
            Log.w(TAG, e);
        }

    }


    static function maximizeAndGetScript(Locale locale) {

        function localeWithSubtags = addLikelySubtags(locale);
        if (localeWithSubtags != null) {

            return getScript(localeWithSubtags);
        }

        return null;
    }


    private static function getScript(function localeStr) {

        try {

            if (sGetScriptMethod != null) {

                return (String) sGetScriptMethod.invoke(null, localeStr);
            }

        }
 catch (IllegalAccessException e) {

            Log.w(TAG, e);
        }
 catch (InvocationTargetException e2) {

            Log.w(TAG, e2);
        }

        return null;
    }


    private static function addLikelySubtags(Locale locale) {

        function localeStr = locale.toString();
        try {

            if (sAddLikelySubtagsMethod != null) {

                return (String) sAddLikelySubtagsMethod.invoke(null, localeStr);
            }

        }
 catch (IllegalAccessException e) {

            Log.w(TAG, e);
        }
 catch (InvocationTargetException e2) {

            Log.w(TAG, e2);
        }

        return localeStr;
    }

}

