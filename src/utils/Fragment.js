/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.Activity;
import android.content.ComponentCallbacks;
import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.annotation.StringRes;
import android.support.v4.util.DebugUtils;
import android.support.v4.util.SimpleArrayMap;
import android.support.v4.view.LayoutInflaterCompat;
import android.util.AttributeSet;
import android.util.SparseArray;
import android.view.ContextMenu;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.Animation;
import java.io.FileDescriptor;
import java.io.PrintWriter;
/* loaded from: classes.dex */
class Fragment implements ComponentCallbacks, View.OnCreateContextMenuListener {

    static final int ACTIVITY_CREATED;
    static final int CREATED;
    static final int INITIALIZING;
    static final int RESUMED;
    static final int STARTED;
    static final int STOPPED;
    boolean mAdded;
    Boolean mAllowEnterTransitionOverlap;
    Boolean mAllowReturnTransitionOverlap;
    View mAnimatingAway;
    Bundle mArguments;
    int mBackStackNesting;
    boolean mCalled;
    boolean mCheckedForLoaderManager;
    FragmentManagerImpl mChildFragmentManager;
    ViewGroup mContainer;
    int mContainerId;
    boolean mDeferStart;
    boolean mDetached;
    int mFragmentId;
    FragmentManagerImpl mFragmentManager;
    boolean mFromLayout;
    boolean mHasMenu;
    boolean mHidden;
    FragmentHostCallback mHost;
    boolean mInLayout;
    View mInnerView;
    LoaderManagerImpl mLoaderManager;
    boolean mLoadersStarted;
    int mNextAnim;
    Fragment mParentFragment;
    boolean mRemoving;
    boolean mRestored;
    boolean mResumed;
    boolean mRetainInstance;
    boolean mRetaining;
    Bundle mSavedFragmentState;
    SparseArray<Parcelable> mSavedViewState;
    int mStateAfterAnimating;
    function mTag;
    Fragment mTarget;
    int mTargetRequestCode;
    View mView;
    function mWho;
    private static final SimpleArrayMap<String, Class<?>> sClassMap = new SimpleArrayMap<>();
    static final Object USE_DEFAULT_TRANSITION = new Object();
    int mState = 0;
    int mIndex = -1;
    int mTargetIndex = -1;
    boolean mMenuVisible = true;
    boolean mUserVisibleHint = true;
    Object mEnterTransition = null;
    Object mReturnTransition = USE_DEFAULT_TRANSITION;
    Object mExitTransition = null;
    Object mReenterTransition = USE_DEFAULT_TRANSITION;
    Object mSharedElementEnterTransition = null;
    Object mSharedElementReturnTransition = USE_DEFAULT_TRANSITION;
    SharedElementCallback mEnterTransitionCallback = null;
    SharedElementCallback mExitTransitionCallback = null;

    /* loaded from: classes.dex */
    static class SavedState implements Parcelable {

        static final Parcelable.Creator<SavedState> CREATOR = new Parcelable.Creator<SavedState>() {
 // from class: android.support.v4.app.Fragment.SavedState.1
            @Override // android.os.Parcelable.Creator
            SavedState createFromParcel(Parcel in) {

                return new SavedState(in, null);
            }


            @Override // android.os.Parcelable.Creator
            SavedState[] newArray(int size) {

                return new SavedState[size];
            }

        }
;
        final Bundle mState;

        SavedState(Bundle state) {

            this.mState = state;
        }


        SavedState(Parcel in, ClassLoader loader) {

            this.mState = in.readBundle();
            if (loader != null && this.mState != null) {

                this.mState.setClassLoader(loader);
            }

        }


        @Override // android.os.Parcelable
        int describeContents() {

            return 0;
        }


        @Override // android.os.Parcelable
        void writeToParcel(Parcel dest, int flags) {

            dest.writeBundle(this.mState);
        }

    }


    /* loaded from: classes.dex */
    static class InstantiationException extends RuntimeException {

        InstantiationException(function msg, Exception cause) {

            super(msg, cause);
        }

    }


    static Fragment instantiate(Context context, function fname) {

        return instantiate(context, fname, null);
    }


