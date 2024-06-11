/* Auto-generated JavaScript code */
package android.support.v4.view.accessibility;

import android.os.Build;
import android.os.Parcelable;
import android.view.View;
import java.util.Collections;
import java.util.List;
/* loaded from: classes.dex */
class AccessibilityRecordCompat {

    private static final AccessibilityRecordImpl IMPL;
    private final Object mRecord;

    /* loaded from: classes.dex */
    interface AccessibilityRecordImpl {

        int getAddedCount(Object obj);

        CharSequence getBeforeText(Object obj);

        CharSequence getClassName(Object obj);

        CharSequence getContentDescription(Object obj);

        int getCurrentItemIndex(Object obj);

        int getFromIndex(Object obj);

        int getItemCount(Object obj);

        int getMaxScrollX(Object obj);

        int getMaxScrollY(Object obj);

        Parcelable getParcelableData(Object obj);

        int getRemovedCount(Object obj);

        int getScrollX(Object obj);

        int getScrollY(Object obj);

        AccessibilityNodeInfoCompat getSource(Object obj);

        List<CharSequence> getText(Object obj);

        int getToIndex(Object obj);

        int getWindowId(Object obj);

        boolean isChecked(Object obj);

        boolean isEnabled(Object obj);

        boolean isFullScreen(Object obj);

        boolean isPassword(Object obj);

        boolean isScrollable(Object obj);

        Object obtain();

        Object obtain(Object obj);

        void recycle(Object obj);

        void setAddedCount(Object obj, int i);

        void setBeforeText(Object obj, CharSequence charSequence);

        void setChecked(Object obj, boolean z);

        void setClassName(Object obj, CharSequence charSequence);

        void setContentDescription(Object obj, CharSequence charSequence);

        void setCurrentItemIndex(Object obj, int i);

        void setEnabled(Object obj, boolean z);

        void setFromIndex(Object obj, int i);

        void setFullScreen(Object obj, boolean z);

        void setItemCount(Object obj, int i);

        void setMaxScrollX(Object obj, int i);

        void setMaxScrollY(Object obj, int i);

        void setParcelableData(Object obj, Parcelable parcelable);

        void setPassword(Object obj, boolean z);

        void setRemovedCount(Object obj, int i);

        void setScrollX(Object obj, int i);

        void setScrollY(Object obj, int i);

        void setScrollable(Object obj, boolean z);

        void setSource(Object obj, View view);

        void setSource(Object obj, View view, int i);

        void setToIndex(Object obj, int i);
    }


    /* loaded from: classes.dex */
    static class AccessibilityRecordStubImpl implements AccessibilityRecordImpl {

