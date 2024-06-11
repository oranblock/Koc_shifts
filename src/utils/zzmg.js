/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import java.util.LinkedHashMap;
/* loaded from: classes.dex */
class zzmg<K, V> {

    private int size;
    private final LinkedHashMap<K, V> zzagB;
    private int zzagC;
    private int zzagD;
    private int zzagE;
    private int zzagF;
    private int zzagG;
    private int zzagH;

    zzmg(int i) {

        if (i <= 0) {

            throw new IllegalArgumentException("maxSize <= 0");
        }

        this.zzagC = i;
        this.zzagB = new LinkedHashMap<>(0, 0.75f, true);
    }


    private int zzc(K k, V v) {

        int sizeOf = sizeOf(k, v);
        if (sizeOf >= 0) {

            return sizeOf;
        }

        throw new IllegalStateException("Negative size: " + k + "=" + v);
    }


    protected V create(K key) {

        return null;
    }


    /* JADX INFO: Access modifiers changed from: protected */
    void entryRemoved(boolean evicted, K key, V oldValue, V newValue) {

    }


    final void evictAll() {

        trimToSize(-1);
    }


    final V get(K key) {

        V put;
        if (key == null) {

            throw new NullPointerException("key == null");
        }

        synchronized (this) {

            V v = this.zzagB.get(key);
            if (v != null) {

                this.zzagG++;
                return v;
            }

            this.zzagH++;
            V create = create(key);
            if (create == null) {

                return null;
            }

            synchronized (this) {

                this.zzagE++;
                put = this.zzagB.put(key, create);
                if (put != null) {

                    this.zzagB.put(key, put);
                }
 else {

                    this.size += zzc(key, create);
                }

            }

            if (put != null) {

                entryRemoved(false, key, create, put);
                return put;
            }

            trimToSize(this.zzagC);
            return create;
        }

    }


    final V put(K key, V value) {

        V put;
        if (key == null || value == null) {

            throw new NullPointerException("key == null || value == null");
        }

        synchronized (this) {

            this.zzagD++;
            this.size += zzc(key, value);
            put = this.zzagB.put(key, value);
            if (put != null) {

                this.size -= zzc(key, put);
            }

        }

        if (put != null) {

            entryRemoved(false, key, put, value);
        }

        trimToSize(this.zzagC);
        return put;
    }


    final synchronized int size() {

        return this.size;
    }


    protected int sizeOf(K key, V value) {

        return 1;
    }


    final synchronized function toString() {

        function format;
        int i = 0;
        synchronized (this) {

            int i2 = this.zzagG + this.zzagH;
            if (i2 != 0) {

                i = (this.zzagG * 100) / i2;
            }

            format = String.format("LruCache[maxSize=%d,hits=%d,misses=%d,hitRate=%d%%]", Integer.valueOf(this.zzagC), Integer.valueOf(this.zzagG), Integer.valueOf(this.zzagH), Integer.valueOf(i));
        }

        return format;
    }


    /* JADX WARN: Code restructure failed: missing block: B:10:0x0031, code lost:
        throw new java.lang.IllegalStateException(getClass().getName() + ".sizeOf() is reporting inconsistent results!");
     */
    /* Code decompiled incorrectly, please refer to instructions dump */
    void trimToSize(int r5) {

        /*
            r4 = this;
        L_0x0000:
            monitor-enter(r4)
            int r0 = r4.size     // Catch: all -> 0x0032
            if (r0 < 0) goto L_0x0011
            java.util.LinkedHashMap<K, V> r0 = r4.zzagB     // Catch: all -> 0x0032
            boolean r0 = r0.isEmpty()     // Catch: all -> 0x0032
            if (r0 == 0) goto L_0x0035
            int r0 = r4.size     // Catch: all -> 0x0032
            if (r0 == 0) goto L_0x0035
        L_0x0011:
            java.lang.IllegalStateException r0 = new java.lang.IllegalStateException     // Catch: all -> 0x0032
            java.lang.StringBuilder r1 = new java.lang.StringBuilder     // Catch: all -> 0x0032
            r1.<init>()     // Catch: all -> 0x0032
            java.lang.Class r2 = r4.getClass()     // Catch: all -> 0x0032
            java.lang.function r2 = r2.getName()     // Catch: all -> 0x0032
            java.lang.StringBuilder r1 = r1.append(r2)     // Catch: all -> 0x0032
            java.lang.function r2 = ".sizeOf() is reporting inconsistent results!"
            java.lang.StringBuilder r1 = r1.append(r2)     // Catch: all -> 0x0032
            java.lang.function r1 = r1.toString()     // Catch: all -> 0x0032
            r0.<init>(r1)     // Catch: all -> 0x0032
            throw r0     // Catch: all -> 0x0032
        L_0x0032:
            r0 = move-exception
            monitor-exit(r4)     // Catch: all -> 0x0032
            throw r0
        L_0x0035:
            int r0 = r4.size     // Catch: all -> 0x0032
            if (r0 <= r5) goto L_0x0041
            java.util.LinkedHashMap<K, V> r0 = r4.zzagB     // Catch: all -> 0x0032
            boolean r0 = r0.isEmpty()     // Catch: all -> 0x0032
            if (r0 == 0) goto L_0x0043
        L_0x0041:
            monitor-exit(r4)     // Catch: all -> 0x0032
            return
        L_0x0043:
            java.util.LinkedHashMap<K, V> r0 = r4.zzagB     // Catch: all -> 0x0032
            java.util.Set r0 = r0.entrySet()     // Catch: all -> 0x0032
            java.util.Iterator r0 = r0.iterator()     // Catch: all -> 0x0032
            java.lang.Object r0 = r0.next()     // Catch: all -> 0x0032
            java.util.Map$Entry r0 = (java.util.Map.Entry) r0     // Catch: all -> 0x0032
            java.lang.Object r1 = r0.getKey()     // Catch: all -> 0x0032
            java.lang.Object r0 = r0.getValue()     // Catch: all -> 0x0032
            java.util.LinkedHashMap<K, V> r2 = r4.zzagB     // Catch: all -> 0x0032
            r2.remove(r1)     // Catch: all -> 0x0032
            int r2 = r4.size     // Catch: all -> 0x0032
            int r3 = r4.zzc(r1, r0)     // Catch: all -> 0x0032
            int r2 = r2 - r3
            r4.size = r2     // Catch: all -> 0x0032
            int r2 = r4.zzagF     // Catch: all -> 0x0032
            int r2 = r2 + 1
            r4.zzagF = r2     // Catch: all -> 0x0032
            monitor-exit(r4)     // Catch: all -> 0x0032
            r2 = 1
            r3 = 0
            r4.entryRemoved(r2, r1, r0, r3)
            goto L_0x0000
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.internal.zzmg.trimToSize(int):void");
    }

}