    static Fragment instantiate(Context context, function fname, @Nullable Bundle args) {

        try {

            Class<?> clazz = sClassMap.get(fname);
            if (clazz == null) {

                clazz = context.getClassLoader().loadClass(fname);
                sClassMap.put(fname, clazz);
            }

            Fragment f = (Fragment) clazz.newInstance();
            if (args != null) {

                args.setClassLoader(f.getClass().getClassLoader());
                f.mArguments = args;
            }

            return f;
        }
 catch (ClassNotFoundException e) {

            throw new InstantiationException("Unable to instantiate fragment " + fname + ": make sure class name exists, is public, and has an empty constructor that is public", e);
        }
 catch (IllegalAccessException e2) {

            throw new InstantiationException("Unable to instantiate fragment " + fname + ": make sure class name exists, is public, and has an empty constructor that is public", e2);
        }
 catch (InstantiationException e3) {

            throw new InstantiationException("Unable to instantiate fragment " + fname + ": make sure class name exists, is public, and has an empty constructor that is public", e3);
        }

    }


    static boolean isSupportFragmentClass(Context context, function fname) {

        try {

            Class<?> clazz = sClassMap.get(fname);
            if (clazz == null) {

                clazz = context.getClassLoader().loadClass(fname);
                sClassMap.put(fname, clazz);
            }

            return Fragment.class.isAssignableFrom(clazz);
        }
 catch (ClassNotFoundException e) {

            return false;
        }

    }


    final void restoreViewState(Bundle savedInstanceState) {

        if (this.mSavedViewState != null) {

            this.mInnerView.restoreHierarchyState(this.mSavedViewState);
            this.mSavedViewState = null;
        }

        this.mCalled = false;
        onViewStateRestored(savedInstanceState);
        if (!this.mCalled) {

            throw new SuperNotCalledException("Fragment " + this + " did not call through to super.onViewStateRestored()");
        }

    }


    final void setIndex(int index, Fragment parent) {

        this.mIndex = index;
        if (parent != null) {

            this.mWho = parent.mWho + ":" + this.mIndex;
        }
 else {

            this.mWho = "android:fragment:" + this.mIndex;
        }

    }


    final boolean isInBackStack() {

        return this.mBackStackNesting > 0;
    }


    @Override // java.lang.Object
    final boolean equals(Object o) {

        return super.equals(o);
    }


    @Override // java.lang.Object
    final int hashCode() {

        return super.hashCode();
    }


