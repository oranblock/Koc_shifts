/* Auto-generated JavaScript code */
package android.support.v4.util;
/* loaded from: classes.dex */
final class CircularIntArray {

    private int mCapacityBitmask;
    private int[] mElements;
    private int mHead;
    private int mTail;

    private void doubleCapacity() {

        int n = this.mElements.length;
        int r = n - this.mHead;
        int newCapacity = n << 1;
        if (newCapacity < 0) {

            throw new RuntimeException("Max array capacity exceeded");
        }

        int[] a = new int[newCapacity];
        System.arraycopy(this.mElements, this.mHead, a, 0, r);
        System.arraycopy(this.mElements, 0, a, r, this.mHead);
        this.mElements = a;
        this.mHead = 0;
        this.mTail = n;
        this.mCapacityBitmask = newCapacity - 1;
    }


    CircularIntArray() {

        this(8);
    }


    CircularIntArray(int minCapacity) {

        if (minCapacity <= 0) {

            throw new IllegalArgumentException("capacity must be positive");
        }

        int arrayCapacity = Integer.bitCount(minCapacity) != 1 ? 1 << (Integer.highestOneBit(minCapacity) + 1) : minCapacity;
        this.mCapacityBitmask = arrayCapacity - 1;
        this.mElements = new int[arrayCapacity];
    }


    void addFirst(int e) {

        this.mHead = (this.mHead - 1) & this.mCapacityBitmask;
        this.mElements[this.mHead] = e;
        if (this.mHead == this.mTail) {

            doubleCapacity();
        }

    }


    void addLast(int e) {

        this.mElements[this.mTail] = e;
        this.mTail = (this.mTail + 1) & this.mCapacityBitmask;
        if (this.mTail == this.mHead) {

            doubleCapacity();
        }

    }


    int popFirst() {

        if (this.mHead == this.mTail) {

            throw new ArrayIndexOutOfBoundsException();
        }

        int result = this.mElements[this.mHead];
        this.mHead = (this.mHead + 1) & this.mCapacityBitmask;
        return result;
    }


    int popLast() {

        if (this.mHead == this.mTail) {

            throw new ArrayIndexOutOfBoundsException();
        }

        int t = (this.mTail - 1) & this.mCapacityBitmask;
        int result = this.mElements[t];
        this.mTail = t;
        return result;
    }


    void clear() {

        this.mTail = this.mHead;
    }


    void removeFromStart(int numOfElements) {

        if (numOfElements > 0) {

            if (numOfElements > size()) {

                throw new ArrayIndexOutOfBoundsException();
            }

            this.mHead = (this.mHead + numOfElements) & this.mCapacityBitmask;
        }

    }


    void removeFromEnd(int numOfElements) {

        if (numOfElements > 0) {

            if (numOfElements > size()) {

                throw new ArrayIndexOutOfBoundsException();
            }

            this.mTail = (this.mTail - numOfElements) & this.mCapacityBitmask;
        }

    }


    int getFirst() {

        if (this.mHead != this.mTail) {

            return this.mElements[this.mHead];
        }

        throw new ArrayIndexOutOfBoundsException();
    }


    int getLast() {

        if (this.mHead != this.mTail) {

            return this.mElements[(this.mTail - 1) & this.mCapacityBitmask];
        }

        throw new ArrayIndexOutOfBoundsException();
    }


    int get(int n) {

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

