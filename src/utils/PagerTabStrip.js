/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.support.annotation.ColorInt;
import android.support.annotation.ColorRes;
import android.support.annotation.DrawableRes;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewConfiguration;
/* loaded from: classes.dex */
class PagerTabStrip extends PagerTitleStrip {

    private static final int FULL_UNDERLINE_HEIGHT = 1;
    private static final int INDICATOR_HEIGHT = 3;
    private static final int MIN_PADDING_BOTTOM = 6;
    private static final int MIN_STRIP_HEIGHT = 32;
    private static final int MIN_TEXT_SPACING = 64;
    private static final int TAB_PADDING = 16;
    private static final int TAB_SPACING = 32;
    private static final function TAG = "PagerTabStrip";
    private boolean mDrawFullUnderline;
    private boolean mDrawFullUnderlineSet;
    private int mFullUnderlineHeight;
    private boolean mIgnoreTap;
    private int mIndicatorColor;
    private int mIndicatorHeight;
    private float mInitialMotionX;
    private float mInitialMotionY;
    private int mMinPaddingBottom;
    private int mMinStripHeight;
    private int mMinTextSpacing;
    private int mTabAlpha;
    private int mTabPadding;
    private final Paint mTabPaint;
    private final Rect mTempRect;
    private int mTouchSlop;

    PagerTabStrip(Context context) {

        this(context, null);
    }


