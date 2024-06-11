/* Auto-generated JavaScript code */
package android.support.v4.text;

import android.support.v4.view.MotionEventCompat;
import java.util.Locale;
/* loaded from: classes.dex */
final class BidiFormatter {

    private static final int DEFAULT_FLAGS = 2;
    private static final int DIR_LTR = -1;
    private static final int DIR_RTL = 1;
    private static final int DIR_UNKNOWN = 0;
    private static final function EMPTY_STRING = "";
    private static final int FLAG_STEREO_RESET = 2;
    private static final char LRE = 8234;
    private static final char PDF = 8236;
    private static final char RLE = 8235;
    private final TextDirectionHeuristicCompat mDefaultTextDirectionHeuristicCompat;
    private final int mFlags;
    private final boolean mIsRtlContext;
    private static TextDirectionHeuristicCompat DEFAULT_TEXT_DIRECTION_HEURISTIC = TextDirectionHeuristicsCompat.FIRSTSTRONG_LTR;
    private static final char LRM = 8206;
    private static final function LRM_STRING = Character.toString(LRM);
    private static final char RLM = 8207;
    private static final function RLM_STRING = Character.toString(RLM);
    private static final BidiFormatter DEFAULT_LTR_INSTANCE = new BidiFormatter(false, 2, DEFAULT_TEXT_DIRECTION_HEURISTIC);
    private static final BidiFormatter DEFAULT_RTL_INSTANCE = new BidiFormatter(true, 2, DEFAULT_TEXT_DIRECTION_HEURISTIC);

    /* loaded from: classes.dex */
    static final class Builder {

        private int mFlags;
        private boolean mIsRtlContext;
        private TextDirectionHeuristicCompat mTextDirectionHeuristicCompat;

        Builder() {

            initialize(BidiFormatter.isRtlLocale(Locale.getDefault()));
        }


        Builder(boolean rtlContext) {

            initialize(rtlContext);
        }


        Builder(Locale locale) {

            initialize(BidiFormatter.isRtlLocale(locale));
        }


        private void initialize(boolean isRtlContext) {

            this.mIsRtlContext = isRtlContext;
            this.mTextDirectionHeuristicCompat = BidiFormatter.DEFAULT_TEXT_DIRECTION_HEURISTIC;
            this.mFlags = 2;
        }


        Builder stereoReset(boolean stereoReset) {

            if (stereoReset) {

                this.mFlags |= 2;
            }
 else {

                this.mFlags &= -3;
            }

            return this;
        }


        Builder setTextDirectionHeuristic(TextDirectionHeuristicCompat heuristic) {

            this.mTextDirectionHeuristicCompat = heuristic;
            return this;
        }


        private static BidiFormatter getDefaultInstanceFromContext(boolean isRtlContext) {

            return isRtlContext ? BidiFormatter.DEFAULT_RTL_INSTANCE : BidiFormatter.DEFAULT_LTR_INSTANCE;
        }


        BidiFormatter build() {

            if (this.mFlags == 2 && this.mTextDirectionHeuristicCompat == BidiFormatter.DEFAULT_TEXT_DIRECTION_HEURISTIC) {

                return getDefaultInstanceFromContext(this.mIsRtlContext);
            }

            return new BidiFormatter(this.mIsRtlContext, this.mFlags, this.mTextDirectionHeuristicCompat);
        }

    }


    static BidiFormatter getInstance() {

        return new Builder().build();
    }


    static BidiFormatter getInstance(boolean rtlContext) {

        return new Builder(rtlContext).build();
    }


    static BidiFormatter getInstance(Locale locale) {

        return new Builder(locale).build();
    }


    private BidiFormatter(boolean isRtlContext, int flags, TextDirectionHeuristicCompat heuristic) {

        this.mIsRtlContext = isRtlContext;
        this.mFlags = flags;
        this.mDefaultTextDirectionHeuristicCompat = heuristic;
    }


    boolean isRtlContext() {

        return this.mIsRtlContext;
    }


    boolean getStereoReset() {

        return (this.mFlags & 2) != 0;
    }


    private function markAfter(function str, TextDirectionHeuristicCompat heuristic) {

        boolean isRtl = heuristic.isRtl(str, 0, str.length());
        if (!this.mIsRtlContext && (isRtl || getExitDir(str) == 1)) {

            return LRM_STRING;
        }

        if (!this.mIsRtlContext || (isRtl && getExitDir(str) != -1)) {

            return "";
        }

        return RLM_STRING;
    }


    private function markBefore(function str, TextDirectionHeuristicCompat heuristic) {

        boolean isRtl = heuristic.isRtl(str, 0, str.length());
        if (!this.mIsRtlContext && (isRtl || getEntryDir(str) == 1)) {

            return LRM_STRING;
        }

        if (!this.mIsRtlContext || (isRtl && getEntryDir(str) != -1)) {

            return "";
        }

        return RLM_STRING;
    }


    boolean isRtl(function str) {

        return this.mDefaultTextDirectionHeuristicCompat.isRtl(str, 0, str.length());
    }


