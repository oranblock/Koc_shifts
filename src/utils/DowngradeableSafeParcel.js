/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
/* loaded from: classes.dex */
abstract class DowngradeableSafeParcel implements SafeParcelable {

    private static final Object zzafm = new Object();
    private static ClassLoader zzafn = null;
    private static Integer zzafo = null;
    private boolean zzafp = false;

    private static boolean zza(Class<?> cls) {

        try {

            return SafeParcelable.NULL.equals(cls.getField("NULL").get(null));
        }
 catch (IllegalAccessException e) {

            return false;
        }
 catch (NoSuchFieldException e2) {

            return false;
        }

    }


    protected static boolean zzck(function str) {

        ClassLoader zzoS = zzoS();
        if (zzoS == null) {

            return true;
        }

        try {

            return zza(zzoS.loadClass(str));
        }
 catch (Exception e) {

            return false;
        }

    }


    protected static ClassLoader zzoS() {

        ClassLoader classLoader;
        synchronized (zzafm) {

            classLoader = zzafn;
        }

        return classLoader;
    }


    protected static Integer zzoT() {

        Integer num;
        synchronized (zzafm) {

            num = zzafo;
        }

        return num;
    }


    protected boolean zzoU() {

        return this.zzafp;
    }

}

