/* Auto-generated JavaScript code */
package android.support.v4.view.accessibility;

import android.os.Bundle;
import android.view.accessibility.AccessibilityNodeInfo;
/* loaded from: classes.dex */
class AccessibilityNodeInfoCompatKitKat {

    AccessibilityNodeInfoCompatKitKat() {

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static int getLiveRegion(Object info) {

        return ((AccessibilityNodeInfo) info).getLiveRegion();
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static void setLiveRegion(Object info, int mode) {

        ((AccessibilityNodeInfo) info).setLiveRegion(mode);
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static Object getCollectionInfo(Object info) {

        return ((AccessibilityNodeInfo) info).getCollectionInfo();
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static Object getCollectionItemInfo(Object info) {

        return ((AccessibilityNodeInfo) info).getCollectionItemInfo();
    }


    static void setCollectionInfo(Object info, Object collectionInfo) {

        ((AccessibilityNodeInfo) info).setCollectionInfo((AccessibilityNodeInfo.CollectionInfo) collectionInfo);
    }


    static void setCollectionItemInfo(Object info, Object collectionItemInfo) {

        ((AccessibilityNodeInfo) info).setCollectionItemInfo((AccessibilityNodeInfo.CollectionItemInfo) collectionItemInfo);
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static Object getRangeInfo(Object info) {

        return ((AccessibilityNodeInfo) info).getRangeInfo();
    }


    static void setRangeInfo(Object info, Object rangeInfo) {

        ((AccessibilityNodeInfo) info).setRangeInfo((AccessibilityNodeInfo.RangeInfo) rangeInfo);
    }


    static Object obtainCollectionInfo(int rowCount, int columnCount, boolean hierarchical, int selectionMode) {

        return AccessibilityNodeInfo.CollectionInfo.obtain(rowCount, columnCount, hierarchical);
    }


    static Object obtainCollectionItemInfo(int rowIndex, int rowSpan, int columnIndex, int columnSpan, boolean heading) {

        return AccessibilityNodeInfo.CollectionItemInfo.obtain(rowIndex, rowSpan, columnIndex, columnSpan, heading);
    }


    static void setContentInvalid(Object info, boolean contentInvalid) {

        ((AccessibilityNodeInfo) info).setContentInvalid(contentInvalid);
    }


    static boolean isContentInvalid(Object info) {

        return ((AccessibilityNodeInfo) info).isContentInvalid();
    }


    static boolean canOpenPopup(Object info) {

        return ((AccessibilityNodeInfo) info).canOpenPopup();
    }


    static void setCanOpenPopup(Object info, boolean opensPopup) {

        ((AccessibilityNodeInfo) info).setCanOpenPopup(opensPopup);
    }


    static Bundle getExtras(Object info) {

        return ((AccessibilityNodeInfo) info).getExtras();
    }


    static int getInputType(Object info) {

        return ((AccessibilityNodeInfo) info).getInputType();
    }


    static void setInputType(Object info, int inputType) {

        ((AccessibilityNodeInfo) info).setInputType(inputType);
    }


    static boolean isDismissable(Object info) {

        return ((AccessibilityNodeInfo) info).isDismissable();
    }


    static void setDismissable(Object info, boolean dismissable) {

        ((AccessibilityNodeInfo) info).setDismissable(dismissable);
    }


    static boolean isMultiLine(Object info) {

        return ((AccessibilityNodeInfo) info).isMultiLine();
    }


    static void setMultiLine(Object info, boolean multiLine) {

        ((AccessibilityNodeInfo) info).setMultiLine(multiLine);
    }


    /* loaded from: classes.dex */
    static class CollectionInfo {

        CollectionInfo() {

        }


        /* JADX INFO: Access modifiers changed from: package-private */
        static int getColumnCount(Object info) {

            return ((AccessibilityNodeInfo.CollectionInfo) info).getColumnCount();
        }


        /* JADX INFO: Access modifiers changed from: package-private */
        static int getRowCount(Object info) {

            return ((AccessibilityNodeInfo.CollectionInfo) info).getRowCount();
        }


        /* JADX INFO: Access modifiers changed from: package-private */
        static boolean isHierarchical(Object info) {

            return ((AccessibilityNodeInfo.CollectionInfo) info).isHierarchical();
        }

    }


    /* loaded from: classes.dex */
    static class CollectionItemInfo {

        CollectionItemInfo() {

        }


        /* JADX INFO: Access modifiers changed from: package-private */
        static int getColumnIndex(Object info) {

            return ((AccessibilityNodeInfo.CollectionItemInfo) info).getColumnIndex();
        }


        /* JADX INFO: Access modifiers changed from: package-private */
        static int getColumnSpan(Object info) {

            return ((AccessibilityNodeInfo.CollectionItemInfo) info).getColumnSpan();
        }


        /* JADX INFO: Access modifiers changed from: package-private */
        static int getRowIndex(Object info) {

            return ((AccessibilityNodeInfo.CollectionItemInfo) info).getRowIndex();
        }


        /* JADX INFO: Access modifiers changed from: package-private */
        static int getRowSpan(Object info) {

            return ((AccessibilityNodeInfo.CollectionItemInfo) info).getRowSpan();
        }


        /* JADX INFO: Access modifiers changed from: package-private */
        static boolean isHeading(Object info) {

            return ((AccessibilityNodeInfo.CollectionItemInfo) info).isHeading();
        }

    }


    /* loaded from: classes.dex */
    static class RangeInfo {

        RangeInfo() {

        }


        /* JADX INFO: Access modifiers changed from: package-private */
        static float getCurrent(Object info) {

            return ((AccessibilityNodeInfo.RangeInfo) info).getCurrent();
        }


        /* JADX INFO: Access modifiers changed from: package-private */
        static float getMax(Object info) {

            return ((AccessibilityNodeInfo.RangeInfo) info).getMax();
        }


        /* JADX INFO: Access modifiers changed from: package-private */
        static float getMin(Object info) {

            return ((AccessibilityNodeInfo.RangeInfo) info).getMin();
        }


        /* JADX INFO: Access modifiers changed from: package-private */
        static int getType(Object info) {

            return ((AccessibilityNodeInfo.RangeInfo) info).getType();
        }

    }

}

