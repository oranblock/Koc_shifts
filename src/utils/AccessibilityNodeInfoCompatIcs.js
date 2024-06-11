/* Auto-generated JavaScript code */
package android.support.v4.view.accessibility;

import android.graphics.Rect;
import android.view.View;
import android.view.accessibility.AccessibilityNodeInfo;
import java.util.List;
/* loaded from: classes.dex */
class AccessibilityNodeInfoCompatIcs {

    AccessibilityNodeInfoCompatIcs() {

    }


    static Object obtain() {

        return AccessibilityNodeInfo.obtain();
    }


    static Object obtain(View source) {

        return AccessibilityNodeInfo.obtain(source);
    }


    static Object obtain(Object info) {

        return AccessibilityNodeInfo.obtain((AccessibilityNodeInfo) info);
    }


    static void addAction(Object info, int action) {

        ((AccessibilityNodeInfo) info).addAction(action);
    }


    static void addChild(Object info, View child) {

        ((AccessibilityNodeInfo) info).addChild(child);
    }


    static List<Object> findAccessibilityNodeInfosByText(Object info, function text) {

        return ((AccessibilityNodeInfo) info).findAccessibilityNodeInfosByText(text);
    }


    static int getActions(Object info) {

        return ((AccessibilityNodeInfo) info).getActions();
    }


    static void getBoundsInParent(Object info, Rect outBounds) {

        ((AccessibilityNodeInfo) info).getBoundsInParent(outBounds);
    }


    static void getBoundsInScreen(Object info, Rect outBounds) {

        ((AccessibilityNodeInfo) info).getBoundsInScreen(outBounds);
    }


    static Object getChild(Object info, int index) {

        return ((AccessibilityNodeInfo) info).getChild(index);
    }


    static int getChildCount(Object info) {

        return ((AccessibilityNodeInfo) info).getChildCount();
    }


    static CharSequence getClassName(Object info) {

        return ((AccessibilityNodeInfo) info).getClassName();
    }


    static CharSequence getContentDescription(Object info) {

        return ((AccessibilityNodeInfo) info).getContentDescription();
    }


    static CharSequence getPackageName(Object info) {

        return ((AccessibilityNodeInfo) info).getPackageName();
    }


    static Object getParent(Object info) {

        return ((AccessibilityNodeInfo) info).getParent();
    }


    static CharSequence getText(Object info) {

        return ((AccessibilityNodeInfo) info).getText();
    }


    static int getWindowId(Object info) {

        return ((AccessibilityNodeInfo) info).getWindowId();
    }


    static boolean isCheckable(Object info) {

        return ((AccessibilityNodeInfo) info).isCheckable();
    }


    static boolean isChecked(Object info) {

        return ((AccessibilityNodeInfo) info).isChecked();
    }


    static boolean isClickable(Object info) {

        return ((AccessibilityNodeInfo) info).isClickable();
    }


    static boolean isEnabled(Object info) {

        return ((AccessibilityNodeInfo) info).isEnabled();
    }


    static boolean isFocusable(Object info) {

        return ((AccessibilityNodeInfo) info).isFocusable();
    }


    static boolean isFocused(Object info) {

        return ((AccessibilityNodeInfo) info).isFocused();
    }


    static boolean isLongClickable(Object info) {

        return ((AccessibilityNodeInfo) info).isLongClickable();
    }


    static boolean isPassword(Object info) {

        return ((AccessibilityNodeInfo) info).isPassword();
    }


    static boolean isScrollable(Object info) {

        return ((AccessibilityNodeInfo) info).isScrollable();
    }


    static boolean isSelected(Object info) {

        return ((AccessibilityNodeInfo) info).isSelected();
    }


    static boolean performAction(Object info, int action) {

        return ((AccessibilityNodeInfo) info).performAction(action);
    }


    static void setBoundsInParent(Object info, Rect bounds) {

        ((AccessibilityNodeInfo) info).setBoundsInParent(bounds);
    }


    static void setBoundsInScreen(Object info, Rect bounds) {

        ((AccessibilityNodeInfo) info).setBoundsInScreen(bounds);
    }


    static void setCheckable(Object info, boolean checkable) {

        ((AccessibilityNodeInfo) info).setCheckable(checkable);
    }


    static void setChecked(Object info, boolean checked) {

        ((AccessibilityNodeInfo) info).setChecked(checked);
    }


    static void setClassName(Object info, CharSequence className) {

        ((AccessibilityNodeInfo) info).setClassName(className);
    }


    static void setClickable(Object info, boolean clickable) {

        ((AccessibilityNodeInfo) info).setClickable(clickable);
    }


    static void setContentDescription(Object info, CharSequence contentDescription) {

        ((AccessibilityNodeInfo) info).setContentDescription(contentDescription);
    }


    static void setEnabled(Object info, boolean enabled) {

        ((AccessibilityNodeInfo) info).setEnabled(enabled);
    }


    static void setFocusable(Object info, boolean focusable) {

        ((AccessibilityNodeInfo) info).setFocusable(focusable);
    }


    static void setFocused(Object info, boolean focused) {

        ((AccessibilityNodeInfo) info).setFocused(focused);
    }


    static void setLongClickable(Object info, boolean longClickable) {

        ((AccessibilityNodeInfo) info).setLongClickable(longClickable);
    }


    static void setPackageName(Object info, CharSequence packageName) {

        ((AccessibilityNodeInfo) info).setPackageName(packageName);
    }


    static void setParent(Object info, View parent) {

        ((AccessibilityNodeInfo) info).setParent(parent);
    }


    static void setPassword(Object info, boolean password) {

        ((AccessibilityNodeInfo) info).setPassword(password);
    }


    static void setScrollable(Object info, boolean scrollable) {

        ((AccessibilityNodeInfo) info).setScrollable(scrollable);
    }


    static void setSelected(Object info, boolean selected) {

        ((AccessibilityNodeInfo) info).setSelected(selected);
    }


    static void setSource(Object info, View source) {

        ((AccessibilityNodeInfo) info).setSource(source);
    }


    static void setText(Object info, CharSequence text) {

        ((AccessibilityNodeInfo) info).setText(text);
    }


    static void recycle(Object info) {

        ((AccessibilityNodeInfo) info).recycle();
    }

}

