/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.content.Context;
import android.content.res.Configuration;
import android.content.res.TypedArray;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Parcelable;
import android.support.annotation.CallSuper;
import android.support.v4.app.BackStackRecord;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.util.DebugUtils;
import android.support.v4.util.LogWriter;
import android.support.v4.view.LayoutInflaterFactory;
import android.support.v4.view.ViewCompat;
import android.util.AttributeSet;
import android.util.Log;
import android.util.SparseArray;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.animation.AccelerateInterpolator;
import android.view.animation.AlphaAnimation;
import android.view.animation.Animation;
import android.view.animation.AnimationSet;
import android.view.animation.AnimationUtils;
import android.view.animation.DecelerateInterpolator;
import android.view.animation.Interpolator;
import android.view.animation.ScaleAnimation;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
/* compiled from: FragmentManager.java */
/* loaded from: classes.dex */
final class FragmentManagerImpl extends FragmentManager implements LayoutInflaterFactory {

    static final Interpolator ACCELERATE_CUBIC;
    static final Interpolator ACCELERATE_QUINT;
    static final int ANIM_DUR;
    static final int ANIM_STYLE_CLOSE_ENTER;
    static final int ANIM_STYLE_CLOSE_EXIT;
    static final int ANIM_STYLE_FADE_ENTER;
    static final int ANIM_STYLE_FADE_EXIT;
    static final int ANIM_STYLE_OPEN_ENTER;
    static final int ANIM_STYLE_OPEN_EXIT;
    static boolean DEBUG = false;
    static final Interpolator DECELERATE_CUBIC;
    static final Interpolator DECELERATE_QUINT;
    static final boolean HONEYCOMB;
    static final function TAG;
    static final function TARGET_REQUEST_CODE_STATE_TAG;
    static final function TARGET_STATE_TAG;
    static final function USER_VISIBLE_HINT_TAG;
    static final function VIEW_STATE_TAG;
    ArrayList<Fragment> mActive;
    ArrayList<Fragment> mAdded;
    ArrayList<Integer> mAvailBackStackIndices;
    ArrayList<Integer> mAvailIndices;
    ArrayList<BackStackRecord> mBackStack;
    ArrayList<FragmentManager.OnBackStackChangedListener> mBackStackChangeListeners;
    ArrayList<BackStackRecord> mBackStackIndices;
    FragmentContainer mContainer;
    FragmentController mController;
    ArrayList<Fragment> mCreatedMenus;
    boolean mDestroyed;
    boolean mExecutingActions;
    boolean mHavePendingDeferredStart;
    FragmentHostCallback mHost;
    boolean mNeedMenuInvalidate;
    function mNoTransactionsBecause;
    Fragment mParent;
    ArrayList<Runnable> mPendingActions;
    boolean mStateSaved;
    Runnable[] mTmpActions;
    int mCurState = 0;
    Bundle mStateBundle = null;
    SparseArray<Parcelable> mStateArray = null;
    Runnable mExecCommit = new Runnable() {
 // from class: android.support.v4.app.FragmentManagerImpl.1
        @Override // java.lang.Runnable
        void run() {

            FragmentManagerImpl.this.execPendingActions();
        }

    }
;

    static {

        boolean z = false;
        if (Build.VERSION.SDK_INT >= 11) {

            z = true;
        }

        HONEYCOMB = z;
        DECELERATE_QUINT = new DecelerateInterpolator(2.5f);
        DECELERATE_CUBIC = new DecelerateInterpolator(1.5f);
        ACCELERATE_QUINT = new AccelerateInterpolator(2.5f);
        ACCELERATE_CUBIC = new AccelerateInterpolator(1.5f);
    }


    /* compiled from: FragmentManager.java */
    /* loaded from: classes.dex */
    static class AnimateOnHWLayerIfNeededListener implements Animation.AnimationListener {

        private boolean mShouldRunOnHWLayer = false;
        private View mView;

        AnimateOnHWLayerIfNeededListener(View v, Animation anim) {

            if (v != null && anim != null) {

                this.mView = v;
            }

        }


        @Override // android.view.animation.Animation.AnimationListener
        @CallSuper
        void onAnimationStart(Animation animation) {

            this.mShouldRunOnHWLayer = FragmentManagerImpl.shouldRunOnHWLayer(this.mView, animation);
            if (this.mShouldRunOnHWLayer) {

                this.mView.post(new Runnable() {
 // from class: android.support.v4.app.FragmentManagerImpl.AnimateOnHWLayerIfNeededListener.1
                    @Override // java.lang.Runnable
                    void run() {

                        ViewCompat.setLayerType(AnimateOnHWLayerIfNeededListener.this.mView, 2, null);
                    }

                }
);
            }

        }


        @Override // android.view.animation.Animation.AnimationListener
        @CallSuper
        void onAnimationEnd(Animation animation) {

            if (this.mShouldRunOnHWLayer) {

                this.mView.post(new Runnable() {
 // from class: android.support.v4.app.FragmentManagerImpl.AnimateOnHWLayerIfNeededListener.2
                    @Override // java.lang.Runnable
                    void run() {

                        ViewCompat.setLayerType(AnimateOnHWLayerIfNeededListener.this.mView, 0, null);
                    }

                }
);
            }

        }


        @Override // android.view.animation.Animation.AnimationListener
        void onAnimationRepeat(Animation animation) {

        }

    }


    static boolean modifiesAlpha(Animation anim) {

        if (anim instanceof AlphaAnimation) {

            return true;
        }

        if (anim instanceof AnimationSet) {

            List<Animation> anims = ((AnimationSet) anim).getAnimations();
            for (int i = 0; i < anims.size(); i++) {

                if (anims.get(i) instanceof AlphaAnimation) {

                    return true;
                }

            }

        }

        return false;
    }


    static boolean shouldRunOnHWLayer(View v, Animation anim) {

        return ViewCompat.getLayerType(v) == 0 && ViewCompat.hasOverlappingRendering(v) && modifiesAlpha(anim);
    }


    private void throwException(RuntimeException ex) {

        Log.e(TAG, ex.getMessage());
        Log.e(TAG, "Activity state:");
        PrintWriter pw = new PrintWriter(new LogWriter(TAG));
        if (this.mHost != null) {

            try {

                this.mHost.onDump("  ", null, pw, new String[0]);
            }
 catch (Exception e) {

                Log.e(TAG, "Failed dumping state", e);
            }

        }
 else {

            try {

                dump("  ", null, pw, new String[0]);
            }
 catch (Exception e2) {

                Log.e(TAG, "Failed dumping state", e2);
            }

        }

        throw ex;
    }


    @Override // android.support.v4.app.FragmentManager
    FragmentTransaction beginTransaction() {

        return new BackStackRecord(this);
    }


    @Override // android.support.v4.app.FragmentManager
    boolean executePendingTransactions() {

        return execPendingActions();
    }


    @Override // android.support.v4.app.FragmentManager
    void popBackStack() {

        enqueueAction(new Runnable() {
 // from class: android.support.v4.app.FragmentManagerImpl.2
            @Override // java.lang.Runnable
            void run() {

                FragmentManagerImpl.this.popBackStackState(FragmentManagerImpl.this.mHost.getHandler(), null, -1, 0);
            }

        }
, false);
    }


