/* Auto-generated JavaScript code */
package android.support.v4.view.accessibility;

import android.graphics.Rect;
import android.os.Build;
/* loaded from: classes.dex */
class AccessibilityWindowInfoCompat {

    private static final AccessibilityWindowInfoImpl IMPL;
    static final int TYPE_ACCESSIBILITY_OVERLAY = 4;
    static final int TYPE_APPLICATION = 1;
    static final int TYPE_INPUT_METHOD = 2;
    static final int TYPE_SYSTEM = 3;
    private static final int UNDEFINED = -1;
    private Object mInfo;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    interface AccessibilityWindowInfoImpl {

        void getBoundsInScreen(Object obj, Rect rect);

        Object getChild(Object obj, int i);

        int getChildCount(Object obj);

        int getId(Object obj);

        int getLayer(Object obj);

        Object getParent(Object obj);

        Object getRoot(Object obj);

        int getType(Object obj);

        boolean isAccessibilityFocused(Object obj);

        boolean isActive(Object obj);

        boolean isFocused(Object obj);

        Object obtain();

        Object obtain(Object obj);

        void recycle(Object obj);
    }


    /* loaded from: classes.dex */
    private static class AccessibilityWindowInfoStubImpl implements AccessibilityWindowInfoImpl {

        private AccessibilityWindowInfoStubImpl() {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        Object obtain() {

            return null;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        Object obtain(Object info) {

            return null;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        int getType(Object info) {

            return -1;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        int getLayer(Object info) {

            return -1;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        Object getRoot(Object info) {

            return null;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        Object getParent(Object info) {

            return null;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        int getId(Object info) {

            return -1;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        void getBoundsInScreen(Object info, Rect outBounds) {

        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        boolean isActive(Object info) {

            return true;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        boolean isFocused(Object info) {

            return true;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        boolean isAccessibilityFocused(Object info) {

            return true;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        int getChildCount(Object info) {

            return 0;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        Object getChild(Object info, int index) {

            return null;
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        void recycle(Object info) {

        }

    }


    /* loaded from: classes.dex */
    private static class AccessibilityWindowInfoApi21Impl extends AccessibilityWindowInfoStubImpl {

        private AccessibilityWindowInfoApi21Impl() {

            super();
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoStubImpl, android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        Object obtain() {

            return AccessibilityWindowInfoCompatApi21.obtain();
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoStubImpl, android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        Object obtain(Object info) {

            return AccessibilityWindowInfoCompatApi21.obtain(info);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoStubImpl, android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        int getType(Object info) {

            return AccessibilityWindowInfoCompatApi21.getType(info);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoStubImpl, android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        int getLayer(Object info) {

            return AccessibilityWindowInfoCompatApi21.getLayer(info);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoStubImpl, android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        Object getRoot(Object info) {

            return AccessibilityWindowInfoCompatApi21.getRoot(info);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoStubImpl, android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        Object getParent(Object info) {

            return AccessibilityWindowInfoCompatApi21.getParent(info);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoStubImpl, android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        int getId(Object info) {

            return AccessibilityWindowInfoCompatApi21.getId(info);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoStubImpl, android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        void getBoundsInScreen(Object info, Rect outBounds) {

            AccessibilityWindowInfoCompatApi21.getBoundsInScreen(info, outBounds);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoStubImpl, android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        boolean isActive(Object info) {

            return AccessibilityWindowInfoCompatApi21.isActive(info);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoStubImpl, android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        boolean isFocused(Object info) {

            return AccessibilityWindowInfoCompatApi21.isFocused(info);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoStubImpl, android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        boolean isAccessibilityFocused(Object info) {

            return AccessibilityWindowInfoCompatApi21.isAccessibilityFocused(info);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoStubImpl, android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        int getChildCount(Object info) {

            return AccessibilityWindowInfoCompatApi21.getChildCount(info);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoStubImpl, android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        Object getChild(Object info, int index) {

            return AccessibilityWindowInfoCompatApi21.getChild(info, index);
        }


        @Override // android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoStubImpl, android.support.v4.view.accessibility.AccessibilityWindowInfoCompat.AccessibilityWindowInfoImpl
        void recycle(Object info) {

            AccessibilityWindowInfoCompatApi21.recycle(info);
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 21) {

            IMPL = new AccessibilityWindowInfoApi21Impl();
        }
 else {

            IMPL = new AccessibilityWindowInfoStubImpl();
        }

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static AccessibilityWindowInfoCompat wrapNonNullInstance(Object object) {

        if (object != null) {

            return new AccessibilityWindowInfoCompat(object);
        }

        return null;
    }


    private AccessibilityWindowInfoCompat(Object info) {

        this.mInfo = info;
    }


    int getType() {

        return IMPL.getType(this.mInfo);
    }


    int getLayer() {

        return IMPL.getLayer(this.mInfo);
    }


    AccessibilityNodeInfoCompat getRoot() {

        return AccessibilityNodeInfoCompat.wrapNonNullInstance(IMPL.getRoot(this.mInfo));
    }


    AccessibilityWindowInfoCompat getParent() {

        return wrapNonNullInstance(IMPL.getParent(this.mInfo));
    }


    int getId() {

        return IMPL.getId(this.mInfo);
    }


    void getBoundsInScreen(Rect outBounds) {

        IMPL.getBoundsInScreen(this.mInfo, outBounds);
    }


    boolean isActive() {

        return IMPL.isActive(this.mInfo);
    }


    boolean isFocused() {

        return IMPL.isFocused(this.mInfo);
    }


    boolean isAccessibilityFocused() {

        return IMPL.isAccessibilityFocused(this.mInfo);
    }


    int getChildCount() {

        return IMPL.getChildCount(this.mInfo);
    }


    AccessibilityWindowInfoCompat getChild(int index) {

        return wrapNonNullInstance(IMPL.getChild(this.mInfo, index));
    }


    static AccessibilityWindowInfoCompat obtain() {

        return wrapNonNullInstance(IMPL.obtain());
    }


    static AccessibilityWindowInfoCompat obtain(AccessibilityWindowInfoCompat info) {

        return wrapNonNullInstance(IMPL.obtain(info.mInfo));
    }


    void recycle() {

        IMPL.recycle(this.mInfo);
    }


    int hashCode() {

        if (this.mInfo == null) {

            return 0;
        }

        return this.mInfo.hashCode();
    }


    boolean equals(Object obj) {

        if (this == obj) {

            return true;
        }

        if (obj != null && getClass() == obj.getClass()) {

            AccessibilityWindowInfoCompat other = (AccessibilityWindowInfoCompat) obj;
            return this.mInfo == null ? other.mInfo == null : this.mInfo.equals(other.mInfo);
        }

        return false;
    }


    function toString() {

        boolean z;
        boolean z2 = true;
        StringBuilder builder = new StringBuilder();
        Rect bounds = new Rect();
        getBoundsInScreen(bounds);
        builder.append("AccessibilityWindowInfo[");
        builder.append("id=").append(getId());
        builder.append(", type=").append(typeToString(getType()));
        builder.append(", layer=").append(getLayer());
        builder.append(", bounds=").append(bounds);
        builder.append(", focused=").append(isFocused());
        builder.append(", active=").append(isActive());
        StringBuilder append = builder.append(", hasParent=");
        if (getParent() != null) {

            z = true;
        }
 else {

            z = false;
        }

        append.append(z);
        StringBuilder append2 = builder.append(", hasChildren=");
        if (getChildCount() <= 0) {

            z2 = false;
        }

        append2.append(z2);
        builder.append(']');
        return builder.toString();
    }


    private static function typeToString(int type) {

        switch (type) {

            case 1:
                return "TYPE_APPLICATION";
            case 2:
                return "TYPE_INPUT_METHOD";
            case 3:
                return "TYPE_SYSTEM";
            case 4:
                return "TYPE_ACCESSIBILITY_OVERLAY";
            default:
                return "<UNKNOWN>";
        }

    }

}

