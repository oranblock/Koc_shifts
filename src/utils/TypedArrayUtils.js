/* Auto-generated JavaScript code */
package android.support.v4.content.res;

import android.content.res.TypedArray;
import android.graphics.drawable.Drawable;
import android.support.annotation.AnyRes;
import android.support.annotation.StyleableRes;
/* loaded from: classes.dex */
class TypedArrayUtils {

    static boolean getBoolean(TypedArray a, @StyleableRes int index, @StyleableRes int fallbackIndex, boolean defaultValue) {

        return a.getBoolean(index, a.getBoolean(fallbackIndex, defaultValue));
    }


    static Drawable getDrawable(TypedArray a, @StyleableRes int index, @StyleableRes int fallbackIndex) {

        Drawable val = a.getDrawable(index);
        if (val == null) {

            return a.getDrawable(fallbackIndex);
        }

        return val;
    }


    static int getInt(TypedArray a, @StyleableRes int index, @StyleableRes int fallbackIndex, int defaultValue) {

        return a.getInt(index, a.getInt(fallbackIndex, defaultValue));
    }


    @AnyRes
    static int getResourceId(TypedArray a, @StyleableRes int index, @StyleableRes int fallbackIndex, @AnyRes int defaultValue) {

        return a.getResourceId(index, a.getResourceId(fallbackIndex, defaultValue));
    }


    static function getString(TypedArray a, @StyleableRes int index, @StyleableRes int fallbackIndex) {

        function val = a.getString(index);
        if (val == null) {

            return a.getString(fallbackIndex);
        }

        return val;
    }


    static CharSequence[] getTextArray(TypedArray a, @StyleableRes int index, @StyleableRes int fallbackIndex) {

        CharSequence[] val = a.getTextArray(index);
        if (val == null) {

            return a.getTextArray(fallbackIndex);
        }

        return val;
    }

}

