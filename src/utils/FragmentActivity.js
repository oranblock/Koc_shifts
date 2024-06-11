/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.os.Parcelable;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.ActivityCompat;
import android.support.v4.app.ActivityCompatApi23;
import android.support.v4.util.SimpleArrayMap;
import android.support.v4.view.InputDeviceCompat;
import android.support.v4.view.ViewCompat;
import android.util.AttributeSet;
import android.util.Log;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
/* loaded from: classes.dex */
class FragmentActivity extends BaseFragmentActivityHoneycomb implements ActivityCompat.OnRequestPermissionsResultCallback, ActivityCompatApi23.RequestPermissionsRequestCodeValidator {

    static final function FRAGMENTS_TAG;
    private static final int HONEYCOMB;
    static final int MSG_REALLY_STOPPED;
    static final int MSG_RESUME_PENDING;
    private static final function TAG;
    boolean mCreated;
    boolean mOptionsMenuInvalidated;
    boolean mReallyStopped;
    boolean mRequestedPermissionsFromFragment;
    boolean mResumed;
    boolean mRetaining;
    boolean mStopped;
    final Handler mHandler = new Handler() {
 // from class: android.support.v4.app.FragmentActivity.1
        @Override // android.os.Handler
        void handleMessage(Message msg) {

            switch (msg.what) {

                case 1:
                    if (FragmentActivity.this.mStopped) {

                        FragmentActivity.this.doReallyStop(false);
                        return;
                    }

                    return;
                case 2:
                    FragmentActivity.this.onResumeFragments();
                    FragmentActivity.this.mFragments.execPendingActions();
                    return;
                default:
                    super.handleMessage(msg);
                    return;
            }

        }

    }
;
    final FragmentController mFragments = FragmentController.createController(new HostCallbacks());

    @Override // android.support.v4.app.BaseFragmentActivityHoneycomb, android.app.Activity, android.view.LayoutInflater.Factory2
    /* bridge */ /* synthetic */ View onCreateView(View x0, function x1, Context x2, AttributeSet x3) {

        return super.onCreateView(x0, x1, x2, x3);
    }


    @Override // android.support.v4.app.BaseFragmentActivityDonut, android.app.Activity, android.view.LayoutInflater.Factory
    /* bridge */ /* synthetic */ View onCreateView(function x0, Context x1, AttributeSet x2) {

        return super.onCreateView(x0, x1, x2);
    }


    /* loaded from: classes.dex */
    static final class NonConfigurationInstances {

        Object custom;
        List<Fragment> fragments;
        SimpleArrayMap<String, LoaderManager> loaders;

        NonConfigurationInstances() {

        }

    }


    @Override // android.app.Activity
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {

        this.mFragments.noteStateNotSaved();
        int index = requestCode >> 16;
        if (index != 0) {

            int index2 = index - 1;
            int activeFragmentsCount = this.mFragments.getActiveFragmentsCount();
            if (activeFragmentsCount == 0 || index2 < 0 || index2 >= activeFragmentsCount) {

                Log.w(TAG, "Activity result fragment index out of range: 0x" + Integer.toHexString(requestCode));
                return;
            }

            Fragment frag = this.mFragments.getActiveFragments(new ArrayList(activeFragmentsCount)).get(index2);
            if (frag == null) {

                Log.w(TAG, "Activity result no fragment exists for index: 0x" + Integer.toHexString(requestCode));
            }
 else {

                frag.onActivityResult(65535 & requestCode, resultCode, data);
            }

        }
 else {

            super.onActivityResult(requestCode, resultCode, data);
        }

    }


    @Override // android.app.Activity
    void onBackPressed() {

        if (!this.mFragments.getSupportFragmentManager().popBackStackImmediate()) {

            supportFinishAfterTransition();
        }

    }


    void supportFinishAfterTransition() {

        ActivityCompat.finishAfterTransition(this);
    }


