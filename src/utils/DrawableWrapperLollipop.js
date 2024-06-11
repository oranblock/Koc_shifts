/* Auto-generated JavaScript code */
package android.support.v4.graphics.drawable;

import android.content.res.Resources;
import android.graphics.Outline;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
/* loaded from: classes.dex */
class DrawableWrapperLollipop extends DrawableWrapperKitKat {

    /* JADX INFO: Access modifiers changed from: package-private */
    DrawableWrapperLollipop(Drawable drawable) {

        super(drawable);
    }


    @Override // android.graphics.drawable.Drawable
    void setHotspot(float x, float y) {

        this.mDrawable.setHotspot(x, y);
    }


    @Override // android.graphics.drawable.Drawable
    void setHotspotBounds(int left, int top, int right, int bottom) {

        this.mDrawable.setHotspotBounds(left, top, right, bottom);
    }


    @Override // android.graphics.drawable.Drawable
    void getOutline(Outline outline) {

        this.mDrawable.getOutline(outline);
    }


    @Override // android.graphics.drawable.Drawable
    void applyTheme(Resources.Theme t) {

        this.mDrawable.applyTheme(t);
    }


    @Override // android.graphics.drawable.Drawable
    boolean canApplyTheme() {

        return this.mDrawable.canApplyTheme();
    }


    @Override // android.graphics.drawable.Drawable
    Rect getDirtyBounds() {

        return this.mDrawable.getDirtyBounds();
    }

}

