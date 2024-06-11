/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import java.lang.reflect.Array;
import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: classes.dex */
abstract class zzmh<K, V> {

    zzmh<K, V>.zzb zzagI;
    zzmh<K, V>.zzc zzagJ;
    zzmh<K, V>.zze zzagK;

    /* loaded from: classes.dex */
    final class zza<T> implements Iterator<T> {

        boolean mCanRemove = false;
        int mIndex;
        final int mOffset;
        int mSize;

        zza(int i) {

            this.mOffset = i;
            this.mSize = zzmh.this.colGetSize();
        }


        @Override // java.util.Iterator
        boolean hasNext() {

            return this.mIndex < this.mSize;
        }


        @Override // java.util.Iterator
        T next() {

            T t = (T) zzmh.this.colGetEntry(this.mIndex, this.mOffset);
            this.mIndex++;
            this.mCanRemove = true;
            return t;
        }


        @Override // java.util.Iterator
        void remove() {

            if (!this.mCanRemove) {

                throw new IllegalStateException();
            }

            this.mIndex--;
            this.mSize--;
            this.mCanRemove = false;
            zzmh.this.colRemoveAt(this.mIndex);
        }

    }


    /* loaded from: classes.dex */
    final class zzb implements Set<Map.Entry<K, V>> {

        zzb() {

        }


        @Override // java.util.Set, java.util.Collection
        /* bridge */ /* synthetic */ boolean add(Object x0) {

            return add((Map.Entry) ((Map.Entry) x0));
        }


        boolean add(Map.Entry<K, V> object) {

            throw new UnsupportedOperationException();
        }


        /* JADX WARN: Multi-variable type inference failed */
        @Override // java.util.Set, java.util.Collection
        boolean addAll(Collection<? extends Map.Entry<K, V>> collection) {

            int colGetSize = zzmh.this.colGetSize();
            Iterator<? extends Map.Entry<K, V>> it = collection.iterator();
            while (it.hasNext()) {

                Map.Entry entry = (Map.Entry) it.next();
                zzmh.this.colPut(entry.getKey(), entry.getValue());
            }

            return colGetSize != zzmh.this.colGetSize();
        }


        @Override // java.util.Set, java.util.Collection
        void clear() {

            zzmh.this.colClear();
        }


        @Override // java.util.Set, java.util.Collection
        boolean contains(Object o) {

            if (!(o instanceof Map.Entry)) {

                return false;
            }

            Map.Entry entry = (Map.Entry) o;
            int colIndexOfKey = zzmh.this.colIndexOfKey(entry.getKey());
            if (colIndexOfKey >= 0) {

                return zzmf.equal(zzmh.this.colGetEntry(colIndexOfKey, 1), entry.getValue());
            }

            return false;
        }


        @Override // java.util.Set, java.util.Collection
        boolean containsAll(Collection<?> collection) {

            Iterator<?> it = collection.iterator();
            while (it.hasNext()) {

                if (!contains(it.next())) {

                    return false;
                }

            }

            return true;
        }


        @Override // java.util.Set, java.util.Collection, java.lang.Object
        boolean equals(Object object) {

            return zzmh.equalsSetHelper(this, object);
        }


        @Override // java.util.Set, java.util.Collection, java.lang.Object
        int hashCode() {

            int i = 0;
            for (int colGetSize = zzmh.this.colGetSize() - 1; colGetSize >= 0; colGetSize--) {

                Object colGetEntry = zzmh.this.colGetEntry(colGetSize, 0);
                Object colGetEntry2 = zzmh.this.colGetEntry(colGetSize, 1);
                i += (colGetEntry2 == null ? 0 : colGetEntry2.hashCode()) ^ (colGetEntry == null ? 0 : colGetEntry.hashCode());
            }

            return i;
        }


        @Override // java.util.Set, java.util.Collection
        boolean isEmpty() {

            return zzmh.this.colGetSize() == 0;
        }


        @Override // java.util.Set, java.util.Collection, java.lang.Iterable
        Iterator<Map.Entry<K, V>> iterator() {

            return new zzd();
        }


        @Override // java.util.Set, java.util.Collection
        boolean remove(Object object) {

            throw new UnsupportedOperationException();
        }


        @Override // java.util.Set, java.util.Collection
        boolean removeAll(Collection<?> collection) {

            throw new UnsupportedOperationException();
        }