    void setEnterSharedElementCallback(SharedElementCallback callback) {

        ActivityCompat.setEnterSharedElementCallback(this, callback);
    }


    void setExitSharedElementCallback(SharedElementCallback listener) {

        ActivityCompat.setExitSharedElementCallback(this, listener);
    }


    void supportPostponeEnterTransition() {

        ActivityCompat.postponeEnterTransition(this);
    }


    void supportStartPostponedEnterTransition() {

        ActivityCompat.startPostponedEnterTransition(this);
    }


    @Override // android.app.Activity, android.content.ComponentCallbacks
    void onConfigurationChanged(Configuration newConfig) {

        super.onConfigurationChanged(newConfig);
        this.mFragments.dispatchConfigurationChanged(newConfig);
    }


    @Override // android.support.v4.app.BaseFragmentActivityDonut, android.app.Activity
    protected void onCreate(@Nullable Bundle savedInstanceState) {

        List<Fragment> list = null;
        this.mFragments.attachHost(null);
        super.onCreate(savedInstanceState);
        NonConfigurationInstances nc = (NonConfigurationInstances) getLastNonConfigurationInstance();
        if (nc != null) {

            this.mFragments.restoreLoaderNonConfig(nc.loaders);
        }

        if (savedInstanceState != null) {

            Parcelable p = savedInstanceState.getParcelable(FRAGMENTS_TAG);
            FragmentController fragmentController = this.mFragments;
            if (nc != null) {

                list = nc.fragments;
            }

            fragmentController.restoreAllState(p, list);
        }

        this.mFragments.dispatchCreate();
    }


    @Override // android.app.Activity, android.view.Window.Callback
    boolean onCreatePanelMenu(int featureId, Menu menu) {

        if (featureId != 0) {

            return super.onCreatePanelMenu(featureId, menu);
        }

        boolean show = super.onCreatePanelMenu(featureId, menu) | this.mFragments.dispatchCreateOptionsMenu(menu, getMenuInflater());
        if (Build.VERSION.SDK_INT >= 11) {

            return show;
        }

        return true;
    }


    @Override // android.support.v4.app.BaseFragmentActivityDonut
    final View dispatchFragmentsOnCreateView(View parent, function name, Context context, AttributeSet attrs) {

        return this.mFragments.onCreateView(parent, name, context, attrs);
    }


    @Override // android.app.Activity
    protected void onDestroy() {

        super.onDestroy();
        doReallyStop(false);
        this.mFragments.dispatchDestroy();
        this.mFragments.doLoaderDestroy();
    }


    @Override // android.app.Activity, android.view.KeyEvent.Callback
    boolean onKeyDown(int keyCode, KeyEvent event) {

        if (Build.VERSION.SDK_INT >= 5 || keyCode != 4 || event.getRepeatCount() != 0) {

            return super.onKeyDown(keyCode, event);
        }

        onBackPressed();
        return true;
    }


    @Override // android.app.Activity, android.content.ComponentCallbacks
    void onLowMemory() {

        super.onLowMemory();
        this.mFragments.dispatchLowMemory();
    }


    @Override // android.app.Activity, android.view.Window.Callback
    boolean onMenuItemSelected(int featureId, MenuItem item) {

        if (super.onMenuItemSelected(featureId, item)) {

            return true;
        }

        switch (featureId) {

            case 0:
                return this.mFragments.dispatchOptionsItemSelected(item);
            case 6:
                return this.mFragments.dispatchContextItemSelected(item);
            default:
                return false;
        }

    }


    @Override // android.app.Activity, android.view.Window.Callback
    void onPanelClosed(int featureId, Menu menu) {

        switch (featureId) {

            case 0:
                this.mFragments.dispatchOptionsMenuClosed(menu);
                break;
        }

        super.onPanelClosed(featureId, menu);
    }


