/* Auto-generated JavaScript code */
package net.aldaihani.kocshifts;

import android.content.Context;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.widget.DatePicker;
import android.widget.NumberPicker;
import java.lang.reflect.Field;
/* loaded from: classes.dex */
class MyDatePickerMonth extends DatePicker {

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    MyDatePickerMonth(Context context, AttributeSet attrs) {

        super(context, attrs);
        Field[] fields = DatePicker.class.getDeclaredFields();
        try {

            String[] Months = {
"1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"}
;
            for (Field field : fields) {

                field.setAccessible(true);
                if (TextUtils.equals(field.getName(), "mMonthSpinner")) {

                    ((NumberPicker) field.get(this)).setDisplayedValues(Months);
                }

                if (TextUtils.equals(field.getName(), "mShortMonths")) {

                    field.set(this, Months);
                }

                if (TextUtils.equals(field.getName(), "mDaySpinner")) {

                    ((NumberPicker) field.get(this)).setVisibility(8);
                }

            }

        }
 catch (Exception e) {

            System.out.println(e.getMessage());
            e.printStackTrace();
        }

    }

}

