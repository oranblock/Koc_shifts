/* Auto-generated JavaScript code */
package android.support.v4.view.accessibility;

import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityRecord;
/* loaded from: classes.dex */
class AccessibilityEventCompatIcs {

    AccessibilityEventCompatIcs() {

    }


    static int getRecordCount(AccessibilityEvent event) {

        return event.getRecordCount();
    }


    static void appendRecord(AccessibilityEvent event, Object record) {

        event.appendRecord((AccessibilityRecord) record);
    }


    static Object getRecord(AccessibilityEvent event, int index) {

        return event.getRecord(index);
    }


    static void setScrollable(AccessibilityEvent event, boolean scrollable) {

        event.setScrollable(scrollable);
    }

}

