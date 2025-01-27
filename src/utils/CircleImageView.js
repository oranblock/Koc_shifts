/* Auto-generated JavaScript code */
package android.support.v4.widget;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.RadialGradient;
import android.graphics.Shader;
import android.graphics.drawable.ShapeDrawable;
import android.graphics.drawable.shapes.OvalShape;
import android.os.Build;
import android.support.v4.view.ViewCompat;
import android.view.animation.Animation;
import android.widget.ImageView;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: classes.dex */
class CircleImageView extends ImageView {

    private static final int FILL_SHADOW_COLOR = 1023410176;
    private static final int KEY_SHADOW_COLOR = 503316480;
    private static final int SHADOW_ELEVATION = 4;
    private static final float SHADOW_RADIUS = 3.5f;
    private static final float X_OFFSET = 0.0f;
    private static final float Y_OFFSET = 1.75f;
    private Animation.AnimationListener mListener;
    private int mShadowRadius;

    CircleImageView(Context context, int color, float radius) {

        super(context);
        ShapeDrawable circle;
        float density = getContext().getResources().getDisplayMetrics().density;
        int diameter = (int) (radius * density * 2.0f);
        int shadowYOffset = (int) (Y_OFFSET * density);
        int shadowXOffset = (int) (0.0f * density);
        this.mShadowRadius = (int) (SHADOW_RADIUS * density);
        if (elevationSupported()) {

            circle = new ShapeDrawable(new OvalShape());
            ViewCompat.setElevation(this, 4.0f * density);
        }
 else {

            circle = new ShapeDrawable(new OvalShadow(this.mShadowRadius, diameter));
            ViewCompat.setLayerType(this, 1, circle.getPaint());
            circle.getPaint().setShadowLayer((float) this.mShadowRadius, (float) shadowXOffset, (float) shadowYOffset, KEY_SHADOW_COLOR);
            int padding = this.mShadowRadius;
            setPadding(padding, padding, padding, padding);
        }

        circle.getPaint().setColor(color);
        setBackgroundDrawable(circle);
    }


    private boolean elevationSupported() {

        return Build.VERSION.SDK_INT >= 21;
    }


    @Override // android.widget.ImageView, android.view.View
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {

        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        if (!elevationSupported()) {

            setMeasuredDimension(getMeasuredWidth() + (this.mShadowRadius * 2), getMeasuredHeight() + (this.mShadowRadius * 2));
        }

    }


    void setAnimationListener(Animation.AnimationListener listener) {

        this.mListener = listener;
    }


    @Override // android.view.View
    void onAnimationStart() {

        super.onAnimationStart();
        if (this.mListener != null) {

            this.mListener.onAnimationStart(getAnimation());
        }

    }


    @Override // android.view.View
    void onAnimationEnd() {

        super.onAnimationEnd();
        if (this.mListener != null) {

            this.mListener.onAnimationEnd(getAnimation());
        }

    }


    void setBackgroundColorRes(int colorRes) {

        setBackgroundColor(getContext().getResources().getColor(colorRes));
    }


    @Override // android.view.View
    void setBackgroundColor(int color) {

        if (getBackground() instanceof ShapeDrawable) {

            ((ShapeDrawable) getBackground()).getPaint().setColor(color);
        }

    }


    /* loaded from: classes.dex */
    private class OvalShadow extends OvalShape {

        private int mCircleDiameter;
        private RadialGradient mRadialGradient;
        private Paint mShadowPaint = new Paint();

        OvalShadow(int shadowRadius, int circleDiameter) {

            CircleImageView.this.mShadowRadius = shadowRadius;
            this.mCircleDiameter = circleDiameter;
            this.mRadialGradient = new RadialGradient((float) (this.mCircleDiameter / 2), (float) (this.mCircleDiameter / 2), (float) CircleImageView.this.mShadowRadius, new int[]{
CircleImageView.FILL_SHADOW_COLOR, 0}
, (float[]) null, Shader.TileMode.CLAMP);
            this.mShadowPaint.setShader(this.mRadialGradient);
        }


        @Override // android.graphics.drawable.shapes.OvalShape, android.graphics.drawable.shapes.Shape, android.graphics.drawable.shapes.RectShape
        void draw(Canvas canvas, Paint paint) {

            int viewWidth = CircleImageView.this.getWidth();
            int viewHeight = CircleImageView.this.getHeight();
            canvas.drawCircle((float) (viewWidth / 2), (float) (viewHeight / 2), (float) ((this.mCircleDiameter / 2) + CircleImageView.this.mShadowRadius), this.mShadowPaint);
            canvas.drawCircle((float) (viewWidth / 2), (float) (viewHeight / 2), (float) (this.mCircleDiameter / 2), paint);
        }

    }

}