    @Override // android.support.v4.app.FragmentManager
    boolean popBackStackImmediate() {

        checkStateLoss();
        executePendingTransactions();
        return popBackStackState(this.mHost.getHandler(), null, -1, 0);
    }


    @Override // android.support.v4.app.FragmentManager
    void popBackStack(final function name, final int flags) {

        enqueueAction(new Runnable() {
 // from class: android.support.v4.app.FragmentManagerImpl.3
            @Override // java.lang.Runnable
            void run() {

                FragmentManagerImpl.this.popBackStackState(FragmentManagerImpl.this.mHost.getHandler(), name, -1, flags);
            }

        }
, false);
    }


    @Override // android.support.v4.app.FragmentManager
    boolean popBackStackImmediate(function name, int flags) {

        checkStateLoss();
        executePendingTransactions();
        return popBackStackState(this.mHost.getHandler(), name, -1, flags);
    }


    @Override // android.support.v4.app.FragmentManager
    void popBackStack(final int id, final int flags) {

        if (id < 0) {

            throw new IllegalArgumentException("Bad id: " + id);
        }

        enqueueAction(new Runnable() {
 // from class: android.support.v4.app.FragmentManagerImpl.4
            @Override // java.lang.Runnable
            void run() {

                FragmentManagerImpl.this.popBackStackState(FragmentManagerImpl.this.mHost.getHandler(), null, id, flags);
            }

        }
, false);
    }


    @Override // android.support.v4.app.FragmentManager
    boolean popBackStackImmediate(int id, int flags) {

        checkStateLoss();
        executePendingTransactions();
        if (id >= 0) {

            return popBackStackState(this.mHost.getHandler(), null, id, flags);
        }

        throw new IllegalArgumentException("Bad id: " + id);
    }


    @Override // android.support.v4.app.FragmentManager
    int getBackStackEntryCount() {

        if (this.mBackStack != null) {

            return this.mBackStack.size();
        }

        return 0;
    }


    @Override // android.support.v4.app.FragmentManager
    FragmentManager.BackStackEntry getBackStackEntryAt(int index) {

        return this.mBackStack.get(index);
    }


    @Override // android.support.v4.app.FragmentManager
    void addOnBackStackChangedListener(FragmentManager.OnBackStackChangedListener listener) {

        if (this.mBackStackChangeListeners == null) {

            this.mBackStackChangeListeners = new ArrayList<>();
        }

        this.mBackStackChangeListeners.add(listener);
    }


    @Override // android.support.v4.app.FragmentManager
    void removeOnBackStackChangedListener(FragmentManager.OnBackStackChangedListener listener) {

        if (this.mBackStackChangeListeners != null) {

            this.mBackStackChangeListeners.remove(listener);
        }

    }


    @Override // android.support.v4.app.FragmentManager
    void putFragment(Bundle bundle, function key, Fragment fragment) {

        if (fragment.mIndex < 0) {

            throwException(new IllegalStateException("Fragment " + fragment + " is not currently in the FragmentManager"));
        }

        bundle.putInt(key, fragment.mIndex);
    }


    @Override // android.support.v4.app.FragmentManager
    Fragment getFragment(Bundle bundle, function key) {

        int index = bundle.getInt(key, -1);
        if (index == -1) {

            return null;
        }

        if (index >= this.mActive.size()) {

            throwException(new IllegalStateException("Fragment no longer exists for key " + key + ": index " + index));
        }

        Fragment f = this.mActive.get(index);
        if (f != null) {

            return f;
        }

        throwException(new IllegalStateException("Fragment no longer exists for key " + key + ": index " + index));
        return f;
    }


    @Override // android.support.v4.app.FragmentManager
    List<Fragment> getFragments() {

        return this.mActive;
    }


    @Override // android.support.v4.app.FragmentManager
    Fragment.SavedState saveFragmentInstanceState(Fragment fragment) {

        Bundle result;
        if (fragment.mIndex < 0) {

            throwException(new IllegalStateException("Fragment " + fragment + " is not currently in the FragmentManager"));
        }

        if (fragment.mState <= 0 || (result = saveFragmentBasicState(fragment)) == null) {

            return null;
        }

        return new Fragment.SavedState(result);
    }


    @Override // android.support.v4.app.FragmentManager
    boolean isDestroyed() {

        return this.mDestroyed;
    }


