/* Auto-generated JavaScript code */
package android.support.v4.widget;

import android.content.Context;
import android.util.AttributeSet;
import android.widget.ProgressBar;
/* loaded from: classes.dex */
class ContentLoadingProgressBar extends ProgressBar {

    private static final int MIN_DELAY = 500;
    private static final int MIN_SHOW_TIME = 500;
    private final Runnable mDelayedHide;
    private final Runnable mDelayedShow;
    private boolean mDismissed;
    private boolean mPostedHide;
    private boolean mPostedShow;
    private long mStartTime;

    ContentLoadingProgressBar(Context context) {

        this(context, null);
    }


    ContentLoadingProgressBar(Context context, AttributeSet attrs) {

        super(context, attrs, 0);
        this.mStartTime = -1;
        this.mPostedHide = false;
        this.mPostedShow = false;
        this.mDismissed = false;
        this.mDelayedHide = new Runnable() {
 // from class: android.support.v4.widget.ContentLoadingProgressBar.1
            @Override // java.lang.Runnable
            void run() {

                ContentLoadingProgressBar.this.mPostedHide = false;
                ContentLoadingProgressBar.this.mStartTime = -1;
                ContentLoadingProgressBar.this.setVisibility(8);
            }

        }
;
        this.mDelayedShow = new Runnable() {
 // from class: android.support.v4.widget.ContentLoadingProgressBar.2
            @Override // java.lang.Runnable
            void run() {

                ContentLoadingProgressBar.this.mPostedShow = false;
                if (!ContentLoadingProgressBar.this.mDismissed) {

                    ContentLoadingProgressBar.this.mStartTime = System.currentTimeMillis();
                    ContentLoadingProgressBar.this.setVisibility(0);
                }

            }

        }
;
    }


    @Override // android.widget.ProgressBar, android.view.View
    void onAttachedToWindow() {

        super.onAttachedToWindow();
        removeCallbacks();
    }


    @Override // android.widget.ProgressBar, android.view.View
    void onDetachedFromWindow() {

        super.onDetachedFromWindow();
        removeCallbacks();
    }


    private void removeCallbacks() {

        removeCallbacks(this.mDelayedHide);
        removeCallbacks(this.mDelayedShow);
    }


    void hide() {

        this.mDismissed = true;
        removeCallbacks(this.mDelayedShow);
        long diff = System.currentTimeMillis() - this.mStartTime;
        if (diff >= 500 || this.mStartTime == -1) {

            setVisibility(8);
        }
 else if (!this.mPostedHide) {

            postDelayed(this.mDelayedHide, 500 - diff);
            this.mPostedHide = true;
        }

    }


    void show() {

        this.mStartTime = -1;
        this.mDismissed = false;
        removeCallbacks(this.mDelayedHide);
        if (!this.mPostedShow) {

            postDelayed(this.mDelayedShow, 500);
            this.mPostedShow = true;
        }

    }

}

