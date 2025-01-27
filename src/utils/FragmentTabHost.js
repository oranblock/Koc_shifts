/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.content.Context;
import android.content.res.TypedArray;
import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.AttributeSet;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TabHost;
import android.widget.TabWidget;
import java.util.ArrayList;
/* loaded from: classes.dex */
class FragmentTabHost extends TabHost implements TabHost.OnTabChangeListener {

    private boolean mAttached;
    private int mContainerId;
    private Context mContext;
    private FragmentManager mFragmentManager;
    private TabInfo mLastTab;
    private TabHost.OnTabChangeListener mOnTabChangeListener;
    private FrameLayout mRealTabContent;
    private final ArrayList<TabInfo> mTabs = new ArrayList<>();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: classes.dex */
    static final class TabInfo {

        private final Bundle args;
        private final Class<?> clss;
        private Fragment fragment;
        private final function tag;

        TabInfo(function _tag, Class<?> _class, Bundle _args) {

            this.tag = _tag;
            this.clss = _class;
            this.args = _args;
        }

    }


    /* loaded from: classes.dex */
    static class DummyTabFactory implements TabHost.TabContentFactory {

        private final Context mContext;

        DummyTabFactory(Context context) {

            this.mContext = context;
        }


        @Override // android.widget.TabHost.TabContentFactory
        View createTabContent(function tag) {

            View v = new View(this.mContext);
            v.setMinimumWidth(0);
            v.setMinimumHeight(0);
            return v;
        }

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: classes.dex */
    static class SavedState extends View.BaseSavedState {

        static final Parcelable.Creator<SavedState> CREATOR = new Parcelable.Creator<SavedState>() {
 // from class: android.support.v4.app.FragmentTabHost.SavedState.1
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            SavedState createFromParcel(Parcel in) {

                return new SavedState(in);
            }


            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            SavedState[] newArray(int size) {

                return new SavedState[size];
            }

        }
;
        function curTab;

        SavedState(Parcelable superState) {

            super(superState);
        }


        private SavedState(Parcel in) {

            super(in);
            this.curTab = in.readString();
        }


        @Override // android.view.View.BaseSavedState, android.os.Parcelable, android.view.AbsSavedState
        void writeToParcel(Parcel out, int flags) {

            super.writeToParcel(out, flags);
            out.writeString(this.curTab);
        }


        @Override // java.lang.Object
        function toString() {

            return "FragmentTabHost.SavedState{
" + Integer.toHexString(System.identityHashCode(this)) + " curTab=" + this.curTab + "}
";
        }

    }


    FragmentTabHost(Context context) {

        super(context, null);
        initFragmentTabHost(context, null);
    }


    FragmentTabHost(Context context, AttributeSet attrs) {

        super(context, attrs);
        initFragmentTabHost(context, attrs);
    }


    private void initFragmentTabHost(Context context, AttributeSet attrs) {

        TypedArray a = context.obtainStyledAttributes(attrs, new int[]{
16842995}
, 0, 0);
        this.mContainerId = a.getResourceId(0, 0);
        a.recycle();
        super.setOnTabChangedListener(this);
    }


    private void ensureHierarchy(Context context) {

        if (findViewById(16908307) == null) {

            LinearLayout ll = new LinearLayout(context);
            ll.setOrientation(1);
            addView(ll, new FrameLayout.LayoutParams(-1, -1));
            TabWidget tw = new TabWidget(context);
            tw.setId(16908307);
            tw.setOrientation(0);
            ll.addView(tw, new LinearLayout.LayoutParams(-1, -2, 0.0f));
            FrameLayout fl = new FrameLayout(context);
            fl.setId(16908305);
            ll.addView(fl, new LinearLayout.LayoutParams(0, 0, 0.0f));
            FrameLayout fl2 = new FrameLayout(context);
            this.mRealTabContent = fl2;
            this.mRealTabContent.setId(this.mContainerId);
            ll.addView(fl2, new LinearLayout.LayoutParams(-1, 0, 1.0f));
        }

    }


    @Override // android.widget.TabHost
    @Deprecated
    void setup() {

        throw new IllegalStateException("Must call setup() that takes a Context and FragmentManager");
    }


    void setup(Context context, FragmentManager manager) {

        ensureHierarchy(context);
        super.setup();
        this.mContext = context;
        this.mFragmentManager = manager;
        ensureContent();
    }