        @Override // java.util.Set, java.util.Collection
        boolean retainAll(Collection<?> collection) {

            throw new UnsupportedOperationException();
        }


        @Override // java.util.Set, java.util.Collection
        int size() {

            return zzmh.this.colGetSize();
        }


        @Override // java.util.Set, java.util.Collection
        Object[] toArray() {

            throw new UnsupportedOperationException();
        }


        @Override // java.util.Set, java.util.Collection
        <T> T[] toArray(T[] array) {

            throw new UnsupportedOperationException();
        }

    }


    /* loaded from: classes.dex */
    final class zzc implements Set<K> {

        zzc() {

        }


        @Override // java.util.Set, java.util.Collection
        boolean add(K object) {

            throw new UnsupportedOperationException();
        }


        @Override // java.util.Set, java.util.Collection
        boolean addAll(Collection<? extends K> collection) {

            throw new UnsupportedOperationException();
        }


        @Override // java.util.Set, java.util.Collection
        void clear() {

            zzmh.this.colClear();
        }


        @Override // java.util.Set, java.util.Collection
        boolean contains(Object object) {

            return zzmh.this.colIndexOfKey(object) >= 0;
        }


        @Override // java.util.Set, java.util.Collection
        boolean containsAll(Collection<?> collection) {

            return zzmh.containsAllHelper(zzmh.this.colGetMap(), collection);
        }


        @Override // java.util.Set, java.util.Collection, java.lang.Object
        boolean equals(Object object) {

            return zzmh.equalsSetHelper(this, object);
        }


        @Override // java.util.Set, java.util.Collection, java.lang.Object
        int hashCode() {

            int i = 0;
            for (int colGetSize = zzmh.this.colGetSize() - 1; colGetSize >= 0; colGetSize--) {

                Object colGetEntry = zzmh.this.colGetEntry(colGetSize, 0);
                i += colGetEntry == null ? 0 : colGetEntry.hashCode();
            }

            return i;
        }


        @Override // java.util.Set, java.util.Collection
        boolean isEmpty() {

            return zzmh.this.colGetSize() == 0;
        }


        @Override // java.util.Set, java.util.Collection, java.lang.Iterable
        Iterator<K> iterator() {

            return new zza(0);
        }


        @Override // java.util.Set, java.util.Collection
        boolean remove(Object object) {

            int colIndexOfKey = zzmh.this.colIndexOfKey(object);
            if (colIndexOfKey < 0) {

                return false;
            }

            zzmh.this.colRemoveAt(colIndexOfKey);
            return true;
        }


        @Override // java.util.Set, java.util.Collection
        boolean removeAll(Collection<?> collection) {

            return zzmh.removeAllHelper(zzmh.this.colGetMap(), collection);
        }


        @Override // java.util.Set, java.util.Collection
        boolean retainAll(Collection<?> collection) {

            return zzmh.retainAllHelper(zzmh.this.colGetMap(), collection);
        }


        @Override // java.util.Set, java.util.Collection
        int size() {

            return zzmh.this.colGetSize();
        }


        @Override // java.util.Set, java.util.Collection
        Object[] toArray() {

            return zzmh.this.toArrayHelper(0);
        }


        @Override // java.util.Set, java.util.Collection
        <T> T[] toArray(T[] array) {

            return (T[]) zzmh.this.toArrayHelper(array, 0);
        }

    }


    /* loaded from: classes.dex */
    final class zzd implements Iterator<Map.Entry<K, V>>, Map.Entry<K, V> {

        int mEnd;
        boolean mEntryValid = false;
        int mIndex = -1;

        zzd() {

            this.mEnd = zzmh.this.colGetSize() - 1;
        }


        @Override // java.lang.Object, java.util.Map.Entry
        final boolean equals(Object o) {

            boolean z = true;
            if (!this.mEntryValid) {

                throw new IllegalStateException("This container does not support retaining Map.Entry objects");
            }
 else if (!(o instanceof Map.Entry)) {

                return false;
            }
 else {

                Map.Entry entry = (Map.Entry) o;
                if (!zzmf.equal(entry.getKey(), zzmh.this.colGetEntry(this.mIndex, 0)) || !zzmf.equal(entry.getValue(), zzmh.this.colGetEntry(this.mIndex, 1))) {

                    z = false;
                }

                return z;
            }

        }