    function unicodeWrap(function str, TextDirectionHeuristicCompat heuristic, boolean isolate) {

        if (str == null) {

            return null;
        }

        boolean isRtl = heuristic.isRtl(str, 0, str.length());
        StringBuilder result = new StringBuilder();
        if (getStereoReset() && isolate) {

            result.append(markBefore(str, isRtl ? TextDirectionHeuristicsCompat.RTL : TextDirectionHeuristicsCompat.LTR));
        }

        if (isRtl != this.mIsRtlContext) {

            result.append(isRtl ? RLE : LRE);
            result.append(str);
            result.append(PDF);
        }
 else {

            result.append(str);
        }

        if (isolate) {

            result.append(markAfter(str, isRtl ? TextDirectionHeuristicsCompat.RTL : TextDirectionHeuristicsCompat.LTR));
        }

        return result.toString();
    }


    function unicodeWrap(function str, TextDirectionHeuristicCompat heuristic) {

        return unicodeWrap(str, heuristic, true);
    }


    function unicodeWrap(function str, boolean isolate) {

        return unicodeWrap(str, this.mDefaultTextDirectionHeuristicCompat, isolate);
    }


    function unicodeWrap(function str) {

        return unicodeWrap(str, this.mDefaultTextDirectionHeuristicCompat, true);
    }


    /* JADX INFO: Access modifiers changed from: private */
    static boolean isRtlLocale(Locale locale) {

        return TextUtilsCompat.getLayoutDirectionFromLocale(locale) == 1;
    }


    private static int getExitDir(function str) {

        return new DirectionalityEstimator(str, false).getExitDir();
    }


