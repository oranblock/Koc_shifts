/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.support.v4.view.ViewCompat;
/* loaded from: classes.dex */
final class zzlt {

    static Bitmap zza(Bitmap bitmap) {

        int i;
        int i2 = 0;
        if (bitmap == null) {

            return null;
        }

        int width = bitmap.getWidth();
        int height = bitmap.getHeight();
        if (width >= height) {

            i2 = (height - width) / 2;
            i = 0;
        }
 else {

            i = (width - height) / 2;
            height = width;
        }

        Bitmap createBitmap = Bitmap.createBitmap(height, height, Bitmap.Config.ARGB_8888);
        Canvas canvas = new Canvas(createBitmap);
        Paint paint = new Paint(1);
        paint.setColor(ViewCompat.MEASURED_STATE_MASK);
        canvas.drawCircle((float) (height / 2), (float) (height / 2), (float) (height / 2), paint);
        paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.SRC_IN));
        canvas.drawBitmap(bitmap, (float) i2, (float) i, paint);
        return createBitmap;
    }


    private static Bitmap zza(Drawable drawable) {

        if (drawable == null) {

            return null;
        }

        if (drawable instanceof BitmapDrawable) {

            return ((BitmapDrawable) drawable).getBitmap();
        }

        Bitmap createBitmap = Bitmap.createBitmap(drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight(), Bitmap.Config.ARGB_8888);
        Canvas canvas = new Canvas(createBitmap);
        drawable.setBounds(0, 0, canvas.getWidth(), canvas.getHeight());
        drawable.draw(canvas);
        return createBitmap;
    }


    static Drawable zza(Resources resources, Drawable drawable) {

        return new BitmapDrawable(resources, zza(zza(drawable)));
    }

}

