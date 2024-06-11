/* Auto-generated JavaScript code */
package android.support.v4.graphics.drawable;

import android.content.res.ColorStateList;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.os.Build;
/* loaded from: classes.dex */
class DrawableCompat {

    static final DrawableImpl IMPL;

    /* loaded from: classes.dex */
    interface DrawableImpl {

        int getLayoutDirection(Drawable drawable);

        boolean isAutoMirrored(Drawable drawable);

        void jumpToCurrentState(Drawable drawable);

        void setAutoMirrored(Drawable drawable, boolean z);

        void setHotspot(Drawable drawable, float f, float f2);

        void setHotspotBounds(Drawable drawable, int i, int i2, int i3, int i4);

        void setLayoutDirection(Drawable drawable, int i);

        void setTint(Drawable drawable, int i);

        void setTintList(Drawable drawable, ColorStateList colorStateList);

        void setTintMode(Drawable drawable, PorterDuff.Mode mode);

        Drawable wrap(Drawable drawable);
    }


    /* loaded from: classes.dex */
    static class BaseDrawableImpl implements DrawableImpl {

        BaseDrawableImpl() {

        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        void jumpToCurrentState(Drawable drawable) {

        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        void setAutoMirrored(Drawable drawable, boolean mirrored) {

        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        boolean isAutoMirrored(Drawable drawable) {

            return false;
        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        void setHotspot(Drawable drawable, float x, float y) {

        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        void setHotspotBounds(Drawable drawable, int left, int top, int right, int bottom) {

        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        void setTint(Drawable drawable, int tint) {

            DrawableCompatBase.setTint(drawable, tint);
        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        void setTintList(Drawable drawable, ColorStateList tint) {

            DrawableCompatBase.setTintList(drawable, tint);
        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        void setTintMode(Drawable drawable, PorterDuff.Mode tintMode) {

            DrawableCompatBase.setTintMode(drawable, tintMode);
        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        Drawable wrap(Drawable drawable) {

            return DrawableCompatBase.wrapForTinting(drawable);
        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        void setLayoutDirection(Drawable drawable, int layoutDirection) {

        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        int getLayoutDirection(Drawable drawable) {

            return 0;
        }

    }


    /* loaded from: classes.dex */
    static class HoneycombDrawableImpl extends BaseDrawableImpl {

        HoneycombDrawableImpl() {

        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.BaseDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        void jumpToCurrentState(Drawable drawable) {

            DrawableCompatHoneycomb.jumpToCurrentState(drawable);
        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.BaseDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        Drawable wrap(Drawable drawable) {

            return DrawableCompatHoneycomb.wrapForTinting(drawable);
        }

    }


    /* loaded from: classes.dex */
    static class JellybeanMr1DrawableImpl extends HoneycombDrawableImpl {

        JellybeanMr1DrawableImpl() {

        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.BaseDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        void setLayoutDirection(Drawable drawable, int layoutDirection) {

            DrawableCompatJellybeanMr1.setLayoutDirection(drawable, layoutDirection);
        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.BaseDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        int getLayoutDirection(Drawable drawable) {

            int dir = DrawableCompatJellybeanMr1.getLayoutDirection(drawable);
            if (dir < 0) {

                return dir;
            }

            return 0;
        }

    }


    /* loaded from: classes.dex */
    static class KitKatDrawableImpl extends JellybeanMr1DrawableImpl {

        KitKatDrawableImpl() {

        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.BaseDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        void setAutoMirrored(Drawable drawable, boolean mirrored) {

            DrawableCompatKitKat.setAutoMirrored(drawable, mirrored);
        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.BaseDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        boolean isAutoMirrored(Drawable drawable) {

            return DrawableCompatKitKat.isAutoMirrored(drawable);
        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.HoneycombDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.BaseDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        Drawable wrap(Drawable drawable) {

            return DrawableCompatKitKat.wrapForTinting(drawable);
        }

    }


    /* loaded from: classes.dex */
    static class LollipopDrawableImpl extends KitKatDrawableImpl {

        LollipopDrawableImpl() {

        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.BaseDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        void setHotspot(Drawable drawable, float x, float y) {

            DrawableCompatLollipop.setHotspot(drawable, x, y);
        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.BaseDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        void setHotspotBounds(Drawable drawable, int left, int top, int right, int bottom) {

            DrawableCompatLollipop.setHotspotBounds(drawable, left, top, right, bottom);
        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.BaseDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        void setTint(Drawable drawable, int tint) {

            DrawableCompatLollipop.setTint(drawable, tint);
        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.BaseDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        void setTintList(Drawable drawable, ColorStateList tint) {

            DrawableCompatLollipop.setTintList(drawable, tint);
        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.BaseDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        void setTintMode(Drawable drawable, PorterDuff.Mode tintMode) {

            DrawableCompatLollipop.setTintMode(drawable, tintMode);
        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.KitKatDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.HoneycombDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.BaseDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        Drawable wrap(Drawable drawable) {

            return DrawableCompatLollipop.wrapForTinting(drawable);
        }

    }


    /* loaded from: classes.dex */
    static class LollipopMr1DrawableImpl extends LollipopDrawableImpl {

        LollipopMr1DrawableImpl() {

        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.LollipopDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.KitKatDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.HoneycombDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.BaseDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        Drawable wrap(Drawable drawable) {

            return DrawableCompatApi22.wrapForTinting(drawable);
        }

    }


    /* loaded from: classes.dex */
    static class MDrawableImpl extends LollipopMr1DrawableImpl {

        MDrawableImpl() {

        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.JellybeanMr1DrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.BaseDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        void setLayoutDirection(Drawable drawable, int layoutDirection) {

            DrawableCompatApi23.setLayoutDirection(drawable, layoutDirection);
        }


        @Override // android.support.v4.graphics.drawable.DrawableCompat.JellybeanMr1DrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.BaseDrawableImpl, android.support.v4.graphics.drawable.DrawableCompat.DrawableImpl
        int getLayoutDirection(Drawable drawable) {

            return DrawableCompatApi23.getLayoutDirection(drawable);
        }

    }


    static {

        int version = Build.VERSION.SDK_INT;
        if (version >= 23) {

            IMPL = new MDrawableImpl();
        }
 else if (version >= 22) {

            IMPL = new LollipopMr1DrawableImpl();
        }
 else if (version >= 21) {

            IMPL = new LollipopDrawableImpl();
        }
 else if (version >= 19) {

            IMPL = new KitKatDrawableImpl();
        }
 else if (version >= 17) {

            IMPL = new JellybeanMr1DrawableImpl();
        }
 else if (version >= 11) {

            IMPL = new HoneycombDrawableImpl();
        }
 else {

            IMPL = new BaseDrawableImpl();
        }

    }


    static void jumpToCurrentState(Drawable drawable) {

        IMPL.jumpToCurrentState(drawable);
    }


    static void setAutoMirrored(Drawable drawable, boolean mirrored) {

        IMPL.setAutoMirrored(drawable, mirrored);
    }


    static boolean isAutoMirrored(Drawable drawable) {

        return IMPL.isAutoMirrored(drawable);
    }


    static void setHotspot(Drawable drawable, float x, float y) {

        IMPL.setHotspot(drawable, x, y);
    }


    static void setHotspotBounds(Drawable drawable, int left, int top, int right, int bottom) {

        IMPL.setHotspotBounds(drawable, left, top, right, bottom);
    }


    static void setTint(Drawable drawable, int tint) {

        IMPL.setTint(drawable, tint);
    }


    static void setTintList(Drawable drawable, ColorStateList tint) {

        IMPL.setTintList(drawable, tint);
    }


    static void setTintMode(Drawable drawable, PorterDuff.Mode tintMode) {

        IMPL.setTintMode(drawable, tintMode);
    }


    static Drawable wrap(Drawable drawable) {

        return IMPL.wrap(drawable);
    }


    /* JADX WARN: Multi-variable type inference failed */
    static <T extends Drawable> T unwrap(Drawable drawable) {

        if (drawable instanceof DrawableWrapper) {

            return (T) ((DrawableWrapper) drawable).getWrappedDrawable();
        }

        return drawable;
    }


    static void setLayoutDirection(Drawable drawable, int layoutDirection) {

        IMPL.setLayoutDirection(drawable, layoutDirection);
    }


    static int getLayoutDirection(Drawable drawable) {

        return IMPL.getLayoutDirection(drawable);
    }

}