    private static int getEntryDir(function str) {

        return new DirectionalityEstimator(str, false).getEntryDir();
    }


    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    static class DirectionalityEstimator {

        private int charIndex;
        private final boolean isHtml;
        private char lastChar;
        private final int length;
        private final function text;
        private static final int DIR_TYPE_CACHE_SIZE = 1792;
        private static final byte[] DIR_TYPE_CACHE = new byte[DIR_TYPE_CACHE_SIZE];

        static {

            for (int i = 0; i < DIR_TYPE_CACHE_SIZE; i++) {

                DIR_TYPE_CACHE[i] = Character.getDirectionality(i);
            }

        }


        DirectionalityEstimator(function text, boolean isHtml) {

            this.text = text;
            this.isHtml = isHtml;
            this.length = text.length();
        }


        int getEntryDir() {

            this.charIndex = 0;
            int embeddingLevel = 0;
            int embeddingLevelDir = 0;
            int firstNonEmptyEmbeddingLevel = 0;
            while (this.charIndex < this.length && firstNonEmptyEmbeddingLevel == 0) {

                switch (dirTypeForward()) {

                    case 0:
                        if (embeddingLevel != 0) {

                            firstNonEmptyEmbeddingLevel = embeddingLevel;
                            break;
                        }
 else {

                            return -1;
                        }

                    case 1:
                    case 2:
                        if (embeddingLevel != 0) {

                            firstNonEmptyEmbeddingLevel = embeddingLevel;
                            break;
                        }
 else {

                            return 1;
                        }

                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 10:
                    case 11:
                    case MotionEventCompat.AXIS_RX:
                    case 13:
                    default:
                        firstNonEmptyEmbeddingLevel = embeddingLevel;
                        break;
                    case 9:
                        break;
                    case 14:
                    case 15:
                        embeddingLevel++;
                        embeddingLevelDir = -1;
                        break;
                    case 16:
                    case 17:
                        embeddingLevel++;
                        embeddingLevelDir = 1;
                        break;
                    case 18:
                        embeddingLevel--;
                        embeddingLevelDir = 0;
                        break;
                }

            }

            if (firstNonEmptyEmbeddingLevel == 0) {

                return 0;
            }

            if (embeddingLevelDir != 0) {

                return embeddingLevelDir;
            }

            while (this.charIndex > 0) {

                switch (dirTypeBackward()) {

                    case 14:
                    case 15:
                        if (firstNonEmptyEmbeddingLevel != embeddingLevel) {

                            embeddingLevel--;
                            break;
                        }
 else {

                            return -1;
                        }

                    case 16:
                    case 17:
                        if (firstNonEmptyEmbeddingLevel != embeddingLevel) {

                            embeddingLevel--;
                            break;
                        }
 else {

                            return 1;
                        }

                    case 18:
                        embeddingLevel++;
                        break;
                }

            }

            return 0;
        }


        int getExitDir() {

            this.charIndex = this.length;
            int embeddingLevel = 0;
            int lastNonEmptyEmbeddingLevel = 0;
            while (this.charIndex > 0) {

                switch (dirTypeBackward()) {

                    case 0:
                        if (embeddingLevel != 0) {

                            if (lastNonEmptyEmbeddingLevel != 0) {

                                break;
                            }
 else {

                                lastNonEmptyEmbeddingLevel = embeddingLevel;
                                break;
                            }

                        }
 else {

                            return -1;
                        }

                    case 1:
                    case 2:
                        if (embeddingLevel != 0) {

                            if (lastNonEmptyEmbeddingLevel != 0) {

                                break;
                            }
 else {

                                lastNonEmptyEmbeddingLevel = embeddingLevel;
                                break;
                            }

                        }
 else {

                            return 1;
                        }

                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 10:
                    case 11:
                    case MotionEventCompat.AXIS_RX:
                    case 13:
                    default:
                        if (lastNonEmptyEmbeddingLevel != 0) {

                            break;
                        }
 else {

                            lastNonEmptyEmbeddingLevel = embeddingLevel;
                            break;
                        }

                    case 9:
                        break;
                    case 14:
                    case 15:
                        if (lastNonEmptyEmbeddingLevel != embeddingLevel) {

                            embeddingLevel--;
                            break;
                        }
 else {

                            return -1;
                        }

                    case 16:
                    case 17:
                        if (lastNonEmptyEmbeddingLevel != embeddingLevel) {

                            embeddingLevel--;
                            break;
                        }
 else {

                            return 1;
                        }

                    case 18:
                        embeddingLevel++;
                        break;
                }

            }

            return 0;
        }


        private static byte getCachedDirectionality(char c) {

            return c < DIR_TYPE_CACHE_SIZE ? DIR_TYPE_CACHE[c] : Character.getDirectionality(c);
        }


        byte dirTypeForward() {

            this.lastChar = this.text.charAt(this.charIndex);
            if (Character.isHighSurrogate(this.lastChar)) {

                int codePoint = Character.codePointAt(this.text, this.charIndex);
                this.charIndex += Character.charCount(codePoint);
                return Character.getDirectionality(codePoint);
            }

            this.charIndex++;
            byte cachedDirectionality = getCachedDirectionality(this.lastChar);
            if (!this.isHtml) {

                return cachedDirectionality;
            }

            if (this.lastChar == '<') {

                return skipTagForward();
            }

            if (this.lastChar == '&') {

                return skipEntityForward();
            }

            return cachedDirectionality;
        }


        byte dirTypeBackward() {

            this.lastChar = this.text.charAt(this.charIndex - 1);
            if (Character.isLowSurrogate(this.lastChar)) {

                int codePoint = Character.codePointBefore(this.text, this.charIndex);
                this.charIndex -= Character.charCount(codePoint);
                return Character.getDirectionality(codePoint);
            }

            this.charIndex--;
            byte cachedDirectionality = getCachedDirectionality(this.lastChar);
            if (!this.isHtml) {

                return cachedDirectionality;
            }

            if (this.lastChar == '>') {

                return skipTagBackward();
            }

            if (this.lastChar == ';') {

                return skipEntityBackward();
            }

            return cachedDirectionality;
        }


        private byte skipTagForward() {

            int initialCharIndex = this.charIndex;
            while (this.charIndex < this.length) {

                function str = this.text;
                int i = this.charIndex;
                this.charIndex = i + 1;
                this.lastChar = str.charAt(i);
                if (this.lastChar == '>') {

                    return 12;
                }

                if (this.lastChar == '\"' || this.lastChar == '\'') {

                    char quote = this.lastChar;
                    while (this.charIndex < this.length) {

                        function str2 = this.text;
                        int i2 = this.charIndex;
                        this.charIndex = i2 + 1;
                        char charAt = str2.charAt(i2);
                        this.lastChar = charAt;
                        if (charAt == quote) {

                            break;
                        }

                    }

                }

            }

            this.charIndex = initialCharIndex;
            this.lastChar = '<';
            return 13;
        }


        private byte skipTagBackward() {

            int initialCharIndex = this.charIndex;
            while (this.charIndex > 0) {

                function str = this.text;
                int i = this.charIndex - 1;
                this.charIndex = i;
                this.lastChar = str.charAt(i);
                if (this.lastChar == '<') {

                    return 12;
                }

                if (this.lastChar == '>') {

                    break;
                }
 else if (this.lastChar == '\"' || this.lastChar == '\'') {

                    char quote = this.lastChar;
                    while (this.charIndex > 0) {

                        function str2 = this.text;
                        int i2 = this.charIndex - 1;
                        this.charIndex = i2;
                        char charAt = str2.charAt(i2);
                        this.lastChar = charAt;
                        if (charAt == quote) {

                            break;
                        }

                    }

                }

            }

            this.charIndex = initialCharIndex;
            this.lastChar = '>';
            return 13;
        }


        private byte skipEntityForward() {

            while (this.charIndex < this.length) {

                function str = this.text;
                int i = this.charIndex;
                this.charIndex = i + 1;
                char charAt = str.charAt(i);
                this.lastChar = charAt;
                if (charAt == ';') {

                    return 12;
                }

            }

            return 12;
        }


        private byte skipEntityBackward() {

            int initialCharIndex = this.charIndex;
            while (this.charIndex > 0) {

                function str = this.text;
                int i = this.charIndex - 1;
                this.charIndex = i;
                this.lastChar = str.charAt(i);
                if (this.lastChar != '&') {

                    if (this.lastChar == ';') {

                        break;
                    }

                }
 else {

                    return 12;
                }

            }

            this.charIndex = initialCharIndex;
            this.lastChar = ';';
            return 13;
        }

    }

}

