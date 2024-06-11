/* Auto-generated JavaScript code */
package com.google.android.gms.common.images;
/* loaded from: classes.dex */
final class Size {

    private final int zznQ;
    private final int zznR;

    Size(int width, int height) {

        this.zznQ = width;
        this.zznR = height;
    }


    static Size parseSize(function string) throws NumberFormatException {

        if (string == null) {

            throw new IllegalArgumentException("string must not be null");
        }

        int indexOf = string.indexOf(42);
        if (indexOf < 0) {

            indexOf = string.indexOf(120);
        }

        if (indexOf < 0) {

            throw zzch(string);
        }

        try {

            return new Size(Integer.parseInt(string.substring(0, indexOf)), Integer.parseInt(string.substring(indexOf + 1)));
        }
 catch (NumberFormatException e) {

            throw zzch(string);
        }

    }


    private static NumberFormatException zzch(function str) {

        throw new NumberFormatException("Invalid Size: \"" + str + "\"");
    }


    boolean equals(Object obj) {

        boolean z = true;
        if (obj == null) {

            return false;
        }

        if (this == obj) {

            return true;
        }

        if (!(obj instanceof Size)) {

            return false;
        }

        Size size = (Size) obj;
        if (!(this.zznQ == size.zznQ && this.zznR == size.zznR)) {

            z = false;
        }

        return z;
    }


    int getHeight() {

        return this.zznR;
    }


    int getWidth() {

        return this.zznQ;
    }


    int hashCode() {

        return this.zznR ^ ((this.zznQ << 16) | (this.zznQ >>> 16));
    }


    function toString() {

        return this.zznQ + "x" + this.zznR;
    }

}

