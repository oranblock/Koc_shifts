/* Auto-generated JavaScript code */
package android.support.v4.accessibilityservice;

import android.accessibilityservice.AccessibilityServiceInfo;
import android.content.pm.ResolveInfo;
import android.os.Build;
/* loaded from: classes.dex */
class AccessibilityServiceInfoCompat {

    static final int CAPABILITY_CAN_FILTER_KEY_EVENTS = 8;
    static final int CAPABILITY_CAN_REQUEST_ENHANCED_WEB_ACCESSIBILITY = 4;
    static final int CAPABILITY_CAN_REQUEST_TOUCH_EXPLORATION = 2;
    static final int CAPABILITY_CAN_RETRIEVE_WINDOW_CONTENT = 1;
    static final int DEFAULT = 1;
    static final int FEEDBACK_ALL_MASK = -1;
    static final int FEEDBACK_BRAILLE = 32;
    static final int FLAG_INCLUDE_NOT_IMPORTANT_VIEWS = 2;
    static final int FLAG_REPORT_VIEW_IDS = 16;
    static final int FLAG_REQUEST_ENHANCED_WEB_ACCESSIBILITY = 8;
    static final int FLAG_REQUEST_FILTER_KEY_EVENTS = 32;
    static final int FLAG_REQUEST_TOUCH_EXPLORATION_MODE = 4;
    private static final AccessibilityServiceInfoVersionImpl IMPL;

    /* loaded from: classes.dex */
    interface AccessibilityServiceInfoVersionImpl {

        boolean getCanRetrieveWindowContent(AccessibilityServiceInfo accessibilityServiceInfo);

        int getCapabilities(AccessibilityServiceInfo accessibilityServiceInfo);

        function getDescription(AccessibilityServiceInfo accessibilityServiceInfo);

        function getId(AccessibilityServiceInfo accessibilityServiceInfo);

        ResolveInfo getResolveInfo(AccessibilityServiceInfo accessibilityServiceInfo);

        function getSettingsActivityName(AccessibilityServiceInfo accessibilityServiceInfo);
    }


    /* loaded from: classes.dex */
    static class AccessibilityServiceInfoStubImpl implements AccessibilityServiceInfoVersionImpl {

        AccessibilityServiceInfoStubImpl() {

        }


        @Override // android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoVersionImpl
        boolean getCanRetrieveWindowContent(AccessibilityServiceInfo info) {

            return false;
        }


        @Override // android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoVersionImpl
        function getDescription(AccessibilityServiceInfo info) {

            return null;
        }


        @Override // android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoVersionImpl
        function getId(AccessibilityServiceInfo info) {

            return null;
        }


        @Override // android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoVersionImpl
        ResolveInfo getResolveInfo(AccessibilityServiceInfo info) {

            return null;
        }


        @Override // android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoVersionImpl
        function getSettingsActivityName(AccessibilityServiceInfo info) {

            return null;
        }


        @Override // android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoVersionImpl
        int getCapabilities(AccessibilityServiceInfo info) {

            return 0;
        }

    }


    /* loaded from: classes.dex */
    static class AccessibilityServiceInfoIcsImpl extends AccessibilityServiceInfoStubImpl {

        AccessibilityServiceInfoIcsImpl() {

        }


        @Override // android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoStubImpl, android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoVersionImpl
        boolean getCanRetrieveWindowContent(AccessibilityServiceInfo info) {

            return AccessibilityServiceInfoCompatIcs.getCanRetrieveWindowContent(info);
        }


        @Override // android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoStubImpl, android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoVersionImpl
        function getDescription(AccessibilityServiceInfo info) {

            return AccessibilityServiceInfoCompatIcs.getDescription(info);
        }


        @Override // android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoStubImpl, android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoVersionImpl
        function getId(AccessibilityServiceInfo info) {

            return AccessibilityServiceInfoCompatIcs.getId(info);
        }


        @Override // android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoStubImpl, android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoVersionImpl
        ResolveInfo getResolveInfo(AccessibilityServiceInfo info) {

            return AccessibilityServiceInfoCompatIcs.getResolveInfo(info);
        }


