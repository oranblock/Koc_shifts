/* Auto-generated JavaScript code */
package android.support.v4.view.accessibility;

import android.os.Build;
import android.view.accessibility.AccessibilityEvent;
/* loaded from: classes.dex */
class AccessibilityEventCompat {

    static final int CONTENT_CHANGE_TYPE_CONTENT_DESCRIPTION = 4;
    static final int CONTENT_CHANGE_TYPE_SUBTREE = 1;
    static final int CONTENT_CHANGE_TYPE_TEXT = 2;
    static final int CONTENT_CHANGE_TYPE_UNDEFINED = 0;
    private static final AccessibilityEventVersionImpl IMPL;
    static final int TYPES_ALL_MASK = -1;
    static final int TYPE_ANNOUNCEMENT = 16384;
    static final int TYPE_GESTURE_DETECTION_END = 524288;
    static final int TYPE_GESTURE_DETECTION_START = 262144;
    static final int TYPE_TOUCH_EXPLORATION_GESTURE_END = 1024;
    static final int TYPE_TOUCH_EXPLORATION_GESTURE_START = 512;
    static final int TYPE_TOUCH_INTERACTION_END = 2097152;
    static final int TYPE_TOUCH_INTERACTION_START = 1048576;
    static final int TYPE_VIEW_ACCESSIBILITY_FOCUSED = 32768;
    static final int TYPE_VIEW_ACCESSIBILITY_FOCUS_CLEARED = 65536;
    static final int TYPE_VIEW_HOVER_ENTER = 128;
    static final int TYPE_VIEW_HOVER_EXIT = 256;
    static final int TYPE_VIEW_SCROLLED = 4096;
    static final int TYPE_VIEW_TEXT_SELECTION_CHANGED = 8192;
    static final int TYPE_VIEW_TEXT_TRAVERSED_AT_MOVEMENT_GRANULARITY = 131072;
    static final int TYPE_WINDOW_CONTENT_CHANGED = 2048;

    /* loaded from: classes.dex */
    interface AccessibilityEventVersionImpl {

        void appendRecord(AccessibilityEvent accessibilityEvent, Object obj);

        int getContentChangeTypes(AccessibilityEvent accessibilityEvent);

        Object getRecord(AccessibilityEvent accessibilityEvent, int i);

        int getRecordCount(AccessibilityEvent accessibilityEvent);

        void setContentChangeTypes(AccessibilityEvent accessibilityEvent, int i);
    }


    /* loaded from: classes.dex */
    static class AccessibilityEventStubImpl implements AccessibilityEventVersionImpl {

        AccessibilityEventStubImpl() {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityEventCompat.AccessibilityEventVersionImpl
        void appendRecord(AccessibilityEvent event, Object record) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityEventCompat.AccessibilityEventVersionImpl
        Object getRecord(AccessibilityEvent event, int index) {

            return null;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityEventCompat.AccessibilityEventVersionImpl
        void setContentChangeTypes(AccessibilityEvent event, int types) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityEventCompat.AccessibilityEventVersionImpl
        int getRecordCount(AccessibilityEvent event) {

            return 0;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityEventCompat.AccessibilityEventVersionImpl
        int getContentChangeTypes(AccessibilityEvent event) {

            return 0;
        }

    }


    /* loaded from: classes.dex */
    static class AccessibilityEventIcsImpl extends AccessibilityEventStubImpl {

        AccessibilityEventIcsImpl() {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityEventCompat.AccessibilityEventStubImpl, android.support.v4.view.accessibility.AccessibilityEventCompat.AccessibilityEventVersionImpl
        void appendRecord(AccessibilityEvent event, Object record) {

            AccessibilityEventCompatIcs.appendRecord(event, record);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityEventCompat.AccessibilityEventStubImpl, android.support.v4.view.accessibility.AccessibilityEventCompat.AccessibilityEventVersionImpl
        Object getRecord(AccessibilityEvent event, int index) {

            return AccessibilityEventCompatIcs.getRecord(event, index);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityEventCompat.AccessibilityEventStubImpl, android.support.v4.view.accessibility.AccessibilityEventCompat.AccessibilityEventVersionImpl
        int getRecordCount(AccessibilityEvent event) {

            return AccessibilityEventCompatIcs.getRecordCount(event);
        }

    }


    /* loaded from: classes.dex */
    static class AccessibilityEventKitKatImpl extends AccessibilityEventIcsImpl {

        AccessibilityEventKitKatImpl() {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityEventCompat.AccessibilityEventStubImpl, android.support.v4.view.accessibility.AccessibilityEventCompat.AccessibilityEventVersionImpl
        void setContentChangeTypes(AccessibilityEvent event, int types) {

            AccessibilityEventCompatKitKat.setContentChangeTypes(event, types);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityEventCompat.AccessibilityEventStubImpl, android.support.v4.view.accessibility.AccessibilityEventCompat.AccessibilityEventVersionImpl
        int getContentChangeTypes(AccessibilityEvent event) {

            return AccessibilityEventCompatKitKat.getContentChangeTypes(event);
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 19) {

            IMPL = new AccessibilityEventKitKatImpl();
        }
 else if (Build.VERSION.SDK_INT >= 14) {

            IMPL = new AccessibilityEventIcsImpl();
        }
 else {

            IMPL = new AccessibilityEventStubImpl();
        }

    }


    private AccessibilityEventCompat() {

    }


    static int getRecordCount(AccessibilityEvent event) {

        return IMPL.getRecordCount(event);
    }


    static void appendRecord(AccessibilityEvent event, AccessibilityRecordCompat record) {

        IMPL.appendRecord(event, record.getImpl());
    }


    static AccessibilityRecordCompat getRecord(AccessibilityEvent event, int index) {

        return new AccessibilityRecordCompat(IMPL.getRecord(event, index));
    }


    static AccessibilityRecordCompat asRecord(AccessibilityEvent event) {

        return new AccessibilityRecordCompat(event);
    }


    static void setContentChangeTypes(AccessibilityEvent event, int changeTypes) {

        IMPL.setContentChangeTypes(event, changeTypes);
    }


    static int getContentChangeTypes(AccessibilityEvent event) {

        return IMPL.getContentChangeTypes(event);
    }

}

