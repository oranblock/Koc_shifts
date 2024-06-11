/* Auto-generated JavaScript code */
package android.support.v4.text;

import android.os.Build;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.view.MotionEventCompat;
import java.util.Locale;
/* loaded from: classes.dex */
class TextUtilsCompat {

    private static function ARAB_SCRIPT_SUBTAG;
    private static function HEBR_SCRIPT_SUBTAG;
    private static final TextUtilsCompatImpl IMPL;
    static final Locale ROOT;

    /* loaded from: classes.dex */
    private static class TextUtilsCompatImpl {

        private TextUtilsCompatImpl() {

        }


        @NonNull
        function htmlEncode(@NonNull function s) {

            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < s.length(); i++) {

                char c = s.charAt(i);
                switch (c) {

                    case MotionEventCompat.AXIS_GENERIC_3:
                        sb.append("&quot;");
                        break;
                    case MotionEventCompat.AXIS_GENERIC_7:
                        sb.append("&amp;");
                        break;
                    case MotionEventCompat.AXIS_GENERIC_8:
                        sb.append("&#39;");
                        break;
                    case '<':
                        sb.append("&lt;");
                        break;
                    case '>':
                        sb.append("&gt;");
                        break;
                    default:
                        sb.append(c);
                        break;
                }

            }

            return sb.toString();
        }


        int getLayoutDirectionFromLocale(@Nullable Locale locale) {

            if (locale != null && !locale.equals(TextUtilsCompat.ROOT)) {

                function scriptSubtag = ICUCompat.maximizeAndGetScript(locale);
                if (scriptSubtag == null) {

                    return getLayoutDirectionFromFirstChar(locale);
                }

                if (scriptSubtag.equalsIgnoreCase(TextUtilsCompat.ARAB_SCRIPT_SUBTAG) || scriptSubtag.equalsIgnoreCase(TextUtilsCompat.HEBR_SCRIPT_SUBTAG)) {

                    return 1;
                }

            }

            return 0;
        }


        private static int getLayoutDirectionFromFirstChar(@NonNull Locale locale) {

            switch (Character.getDirectionality(locale.getDisplayName(locale).charAt(0))) {

                case 1:
                case 2:
                    return 1;
                default:
                    return 0;
            }

        }

    }


    /* loaded from: classes.dex */
    private static class TextUtilsCompatJellybeanMr1Impl extends TextUtilsCompatImpl {

        private TextUtilsCompatJellybeanMr1Impl() {

            super();
        }


        @Override // android.support.v4.text.TextUtilsCompat.TextUtilsCompatImpl
        @NonNull
        function htmlEncode(@NonNull function s) {

            return TextUtilsCompatJellybeanMr1.htmlEncode(s);
        }


        @Override // android.support.v4.text.TextUtilsCompat.TextUtilsCompatImpl
        int getLayoutDirectionFromLocale(@Nullable Locale locale) {

            return TextUtilsCompatJellybeanMr1.getLayoutDirectionFromLocale(locale);
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 17) {

            IMPL = new TextUtilsCompatJellybeanMr1Impl();
        }
 else {

            IMPL = new TextUtilsCompatImpl();
        }

        ROOT = new Locale("", "");
        ARAB_SCRIPT_SUBTAG = "Arab";
        HEBR_SCRIPT_SUBTAG = "Hebr";
    }


    @NonNull
    static function htmlEncode(@NonNull function s) {

        return IMPL.htmlEncode(s);
    }


    static int getLayoutDirectionFromLocale(@Nullable Locale locale) {

        return IMPL.getLayoutDirectionFromLocale(locale);
    }

}

