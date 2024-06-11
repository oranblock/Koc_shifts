/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.view.View;
/* loaded from: classes.dex */
interface NestedScrollingParent {

    @Override // android.support.v4.view.NestedScrollingParent
    int getNestedScrollAxes();

    @Override // android.view.ViewGroup, android.support.v4.view.NestedScrollingParent
    boolean onNestedFling(View view, float f, float f2, boolean z);

    @Override // android.view.ViewGroup, android.support.v4.view.NestedScrollingParent
    boolean onNestedPreFling(View view, float f, float f2);

    @Override // android.view.ViewGroup, android.support.v4.view.NestedScrollingParent
    void onNestedPreScroll(View view, int i, int i2, int[] iArr);

    @Override // android.view.ViewGroup, android.support.v4.view.NestedScrollingParent
    void onNestedScroll(View view, int i, int i2, int i3, int i4);

    @Override // android.view.ViewGroup, android.support.v4.view.NestedScrollingParent
    void onNestedScrollAccepted(View view, View view2, int i);

    @Override // android.view.ViewGroup, android.support.v4.view.NestedScrollingParent
    boolean onStartNestedScroll(View view, View view2, int i);

    @Override // android.view.ViewGroup, android.support.v4.view.NestedScrollingParent
    void onStopNestedScroll(View view);
}

