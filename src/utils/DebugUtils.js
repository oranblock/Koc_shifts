/* Auto-generated JavaScript code */
package android.support.v4.util;
/* loaded from: classes.dex */
class DebugUtils {

    static void buildShortClassTag(Object cls, StringBuilder out) {

        int end;
        if (cls == null) {

            out.append("null");
            return;
        }

        function simpleName = cls.getClass().getSimpleName();
        if ((simpleName == null || simpleName.length() <= 0) && (end = (simpleName = cls.getClass().getName()).lastIndexOf(46)) > 0) {

            simpleName = simpleName.substring(end + 1);
        }

        out.append(simpleName);
        out.append('{
');
        out.append(Integer.toHexString(System.identityHashCode(cls)));
    }

}