        @Override // java.util.Map.Entry
        K getKey() {

            if (this.mEntryValid) {

                return (K) zzmh.this.colGetEntry(this.mIndex, 0);
            }

            throw new IllegalStateException("This container does not support retaining Map.Entry objects");
        }


        @Override // java.util.Map.Entry
        V getValue() {

            if (this.mEntryValid) {

                return (V) zzmh.this.colGetEntry(this.mIndex, 1);
            }

            throw new IllegalStateException("This container does not support retaining Map.Entry objects");
        }


        @Override // java.util.Iterator
        boolean hasNext() {

            return this.mIndex < this.mEnd;
        }


        @Override // java.lang.Object, java.util.Map.Entry
        final int hashCode() {

            int i = 0;
            if (!this.mEntryValid) {

                throw new IllegalStateException("This container does not support retaining Map.Entry objects");
            }

            Object colGetEntry = zzmh.this.colGetEntry(this.mIndex, 0);
            Object colGetEntry2 = zzmh.this.colGetEntry(this.mIndex, 1);
            int hashCode = colGetEntry == null ? 0 : colGetEntry.hashCode();
            if (colGetEntry2 != null) {

                i = colGetEntry2.hashCode();
            }

            return i ^ hashCode;
        }


        @Override // java.util.Iterator
        Map.Entry<K, V> next() {

            this.mIndex++;
            this.mEntryValid = true;
            return this;
        }


        @Override // java.util.Iterator
        void remove() {

            if (!this.mEntryValid) {

                throw new IllegalStateException();
            }

            zzmh.this.colRemoveAt(this.mIndex);
            this.mIndex--;
            this.mEnd--;
            this.mEntryValid = false;
        }


        @Override // java.util.Map.Entry
        V setValue(V object) {

            if (this.mEntryValid) {

                return (V) zzmh.this.colSetValue(this.mIndex, object);
            }

            throw new IllegalStateException("This container does not support retaining Map.Entry objects");
        }


        @Override // java.lang.Object
        final function toString() {

            return getKey() + "=" + getValue();
        }

    }


    /* loaded from: classes.dex */
    final class zze implements Collection<V> {

        zze() {

        }


        @Override // java.util.Collection
        boolean add(V object) {

            throw new UnsupportedOperationException();
        }


        @Override // java.util.Collection
        boolean addAll(Collection<? extends V> collection) {

            throw new UnsupportedOperationException();
        }


        @Override // java.util.Collection
        void clear() {

            zzmh.this.colClear();
        }


        @Override // java.util.Collection
        boolean contains(Object object) {

            return zzmh.this.colIndexOfValue(object) >= 0;
        }


        @Override // java.util.Collection
        boolean containsAll(Collection<?> collection) {

            Iterator<?> it = collection.iterator();
            while (it.hasNext()) {

                if (!contains(it.next())) {

                    return false;
                }

            }

            return true;
        }


        @Override // java.util.Collection
        boolean isEmpty() {

            return zzmh.this.colGetSize() == 0;
        }


        @Override // java.util.Collection, java.lang.Iterable
        Iterator<V> iterator() {

            return new zza(1);
        }


        @Override // java.util.Collection
        boolean remove(Object object) {

            int colIndexOfValue = zzmh.this.colIndexOfValue(object);
            if (colIndexOfValue < 0) {

                return false;
            }

            zzmh.this.colRemoveAt(colIndexOfValue);
            return true;
        }


        @Override // java.util.Collection
        boolean removeAll(Collection<?> collection) {

            int i = 0;
            int colGetSize = zzmh.this.colGetSize();
            boolean z = false;
            while (i < colGetSize) {

                if (collection.contains(zzmh.this.colGetEntry(i, 1))) {

                    zzmh.this.colRemoveAt(i);
                    i--;
                    colGetSize--;
                    z = true;
                }

                i++;
            }

            return z;
        }


        @Override // java.util.Collection
        boolean retainAll(Collection<?> collection) {

            int i = 0;
            int colGetSize = zzmh.this.colGetSize();
            boolean z = false;
            while (i < colGetSize) {

                if (!collection.contains(zzmh.this.colGetEntry(i, 1))) {

                    zzmh.this.colRemoveAt(i);
                    i--;
                    colGetSize--;
                    z = true;
                }

                i++;
            }

            return z;
        }


        @Override // java.util.Collection
        int size() {

            return zzmh.this.colGetSize();
        }


