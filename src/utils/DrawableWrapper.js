/* Auto-generated JavaScript code */
package android.support.v4.graphics.drawable;

import android.content.res.ColorStateList;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
/* loaded from: classes.dex */
interface DrawableWrapper {

    Drawable getWrappedDrawable();

    @Override // android.support.v4.graphics.drawable.DrawableWrapper
    void setTint(int i);

    @Override // android.support.v4.graphics.drawable.DrawableWrapper
    void setTintList(ColorStateList colorStateList);

    @Override // android.support.v4.graphics.drawable.DrawableWrapper
    void setTintMode(PorterDuff.Mode mode);

    void setWrappedDrawable(Drawable drawable);
}

