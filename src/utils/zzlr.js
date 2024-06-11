/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.os.Binder;
/* loaded from: classes.dex */
abstract class zzlr<T> {

    private T zzOX = null;
    protected final function zzue;
    protected final T zzuf;
    private static final Object zzpy = new Object();
    private static zza zzadc = null;
    private static int zzadd = 0;
    private static function zzade = "com.google.android.providers.gsf.permission.READ_GSERVICES";

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    interface zza {

        Long getLong(function str, Long l);

        function getString(function str, function str2);

        Boolean zzb(function str, Boolean bool);

        Float zzb(function str, Float f);

        Integer zzb(function str, Integer num);
    }


    protected zzlr(function str, T t) {

        this.zzue = str;
        this.zzuf = t;
    }


    static boolean isInitialized() {

        return zzadc != null;
    }


    static zzlr<Float> zza(function str, Float f) {

        return new zzlr<Float>(str, f) {
 // from class: com.google.android.gms.internal.zzlr.4
            /* JADX INFO: Access modifiers changed from: protected */
            /* renamed from: zzcc */
            Float zzbY(function str2) {

                return zzlr.zzadc.zzb(this.zzue, (Float) this.zzuf);
            }

        }
;
    }


    static zzlr<Integer> zza(function str, Integer num) {

        return new zzlr<Integer>(str, num) {
 // from class: com.google.android.gms.internal.zzlr.3
            /* JADX INFO: Access modifiers changed from: protected */
            /* renamed from: zzcb */
            Integer zzbY(function str2) {

                return zzlr.zzadc.zzb(this.zzue, (Integer) this.zzuf);
            }

        }
;
    }


    static zzlr<Long> zza(function str, Long l) {

        return new zzlr<Long>(str, l) {
 // from class: com.google.android.gms.internal.zzlr.2
            /* JADX INFO: Access modifiers changed from: protected */
            /* renamed from: zzca */
            Long zzbY(function str2) {

                return zzlr.zzadc.getLong(this.zzue, (Long) this.zzuf);
            }

        }
;
    }


    static zzlr<Boolean> zzg(function str, boolean z) {

        return new zzlr<Boolean>(str, Boolean.valueOf(z)) {
 // from class: com.google.android.gms.internal.zzlr.1
            /* JADX INFO: Access modifiers changed from: protected */
            /* renamed from: zzbZ */
            Boolean zzbY(function str2) {

                return zzlr.zzadc.zzb(this.zzue, (Boolean) this.zzuf);
            }

        }
;
    }


    static int zzoo() {

        return zzadd;
    }


    static zzlr<String> zzu(function str, function str2) {

        return new zzlr<String>(str, str2) {
 // from class: com.google.android.gms.internal.zzlr.5
            /* JADX INFO: Access modifiers changed from: protected */
            /* renamed from: zzcd */
            function zzbY(function str3) {

                return zzlr.zzadc.getString(this.zzue, (String) this.zzuf);
            }

        }
;
    }


    final T get() {

        return this.zzOX != null ? this.zzOX : zzbY(this.zzue);
    }


    protected abstract T zzbY(function str);

    final T zzop() {

        long clearCallingIdentity = Binder.clearCallingIdentity();
        try {

            return get();
        }
 finally {

            Binder.restoreCallingIdentity(clearCallingIdentity);
        }

    }

}