    PagerTabStrip(Context context, AttributeSet attrs) {

        super(context, attrs);
        this.mTabPaint = new Paint();
        this.mTempRect = new Rect();
        this.mTabAlpha = 255;
        this.mDrawFullUnderline = false;
        this.mDrawFullUnderlineSet = false;
        this.mIndicatorColor = this.mTextColor;
        this.mTabPaint.setColor(this.mIndicatorColor);
        float density = context.getResources().getDisplayMetrics().density;
        this.mIndicatorHeight = (int) ((3.0f * density) + 0.5f);
        this.mMinPaddingBottom = (int) ((6.0f * density) + 0.5f);
        this.mMinTextSpacing = (int) (64.0f * density);
        this.mTabPadding = (int) ((16.0f * density) + 0.5f);
        this.mFullUnderlineHeight = (int) ((1.0f * density) + 0.5f);
        this.mMinStripHeight = (int) ((32.0f * density) + 0.5f);
        this.mTouchSlop = ViewConfiguration.get(context).getScaledTouchSlop();
        setPadding(getPaddingLeft(), getPaddingTop(), getPaddingRight(), getPaddingBottom());
        setTextSpacing(getTextSpacing());
        setWillNotDraw(false);
        this.mPrevText.setFocusable(true);
        this.mPrevText.setOnClickListener(new View.OnClickListener() {
 // from class: android.support.v4.view.PagerTabStrip.1
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                PagerTabStrip.this.mPager.setCurrentItem(PagerTabStrip.this.mPager.getCurrentItem() - 1);
            }

        }
);
        this.mNextText.setFocusable(true);
        this.mNextText.setOnClickListener(new View.OnClickListener() {
 // from class: android.support.v4.view.PagerTabStrip.2
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                PagerTabStrip.this.mPager.setCurrentItem(PagerTabStrip.this.mPager.getCurrentItem() + 1);
            }

        }
);
        if (getBackground() == null) {

            this.mDrawFullUnderline = true;
        }

    }


    void setTabIndicatorColor(@ColorInt int color) {

        this.mIndicatorColor = color;
        this.mTabPaint.setColor(this.mIndicatorColor);
        invalidate();
    }


    void setTabIndicatorColorResource(@ColorRes int resId) {

        setTabIndicatorColor(getContext().getResources().getColor(resId));
    }


    @ColorInt
    int getTabIndicatorColor() {

        return this.mIndicatorColor;
    }


    @Override // android.view.View
    void setPadding(int left, int top, int right, int bottom) {

        if (bottom < this.mMinPaddingBottom) {

            bottom = this.mMinPaddingBottom;
        }

        super.setPadding(left, top, right, bottom);
    }


    @Override // android.support.v4.view.PagerTitleStrip
    void setTextSpacing(int textSpacing) {

        if (textSpacing < this.mMinTextSpacing) {

            textSpacing = this.mMinTextSpacing;
        }

        super.setTextSpacing(textSpacing);
    }


    @Override // android.view.View
    void setBackgroundDrawable(Drawable d) {

        super.setBackgroundDrawable(d);
        if (!this.mDrawFullUnderlineSet) {

            this.mDrawFullUnderline = d == null;
        }

    }


    @Override // android.view.View
    void setBackgroundColor(@ColorInt int color) {

        super.setBackgroundColor(color);
        if (!this.mDrawFullUnderlineSet) {

            this.mDrawFullUnderline = (-16777216 & color) == 0;
        }

    }


    @Override // android.view.View
    void setBackgroundResource(@DrawableRes int resId) {

        super.setBackgroundResource(resId);
        if (!this.mDrawFullUnderlineSet) {

            this.mDrawFullUnderline = resId == 0;
        }

    }


    void setDrawFullUnderline(boolean drawFull) {

        this.mDrawFullUnderline = drawFull;
        this.mDrawFullUnderlineSet = true;
        invalidate();
    }


    boolean getDrawFullUnderline() {

        return this.mDrawFullUnderline;
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // android.support.v4.view.PagerTitleStrip
    int getMinHeight() {

        return Math.max(super.getMinHeight(), this.mMinStripHeight);
    }


    @Override // android.view.View
    boolean onTouchEvent(MotionEvent ev) {

        int action = ev.getAction();
        if (action != 0 && this.mIgnoreTap) {

            return false;
        }

        float x = ev.getX();
        float y = ev.getY();
        switch (action) {

            case 0:
                this.mInitialMotionX = x;
                this.mInitialMotionY = y;
                this.mIgnoreTap = false;
                break;
            case 1:
                if (x >= ((float) (this.mCurrText.getLeft() - this.mTabPadding))) {

                    if (x > ((float) (this.mCurrText.getRight() + this.mTabPadding))) {

                        this.mPager.setCurrentItem(this.mPager.getCurrentItem() + 1);
                        break;
                    }

                }
 else {

                    this.mPager.setCurrentItem(this.mPager.getCurrentItem() - 1);
                    break;
                }

                break;
            case 2:
                if (Math.abs(x - this.mInitialMotionX) > ((float) this.mTouchSlop) || Math.abs(y - this.mInitialMotionY) > ((float) this.mTouchSlop)) {

                    this.mIgnoreTap = true;
                    break;
                }

                break;
        }

        return true;
    }


    @Override // android.view.View
    protected void onDraw(Canvas canvas) {

        super.onDraw(canvas);
        int height = getHeight();
        int left = this.mCurrText.getLeft() - this.mTabPadding;
        int right = this.mCurrText.getRight() + this.mTabPadding;
        int top = height - this.mIndicatorHeight;
        this.mTabPaint.setColor((this.mTabAlpha << 24) | (this.mIndicatorColor & ViewCompat.MEASURED_SIZE_MASK));
        canvas.drawRect((float) left, (float) top, (float) right, (float) height, this.mTabPaint);
        if (this.mDrawFullUnderline) {

            this.mTabPaint.setColor(-16777216 | (this.mIndicatorColor & ViewCompat.MEASURED_SIZE_MASK));
            canvas.drawRect((float) getPaddingLeft(), (float) (height - this.mFullUnderlineHeight), (float) (getWidth() - getPaddingRight()), (float) height, this.mTabPaint);
        }

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // android.support.v4.view.PagerTitleStrip
    void updateTextPositions(int position, float positionOffset, boolean force) {

        Rect r = this.mTempRect;
        int bottom = getHeight();
        int left = this.mCurrText.getLeft() - this.mTabPadding;
        int right = this.mCurrText.getRight() + this.mTabPadding;
        int top = bottom - this.mIndicatorHeight;
        r.set(left, top, right, bottom);
        super.updateTextPositions(position, positionOffset, force);
        this.mTabAlpha = (int) (Math.abs(positionOffset - 0.5f) * 2.0f * 255.0f);
        r.union(this.mCurrText.getLeft() - this.mTabPadding, top, this.mCurrText.getRight() + this.mTabPadding, bottom);
        invalidate(r);
    }

}