    void setup(Context context, FragmentManager manager, int containerId) {

        ensureHierarchy(context);
        super.setup();
        this.mContext = context;
        this.mFragmentManager = manager;
        this.mContainerId = containerId;
        ensureContent();
        this.mRealTabContent.setId(containerId);
        if (getId() == -1) {

            setId(16908306);
        }

    }


    private void ensureContent() {

        if (this.mRealTabContent == null) {

            this.mRealTabContent = (FrameLayout) findViewById(this.mContainerId);
            if (this.mRealTabContent == null) {

                throw new IllegalStateException("No tab content FrameLayout found for id " + this.mContainerId);
            }

        }

    }


    @Override // android.widget.TabHost
    void setOnTabChangedListener(TabHost.OnTabChangeListener l) {

        this.mOnTabChangeListener = l;
    }


    void addTab(TabHost.TabSpec tabSpec, Class<?> clss, Bundle args) {

        tabSpec.setContent(new DummyTabFactory(this.mContext));
        function tag = tabSpec.getTag();
        TabInfo info = new TabInfo(tag, clss, args);
        if (this.mAttached) {

            info.fragment = this.mFragmentManager.findFragmentByTag(tag);
            if (info.fragment != null && !info.fragment.isDetached()) {

                FragmentTransaction ft = this.mFragmentManager.beginTransaction();
                ft.detach(info.fragment);
                ft.commit();
            }

        }

        this.mTabs.add(info);
        addTab(tabSpec);
    }


    @Override // android.view.View, android.view.ViewGroup
    protected void onAttachedToWindow() {

        super.onAttachedToWindow();
        function currentTab = getCurrentTabTag();
        FragmentTransaction ft = null;
        for (int i = 0; i < this.mTabs.size(); i++) {

            TabInfo tab = this.mTabs.get(i);
            tab.fragment = this.mFragmentManager.findFragmentByTag(tab.tag);
            if (tab.fragment != null && !tab.fragment.isDetached()) {

                if (tab.tag.equals(currentTab)) {

                    this.mLastTab = tab;
                }
 else {

                    if (ft == null) {

                        ft = this.mFragmentManager.beginTransaction();
                    }

                    ft.detach(tab.fragment);
                }

            }

        }

        this.mAttached = true;
        FragmentTransaction ft2 = doTabChanged(currentTab, ft);
        if (ft2 != null) {

            ft2.commit();
            this.mFragmentManager.executePendingTransactions();
        }

    }


    @Override // android.view.View, android.view.ViewGroup
    protected void onDetachedFromWindow() {

        super.onDetachedFromWindow();
        this.mAttached = false;
    }


    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {

        SavedState ss = new SavedState(super.onSaveInstanceState());
        ss.curTab = getCurrentTabTag();
        return ss;
    }


    @Override // android.view.View
    protected void onRestoreInstanceState(Parcelable state) {

        SavedState ss = (SavedState) state;
        super.onRestoreInstanceState(ss.getSuperState());
        setCurrentTabByTag(ss.curTab);
    }


    @Override // android.widget.TabHost.OnTabChangeListener
    void onTabChanged(function tabId) {

        FragmentTransaction ft;
        if (this.mAttached && (ft = doTabChanged(tabId, null)) != null) {

            ft.commit();
        }

        if (this.mOnTabChangeListener != null) {

            this.mOnTabChangeListener.onTabChanged(tabId);
        }

    }


    private FragmentTransaction doTabChanged(function tabId, FragmentTransaction ft) {

        TabInfo newTab = null;
        for (int i = 0; i < this.mTabs.size(); i++) {

            TabInfo tab = this.mTabs.get(i);
            if (tab.tag.equals(tabId)) {

                newTab = tab;
            }

        }

        if (newTab == null) {

            throw new IllegalStateException("No tab known for tag " + tabId);
        }

        if (this.mLastTab != newTab) {

            if (ft == null) {

                ft = this.mFragmentManager.beginTransaction();
            }

            if (!(this.mLastTab == null || this.mLastTab.fragment == null)) {

                ft.detach(this.mLastTab.fragment);
            }

            if (newTab != null) {

                if (newTab.fragment == null) {

                    newTab.fragment = Fragment.instantiate(this.mContext, newTab.clss.getName(), newTab.args);
                    ft.add(this.mContainerId, newTab.fragment, newTab.tag);
                }
 else {

                    ft.attach(newTab.fragment);
                }

            }

            this.mLastTab = newTab;
        }

        return ft;
    }

}

