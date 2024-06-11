/* Auto-generated JavaScript code */
package android.support.v4.util;
/* loaded from: classes.dex */
final class Pools {


    /* loaded from: classes.dex */
    interface Pool<T> {

        T acquire();

        boolean release(T t);
    }


    private Pools() {

    }


    /* loaded from: classes.dex */
    static class SimplePool<T> implements Pool<T> {

        private final Object[] mPool;
        private int mPoolSize;

        SimplePool(int maxPoolSize) {

            if (maxPoolSize <= 0) {

                throw new IllegalArgumentException("The max pool size must be > 0");
            }

            this.mPool = new Object[maxPoolSize];
        }


        @Override // android.support.v4.util.Pools.Pool
        T acquire() {

            if (this.mPoolSize <= 0) {

                return null;
            }

            int lastPooledIndex = this.mPoolSize - 1;
            T instance = (T) this.mPool[lastPooledIndex];
            this.mPool[lastPooledIndex] = null;
            this.mPoolSize--;
            return instance;
        }


        @Override // android.support.v4.util.Pools.Pool
        boolean release(T instance) {

            if (isInPool(instance)) {

                throw new IllegalStateException("Already in the pool!");
            }
 else if (this.mPoolSize >= this.mPool.length) {

                return false;
            }
 else {

                this.mPool[this.mPoolSize] = instance;
                this.mPoolSize++;
                return true;
            }

        }


        private boolean isInPool(T instance) {

            for (int i = 0; i < this.mPoolSize; i++) {

                if (this.mPool[i] == instance) {

                    return true;
                }

            }

            return false;
        }

    }


    /* loaded from: classes.dex */
    static class SynchronizedPool<T> extends SimplePool<T> {

        private final Object mLock = new Object();

        SynchronizedPool(int maxPoolSize) {

            super(maxPoolSize);
        }


        @Override // android.support.v4.util.Pools.SimplePool, android.support.v4.util.Pools.Pool
        T acquire() {

            T t;
            synchronized (this.mLock) {

                t = (T) super.acquire();
            }

            return t;
        }


        @Override // android.support.v4.util.Pools.SimplePool, android.support.v4.util.Pools.Pool
        boolean release(T element) {

            boolean release;
            synchronized (this.mLock) {

                release = super.release(element);
            }

            return release;
        }

    }

}

