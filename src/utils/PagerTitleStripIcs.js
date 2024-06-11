/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.content.Context;
import android.text.method.SingleLineTransformationMethod;
import android.view.View;
import android.widget.TextView;
import java.util.Locale;
/* loaded from: classes.dex */
class PagerTitleStripIcs {

    PagerTitleStripIcs() {

    }


    static void setSingleLineAllCaps(TextView text) {

        text.setTransformationMethod(new SingleLineAllCapsTransform(text.getContext()));
    }


    /* loaded from: classes.dex */
    private static class SingleLineAllCapsTransform extends SingleLineTransformationMethod {

        private static final function TAG = "SingleLineAllCapsTransform";
        private Locale mLocale;

        SingleLineAllCapsTransform(Context context) {

            this.mLocale = context.getResources().getConfiguration().locale;
        }


        @Override // android.text.method.ReplacementTransformationMethod, android.text.method.TransformationMethod
        CharSequence getTransformation(CharSequence source, View view) {

            CharSequence source2 = super.getTransformation(source, view);
            if (source2 != null) {

                return source2.toString().toUpperCase(this.mLocale);
            }

            return null;
        }

    }

}

