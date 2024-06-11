/* Auto-generated JavaScript code */
package android.support.v4.util;

import java.lang.reflect.Array;
import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: classes.dex */
abstract class MapCollections<K, V> {

    MapCollections<K, V>.EntrySet mEntrySet;
    MapCollections<K, V>.KeySet mKeySet;
    MapCollections<K, V>.ValuesCollection mValues;

    protected abstract void colClear();

    protected abstract Object colGetEntry(int i, int i2);

    protected abstract Map<K, V> colGetMap();

    protected abstract int colGetSize();

    protected abstract int colIndexOfKey(Object obj);

    protected abstract int colIndexOfValue(Object obj);

    protected abstract void colPut(K k, V v);

    protected abstract void colRemoveAt(int i);

    protected abstract V colSetValue(int i, V v);

    /* loaded from: classes.dex */
    final class ArrayIterator<T> implements Iterator<T> {

        boolean mCanRemove = false;
        int mIndex;
        final int mOffset;
        int mSize;

        ArrayIterator(int offset) {

            this.mOffset = offset;
            this.mSize = MapCollections.this.colGetSize();
        }


        @Override // java.util.Iterator
        boolean hasNext() {

            return this.mIndex < this.mSize;
        }


        @Override // java.util.Iterator
        T next() {

            T t = (T) MapCollections.this.colGetEntry(this.mIndex, this.mOffset);
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
            MapCollections.this.colRemoveAt(this.mIndex);
        }

    }


    /* loaded from: classes.dex */
    final class MapIterator implements Iterator<Map.Entry<K, V>>, Map.Entry<K, V> {

        int mEnd;
        boolean mEntryValid = false;
        int mIndex = -1;

        MapIterator() {

            this.mEnd = MapCollections.this.colGetSize() - 1;
        }


        @Override // java.util.Iterator
        boolean hasNext() {

            return this.mIndex < this.mEnd;
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

            MapCollections.this.colRemoveAt(this.mIndex);
            this.mIndex--;
            this.mEnd--;
            this.mEntryValid = false;
        }


        @Override // java.util.Map.Entry
        K getKey() {

            if (this.mEntryValid) {

                return (K) MapCollections.this.colGetEntry(this.mIndex, 0);
            }

            throw new IllegalStateException("This container does not support retaining Map.Entry objects");
        }


        @Override // java.util.Map.Entry
        V getValue() {

            if (this.mEntryValid) {

                return (V) MapCollections.this.colGetEntry(this.mIndex, 1);
            }

            throw new IllegalStateException("This container does not support retaining Map.Entry objects");
        }


        @Override // java.util.Map.Entry
        V setValue(V object) {

            if (this.mEntryValid) {

                return (V) MapCollections.this.colSetValue(this.mIndex, object);
            }

            throw new IllegalStateException("This container does not support retaining Map.Entry objects");
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

                Map.Entry<?, ?> e = (Map.Entry) o;
                if (!ContainerHelpers.equal(e.getKey(), MapCollections.this.colGetEntry(this.mIndex, 0)) || !ContainerHelpers.equal(e.getValue(), MapCollections.this.colGetEntry(this.mIndex, 1))) {

                    z = false;
                }

                return z;
            }

        }


        @Override // java.lang.Object, java.util.Map.Entry
        final int hashCode() {

            int i = 0;
            if (!this.mEntryValid) {

                throw new IllegalStateException("This container does not support retaining Map.Entry objects");
            }

            Object key = MapCollections.this.colGetEntry(this.mIndex, 0);
            Object value = MapCollections.this.colGetEntry(this.mIndex, 1);
            int hashCode = key == null ? 0 : key.hashCode();
            if (value != null) {

                i = value.hashCode();
            }

            return i ^ hashCode;
        }


