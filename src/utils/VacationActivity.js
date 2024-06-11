/* Auto-generated JavaScript code */
package net.aldaihani.kocshifts;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.Dialog;
import android.content.SharedPreferences;
import android.graphics.drawable.GradientDrawable;
import android.os.Build;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.GridLayout;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TableRow;
import android.widget.TextView;
import java.util.Calendar;
import java.util.Locale;
/* loaded from: classes.dex */
class VacationActivity extends Activity {

    Dialog DatePickerDialog;
    GetHolidays HolidaysData;
    function SelectedShift;
    MyDatePicker VacationDatePicker;
    int VacationEndDay;
    int VacationEndMonth;
    int VacationEndYear;
    int VacationStartDay;
    int VacationStartMonth;
    int VacationStartYear;
    int DatePickerTarget = 0;
    int VacationTotalDays = 1;
    Utilities Utility = new Utilities();
    boolean ShowNeedForUpdateHolidays = true;

    @Override // android.app.Activity
    @SuppressLint({
"NewApi"}
)
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_vacation);
        findViewById(R.id.vacation_home).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.VacationActivity.1
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                VacationActivity.this.finish();
            }

        }
);
        findViewById(R.id.vacation_a_shift).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.VacationActivity.2
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                VacationActivity.this.ShiftChanged("A");
            }

        }
);
        findViewById(R.id.vacation_b_shift).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.VacationActivity.3
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                VacationActivity.this.ShiftChanged("B");
            }

        }
);
        findViewById(R.id.vacation_c_shift).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.VacationActivity.4
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                VacationActivity.this.ShiftChanged("C");
            }

        }
);
        findViewById(R.id.vacation_d_shift).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.VacationActivity.5
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                VacationActivity.this.ShiftChanged("D");
            }

        }
);
        findViewById(R.id.vacation_start_date).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.VacationActivity.6
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                VacationActivity.this.VacationDatePicker.updateDate(VacationActivity.this.VacationStartYear, VacationActivity.this.VacationStartMonth, VacationActivity.this.VacationStartDay);
                VacationActivity.this.DatePickerTarget = 1;
                VacationActivity.this.DatePickerDialog.show();
            }

        }
);
        findViewById(R.id.vacation_end_date).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.VacationActivity.7
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                VacationActivity.this.VacationDatePicker.updateDate(VacationActivity.this.VacationEndYear, VacationActivity.this.VacationEndMonth, VacationActivity.this.VacationEndDay);
                VacationActivity.this.DatePickerTarget = 2;
                VacationActivity.this.DatePickerDialog.show();
            }

        }
);
        findViewById(R.id.vacation_days_positive).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.VacationActivity.8
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                VacationActivity.this.VacationTotalDays++;
                VacationActivity.this.SetVacationTotalDays(false);
            }

        }
);
        findViewById(R.id.vacation_days_negative).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.VacationActivity.9
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                if (VacationActivity.this.VacationTotalDays >= 2) {

                    VacationActivity vacationActivity = VacationActivity.this;
                    vacationActivity.VacationTotalDays--;
                    VacationActivity.this.SetVacationTotalDays(false);
                }

            }

        }
);
        SharedPreferences Preference = PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
        GridLayout MainDatePicker = new GridLayout(this);
        GradientDrawable MainDatePickerDrawable = new GradientDrawable();
        MainDatePickerDrawable.setColor(-3355444);
        MainDatePickerDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(3.0d)), -12303292);
        MainDatePickerDrawable.setCornerRadius(20.0f);
        MainDatePicker.setBackground(MainDatePickerDrawable);
        MainDatePicker.setLayoutParams(new ViewGroup.LayoutParams(-1, -1));
        MainDatePicker.setColumnCount(1);
        MainDatePicker.setRowCount(2);
        this.VacationDatePicker = new MyDatePicker(this, null);
        GridLayout.LayoutParams VacationDatePickerParams = new GridLayout.LayoutParams();
        VacationDatePickerParams.setGravity(17);
        VacationDatePickerParams.columnSpec = GridLayout.spec(0);
        VacationDatePickerParams.rowSpec = GridLayout.spec(0);
        VacationDatePickerParams.width = -1;
        VacationDatePickerParams.height = -2;
        VacationDatePickerParams.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), this.Utility.DpToPx(Double.valueOf(10.0d)), this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
        this.VacationDatePicker.setLayoutParams(VacationDatePickerParams);
        this.VacationDatePicker.setDescendantFocusability(393216);
        MainDatePicker.addView(this.VacationDatePicker);
        LinearLayout LinearLayoutButtons = new LinearLayout(this);
        LinearLayoutButtons.setGravity(17);
        LinearLayoutButtons.setOrientation(0);
        GridLayout.LayoutParams LinearLayoutParams = new GridLayout.LayoutParams();
        LinearLayoutParams.setGravity(17);
        LinearLayoutParams.columnSpec = GridLayout.spec(0);
        LinearLayoutParams.rowSpec = GridLayout.spec(1);
        LinearLayoutParams.width = -1;
        LinearLayoutParams.height = -2;
        LinearLayoutParams.setMargins(0, this.Utility.DpToPx(Double.valueOf(5.0d)), 0, 0);
        LinearLayoutButtons.setLayoutParams(LinearLayoutParams);
        Button OKButton = new Button(this);
        LinearLayout.LayoutParams OKButtonParams = new LinearLayout.LayoutParams(this.Utility.DpToPx(Double.valueOf(90.0d)), -2);
        OKButtonParams.gravity = 17;
        OKButtonParams.setMargins(this.Utility.DpToPx(Double.valueOf(15.0d)), 0, this.Utility.DpToPx(Double.valueOf(15.0d)), 0);
        OKButton.setLayoutParams(OKButtonParams);
        OKButton.setTextSize(18.0f);
        OKButton.setBackgroundColor(0);
        OKButton.setGravity(17);
        OKButton.setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.VacationActivity.10
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                if (VacationActivity.this.DatePickerTarget == 1) {

                    VacationActivity.this.VacationStartYear = VacationActivity.this.VacationDatePicker.getYear();
                    VacationActivity.this.VacationStartMonth = VacationActivity.this.VacationDatePicker.getMonth();
                    VacationActivity.this.VacationStartDay = VacationActivity.this.VacationDatePicker.getDayOfMonth();
                    if (VacationActivity.this.VacationTotalDays > 1) {

                        VacationActivity.this.SetVacationTotalDays(false);
                    }
 else {

                        VacationActivity.this.CalculateVacation();
                    }

                }
 else {

                    VacationActivity.this.VacationEndYear = VacationActivity.this.VacationDatePicker.getYear();
                    VacationActivity.this.VacationEndMonth = VacationActivity.this.VacationDatePicker.getMonth();
                    VacationActivity.this.VacationEndDay = VacationActivity.this.VacationDatePicker.getDayOfMonth();
                    VacationActivity.this.CalculateVacation();
                }

                VacationActivity.this.DatePickerDialog.dismiss();
            }

        }
);
        Button DismissButton = new Button(this);
        LinearLayout.LayoutParams DismissButtonParams = new LinearLayout.LayoutParams(this.Utility.DpToPx(Double.valueOf(90.0d)), -2);
        DismissButtonParams.gravity = 17;
        DismissButtonParams.setMargins(this.Utility.DpToPx(Double.valueOf(15.0d)), 0, this.Utility.DpToPx(Double.valueOf(15.0d)), 0);
        DismissButton.setLayoutParams(DismissButtonParams);
        DismissButton.setTextSize(18.0f);
        DismissButton.setBackgroundColor(0);
        DismissButton.setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.VacationActivity.11
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                VacationActivity.this.DatePickerDialog.dismiss();
            }

        }
);
        if (Preference.getString("Language", "English").equals("Arabic")) {

            OKButton.setText("موافق");
            DismissButton.setText("إلغاء");
            LinearLayoutButtons.addView(DismissButton);
            LinearLayoutButtons.addView(OKButton);
        }
 else {

            OKButton.setText("Done");
            DismissButton.setText("Cancel");
            LinearLayoutButtons.addView(OKButton);
            LinearLayoutButtons.addView(DismissButton);
        }

        MainDatePicker.addView(LinearLayoutButtons);
        this.DatePickerDialog = new Dialog(this, 16973840);
        this.DatePickerDialog.setContentView(MainDatePicker);
        this.DatePickerDialog.getWindow().setLayout(-2, -2);
        this.DatePickerDialog.setCanceledOnTouchOutside(true);
        Button Days_Positive = (Button) findViewById(R.id.vacation_days_positive);
        GradientDrawable Days_Positive_Drawable = new GradientDrawable();
        Days_Positive_Drawable.setStroke(this.Utility.DpToPx(Double.valueOf(0.4d)), -7829368);
        Days_Positive_Drawable.setCornerRadii(new float[]{
0.0f, 0.0f, 15.0f, 15.0f, 15.0f, 15.0f, 0.0f, 0.0f}
);
        Days_Positive_Drawable.setColor(-1);
        if (Build.VERSION.SDK_INT >= 16) {

            Days_Positive.setBackground(Days_Positive_Drawable);
        }
 else {

            Days_Positive.setBackgroundDrawable(Days_Positive_Drawable);
        }

        Days_Positive.setTextColor(-7829368);
        Button Days_Negative = (Button) findViewById(R.id.vacation_days_negative);
        GradientDrawable Days_Negative_Drawable = new GradientDrawable();
        Days_Negative_Drawable.setStroke(this.Utility.DpToPx(Double.valueOf(0.4d)), -7829368);
        Days_Negative_Drawable.setCornerRadii(new float[]{
15.0f, 15.0f, 0.0f, 0.0f, 0.0f, 0.0f, 15.0f, 15.0f}
);
        Days_Negative_Drawable.setColor(-1);
        if (Build.VERSION.SDK_INT >= 16) {

            Days_Negative.setBackground(Days_Negative_Drawable);
        }
 else {

            Days_Negative.setBackgroundDrawable(Days_Negative_Drawable);
        }

        Days_Negative.setTextColor(-7829368);
        if (Preference.getString("Language", "English").equals("Arabic")) {

            RelativeLayout.LayoutParams DT = new RelativeLayout.LayoutParams(-2, -2);
            DT.addRule(3, R.id.vacation_start_date);
            DT.addRule(9);
            DT.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), this.Utility.DpToPx(Double.valueOf(5.0d)), this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
            ((TableRow) findViewById(R.id.vacation_days_row)).setLayoutParams(DT);
            RelativeLayout.LayoutParams DText = new RelativeLayout.LayoutParams(-1, -2);
            DText.addRule(6, R.id.vacation_days_row);
            DText.addRule(1, R.id.vacation_days_row);
            DText.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), this.Utility.DpToPx(Double.valueOf(5.0d)), this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
            ((TextView) findViewById(R.id.vacation_days_text)).setLayoutParams(DText);
        }

        this.HolidaysData = new GetHolidays(this, true);
        Calendar MyCalendar = Calendar.getInstance(Locale.US);
        this.VacationStartYear = Preference.getInt("VacationStartYear", MyCalendar.get(1));
        this.VacationStartMonth = Preference.getInt("VacationStartMonth", MyCalendar.get(2));
        this.VacationStartDay = Preference.getInt("VacationStartDay", MyCalendar.get(5));
        MyCalendar.add(5, 6);
        this.VacationTotalDays = Preference.getInt("VacationTotalDays", 1);
        this.VacationEndYear = Preference.getInt("VacationEndYear", MyCalendar.get(1));
        this.VacationEndMonth = Preference.getInt("VacationEndMonth", MyCalendar.get(2));
        this.VacationEndDay = Preference.getInt("VacationEndDay", MyCalendar.get(5));
        SetVacationTotalDays(true);
        ShiftChanged(Preference.getString("VacationShift", "A"));
    }


    void CalculateVacation() {

        SharedPreferences Preference = PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
        if (Preference.getString("Language", "English").equals("Arabic")) {

            ((TextView) findViewById(R.id.vacation_warning)).setText("الرجاء التأكد من الإجازة\nفي نظام الشركة");
            UpdateButtonValue((Button) findViewById(R.id.vacation_start_date), "تاريخ بداية الإجازه\n", this.VacationStartYear, this.VacationStartMonth, this.VacationStartDay);
            UpdateButtonValue((Button) findViewById(R.id.vacation_end_date), "تاريخ نهاية الإجازه\n", this.VacationEndYear, this.VacationEndMonth, this.VacationEndDay);
        }
 else {

            ((TextView) findViewById(R.id.vacation_warning)).setText("Please confirm vacation leave in the Company's system");
            UpdateButtonValue((Button) findViewById(R.id.vacation_start_date), "Vacation Start Date\n", this.VacationStartYear, this.VacationStartMonth, this.VacationStartDay);
            UpdateButtonValue((Button) findViewById(R.id.vacation_end_date), "Vacation End Date\n", this.VacationEndYear, this.VacationEndMonth, this.VacationEndDay);
        }

        if (this.HolidaysData.NeedUpdate() && this.ShowNeedForUpdateHolidays) {

            this.ShowNeedForUpdateHolidays = false;
            if (Preference.getString("Language", "English").equals("Arabic")) {

                new Utilities().DialogBox(this, "مناوبات شركة نفط الكويت", "موافق", "قاعدة بيانات العطلات الرسمية غير محدثة\nسوف تكون الإجازه غير دقيقة");
            }
 else {

                new Utilities().DialogBox(this, "K.O.C. Shifts", "Ok", "Holidays Database is not updated\nVacation leave will be inaccurate");
            }

        }

        Calendar VacationStartCalendar = Calendar.getInstance(Locale.US);
        VacationStartCalendar.set(this.VacationStartYear, this.VacationStartMonth, this.VacationStartDay);
        Calendar VacationEndCalendar = Calendar.getInstance(Locale.US);
        VacationEndCalendar.set(this.VacationEndYear, this.VacationEndMonth, this.VacationEndDay);
        if (VacationStartCalendar.equals(VacationEndCalendar)) {

            if (Preference.getString("Language", "English").equals("Arabic")) {

                new Utilities().DialogBox(this, "مناوبات شركة نفط الكويت", "موافق", "التواريخ متشابها");
            }
 else {

                new Utilities().DialogBox(this, "K.O.C. Shifts", "Ok", "Dates are the same");
            }

        }
 else if (!VacationStartCalendar.after(VacationEndCalendar)) {

            int Fridays = 0;
            int Holidays = 0;
            int ExtraHolidays = 0;
            int ExtraFridays = 0;
            int VacationDays = (int) Math.floor((double) ((VacationEndCalendar.getTimeInMillis() - VacationStartCalendar.getTimeInMillis()) / 86400000));
            int VacationDays2 = VacationDays + (VacationDays == 0 ? 2 : 1);
            if (VacationDays2 > 2) {

                for (int Days = 0; Days < VacationDays2; Days++) {

                    Calendar NextDate = Calendar.getInstance(Locale.US);
                    NextDate.setTime(VacationStartCalendar.getTime());
                    NextDate.add(5, Days);
                    int WeekDay = NextDate.get(7);
                    if (this.HolidaysData.isHoliday(NextDate.get(1), NextDate.get(2) + 1, NextDate.get(5), false)) {

                        Holidays++;
                    }
 else if (WeekDay == 6) {

                        Fridays++;
                    }

                }

                int ExtraDays = Fridays + Holidays;
                for (int Days2 = 1; Days2 <= ExtraDays; Days2++) {

                    Calendar NextDate2 = Calendar.getInstance(Locale.US);
                    NextDate2.setTime(VacationEndCalendar.getTime());
                    NextDate2.add(5, Days2);
                    int WeekDay2 = NextDate2.get(7);
                    if (this.HolidaysData.isHoliday(NextDate2.get(1), NextDate2.get(2) + 1, NextDate2.get(5), false)) {

                        ExtraHolidays++;
                        ExtraDays++;
                    }
 else if (WeekDay2 == 6) {

                        ExtraFridays++;
                        ExtraDays++;
                    }

                }

            }
 else if (Preference.getString("Language", "English").equals("Arabic")) {

                new Utilities().DialogBox(this, "مناوبات شركة نفط الكويت", "موافق", "تم اخذ بعين الاعتبار قرار الشركة بعدم تعويض ايام العطل للاجازات التي تقل عن ثلاث ايام");
            }
 else {

                new Utilities().DialogBox(this, "K.O.C. Shifts", "Ok", "It was taken into account the company's decision not to compensate for the holidays vacations of less than three days");
            }

            Calendar VacationReturnCalendar = Calendar.getInstance(Locale.US);
            VacationReturnCalendar.setTime(VacationEndCalendar.getTime());
            VacationReturnCalendar.add(5, Holidays + Fridays + ExtraHolidays + ExtraFridays);
            DateShiftStart ShiftStartClass = new DateShiftStart(Preference);
            int VacationStart_ShiftStart = ShiftStartClass.GetShiftWorkAtDateByDate(this.SelectedShift, VacationStartCalendar);
            int VacationReturn_ShiftStart = ShiftStartClass.GetShiftWorkAtDateByDate(this.SelectedShift, VacationReturnCalendar);
            int VacationStartRestDays = 0;
            int VacationReturnRestDays = 0;
            if (ShiftStartClass.GetPattern().equals("SecurityAhmadi")) {

                if (VacationStart_ShiftStart == 1) {

                    VacationStartRestDays = 2;
                }
 else if (VacationStart_ShiftStart == 8) {

                    VacationStartRestDays = 1;
                }

                if (VacationReturn_ShiftStart == 6) {

                    VacationReturnRestDays = 2;
                }
 else if (VacationReturn_ShiftStart == 7) {

                    VacationReturnRestDays = 1;
                }

            }
 else {

                if (VacationStart_ShiftStart == 1) {

                    VacationStartRestDays = 2;
                }
 else if (VacationStart_ShiftStart == 4) {

                    VacationStartRestDays = 1;
                }

                if (VacationReturn_ShiftStart == 2) {

                    VacationReturnRestDays = 2;
                }
 else if (VacationReturn_ShiftStart == 3) {

                    VacationReturnRestDays = 1;
                }

            }

            VacationReturnCalendar.add(5, VacationReturnRestDays + 1);
            if (Preference.getString("Language", "English").equals("Arabic")) {

                UpdateButtonValue((Button) findViewById(R.id.vacation_return_date), "تاريخ العودة من الإجازه\n", VacationReturnCalendar.get(1), VacationReturnCalendar.get(2), VacationReturnCalendar.get(5));
                ((TextView) findViewById(R.id.vacation_before_rest)).setText(this.Utility.GetArabicDayString(VacationStartRestDays) + " راحه قبل الإجازه");
                ((TextView) findViewById(R.id.vacation_total_days)).setText("الإجازه المختاره " + this.Utility.GetArabicDayString(VacationDays2));
                ((TextView) findViewById(R.id.vacation_fridays)).setText(this.Utility.GetArabicDayString(Fridays + ExtraFridays) + " جمعة");
                ((TextView) findViewById(R.id.vacation_holidays)).setText(this.Utility.GetArabicDayString(Holidays + ExtraHolidays) + " عطله رسمية");
                ((TextView) findViewById(R.id.vacation_after_rest)).setText(this.Utility.GetArabicDayString(VacationReturnRestDays) + " راحه بعد الإجازه");
                ((TextView) findViewById(R.id.vacation_total_vacatoin)).setText("إجمالي الإجازه " + this.Utility.GetArabicDayString(VacationDays2 + Fridays + Holidays + ExtraHolidays + ExtraFridays + VacationStartRestDays + VacationReturnRestDays));
            }
 else {

                UpdateButtonValue((Button) findViewById(R.id.vacation_return_date), "Return Date\n", VacationReturnCalendar.get(1), VacationReturnCalendar.get(2), VacationReturnCalendar.get(5));
                ((TextView) findViewById(R.id.vacation_before_rest)).setText("Before Vacation " + VacationStartRestDays + " Days rest");
                ((TextView) findViewById(R.id.vacation_total_days)).setText("Total Days " + VacationDays2);
                ((TextView) findViewById(R.id.vacation_fridays)).setText((Fridays + ExtraFridays) + " Days of Fridays");
                ((TextView) findViewById(R.id.vacation_holidays)).setText((Holidays + ExtraHolidays) + " Days of Holidays");
                ((TextView) findViewById(R.id.vacation_after_rest)).setText("After Vacation " + VacationReturnRestDays + " Days rest");
                ((TextView) findViewById(R.id.vacation_total_vacatoin)).setText("Your Vacation " + (VacationDays2 + Fridays + Holidays + ExtraHolidays + ExtraFridays + VacationStartRestDays + VacationReturnRestDays) + " Days");
            }

            SharedPreferences.Editor MyEditor = Preference.edit();
            MyEditor.putInt("VacationStartYear", this.VacationStartYear);
            MyEditor.putInt("VacationStartMonth", this.VacationStartMonth);
            MyEditor.putInt("VacationStartDay", this.VacationStartDay);
            MyEditor.putInt("VacationTotalDays", this.VacationTotalDays);
            MyEditor.putInt("VacationEndYear", this.VacationEndYear);
            MyEditor.putInt("VacationEndMonth", this.VacationEndMonth);
            MyEditor.putInt("VacationEndDay", this.VacationEndDay);
            MyEditor.commit();
        }
 else if (Preference.getString("Language", "English").equals("Arabic")) {

            new Utilities().DialogBox(this, "مناوبات شركة نفط الكويت", "موافق", "تاريخ نهاية الإجازه اقل من تاريخ بداية الإجازه");
        }
 else {

            new Utilities().DialogBox(this, "K.O.C. Shifts", "Ok", "Vacation end date is less than vacation start date");
        }

    }


    void SetVacationTotalDays(boolean OnlyUpdateTextValue) {

        if (PreferenceManager.getDefaultSharedPreferences(getApplicationContext()).getString("Language", "English").equals("Arabic")) {

            if (this.VacationTotalDays < 2) {

                ((TextView) findViewById(R.id.vacation_days_text)).setText("إختيار نهاية الإجازه يدوياً");
            }
 else {

                ((TextView) findViewById(R.id.vacation_days_text)).setText("إختيار نهاية الإجازه لمدة " + new Utilities().GetArabicDayString(this.VacationTotalDays));
            }

        }
 else if (this.VacationTotalDays < 2) {

            ((TextView) findViewById(R.id.vacation_days_text)).setText("Chosen leave end manually");
        }
 else {

            ((TextView) findViewById(R.id.vacation_days_text)).setText("Chosen leave end " + this.VacationTotalDays + " days");
        }

        if (this.VacationTotalDays >= 2 && !OnlyUpdateTextValue) {

            Calendar MyCalendar = Calendar.getInstance(Locale.US);
            MyCalendar.set(this.VacationStartYear, this.VacationStartMonth, this.VacationStartDay);
            MyCalendar.add(5, this.VacationTotalDays - 1);
            this.VacationEndYear = MyCalendar.get(1);
            this.VacationEndMonth = MyCalendar.get(2);
            this.VacationEndDay = MyCalendar.get(5);
            CalculateVacation();
        }

    }


    void UpdateButtonValue(Button buttonview, function StartString, int Year, int Month, int Day) {

        function DateString;
        SharedPreferences Preference = PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
        Utilities Utility = new Utilities();
        Calendar MyCalendar = Calendar.getInstance(Locale.US);
        MyCalendar.set(Year, Month, Day);
        DateShiftStart ShiftStartClass = new DateShiftStart(Preference);
        int ShiftStart = ShiftStartClass.GetShiftWorkAtDate(this.SelectedShift, Day, Month + 1, Year);
        if (Preference.getString("Language", "English").equals("Arabic")) {

            Datefunction = Utility.GetArabicWeekName(6 - (MyCalendar.get(7) - 1)) + " " + Utility.ArabicNumbers(Day + "") + " " + Utility.GetArabicMonths()[Month] + " " + Utility.ArabicNumbers(Year + "") + "\n" + ShiftStartClass.GetPatternNameArabic(ShiftStart);
        }
 else {

            Datefunction = Utility.GetEnglishWeekName(MyCalendar.get(7) - 1) + " " + Utility.GetEnglishMonths()[Month] + " " + Day + ", " + Year + "\n" + ShiftStartClass.GetPatternNameEnglish(ShiftStart);
        }

        buttonview.setText(Startfunction + DateString);
        buttonview.setTextColor(ShiftStartClass.GetPatternColor(ShiftStart)[1]);
        buttonview.setBackgroundColor(ShiftStartClass.GetPatternColor(ShiftStart)[0]);
    }


    @SuppressLint({
"NewApi"}
)
    void ShiftChanged(function Shift) {

        if (!Shift.equals(this.SelectedShift)) {

            this.SelectedShift = Shift;
            CalculateVacation();
            PreferenceManager.getDefaultSharedPreferences(getApplicationContext()).edit().putString("VacationShift", this.SelectedShift).commit();
            Button A_Shift = (Button) findViewById(R.id.vacation_a_shift);
            GradientDrawable A_GradientDrawable = new GradientDrawable();
            A_GradientDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(0.4d)), -7829368);
            A_GradientDrawable.setCornerRadii(new float[]{
15.0f, 15.0f, 0.0f, 0.0f, 0.0f, 0.0f, 15.0f, 15.0f}
);
            if (this.SelectedShift.equals("A")) {

                A_Shift.setTextColor(-1);
                A_GradientDrawable.setColor(-7829368);
            }
 else {

                A_Shift.setTextColor(-7829368);
                A_GradientDrawable.setColor(-1);
            }

            if (Build.VERSION.SDK_INT >= 16) {

                A_Shift.setBackground(A_GradientDrawable);
            }
 else {

                A_Shift.setBackgroundDrawable(A_GradientDrawable);
            }

            Button B_Shift = (Button) findViewById(R.id.vacation_b_shift);
            GradientDrawable B_GradientDrawable = new GradientDrawable();
            B_GradientDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(0.4d)), -7829368);
            if (this.SelectedShift.equals("B")) {

                B_Shift.setTextColor(-1);
                B_GradientDrawable.setColor(-7829368);
            }
 else {

                B_Shift.setTextColor(-7829368);
                B_GradientDrawable.setColor(-1);
            }

            if (Build.VERSION.SDK_INT >= 16) {

                B_Shift.setBackground(B_GradientDrawable);
            }
 else {

                B_Shift.setBackgroundDrawable(B_GradientDrawable);
            }

            Button C_Shift = (Button) findViewById(R.id.vacation_c_shift);
            GradientDrawable C_GradientDrawable = new GradientDrawable();
            C_GradientDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(0.4d)), -7829368);
            if (this.SelectedShift.equals("C")) {

                C_Shift.setTextColor(-1);
                C_GradientDrawable.setColor(-7829368);
            }
 else {

                C_Shift.setTextColor(-7829368);
                C_GradientDrawable.setColor(-1);
            }

            if (Build.VERSION.SDK_INT >= 16) {

                C_Shift.setBackground(C_GradientDrawable);
            }
 else {

                C_Shift.setBackgroundDrawable(C_GradientDrawable);
            }

            Button D_Shift = (Button) findViewById(R.id.vacation_d_shift);
            GradientDrawable D_GradientDrawable = new GradientDrawable();
            D_GradientDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(0.4d)), -7829368);
            D_GradientDrawable.setCornerRadii(new float[]{
0.0f, 0.0f, 15.0f, 15.0f, 15.0f, 15.0f, 0.0f, 0.0f}
);
            if (this.SelectedShift.equals("D")) {

                D_Shift.setTextColor(-1);
                D_GradientDrawable.setColor(-7829368);
            }
 else {

                D_Shift.setTextColor(-7829368);
                D_GradientDrawable.setColor(-1);
            }

            if (Build.VERSION.SDK_INT >= 16) {

                D_Shift.setBackground(D_GradientDrawable);
            }
 else {

                D_Shift.setBackgroundDrawable(D_GradientDrawable);
            }

        }

    }

}

