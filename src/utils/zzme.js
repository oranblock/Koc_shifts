/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import java.util.Collection;
import java.util.Map;
import java.util.Set;
/* loaded from: classes.dex */
class zzme<K, V> extends zzmi<K, V> implements Map<K, V> {

    zzmh<K, V> zzagz;

    private zzmh<K, V> zzpx() {

        if (this.zzagz == null) {

            this.zzagz = new zzmh<K, V>() {
 // from class: com.google.android.gms.internal.zzme.1
                @Override // com.google.android.gms.internal.zzmh
                protected void colClear() {

                    zzme.this.clear();
                }


                @Override // com.google.android.gms.internal.zzmh
                protected Object colGetEntry(int index, int offset) {

                    return zzme.this.mArray[(index << 1) + offset];
                }


                @Override // com.google.android.gms.internal.zzmh
                protected Map<K, V> colGetMap() {

                    return zzme.this;
                }


                @Override // com.google.android.gms.internal.zzmh
                protected int colGetSize() {

                    return zzme.this.mSize;
                }


                @Override // com.google.android.gms.internal.zzmh
                protected int colIndexOfKey(Object key) {

                    return key == null ? zzme.this.indexOfNull() : zzme.this.indexOf(key, key.hashCode());
                }


                @Override // com.google.android.gms.internal.zzmh
                protected int colIndexOfValue(Object value) {

                    return zzme.this.indexOfValue(value);
                }


                @Override // com.google.android.gms.internal.zzmh
                protected void colPut(K key, V value) {

                    zzme.this.put(key, value);
                }


                @Override // com.google.android.gms.internal.zzmh
                protected void colRemoveAt(int index) {

                    zzme.this.removeAt(index);
                }


                @Override // com.google.android.gms.internal.zzmh
                protected V colSetValue(int index, V value) {

                    return zzme.this.setValueAt(index, value);
                }

            }
;
        }

        return this.zzagz;
    }


    @Override // java.util.Map
    Set<Map.Entry<K, V>> entrySet() {

        return zzpx().getEntrySet();
    }


    @Override // java.util.Map
    Set<K> keySet() {

        return zzpx().getKeySet();
    }


    /* JADX WARN: Multi-variable type inference failed */
    @Override // java.util.Map
    void putAll(Map<? extends K, ? extends V> map) {

        ensureCapacity(this.mSize + map.size());
        for (Map.Entry<? extends K, ? extends V> entry : map.entrySet()) {

            put(entry.getKey(), entry.getValue());
        }

    }


    @Override // java.util.Map
    Collection<V> values() {

        return zzpx().getValues();
    }

}