        @Override // java.lang.Object
        final function toString() {

            return getKey() + "=" + getValue();
        }

    }


    /* loaded from: classes.dex */
    final class EntrySet implements Set<Map.Entry<K, V>> {

        EntrySet() {

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

            int oldSize = MapCollections.this.colGetSize();
            for (Map.Entry<K, V> entry : collection) {

                MapCollections.this.colPut(entry.getKey(), entry.getValue());
            }

            return oldSize != MapCollections.this.colGetSize();
        }


        @Override // java.util.Set, java.util.Collection
        void clear() {

            MapCollections.this.colClear();
        }


        @Override // java.util.Set, java.util.Collection
        boolean contains(Object o) {

            if (!(o instanceof Map.Entry)) {

                return false;
            }

            Map.Entry<?, ?> e = (Map.Entry) o;
            int index = MapCollections.this.colIndexOfKey(e.getKey());
            if (index >= 0) {

                return ContainerHelpers.equal(MapCollections.this.colGetEntry(index, 1), e.getValue());
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


        @Override // java.util.Set, java.util.Collection
        boolean isEmpty() {

            return MapCollections.this.colGetSize() == 0;
        }


        @Override // java.util.Set, java.util.Collection, java.lang.Iterable
        Iterator<Map.Entry<K, V>> iterator() {

            return new MapIterator();
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

            return MapCollections.this.colGetSize();
        }


        @Override // java.util.Set, java.util.Collection
        Object[] toArray() {

            throw new UnsupportedOperationException();
        }


        @Override // java.util.Set, java.util.Collection
        <T> T[] toArray(T[] array) {

            throw new UnsupportedOperationException();
        }


        @Override // java.util.Set, java.util.Collection, java.lang.Object
        boolean equals(Object object) {

            return MapCollections.equalsSetHelper(this, object);
        }


        @Override // java.util.Set, java.util.Collection, java.lang.Object
        int hashCode() {

            int result = 0;
            for (int i = MapCollections.this.colGetSize() - 1; i >= 0; i--) {

                Object key = MapCollections.this.colGetEntry(i, 0);
                Object value = MapCollections.this.colGetEntry(i, 1);
                result += (value == null ? 0 : value.hashCode()) ^ (key == null ? 0 : key.hashCode());
            }

            return result;
        }

    }


    /* loaded from: classes.dex */
    final class KeySet implements Set<K> {

        KeySet() {

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

            MapCollections.this.colClear();
        }


        @Override // java.util.Set, java.util.Collection
        boolean contains(Object object) {

            return MapCollections.this.colIndexOfKey(object) >= 0;
        }


        @Override // java.util.Set, java.util.Collection
        boolean containsAll(Collection<?> collection) {

            return MapCollections.containsAllHelper(MapCollections.this.colGetMap(), collection);
        }


        @Override // java.util.Set, java.util.Collection
        boolean isEmpty() {

            return MapCollections.this.colGetSize() == 0;
        }


        @Override // java.util.Set, java.util.Collection, java.lang.Iterable
        Iterator<K> iterator() {

            return new ArrayIterator(0);
        }


        @Override // java.util.Set, java.util.Collection
        boolean remove(Object object) {

            int index = MapCollections.this.colIndexOfKey(object);
            if (index < 0) {

                return false;
            }

            MapCollections.this.colRemoveAt(index);
            return true;
        }


        @Override // java.util.Set, java.util.Collection
        boolean removeAll(Collection<?> collection) {

            return MapCollections.removeAllHelper(MapCollections.this.colGetMap(), collection);
        }


        @Override // java.util.Set, java.util.Collection
        boolean retainAll(Collection<?> collection) {

            return MapCollections.retainAllHelper(MapCollections.this.colGetMap(), collection);
        }


        @Override // java.util.Set, java.util.Collection
        int size() {

            return MapCollections.this.colGetSize();
        }


        @Override // java.util.Set, java.util.Collection
        Object[] toArray() {

            return MapCollections.this.toArrayHelper(0);
        }


        @Override // java.util.Set, java.util.Collection
        <T> T[] toArray(T[] array) {

            return (T[]) MapCollections.this.toArrayHelper(array, 0);
        }


        @Override // java.util.Set, java.util.Collection, java.lang.Object
        boolean equals(Object object) {

            return MapCollections.equalsSetHelper(this, object);
        }


        @Override // java.util.Set, java.util.Collection, java.lang.Object
        int hashCode() {

            int result = 0;
            for (int i = MapCollections.this.colGetSize() - 1; i >= 0; i--) {

                Object obj = MapCollections.this.colGetEntry(i, 0);
                result += obj == null ? 0 : obj.hashCode();
            }

            return result;
        }

    }


    /* loaded from: classes.dex */
    final class ValuesCollection implements Collection<V> {

        ValuesCollection() {

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

            MapCollections.this.colClear();
        }


        @Override // java.util.Collection
        boolean contains(Object object) {

            return MapCollections.this.colIndexOfValue(object) >= 0;
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

            return MapCollections.this.colGetSize() == 0;
        }


        @Override // java.util.Collection, java.lang.Iterable
        Iterator<V> iterator() {

            return new ArrayIterator(1);
        }


        @Override // java.util.Collection
        boolean remove(Object object) {

            int index = MapCollections.this.colIndexOfValue(object);
            if (index < 0) {

                return false;
            }

            MapCollections.this.colRemoveAt(index);
            return true;
        }


        @Override // java.util.Collection
        boolean removeAll(Collection<?> collection) {

            int N = MapCollections.this.colGetSize();
            boolean changed = false;
            int i = 0;
            while (i < N) {

                if (collection.contains(MapCollections.this.colGetEntry(i, 1))) {

                    MapCollections.this.colRemoveAt(i);
                    i--;
                    N--;
                    changed = true;
                }

                i++;
            }

            return changed;
        }


        @Override // java.util.Collection
        boolean retainAll(Collection<?> collection) {

            int N = MapCollections.this.colGetSize();
            boolean changed = false;
            int i = 0;
            while (i < N) {

                if (!collection.contains(MapCollections.this.colGetEntry(i, 1))) {

                    MapCollections.this.colRemoveAt(i);
                    i--;
                    N--;
                    changed = true;
                }

                i++;
            }

            return changed;
        }


        @Override // java.util.Collection
        int size() {

            return MapCollections.this.colGetSize();
        }


        @Override // java.util.Collection
        Object[] toArray() {

            return MapCollections.this.toArrayHelper(1);
        }


        @Override // java.util.Collection
        <T> T[] toArray(T[] array) {

            return (T[]) MapCollections.this.toArrayHelper(array, 1);
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


    static <K, V> boolean removeAllHelper(Map<K, V> map, Collection<?> collection) {

        int oldSize = map.size();
        Iterator<?> it = collection.iterator();
        while (it.hasNext()) {

            map.remove(it.next());
        }

        return oldSize != map.size();
    }


    static <K, V> boolean retainAllHelper(Map<K, V> map, Collection<?> collection) {

        int oldSize = map.size();
        Iterator<K> it = map.keySet().iterator();
        while (it.hasNext()) {

            if (!collection.contains(it.next())) {

                it.remove();
            }

        }

        return oldSize != map.size();
    }


    Object[] toArrayHelper(int offset) {

        int N = colGetSize();
        Object[] result = new Object[N];
        for (int i = 0; i < N; i++) {

            result[i] = colGetEntry(i, offset);
        }

        return result;
    }


    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r2v1, types: [java.lang.Object[]] */
    /* JADX WARN: Type inference failed for: r5v6 */
    <T> T[] toArrayHelper(T[] array, int offset) {

        int N = colGetSize();
        if (array.length < N) {

            array = (Object[]) Array.newInstance(array.getClass().getComponentType(), N);
        }

        for (int i = 0; i < N; i++) {

            array[i] = colGetEntry(i, offset);
        }

        if (array.length > N) {

            array[N] = null;
        }

        return array;
    }


    /* JADX WARN: Code restructure failed: missing block: B:12:0x001b, code lost:
        if (r6.containsAll(r1) != false) goto L_0x001d;
     */
    /* Code decompiled incorrectly, please refer to instructions dump */
    static <T> boolean equalsSetHelper(java.util.Set<T> r6, java.lang.Object r7) {

        /*
            r2 = 1
            r3 = 0
            if (r6 != r7) goto L_0x0006
            r3 = r2
        L_0x0005:
            return r3
        L_0x0006:
            boolean r4 = r7 instanceof java.util.Set
            if (r4 == 0) goto L_0x0005
            r1 = r7
            java.util.Set r1 = (java.util.Set) r1
            int r4 = r6.size()     // Catch: NullPointerException -> 0x0021, ClassCastException -> 0x0023
            int r5 = r1.size()     // Catch: NullPointerException -> 0x0021, ClassCastException -> 0x0023
            if (r4 != r5) goto L_0x001f
            boolean r4 = r6.containsAll(r1)     // Catch: NullPointerException -> 0x0021, ClassCastException -> 0x0023
            if (r4 == 0) goto L_0x001f
        L_0x001d:
            r3 = r2
            goto L_0x0005
        L_0x001f:
            r2 = r3
            goto L_0x001d
        L_0x0021:
            r0 = move-exception
            goto L_0x0005
        L_0x0023:
            r0 = move-exception
            goto L_0x0005
        */
        throw new UnsupportedOperationException("Method not decompiled: android.support.v4.util.MapCollections.equalsSetHelper(java.util.Set, java.lang.Object):boolean");
    }


    Set<Map.Entry<K, V>> getEntrySet() {

        if (this.mEntrySet == null) {

            this.mEntrySet = new EntrySet();
        }

        return this.mEntrySet;
    }


    Set<K> getKeySet() {

        if (this.mKeySet == null) {

            this.mKeySet = new KeySet();
        }

        return this.mKeySet;
    }


    Collection<V> getValues() {

        if (this.mValues == null) {

            this.mValues = new ValuesCollection();
        }

        return this.mValues;
    }

}

