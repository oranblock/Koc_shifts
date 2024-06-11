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
import android.support.v4.view.ViewCompat;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.DisplayMetrics;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.inputmethod.InputMethodManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TableRow;
import android.widget.TextView;
import java.util.Calendar;
import java.util.Locale;
@SuppressLint({
"NewApi"}
)
/* loaded from: classes.dex */
class CalculatorActivity extends Activity {

    Dialog DatePickerDialog;
    EditText EditHolidays;
    EditText EditNormal;
    EditText EditSalary;
    EditText EditSpecial;
    function SelectedShift;
    Utilities Utility = new Utilities();

    @Override // android.app.Activity
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_calculator);
        SharedPreferences Preference = PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
        findViewById(R.id.calculator_yearly_increment_button).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.CalculatorActivity.1
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                EditText OldBasicSalaryEdit = (EditText) CalculatorActivity.this.findViewById(R.id.calculator_old_basic_salary);
                EditText NewBasicSalaryEdit = (EditText) CalculatorActivity.this.findViewById(R.id.calculator_new_basic_salary);
                EditText ValuationEdit = (EditText) CalculatorActivity.this.findViewById(R.id.calculator_valuation);
                float OldBasicSalary = (float) (OldBasicSalaryEdit.getText().toString().equals("") ? 0.0d : (double) Float.valueOf(OldBasicSalaryEdit.getText().toString()).floatValue());
                float NewBasicSalary = (float) (NewBasicSalaryEdit.getText().toString().equals("") ? 0.0d : (double) Float.valueOf(NewBasicSalaryEdit.getText().toString()).floatValue());
                int Valuation = ValuationEdit.getText().toString().equals("") ? 0 : Integer.valueOf(ValuationEdit.getText().toString()).intValue();
                if (OldBasicSalary > 0.0f && NewBasicSalary > 0.0f) {

                    ValuationEdit.setText(String.format("%s", Integer.valueOf(Math.round(((NewBasicSalary - OldBasicSalary) / OldBasicSalary) * 1000.0f))));
                }
 else if (OldBasicSalary > 0.0f && Valuation > 0) {

                    NewBasicSalaryEdit.setText(String.format("%.3f", Float.valueOf((float) (((((double) Valuation) / 1000.0d) * ((double) OldBasicSalary)) + ((double) OldBasicSalary)))));
                }
 else if (NewBasicSalary > 0.0f && Valuation > 0) {

                    OldBasicSalaryEdit.setText(String.format("%.3f", Float.valueOf((float) ((1.0d - (((double) Valuation) / 1000.0d)) * ((double) NewBasicSalary)))));
                }
 else if (PreferenceManager.getDefaultSharedPreferences(CalculatorActivity.this.getApplicationContext()).getString("Language", "English").equals("Arabic")) {

                    new Utilities().DialogBox(CalculatorActivity.this, "مناوبات شركة نفط الكويت", "موافق", "يرجى إدخال قيمتين من القيم الثلاث لحساب ذلك");
                }
 else {

                    new Utilities().DialogBox(CalculatorActivity.this, "K.O.C. Shifts", "Ok", "Please enter two values of the three values to calculate it");
                }

            }

        }
);
        findViewById(R.id.calculator_home).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.CalculatorActivity.2
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                CalculatorActivity.this.finish();
            }

        }
);
        findViewById(R.id.calculator_month_button).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.CalculatorActivity.3
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                CalculatorActivity.this.DatePickerDialog.show();
            }

        }
);
        RelativeLayout MainDatePicker = new RelativeLayout(this);
        MainDatePicker.setLayoutParams(new ViewGroup.LayoutParams(-2, -2));
        GradientDrawable MainDatePicker_Drawable = new GradientDrawable();
        MainDatePicker_Drawable.setCornerRadius(40.0f);
        MainDatePicker_Drawable.setStroke(this.Utility.DpToPx(Double.valueOf(3.0d)), -12303292);
        MainDatePicker_Drawable.setColor(-1);
        if (Build.VERSION.SDK_INT >= 16) {

            MainDatePicker.setBackground(MainDatePicker_Drawable);
        }
 else {

            MainDatePicker.setBackgroundDrawable(MainDatePicker_Drawable);
        }

        TableRow Shifts_Table = new TableRow(this);
        Shifts_Table.setId(2001);
        Shifts_Table.setOrientation(0);
        Shifts_Table.setGravity(17);
        RelativeLayout.LayoutParams Shifts_Table_Params = new RelativeLayout.LayoutParams(-1, -2);
        Shifts_Table_Params.addRule(14);
        Shifts_Table_Params.addRule(10);
        Shifts_Table_Params.setMargins(0, this.Utility.DpToPx(Double.valueOf(10.0d)), 0, 0);
        Shifts_Table.setLayoutParams(Shifts_Table_Params);
        Button A_Shift_Button = new Button(this);
        A_Shift_Button.setId(2002);
        TableRow.LayoutParams A_Shift_Button_Params = new TableRow.LayoutParams(this.Utility.DpToPx(Double.valueOf(50.0d)), this.Utility.DpToPx(Double.valueOf(33.0d)));
        A_Shift_Button_Params.setMargins(0, 0, 0, 0);
        A_Shift_Button.setLayoutParams(A_Shift_Button_Params);
        A_Shift_Button.setPadding(0, 0, 0, 0);
        A_Shift_Button.setText("A");
        A_Shift_Button.setTextColor(ViewCompat.MEASURED_STATE_MASK);
        A_Shift_Button.setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.CalculatorActivity.4
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                CalculatorActivity.this.DatePickerShiftChanged("A");
            }

        }
);
        Shifts_Table.addView(A_Shift_Button);
        Button B_Shift_Button = new Button(this);
        B_Shift_Button.setId(2003);
        new TableRow.LayoutParams(this.Utility.DpToPx(Double.valueOf(50.0d)), this.Utility.DpToPx(Double.valueOf(33.0d))).setMargins(0, 0, 0, 0);
        B_Shift_Button.setLayoutParams(A_Shift_Button_Params);
        B_Shift_Button.setPadding(0, 0, 0, 0);
        B_Shift_Button.setText("B");
        B_Shift_Button.setTextColor(ViewCompat.MEASURED_STATE_MASK);
        B_Shift_Button.setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.CalculatorActivity.5
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                CalculatorActivity.this.DatePickerShiftChanged("B");
            }

        }
);
        Shifts_Table.addView(B_Shift_Button);
        Button C_Shift_Button = new Button(this);
        C_Shift_Button.setId(2004);
        TableRow.LayoutParams C_Shift_Button_Params = new TableRow.LayoutParams(this.Utility.DpToPx(Double.valueOf(50.0d)), this.Utility.DpToPx(Double.valueOf(33.0d)));
        C_Shift_Button_Params.setMargins(0, 0, 0, 0);
        C_Shift_Button.setLayoutParams(C_Shift_Button_Params);
        C_Shift_Button.setPadding(0, 0, 0, 0);
        C_Shift_Button.setText("C");
        C_Shift_Button.setTextColor(ViewCompat.MEASURED_STATE_MASK);
        C_Shift_Button.setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.CalculatorActivity.6
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                CalculatorActivity.this.DatePickerShiftChanged("C");
            }

        }
);
        Shifts_Table.addView(C_Shift_Button);
        Button D_Shift_Button = new Button(this);
        D_Shift_Button.setId(2005);
        TableRow.LayoutParams D_Shift_Button_Params = new TableRow.LayoutParams(this.Utility.DpToPx(Double.valueOf(50.0d)), this.Utility.DpToPx(Double.valueOf(33.0d)));
        D_Shift_Button_Params.setMargins(0, 0, 0, 0);
        D_Shift_Button.setLayoutParams(D_Shift_Button_Params);
        D_Shift_Button.setPadding(0, 0, 0, 0);
        D_Shift_Button.setText("D");
        D_Shift_Button.setTextColor(ViewCompat.MEASURED_STATE_MASK);
        D_Shift_Button.setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.CalculatorActivity.7
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                CalculatorActivity.this.DatePickerShiftChanged("D");
            }

        }
);
        Shifts_Table.addView(D_Shift_Button);
        MainDatePicker.addView(Shifts_Table);
        MyDatePickerMonth MonthDatePicker = new MyDatePickerMonth(this, null);
        MonthDatePicker.setId(2010);
        MonthDatePicker.setDescendantFocusability(393216);
        RelativeLayout.LayoutParams MonthDatePicker_Params = new RelativeLayout.LayoutParams(-1, -2);
        MonthDatePicker_Params.addRule(14);
        MonthDatePicker_Params.addRule(3, 2001);
        MonthDatePicker_Params.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), this.Utility.DpToPx(Double.valueOf(10.0d)), this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
        MonthDatePicker.setLayoutParams(MonthDatePicker_Params);
        MonthDatePicker.updateDate(Calendar.getInstance(Locale.US).get(1), Calendar.getInstance(Locale.US).get(2), 1);
        MainDatePicker.addView(MonthDatePicker);
        LinearLayout LinearLayoutButtons = new LinearLayout(this);
        LinearLayoutButtons.setGravity(17);
        LinearLayoutButtons.setOrientation(0);
        RelativeLayout.LayoutParams LinearLayoutParams = new RelativeLayout.LayoutParams(-1, -2);
        LinearLayoutParams.addRule(14);
        LinearLayoutParams.addRule(3, 2010);
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
 // from class: net.aldaihani.kocshifts.CalculatorActivity.8
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                MyDatePickerMonth MonthDatePicker2 = (MyDatePickerMonth) CalculatorActivity.this.DatePickerDialog.findViewById(2010);
                if (MonthDatePicker2 != null) {

                    CalculatorActivity.this.CalculateMonthOvertime(MonthDatePicker2.getMonth(), MonthDatePicker2.getYear());
                    CalculatorActivity.this.DatePickerDialog.dismiss();
                }

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
 // from class: net.aldaihani.kocshifts.CalculatorActivity.9
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                CalculatorActivity.this.DatePickerDialog.dismiss();
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
        DisplayMetrics Out = new DisplayMetrics();
        this.DatePickerDialog.getWindow().getWindowManager().getDefaultDisplay().getMetrics(Out);
        this.DatePickerDialog.getWindow().setLayout((int) (((double) Out.widthPixels) * 0.7d), -2);
        this.DatePickerDialog.setCanceledOnTouchOutside(true);
        DatePickerShiftChanged("A");
        TextWatcher EditTextChanged = new TextWatcher() {
 // from class: net.aldaihani.kocshifts.CalculatorActivity.10
            @Override // android.text.TextWatcher
            void afterTextChanged(Editable s) {

                CalculatorActivity.this.CalculateOvertime();
            }


            @Override // android.text.TextWatcher
            void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }


            @Override // android.text.TextWatcher
            void onTextChanged(CharSequence s, int start, int before, int count) {

            }

        }
