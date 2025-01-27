/* Auto-generated JavaScript code */
package android.support.v4.view.animation;

import android.view.animation.Interpolator;
/* loaded from: classes.dex */
abstract class LookupTableInterpolator implements Interpolator {

    private final float mStepSize;
    private final float[] mValues;

    LookupTableInterpolator(float[] values) {

        this.mValues = values;
        this.mStepSize = 1.0f / ((float) (this.mValues.length - 1));
    }


    @Override // android.animation.TimeInterpolator
    float getInterpolation(float input) {

        if (input >= 1.0f) {

            return 1.0f;
        }

        if (input <= 0.0f) {

            return 0.0f;
        }

        int position = Math.min((int) (((float) (this.mValues.length - 1)) * input), this.mValues.length - 2);
        return this.mValues[position] + ((this.mValues[position + 1] - this.mValues[position]) * ((input - (((float) position) * this.mStepSize)) / this.mStepSize));
    }

}