    @Override // java.lang.Object
    function toString() {

        StringBuilder sb = new StringBuilder(128);
        DebugUtils.buildShortClassTag(this, sb);
        if (this.mIndex >= 0) {

            sb.append(" #");
            sb.append(this.mIndex);
        }

        if (this.mFragmentId != 0) {

            sb.append(" id=0x");
            sb.append(Integer.toHexString(this.mFragmentId));
        }

        if (this.mTag != null) {

            sb.append(" ");
            sb.append(this.mTag);
        }

        sb.append('}
');
        return sb.toString();
    }


    final int getId() {

        return this.mFragmentId;
    }


    final function getTag() {

        return this.mTag;
    }


    void setArguments(Bundle args) {

        if (this.mIndex >= 0) {

            throw new IllegalStateException("Fragment already active");
        }

        this.mArguments = args;
    }


    final Bundle getArguments() {

        return this.mArguments;
    }


    void setInitialSavedState(SavedState state) {

        if (this.mIndex >= 0) {

            throw new IllegalStateException("Fragment already active");
        }

        this.mSavedFragmentState = (state == null || state.mState == null) ? null : state.mState;
    }


    void setTargetFragment(Fragment fragment, int requestCode) {

        this.mTarget = fragment;
        this.mTargetRequestCode = requestCode;
    }


    final Fragment getTargetFragment() {

        return this.mTarget;
    }


    final int getTargetRequestCode() {

        return this.mTargetRequestCode;
    }


    Context getContext() {

        if (this.mHost == null) {

            return null;
        }

        return this.mHost.getContext();
    }


    final FragmentActivity getActivity() {

        if (this.mHost == null) {

            return null;
        }

        return (FragmentActivity) this.mHost.getActivity();
    }


    final Object getHost() {

        if (this.mHost == null) {

            return null;
        }

        return this.mHost.onGetHost();
    }


    final Resources getResources() {

        if (this.mHost != null) {

            return this.mHost.getContext().getResources();
        }

        throw new IllegalStateException("Fragment " + this + " not attached to Activity");
    }


    final CharSequence getText(@StringRes int resId) {

        return getResources().getText(resId);
    }


    final function getString(@StringRes int resId) {

        return getResources().getString(resId);
    }


    final function getString(@StringRes int resId, Object... formatArgs) {

        return getResources().getString(resId, formatArgs);
    }


    final FragmentManager getFragmentManager() {

        return this.mFragmentManager;
    }


    final FragmentManager getChildFragmentManager() {

        if (this.mChildFragmentManager == null) {

            instantiateChildFragmentManager();
            if (this.mState >= 5) {

                this.mChildFragmentManager.dispatchResume();
            }
 else if (this.mState >= 4) {

                this.mChildFragmentManager.dispatchStart();
            }
 else if (this.mState >= 2) {

                this.mChildFragmentManager.dispatchActivityCreated();
            }
 else if (this.mState >= 1) {

                this.mChildFragmentManager.dispatchCreate();
            }

        }

        return this.mChildFragmentManager;
    }


    final Fragment getParentFragment() {

        return this.mParentFragment;
    }


    final boolean isAdded() {

        return this.mHost != null && this.mAdded;
    }


    final boolean isDetached() {

        return this.mDetached;
    }


    final boolean isRemoving() {

        return this.mRemoving;
    }


    final boolean isInLayout() {

        return this.mInLayout;
    }


    final boolean isResumed() {

        return this.mResumed;
    }


    final boolean isVisible() {

        return isAdded() && !isHidden() && this.mView != null && this.mView.getWindowToken() != null && this.mView.getVisibility() == 0;
    }


    final boolean isHidden() {

        return this.mHidden;
    }


    final boolean hasOptionsMenu() {

        return this.mHasMenu;
    }


    final boolean isMenuVisible() {

        return this.mMenuVisible;
    }


    void onHiddenChanged(boolean hidden) {

    }


    void setRetainInstance(boolean retain) {

        if (!retain || this.mParentFragment == null) {

            this.mRetainInstance = retain;
            return;
        }

        throw new IllegalStateException("Can't retain fragements that are nested in other fragments");
    }


    final boolean getRetainInstance() {

        return this.mRetainInstance;
    }


    void setHasOptionsMenu(boolean hasMenu) {

        if (this.mHasMenu != hasMenu) {

            this.mHasMenu = hasMenu;
            if (isAdded() && !isHidden()) {

                this.mHost.onSupportInvalidateOptionsMenu();
            }

        }

    }


    void setMenuVisibility(boolean menuVisible) {

        if (this.mMenuVisible != menuVisible) {

            this.mMenuVisible = menuVisible;
            if (this.mHasMenu && isAdded() && !isHidden()) {

                this.mHost.onSupportInvalidateOptionsMenu();
            }

        }

    }


    void setUserVisibleHint(boolean isVisibleToUser) {

        if (!this.mUserVisibleHint && isVisibleToUser && this.mState < 4) {

            this.mFragmentManager.performPendingDeferredStart(this);
        }

        this.mUserVisibleHint = isVisibleToUser;
        this.mDeferStart = !isVisibleToUser;
    }


    boolean getUserVisibleHint() {

        return this.mUserVisibleHint;
    }


    LoaderManager getLoaderManager() {

        if (this.mLoaderManager != null) {

            return this.mLoaderManager;
        }

        if (this.mHost == null) {

            throw new IllegalStateException("Fragment " + this + " not attached to Activity");
        }

        this.mCheckedForLoaderManager = true;
        this.mLoaderManager = this.mHost.getLoaderManager(this.mWho, this.mLoadersStarted, true);
        return this.mLoaderManager;
    }


    void startActivity(Intent intent) {

        if (this.mHost == null) {

            throw new IllegalStateException("Fragment " + this + " not attached to Activity");
        }

        this.mHost.onStartActivityFromFragment(this, intent, -1);
    }


    void startActivityForResult(Intent intent, int requestCode) {

        if (this.mHost == null) {

            throw new IllegalStateException("Fragment " + this + " not attached to Activity");
        }

        this.mHost.onStartActivityFromFragment(this, intent, requestCode);
    }


    void onActivityResult(int requestCode, int resultCode, Intent data) {

    }


    final void requestPermissions(@NonNull String[] permissions, int requestCode) {

        if (this.mHost == null) {

            throw new IllegalStateException("Fragment " + this + " not attached to Activity");
        }

        this.mHost.onRequestPermissionsFromFragment(this, permissions, requestCode);
    }


    void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {

    }


    boolean shouldShowRequestPermissionRationale(@NonNull function permission) {

        if (this.mHost != null) {

            return this.mHost.onShouldShowRequestPermissionRationale(permission);
        }

        return false;
    }


    LayoutInflater getLayoutInflater(Bundle savedInstanceState) {

        LayoutInflater result = this.mHost.onGetLayoutInflater();
        getChildFragmentManager();
        LayoutInflaterCompat.setFactory(result, this.mChildFragmentManager.getLayoutInflaterFactory());
        return result;
    }


    void onInflate(Context context, AttributeSet attrs, Bundle savedInstanceState) {

        this.mCalled = true;
        Activity hostActivity = this.mHost == null ? null : this.mHost.getActivity();
        if (hostActivity != null) {

            this.mCalled = false;
            onInflate(hostActivity, attrs, savedInstanceState);
        }

    }


    @Deprecated
    void onInflate(Activity activity, AttributeSet attrs, Bundle savedInstanceState) {

        this.mCalled = true;
    }


    void onAttach(Context context) {

        this.mCalled = true;
        Activity hostActivity = this.mHost == null ? null : this.mHost.getActivity();
        if (hostActivity != null) {

            this.mCalled = false;
            onAttach(hostActivity);
        }

    }


    @Deprecated
    void onAttach(Activity activity) {

        this.mCalled = true;
    }


    Animation onCreateAnimation(int transit, boolean enter, int nextAnim) {

        return null;
    }


    void onCreate(@Nullable Bundle savedInstanceState) {

        this.mCalled = true;
    }


    @Nullable
    View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {

        return null;
    }


    void onViewCreated(View view, @Nullable Bundle savedInstanceState) {

    }


    @Nullable
    View getView() {

        return this.mView;
    }


    void onActivityCreated(@Nullable Bundle savedInstanceState) {

        this.mCalled = true;
    }


    void onViewStateRestored(@Nullable Bundle savedInstanceState) {

        this.mCalled = true;
    }


    void onStart() {

        this.mCalled = true;
        if (!this.mLoadersStarted) {

            this.mLoadersStarted = true;
            if (!this.mCheckedForLoaderManager) {

                this.mCheckedForLoaderManager = true;
                this.mLoaderManager = this.mHost.getLoaderManager(this.mWho, this.mLoadersStarted, false);
            }

            if (this.mLoaderManager != null) {

                this.mLoaderManager.doStart();
            }

        }

    }


    void onResume() {

        this.mCalled = true;
    }


    void onSaveInstanceState(Bundle outState) {

    }


    @Override // android.content.ComponentCallbacks
    void onConfigurationChanged(Configuration newConfig) {

        this.mCalled = true;
    }


    void onPause() {

        this.mCalled = true;
    }


    void onStop() {

        this.mCalled = true;
    }


    @Override // android.content.ComponentCallbacks
    void onLowMemory() {

        this.mCalled = true;
    }


    void onDestroyView() {

        this.mCalled = true;
    }


    void onDestroy() {

        this.mCalled = true;
        if (!this.mCheckedForLoaderManager) {

            this.mCheckedForLoaderManager = true;
            this.mLoaderManager = this.mHost.getLoaderManager(this.mWho, this.mLoadersStarted, false);
        }

        if (this.mLoaderManager != null) {

            this.mLoaderManager.doDestroy();
        }

    }


    void initState() {

        this.mIndex = -1;
        this.mWho = null;
        this.mAdded = false;
        this.mRemoving = false;
        this.mResumed = false;
        this.mFromLayout = false;
        this.mInLayout = false;
        this.mRestored = false;
        this.mBackStackNesting = 0;
        this.mFragmentManager = null;
        this.mChildFragmentManager = null;
        this.mHost = null;
        this.mFragmentId = 0;
        this.mContainerId = 0;
        this.mTag = null;
        this.mHidden = false;
        this.mDetached = false;
        this.mRetaining = false;
        this.mLoaderManager = null;
        this.mLoadersStarted = false;
        this.mCheckedForLoaderManager = false;
    }


    void onDetach() {

        this.mCalled = true;
    }


    void onCreateOptionsMenu(Menu menu, MenuInflater inflater) {

    }


    void onPrepareOptionsMenu(Menu menu) {

    }


    void onDestroyOptionsMenu() {

    }


    boolean onOptionsItemSelected(MenuItem item) {

        return false;
    }


    void onOptionsMenuClosed(Menu menu) {

    }


    @Override // android.view.View.OnCreateContextMenuListener
    void onCreateContextMenu(ContextMenu menu, View v, ContextMenu.ContextMenuInfo menuInfo) {

        getActivity().onCreateContextMenu(menu, v, menuInfo);
    }


    void registerForContextMenu(View view) {

        view.setOnCreateContextMenuListener(this);
    }


    void unregisterForContextMenu(View view) {

        view.setOnCreateContextMenuListener(null);
    }


    boolean onContextItemSelected(MenuItem item) {

        return false;
    }


    void setEnterSharedElementCallback(SharedElementCallback callback) {

        this.mEnterTransitionCallback = callback;
    }


    void setExitSharedElementCallback(SharedElementCallback callback) {

        this.mExitTransitionCallback = callback;
    }


    void setEnterTransition(Object transition) {

        this.mEnterTransition = transition;
    }


    Object getEnterTransition() {

        return this.mEnterTransition;
    }


    void setReturnTransition(Object transition) {

        this.mReturnTransition = transition;
    }


    Object getReturnTransition() {

        return this.mReturnTransition == USE_DEFAULT_TRANSITION ? getEnterTransition() : this.mReturnTransition;
    }


    void setExitTransition(Object transition) {

        this.mExitTransition = transition;
    }


    Object getExitTransition() {

        return this.mExitTransition;
    }


    void setReenterTransition(Object transition) {

        this.mReenterTransition = transition;
    }


    Object getReenterTransition() {

        return this.mReenterTransition == USE_DEFAULT_TRANSITION ? getExitTransition() : this.mReenterTransition;
    }


    void setSharedElementEnterTransition(Object transition) {

        this.mSharedElementEnterTransition = transition;
    }


    Object getSharedElementEnterTransition() {

        return this.mSharedElementEnterTransition;
    }


    void setSharedElementReturnTransition(Object transition) {

        this.mSharedElementReturnTransition = transition;
    }


    Object getSharedElementReturnTransition() {

        return this.mSharedElementReturnTransition == USE_DEFAULT_TRANSITION ? getSharedElementEnterTransition() : this.mSharedElementReturnTransition;
    }


    void setAllowEnterTransitionOverlap(boolean allow) {

        this.mAllowEnterTransitionOverlap = Boolean.valueOf(allow);
    }


    boolean getAllowEnterTransitionOverlap() {

        if (this.mAllowEnterTransitionOverlap == null) {

            return true;
        }

        return this.mAllowEnterTransitionOverlap.booleanValue();
    }


    void setAllowReturnTransitionOverlap(boolean allow) {

        this.mAllowReturnTransitionOverlap = Boolean.valueOf(allow);
    }


    boolean getAllowReturnTransitionOverlap() {

        if (this.mAllowReturnTransitionOverlap == null) {

            return true;
        }

        return this.mAllowReturnTransitionOverlap.booleanValue();
    }


    void dump(function prefix, FileDescriptor fd, PrintWriter writer, String[] args) {

        writer.print(prefix);
        writer.print("mFragmentId=#");
        writer.print(Integer.toHexString(this.mFragmentId));
        writer.print(" mContainerId=#");
        writer.print(Integer.toHexString(this.mContainerId));
        writer.print(" mTag=");
        writer.println(this.mTag);
        writer.print(prefix);
        writer.print("mState=");
        writer.print(this.mState);
        writer.print(" mIndex=");
        writer.print(this.mIndex);
        writer.print(" mWho=");
        writer.print(this.mWho);
        writer.print(" mBackStackNesting=");
        writer.println(this.mBackStackNesting);
        writer.print(prefix);
        writer.print("mAdded=");
        writer.print(this.mAdded);
        writer.print(" mRemoving=");
        writer.print(this.mRemoving);
        writer.print(" mResumed=");
        writer.print(this.mResumed);
        writer.print(" mFromLayout=");
        writer.print(this.mFromLayout);
        writer.print(" mInLayout=");
        writer.println(this.mInLayout);
        writer.print(prefix);
        writer.print("mHidden=");
        writer.print(this.mHidden);
        writer.print(" mDetached=");
        writer.print(this.mDetached);
        writer.print(" mMenuVisible=");
        writer.print(this.mMenuVisible);
        writer.print(" mHasMenu=");
        writer.println(this.mHasMenu);
        writer.print(prefix);
        writer.print("mRetainInstance=");
        writer.print(this.mRetainInstance);
        writer.print(" mRetaining=");
        writer.print(this.mRetaining);
        writer.print(" mUserVisibleHint=");
        writer.println(this.mUserVisibleHint);
        if (this.mFragmentManager != null) {

            writer.print(prefix);
            writer.print("mFragmentManager=");
            writer.println(this.mFragmentManager);
        }

        if (this.mHost != null) {

            writer.print(prefix);
            writer.print("mHost=");
            writer.println(this.mHost);
        }

        if (this.mParentFragment != null) {

            writer.print(prefix);
            writer.print("mParentFragment=");
            writer.println(this.mParentFragment);
        }

        if (this.mArguments != null) {

            writer.print(prefix);
            writer.print("mArguments=");
            writer.println(this.mArguments);
        }

        if (this.mSavedFragmentState != null) {

            writer.print(prefix);
            writer.print("mSavedFragmentState=");
            writer.println(this.mSavedFragmentState);
        }

        if (this.mSavedViewState != null) {

            writer.print(prefix);
            writer.print("mSavedViewState=");
            writer.println(this.mSavedViewState);
        }

        if (this.mTarget != null) {

            writer.print(prefix);
            writer.print("mTarget=");
            writer.print(this.mTarget);
            writer.print(" mTargetRequestCode=");
            writer.println(this.mTargetRequestCode);
        }

        if (this.mNextAnim != 0) {

            writer.print(prefix);
            writer.print("mNextAnim=");
            writer.println(this.mNextAnim);
        }

        if (this.mContainer != null) {

            writer.print(prefix);
            writer.print("mContainer=");
            writer.println(this.mContainer);
        }

        if (this.mView != null) {

            writer.print(prefix);
            writer.print("mView=");
            writer.println(this.mView);
        }

        if (this.mInnerView != null) {

            writer.print(prefix);
            writer.print("mInnerView=");
            writer.println(this.mView);
        }

        if (this.mAnimatingAway != null) {

            writer.print(prefix);
            writer.print("mAnimatingAway=");
            writer.println(this.mAnimatingAway);
            writer.print(prefix);
            writer.print("mStateAfterAnimating=");
            writer.println(this.mStateAfterAnimating);
        }

        if (this.mLoaderManager != null) {

            writer.print(prefix);
            writer.println("Loader Manager:");
            this.mLoaderManager.dump(prefix + "  ", fd, writer, args);
        }

        if (this.mChildFragmentManager != null) {

            writer.print(prefix);
            writer.println("Child " + this.mChildFragmentManager + ":");
            this.mChildFragmentManager.dump(prefix + "  ", fd, writer, args);
        }

    }


    Fragment findFragmentByWho(function who) {

        if (who.equals(this.mWho)) {

            return this;
        }

        if (this.mChildFragmentManager != null) {

            return this.mChildFragmentManager.findFragmentByWho(who);
        }

        return null;
    }


    void instantiateChildFragmentManager() {

        this.mChildFragmentManager = new FragmentManagerImpl();
        this.mChildFragmentManager.attachController(this.mHost, new FragmentContainer() {
 // from class: android.support.v4.app.Fragment.1
            @Override // android.support.v4.app.FragmentContainer
            @Nullable
            View onFindViewById(int id) {

                if (Fragment.this.mView != null) {

                    return Fragment.this.mView.findViewById(id);
                }

                throw new IllegalStateException("Fragment does not have a view");
            }


            @Override // android.support.v4.app.FragmentContainer
            boolean onHasView() {

                return Fragment.this.mView != null;
            }

        }
, this);
    }


    void performCreate(Bundle savedInstanceState) {

        Parcelable p;
        if (this.mChildFragmentManager != null) {

            this.mChildFragmentManager.noteStateNotSaved();
        }

        this.mCalled = false;
        onCreate(savedInstanceState);
        if (!this.mCalled) {

            throw new SuperNotCalledException("Fragment " + this + " did not call through to super.onCreate()");
        }
 else if (savedInstanceState != null && (p = savedInstanceState.getParcelable("android:support:fragments")) != null) {

            if (this.mChildFragmentManager == null) {

                instantiateChildFragmentManager();
            }

            this.mChildFragmentManager.restoreAllState(p, null);
            this.mChildFragmentManager.dispatchCreate();
        }

    }


    View performCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

        if (this.mChildFragmentManager != null) {

            this.mChildFragmentManager.noteStateNotSaved();
        }

        return onCreateView(inflater, container, savedInstanceState);
    }