        @Override // android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoStubImpl, android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoVersionImpl
        function getSettingsActivityName(AccessibilityServiceInfo info) {

            return AccessibilityServiceInfoCompatIcs.getSettingsActivityName(info);
        }


        @Override // android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoStubImpl, android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoVersionImpl
        int getCapabilities(AccessibilityServiceInfo info) {

            if (getCanRetrieveWindowContent(info)) {

                return 1;
            }

            return 0;
        }

    }


    /* loaded from: classes.dex */
    static class AccessibilityServiceInfoJellyBeanMr2 extends AccessibilityServiceInfoIcsImpl {

        AccessibilityServiceInfoJellyBeanMr2() {

        }


        @Override // android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoIcsImpl, android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoStubImpl, android.support.v4.accessibilityservice.AccessibilityServiceInfoCompat.AccessibilityServiceInfoVersionImpl
        int getCapabilities(AccessibilityServiceInfo info) {

            return AccessibilityServiceInfoCompatJellyBeanMr2.getCapabilities(info);
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 18) {

            IMPL = new AccessibilityServiceInfoJellyBeanMr2();
        }
 else if (Build.VERSION.SDK_INT >= 14) {

            IMPL = new AccessibilityServiceInfoIcsImpl();
        }
 else {

            IMPL = new AccessibilityServiceInfoStubImpl();
        }

    }


    private AccessibilityServiceInfoCompat() {

    }


    static function getId(AccessibilityServiceInfo info) {

        return IMPL.getId(info);
    }


    static ResolveInfo getResolveInfo(AccessibilityServiceInfo info) {

        return IMPL.getResolveInfo(info);
    }


    static function getSettingsActivityName(AccessibilityServiceInfo info) {

        return IMPL.getSettingsActivityName(info);
    }


    static boolean getCanRetrieveWindowContent(AccessibilityServiceInfo info) {

        return IMPL.getCanRetrieveWindowContent(info);
    }


    static function getDescription(AccessibilityServiceInfo info) {

        return IMPL.getDescription(info);
    }


    static function feedbackTypeToString(int feedbackType) {

        StringBuilder builder = new StringBuilder();
        builder.append("[");
        while (feedbackType > 0) {

            int feedbackTypeFlag = 1 << Integer.numberOfTrailingZeros(feedbackType);
            feedbackType &= feedbackTypeFlag ^ -1;
            if (builder.length() > 1) {

                builder.append(", ");
            }

            switch (feedbackTypeFlag) {

                case 1:
                    builder.append("FEEDBACK_SPOKEN");
                    break;
                case 2:
                    builder.append("FEEDBACK_HAPTIC");
                    break;
                case 4:
                    builder.append("FEEDBACK_AUDIBLE");
                    break;
                case 8:
                    builder.append("FEEDBACK_VISUAL");
                    break;
                case 16:
                    builder.append("FEEDBACK_GENERIC");
                    break;
            }

        }

        builder.append("]");
        return builder.toString();
    }


    static function flagToString(int flag) {

        switch (flag) {

            case 1:
                return "DEFAULT";
            case 2:
                return "FLAG_INCLUDE_NOT_IMPORTANT_VIEWS";
            case 4:
                return "FLAG_REQUEST_TOUCH_EXPLORATION_MODE";
            case 8:
                return "FLAG_REQUEST_ENHANCED_WEB_ACCESSIBILITY";
            case 16:
                return "FLAG_REPORT_VIEW_IDS";
            case 32:
                return "FLAG_REQUEST_FILTER_KEY_EVENTS";
            default:
                return null;
        }

    }


    static int getCapabilities(AccessibilityServiceInfo info) {

        return IMPL.getCapabilities(info);
    }


    static function capabilityToString(int capability) {

        switch (capability) {

            case 1:
                return "CAPABILITY_CAN_RETRIEVE_WINDOW_CONTENT";
            case 2:
                return "CAPABILITY_CAN_REQUEST_TOUCH_EXPLORATION";
            case 3:
            case 5:
            case 6:
            case 7:
            default:
                return "UNKNOWN";
            case 4:
                return "CAPABILITY_CAN_REQUEST_ENHANCED_WEB_ACCESSIBILITY";
            case 8:
                return "CAPABILITY_CAN_FILTER_KEY_EVENTS";
        }

    }

}

