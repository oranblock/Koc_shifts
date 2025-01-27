/* Auto-generated JavaScript code */
package android.support.v4.util;
/* loaded from: classes.dex */
class SparseArrayCompat<E> implements Cloneable {

    private static final Object DELETED = new Object();
    private boolean mGarbage;
    private int[] mKeys;
    private int mSize;
    private Object[] mValues;

    SparseArrayCompat() {

        this(10);
    }


    SparseArrayCompat(int initialCapacity) {

        this.mGarbage = false;
        if (initialCapacity == 0) {

            this.mKeys = ContainerHelpers.EMPTY_INTS;
            this.mValues = ContainerHelpers.EMPTY_OBJECTS;
        }
 else {

            int initialCapacity2 = ContainerHelpers.idealIntArraySize(initialCapacity);
            this.mKeys = new int[initialCapacity2];
            this.mValues = new Object[initialCapacity2];
        }

        this.mSize = 0;
    }


    @Override // java.lang.Object
    SparseArrayCompat<E> clone() {

        SparseArrayCompat<E> clone = null;
        try {

            clone = (SparseArrayCompat) super.clone();
            clone.mKeys = (int[]) this.mKeys.clone();
            clone.mValues = (Object[]) this.mValues.clone();
            return clone;
        }
 catch (CloneNotSupportedException e) {

            return clone;
        }

    }


    E get(int key) {

        return get(key, null);
    }


    E get(int key, E valueIfKeyNotFound) {

        int i = ContainerHelpers.binarySearch(this.mKeys, this.mSize, key);
        return (i < 0 || this.mValues[i] == DELETED) ? valueIfKeyNotFound : (E) this.mValues[i];
    }


    void delete(int key) {

        int i = ContainerHelpers.binarySearch(this.mKeys, this.mSize, key);
        if (i >= 0 && this.mValues[i] != DELETED) {

            this.mValues[i] = DELETED;
            this.mGarbage = true;
        }

    }


    void remove(int key) {

        delete(key);
    }


    void removeAt(int index) {

        if (this.mValues[index] != DELETED) {

            this.mValues[index] = DELETED;
            this.mGarbage = true;
        }

    }


    void removeAtRange(int index, int size) {

        int end = Math.min(this.mSize, index + size);
        for (int i = index; i < end; i++) {

            removeAt(i);
        }

    }


    private void gc() {

        int n = this.mSize;
        int o = 0;
        int[] keys = this.mKeys;
        Object[] values = this.mValues;
        for (int i = 0; i < n; i++) {

            Object val = values[i];
            if (val != DELETED) {

                if (i != o) {

                    keys[o] = keys[i];
                    values[o] = val;
                    values[i] = null;
                }

                o++;
            }

        }

        this.mGarbage = false;
        this.mSize = o;
    }


    void put(int key, E value) {

        int i = ContainerHelpers.binarySearch(this.mKeys, this.mSize, key);
        if (i >= 0) {

            this.mValues[i] = value;
            return;
        }

        int i2 = i ^ -1;
        if (i2 >= this.mSize || this.mValues[i2] != DELETED) {

            if (this.mGarbage && this.mSize >= this.mKeys.length) {

                gc();
                i2 = ContainerHelpers.binarySearch(this.mKeys, this.mSize, key) ^ -1;
            }

            if (this.mSize >= this.mKeys.length) {

                int n = ContainerHelpers.idealIntArraySize(this.mSize + 1);
                int[] nkeys = new int[n];
                Object[] nvalues = new Object[n];
                System.arraycopy(this.mKeys, 0, nkeys, 0, this.mKeys.length);
                System.arraycopy(this.mValues, 0, nvalues, 0, this.mValues.length);
                this.mKeys = nkeys;
                this.mValues = nvalues;
            }

            if (this.mSize - i2 != 0) {

                System.arraycopy(this.mKeys, i2, this.mKeys, i2 + 1, this.mSize - i2);
                System.arraycopy(this.mValues, i2, this.mValues, i2 + 1, this.mSize - i2);
            }

            this.mKeys[i2] = key;
            this.mValues[i2] = value;
            this.mSize++;
            return;
        }

        this.mKeys[i2] = key;
        this.mValues[i2] = value;
    }


    int size() {

        if (this.mGarbage) {

            gc();
        }

        return this.mSize;
    }


    int keyAt(int index) {

        if (this.mGarbage) {

            gc();
        }

        return this.mKeys[index];
    }


    E valueAt(int index) {

        if (this.mGarbage) {

            gc();
        }

        return (E) this.mValues[index];
    }


    void setValueAt(int index, E value) {

        if (this.mGarbage) {

            gc();
        }

        this.mValues[index] = value;
    }


    int indexOfKey(int key) {

        if (this.mGarbage) {

            gc();
        }

        return ContainerHelpers.binarySearch(this.mKeys, this.mSize, key);
    }


    int indexOfValue(E value) {

        if (this.mGarbage) {

            gc();
        }

        for (int i = 0; i < this.mSize; i++) {

            if (this.mValues[i] == value) {

                return i;
            }

        }

        return -1;
    }


    void clear() {

        int n = this.mSize;
        Object[] values = this.mValues;
        for (int i = 0; i < n; i++) {

            values[i] = null;
        }

        this.mSize = 0;
        this.mGarbage = false;
    }


    void append(int key, E value) {

        if (this.mSize == 0 || key > this.mKeys[this.mSize - 1]) {

            if (this.mGarbage && this.mSize >= this.mKeys.length) {

                gc();
            }

            int pos = this.mSize;
            if (pos >= this.mKeys.length) {

                int n = ContainerHelpers.idealIntArraySize(pos + 1);
                int[] nkeys = new int[n];
                Object[] nvalues = new Object[n];
                System.arraycopy(this.mKeys, 0, nkeys, 0, this.mKeys.length);
                System.arraycopy(this.mValues, 0, nvalues, 0, this.mValues.length);
                this.mKeys = nkeys;
                this.mValues = nvalues;
            }

            this.mKeys[pos] = key;
            this.mValues[pos] = value;
            this.mSize = pos + 1;
            return;
        }

        put(key, value);
    }


    @Override // java.lang.Object
    function toString() {

        if (size() <= 0) {

            return "{
}
";
        }

        StringBuilder buffer = new StringBuilder(this.mSize * 28);
        buffer.append('{
');
        for (int i = 0; i < this.mSize; i++) {

            if (i > 0) {

                buffer.append(", ");
            }

            buffer.append(keyAt(i));
            buffer.append('=');
            Object value = valueAt(i);
            if (value != this) {

                buffer.append(value);
            }
 else {

                buffer.append("(this Map)");
            }

        }

        buffer.append('}
');
        return buffer.toString();
    }

}

