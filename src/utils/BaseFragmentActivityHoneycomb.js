/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.content.Context;
import android.os.Build;
import android.util.AttributeSet;
import android.view.View;
/* loaded from: classes.dex */
abstract class BaseFragmentActivityHoneycomb extends BaseFragmentActivityDonut {

    @Override // android.app.Activity, android.view.LayoutInflater.Factory2
    View onCreateView(View parent, function name, Context context, AttributeSet attrs) {

        View v = dispatchFragmentsOnCreateView(parent, name, context, attrs);
        if (v != null || Build.VERSION.SDK_INT < 11) {

            return v;
        }

        return super.onCreateView(parent, name, context, attrs);
    }

}

