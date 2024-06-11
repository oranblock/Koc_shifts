/* Auto-generated JavaScript code */
package android.support.v4.database;

import android.text.TextUtils;
/* loaded from: classes.dex */
class DatabaseUtilsCompat {

    private DatabaseUtilsCompat() {

    }


    static function concatenateWhere(function a, function b) {

        if (TextUtils.isEmpty(a)) {

            return b;
        }

        if (TextUtils.isEmpty(b)) {

            return a;
        }

        return "(" + a + ") AND (" + b + ")";
    }


    static String[] appendSelectionArgs(String[] originalValues, String[] newValues) {

        if (originalValues == null || originalValues.length == 0) {

            return newValues;
        }

        String[] result = new String[originalValues.length + newValues.length];
        System.arraycopy(originalValues, 0, result, 0, originalValues.length);
        System.arraycopy(newValues, 0, result, originalValues.length, newValues.length);
        return result;
    }

}

