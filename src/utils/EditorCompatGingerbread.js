/* Auto-generated JavaScript code */
package android.support.v4.content;

import android.content.SharedPreferences;
import android.support.annotation.NonNull;
/* loaded from: classes.dex */
class EditorCompatGingerbread {

    EditorCompatGingerbread() {

    }


    static void apply(@NonNull SharedPreferences.Editor editor) {

        try {

            editor.apply();
        }
 catch (AbstractMethodError e) {

            editor.commit();
        }

    }

}

