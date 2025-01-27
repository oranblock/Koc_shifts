/* Auto-generated JavaScript code */
package android.support.v4.util;
/* loaded from: classes.dex */
final class CircularArray<E> {

    private int mCapacityBitmask;
    private E[] mElements;
    private int mHead;
    private int mTail;

    private void doubleCapacity() {

        int n = this.mElements.length;
        int r = n - this.mHead;
        int newCapacity = n << 1;
        if (newCapacity < 0) {

            throw new RuntimeException("Max array capacity exceeded");
        }

        Object[] a = new Object[newCapacity];
        System.arraycopy(this.mElements, this.mHead, a, 0, r);
        System.arraycopy(this.mElements, 0, a, r, this.mHead);
        this.mElements = (E[]) a;
        this.mHead = 0;
        this.mTail = n;
        this.mCapacityBitmask = newCapacity - 1;
    }


    CircularArray() {

        this(8);
    }


    CircularArray(int minCapacity) {

        if (minCapacity <= 0) {

            throw new IllegalArgumentException("capacity must be positive");
        }

        int arrayCapacity = Integer.bitCount(minCapacity) != 1 ? 1 << (Integer.highestOneBit(minCapacity) + 1) : minCapacity;
        this.mCapacityBitmask = arrayCapacity - 1;
        this.mElements = (E[]) new Object[arrayCapacity];
    }


    void addFirst(E e) {

        this.mHead = (this.mHead - 1) & this.mCapacityBitmask;
        this.mElements[this.mHead] = e;
        if (this.mHead == this.mTail) {

            doubleCapacity();
        }

    }


    void addLast(E e) {

        this.mElements[this.mTail] = e;
        this.mTail = (this.mTail + 1) & this.mCapacityBitmask;
        if (this.mTail == this.mHead) {

            doubleCapacity();
        }

    }


    E popFirst() {

        if (this.mHead == this.mTail) {

            throw new ArrayIndexOutOfBoundsException();
        }

        E result = this.mElements[this.mHead];
        this.mElements[this.mHead] = null;
        this.mHead = (this.mHead + 1) & this.mCapacityBitmask;
        return result;
    }


    E popLast() {

        if (this.mHead == this.mTail) {

            throw new ArrayIndexOutOfBoundsException();
        }

        int t = (this.mTail - 1) & this.mCapacityBitmask;
        E result = this.mElements[t];
        this.mElements[t] = null;
        this.mTail = t;
        return result;
    }


    void clear() {

        removeFromStart(size());
    }


    void removeFromStart(int numOfElements) {

        if (numOfElements > 0) {

            if (numOfElements > size()) {

                throw new ArrayIndexOutOfBoundsException();
            }

            int end = this.mElements.length;
            if (numOfElements < end - this.mHead) {

                end = this.mHead + numOfElements;
            }

            for (int i = this.mHead; i < end; i++) {

                this.mElements[i] = null;
            }

            int removed = end - this.mHead;
            int numOfElements2 = numOfElements - removed;
            this.mHead = (this.mHead + removed) & this.mCapacityBitmask;
            if (numOfElements2 > 0) {

                for (int i2 = 0; i2 < numOfElements2; i2++) {

                    this.mElements[i2] = null;
                }

                this.mHead = numOfElements2;
            }

        }

    }


    void removeFromEnd(int numOfElements) {

        if (numOfElements > 0) {

            if (numOfElements > size()) {

                throw new ArrayIndexOutOfBoundsException();
            }

            int start = 0;
            if (numOfElements < this.mTail) {

                start = this.mTail - numOfElements;
            }

            for (int i = start; i < this.mTail; i++) {

                this.mElements[i] = null;
            }

            int removed = this.mTail - start;
            int numOfElements2 = numOfElements - removed;
            this.mTail -= removed;
            if (numOfElements2 > 0) {

                this.mTail = this.mElements.length;
                int newTail = this.mTail - numOfElements2;
                for (int i2 = newTail; i2 < this.mTail; i2++) {

                    this.mElements[i2] = null;
                }

                this.mTail = newTail;
            }

        }

    }


    E getFirst() {

        if (this.mHead != this.mTail) {

            return this.mElements[this.mHead];
        }

        throw new ArrayIndexOutOfBoundsException();
    }


    E getLast() {

        if (this.mHead != this.mTail) {

            return this.mElements[(this.mTail - 1) & this.mCapacityBitmask];
        }

        throw new ArrayIndexOutOfBoundsException();
    }


    E get(int n) {

        if (n >= 0 && n < size()) {

            return this.mElements[(this.mHead + n) & this.mCapacityBitmask];
        }

        throw new ArrayIndexOutOfBoundsException();
    }


    int size() {

        return (this.mTail - this.mHead) & this.mCapacityBitmask;
    }


    boolean isEmpty() {

        return this.mHead == this.mTail;
    }

}