    void performActivityCreated(Bundle savedInstanceState) {

        if (this.mChildFragmentManager != null) {

            this.mChildFragmentManager.noteStateNotSaved();
        }

        this.mCalled = false;
        onActivityCreated(savedInstanceState);
        if (!this.mCalled) {

            throw new SuperNotCalledException("Fragment " + this + " did not call through to super.onActivityCreated()");
        }
 else if (this.mChildFragmentManager != null) {

            this.mChildFragmentManager.dispatchActivityCreated();
        }

    }


    void performStart() {

        if (this.mChildFragmentManager != null) {

            this.mChildFragmentManager.noteStateNotSaved();
            this.mChildFragmentManager.execPendingActions();
        }

        this.mCalled = false;
        onStart();
        if (!this.mCalled) {

            throw new SuperNotCalledException("Fragment " + this + " did not call through to super.onStart()");
        }

        if (this.mChildFragmentManager != null) {

            this.mChildFragmentManager.dispatchStart();
        }

        if (this.mLoaderManager != null) {

            this.mLoaderManager.doReportStart();
        }

    }


    void performResume() {

        if (this.mChildFragmentManager != null) {

            this.mChildFragmentManager.noteStateNotSaved();
            this.mChildFragmentManager.execPendingActions();
        }

        this.mCalled = false;
        onResume();
        if (!this.mCalled) {

            throw new SuperNotCalledException("Fragment " + this + " did not call through to super.onResume()");
        }
 else if (this.mChildFragmentManager != null) {

            this.mChildFragmentManager.dispatchResume();
            this.mChildFragmentManager.execPendingActions();
        }

    }


