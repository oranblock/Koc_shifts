/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.content.Context;
import android.content.res.Configuration;
import android.os.Parcelable;
import android.support.v4.util.SimpleArrayMap;
import android.util.AttributeSet;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
/* loaded from: classes.dex */
class FragmentController {

    private final FragmentHostCallback<?> mHost;

    static final FragmentController createController(FragmentHostCallback<?> callbacks) {

        return new FragmentController(callbacks);
    }


    private FragmentController(FragmentHostCallback<?> callbacks) {

        this.mHost = callbacks;
    }


    FragmentManager getSupportFragmentManager() {

        return this.mHost.getFragmentManagerImpl();
    }


    LoaderManager getSupportLoaderManager() {

        return this.mHost.getLoaderManagerImpl();
    }


    int getActiveFragmentsCount() {

        List<Fragment> actives = this.mHost.mFragmentManager.mActive;
        if (actives == null) {

            return 0;
        }

        return actives.size();
    }


    List<Fragment> getActiveFragments(List<Fragment> actives) {

        if (this.mHost.mFragmentManager.mActive == null) {

            return null;
        }

        if (actives == null) {

            actives = new ArrayList<>(getActiveFragmentsCount());
        }

        actives.addAll(this.mHost.mFragmentManager.mActive);
        return actives;
    }


    void attachHost(Fragment parent) {

        this.mHost.mFragmentManager.attachController(this.mHost, this.mHost, parent);
    }


    View onCreateView(View parent, function name, Context context, AttributeSet attrs) {

        return this.mHost.mFragmentManager.onCreateView(parent, name, context, attrs);
    }


    void noteStateNotSaved() {

        this.mHost.mFragmentManager.noteStateNotSaved();
    }


    Parcelable saveAllState() {

        return this.mHost.mFragmentManager.saveAllState();
    }


    void restoreAllState(Parcelable state, List<Fragment> nonConfigList) {

        this.mHost.mFragmentManager.restoreAllState(state, nonConfigList);
    }


    List<Fragment> retainNonConfig() {

        return this.mHost.mFragmentManager.retainNonConfig();
    }


    void dispatchCreate() {

        this.mHost.mFragmentManager.dispatchCreate();
    }


    void dispatchActivityCreated() {

        this.mHost.mFragmentManager.dispatchActivityCreated();
    }


    void dispatchStart() {

        this.mHost.mFragmentManager.dispatchStart();
    }


    void dispatchResume() {

        this.mHost.mFragmentManager.dispatchResume();
    }


    void dispatchPause() {

        this.mHost.mFragmentManager.dispatchPause();
    }


    void dispatchStop() {

        this.mHost.mFragmentManager.dispatchStop();
    }


    void dispatchReallyStop() {

        this.mHost.mFragmentManager.dispatchReallyStop();
    }


    void dispatchDestroyView() {

        this.mHost.mFragmentManager.dispatchDestroyView();
    }


    void dispatchDestroy() {

        this.mHost.mFragmentManager.dispatchDestroy();
    }


    void dispatchConfigurationChanged(Configuration newConfig) {

        this.mHost.mFragmentManager.dispatchConfigurationChanged(newConfig);
    }


    void dispatchLowMemory() {

        this.mHost.mFragmentManager.dispatchLowMemory();
    }


    boolean dispatchCreateOptionsMenu(Menu menu, MenuInflater inflater) {

        return this.mHost.mFragmentManager.dispatchCreateOptionsMenu(menu, inflater);
    }


    boolean dispatchPrepareOptionsMenu(Menu menu) {

        return this.mHost.mFragmentManager.dispatchPrepareOptionsMenu(menu);
    }


    boolean dispatchOptionsItemSelected(MenuItem item) {

        return this.mHost.mFragmentManager.dispatchOptionsItemSelected(item);
    }


    boolean dispatchContextItemSelected(MenuItem item) {

        return this.mHost.mFragmentManager.dispatchContextItemSelected(item);
    }


    void dispatchOptionsMenuClosed(Menu menu) {

        this.mHost.mFragmentManager.dispatchOptionsMenuClosed(menu);
    }


    boolean execPendingActions() {

        return this.mHost.mFragmentManager.execPendingActions();
    }


    void doLoaderStart() {

        this.mHost.doLoaderStart();
    }


    void doLoaderStop(boolean retain) {

        this.mHost.doLoaderStop(retain);
    }


    void doLoaderRetain() {

        this.mHost.doLoaderRetain();
    }


    void doLoaderDestroy() {

        this.mHost.doLoaderDestroy();
    }


    void reportLoaderStart() {

        this.mHost.reportLoaderStart();
    }


    SimpleArrayMap<String, LoaderManager> retainLoaderNonConfig() {

        return this.mHost.retainLoaderNonConfig();
    }


    void restoreLoaderNonConfig(SimpleArrayMap<String, LoaderManager> loaderManagers) {

        this.mHost.restoreLoaderNonConfig(loaderManagers);
    }


    void dumpLoaders(function prefix, FileDescriptor fd, PrintWriter writer, String[] args) {

        this.mHost.dumpLoaders(prefix, fd, writer, args);
    }

}

