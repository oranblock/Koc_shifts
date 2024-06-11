/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.os.SystemClock;
/* loaded from: classes.dex */
final class zzls extends Drawable implements Drawable.Callback {

    private int mFrom;
    private long zzNY;
    private boolean zzaea;
    private int zzaeh;
    private int zzaei;
    private int zzaej;
    private int zzaek;
    private int zzael;
    private boolean zzaem;
    private zzb zzaen;
    private Drawable zzaeo;
    private Drawable zzaep;
    private boolean zzaeq;
    private boolean zzaer;
    private boolean zzaes;
    private int zzaet;

    /* loaded from: classes.dex */
    private static final class zza extends Drawable {

        private static final zza zzaeu = new zza();
        private static final C0025zza zzaev = new C0025zza();

        /* renamed from: com.google.android.gms.internal.zzls$zza$zza  reason: collision with other inner class name */
        /* loaded from: classes.dex */
        private static final class C0025zza extends Drawable.ConstantState {

            private C0025zza() {

            }


            @Override // android.graphics.drawable.Drawable.ConstantState
            int getChangingConfigurations() {

                return 0;
            }


            @Override // android.graphics.drawable.Drawable.ConstantState
            Drawable newDrawable() {

                return zza.zzaeu;
            }

        }


        private zza() {

        }


        @Override // android.graphics.drawable.Drawable
        void draw(Canvas canvas) {

        }


        @Override // android.graphics.drawable.Drawable
        Drawable.ConstantState getConstantState() {

            return zzaev;
        }


        @Override // android.graphics.drawable.Drawable
        int getOpacity() {

            return -2;
        }


        @Override // android.graphics.drawable.Drawable
        void setAlpha(int alpha) {

        }


        @Override // android.graphics.drawable.Drawable
        void setColorFilter(ColorFilter cf) {

        }

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: classes.dex */
    static final class zzb extends Drawable.ConstantState {

        int zzaew;
        int zzaex;

        zzb(zzb zzb) {

            if (zzb != null) {

                this.zzaew = zzb.zzaew;
                this.zzaex = zzb.zzaex;
            }

        }


        @Override // android.graphics.drawable.Drawable.ConstantState
        int getChangingConfigurations() {

            return this.zzaew;
        }


        @Override // android.graphics.drawable.Drawable.ConstantState
        Drawable newDrawable() {

            return new zzls(this);
        }

    }


    zzls(Drawable drawable, Drawable drawable2) {

        this(null);
        drawable = drawable == null ? zza.zzaeu : drawable;
        this.zzaeo = drawable;
        drawable.setCallback(this);
        this.zzaen.zzaex |= drawable.getChangingConfigurations();
        drawable2 = drawable2 == null ? zza.zzaeu : drawable2;
        this.zzaep = drawable2;
        drawable2.setCallback(this);
        this.zzaen.zzaex |= drawable2.getChangingConfigurations();
    }


    zzls(zzb zzb2) {

        this.zzaeh = 0;
        this.zzaej = 255;
        this.zzael = 0;
        this.zzaea = true;
        this.zzaen = new zzb(zzb2);
    }


    boolean canConstantState() {

        if (!this.zzaeq) {

            this.zzaer = (this.zzaeo.getConstantState() == null || this.zzaep.getConstantState() == null) ? false : true;
            this.zzaeq = true;
        }

        return this.zzaer;
    }