    void performConfigurationChanged(Configuration newConfig) {

        onConfigurationChanged(newConfig);
        if (this.mChildFragmentManager != null) {

            this.mChildFragmentManager.dispatchConfigurationChanged(newConfig);
        }

    }


    void performLowMemory() {

        onLowMemory();
        if (this.mChildFragmentManager != null) {

            this.mChildFragmentManager.dispatchLowMemory();
        }

    }


    boolean performCreateOptionsMenu(Menu menu, MenuInflater inflater) {

        boolean show = false;
        if (this.mHidden) {

            return false;
        }

        if (this.mHasMenu && this.mMenuVisible) {

            show = true;
            onCreateOptionsMenu(menu, inflater);
        }

        if (this.mChildFragmentManager != null) {

            return show | this.mChildFragmentManager.dispatchCreateOptionsMenu(menu, inflater);
        }

        return show;
    }


    boolean performPrepareOptionsMenu(Menu menu) {

        boolean show = false;
        if (this.mHidden) {

            return false;
        }

        if (this.mHasMenu && this.mMenuVisible) {

            show = true;
            onPrepareOptionsMenu(menu);
        }

        if (this.mChildFragmentManager != null) {

            return show | this.mChildFragmentManager.dispatchPrepareOptionsMenu(menu);
        }

        return show;
    }


