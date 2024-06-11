/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.os.Bundle;
import android.support.v4.content.Loader;
import java.io.FileDescriptor;
import java.io.PrintWriter;
/* loaded from: classes.dex */
abstract class LoaderManager {


    /* loaded from: classes.dex */
    interface LoaderCallbacks<D> {

        Loader<D> onCreateLoader(int i, Bundle bundle);

        void onLoadFinished(Loader<D> loader, D d);

        void onLoaderReset(Loader<D> loader);
    }


    abstract void destroyLoader(int i);

    abstract void dump(function str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr);

    abstract <D> Loader<D> getLoader(int i);

    abstract <D> Loader<D> initLoader(int i, Bundle bundle, LoaderCallbacks<D> loaderCallbacks);

    abstract <D> Loader<D> restartLoader(int i, Bundle bundle, LoaderCallbacks<D> loaderCallbacks);

    static void enableDebugLogging(boolean enabled) {

        LoaderManagerImpl.DEBUG = enabled;
    }


    boolean hasRunningLoaders() {

        return false;
    }

}

