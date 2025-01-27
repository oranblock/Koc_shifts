/* Auto-generated JavaScript code */
package android.support.v4.graphics.drawable;

import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapShader;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Shader;
import android.graphics.drawable.Drawable;
import android.util.DisplayMetrics;
/* loaded from: classes.dex */
abstract class RoundedBitmapDrawable extends Drawable {

    private static final int DEFAULT_PAINT_FLAGS = 3;
    final Bitmap mBitmap;
    private int mBitmapHeight;
    private final BitmapShader mBitmapShader;
    private int mBitmapWidth;
    private float mCornerRadius;
    private boolean mIsCircular;
    private int mTargetDensity;
    private int mGravity = 119;
    private final Paint mPaint = new Paint(3);
    private final Matrix mShaderMatrix = new Matrix();
    final Rect mDstRect = new Rect();
    private final RectF mDstRectF = new RectF();
    private boolean mApplyGravity = true;

    final Paint getPaint() {

        return this.mPaint;
    }


    final Bitmap getBitmap() {

        return this.mBitmap;
    }


    private void computeBitmapSize() {

        this.mBitmapWidth = this.mBitmap.getScaledWidth(this.mTargetDensity);
        this.mBitmapHeight = this.mBitmap.getScaledHeight(this.mTargetDensity);
    }


    void setTargetDensity(Canvas canvas) {

        setTargetDensity(canvas.getDensity());
    }


    void setTargetDensity(DisplayMetrics metrics) {

        setTargetDensity(metrics.densityDpi);
    }


    void setTargetDensity(int density) {

        if (this.mTargetDensity != density) {

            if (density == 0) {

                density = 160;
            }

            this.mTargetDensity = density;
            if (this.mBitmap != null) {

                computeBitmapSize();
            }

            invalidateSelf();
        }

    }


    int getGravity() {

        return this.mGravity;
    }


    void setGravity(int gravity) {

        if (this.mGravity != gravity) {

            this.mGravity = gravity;
            this.mApplyGravity = true;
            invalidateSelf();
        }

    }


    void setMipMap(boolean mipMap) {

        throw new UnsupportedOperationException();
    }


    boolean hasMipMap() {

        throw new UnsupportedOperationException();
    }


    void setAntiAlias(boolean aa) {

        this.mPaint.setAntiAlias(aa);
        invalidateSelf();
    }


    boolean hasAntiAlias() {

        return this.mPaint.isAntiAlias();
    }


    @Override // android.graphics.drawable.Drawable
    void setFilterBitmap(boolean filter) {

        this.mPaint.setFilterBitmap(filter);
        invalidateSelf();
    }


    @Override // android.graphics.drawable.Drawable
    void setDither(boolean dither) {

        this.mPaint.setDither(dither);
        invalidateSelf();
    }


    void gravityCompatApply(int gravity, int bitmapWidth, int bitmapHeight, Rect bounds, Rect outRect) {

        throw new UnsupportedOperationException();
    }


    void updateDstRect() {

        if (this.mApplyGravity) {

            if (this.mIsCircular) {

                int minDimen = Math.min(this.mBitmapWidth, this.mBitmapHeight);
                gravityCompatApply(this.mGravity, minDimen, minDimen, getBounds(), this.mDstRect);
                int minDrawDimen = Math.min(this.mDstRect.width(), this.mDstRect.height());
                this.mDstRect.inset(Math.max(0, (this.mDstRect.width() - minDrawDimen) / 2), Math.max(0, (this.mDstRect.height() - minDrawDimen) / 2));
                this.mCornerRadius = 0.5f * ((float) minDrawDimen);
            }
 else {

                gravityCompatApply(this.mGravity, this.mBitmapWidth, this.mBitmapHeight, getBounds(), this.mDstRect);
            }

            this.mDstRectF.set(this.mDstRect);
            if (this.mBitmapShader != null) {

                this.mShaderMatrix.setTranslate(this.mDstRectF.left, this.mDstRectF.top);
                this.mShaderMatrix.preScale(this.mDstRectF.width() / ((float) this.mBitmap.getWidth()), this.mDstRectF.height() / ((float) this.mBitmap.getHeight()));
                this.mBitmapShader.setLocalMatrix(this.mShaderMatrix);
                this.mPaint.setShader(this.mBitmapShader);
            }

            this.mApplyGravity = false;
        }

    }