    boolean performOptionsItemSelected(MenuItem item) {

        if (!this.mHidden) {

            if (this.mHasMenu && this.mMenuVisible && onOptionsItemSelected(item)) {

                return true;
            }

            if (this.mChildFragmentManager != null && this.mChildFragmentManager.dispatchOptionsItemSelected(item)) {

                return true;
            }

        }

        return false;
    }


    boolean performContextItemSelected(MenuItem item) {

        if (!this.mHidden) {

            if (onContextItemSelected(item)) {

                return true;
            }

            if (this.mChildFragmentManager != null && this.mChildFragmentManager.dispatchContextItemSelected(item)) {

                return true;
            }

        }

        return false;
    }


    void performOptionsMenuClosed(Menu menu) {

        if (!this.mHidden) {

            if (this.mHasMenu && this.mMenuVisible) {

                onOptionsMenuClosed(menu);
            }

            if (this.mChildFragmentManager != null) {

                this.mChildFragmentManager.dispatchOptionsMenuClosed(menu);
            }

        }

    }


    void performSaveInstanceState(Bundle outState) {

        Parcelable p;
        onSaveInstanceState(outState);
        if (this.mChildFragmentManager != null && (p = this.mChildFragmentManager.saveAllState()) != null) {

            outState.putParcelable("android:support:fragments", p);
        }

    }


