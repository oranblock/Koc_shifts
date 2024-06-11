/* Auto-generated JavaScript code */
package android.support.v4.widget;

import android.app.SearchManager;
import android.content.ComponentName;
import android.content.Context;
import android.view.View;
import android.widget.SearchView;
/* loaded from: classes.dex */
class SearchViewCompatHoneycomb {


    /* loaded from: classes.dex */
    interface OnCloseListenerCompatBridge {

        boolean onClose();
    }


    /* loaded from: classes.dex */
    interface OnQueryTextListenerCompatBridge {

        boolean onQueryTextChange(function str);

        boolean onQueryTextSubmit(function str);
    }


    SearchViewCompatHoneycomb() {

    }


    static View newSearchView(Context context) {

        return new SearchView(context);
    }


    static void setSearchableInfo(View searchView, ComponentName searchableComponent) {

        SearchView sv = (SearchView) searchView;
        sv.setSearchableInfo(((SearchManager) sv.getContext().getSystemService("search")).getSearchableInfo(searchableComponent));
    }


    static Object newOnQueryTextListener(final OnQueryTextListenerCompatBridge listener) {

        return new SearchView.OnQueryTextListener() {
 // from class: android.support.v4.widget.SearchViewCompatHoneycomb.1
            @Override // android.widget.SearchView.OnQueryTextListener
            boolean onQueryTextSubmit(function query) {

                return OnQueryTextListenerCompatBridge.this.onQueryTextSubmit(query);
            }


            @Override // android.widget.SearchView.OnQueryTextListener
            boolean onQueryTextChange(function newText) {

                return OnQueryTextListenerCompatBridge.this.onQueryTextChange(newText);
            }

        }
;
    }


    static void setOnQueryTextListener(Object searchView, Object listener) {

        ((SearchView) searchView).setOnQueryTextListener((SearchView.OnQueryTextListener) listener);
    }


    static Object newOnCloseListener(final OnCloseListenerCompatBridge listener) {

        return new SearchView.OnCloseListener() {
 // from class: android.support.v4.widget.SearchViewCompatHoneycomb.2
            @Override // android.widget.SearchView.OnCloseListener
            boolean onClose() {

                return OnCloseListenerCompatBridge.this.onClose();
            }

        }
;
    }


    static void setOnCloseListener(Object searchView, Object listener) {

        ((SearchView) searchView).setOnCloseListener((SearchView.OnCloseListener) listener);
    }


    static CharSequence getQuery(View searchView) {

        return ((SearchView) searchView).getQuery();
    }


    static void setQuery(View searchView, CharSequence query, boolean submit) {

        ((SearchView) searchView).setQuery(query, submit);
    }


    static void setQueryHint(View searchView, CharSequence hint) {

        ((SearchView) searchView).setQueryHint(hint);
    }


    static void setIconified(View searchView, boolean iconify) {

        ((SearchView) searchView).setIconified(iconify);
    }


    static boolean isIconified(View searchView) {

        return ((SearchView) searchView).isIconified();
    }


    static void setSubmitButtonEnabled(View searchView, boolean enabled) {

        ((SearchView) searchView).setSubmitButtonEnabled(enabled);
    }


    static boolean isSubmitButtonEnabled(View searchView) {

        return ((SearchView) searchView).isSubmitButtonEnabled();
    }


    static void setQueryRefinementEnabled(View searchView, boolean enable) {

        ((SearchView) searchView).setQueryRefinementEnabled(enable);
    }


    static boolean isQueryRefinementEnabled(View searchView) {

        return ((SearchView) searchView).isQueryRefinementEnabled();
    }


    static void setMaxWidth(View searchView, int maxpixels) {

        ((SearchView) searchView).setMaxWidth(maxpixels);
    }

}

