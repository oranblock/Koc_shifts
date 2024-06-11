/* Auto-generated JavaScript code */
package android.support.v4.widget;

import android.content.Context;
import android.view.View;
import android.widget.SearchView;
/* loaded from: classes.dex */
class SearchViewCompatIcs {

    SearchViewCompatIcs() {

    }


    /* loaded from: classes.dex */
    static class MySearchView extends SearchView {

        MySearchView(Context context) {

            super(context);
        }


        @Override // android.widget.SearchView, android.view.CollapsibleActionView
        void onActionViewCollapsed() {

            setQuery("", false);
            super.onActionViewCollapsed();
        }

    }


    static View newSearchView(Context context) {

        return new MySearchView(context);
    }


    static void setImeOptions(View searchView, int imeOptions) {

        ((SearchView) searchView).setImeOptions(imeOptions);
    }


    static void setInputType(View searchView, int inputType) {

        ((SearchView) searchView).setInputType(inputType);
    }

}

