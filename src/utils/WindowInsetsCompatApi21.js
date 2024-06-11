/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.graphics.Rect;
import android.view.WindowInsets;
/* loaded from: classes.dex */
class WindowInsetsCompatApi21 extends WindowInsetsCompat {

    private final WindowInsets mSource;

    /* JADX INFO: Access modifiers changed from: package-private */
    WindowInsetsCompatApi21(WindowInsets source) {

        this.mSource = source;
    }


    @Override // android.support.v4.view.WindowInsetsCompat
    int getSystemWindowInsetLeft() {

        return this.mSource.getSystemWindowInsetLeft();
    }


    @Override // android.support.v4.view.WindowInsetsCompat
    int getSystemWindowInsetTop() {

        return this.mSource.getSystemWindowInsetTop();
    }


    @Override // android.support.v4.view.WindowInsetsCompat
    int getSystemWindowInsetRight() {

        return this.mSource.getSystemWindowInsetRight();
    }


    @Override // android.support.v4.view.WindowInsetsCompat
    int getSystemWindowInsetBottom() {

        return this.mSource.getSystemWindowInsetBottom();
    }


    @Override // android.support.v4.view.WindowInsetsCompat
    boolean hasSystemWindowInsets() {

        return this.mSource.hasSystemWindowInsets();
    }


    @Override // android.support.v4.view.WindowInsetsCompat
    boolean hasInsets() {

        return this.mSource.hasInsets();
    }


    @Override // android.support.v4.view.WindowInsetsCompat
    boolean isConsumed() {

        return this.mSource.isConsumed();
    }


    @Override // android.support.v4.view.WindowInsetsCompat
    boolean isRound() {

        return this.mSource.isRound();
    }


    @Override // android.support.v4.view.WindowInsetsCompat
    WindowInsetsCompat consumeSystemWindowInsets() {

        return new WindowInsetsCompatApi21(this.mSource.consumeSystemWindowInsets());
    }


    @Override // android.support.v4.view.WindowInsetsCompat
    WindowInsetsCompat replaceSystemWindowInsets(int left, int top, int right, int bottom) {

        return new WindowInsetsCompatApi21(this.mSource.replaceSystemWindowInsets(left, top, right, bottom));
    }


    @Override // android.support.v4.view.WindowInsetsCompat
    WindowInsetsCompat replaceSystemWindowInsets(Rect systemWindowInsets) {

        return new WindowInsetsCompatApi21(this.mSource.replaceSystemWindowInsets(systemWindowInsets));
    }


    @Override // android.support.v4.view.WindowInsetsCompat
    int getStableInsetTop() {

        return this.mSource.getStableInsetTop();
    }


    @Override // android.support.v4.view.WindowInsetsCompat
    int getStableInsetLeft() {

        return this.mSource.getStableInsetLeft();
    }


    @Override // android.support.v4.view.WindowInsetsCompat
    int getStableInsetRight() {

        return this.mSource.getStableInsetRight();
    }


    @Override // android.support.v4.view.WindowInsetsCompat
    int getStableInsetBottom() {

        return this.mSource.getStableInsetBottom();
    }


    @Override // android.support.v4.view.WindowInsetsCompat
    boolean hasStableInsets() {

        return this.mSource.hasStableInsets();
    }


    @Override // android.support.v4.view.WindowInsetsCompat
    WindowInsetsCompat consumeStableInsets() {

        return new WindowInsetsCompatApi21(this.mSource.consumeStableInsets());
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    WindowInsets unwrap() {

        return this.mSource;
    }

}