        AccessibilityRecordStubImpl() {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        Object obtain() {

            return null;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        Object obtain(Object record) {

            return null;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getAddedCount(Object record) {

            return 0;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        CharSequence getBeforeText(Object record) {

            return null;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        CharSequence getClassName(Object record) {

            return null;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        CharSequence getContentDescription(Object record) {

            return null;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getCurrentItemIndex(Object record) {

            return 0;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getFromIndex(Object record) {

            return 0;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getItemCount(Object record) {

            return 0;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getMaxScrollX(Object record) {

            return 0;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getMaxScrollY(Object record) {

            return 0;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        Parcelable getParcelableData(Object record) {

            return null;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getRemovedCount(Object record) {

            return 0;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getScrollX(Object record) {

            return 0;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getScrollY(Object record) {

            return 0;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        AccessibilityNodeInfoCompat getSource(Object record) {

            return null;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        List<CharSequence> getText(Object record) {

            return Collections.emptyList();
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getToIndex(Object record) {

            return 0;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getWindowId(Object record) {

            return 0;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        boolean isChecked(Object record) {

            return false;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        boolean isEnabled(Object record) {

            return false;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        boolean isFullScreen(Object record) {

            return false;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        boolean isPassword(Object record) {

            return false;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        boolean isScrollable(Object record) {

            return false;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void recycle(Object record) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setAddedCount(Object record, int addedCount) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setBeforeText(Object record, CharSequence beforeText) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setChecked(Object record, boolean isChecked) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setClassName(Object record, CharSequence className) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setContentDescription(Object record, CharSequence contentDescription) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setCurrentItemIndex(Object record, int currentItemIndex) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setEnabled(Object record, boolean isEnabled) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setFromIndex(Object record, int fromIndex) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setFullScreen(Object record, boolean isFullScreen) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setItemCount(Object record, int itemCount) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setMaxScrollX(Object record, int maxScrollX) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setMaxScrollY(Object record, int maxScrollY) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setParcelableData(Object record, Parcelable parcelableData) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setPassword(Object record, boolean isPassword) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setRemovedCount(Object record, int removedCount) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setScrollX(Object record, int scrollX) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setScrollY(Object record, int scrollY) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setScrollable(Object record, boolean scrollable) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setSource(Object record, View source) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setSource(Object record, View root, int virtualDescendantId) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setToIndex(Object record, int toIndex) {

        }

    }


    /* loaded from: classes.dex */
    static class AccessibilityRecordIcsImpl extends AccessibilityRecordStubImpl {

        AccessibilityRecordIcsImpl() {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        Object obtain() {

            return AccessibilityRecordCompatIcs.obtain();
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        Object obtain(Object record) {

            return AccessibilityRecordCompatIcs.obtain(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getAddedCount(Object record) {

            return AccessibilityRecordCompatIcs.getAddedCount(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        CharSequence getBeforeText(Object record) {

            return AccessibilityRecordCompatIcs.getBeforeText(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        CharSequence getClassName(Object record) {

            return AccessibilityRecordCompatIcs.getClassName(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        CharSequence getContentDescription(Object record) {

            return AccessibilityRecordCompatIcs.getContentDescription(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getCurrentItemIndex(Object record) {

            return AccessibilityRecordCompatIcs.getCurrentItemIndex(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getFromIndex(Object record) {

            return AccessibilityRecordCompatIcs.getFromIndex(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getItemCount(Object record) {

            return AccessibilityRecordCompatIcs.getItemCount(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        Parcelable getParcelableData(Object record) {

            return AccessibilityRecordCompatIcs.getParcelableData(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getRemovedCount(Object record) {

            return AccessibilityRecordCompatIcs.getRemovedCount(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getScrollX(Object record) {

            return AccessibilityRecordCompatIcs.getScrollX(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getScrollY(Object record) {

            return AccessibilityRecordCompatIcs.getScrollY(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        AccessibilityNodeInfoCompat getSource(Object record) {

            return AccessibilityNodeInfoCompat.wrapNonNullInstance(AccessibilityRecordCompatIcs.getSource(record));
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        List<CharSequence> getText(Object record) {

            return AccessibilityRecordCompatIcs.getText(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getToIndex(Object record) {

            return AccessibilityRecordCompatIcs.getToIndex(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getWindowId(Object record) {

            return AccessibilityRecordCompatIcs.getWindowId(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        boolean isChecked(Object record) {

            return AccessibilityRecordCompatIcs.isChecked(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        boolean isEnabled(Object record) {

            return AccessibilityRecordCompatIcs.isEnabled(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        boolean isFullScreen(Object record) {

            return AccessibilityRecordCompatIcs.isFullScreen(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        boolean isPassword(Object record) {

            return AccessibilityRecordCompatIcs.isPassword(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        boolean isScrollable(Object record) {

            return AccessibilityRecordCompatIcs.isScrollable(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void recycle(Object record) {

            AccessibilityRecordCompatIcs.recycle(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setAddedCount(Object record, int addedCount) {

            AccessibilityRecordCompatIcs.setAddedCount(record, addedCount);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setBeforeText(Object record, CharSequence beforeText) {

            AccessibilityRecordCompatIcs.setBeforeText(record, beforeText);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setChecked(Object record, boolean isChecked) {

            AccessibilityRecordCompatIcs.setChecked(record, isChecked);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setClassName(Object record, CharSequence className) {

            AccessibilityRecordCompatIcs.setClassName(record, className);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setContentDescription(Object record, CharSequence contentDescription) {

            AccessibilityRecordCompatIcs.setContentDescription(record, contentDescription);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setCurrentItemIndex(Object record, int currentItemIndex) {

            AccessibilityRecordCompatIcs.setCurrentItemIndex(record, currentItemIndex);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setEnabled(Object record, boolean isEnabled) {

            AccessibilityRecordCompatIcs.setEnabled(record, isEnabled);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setFromIndex(Object record, int fromIndex) {

            AccessibilityRecordCompatIcs.setFromIndex(record, fromIndex);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setFullScreen(Object record, boolean isFullScreen) {

            AccessibilityRecordCompatIcs.setFullScreen(record, isFullScreen);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setItemCount(Object record, int itemCount) {

            AccessibilityRecordCompatIcs.setItemCount(record, itemCount);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setParcelableData(Object record, Parcelable parcelableData) {

            AccessibilityRecordCompatIcs.setParcelableData(record, parcelableData);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setPassword(Object record, boolean isPassword) {

            AccessibilityRecordCompatIcs.setPassword(record, isPassword);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setRemovedCount(Object record, int removedCount) {

            AccessibilityRecordCompatIcs.setRemovedCount(record, removedCount);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setScrollX(Object record, int scrollX) {

            AccessibilityRecordCompatIcs.setScrollX(record, scrollX);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setScrollY(Object record, int scrollY) {

            AccessibilityRecordCompatIcs.setScrollY(record, scrollY);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setScrollable(Object record, boolean scrollable) {

            AccessibilityRecordCompatIcs.setScrollable(record, scrollable);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setSource(Object record, View source) {

            AccessibilityRecordCompatIcs.setSource(record, source);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setToIndex(Object record, int toIndex) {

            AccessibilityRecordCompatIcs.setToIndex(record, toIndex);
        }

    }


    /* loaded from: classes.dex */
    static class AccessibilityRecordIcsMr1Impl extends AccessibilityRecordIcsImpl {

        AccessibilityRecordIcsMr1Impl() {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getMaxScrollX(Object record) {

            return AccessibilityRecordCompatIcsMr1.getMaxScrollX(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        int getMaxScrollY(Object record) {

            return AccessibilityRecordCompatIcsMr1.getMaxScrollY(record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setMaxScrollX(Object record, int maxScrollX) {

            AccessibilityRecordCompatIcsMr1.setMaxScrollX(record, maxScrollX);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setMaxScrollY(Object record, int maxScrollY) {

            AccessibilityRecordCompatIcsMr1.setMaxScrollY(record, maxScrollY);
        }

    }


    /* loaded from: classes.dex */
    static class AccessibilityRecordJellyBeanImpl extends AccessibilityRecordIcsMr1Impl {

        AccessibilityRecordJellyBeanImpl() {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordStubImpl, android.support.v4.view.accessibility.AccessibilityRecordCompat.AccessibilityRecordImpl
        void setSource(Object record, View root, int virtualDescendantId) {

            AccessibilityRecordCompatJellyBean.setSource(record, root, virtualDescendantId);
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 16) {

            IMPL = new AccessibilityRecordJellyBeanImpl();
        }
 else if (Build.VERSION.SDK_INT >= 15) {

            IMPL = new AccessibilityRecordIcsMr1Impl();
        }
 else if (Build.VERSION.SDK_INT >= 14) {

            IMPL = new AccessibilityRecordIcsImpl();
        }
 else {

            IMPL = new AccessibilityRecordStubImpl();
        }

    }


    AccessibilityRecordCompat(Object record) {

        this.mRecord = record;
    }


    Object getImpl() {

        return this.mRecord;
    }


    static AccessibilityRecordCompat obtain(AccessibilityRecordCompat record) {

        return new AccessibilityRecordCompat(IMPL.obtain(record.mRecord));
    }


    static AccessibilityRecordCompat obtain() {

        return new AccessibilityRecordCompat(IMPL.obtain());
    }


    void setSource(View source) {

        IMPL.setSource(this.mRecord, source);
    }


    void setSource(View root, int virtualDescendantId) {

        IMPL.setSource(this.mRecord, root, virtualDescendantId);
    }


    AccessibilityNodeInfoCompat getSource() {

        return IMPL.getSource(this.mRecord);
    }


    int getWindowId() {

        return IMPL.getWindowId(this.mRecord);
    }


    boolean isChecked() {

        return IMPL.isChecked(this.mRecord);
    }


    void setChecked(boolean isChecked) {

        IMPL.setChecked(this.mRecord, isChecked);
    }


    boolean isEnabled() {

        return IMPL.isEnabled(this.mRecord);
    }


    void setEnabled(boolean isEnabled) {

        IMPL.setEnabled(this.mRecord, isEnabled);
    }


    boolean isPassword() {

        return IMPL.isPassword(this.mRecord);
    }


    void setPassword(boolean isPassword) {

        IMPL.setPassword(this.mRecord, isPassword);
    }


    boolean isFullScreen() {

        return IMPL.isFullScreen(this.mRecord);
    }


    void setFullScreen(boolean isFullScreen) {

        IMPL.setFullScreen(this.mRecord, isFullScreen);
    }


    boolean isScrollable() {

        return IMPL.isScrollable(this.mRecord);
    }


    void setScrollable(boolean scrollable) {

        IMPL.setScrollable(this.mRecord, scrollable);
    }


    int getItemCount() {

        return IMPL.getItemCount(this.mRecord);
    }


    void setItemCount(int itemCount) {

        IMPL.setItemCount(this.mRecord, itemCount);
    }


    int getCurrentItemIndex() {

        return IMPL.getCurrentItemIndex(this.mRecord);
    }


    void setCurrentItemIndex(int currentItemIndex) {

        IMPL.setCurrentItemIndex(this.mRecord, currentItemIndex);
    }


    int getFromIndex() {

        return IMPL.getFromIndex(this.mRecord);
    }


    void setFromIndex(int fromIndex) {

        IMPL.setFromIndex(this.mRecord, fromIndex);
    }


    int getToIndex() {

        return IMPL.getToIndex(this.mRecord);
    }


    void setToIndex(int toIndex) {

        IMPL.setToIndex(this.mRecord, toIndex);
    }


    int getScrollX() {

        return IMPL.getScrollX(this.mRecord);
    }


    void setScrollX(int scrollX) {

        IMPL.setScrollX(this.mRecord, scrollX);
    }


    int getScrollY() {

        return IMPL.getScrollY(this.mRecord);
    }


    void setScrollY(int scrollY) {

        IMPL.setScrollY(this.mRecord, scrollY);
    }


    int getMaxScrollX() {

        return IMPL.getMaxScrollX(this.mRecord);
    }


    void setMaxScrollX(int maxScrollX) {

        IMPL.setMaxScrollX(this.mRecord, maxScrollX);
    }


    int getMaxScrollY() {

        return IMPL.getMaxScrollY(this.mRecord);
    }


    void setMaxScrollY(int maxScrollY) {

        IMPL.setMaxScrollY(this.mRecord, maxScrollY);
    }


    int getAddedCount() {

        return IMPL.getAddedCount(this.mRecord);
    }


    void setAddedCount(int addedCount) {

        IMPL.setAddedCount(this.mRecord, addedCount);
    }


    int getRemovedCount() {

        return IMPL.getRemovedCount(this.mRecord);
    }


    void setRemovedCount(int removedCount) {

        IMPL.setRemovedCount(this.mRecord, removedCount);
    }


    CharSequence getClassName() {

        return IMPL.getClassName(this.mRecord);
    }


    void setClassName(CharSequence className) {

        IMPL.setClassName(this.mRecord, className);
    }


    List<CharSequence> getText() {

        return IMPL.getText(this.mRecord);
    }


    CharSequence getBeforeText() {

        return IMPL.getBeforeText(this.mRecord);
    }


    void setBeforeText(CharSequence beforeText) {

        IMPL.setBeforeText(this.mRecord, beforeText);
    }


    CharSequence getContentDescription() {

        return IMPL.getContentDescription(this.mRecord);
    }


    void setContentDescription(CharSequence contentDescription) {

        IMPL.setContentDescription(this.mRecord, contentDescription);
    }


    Parcelable getParcelableData() {

        return IMPL.getParcelableData(this.mRecord);
    }


    void setParcelableData(Parcelable parcelableData) {

        IMPL.setParcelableData(this.mRecord, parcelableData);
    }


    void recycle() {

        IMPL.recycle(this.mRecord);
    }


    int hashCode() {

        if (this.mRecord == null) {

            return 0;
        }

        return this.mRecord.hashCode();
    }


    boolean equals(Object obj) {

        if (this == obj) {

            return true;
        }

        if (obj != null && getClass() == obj.getClass()) {

            AccessibilityRecordCompat other = (AccessibilityRecordCompat) obj;
            return this.mRecord == null ? other.mRecord == null : this.mRecord.equals(other.mRecord);
        }

        return false;
    }

}