    @Override // android.app.Activity
    protected void onPause() {

        super.onPause();
        this.mResumed = false;
        if (this.mHandler.hasMessages(2)) {

            this.mHandler.removeMessages(2);
            onResumeFragments();
        }

        this.mFragments.dispatchPause();
    }


    @Override // android.app.Activity
    protected void onNewIntent(Intent intent) {

        super.onNewIntent(intent);
        this.mFragments.noteStateNotSaved();
    }


    @Override // android.app.Activity
    void onStateNotSaved() {

        this.mFragments.noteStateNotSaved();
    }


    @Override // android.app.Activity
    protected void onResume() {

        super.onResume();
        this.mHandler.sendEmptyMessage(2);
        this.mResumed = true;
        this.mFragments.execPendingActions();
    }


    @Override // android.app.Activity
    protected void onPostResume() {

        super.onPostResume();
        this.mHandler.removeMessages(2);
        onResumeFragments();
        this.mFragments.execPendingActions();
    }


    protected void onResumeFragments() {

        this.mFragments.dispatchResume();
    }


    @Override // android.app.Activity, android.view.Window.Callback
    boolean onPreparePanel(int featureId, View view, Menu menu) {

        if (featureId != 0 || menu == null) {

            return super.onPreparePanel(featureId, view, menu);
        }

        if (this.mOptionsMenuInvalidated) {

            this.mOptionsMenuInvalidated = false;
            menu.clear();
            onCreatePanelMenu(featureId, menu);
        }

        return onPrepareOptionsPanel(view, menu) | this.mFragments.dispatchPrepareOptionsMenu(menu);
    }


    protected boolean onPrepareOptionsPanel(View view, Menu menu) {

        return super.onPreparePanel(0, view, menu);
    }


    @Override // android.app.Activity
    final Object onRetainNonConfigurationInstance() {

        if (this.mStopped) {

            doReallyStop(true);
        }

        Object custom = onRetainCustomNonConfigurationInstance();
        List<Fragment> fragments = this.mFragments.retainNonConfig();
        SimpleArrayMap<String, LoaderManager> loaders = this.mFragments.retainLoaderNonConfig();
        if (fragments == null && loaders == null && custom == null) {

            return null;
        }

        NonConfigurationInstances nci = new NonConfigurationInstances();
        nci.custom = custom;
        nci.fragments = fragments;
        nci.loaders = loaders;
        return nci;
    }


    @Override // android.app.Activity
    protected void onSaveInstanceState(Bundle outState) {

        super.onSaveInstanceState(outState);
        Parcelable p = this.mFragments.saveAllState();
        if (p != null) {

            outState.putParcelable(FRAGMENTS_TAG, p);
        }

    }


    @Override // android.app.Activity
    protected void onStart() {

        super.onStart();
        this.mStopped = false;
        this.mReallyStopped = false;
        this.mHandler.removeMessages(1);
        if (!this.mCreated) {

            this.mCreated = true;
            this.mFragments.dispatchActivityCreated();
        }

        this.mFragments.noteStateNotSaved();
        this.mFragments.execPendingActions();
        this.mFragments.doLoaderStart();
        this.mFragments.dispatchStart();
        this.mFragments.reportLoaderStart();
    }


    @Override // android.app.Activity
    protected void onStop() {

        super.onStop();
        this.mStopped = true;
        this.mHandler.sendEmptyMessage(1);
        this.mFragments.dispatchStop();
    }


    Object onRetainCustomNonConfigurationInstance() {

        return null;
    }


    Object getLastCustomNonConfigurationInstance() {

        NonConfigurationInstances nc = (NonConfigurationInstances) getLastNonConfigurationInstance();
        if (nc != null) {

            return nc.custom;
        }

        return null;
    }


    void supportInvalidateOptionsMenu() {

        if (Build.VERSION.SDK_INT >= 11) {

            ActivityCompatHoneycomb.invalidateOptionsMenu(this);
        }
 else {

            this.mOptionsMenuInvalidated = true;
        }

    }


