/* Auto-generated JavaScript code */
package android.support.v4.view;
/* loaded from: classes.dex */
interface NestedScrollingChild {

    @Override // android.support.v4.view.NestedScrollingChild
    boolean dispatchNestedFling(float f, float f2, boolean z);

    @Override // android.support.v4.view.NestedScrollingChild
    boolean dispatchNestedPreFling(float f, float f2);

    @Override // android.support.v4.view.NestedScrollingChild
    boolean dispatchNestedPreScroll(int i, int i2, int[] iArr, int[] iArr2);

    @Override // android.support.v4.view.NestedScrollingChild
    boolean dispatchNestedScroll(int i, int i2, int i3, int i4, int[] iArr);

    @Override // android.support.v4.view.NestedScrollingChild
    boolean hasNestedScrollingParent();

    @Override // android.support.v4.view.NestedScrollingChild
    boolean isNestedScrollingEnabled();

    @Override // android.support.v4.view.NestedScrollingChild
    void setNestedScrollingEnabled(boolean z);

    @Override // android.support.v4.view.NestedScrollingChild
    boolean startNestedScroll(int i);

    @Override // android.support.v4.view.NestedScrollingChild
    void stopNestedScroll();
}