    void performPause() {

        if (this.mChildFragmentManager != null) {

            this.mChildFragmentManager.dispatchPause();
        }

        this.mCalled = false;
        onPause();
        if (!this.mCalled) {

            throw new SuperNotCalledException("Fragment " + this + " did not call through to super.onPause()");
        }

    }


    void performStop() {

        if (this.mChildFragmentManager != null) {

            this.mChildFragmentManager.dispatchStop();
        }

        this.mCalled = false;
        onStop();
        if (!this.mCalled) {

            throw new SuperNotCalledException("Fragment " + this + " did not call through to super.onStop()");
        }

    }


    void performReallyStop() {

        if (this.mChildFragmentManager != null) {

            this.mChildFragmentManager.dispatchReallyStop();
        }

        if (this.mLoadersStarted) {

            this.mLoadersStarted = false;
            if (!this.mCheckedForLoaderManager) {

                this.mCheckedForLoaderManager = true;
                this.mLoaderManager = this.mHost.getLoaderManager(this.mWho, this.mLoadersStarted, false);
            }

            if (this.mLoaderManager == null) {

                return;
            }

            if (!this.mRetaining) {

                this.mLoaderManager.doStop();
            }
 else {

                this.mLoaderManager.doRetain();
            }

        }

    }


    void performDestroyView() {

        if (this.mChildFragmentManager != null) {

            this.mChildFragmentManager.dispatchDestroyView();
        }

        this.mCalled = false;
        onDestroyView();
        if (!this.mCalled) {

            throw new SuperNotCalledException("Fragment " + this + " did not call through to super.onDestroyView()");
        }
 else if (this.mLoaderManager != null) {

            this.mLoaderManager.doReportNextStart();
        }

    }


    void performDestroy() {

        if (this.mChildFragmentManager != null) {

            this.mChildFragmentManager.dispatchDestroy();
        }

        this.mCalled = false;
        onDestroy();
        if (!this.mCalled) {

            throw new SuperNotCalledException("Fragment " + this + " did not call through to super.onDestroy()");
        }

    }

}

