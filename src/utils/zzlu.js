/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.graphics.Canvas;
import android.graphics.Path;
import android.net.Uri;
import android.widget.ImageView;
/* loaded from: classes.dex */
final class zzlu extends ImageView {

    private int zzaeA;
    private zza zzaeB;
    private int zzaeC;
    private float zzaeD;
    private Uri zzaey;
    private int zzaez;

    /* loaded from: classes.dex */
    interface zza {

        Path zzk(int i, int i2);
    }


    @Override // android.widget.ImageView, android.view.View
    protected void onDraw(Canvas canvas) {

        if (this.zzaeB != null) {

            canvas.clipPath(this.zzaeB.zzk(getWidth(), getHeight()));
        }

        super.onDraw(canvas);
        if (this.zzaeA != 0) {

            canvas.drawColor(this.zzaeA);
        }

    }


    @Override // android.widget.ImageView, android.view.View
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {

        int measuredWidth;
        int i;
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        switch (this.zzaeC) {

            case 1:
                i = getMeasuredHeight();
                measuredWidth = (int) (((float) i) * this.zzaeD);
                break;
            case 2:
                measuredWidth = getMeasuredWidth();
                i = (int) (((float) measuredWidth) / this.zzaeD);
                break;
            default:
                return;
        }

        setMeasuredDimension(measuredWidth, i);
    }


    void zzbA(int i) {

        this.zzaez = i;
    }


    void zzj(Uri uri) {

        this.zzaey = uri;
    }


    int zzoH() {

        return this.zzaez;
    }

}