    @Override // android.graphics.drawable.Drawable
    void draw(Canvas canvas) {

        boolean z = true;
        boolean z2 = false;
        switch (this.zzaeh) {

            case 1:
                this.zzNY = SystemClock.uptimeMillis();
                this.zzaeh = 2;
                break;
            case 2:
                if (this.zzNY >= 0) {

                    float uptimeMillis = ((float) (SystemClock.uptimeMillis() - this.zzNY)) / ((float) this.zzaek);
                    if (uptimeMillis < 1.0f) {

                        z = false;
                    }

                    if (z) {

                        this.zzaeh = 0;
                    }

                    this.zzael = (int) ((Math.min(uptimeMillis, 1.0f) * ((float) (this.zzaei - this.mFrom))) + ((float) this.mFrom));
                }

            default:
                z2 = z;
                break;
        }

        int i = this.zzael;
        boolean z3 = this.zzaea;
        Drawable drawable = this.zzaeo;
        Drawable drawable2 = this.zzaep;
        if (z2) {

            if (!z3 || i == 0) {

                drawable.draw(canvas);
            }

            if (i == this.zzaej) {

                drawable2.setAlpha(this.zzaej);
                drawable2.draw(canvas);
                return;
            }

            return;
        }

        if (z3) {

            drawable.setAlpha(this.zzaej - i);
        }

        drawable.draw(canvas);
        if (z3) {

            drawable.setAlpha(this.zzaej);
        }

        if (i > 0) {

            drawable2.setAlpha(i);
            drawable2.draw(canvas);
            drawable2.setAlpha(this.zzaej);
        }

        invalidateSelf();
    }


    @Override // android.graphics.drawable.Drawable
    int getChangingConfigurations() {

        return super.getChangingConfigurations() | this.zzaen.zzaew | this.zzaen.zzaex;
    }


    @Override // android.graphics.drawable.Drawable
    Drawable.ConstantState getConstantState() {

        if (!canConstantState()) {

            return null;
        }

        this.zzaen.zzaew = getChangingConfigurations();
        return this.zzaen;
    }


    @Override // android.graphics.drawable.Drawable
    int getIntrinsicHeight() {

        return Math.max(this.zzaeo.getIntrinsicHeight(), this.zzaep.getIntrinsicHeight());
    }


    @Override // android.graphics.drawable.Drawable
    int getIntrinsicWidth() {

        return Math.max(this.zzaeo.getIntrinsicWidth(), this.zzaep.getIntrinsicWidth());
    }


    @Override // android.graphics.drawable.Drawable
    int getOpacity() {

        if (!this.zzaes) {

            this.zzaet = Drawable.resolveOpacity(this.zzaeo.getOpacity(), this.zzaep.getOpacity());
            this.zzaes = true;
        }

        return this.zzaet;
    }


    @Override // android.graphics.drawable.Drawable.Callback
    void invalidateDrawable(Drawable who) {

        Drawable.Callback callback;
        if (zzmx.zzqu() && (callback = getCallback()) != null) {

            callback.invalidateDrawable(this);
        }

    }


    @Override // android.graphics.drawable.Drawable
    Drawable mutate() {

        if (!this.zzaem && super.mutate() == this) {

            if (!canConstantState()) {

                throw new IllegalStateException("One or more children of this LayerDrawable does not have constant state; this drawable cannot be mutated.");
            }

            this.zzaeo.mutate();
            this.zzaep.mutate();
            this.zzaem = true;
        }

        return this;
    }


    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {

        this.zzaeo.setBounds(bounds);
        this.zzaep.setBounds(bounds);
    }


    @Override // android.graphics.drawable.Drawable.Callback
    void scheduleDrawable(Drawable who, Runnable what, long when) {

        Drawable.Callback callback;
        if (zzmx.zzqu() && (callback = getCallback()) != null) {

            callback.scheduleDrawable(this, what, when);
        }

    }


    @Override // android.graphics.drawable.Drawable
    void setAlpha(int alpha) {

        if (this.zzael == this.zzaej) {

            this.zzael = alpha;
        }

        this.zzaej = alpha;
        invalidateSelf();
    }


    @Override // android.graphics.drawable.Drawable
    void setColorFilter(ColorFilter cf) {

        this.zzaeo.setColorFilter(cf);
        this.zzaep.setColorFilter(cf);
    }


    void startTransition(int durationMillis) {

        this.mFrom = 0;
        this.zzaei = this.zzaej;
        this.zzael = 0;
        this.zzaek = durationMillis;
        this.zzaeh = 1;
        invalidateSelf();
    }


    @Override // android.graphics.drawable.Drawable.Callback
    void unscheduleDrawable(Drawable who, Runnable what) {

        Drawable.Callback callback;
        if (zzmx.zzqu() && (callback = getCallback()) != null) {

            callback.unscheduleDrawable(this, what);
        }

    }


    Drawable zzoF() {

        return this.zzaep;
    }

}