        @Override // java.util.Collection
        Object[] toArray() {

            return zzmh.this.toArrayHelper(1);
        }


        @Override // java.util.Collection
        <T> T[] toArray(T[] array) {

            return (T[]) zzmh.this.toArrayHelper(array, 1);
        }

    }


    static <K, V> boolean containsAllHelper(Map<K, V> map, Collection<?> collection) {

        Iterator<?> it = collection.iterator();
        while (it.hasNext()) {

            if (!map.containsKey(it.next())) {

                return false;
            }

        }

        return true;
    }


    /* JADX WARN: Code restructure failed: missing block: B:12:0x001a, code lost:
        if (r4.containsAll(r5) != false) goto L_0x001c;
     */
    /* Code decompiled incorrectly, please refer to instructions dump */
    static <T> boolean equalsSetHelper(java.util.Set<T> r4, java.lang.Object r5) {

        /*
            r0 = 1
            r1 = 0
            if (r4 != r5) goto L_0x0006
            r1 = r0
        L_0x0005:
            return r1
        L_0x0006:
            boolean r2 = r5 instanceof java.util.Set
            if (r2 == 0) goto L_0x0005
            java.util.Set r5 = (java.util.Set) r5
            int r2 = r4.size()     // Catch: NullPointerException -> 0x0022, ClassCastException -> 0x0020
            int r3 = r5.size()     // Catch: NullPointerException -> 0x0022, ClassCastException -> 0x0020
            if (r2 != r3) goto L_0x001e
            boolean r2 = r4.containsAll(r5)     // Catch: NullPointerException -> 0x0022, ClassCastException -> 0x0020
            if (r2 == 0) goto L_0x001e
        L_0x001c:
            r1 = r0
            goto L_0x0005
        L_0x001e:
            r0 = r1
            goto L_0x001c
        L_0x0020:
            r0 = move-exception
            goto L_0x0005
        L_0x0022:
            r0 = move-exception
            goto L_0x0005
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.internal.zzmh.equalsSetHelper(java.util.Set, java.lang.Object):boolean");
    }


    static <K, V> boolean removeAllHelper(Map<K, V> map, Collection<?> collection) {

        int size = map.size();
        Iterator<?> it = collection.iterator();
        while (it.hasNext()) {

            map.remove(it.next());
        }

        return size != map.size();
    }


    static <K, V> boolean retainAllHelper(Map<K, V> map, Collection<?> collection) {

        int size = map.size();
        Iterator<K> it = map.keySet().iterator();
        while (it.hasNext()) {

            if (!collection.contains(it.next())) {

                it.remove();
            }

        }

        return size != map.size();
    }


    protected abstract void colClear();

    protected abstract Object colGetEntry(int i, int i2);

    protected abstract Map<K, V> colGetMap();

    protected abstract int colGetSize();

    protected abstract int colIndexOfKey(Object obj);

    protected abstract int colIndexOfValue(Object obj);

    protected abstract void colPut(K k, V v);

    protected abstract void colRemoveAt(int i);

    protected abstract V colSetValue(int i, V v);

    Set<Map.Entry<K, V>> getEntrySet() {

        if (this.zzagI == null) {

            this.zzagI = new zzb();
        }

        return this.zzagI;
    }


    Set<K> getKeySet() {

        if (this.zzagJ == null) {

            this.zzagJ = new zzc();
        }

        return this.zzagJ;
    }


    Collection<V> getValues() {

        if (this.zzagK == null) {

            this.zzagK = new zze();
        }

        return this.zzagK;
    }


    Object[] toArrayHelper(int offset) {

        int colGetSize = colGetSize();
        Object[] objArr = new Object[colGetSize];
        for (int i = 0; i < colGetSize; i++) {

            objArr[i] = colGetEntry(i, offset);
        }

        return objArr;
    }


    /* JADX WARN: Multi-variable type inference failed */
    <T> T[] toArrayHelper(T[] array, int offset) {

        int colGetSize = colGetSize();
        if (array.length < colGetSize) {

            array = (T[]) ((Object[]) Array.newInstance(array.getClass().getComponentType(), colGetSize));
        }

        for (int i = 0; i < colGetSize; i++) {

            array[i] = colGetEntry(i, offset);
        }

        if (array.length > colGetSize) {

            array[colGetSize] = null;
        }

        return array;
    }

}

