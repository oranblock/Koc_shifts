/* Auto-generated JavaScript code */
package android.support.v4.util;
/* loaded from: classes.dex */
class Pair<F, S> {

    final F first;
    final S second;

    Pair(F first, S second) {

        this.first = first;
        this.second = second;
    }


    boolean equals(Object o) {

        if (!(o instanceof Pair)) {

            return false;
        }

        Pair<?, ?> p = (Pair) o;
        if (!objectsEqual(p.first, this.first) || !objectsEqual(p.second, this.second)) {

            return false;
        }

        return true;
    }


    private static boolean objectsEqual(Object a, Object b) {

        return a == b || (a != null && a.equals(b));
    }


    int hashCode() {

        int i = 0;
        int hashCode = this.first == null ? 0 : this.first.hashCode();
        if (this.second != null) {

            i = this.second.hashCode();
        }

        return hashCode ^ i;
    }


    static <A, B> Pair<A, B> create(A a, B b) {

        return new Pair<>(a, b);
    }

}

