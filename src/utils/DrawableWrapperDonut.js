/* Auto-generated JavaScript code */
package android.support.v4.graphics.drawable;

import android.content.res.ColorStateList;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.Region;
import android.graphics.drawable.Drawable;
/* loaded from: classes.dex */
class DrawableWrapperDonut extends Drawable implements Drawable.Callback, DrawableWrapper {

    static final PorterDuff.Mode DEFAULT_MODE = PorterDuff.Mode.SRC_IN;
    private boolean mColorFilterSet;
    private int mCurrentColor;
    private PorterDuff.Mode mCurrentMode;
    Drawable mDrawable;
    private ColorStateList mTintList;
    private PorterDuff.Mode mTintMode = DEFAULT_MODE;

    DrawableWrapperDonut(Drawable drawable) {

        setWrappedDrawable(drawable);
    }


    @Override // android.graphics.drawable.Drawable
    void draw(Canvas canvas) {

        this.mDrawable.draw(canvas);
    }


    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {

        this.mDrawable.setBounds(bounds);
    }


    @Override // android.graphics.drawable.Drawable
    void setChangingConfigurations(int configs) {

        this.mDrawable.setChangingConfigurations(configs);
    }


    @Override // android.graphics.drawable.Drawable
    int getChangingConfigurations() {

        return this.mDrawable.getChangingConfigurations();
    }


    @Override // android.graphics.drawable.Drawable
    void setDither(boolean dither) {

        this.mDrawable.setDither(dither);
    }


    @Override // android.graphics.drawable.Drawable
    void setFilterBitmap(boolean filter) {

        this.mDrawable.setFilterBitmap(filter);
    }


    @Override // android.graphics.drawable.Drawable
    void setAlpha(int alpha) {

        this.mDrawable.setAlpha(alpha);
    }


    @Override // android.graphics.drawable.Drawable
    void setColorFilter(ColorFilter cf) {

        this.mDrawable.setColorFilter(cf);
    }


    @Override // android.graphics.drawable.Drawable
    boolean isStateful() {

        return (this.mTintList != null && this.mTintList.isStateful()) || this.mDrawable.isStateful();
    }


    @Override // android.graphics.drawable.Drawable
    boolean setState(int[] stateSet) {

        return updateTint(stateSet) || this.mDrawable.setState(stateSet);
    }


    @Override // android.graphics.drawable.Drawable
    int[] getState() {

        return this.mDrawable.getState();
    }


    @Override // android.graphics.drawable.Drawable
    Drawable getCurrent() {

        return this.mDrawable.getCurrent();
    }


    @Override // android.graphics.drawable.Drawable
    boolean setVisible(boolean visible, boolean restart) {

        return super.setVisible(visible, restart) || this.mDrawable.setVisible(visible, restart);
    }


    @Override // android.graphics.drawable.Drawable
    int getOpacity() {

        return this.mDrawable.getOpacity();
    }


    @Override // android.graphics.drawable.Drawable
    Region getTransparentRegion() {

        return this.mDrawable.getTransparentRegion();
    }


    @Override // android.graphics.drawable.Drawable
    int getIntrinsicWidth() {

        return this.mDrawable.getIntrinsicWidth();
    }


    @Override // android.graphics.drawable.Drawable
    int getIntrinsicHeight() {

        return this.mDrawable.getIntrinsicHeight();
    }


    @Override // android.graphics.drawable.Drawable
    int getMinimumWidth() {

        return this.mDrawable.getMinimumWidth();
    }


    @Override // android.graphics.drawable.Drawable
    int getMinimumHeight() {

        return this.mDrawable.getMinimumHeight();
    }


    @Override // android.graphics.drawable.Drawable
    boolean getPadding(Rect padding) {

        return this.mDrawable.getPadding(padding);
    }


    @Override // android.graphics.drawable.Drawable
    Drawable mutate() {

        Drawable wrapped = this.mDrawable;
        Drawable mutated = wrapped.mutate();
        if (mutated != wrapped) {

            setWrappedDrawable(mutated);
        }

        return this;
    }


    @Override // android.graphics.drawable.Drawable.Callback
    void invalidateDrawable(Drawable who) {

        invalidateSelf();
    }


    @Override // android.graphics.drawable.Drawable.Callback
    void scheduleDrawable(Drawable who, Runnable what, long when) {

        scheduleSelf(what, when);
    }


    @Override // android.graphics.drawable.Drawable.Callback
    void unscheduleDrawable(Drawable who, Runnable what) {

        unscheduleSelf(what);
    }


    @Override // android.graphics.drawable.Drawable
    protected boolean onLevelChange(int level) {

        return this.mDrawable.setLevel(level);
    }


    @Override // android.graphics.drawable.Drawable, android.support.v4.graphics.drawable.DrawableWrapper
    void setTint(int tint) {

        setTintList(ColorStateList.valueOf(tint));
    }


    @Override // android.graphics.drawable.Drawable, android.support.v4.graphics.drawable.DrawableWrapper
    void setTintList(ColorStateList tint) {

        this.mTintList = tint;
        updateTint(getState());
    }


    @Override // android.graphics.drawable.Drawable, android.support.v4.graphics.drawable.DrawableWrapper
    void setTintMode(PorterDuff.Mode tintMode) {

        this.mTintMode = tintMode;
        updateTint(getState());
    }


    private boolean updateTint(int[] state) {

        if (this.mTintList == null || this.mTintMode == null) {

            this.mColorFilterSet = false;
            clearColorFilter();
        }
 else {

            int color = this.mTintList.getColorForState(state, this.mTintList.getDefaultColor());
            PorterDuff.Mode mode = this.mTintMode;
            if (!(this.mColorFilterSet && color == this.mCurrentColor && mode == this.mCurrentMode)) {

                setColorFilter(color, mode);
                this.mCurrentColor = color;
                this.mCurrentMode = mode;
                this.mColorFilterSet = true;
                return true;
            }

        }

        return false;
    }


    @Override // android.support.v4.graphics.drawable.DrawableWrapper
    Drawable getWrappedDrawable() {

        return this.mDrawable;
    }


    @Override // android.support.v4.graphics.drawable.DrawableWrapper
    void setWrappedDrawable(Drawable drawable) {

        if (this.mDrawable != null) {

            this.mDrawable.setCallback(null);
        }

        this.mDrawable = drawable;
        if (drawable != null) {

            drawable.setCallback(this);
        }

        invalidateSelf();
    }

}