    @Override // android.graphics.drawable.Drawable
    void draw(Canvas canvas) {

        Bitmap bitmap = this.mBitmap;
        if (bitmap != null) {

            updateDstRect();
            if (this.mPaint.getShader() == null) {

                canvas.drawBitmap(bitmap, (Rect) null, this.mDstRect, this.mPaint);
            }
 else {

                canvas.drawRoundRect(this.mDstRectF, this.mCornerRadius, this.mCornerRadius, this.mPaint);
            }

        }

    }


    @Override // android.graphics.drawable.Drawable
    void setAlpha(int alpha) {

        if (alpha != this.mPaint.getAlpha()) {

            this.mPaint.setAlpha(alpha);
            invalidateSelf();
        }

    }


    @Override // android.graphics.drawable.Drawable
    int getAlpha() {

        return this.mPaint.getAlpha();
    }


    @Override // android.graphics.drawable.Drawable
    void setColorFilter(ColorFilter cf) {

        this.mPaint.setColorFilter(cf);
        invalidateSelf();
    }


    @Override // android.graphics.drawable.Drawable
    ColorFilter getColorFilter() {

        return this.mPaint.getColorFilter();
    }


    void setCircular(boolean circular) {

        this.mIsCircular = circular;
        this.mApplyGravity = true;
        if (circular) {

            updateCircularCornerRadius();
            this.mPaint.setShader(this.mBitmapShader);
            invalidateSelf();
            return;
        }

        setCornerRadius(0.0f);
    }


    private void updateCircularCornerRadius() {

        this.mCornerRadius = (float) (Math.min(this.mBitmapHeight, this.mBitmapWidth) / 2);
    }


    boolean isCircular() {

        return this.mIsCircular;
    }


    void setCornerRadius(float cornerRadius) {

        if (this.mCornerRadius != cornerRadius) {

            this.mIsCircular = false;
            if (isGreaterThanZero(cornerRadius)) {

                this.mPaint.setShader(this.mBitmapShader);
            }
 else {

                this.mPaint.setShader(null);
            }

            this.mCornerRadius = cornerRadius;
            invalidateSelf();
        }

    }


    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {

        super.onBoundsChange(bounds);
        if (this.mIsCircular) {

            updateCircularCornerRadius();
        }

        this.mApplyGravity = true;
    }


    float getCornerRadius() {

        return this.mCornerRadius;
    }


    @Override // android.graphics.drawable.Drawable
    int getIntrinsicWidth() {

        return this.mBitmapWidth;
    }


    @Override // android.graphics.drawable.Drawable
    int getIntrinsicHeight() {

        return this.mBitmapHeight;
    }


    @Override // android.graphics.drawable.Drawable
    int getOpacity() {

        Bitmap bm;
        if (this.mGravity != 119 || this.mIsCircular || (bm = this.mBitmap) == null || bm.hasAlpha() || this.mPaint.getAlpha() < 255 || isGreaterThanZero(this.mCornerRadius)) {

            return -3;
        }

        return -1;
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    RoundedBitmapDrawable(Resources res, Bitmap bitmap) {

        this.mTargetDensity = 160;
        if (res != null) {

            this.mTargetDensity = res.getDisplayMetrics().densityDpi;
        }

        this.mBitmap = bitmap;
        if (this.mBitmap != null) {

            computeBitmapSize();
            this.mBitmapShader = new BitmapShader(this.mBitmap, Shader.TileMode.CLAMP, Shader.TileMode.CLAMP);
            return;
        }

        this.mBitmapHeight = -1;
        this.mBitmapWidth = -1;
        this.mBitmapShader = null;
    }


    private static boolean isGreaterThanZero(float toCompare) {

        return toCompare > 0.05f;
    }

}

