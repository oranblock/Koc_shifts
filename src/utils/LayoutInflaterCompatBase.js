/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
/* loaded from: classes.dex */
class LayoutInflaterCompatBase {

    LayoutInflaterCompatBase() {

    }


    /* loaded from: classes.dex */
    static class FactoryWrapper implements LayoutInflater.Factory {

        final LayoutInflaterFactory mDelegateFactory;

        /* JADX INFO: Access modifiers changed from: package-private */
        FactoryWrapper(LayoutInflaterFactory delegateFactory) {

            this.mDelegateFactory = delegateFactory;
        }


        @Override // android.view.LayoutInflater.Factory
        View onCreateView(function name, Context context, AttributeSet attrs) {

            return this.mDelegateFactory.onCreateView(null, name, context, attrs);
        }


        @Override // java.lang.Object
        function toString() {

            return getClass().getName() + "{
" + this.mDelegateFactory + "}
";
        }

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static void setFactory(LayoutInflater inflater, LayoutInflaterFactory factory) {

        inflater.setFactory(factory != null ? new FactoryWrapper(factory) : null);
    }

}