;
        TextView.OnEditorActionListener ActionNoFocus = new TextView.OnEditorActionListener() {
 // from class: net.aldaihani.kocshifts.CalculatorActivity.11
            @Override // android.widget.TextView.OnEditorActionListener
            boolean onEditorAction(TextView v, int actionId, KeyEvent event) {

                if (actionId != 3 && actionId != 6 && (event.getAction() != 0 || event.getKeyCode() != 66)) {

                    return false;
                }

                ((RelativeLayout) CalculatorActivity.this.findViewById(R.id.calculator_root)).requestFocus();
                ((InputMethodManager) CalculatorActivity.this.getSystemService("input_method")).hideSoftInputFromWindow(CalculatorActivity.this.getCurrentFocus().getWindowToken(), 0);
                return true;
            }

        }
;
        this.EditSalary = (EditText) findViewById(R.id.calculator_salary_edit);
        this.EditNormal = (EditText) findViewById(R.id.calculator_ll_normal_edit);
        this.EditSpecial = (EditText) findViewById(R.id.calculator_ll_special_edit);
        this.EditHolidays = (EditText) findViewById(R.id.calculator_ll_holidays_edit);
        EditText EditOldBasicSalary = (EditText) findViewById(R.id.calculator_old_basic_salary);
        EditText EditNewBasicSalary = (EditText) findViewById(R.id.calculator_new_basic_salary);
        EditText EditValuation = (EditText) findViewById(R.id.calculator_valuation);
        this.EditSalary.addTextChangedListener(EditTextChanged);
        this.EditNormal.addTextChangedListener(EditTextChanged);
        this.EditSpecial.addTextChangedListener(EditTextChanged);
        this.EditHolidays.addTextChangedListener(EditTextChanged);
        this.EditSalary.setOnEditorActionListener(ActionNoFocus);
        this.EditNormal.setOnEditorActionListener(ActionNoFocus);
        this.EditSpecial.setOnEditorActionListener(ActionNoFocus);
        this.EditHolidays.setOnEditorActionListener(ActionNoFocus);
        EditOldBasicSalary.setOnEditorActionListener(ActionNoFocus);
        EditNewBasicSalary.setOnEditorActionListener(ActionNoFocus);
        EditValuation.setOnEditorActionListener(ActionNoFocus);
        if (Preference.getString("Language", "English").equals("Arabic")) {

            RelativeLayout.LayoutParams RS = new RelativeLayout.LayoutParams(-1, -2);
            RS.addRule(6, R.id.calculator_ll_special);
            RS.addRule(1, R.id.calculator_ll_special);
            RelativeLayout.LayoutParams LS = new RelativeLayout.LayoutParams(-1, -2);
            LS.addRule(6, R.id.calculator_ll_special);
            LS.addRule(0, R.id.calculator_ll_special);
            ((LinearLayout) findViewById(R.id.calculator_ll_holidays)).setLayoutParams(LS);
            ((LinearLayout) findViewById(R.id.calculator_ll_normal)).setLayoutParams(RS);
            RelativeLayout.LayoutParams ST = new RelativeLayout.LayoutParams(-2, -2);
            ST.addRule(4, R.id.calculator_salary_edit);
            ST.addRule(1, R.id.calculator_salary_edit);
            ST.setMargins(this.Utility.DpToPx(Double.valueOf(14.0d)), 0, this.Utility.DpToPx(Double.valueOf(14.0d)), 0);
            ((TextView) findViewById(R.id.calculator_salary_text)).setLayoutParams(ST);
            RelativeLayout.LayoutParams YearlyOC = new RelativeLayout.LayoutParams(-2, -2);
            YearlyOC.addRule(9);
            YearlyOC.addRule(4, R.id.calculator_old_basic_salary);
            YearlyOC.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), 0, this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
            ((TextView) findViewById(R.id.calculator_old_basic_salary_currency)).setLayoutParams(YearlyOC);
            RelativeLayout.LayoutParams YearlyO = new RelativeLayout.LayoutParams(-2, -2);
            YearlyO.addRule(3, R.id.calculator_yearly_increment);
            YearlyO.addRule(1, R.id.calculator_old_basic_salary_currency);
            YearlyO.setMargins(0, this.Utility.DpToPx(Double.valueOf(5.0d)), 0, 0);
            ((EditText) findViewById(R.id.calculator_old_basic_salary)).setLayoutParams(YearlyO);
            RelativeLayout.LayoutParams YearlyOT = new RelativeLayout.LayoutParams(-1, -2);
            YearlyOT.addRule(4, R.id.calculator_old_basic_salary);
            YearlyOT.addRule(1, R.id.calculator_old_basic_salary);
            YearlyOT.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), 0, 0, 0);
            ((TextView) findViewById(R.id.calculator_old_basic_salary_text)).setLayoutParams(YearlyOT);
            RelativeLayout.LayoutParams YearlyNC = new RelativeLayout.LayoutParams(-2, -2);
            YearlyNC.addRule(9);
            YearlyNC.addRule(4, R.id.calculator_new_basic_salary);
            YearlyNC.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), 0, this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
            ((TextView) findViewById(R.id.calculator_new_basic_salary_currency)).setLayoutParams(YearlyNC);
            RelativeLayout.LayoutParams YearlyN = new RelativeLayout.LayoutParams(-2, -2);
            YearlyN.addRule(3, R.id.calculator_old_basic_salary);
            YearlyN.addRule(1, R.id.calculator_new_basic_salary_currency);
            YearlyN.setMargins(0, this.Utility.DpToPx(Double.valueOf(5.0d)), 0, 0);
            ((EditText) findViewById(R.id.calculator_new_basic_salary)).setLayoutParams(YearlyN);
            RelativeLayout.LayoutParams YearlyNT = new RelativeLayout.LayoutParams(-1, -2);
            YearlyNT.addRule(4, R.id.calculator_new_basic_salary);
            YearlyNT.addRule(1, R.id.calculator_new_basic_salary);
            YearlyNT.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), 0, 0, 0);
            ((TextView) findViewById(R.id.calculator_new_basic_salary_text)).setLayoutParams(YearlyNT);
            RelativeLayout.LayoutParams YearlyV = new RelativeLayout.LayoutParams(-2, -2);
            YearlyV.addRule(3, R.id.calculator_new_basic_salary);
            YearlyV.addRule(1, R.id.calculator_new_basic_salary_currency);
            YearlyV.setMargins(0, this.Utility.DpToPx(Double.valueOf(5.0d)), 0, 0);
            ((EditText) findViewById(R.id.calculator_valuation)).setLayoutParams(YearlyV);
            RelativeLayout.LayoutParams YearlyVT = new RelativeLayout.LayoutParams(-1, -2);
            YearlyVT.addRule(4, R.id.calculator_valuation);
            YearlyVT.addRule(1, R.id.calculator_valuation);
            YearlyVT.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), 0, 0, 0);
            ((TextView) findViewById(R.id.calculator_valuation_text)).setLayoutParams(YearlyVT);
            ((TextView) findViewById(R.id.calculator_salary_text)).setText("راتبك");
            this.EditSalary.setHint("الراتب");
            this.EditNormal.setHint("العادي");
            this.EditSpecial.setHint("الخاص");
            this.EditHolidays.setHint("العطل");
            ((TextView) findViewById(R.id.calculator_beta)).setText("تحت الإختبار (Beta)");
            ((TextView) findViewById(R.id.calculator_month_dates)).setText("\nإختر الشهر لحسابه\n");
            ((TextView) findViewById(R.id.calculator_month_normal)).setText("الإضافي العادي (لا يوجد بيانات)");
            ((TextView) findViewById(R.id.calculator_month_special)).setText("الإضافي الخاص (لا يوجد بيانات)");
            ((TextView) findViewById(R.id.calculator_month_morning)).setText("مناوبة صباحية (رمضان) (لا يوجد بيانات)");
            ((TextView) findViewById(R.id.calculator_month_night)).setText("مناوبة مسائية (رمضان) (لا يوجد بيانات)");
            ((TextView) findViewById(R.id.calculator_month_holidays)).setText("إضافي العطل (لا يوجد بيانات)");
            ((TextView) findViewById(R.id.calculator_month_restday)).setText("ثاني يوم راحة (لا يوجد بيانات)");
            ((TextView) findViewById(R.id.calculator_month_total)).setText("إجمالي الإضافي (لا يوجد بيانات)");
            ((Button) findViewById(R.id.calculator_month_button)).setText("إحسب الشهر");
            ((TextView) findViewById(R.id.calculator_yearly_increment)).setText("حاسبة الزيادة السنوية");
            ((TextView) findViewById(R.id.calculator_old_basic_salary_text)).setText("الراتب الأساسي القديم");
            ((TextView) findViewById(R.id.calculator_old_basic_salary_currency)).setText("د.ك");
            ((TextView) findViewById(R.id.calculator_new_basic_salary_text)).setText("الراتب الأساسي الجديد");
            ((TextView) findViewById(R.id.calculator_new_basic_salary_currency)).setText("د.ك");
            ((TextView) findViewById(R.id.calculator_valuation_text)).setText("التقييم");
            ((Button) findViewById(R.id.calculator_yearly_increment_button)).setText("إحسب");
        }
 else {

            ((TextView) findViewById(R.id.calculator_salary_text)).setText("Your Salary");
            this.EditSalary.setHint("Salary");
            this.EditNormal.setHint("Normal");
            this.EditSpecial.setHint("Special");
            this.EditHolidays.setHint("Holiday");
            ((TextView) findViewById(R.id.calculator_beta)).setText("Under Testing (Beta)");
            ((TextView) findViewById(R.id.calculator_month_dates)).setText("\nSelect Month To Calculate\n");
            ((TextView) findViewById(R.id.calculator_month_normal)).setText("Normal Overtime (No Data)");
            ((TextView) findViewById(R.id.calculator_month_special)).setText("Special Overtime (No Data)");
            ((TextView) findViewById(R.id.calculator_month_morning)).setText("Ramadan Morning Shift (No Data)");
            ((TextView) findViewById(R.id.calculator_month_night)).setText("Ramadan Night Shift (No Data)");
            ((TextView) findViewById(R.id.calculator_month_holidays)).setText("Holiday Overtime (No Data)");
            ((TextView) findViewById(R.id.calculator_month_restday)).setText("Second Day Off (No Data)");
            ((TextView) findViewById(R.id.calculator_month_total)).setText("Total Overtime (No Data)");
            ((Button) findViewById(R.id.calculator_month_button)).setText("Calculate Month");
            ((TextView) findViewById(R.id.calculator_yearly_increment)).setText("Calculator Yearly Increment");
            ((TextView) findViewById(R.id.calculator_old_basic_salary_text)).setText("Old Basic Salary");
            ((TextView) findViewById(R.id.calculator_old_basic_salary_currency)).setText("KWD");
            ((TextView) findViewById(R.id.calculator_new_basic_salary_text)).setText("New Basic Salary");
            ((TextView) findViewById(R.id.calculator_new_basic_salary_currency)).setText("KWD");
            ((TextView) findViewById(R.id.calculator_valuation_text)).setText("Valuation");
            ((Button) findViewById(R.id.calculator_yearly_increment_button)).setText("Calculate");
        }

        GradientDrawable EditTextDrawable = new GradientDrawable();
        EditTextDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(1.0d)), ViewCompat.MEASURED_STATE_MASK);
        EditTextDrawable.setCornerRadius(20.0f);
        if (Build.VERSION.SDK_INT >= 16) {

            this.EditSalary.setBackground(EditTextDrawable);
            this.EditNormal.setBackground(EditTextDrawable);
            this.EditSpecial.setBackground(EditTextDrawable);
            this.EditHolidays.setBackground(EditTextDrawable);
            EditOldBasicSalary.setBackground(EditTextDrawable);
            EditNewBasicSalary.setBackground(EditTextDrawable);
            EditValuation.setBackground(EditTextDrawable);
        }
 else {

            this.EditSalary.setBackgroundDrawable(EditTextDrawable);
            this.EditNormal.setBackgroundDrawable(EditTextDrawable);
            this.EditSpecial.setBackgroundDrawable(EditTextDrawable);
            this.EditHolidays.setBackgroundDrawable(EditTextDrawable);
            EditOldBasicSalary.setBackgroundDrawable(EditTextDrawable);
            EditNewBasicSalary.setBackgroundDrawable(EditTextDrawable);
            EditValuation.setBackgroundDrawable(EditTextDrawable);
        }

        float SalaryValue = Preference.getFloat("Salary", 0.0f);
        int NormalValue = Preference.getInt("NormalOvertime", 0);
        int SpecialValue = Preference.getInt("SpecialOvertime", 0);
        int HolidaysValue = Preference.getInt("HolidaysOvertime", 0);
        this.EditSalary.setText(SalaryValue > 0.0f ? SalaryValue + "" : "");
        this.EditNormal.setText(NormalValue > 0 ? NormalValue + "" : "");
        this.EditSpecial.setText(SpecialValue > 0 ? SpecialValue + "" : "");
        this.EditHolidays.setText(HolidaysValue > 0 ? HolidaysValue + "" : "");
        CalculateOvertime();
        getWindow().setSoftInputMode(2);
    }


    void CalculateOvertime() {

        int HolidaysOvertime;
        SharedPreferences Preference = PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
        float Salary = (float) (this.EditSalary.getText().toString().equals("") ? 0.0d : (double) Float.valueOf(this.EditSalary.getText().toString()).floatValue());
        int NormalOvertime = this.EditNormal.getText().toString().equals("") ? 0 : Integer.valueOf(this.EditNormal.getText().toString()).intValue();
        int SpecialOvertime = this.EditSpecial.getText().toString().equals("") ? 0 : Integer.valueOf(this.EditSpecial.getText().toString()).intValue();
        if (this.EditHolidays.getText().toString().equals("")) {

            HolidaysOvertime = 0;
        }
 else {

            HolidaysOvertime = Integer.valueOf(this.EditHolidays.getText().toString()).intValue();
        }

        float HourCharge = (float) ((((double) Salary) * 12.0d) / 2080.0d);
        float NormalOvertimeCharge = (float) (((double) HourCharge) * 1.25d * ((double) NormalOvertime));
        float SpecialOvertimeCharge = (float) (((double) HourCharge) * 1.5d * ((double) SpecialOvertime));
        float HolidayOvertimeCharge = (float) (((double) HourCharge) * 2.0d * ((double) HolidaysOvertime));
        if (Preference.getString("Language", "English").equals("Arabic")) {

            ((TextView) findViewById(R.id.calculator_normal_hour_charge)).setText(String.format("الساعة الإضافية %s د.ك", this.Utility.ArabicNumbers(String.format("%.3f", Float.valueOf(HourCharge)))));
            ((TextView) findViewById(R.id.calculator_ll_normal_text)).setText(String.format("الإضافي\nالعادي\n%s د.ك", this.Utility.ArabicNumbers(String.format("%.3f", Float.valueOf(NormalOvertimeCharge)))));
            ((TextView) findViewById(R.id.calculator_ll_special_text)).setText(String.format("الإضافي\nالخاص\n%s د.ك", this.Utility.ArabicNumbers(String.format("%.3f", Float.valueOf(SpecialOvertimeCharge)))));
            ((TextView) findViewById(R.id.calculator_ll_holidays_text)).setText(String.format("إضافي\nالعطل\n%s د.ك", this.Utility.ArabicNumbers(String.format("%.3f", Float.valueOf(HolidayOvertimeCharge)))));
        }
 else {

            ((TextView) findViewById(R.id.calculator_normal_hour_charge)).setText(String.format("Normal Hour Charge: %.3f KWD", Float.valueOf(HourCharge)));
            ((TextView) findViewById(R.id.calculator_ll_normal_text)).setText(String.format("Normal\nOvertime\n%.3f KWD", Float.valueOf(NormalOvertimeCharge)));
            ((TextView) findViewById(R.id.calculator_ll_special_text)).setText(String.format("Special\nOvertime\n%.3f KWD", Float.valueOf(SpecialOvertimeCharge)));
            ((TextView) findViewById(R.id.calculator_ll_holidays_text)).setText(String.format("Holidays\nOvertime\n%.3f KWD", Float.valueOf(HolidayOvertimeCharge)));
        }

        SharedPreferences.Editor edit = Preference.edit();
        edit.putFloat("Salary", Salary);
        edit.putInt("NormalOvertime", NormalOvertime);
        edit.putInt("SpecialOvertime", SpecialOvertime);
        edit.putInt("HolidaysOvertime", HolidaysOvertime);
        edit.commit();
    }


    void CalculateMonthOvertime(int TargetMonth, int TargetYear) {

        SharedPreferences Preference = PreferenceManager.getDefaultSharedPreferences(this);
        float Salary = (float) (this.EditSalary.getText().toString().equals("") ? 0.0d : (double) Float.valueOf(this.EditSalary.getText().toString()).floatValue());
        if (Salary <= 0.0f) {

            if (Preference.getString("Language", "English").equals("Arabic")) {

                new Utilities().DialogBox(this, "مناوبات شركة نفط الكويت", "موافق", "يرجى إدخال الراتب");
            }
 else {

                new Utilities().DialogBox(this, "K.O.C. Shifts", "Ok", "Please Enter Your Salary");
            }

            this.EditSalary.requestFocus();
            return;
        }

        GetHolidays HolidaysData = new GetHolidays(this, true);
        if (HolidaysData.NeedUpdate()) {

            if (Preference.getString("Language", "English").equals("Arabic")) {

                new Utilities().DialogBox(this, "مناوبات شركة نفط الكويت", "موافق", "قاعدة بيانات العطلات الرسمية غير محدثة\nربما تكون حسبة العطل غير دقيقة");
            }
 else {

                new Utilities().DialogBox(this, "K.O.C. Shifts", "Ok", "Holidays Database is not updated\nMight be inaccurate overtime calculation");
            }

        }

        float NormalOvertimeHours = 0.0f;
        float SpecialOvertimeHours = 0.0f;
        float MorningOvertimeHours = 0.0f;
        float NightOvertimeHours = 0.0f;
        float HolidaysOvertimeHours = 0.0f;
        float RestOvertime = 0.0f;
        Calendar MyCalendar = Calendar.getInstance(Locale.US);
        MyCalendar.set(TargetYear, TargetMonth, 1);
        int DaysInMonth = MyCalendar.getActualMaximum(5);
        DateShiftStart DateShiftClass = new DateShiftStart(Preference);
        int ShiftStart = DateShiftClass.GetShiftWorkAtDateByDate(this.SelectedShift, MyCalendar);
        for (int i = 0; i < DaysInMonth; i++) {

            Calendar forDate = Calendar.getInstance(Locale.US);
            forDate.set(TargetYear, TargetMonth, 1);
            forDate.add(5, i);
            int loopYear = forDate.get(1);
            int loopMonth = forDate.get(2) + 1;
            int loopDay = forDate.get(5);
            if (DateShiftClass.GetPattern().equals("SecurityAhmadi")) {

                if (ShiftStart == 1 || ShiftStart == 2) {

                    if (HolidaysData.PaidHoliday(loopYear, loopMonth, loopDay).equals("1")) {

                        HolidaysOvertimeHours += 8.0f;
                    }
 else if (HolidaysData.PaidHoliday(loopYear, loopMonth, loopDay).equals("2")) {

                        NormalOvertimeHours += 8.0f;
                    }
 else if (HolidaysData.isHoliday(loopYear, loopMonth, loopDay, true)) {

                        MorningOvertimeHours += 2.0f;
                    }

                }
 else if (ShiftStart == 3 || ShiftStart == 4) {

                    if (HolidaysData.PaidHoliday(loopYear, loopMonth, loopDay).equals("1")) {

                        HolidaysOvertimeHours += 8.0f;
                    }
 else if (HolidaysData.PaidHoliday(loopYear, loopMonth, loopDay).equals("2")) {

                        NormalOvertimeHours += 8.0f;
                    }
 else if (HolidaysData.isHoliday(loopYear, loopMonth, loopDay, true)) {

                        MorningOvertimeHours += 2.0f;
                    }

                }
 else if (ShiftStart == 5 || ShiftStart == 6) {

                    if (HolidaysData.PaidHoliday(loopYear, loopMonth, loopDay).equals("1")) {

                        HolidaysOvertimeHours += 2.0f;
                    }
 else if (HolidaysData.PaidHoliday(loopYear, loopMonth, loopDay).equals("2")) {

                        SpecialOvertimeHours += 2.0f;
                    }
 else if (HolidaysData.isHoliday(loopYear, loopMonth, loopDay, true)) {

                        NightOvertimeHours = (float) (((double) NightOvertimeHours) + 0.5d);
                    }

                    Calendar forDateAfter = Calendar.getInstance(Locale.US);
                    forDateAfter.set(TargetYear, TargetMonth, 1);
                    forDateAfter.add(5, i + 1);
                    int loopYearAfter = forDateAfter.get(1);
                    int loopMonthAfter = forDateAfter.get(2) + 1;
                    int loopDayAfter = forDateAfter.get(5);
                    if (HolidaysData.PaidHoliday(loopYearAfter, loopMonthAfter, loopDayAfter).equals("1")) {

                        HolidaysOvertimeHours += 6.0f;
                    }
 else if (HolidaysData.PaidHoliday(loopYearAfter, loopMonthAfter, loopDayAfter).equals("2")) {

                        SpecialOvertimeHours += 6.0f;
                    }
 else if (HolidaysData.isHoliday(loopYearAfter, loopMonthAfter, loopDayAfter, true)) {

                        NightOvertimeHours = (float) (((double) NightOvertimeHours) + 1.5d);
                    }

                }
 else if (ShiftStart == 8 && (HolidaysData.PaidHoliday(loopYear, loopMonth, loopDay).equals("1") || HolidaysData.PaidHoliday(loopYear, loopMonth, loopDay).equals("2"))) {

                    RestOvertime += 1.0f;
                }

            }
 else if (ShiftStart == 1) {

                if (HolidaysData.PaidHoliday(loopYear, loopMonth, loopDay).equals("1")) {

                    HolidaysOvertimeHours += 12.0f;
                }
 else if (HolidaysData.PaidHoliday(loopYear, loopMonth, loopDay).equals("2")) {

                    NormalOvertimeHours += 12.0f;
                }
 else if (HolidaysData.isHoliday(loopYear, loopMonth, loopDay, true)) {

                    MorningOvertimeHours += 3.0f;
                }

            }
 else if (ShiftStart == 2) {

                if (HolidaysData.PaidHoliday(loopYear, loopMonth, loopDay).equals("1")) {

                    HolidaysOvertimeHours += 5.0f;
                }
 else if (HolidaysData.PaidHoliday(loopYear, loopMonth, loopDay).equals("2")) {

                    SpecialOvertimeHours += 5.0f;
                }
 else if (HolidaysData.isHoliday(loopYear, loopMonth, loopDay, true)) {

                    NightOvertimeHours = (float) (((double) NightOvertimeHours) + 1.25d);
                }

                Calendar forDateAfter2 = Calendar.getInstance(Locale.US);
                forDateAfter2.set(TargetYear, TargetMonth, 1);
                forDateAfter2.add(5, i + 1);
                int loopYearAfter2 = forDateAfter2.get(1);
                int loopMonthAfter2 = forDateAfter2.get(2) + 1;
                int loopDayAfter2 = forDateAfter2.get(5);
                if (HolidaysData.PaidHoliday(loopYearAfter2, loopMonthAfter2, loopDayAfter2).equals("1")) {

                    HolidaysOvertimeHours += 7.0f;
                }
 else if (HolidaysData.PaidHoliday(loopYearAfter2, loopMonthAfter2, loopDayAfter2).equals("2")) {

                    SpecialOvertimeHours += 7.0f;
                }
 else if (HolidaysData.isHoliday(loopYearAfter2, loopMonthAfter2, loopDayAfter2, true)) {

                    NightOvertimeHours = (float) (((double) NightOvertimeHours) + 1.75d);
                }

            }
 else if (ShiftStart == 4 && (HolidaysData.PaidHoliday(loopYear, loopMonth, loopDay).equals("1") || HolidaysData.PaidHoliday(loopYear, loopMonth, loopDay).equals("2"))) {

                RestOvertime += 1.0f;
            }

            if (ShiftStart >= DateShiftClass.GetTotalPatterns()) {

                ShiftStart = 1;
            }
 else {

                ShiftStart++;
            }

        }

        float HourCharge = (float) ((((double) Salary) * 12.0d) / 2080.0d);
        float NormalOvertimeCharge = (float) (((double) HourCharge) * 1.25d * ((double) NormalOvertimeHours));
        float SpecialOvertimeCharge = (float) (((double) HourCharge) * 1.5d * ((double) SpecialOvertimeHours));
        float MorningOvertimeCharge = (float) (((double) HourCharge) * 1.25d * ((double) MorningOvertimeHours));
        float NightOvertimeCharge = (float) (((double) HourCharge) * 1.5d * ((double) NightOvertimeHours));
        float HolidayOvertimeCharge = (float) (((double) HourCharge) * 2.0d * ((double) HolidaysOvertimeHours));
        float RestOvertimeCharge = (float) ((((double) Salary) / 30.0d) * ((double) RestOvertime));
        float TotalOvertimeCharge = NormalOvertimeCharge + SpecialOvertimeCharge + MorningOvertimeCharge + NightOvertimeCharge + HolidayOvertimeCharge + RestOvertimeCharge;
        MyCalendar.add(5, DaysInMonth - 1);
        if (Preference.getString("Language", "English").equals("Arabic")) {

            ((TextView) findViewById(R.id.calculator_month_dates)).setText(String.format("حسبة العمل الإضافي للنوبة %s\nمن %s\nإلى %s", this.SelectedShift, this.Utility.ArabicNumbers("1") + " " + this.Utility.GetArabicMonths()[TargetMonth] + " " + this.Utility.ArabicNumbers(TargetYear + ""), this.Utility.ArabicNumbers(MyCalendar.get(5) + "") + " " + this.Utility.GetArabicMonths()[MyCalendar.get(2)] + " " + this.Utility.ArabicNumbers(MyCalendar.get(1) + "")));
            ((TextView) findViewById(R.id.calculator_month_normal)).setText(String.format("الإضافي العادي %s د.ك", this.Utility.ArabicNumbers(String.format("%.3f", Float.valueOf(NormalOvertimeCharge)))));
            ((TextView) findViewById(R.id.calculator_month_special)).setText(String.format("الإضافي الخاص %s د.ك", this.Utility.ArabicNumbers(String.format("%.3f", Float.valueOf(SpecialOvertimeCharge)))));
            ((TextView) findViewById(R.id.calculator_month_morning)).setText(String.format("مناوبة صباحية (رمضان) %s د.ك", this.Utility.ArabicNumbers(String.format("%.3f", Float.valueOf(MorningOvertimeCharge)))));
            ((TextView) findViewById(R.id.calculator_month_night)).setText(String.format("مناوبة مسائية (رمضان) %s د.ك", this.Utility.ArabicNumbers(String.format("%.3f", Float.valueOf(NightOvertimeCharge)))));
            ((TextView) findViewById(R.id.calculator_month_holidays)).setText(String.format("إضافي العطل %s د.ك", this.Utility.ArabicNumbers(String.format("%.3f", Float.valueOf(HolidayOvertimeCharge)))));
            ((TextView) findViewById(R.id.calculator_month_restday)).setText(String.format("ثاني يوم راحة %s د.ك", this.Utility.ArabicNumbers(String.format("%.3f", Float.valueOf(RestOvertimeCharge)))));
            ((TextView) findViewById(R.id.calculator_month_total)).setText(String.format("إجمالي الإضافي %s د.ك", this.Utility.ArabicNumbers(String.format("%.3f", Float.valueOf(TotalOvertimeCharge)))));
            return;
        }

        ((TextView) findViewById(R.id.calculator_month_dates)).setText(String.format("%s Shift Overtime Calculated\nFrom : %s\nTo : %s", this.SelectedShift, this.Utility.GetEnglishMonths()[TargetMonth] + " 1, " + TargetYear, this.Utility.GetEnglishMonths()[MyCalendar.get(2)] + " " + MyCalendar.get(5) + ", " + MyCalendar.get(1)));
        ((TextView) findViewById(R.id.calculator_month_normal)).setText(String.format("Normal Overtime %.3f KWD", Float.valueOf(NormalOvertimeCharge)));
        ((TextView) findViewById(R.id.calculator_month_special)).setText(String.format("Special Overtime %.3f KWD", Float.valueOf(SpecialOvertimeCharge)));
        ((TextView) findViewById(R.id.calculator_month_morning)).setText(String.format("Ramadan Morning Shift %.3f KWD", Float.valueOf(MorningOvertimeCharge)));
        ((TextView) findViewById(R.id.calculator_month_night)).setText(String.format("Ramadan Night Shift %.3f KWD", Float.valueOf(NightOvertimeCharge)));
        ((TextView) findViewById(R.id.calculator_month_holidays)).setText(String.format("Holiday Overtime %.3f KWD", Float.valueOf(HolidayOvertimeCharge)));
        ((TextView) findViewById(R.id.calculator_month_restday)).setText(String.format("Second Day Off %.3f KWD", Float.valueOf(RestOvertimeCharge)));
        ((TextView) findViewById(R.id.calculator_month_total)).setText(String.format("Total Overtime %.3f KWD", Float.valueOf(TotalOvertimeCharge)));
    }


    function AddDaysToCalendar(int Year, int Month, int Day, int Days) {

        Calendar c = Calendar.getInstance(Locale.US);
        c.set(Year, Month, Day);
        c.add(5, Days);
        return c.get(1) + "-" + (c.get(2) + 1) + "-" + c.get(5);
    }


    void DatePickerShiftChanged(function Shift) {

        if (!Shift.equals(this.SelectedShift)) {

            this.SelectedShift = Shift;
            Button A_Shift = (Button) this.DatePickerDialog.findViewById(2002);
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

            Button B_Shift = (Button) this.DatePickerDialog.findViewById(2003);
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

            Button C_Shift = (Button) this.DatePickerDialog.findViewById(2004);
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

            Button D_Shift = (Button) this.DatePickerDialog.findViewById(2005);
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

