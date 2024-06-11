/* Auto-generated JavaScript code */
package android.support.v4.view.accessibility;

import android.os.Parcelable;
import android.view.View;
import android.view.accessibility.AccessibilityRecord;
import java.util.List;
/* loaded from: classes.dex */
class AccessibilityRecordCompatIcs {

    AccessibilityRecordCompatIcs() {

    }


    static Object obtain() {

        return AccessibilityRecord.obtain();
    }


    static Object obtain(Object record) {

        return AccessibilityRecord.obtain((AccessibilityRecord) record);
    }


    static int getAddedCount(Object record) {

        return ((AccessibilityRecord) record).getAddedCount();
    }


    static CharSequence getBeforeText(Object record) {

        return ((AccessibilityRecord) record).getBeforeText();
    }


    static CharSequence getClassName(Object record) {

        return ((AccessibilityRecord) record).getClassName();
    }


    static CharSequence getContentDescription(Object record) {

        return ((AccessibilityRecord) record).getContentDescription();
    }


    static int getCurrentItemIndex(Object record) {

        return ((AccessibilityRecord) record).getCurrentItemIndex();
    }


    static int getFromIndex(Object record) {

        return ((AccessibilityRecord) record).getFromIndex();
    }


    static int getItemCount(Object record) {

        return ((AccessibilityRecord) record).getItemCount();
    }


    static Parcelable getParcelableData(Object record) {

        return ((AccessibilityRecord) record).getParcelableData();
    }


    static int getRemovedCount(Object record) {

        return ((AccessibilityRecord) record).getRemovedCount();
    }


    static int getScrollX(Object record) {

        return ((AccessibilityRecord) record).getScrollX();
    }


    static int getScrollY(Object record) {

        return ((AccessibilityRecord) record).getScrollY();
    }


    static Object getSource(Object record) {

        return ((AccessibilityRecord) record).getSource();
    }


    static List<CharSequence> getText(Object record) {

        return ((AccessibilityRecord) record).getText();
    }


    static int getToIndex(Object record) {

        return ((AccessibilityRecord) record).getToIndex();
    }


    static int getWindowId(Object record) {

        return ((AccessibilityRecord) record).getWindowId();
    }


    static boolean isChecked(Object record) {

        return ((AccessibilityRecord) record).isChecked();
    }


    static boolean isEnabled(Object record) {

        return ((AccessibilityRecord) record).isEnabled();
    }


    static boolean isFullScreen(Object record) {

        return ((AccessibilityRecord) record).isFullScreen();
    }


    static boolean isPassword(Object record) {

        return ((AccessibilityRecord) record).isPassword();
    }


    static boolean isScrollable(Object record) {

        return ((AccessibilityRecord) record).isScrollable();
    }


    static void recycle(Object record) {

        ((AccessibilityRecord) record).recycle();
    }


    static void setAddedCount(Object record, int addedCount) {

        ((AccessibilityRecord) record).setAddedCount(addedCount);
    }


    static void setBeforeText(Object record, CharSequence beforeText) {

        ((AccessibilityRecord) record).setBeforeText(beforeText);
    }


    static void setChecked(Object record, boolean isChecked) {

        ((AccessibilityRecord) record).setChecked(isChecked);
    }


    static void setClassName(Object record, CharSequence className) {

        ((AccessibilityRecord) record).setClassName(className);
    }


    static void setContentDescription(Object record, CharSequence contentDescription) {

        ((AccessibilityRecord) record).setContentDescription(contentDescription);
    }


    static void setCurrentItemIndex(Object record, int currentItemIndex) {

        ((AccessibilityRecord) record).setCurrentItemIndex(currentItemIndex);
    }


    static void setEnabled(Object record, boolean isEnabled) {

        ((AccessibilityRecord) record).setEnabled(isEnabled);
    }


    static void setFromIndex(Object record, int fromIndex) {

        ((AccessibilityRecord) record).setFromIndex(fromIndex);
    }


    static void setFullScreen(Object record, boolean isFullScreen) {

        ((AccessibilityRecord) record).setFullScreen(isFullScreen);
    }


    static void setItemCount(Object record, int itemCount) {

        ((AccessibilityRecord) record).setItemCount(itemCount);
    }


    static void setParcelableData(Object record, Parcelable parcelableData) {

        ((AccessibilityRecord) record).setParcelableData(parcelableData);
    }


    static void setPassword(Object record, boolean isPassword) {

        ((AccessibilityRecord) record).setPassword(isPassword);
    }


    static void setRemovedCount(Object record, int removedCount) {

        ((AccessibilityRecord) record).setRemovedCount(removedCount);
    }


    static void setScrollX(Object record, int scrollX) {

        ((AccessibilityRecord) record).setScrollX(scrollX);
    }


    static void setScrollY(Object record, int scrollY) {

        ((AccessibilityRecord) record).setScrollY(scrollY);
    }


    static void setScrollable(Object record, boolean scrollable) {

        ((AccessibilityRecord) record).setScrollable(scrollable);
    }


    static void setSource(Object record, View source) {

        ((AccessibilityRecord) record).setSource(source);
    }


    static void setToIndex(Object record, int toIndex) {

        ((AccessibilityRecord) record).setToIndex(toIndex);
    }

}