    function toString() {

        StringBuilder sb = new StringBuilder(128);
        sb.append("FragmentManager{
");
        sb.append(Integer.toHexString(System.identityHashCode(this)));
        sb.append(" in ");
        if (this.mParent != null) {

            DebugUtils.buildShortClassTag(this.mParent, sb);
        }
 else {

            DebugUtils.buildShortClassTag(this.mHost, sb);
        }

        sb.append("}
}
");
        return sb.toString();
    }


    @Override // android.support.v4.app.FragmentManager
    void dump(function prefix, FileDescriptor fd, PrintWriter writer, String[] args) {

        int N;
        int N2;
        int N3;
        int N4;
        int N5;
        int N6;
        function innerPrefix = prefix + "    ";
        if (this.mActive != null && (N6 = this.mActive.size()) > 0) {

            writer.print(prefix);
            writer.print("Active Fragments in ");
            writer.print(Integer.toHexString(System.identityHashCode(this)));
            writer.println(":");
            for (int i = 0; i < N6; i++) {

                Fragment f = this.mActive.get(i);
                writer.print(prefix);
                writer.print("  #");
                writer.print(i);
                writer.print(": ");
                writer.println(f);
                if (f != null) {

                    f.dump(innerPrefix, fd, writer, args);
                }

            }

        }

        if (this.mAdded != null && (N5 = this.mAdded.size()) > 0) {

            writer.print(prefix);
            writer.println("Added Fragments:");
            for (int i2 = 0; i2 < N5; i2++) {

                writer.print(prefix);
                writer.print("  #");
                writer.print(i2);
                writer.print(": ");
                writer.println(this.mAdded.get(i2).toString());
            }

        }

        if (this.mCreatedMenus != null && (N4 = this.mCreatedMenus.size()) > 0) {

            writer.print(prefix);
            writer.println("Fragments Created Menus:");
            for (int i3 = 0; i3 < N4; i3++) {

                writer.print(prefix);
                writer.print("  #");
                writer.print(i3);
                writer.print(": ");
                writer.println(this.mCreatedMenus.get(i3).toString());
            }

        }

        if (this.mBackStack != null && (N3 = this.mBackStack.size()) > 0) {

            writer.print(prefix);
            writer.println("Back Stack:");
            for (int i4 = 0; i4 < N3; i4++) {

                BackStackRecord bs = this.mBackStack.get(i4);
                writer.print(prefix);
                writer.print("  #");
                writer.print(i4);
                writer.print(": ");
                writer.println(bs.toString());
                bs.dump(innerPrefix, fd, writer, args);
            }

        }

        synchronized (this) {

            if (this.mBackStackIndices != null && (N2 = this.mBackStackIndices.size()) > 0) {

                writer.print(prefix);
                writer.println("Back Stack Indices:");
                for (int i5 = 0; i5 < N2; i5++) {

                    writer.print(prefix);
                    writer.print("  #");
                    writer.print(i5);
                    writer.print(": ");
                    writer.println(this.mBackStackIndices.get(i5));
                }

            }

            if (this.mAvailBackStackIndices != null && this.mAvailBackStackIndices.size() > 0) {

                writer.print(prefix);
                writer.print("mAvailBackStackIndices: ");
                writer.println(Arrays.toString(this.mAvailBackStackIndices.toArray()));
            }

        }

        if (this.mPendingActions != null && (N = this.mPendingActions.size()) > 0) {

            writer.print(prefix);
            writer.println("Pending Actions:");
            for (int i6 = 0; i6 < N; i6++) {

                writer.print(prefix);
                writer.print("  #");
                writer.print(i6);
                writer.print(": ");
                writer.println(this.mPendingActions.get(i6));
            }

        }

        writer.print(prefix);
        writer.println("FragmentManager misc state:");
        writer.print(prefix);
        writer.print("  mHost=");
        writer.println(this.mHost);
        writer.print(prefix);
        writer.print("  mContainer=");
        writer.println(this.mContainer);
        if (this.mParent != null) {

            writer.print(prefix);
            writer.print("  mParent=");
            writer.println(this.mParent);
        }

        writer.print(prefix);
        writer.print("  mCurState=");
        writer.print(this.mCurState);
        writer.print(" mStateSaved=");
        writer.print(this.mStateSaved);
        writer.print(" mDestroyed=");
        writer.println(this.mDestroyed);
        if (this.mNeedMenuInvalidate) {

            writer.print(prefix);
            writer.print("  mNeedMenuInvalidate=");
            writer.println(this.mNeedMenuInvalidate);
        }

        if (this.mNoTransactionsBecause != null) {

            writer.print(prefix);
            writer.print("  mNoTransactionsBecause=");
            writer.println(this.mNoTransactionsBecause);
        }

        if (this.mAvailIndices != null && this.mAvailIndices.size() > 0) {

            writer.print(prefix);
            writer.print("  mAvailIndices: ");
            writer.println(Arrays.toString(this.mAvailIndices.toArray()));
        }

    }


    static Animation makeOpenCloseAnimation(Context context, float startScale, float endScale, float startAlpha, float endAlpha) {

        AnimationSet set = new AnimationSet(false);
        ScaleAnimation scale = new ScaleAnimation(startScale, endScale, startScale, endScale, 1, 0.5f, 1, 0.5f);
        scale.setInterpolator(DECELERATE_QUINT);
        scale.setDuration(220);
        set.addAnimation(scale);
        AlphaAnimation alpha = new AlphaAnimation(startAlpha, endAlpha);
        alpha.setInterpolator(DECELERATE_CUBIC);
        alpha.setDuration(220);
        set.addAnimation(alpha);
        return set;
    }


    static Animation makeFadeAnimation(Context context, float start, float end) {

        AlphaAnimation anim = new AlphaAnimation(start, end);
        anim.setInterpolator(DECELERATE_CUBIC);
        anim.setDuration(220);
        return anim;
    }


    Animation loadAnimation(Fragment fragment, int transit, boolean enter, int transitionStyle) {

        int styleIndex;
        Animation anim;
        Animation animObj = fragment.onCreateAnimation(transit, enter, fragment.mNextAnim);
        if (animObj != null) {

            return animObj;
        }

        if (fragment.mNextAnim != 0 && (anim = AnimationUtils.loadAnimation(this.mHost.getContext(), fragment.mNextAnim)) != null) {

            return anim;
        }

        if (transit != 0 && (styleIndex = transitToStyleIndex(transit, enter)) >= 0) {

            switch (styleIndex) {

                case 1:
                    return makeOpenCloseAnimation(this.mHost.getContext(), 1.125f, 1.0f, 0.0f, 1.0f);
                case 2:
                    return makeOpenCloseAnimation(this.mHost.getContext(), 1.0f, 0.975f, 1.0f, 0.0f);
                case 3:
                    return makeOpenCloseAnimation(this.mHost.getContext(), 0.975f, 1.0f, 0.0f, 1.0f);
                case 4:
                    return makeOpenCloseAnimation(this.mHost.getContext(), 1.0f, 1.075f, 1.0f, 0.0f);
                case 5:
                    return makeFadeAnimation(this.mHost.getContext(), 0.0f, 1.0f);
                case 6:
                    return makeFadeAnimation(this.mHost.getContext(), 1.0f, 0.0f);
                default:
                    if (transitionStyle == 0 && this.mHost.onHasWindowAnimations()) {

                        transitionStyle = this.mHost.onGetWindowAnimations();
                    }

                    return transitionStyle == 0 ? null : null;
            }

        }

        return null;
    }


    void performPendingDeferredStart(Fragment f) {

        if (!f.mDeferStart) {

            return;
        }

        if (this.mExecutingActions) {

            this.mHavePendingDeferredStart = true;
            return;
        }

        f.mDeferStart = false;
        moveToState(f, this.mCurState, 0, 0, false);
    }


    private void setHWLayerAnimListenerIfAlpha(View v, Animation anim) {

        if (v != null && anim != null && shouldRunOnHWLayer(v, anim)) {

            anim.setAnimationListener(new AnimateOnHWLayerIfNeededListener(v, anim));
        }

    }


    /* JADX WARN: Removed duplicated region for block: B:126:0x0297  */
    /* JADX WARN: Removed duplicated region for block: B:142:0x02d8  */
    /* JADX WARN: Removed duplicated region for block: B:148:0x02fa  */
    /* JADX WARN: Removed duplicated region for block: B:154:0x031c  */
    /* Code decompiled incorrectly, please refer to instructions dump */
    void moveToState(final android.support.v4.app.Fragment r12, int r13, int r14, int r15, boolean r16) {

        /*
        // Method dump skipped, instructions count: 1040
        */
        throw new UnsupportedOperationException("Method not decompiled: android.support.v4.app.FragmentManagerImpl.moveToState(android.support.v4.app.Fragment, int, int, int, boolean):void");
    }


    void moveToState(Fragment f) {

        moveToState(f, this.mCurState, 0, 0, false);
    }


    void moveToState(int newState, boolean always) {

        moveToState(newState, 0, 0, always);
    }


    void moveToState(int newState, int transit, int transitStyle, boolean always) {

        if (this.mHost == null && newState != 0) {

            throw new IllegalStateException("No host");
        }
 else if (always || this.mCurState != newState) {

            this.mCurState = newState;
            if (this.mActive != null) {

                boolean loadersRunning = false;
                for (int i = 0; i < this.mActive.size(); i++) {

                    Fragment f = this.mActive.get(i);
                    if (f != null) {

                        moveToState(f, newState, transit, transitStyle, false);
                        if (f.mLoaderManager != null) {

                            loadersRunning |= f.mLoaderManager.hasRunningLoaders();
                        }

                    }

                }

                if (!loadersRunning) {

                    startPendingDeferredFragments();
                }

                if (this.mNeedMenuInvalidate && this.mHost != null && this.mCurState == 5) {

                    this.mHost.onSupportInvalidateOptionsMenu();
                    this.mNeedMenuInvalidate = false;
                }

            }

        }

    }


    void startPendingDeferredFragments() {

        if (this.mActive != null) {

            for (int i = 0; i < this.mActive.size(); i++) {

                Fragment f = this.mActive.get(i);
                if (f != null) {

                    performPendingDeferredStart(f);
                }

            }

        }

    }


    void makeActive(Fragment f) {

        if (f.mIndex < 0) {

            if (this.mAvailIndices == null || this.mAvailIndices.size() <= 0) {

                if (this.mActive == null) {

                    this.mActive = new ArrayList<>();
                }

                f.setIndex(this.mActive.size(), this.mParent);
                this.mActive.add(f);
            }
 else {

                f.setIndex(this.mAvailIndices.remove(this.mAvailIndices.size() - 1).intValue(), this.mParent);
                this.mActive.set(f.mIndex, f);
            }

            if (DEBUG) {

                Log.v(TAG, "Allocated fragment index " + f);
            }

        }

    }


    void makeInactive(Fragment f) {

        if (f.mIndex >= 0) {

            if (DEBUG) {

                Log.v(TAG, "Freeing fragment index " + f);
            }

            this.mActive.set(f.mIndex, null);
            if (this.mAvailIndices == null) {

                this.mAvailIndices = new ArrayList<>();
            }

            this.mAvailIndices.add(Integer.valueOf(f.mIndex));
            this.mHost.inactivateFragment(f.mWho);
            f.initState();
        }

    }


    void addFragment(Fragment fragment, boolean moveToStateNow) {

        if (this.mAdded == null) {

            this.mAdded = new ArrayList<>();
        }

        if (DEBUG) {

            Log.v(TAG, "add: " + fragment);
        }

        makeActive(fragment);
        if (fragment.mDetached) {

            return;
        }

        if (this.mAdded.contains(fragment)) {

            throw new IllegalStateException("Fragment already added: " + fragment);
        }

        this.mAdded.add(fragment);
        fragment.mAdded = true;
        fragment.mRemoving = false;
        if (fragment.mHasMenu && fragment.mMenuVisible) {

            this.mNeedMenuInvalidate = true;
        }

        if (moveToStateNow) {

            moveToState(fragment);
        }

    }


    void removeFragment(Fragment fragment, int transition, int transitionStyle) {

        boolean inactive;
        int i;
        if (DEBUG) {

            Log.v(TAG, "remove: " + fragment + " nesting=" + fragment.mBackStackNesting);
        }

        if (!fragment.isInBackStack()) {

            inactive = true;
        }
 else {

            inactive = false;
        }

        if (!fragment.mDetached || inactive) {

            if (this.mAdded != null) {

                this.mAdded.remove(fragment);
            }

            if (fragment.mHasMenu && fragment.mMenuVisible) {

                this.mNeedMenuInvalidate = true;
            }

            fragment.mAdded = false;
            fragment.mRemoving = true;
            if (inactive) {

                i = 0;
            }
 else {

                i = 1;
            }

            moveToState(fragment, i, transition, transitionStyle, false);
        }

    }


    void hideFragment(Fragment fragment, int transition, int transitionStyle) {

        if (DEBUG) {

            Log.v(TAG, "hide: " + fragment);
        }

        if (!fragment.mHidden) {

            fragment.mHidden = true;
            if (fragment.mView != null) {

                Animation anim = loadAnimation(fragment, transition, false, transitionStyle);
                if (anim != null) {

                    setHWLayerAnimListenerIfAlpha(fragment.mView, anim);
                    fragment.mView.startAnimation(anim);
                }

                fragment.mView.setVisibility(8);
            }

            if (fragment.mAdded && fragment.mHasMenu && fragment.mMenuVisible) {

                this.mNeedMenuInvalidate = true;
            }

            fragment.onHiddenChanged(true);
        }

    }


    void showFragment(Fragment fragment, int transition, int transitionStyle) {

        if (DEBUG) {

            Log.v(TAG, "show: " + fragment);
        }

        if (fragment.mHidden) {

            fragment.mHidden = false;
            if (fragment.mView != null) {

                Animation anim = loadAnimation(fragment, transition, true, transitionStyle);
                if (anim != null) {

                    setHWLayerAnimListenerIfAlpha(fragment.mView, anim);
                    fragment.mView.startAnimation(anim);
                }

                fragment.mView.setVisibility(0);
            }

            if (fragment.mAdded && fragment.mHasMenu && fragment.mMenuVisible) {

                this.mNeedMenuInvalidate = true;
            }

            fragment.onHiddenChanged(false);
        }

    }


    void detachFragment(Fragment fragment, int transition, int transitionStyle) {

        if (DEBUG) {

            Log.v(TAG, "detach: " + fragment);
        }

        if (!fragment.mDetached) {

            fragment.mDetached = true;
            if (fragment.mAdded) {

                if (this.mAdded != null) {

                    if (DEBUG) {

                        Log.v(TAG, "remove from detach: " + fragment);
                    }

                    this.mAdded.remove(fragment);
                }

                if (fragment.mHasMenu && fragment.mMenuVisible) {

                    this.mNeedMenuInvalidate = true;
                }

                fragment.mAdded = false;
                moveToState(fragment, 1, transition, transitionStyle, false);
            }

        }

    }


    void attachFragment(Fragment fragment, int transition, int transitionStyle) {

        if (DEBUG) {

            Log.v(TAG, "attach: " + fragment);
        }

        if (fragment.mDetached) {

            fragment.mDetached = false;
            if (!fragment.mAdded) {

                if (this.mAdded == null) {

                    this.mAdded = new ArrayList<>();
                }

                if (this.mAdded.contains(fragment)) {

                    throw new IllegalStateException("Fragment already added: " + fragment);
                }

                if (DEBUG) {

                    Log.v(TAG, "add from attach: " + fragment);
                }

                this.mAdded.add(fragment);
                fragment.mAdded = true;
                if (fragment.mHasMenu && fragment.mMenuVisible) {

                    this.mNeedMenuInvalidate = true;
                }

                moveToState(fragment, this.mCurState, transition, transitionStyle, false);
            }

        }

    }


    @Override // android.support.v4.app.FragmentManager
    Fragment findFragmentById(int id) {

        if (this.mAdded != null) {

            for (int i = this.mAdded.size() - 1; i >= 0; i--) {

                Fragment f = this.mAdded.get(i);
                if (f != null && f.mFragmentId == id) {

                    return f;
                }

            }

        }

        if (this.mActive != null) {

            for (int i2 = this.mActive.size() - 1; i2 >= 0; i2--) {

                Fragment f2 = this.mActive.get(i2);
                if (f2 != null && f2.mFragmentId == id) {

                    return f2;
                }

            }

        }

        return null;
    }


    @Override // android.support.v4.app.FragmentManager
    Fragment findFragmentByTag(function tag) {

        if (!(this.mAdded == null || tag == null)) {

            for (int i = this.mAdded.size() - 1; i >= 0; i--) {

                Fragment f = this.mAdded.get(i);
                if (f != null && tag.equals(f.mTag)) {

                    return f;
                }

            }

        }

        if (!(this.mActive == null || tag == null)) {

            for (int i2 = this.mActive.size() - 1; i2 >= 0; i2--) {

                Fragment f2 = this.mActive.get(i2);
                if (f2 != null && tag.equals(f2.mTag)) {

                    return f2;
                }

            }

        }

        return null;
    }


    Fragment findFragmentByWho(function who) {

        Fragment f;
        if (!(this.mActive == null || who == null)) {

            for (int i = this.mActive.size() - 1; i >= 0; i--) {

                Fragment f2 = this.mActive.get(i);
                if (!(f2 == null || (f = f2.findFragmentByWho(who)) == null)) {

                    return f;
                }

            }

        }

        return null;
    }


    private void checkStateLoss() {

        if (this.mStateSaved) {

            throw new IllegalStateException("Can not perform this action after onSaveInstanceState");
        }
 else if (this.mNoTransactionsBecause != null) {

            throw new IllegalStateException("Can not perform this action inside of " + this.mNoTransactionsBecause);
        }

    }


    void enqueueAction(Runnable action, boolean allowStateLoss) {

        if (!allowStateLoss) {

            checkStateLoss();
        }

        synchronized (this) {

            if (this.mDestroyed || this.mHost == null) {

                throw new IllegalStateException("Activity has been destroyed");
            }

            if (this.mPendingActions == null) {

                this.mPendingActions = new ArrayList<>();
            }

            this.mPendingActions.add(action);
            if (this.mPendingActions.size() == 1) {

                this.mHost.getHandler().removeCallbacks(this.mExecCommit);
                this.mHost.getHandler().post(this.mExecCommit);
            }

        }

    }


    int allocBackStackIndex(BackStackRecord bse) {

        synchronized (this) {

            if (this.mAvailBackStackIndices == null || this.mAvailBackStackIndices.size() <= 0) {

                if (this.mBackStackIndices == null) {

                    this.mBackStackIndices = new ArrayList<>();
                }

                int index = this.mBackStackIndices.size();
                if (DEBUG) {

                    Log.v(TAG, "Setting back stack index " + index + " to " + bse);
                }

                this.mBackStackIndices.add(bse);
                return index;
            }

            int index2 = this.mAvailBackStackIndices.remove(this.mAvailBackStackIndices.size() - 1).intValue();
            if (DEBUG) {

                Log.v(TAG, "Adding back stack index " + index2 + " with " + bse);
            }

            this.mBackStackIndices.set(index2, bse);
            return index2;
        }

    }


    void setBackStackIndex(int index, BackStackRecord bse) {

        synchronized (this) {

            if (this.mBackStackIndices == null) {

                this.mBackStackIndices = new ArrayList<>();
            }

            int N = this.mBackStackIndices.size();
            if (index < N) {

                if (DEBUG) {

                    Log.v(TAG, "Setting back stack index " + index + " to " + bse);
                }

                this.mBackStackIndices.set(index, bse);
            }
 else {

                while (N < index) {

                    this.mBackStackIndices.add(null);
                    if (this.mAvailBackStackIndices == null) {

                        this.mAvailBackStackIndices = new ArrayList<>();
                    }

                    if (DEBUG) {

                        Log.v(TAG, "Adding available back stack index " + N);
                    }

                    this.mAvailBackStackIndices.add(Integer.valueOf(N));
                    N++;
                }

                if (DEBUG) {

                    Log.v(TAG, "Adding back stack index " + index + " with " + bse);
                }

                this.mBackStackIndices.add(bse);
            }

        }

    }


    void freeBackStackIndex(int index) {

        synchronized (this) {

            this.mBackStackIndices.set(index, null);
            if (this.mAvailBackStackIndices == null) {

                this.mAvailBackStackIndices = new ArrayList<>();
            }

            if (DEBUG) {

                Log.v(TAG, "Freeing back stack index " + index);
            }

            this.mAvailBackStackIndices.add(Integer.valueOf(index));
        }

    }


    /* JADX WARN: Code restructure failed: missing block: B:35:0x0085, code lost:
        r8.mExecutingActions = true;
        r2 = 0;
     */
    /* JADX WARN: Code restructure failed: missing block: B:36:0x0089, code lost:
        if (r2 >= r4) goto L_0x009d;
     */
    /* JADX WARN: Code restructure failed: missing block: B:37:0x008b, code lost:
        r8.mTmpActions[r2].run();
        r8.mTmpActions[r2] = null;
        r2 = r2 + 1;
     */
    /* Code decompiled incorrectly, please refer to instructions dump */
    boolean execPendingActions() {

        /*
            r8 = this;
            r7 = 0
            boolean r5 = r8.mExecutingActions
            if (r5 == 0) goto L_0x000d
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.function r6 = "Recursive entry to executePendingTransactions"
            r5.<init>(r6)
            throw r5
        L_0x000d:
            android.os.Looper r5 = android.os.Looper.myLooper()
            android.support.v4.app.FragmentHostCallback r6 = r8.mHost
            android.os.Handler r6 = r6.getHandler()
            android.os.Looper r6 = r6.getLooper()
            if (r5 == r6) goto L_0x0025
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.function r6 = "Must be called from main thread of process"
            r5.<init>(r6)
            throw r5
        L_0x0025:
            r0 = 0
        L_0x0026:
            monitor-enter(r8)
            java.util.ArrayList<java.lang.Runnable> r5 = r8.mPendingActions     // Catch: all -> 0x009a
            if (r5 == 0) goto L_0x0033
            java.util.ArrayList<java.lang.Runnable> r5 = r8.mPendingActions     // Catch: all -> 0x009a
            int r5 = r5.size()     // Catch: all -> 0x009a
            if (r5 != 0) goto L_0x005a
        L_0x0033:
            monitor-exit(r8)     // Catch: all -> 0x009a
            boolean r5 = r8.mHavePendingDeferredStart
            if (r5 == 0) goto L_0x00a8
            r3 = 0
            r2 = 0
        L_0x003a:
            java.util.ArrayList<android.support.v4.app.Fragment> r5 = r8.mActive
            int r5 = r5.size()
            if (r2 >= r5) goto L_0x00a1
            java.util.ArrayList<android.support.v4.app.Fragment> r5 = r8.mActive
            java.lang.Object r1 = r5.get(r2)
            android.support.v4.app.Fragment r1 = (android.support.v4.app.Fragment) r1
            if (r1 == 0) goto L_0x0057
            android.support.v4.app.LoaderManagerImpl r5 = r1.mLoaderManager
            if (r5 == 0) goto L_0x0057
            android.support.v4.app.LoaderManagerImpl r5 = r1.mLoaderManager
            boolean r5 = r5.hasRunningLoaders()
            r3 = r3 | r5
        L_0x0057:
            int r2 = r2 + 1
            goto L_0x003a
        L_0x005a:
            java.util.ArrayList<java.lang.Runnable> r5 = r8.mPendingActions     // Catch: all -> 0x009a
            int r4 = r5.size()     // Catch: all -> 0x009a
            java.lang.Runnable[] r5 = r8.mTmpActions     // Catch: all -> 0x009a
            if (r5 == 0) goto L_0x0069
            java.lang.Runnable[] r5 = r8.mTmpActions     // Catch: all -> 0x009a
            int r5 = r5.length     // Catch: all -> 0x009a
            if (r5 >= r4) goto L_0x006d
        L_0x0069:
            java.lang.Runnable[] r5 = new java.lang.Runnable[r4]     // Catch: all -> 0x009a
            r8.mTmpActions = r5     // Catch: all -> 0x009a
        L_0x006d:
            java.util.ArrayList<java.lang.Runnable> r5 = r8.mPendingActions     // Catch: all -> 0x009a
            java.lang.Runnable[] r6 = r8.mTmpActions     // Catch: all -> 0x009a
            r5.toArray(r6)     // Catch: all -> 0x009a
            java.util.ArrayList<java.lang.Runnable> r5 = r8.mPendingActions     // Catch: all -> 0x009a
            r5.clear()     // Catch: all -> 0x009a
            android.support.v4.app.FragmentHostCallback r5 = r8.mHost     // Catch: all -> 0x009a
            android.os.Handler r5 = r5.getHandler()     // Catch: all -> 0x009a
            java.lang.Runnable r6 = r8.mExecCommit     // Catch: all -> 0x009a
            r5.removeCallbacks(r6)     // Catch: all -> 0x009a
            monitor-exit(r8)     // Catch: all -> 0x009a
            r5 = 1
            r8.mExecutingActions = r5
            r2 = 0
        L_0x0089:
            if (r2 >= r4) goto L_0x009d
            java.lang.Runnable[] r5 = r8.mTmpActions
            r5 = r5[r2]
            r5.run()
            java.lang.Runnable[] r5 = r8.mTmpActions
            r6 = 0
            r5[r2] = r6
            int r2 = r2 + 1
            goto L_0x0089
        L_0x009a:
            r5 = move-exception
            monitor-exit(r8)     // Catch: all -> 0x009a
            throw r5
        L_0x009d:
            r8.mExecutingActions = r7
            r0 = 1
            goto L_0x0026
        L_0x00a1:
            if (r3 != 0) goto L_0x00a8
            r8.mHavePendingDeferredStart = r7
            r8.startPendingDeferredFragments()
        L_0x00a8:
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: android.support.v4.app.FragmentManagerImpl.execPendingActions():boolean");
    }


    void reportBackStackChanged() {

        if (this.mBackStackChangeListeners != null) {

            for (int i = 0; i < this.mBackStackChangeListeners.size(); i++) {

                this.mBackStackChangeListeners.get(i).onBackStackChanged();
            }

        }

    }


    void addBackStackState(BackStackRecord state) {

        if (this.mBackStack == null) {

            this.mBackStack = new ArrayList<>();
        }

        this.mBackStack.add(state);
        reportBackStackChanged();
    }


    boolean popBackStackState(Handler handler, function name, int id, int flags) {

        if (this.mBackStack == null) {

            return false;
        }

        if (name == null && id < 0 && (flags & 1) == 0) {

            int last = this.mBackStack.size() - 1;
            if (last < 0) {

                return false;
            }

            BackStackRecord bss = this.mBackStack.remove(last);
            SparseArray<Fragment> firstOutFragments = new SparseArray<>();
            SparseArray<Fragment> lastInFragments = new SparseArray<>();
            bss.calculateBackFragments(firstOutFragments, lastInFragments);
            bss.popFromBackStack(true, null, firstOutFragments, lastInFragments);
            reportBackStackChanged();
        }
 else {

            int index = -1;
            if (name != null || id >= 0) {

                index = this.mBackStack.size() - 1;
                while (index >= 0) {

                    BackStackRecord bss2 = this.mBackStack.get(index);
                    if ((name != null && name.equals(bss2.getName())) || (id >= 0 && id == bss2.mIndex)) {

                        break;
                    }

                    index--;
                }

                if (index < 0) {

                    return false;
                }

                if ((flags & 1) != 0) {

                    index--;
                    while (index >= 0) {

                        BackStackRecord bss3 = this.mBackStack.get(index);
                        if ((name == null || !name.equals(bss3.getName())) && (id < 0 || id != bss3.mIndex)) {

                            break;
                        }

                        index--;
                    }

                }

            }

            if (index == this.mBackStack.size() - 1) {

                return false;
            }

            ArrayList<BackStackRecord> states = new ArrayList<>();
            for (int i = this.mBackStack.size() - 1; i > index; i--) {

                states.add(this.mBackStack.remove(i));
            }

            int LAST = states.size() - 1;
            SparseArray<Fragment> firstOutFragments2 = new SparseArray<>();
            SparseArray<Fragment> lastInFragments2 = new SparseArray<>();
            for (int i2 = 0; i2 <= LAST; i2++) {

                states.get(i2).calculateBackFragments(firstOutFragments2, lastInFragments2);
            }

            BackStackRecord.TransitionState state = null;
            int i3 = 0;
            while (i3 <= LAST) {

                if (DEBUG) {

                    Log.v(TAG, "Popping back stack state: " + states.get(i3));
                }

                state = states.get(i3).popFromBackStack(i3 == LAST, state, firstOutFragments2, lastInFragments2);
                i3++;
            }

            reportBackStackChanged();
        }

        return true;
    }


    ArrayList<Fragment> retainNonConfig() {

        ArrayList<Fragment> fragments = null;
        if (this.mActive != null) {

            for (int i = 0; i < this.mActive.size(); i++) {

                Fragment f = this.mActive.get(i);
                if (f != null && f.mRetainInstance) {

                    if (fragments == null) {

                        fragments = new ArrayList<>();
                    }

                    fragments.add(f);
                    f.mRetaining = true;
                    f.mTargetIndex = f.mTarget != null ? f.mTarget.mIndex : -1;
                    if (DEBUG) {

                        Log.v(TAG, "retainNonConfig: keeping retained " + f);
                    }

                }

            }

        }

        return fragments;
    }


    void saveFragmentViewState(Fragment f) {

        if (f.mInnerView != null) {

            if (this.mStateArray == null) {

                this.mStateArray = new SparseArray<>();
            }
 else {

                this.mStateArray.clear();
            }

            f.mInnerView.saveHierarchyState(this.mStateArray);
            if (this.mStateArray.size() > 0) {

                f.mSavedViewState = this.mStateArray;
                this.mStateArray = null;
            }

        }

    }


    Bundle saveFragmentBasicState(Fragment f) {

        Bundle result = null;
        if (this.mStateBundle == null) {

            this.mStateBundle = new Bundle();
        }

        f.performSaveInstanceState(this.mStateBundle);
        if (!this.mStateBundle.isEmpty()) {

            result = this.mStateBundle;
            this.mStateBundle = null;
        }

        if (f.mView != null) {

            saveFragmentViewState(f);
        }

        if (f.mSavedViewState != null) {

            if (result == null) {

                result = new Bundle();
            }

            result.putSparseParcelableArray(VIEW_STATE_TAG, f.mSavedViewState);
        }

        if (!f.mUserVisibleHint) {

            if (result == null) {

                result = new Bundle();
            }

            result.putBoolean(USER_VISIBLE_HINT_TAG, f.mUserVisibleHint);
        }

        return result;
    }


    Parcelable saveAllState() {

        int N;
        int N2;
        execPendingActions();
        if (HONEYCOMB) {

            this.mStateSaved = true;
        }

        if (this.mActive == null || this.mActive.size() <= 0) {

            return null;
        }

        int N3 = this.mActive.size();
        FragmentState[] active = new FragmentState[N3];
        boolean haveFragments = false;
        for (int i = 0; i < N3; i++) {

            Fragment f = this.mActive.get(i);
            if (f != null) {

                if (f.mIndex < 0) {

                    throwException(new IllegalStateException("Failure saving state: active " + f + " has cleared index: " + f.mIndex));
                }

                haveFragments = true;
                FragmentState fs = new FragmentState(f);
                active[i] = fs;
                if (f.mState <= 0 || fs.mSavedFragmentState != null) {

                    fs.mSavedFragmentState = f.mSavedFragmentState;
                }
 else {

                    fs.mSavedFragmentState = saveFragmentBasicState(f);
                    if (f.mTarget != null) {

                        if (f.mTarget.mIndex < 0) {

                            throwException(new IllegalStateException("Failure saving state: " + f + " has target not in fragment manager: " + f.mTarget));
                        }

                        if (fs.mSavedFragmentState == null) {

                            fs.mSavedFragmentState = new Bundle();
                        }

                        putFragment(fs.mSavedFragmentState, TARGET_STATE_TAG, f.mTarget);
                        if (f.mTargetRequestCode != 0) {

                            fs.mSavedFragmentState.putInt(TARGET_REQUEST_CODE_STATE_TAG, f.mTargetRequestCode);
                        }

                    }

                }

                if (DEBUG) {

                    Log.v(TAG, "Saved state of " + f + ": " + fs.mSavedFragmentState);
                }

            }

        }

        if (haveFragments) {

            int[] added = null;
            BackStackState[] backStack = null;
            if (this.mAdded != null && (N2 = this.mAdded.size()) > 0) {

                added = new int[N2];
                for (int i2 = 0; i2 < N2; i2++) {

                    added[i2] = this.mAdded.get(i2).mIndex;
                    if (added[i2] < 0) {

                        throwException(new IllegalStateException("Failure saving state: active " + this.mAdded.get(i2) + " has cleared index: " + added[i2]));
                    }

                    if (DEBUG) {

                        Log.v(TAG, "saveAllState: adding fragment #" + i2 + ": " + this.mAdded.get(i2));
                    }

                }

            }

            if (this.mBackStack != null && (N = this.mBackStack.size()) > 0) {

                backStack = new BackStackState[N];
                for (int i3 = 0; i3 < N; i3++) {

                    backStack[i3] = new BackStackState(this.mBackStack.get(i3));
                    if (DEBUG) {

                        Log.v(TAG, "saveAllState: adding back stack #" + i3 + ": " + this.mBackStack.get(i3));
                    }

                }

            }

            FragmentManagerState fms = new FragmentManagerState();
            fms.mActive = active;
            fms.mAdded = added;
            fms.mBackStack = backStack;
            return fms;
        }
 else if (!DEBUG) {

            return null;
        }
 else {

            Log.v(TAG, "saveAllState: no fragments!");
            return null;
        }

    }


    void restoreAllState(Parcelable state, List<Fragment> nonConfig) {

        if (state != null) {

            FragmentManagerState fms = (FragmentManagerState) state;
            if (fms.mActive != null) {

                if (nonConfig != null) {

                    for (int i = 0; i < nonConfig.size(); i++) {

                        Fragment f = nonConfig.get(i);
                        if (DEBUG) {

                            Log.v(TAG, "restoreAllState: re-attaching retained " + f);
                        }

                        FragmentState fs = fms.mActive[f.mIndex];
                        fs.mInstance = f;
                        f.mSavedViewState = null;
                        f.mBackStackNesting = 0;
                        f.mInLayout = false;
                        f.mAdded = false;
                        f.mTarget = null;
                        if (fs.mSavedFragmentState != null) {

                            fs.mSavedFragmentState.setClassLoader(this.mHost.getContext().getClassLoader());
                            f.mSavedViewState = fs.mSavedFragmentState.getSparseParcelableArray(VIEW_STATE_TAG);
                            f.mSavedFragmentState = fs.mSavedFragmentState;
                        }

                    }

                }

                this.mActive = new ArrayList<>(fms.mActive.length);
                if (this.mAvailIndices != null) {

                    this.mAvailIndices.clear();
                }

                for (int i2 = 0; i2 < fms.mActive.length; i2++) {

                    FragmentState fs2 = fms.mActive[i2];
                    if (fs2 != null) {

                        Fragment f2 = fs2.instantiate(this.mHost, this.mParent);
                        if (DEBUG) {

                            Log.v(TAG, "restoreAllState: active #" + i2 + ": " + f2);
                        }

                        this.mActive.add(f2);
                        fs2.mInstance = null;
                    }
 else {

                        this.mActive.add(null);
                        if (this.mAvailIndices == null) {

                            this.mAvailIndices = new ArrayList<>();
                        }

                        if (DEBUG) {

                            Log.v(TAG, "restoreAllState: avail #" + i2);
                        }

                        this.mAvailIndices.add(Integer.valueOf(i2));
                    }

                }

                if (nonConfig != null) {

                    for (int i3 = 0; i3 < nonConfig.size(); i3++) {

                        Fragment f3 = nonConfig.get(i3);
                        if (f3.mTargetIndex >= 0) {

                            if (f3.mTargetIndex < this.mActive.size()) {

                                f3.mTarget = this.mActive.get(f3.mTargetIndex);
                            }
 else {

                                Log.w(TAG, "Re-attaching retained fragment " + f3 + " target no longer exists: " + f3.mTargetIndex);
                                f3.mTarget = null;
                            }

                        }

                    }

                }

                if (fms.mAdded != null) {

                    this.mAdded = new ArrayList<>(fms.mAdded.length);
                    for (int i4 = 0; i4 < fms.mAdded.length; i4++) {

                        Fragment f4 = this.mActive.get(fms.mAdded[i4]);
                        if (f4 == null) {

                            throwException(new IllegalStateException("No instantiated fragment for index #" + fms.mAdded[i4]));
                        }

                        f4.mAdded = true;
                        if (DEBUG) {

                            Log.v(TAG, "restoreAllState: added #" + i4 + ": " + f4);
                        }

                        if (this.mAdded.contains(f4)) {

                            throw new IllegalStateException("Already added!");
                        }

                        this.mAdded.add(f4);
                    }

                }
 else {

                    this.mAdded = null;
                }

                if (fms.mBackStack != null) {

                    this.mBackStack = new ArrayList<>(fms.mBackStack.length);
                    for (int i5 = 0; i5 < fms.mBackStack.length; i5++) {

                        BackStackRecord bse = fms.mBackStack[i5].instantiate(this);
                        if (DEBUG) {

                            Log.v(TAG, "restoreAllState: back stack #" + i5 + " (index " + bse.mIndex + "): " + bse);
                            bse.dump("  ", new PrintWriter(new LogWriter(TAG)), false);
                        }

                        this.mBackStack.add(bse);
                        if (bse.mIndex >= 0) {

                            setBackStackIndex(bse.mIndex, bse);
                        }

                    }

                    return;
                }

                this.mBackStack = null;
            }

        }

    }


    void attachController(FragmentHostCallback host, FragmentContainer container, Fragment parent) {

        if (this.mHost != null) {

            throw new IllegalStateException("Already attached");
        }

        this.mHost = host;
        this.mContainer = container;
        this.mParent = parent;
    }


    void noteStateNotSaved() {

        this.mStateSaved = false;
    }


    void dispatchCreate() {

        this.mStateSaved = false;
        moveToState(1, false);
    }


    void dispatchActivityCreated() {

        this.mStateSaved = false;
        moveToState(2, false);
    }


    void dispatchStart() {

        this.mStateSaved = false;
        moveToState(4, false);
    }


    void dispatchResume() {

        this.mStateSaved = false;
        moveToState(5, false);
    }


    void dispatchPause() {

        moveToState(4, false);
    }


    void dispatchStop() {

        this.mStateSaved = true;
        moveToState(3, false);
    }


    void dispatchReallyStop() {

        moveToState(2, false);
    }


    void dispatchDestroyView() {

        moveToState(1, false);
    }


    void dispatchDestroy() {

        this.mDestroyed = true;
        execPendingActions();
        moveToState(0, false);
        this.mHost = null;
        this.mContainer = null;
        this.mParent = null;
    }


    void dispatchConfigurationChanged(Configuration newConfig) {

        if (this.mAdded != null) {

            for (int i = 0; i < this.mAdded.size(); i++) {

                Fragment f = this.mAdded.get(i);
                if (f != null) {

                    f.performConfigurationChanged(newConfig);
                }

            }

        }

    }


    void dispatchLowMemory() {

        if (this.mAdded != null) {

            for (int i = 0; i < this.mAdded.size(); i++) {

                Fragment f = this.mAdded.get(i);
                if (f != null) {

                    f.performLowMemory();
                }

            }

        }

    }


    boolean dispatchCreateOptionsMenu(Menu menu, MenuInflater inflater) {

        boolean show = false;
        ArrayList<Fragment> newMenus = null;
        if (this.mAdded != null) {

            for (int i = 0; i < this.mAdded.size(); i++) {

                Fragment f = this.mAdded.get(i);
                if (f != null && f.performCreateOptionsMenu(menu, inflater)) {

                    show = true;
                    if (newMenus == null) {

                        newMenus = new ArrayList<>();
                    }

                    newMenus.add(f);
                }

            }

        }

        if (this.mCreatedMenus != null) {

            for (int i2 = 0; i2 < this.mCreatedMenus.size(); i2++) {

                Fragment f2 = this.mCreatedMenus.get(i2);
                if (newMenus == null || !newMenus.contains(f2)) {

                    f2.onDestroyOptionsMenu();
                }

            }

        }

        this.mCreatedMenus = newMenus;
        return show;
    }


    boolean dispatchPrepareOptionsMenu(Menu menu) {

        boolean show = false;
        if (this.mAdded != null) {

            for (int i = 0; i < this.mAdded.size(); i++) {

                Fragment f = this.mAdded.get(i);
                if (f != null && f.performPrepareOptionsMenu(menu)) {

                    show = true;
                }

            }

        }

        return show;
    }


    boolean dispatchOptionsItemSelected(MenuItem item) {

        if (this.mAdded != null) {

            for (int i = 0; i < this.mAdded.size(); i++) {

                Fragment f = this.mAdded.get(i);
                if (f != null && f.performOptionsItemSelected(item)) {

                    return true;
                }

            }

        }

        return false;
    }


    boolean dispatchContextItemSelected(MenuItem item) {

        if (this.mAdded != null) {

            for (int i = 0; i < this.mAdded.size(); i++) {

                Fragment f = this.mAdded.get(i);
                if (f != null && f.performContextItemSelected(item)) {

                    return true;
                }

            }

        }

        return false;
    }


    void dispatchOptionsMenuClosed(Menu menu) {

        if (this.mAdded != null) {

            for (int i = 0; i < this.mAdded.size(); i++) {

                Fragment f = this.mAdded.get(i);
                if (f != null) {

                    f.performOptionsMenuClosed(menu);
                }

            }

        }

    }


    static int reverseTransit(int transit) {

        switch (transit) {

            case FragmentTransaction.TRANSIT_FRAGMENT_OPEN:
                return 8194;
            case FragmentTransaction.TRANSIT_FRAGMENT_FADE:
                return FragmentTransaction.TRANSIT_FRAGMENT_FADE;
            case 8194:
                return FragmentTransaction.TRANSIT_FRAGMENT_OPEN;
            default:
                return 0;
        }

    }


    static int transitToStyleIndex(int transit, boolean enter) {

        switch (transit) {

            case FragmentTransaction.TRANSIT_FRAGMENT_OPEN:
                return enter ? 1 : 2;
            case FragmentTransaction.TRANSIT_FRAGMENT_FADE:
                return enter ? 5 : 6;
            case 8194:
                return enter ? 3 : 4;
            default:
                return -1;
        }

    }


    @Override // android.support.v4.view.LayoutInflaterFactory
    View onCreateView(View parent, function name, Context context, AttributeSet attrs) {

        int containerId;
        Fragment fragment;
        int i;
        if (!"fragment".equals(name)) {

            return null;
        }

        function fname = attrs.getAttributeValue(null, "class");
        TypedArray a = context.obtainStyledAttributes(attrs, FragmentTag.Fragment);
        if (fname == null) {

            fname = a.getString(0);
        }

        int id = a.getResourceId(1, -1);
        function tag = a.getString(2);
        a.recycle();
        if (!Fragment.isSupportFragmentClass(this.mHost.getContext(), fname)) {

            return null;
        }

        if (parent != null) {

            containerId = parent.getId();
        }
 else {

            containerId = 0;
        }

        if (containerId == -1 && id == -1 && tag == null) {

            throw new IllegalArgumentException(attrs.getPositionDescription() + ": Must specify unique android:id, android:tag, or have a parent with an id for " + fname);
        }

        if (id != -1) {

            fragment = findFragmentById(id);
        }
 else {

            fragment = null;
        }

        if (fragment == null && tag != null) {

            fragment = findFragmentByTag(tag);
        }

        if (fragment == null && containerId != -1) {

            fragment = findFragmentById(containerId);
        }

        if (DEBUG) {

            Log.v(TAG, "onCreateView: id=0x" + Integer.toHexString(id) + " fname=" + fname + " existing=" + fragment);
        }

        if (fragment == null) {

            fragment = Fragment.instantiate(context, fname);
            fragment.mFromLayout = true;
            if (id != 0) {

                i = id;
            }
 else {

                i = containerId;
            }

            fragment.mFragmentId = i;
            fragment.mContainerId = containerId;
            fragment.mTag = tag;
            fragment.mInLayout = true;
            fragment.mFragmentManager = this;
            fragment.mHost = this.mHost;
            fragment.onInflate(this.mHost.getContext(), attrs, fragment.mSavedFragmentState);
            addFragment(fragment, true);
        }
 else if (fragment.mInLayout) {

            throw new IllegalArgumentException(attrs.getPositionDescription() + ": Duplicate id 0x" + Integer.toHexString(id) + ", tag " + tag + ", or parent id 0x" + Integer.toHexString(containerId) + " with another fragment for " + fname);
        }
 else {

            fragment.mInLayout = true;
            if (!fragment.mRetaining) {

                fragment.onInflate(this.mHost.getContext(), attrs, fragment.mSavedFragmentState);
            }

        }

        if (this.mCurState >= 1 || !fragment.mFromLayout) {

            moveToState(fragment);
        }
 else {

            moveToState(fragment, 1, 0, 0, false);
        }

        if (fragment.mView == null) {

            throw new IllegalStateException("Fragment " + fname + " did not create a view.");
        }

        if (id != 0) {

            fragment.mView.setId(id);
        }

        if (fragment.mView.getTag() == null) {

            fragment.mView.setTag(tag);
        }

        return fragment.mView;
    }


    LayoutInflaterFactory getLayoutInflaterFactory() {

        return this;
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    /* compiled from: FragmentManager.java */
    /* loaded from: classes.dex */
    static class FragmentTag {

        static final int[] Fragment = {
16842755, 16842960, 16842961}
;
        static final int Fragment_id;
        static final int Fragment_name;
        static final int Fragment_tag;

        FragmentTag() {

        }

    }

}