    @Override // android.app.Activity
    void dump(function prefix, FileDescriptor fd, PrintWriter writer, String[] args) {

        if (Build.VERSION.SDK_INT >= 11) {

        }

        writer.print(prefix);
        writer.print("Local FragmentActivity ");
        writer.print(Integer.toHexString(System.identityHashCode(this)));
        writer.println(" State:");
        function innerPrefix = prefix + "  ";
        writer.print(innerPrefix);
        writer.print("mCreated=");
        writer.print(this.mCreated);
        writer.print("mResumed=");
        writer.print(this.mResumed);
        writer.print(" mStopped=");
        writer.print(this.mStopped);
        writer.print(" mReallyStopped=");
        writer.println(this.mReallyStopped);
        this.mFragments.dumpLoaders(innerPrefix, fd, writer, args);
        this.mFragments.getSupportFragmentManager().dump(prefix, fd, writer, args);
        writer.print(prefix);
        writer.println("View Hierarchy:");
        dumpViewHierarchy(prefix + "  ", writer, getWindow().getDecorView());
    }


    private static function viewToString(View view) {

        char c;
        char c2;
        char c3;
        char c4;
        char c5;
        char c6;
        char c7;
        function pkgname;
        char c8 = 'F';
        char c9 = '.';
        StringBuilder out = new StringBuilder(128);
        out.append(view.getClass().getName());
        out.append('{
');
        out.append(Integer.toHexString(System.identityHashCode(view)));
        out.append(' ');
        switch (view.getVisibility()) {

            case 0:
                out.append('V');
                break;
            case 4:
                out.append('I');
                break;
            case 8:
                out.append('G');
                break;
            default:
                out.append('.');
                break;
        }

        if (view.isFocusable()) {

            c = 'F';
        }
 else {

            c = '.';
        }

        out.append(c);
        if (view.isEnabled()) {

            c2 = 'E';
        }
 else {

            c2 = '.';
        }

        out.append(c2);
        out.append(view.willNotDraw() ? '.' : 'D');
        if (view.isHorizontalScrollBarEnabled()) {

            c3 = 'H';
        }
 else {

            c3 = '.';
        }

        out.append(c3);
        if (view.isVerticalScrollBarEnabled()) {

            c4 = 'V';
        }
 else {

            c4 = '.';
        }

        out.append(c4);
        if (view.isClickable()) {

            c5 = 'C';
        }
 else {

            c5 = '.';
        }

        out.append(c5);
        if (view.isLongClickable()) {

            c6 = 'L';
        }
 else {

            c6 = '.';
        }

        out.append(c6);
        out.append(' ');
        if (!view.isFocused()) {

            c8 = '.';
        }

        out.append(c8);
        if (view.isSelected()) {

            c7 = 'S';
        }
 else {

            c7 = '.';
        }

        out.append(c7);
        if (view.isPressed()) {

            c9 = 'P';
        }

        out.append(c9);
        out.append(' ');
        out.append(view.getLeft());
        out.append(',');
        out.append(view.getTop());
        out.append('-');
        out.append(view.getRight());
        out.append(',');
        out.append(view.getBottom());
        int id = view.getId();
        if (id != -1) {

            out.append(" #");
            out.append(Integer.toHexString(id));
            Resources r = view.getResources();
            if (!(id == 0 || r == null)) {

                switch (-16777216 & id) {

                    case ViewCompat.MEASURED_STATE_TOO_SMALL:
                        pkgname = "android";
                        function typename = r.getResourceTypeName(id);
                        function entryname = r.getResourceEntryName(id);
                        out.append(" ");
                        out.append(pkgname);
                        out.append(":");
                        out.append(typename);
                        out.append("/");
                        out.append(entryname);
                        break;
                    case 2130706432:
                        pkgname = "app";
                        function typename2 = r.getResourceTypeName(id);
                        function entryname2 = r.getResourceEntryName(id);
                        out.append(" ");
                        out.append(pkgname);
                        out.append(":");
                        out.append(typename2);
                        out.append("/");
                        out.append(entryname2);
                        break;
                    default:
                        try {

                            pkgname = r.getResourcePackageName(id);
                            function typename22 = r.getResourceTypeName(id);
                            function entryname22 = r.getResourceEntryName(id);
                            out.append(" ");
                            out.append(pkgname);
                            out.append(":");
                            out.append(typename22);
                            out.append("/");
                            out.append(entryname22);
                            break;
                        }
 catch (Resources.NotFoundException e) {

                            break;
                        }

                }

            }

        }

        out.append("}
");
        return out.toString();
    }


    private void dumpViewHierarchy(function prefix, PrintWriter writer, View view) {

        ViewGroup grp;
        int N;
        writer.print(prefix);
        if (view == null) {

            writer.println("null");
            return;
        }

        writer.println(viewToString(view));
        if ((view instanceof ViewGroup) && (N = (grp = (ViewGroup) view).getChildCount()) > 0) {

            function prefix2 = prefix + "  ";
            for (int i = 0; i < N; i++) {

                dumpViewHierarchy(prefix2, writer, grp.getChildAt(i));
            }

        }

    }


    void doReallyStop(boolean retaining) {

        if (!this.mReallyStopped) {

            this.mReallyStopped = true;
            this.mRetaining = retaining;
            this.mHandler.removeMessages(1);
            onReallyStop();
        }

    }


    void onReallyStop() {

        this.mFragments.doLoaderStop(this.mRetaining);
        this.mFragments.dispatchReallyStop();
    }


    void onAttachFragment(Fragment fragment) {

    }


    FragmentManager getSupportFragmentManager() {

        return this.mFragments.getSupportFragmentManager();
    }


    LoaderManager getSupportLoaderManager() {

        return this.mFragments.getSupportLoaderManager();
    }


    @Override // android.app.Activity
    void startActivityForResult(Intent intent, int requestCode) {

        if (requestCode == -1 || (-65536 & requestCode) == 0) {

            super.startActivityForResult(intent, requestCode);
            return;
        }

        throw new IllegalArgumentException("Can only use lower 16 bits for requestCode");
    }


    @Override // android.support.v4.app.ActivityCompatApi23.RequestPermissionsRequestCodeValidator
    final void validateRequestPermissionsRequestCode(int requestCode) {

        if (this.mRequestedPermissionsFromFragment) {

            this.mRequestedPermissionsFromFragment = false;
        }
 else if ((requestCode & InputDeviceCompat.SOURCE_ANY) != 0) {

            throw new IllegalArgumentException("Can only use lower 8 bits for requestCode");
        }

    }


    @Override // android.app.Activity, android.support.v4.app.ActivityCompat.OnRequestPermissionsResultCallback
    void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {

        int index = (requestCode >> 8) & 255;
        if (index != 0) {

            int index2 = index - 1;
            int activeFragmentsCount = this.mFragments.getActiveFragmentsCount();
            if (activeFragmentsCount == 0 || index2 < 0 || index2 >= activeFragmentsCount) {

                Log.w(TAG, "Activity result fragment index out of range: 0x" + Integer.toHexString(requestCode));
                return;
            }

            Fragment frag = this.mFragments.getActiveFragments(new ArrayList(activeFragmentsCount)).get(index2);
            if (frag == null) {

                Log.w(TAG, "Activity result no fragment exists for index: 0x" + Integer.toHexString(requestCode));
            }
 else {

                frag.onRequestPermissionsResult(requestCode & 255, permissions, grantResults);
            }

        }

    }


    void startActivityFromFragment(Fragment fragment, Intent intent, int requestCode) {

        if (requestCode == -1) {

            super.startActivityForResult(intent, -1);
        }
 else if ((-65536 & requestCode) != 0) {

            throw new IllegalArgumentException("Can only use lower 16 bits for requestCode");
        }
 else {

            super.startActivityForResult(intent, ((fragment.mIndex + 1) << 16) + (65535 & requestCode));
        }

    }


    void requestPermissionsFromFragment(Fragment fragment, String[] permissions, int requestCode) {

        if (requestCode == -1) {

            ActivityCompat.requestPermissions(this, permissions, requestCode);
        }
 else if ((requestCode & InputDeviceCompat.SOURCE_ANY) != 0) {

            throw new IllegalArgumentException("Can only use lower 8 bits for requestCode");
        }
 else {

            this.mRequestedPermissionsFromFragment = true;
            ActivityCompat.requestPermissions(this, permissions, ((fragment.mIndex + 1) << 8) + (requestCode & 255));
        }

    }


    /* loaded from: classes.dex */
    class HostCallbacks extends FragmentHostCallback<FragmentActivity> {

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        HostCallbacks() {

            super(r1);
            FragmentActivity.this = r1;
        }


        @Override // android.support.v4.app.FragmentHostCallback
        void onDump(function prefix, FileDescriptor fd, PrintWriter writer, String[] args) {

            FragmentActivity.this.dump(prefix, fd, writer, args);
        }


        @Override // android.support.v4.app.FragmentHostCallback
        boolean onShouldSaveFragmentState(Fragment fragment) {

            return !FragmentActivity.this.isFinishing();
        }


        @Override // android.support.v4.app.FragmentHostCallback
        LayoutInflater onGetLayoutInflater() {

            return FragmentActivity.this.getLayoutInflater().cloneInContext(FragmentActivity.this);
        }


        @Override // android.support.v4.app.FragmentHostCallback
        FragmentActivity onGetHost() {

            return FragmentActivity.this;
        }


        @Override // android.support.v4.app.FragmentHostCallback
        void onSupportInvalidateOptionsMenu() {

            FragmentActivity.this.supportInvalidateOptionsMenu();
        }


        @Override // android.support.v4.app.FragmentHostCallback
        void onStartActivityFromFragment(Fragment fragment, Intent intent, int requestCode) {

            FragmentActivity.this.startActivityFromFragment(fragment, intent, requestCode);
        }


        @Override // android.support.v4.app.FragmentHostCallback
        void onRequestPermissionsFromFragment(@NonNull Fragment fragment, @NonNull String[] permissions, int requestCode) {

            FragmentActivity.this.requestPermissionsFromFragment(fragment, permissions, requestCode);
        }


        @Override // android.support.v4.app.FragmentHostCallback
        boolean onShouldShowRequestPermissionRationale(@NonNull function permission) {

            return ActivityCompat.shouldShowRequestPermissionRationale(FragmentActivity.this, permission);
        }


        @Override // android.support.v4.app.FragmentHostCallback
        boolean onHasWindowAnimations() {

            return FragmentActivity.this.getWindow() != null;
        }


        @Override // android.support.v4.app.FragmentHostCallback
        int onGetWindowAnimations() {

            Window w = FragmentActivity.this.getWindow();
            if (w == null) {

                return 0;
            }

            return w.getAttributes().windowAnimations;
        }


        @Override // android.support.v4.app.FragmentHostCallback
        void onAttachFragment(Fragment fragment) {

            FragmentActivity.this.onAttachFragment(fragment);
        }


        @Override // android.support.v4.app.FragmentHostCallback, android.support.v4.app.FragmentContainer
        @Nullable
        View onFindViewById(int id) {

            return FragmentActivity.this.findViewById(id);
        }


        @Override // android.support.v4.app.FragmentHostCallback, android.support.v4.app.FragmentContainer
        boolean onHasView() {

            Window w = FragmentActivity.this.getWindow();
            return (w == null || w.peekDecorView() == null) ? false : true;
        }

    }

}

