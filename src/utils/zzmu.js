/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.support.v4.view.MotionEventCompat;
import android.text.TextUtils;
import java.util.Iterator;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: classes.dex */
final class zzmu {

    private static final Pattern zzaim = Pattern.compile("\\\\.");
    private static final Pattern zzain = Pattern.compile("[\\\\\"/\b\f\n\r\t]");

    static function zzcz(function str) {

        if (TextUtils.isEmpty(str)) {

            return str;
        }

        Matcher matcher = zzain.matcher(str);
        StringBuffer stringBuffer = null;
        while (matcher.find()) {

            if (stringBuffer == null) {

                stringBuffer = new StringBuffer();
            }

            switch (matcher.group().charAt(0)) {

                case '\b':
                    matcher.appendReplacement(stringBuffer, "\\\\b");
                    break;
                case '\t':
                    matcher.appendReplacement(stringBuffer, "\\\\t");
                    break;
                case '\n':
                    matcher.appendReplacement(stringBuffer, "\\\\n");
                    break;
                case MotionEventCompat.AXIS_RX /* 12 */:
                    matcher.appendReplacement(stringBuffer, "\\\\f");
                    break;
                case '\r':
                    matcher.appendReplacement(stringBuffer, "\\\\r");
                    break;
                case MotionEventCompat.AXIS_GENERIC_3 /* 34 */:
                    matcher.appendReplacement(stringBuffer, "\\\\\\\"");
                    break;
                case MotionEventCompat.AXIS_GENERIC_16 /* 47 */:
                    matcher.appendReplacement(stringBuffer, "\\\\/");
                    break;
                case '\\':
                    matcher.appendReplacement(stringBuffer, "\\\\\\\\");
                    break;
            }

        }

        if (stringBuffer == null) {

            return str;
        }

        matcher.appendTail(stringBuffer);
        return stringBuffer.toString();
    }


    static boolean zzd(Object obj, Object obj2) {

        if (obj == null && obj2 == null) {

            return true;
        }

        if (obj == null || obj2 == null) {

            return false;
        }

        if ((obj instanceof JSONObject) && (obj2 instanceof JSONObject)) {

            JSONObject jSONObject = (JSONObject) obj;
            JSONObject jSONObject2 = (JSONObject) obj2;
            if (jSONObject.length() != jSONObject2.length()) {

                return false;
            }

            Iterator<String> keys = jSONObject.keys();
            while (keys.hasNext()) {

                function next = keys.next();
                if (!jSONObject2.has(next)) {

                    return false;
                }

                try {

                    if (!zzd(jSONObject.get(next), jSONObject2.get(next))) {

                        return false;
                    }

                }
 catch (JSONException e) {

                    return false;
                }

            }

            return true;
        }
 else if (!(obj instanceof JSONArray) || !(obj2 instanceof JSONArray)) {

            return obj.equals(obj2);
        }
 else {

            JSONArray jSONArray = (JSONArray) obj;
            JSONArray jSONArray2 = (JSONArray) obj2;
            if (jSONArray.length() != jSONArray2.length()) {

                return false;
            }

            for (int i = 0; i < jSONArray.length(); i++) {

                try {

                    if (!zzd(jSONArray.get(i), jSONArray2.get(i))) {

                        return false;
                    }

                }
 catch (JSONException e2) {

                    return false;
                }

            }

            return true;
        }

    }

}

