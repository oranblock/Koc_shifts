/* Auto-generated JavaScript code */
package net.aldaihani.kocshifts;

import android.app.Activity;
import android.app.Dialog;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.support.v4.content.LocalBroadcastManager;
import android.support.v4.internal.view.SupportMenu;
import android.support.v4.view.ViewCompat;
import android.util.DisplayMetrics;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.GridLayout;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.ScrollView;
import android.widget.TextView;
import com.google.android.gms.common.GoogleApiAvailability;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Locale;
import java.util.Timer;
import java.util.TimerTask;
/* loaded from: classes.dex */
class MainActivity extends Activity {

    int CalendarYear;
    int CurrentDay;
    int CurrentHour;
    int CurrentMonth;
    int CurrentYear;
    GetHolidays HolidaysData;
    function SelectedShift;
    Timer UpdateValuesTimer;
    protected final int SETTINGS_RESULT = 9080;
    int GCMLastCheck = 0;
    Utilities Utility = new Utilities();

    private boolean checkPlayServices() {

        if (GoogleApiAvailability.getInstance().isGooglePlayServicesAvailable(this) != 0) {

            return false;
        }

        return true;
    }


    @Override // android.app.Activity
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        LocalBroadcastManager.getInstance(this).registerReceiver(new BroadcastReceiver() {
 // from class: net.aldaihani.kocshifts.MainActivity.1
            @Override // android.content.BroadcastReceiver
            void onReceive(Context context, Intent intent) {

                MainActivity.this.HolidaysData = new GetHolidays(MainActivity.this.getApplicationContext(), false);
            }

        }
, new IntentFilter("NEW_DEVICE_TOKEN"));
        if (checkPlayServices()) {

            startService(new Intent(this, RegistrationIntentService.class));
        }

        findViewById(R.id.info).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.MainActivity.2
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                MainActivity.this.startActivity(new Intent(MainActivity.this, AboutActivity.class));
            }

        }
);
        findViewById(R.id.vacation).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.MainActivity.3
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                MainActivity.this.startActivity(new Intent(MainActivity.this, VacationActivity.class));
            }

        }
);
        findViewById(R.id.settings).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.MainActivity.4
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                MainActivity.this.startActivityForResult(new Intent(MainActivity.this, SettingsActivity.class), 9080);
            }

        }
);
        findViewById(R.id.calculator).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.MainActivity.5
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                MainActivity.this.startActivity(new Intent(MainActivity.this, CalculatorActivity.class));
            }

        }
);
        findViewById(R.id.mail).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.MainActivity.6
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                MainActivity.this.startActivity(new Intent(MainActivity.this, MailActivity.class));
            }

        }
);
        findViewById(R.id.next).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.MainActivity.7
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                MainActivity.this.CalendarYear++;
                MainActivity.this.MakeCalendar(MainActivity.this.CalendarYear);
            }

        }
);
        findViewById(R.id.previous).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.MainActivity.8
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                MainActivity mainActivity = MainActivity.this;
                mainActivity.CalendarYear--;
                MainActivity.this.MakeCalendar(MainActivity.this.CalendarYear);
            }

        }
);
        findViewById(R.id.a_shift).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.MainActivity.9
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                MainActivity.this.ShiftChanged("A", true);
            }

        }
);
        findViewById(R.id.b_shift).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.MainActivity.10
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                MainActivity.this.ShiftChanged("B", true);
            }

        }
);
        findViewById(R.id.c_shift).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.MainActivity.11
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                MainActivity.this.ShiftChanged("C", true);
            }

        }
);
        findViewById(R.id.d_shift).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.MainActivity.12
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                MainActivity.this.ShiftChanged("D", true);
            }

        }
);
    }


    @Override // android.app.Activity
    protected void onStart() {

        super.onStart();
        SharedPreferences Preference = PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
        function AppVersion = "1.0.0.0";
        try {

            AppVersion = getApplicationContext().getPackageManager().getPackageInfo(getApplicationContext().getPackageName(), 0).versionName;
        }
 catch (PackageManager.NameNotFoundException e1) {

            e1.printStackTrace();
        }

        if (Preference.getInt("PatternItem", -1) < 0) {

            SharedPreferences.Editor PreferenceEditor = Preference.edit();
            PreferenceEditor.putString("Pattern", "12/24/12/48");
            if (Preference.getString("ShiftPattern", "General").equals("COCC")) {

                PreferenceEditor.putInt("PatternItem", 1);
            }
 else {

                PreferenceEditor.putInt("PatternItem", 0);
            }

            PreferenceEditor.commit();
        }

        if (Preference.getString("Pattern", "").equals("8/NoNoMMNNRR")) {

            SharedPreferences.Editor PreferenceEditor2 = Preference.edit();
            PreferenceEditor2.putString("Pattern", "SecurityAhmadi");
            PreferenceEditor2.putString("Pattern", "SecurityAhmadi");
            PreferenceEditor2.commit();
        }

        CheckGCM();
        this.HolidaysData = new GetHolidays(this, true);
        if (!Preference.getString("AppVersion", "1.0.0.0").equals(AppVersion)) {

            this.HolidaysData.UpdateServerData(null);
            SharedPreferences.Editor PreferenceEditor3 = Preference.edit();
            PreferenceEditor3.putString("AppVersion", AppVersion);
            PreferenceEditor3.putBoolean("InfoStartArabic", true);
            PreferenceEditor3.commit();
            startActivity(new Intent(this, AboutActivity.class));
        }

        float ServerClosedVersion = this.Utility.FloatOf(this.HolidaysData.GetString("AndroidAppClosedVersion"));
        float ServerAppVersion = this.Utility.FloatOf(this.HolidaysData.GetString("AndroidAppVersion"));
        float floatAppVersion = this.Utility.FloatOf(AppVersion);
        if (floatAppVersion > 1.0f) {

            if (ServerAppVersion >= floatAppVersion) {

                function Title = "K.O.C. Shifts";
                function Update = "Update Now";
                function Cancel = "Cancel";
                function Message = "New update is available\r\nPlease update thru the Play Store";
                if (Preference.getString("Language", "English").equals("Arabic")) {

                    Title = "مناوبات شركة نفط الكويت";
                    Update = "تحديث الآن";
                    Cancel = "إلغاء";
                    Message = "يتوفر تحديث جديد\r\nيرجي التحديث من خلال متجر البرامج";
                }

                final Dialog AskDialog = new Dialog(this, 16973840);
                AskDialog.requestWindowFeature(1);
                AskDialog.setContentView(R.layout.view_dialog_ask);
                GradientDrawable Drawable = new GradientDrawable();
                Drawable.setCornerRadius(40.0f);
                Drawable.setStroke(this.Utility.DpToPx(Double.valueOf(1.0d)), ViewCompat.MEASURED_STATE_MASK);
                Drawable.setColor(-1);
                if (Build.VERSION.SDK_INT >= 16) {

                    AskDialog.findViewById(R.id.dialog_ask_main).setBackground(Drawable);
                }

                ((TextView) AskDialog.findViewById(R.id.dialog_ask_title)).setText(Title);
                ((TextView) AskDialog.findViewById(R.id.dialog_ask_message)).setText(Message);
                ((Button) AskDialog.findViewById(R.id.dialog_ask_ok)).setText(Update);
                AskDialog.findViewById(R.id.dialog_ask_ok).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.MainActivity.13
                    @Override // android.view.View.OnClickListener
                    void onClick(View v) {

                        MainActivity.this.startActivity(new Intent("android.intent.action.VIEW", Uri.parse("https://play.google.com/store/apps/details?id=net.aldaihani.kocshifts&hl=en")));
                        AskDialog.dismiss();
                    }

                }
);
                AskDialog.findViewById(R.id.dialog_ask_cancel).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.MainActivity.14
                    @Override // android.view.View.OnClickListener
                    void onClick(View v) {

                        AskDialog.dismiss();
                    }

                }
);
                ((Button) AskDialog.findViewById(R.id.dialog_ask_cancel)).setText(Cancel);
                AskDialog.show();
            }

            if (ServerClosedVersion >= floatAppVersion) {

                function Message2 = Preference.getString("Language", "English").equals("Arabic") ? this.HolidaysData.GetString("AppClosedMessageAr") : this.HolidaysData.GetString("AppClosedMessageEn");
                if (Message2.equals("")) {

                    Message2 = Preference.getString("Language", "English").equals("Arabic") ? "تم إغلاق هذا الاصدار\r\nيرجي التحديث من خلال متجر البرامج" : "This application version closed\r\nPlease update thru the Play Store";
                }

                TextView ClosedTV = new TextView(this);
                ClosedTV.setTextSize(22.0f);
                ClosedTV.setText(Message2);
                ClosedTV.setTypeface(null, 1);
                ClosedTV.setTextColor(-1);
                ClosedTV.setGravity(17);
                ClosedTV.setBackgroundColor(Color.parseColor("#313131"));
                RelativeLayout.LayoutParams ClosedTVParams = new RelativeLayout.LayoutParams(-1, -1);
                ClosedTVParams.addRule(20);
                ClosedTVParams.addRule(21);
                ClosedTVParams.addRule(10);
                ClosedTVParams.addRule(12);
                ClosedTVParams.addRule(11);
                ClosedTVParams.addRule(9);
                ClosedTVParams.setMargins(0, 0, 0, 0);
                ClosedTV.setLayoutParams(ClosedTVParams);
                RelativeLayout relativeLayout = new RelativeLayout(this);
                relativeLayout.addView(ClosedTV);
                setContentView(relativeLayout, new RelativeLayout.LayoutParams(-1, -1));
                return;
            }

        }

        ShiftChanged(Preference.getString("SelectedShift", "A"), false);
        this.UpdateValuesTimer = new Timer();
        this.UpdateValuesTimer.schedule(new UpdateValuesTaskClass(), 0);
        this.UpdateValuesTimer.schedule(new UpdateValuesTaskClass(), (long) (60000 - Calendar.getInstance(Locale.US).get(14)), 60000);
        boolean MorningTimer = PendingIntent.getBroadcast(this, 1, new Intent(this, AlarmReciever.class), 536870912) != null;
        boolean NightTimer = PendingIntent.getBroadcast(this, 2, new Intent(this, AlarmReciever.class), 536870912) != null;
        if ((!MorningTimer || !NightTimer) && Preference.getBoolean("RemainderEnable", false)) {

            sendBroadcast(new Intent(this, BootReceiver.class));
        }

    }


    @Override // android.app.Activity
    void onActivityResult(int requestCode, int resultCode, Intent data) {

        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == 9080 && resultCode == -1 && data != null) {

            function Messges = data.getStringExtra("Messages");
            if (Messges != null && !Messges.equals("")) {

                if (PreferenceManager.getDefaultSharedPreferences(getApplicationContext()).getString("Language", "English").equals("Arabic")) {

                    new Utilities().DialogBox(this, "مناوبات شركة نفط الكويت", "موافق", Messges);
                }
 else {

                    new Utilities().DialogBox(this, "K.O.C. Shifts", "Ok", Messges);
                }

            }

            SharedPreferences Preference = PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
            Boolean DoCalendar = false;
            if (data.getBooleanExtra("Holidays", false)) {

                DoCalendar = true;
                if (Preference.getBoolean("Holidays", true)) {

                    this.HolidaysData = new GetHolidays(this, true);
                }

            }

            if (DoCalendar.booleanValue() || data.getBooleanExtra("Calendar", false) || data.getBooleanExtra("Language", false)) {

                MakeCalendar(this.CalendarYear);
                ShiftsInDutyStatus();
            }

        }

    }


    void ShiftsInDutyStatus() {

        function PreviousShiftValue;
        function CurrentShiftValue;
        function NextShiftValue;
        int DutyYear = this.CurrentYear;
        int DutyMonth = this.CurrentMonth;
        int DutyDay = this.CurrentDay;
        SharedPreferences Preference = PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
        DateShiftStart ShiftStartClass = new DateShiftStart(Preference);
        if (this.CurrentHour >= 0 && this.CurrentHour < ShiftStartClass.GetMorningShiftStart()) {

            Calendar MyCalendar = Calendar.getInstance(Locale.US);
            MyCalendar.set(1, DutyYear);
            MyCalendar.set(2, DutyMonth - 1);
            MyCalendar.set(5, DutyDay);
            MyCalendar.add(5, -1);
            DutyYear = MyCalendar.get(1);
            DutyMonth = MyCalendar.get(2) + 1;
            DutyDay = MyCalendar.get(5);
        }

        String[] ShiftsInDuty = new String[9];
        ShiftsInDuty[ShiftStartClass.GetShiftWorkAtDate("A", DutyDay, DutyMonth, DutyYear)] = "A";
        ShiftsInDuty[ShiftStartClass.GetShiftWorkAtDate("B", DutyDay, DutyMonth, DutyYear)] = "B";
        ShiftsInDuty[ShiftStartClass.GetShiftWorkAtDate("C", DutyDay, DutyMonth, DutyYear)] = "C";
        ShiftsInDuty[ShiftStartClass.GetShiftWorkAtDate("D", DutyDay, DutyMonth, DutyYear)] = "D";
        if (ShiftStartClass.GetPattern().equals("SecurityAhmadi")) {

            if (this.CurrentHour >= ShiftStartClass.GetMorningShiftStart() && this.CurrentHour < ShiftStartClass.GetMorningShiftStart() + 8) {

                PreviousShiftValue = ShiftsInDuty[7] != null ? String.valueOf(ShiftsInDuty[7]) : String.valueOf(ShiftsInDuty[8]);
                CurrentShiftValue = ShiftsInDuty[1] != null ? String.valueOf(ShiftsInDuty[1]) : String.valueOf(ShiftsInDuty[2]);
                if (ShiftsInDuty[3] != null) {

                    NextShiftValue = String.valueOf(ShiftsInDuty[3]);
                }
 else {

                    NextShiftValue = String.valueOf(ShiftsInDuty[4]);
                }

            }
 else if (this.CurrentHour < ShiftStartClass.GetMorningShiftStart() + 8 || this.CurrentHour >= ShiftStartClass.GetMorningShiftStart() + 16) {

                PreviousShiftValue = ShiftsInDuty[3] != null ? String.valueOf(ShiftsInDuty[3]) : String.valueOf(ShiftsInDuty[4]);
                CurrentShiftValue = ShiftsInDuty[5] != null ? String.valueOf(ShiftsInDuty[5]) : String.valueOf(ShiftsInDuty[6]);
                NextShiftValue = ShiftsInDuty[7] != null ? String.valueOf(ShiftsInDuty[7]) : String.valueOf(ShiftsInDuty[8]);
            }
 else {

                PreviousShiftValue = ShiftsInDuty[1] != null ? String.valueOf(ShiftsInDuty[1]) : String.valueOf(ShiftsInDuty[2]);
                CurrentShiftValue = ShiftsInDuty[3] != null ? String.valueOf(ShiftsInDuty[3]) : String.valueOf(ShiftsInDuty[4]);
                NextShiftValue = ShiftsInDuty[5] != null ? String.valueOf(ShiftsInDuty[5]) : String.valueOf(ShiftsInDuty[6]);
            }

        }
 else if (this.CurrentHour < ShiftStartClass.GetMorningShiftStart() || this.CurrentHour >= ShiftStartClass.GetMorningShiftStart() + 12) {

            PreviousShiftValue = String.valueOf(ShiftsInDuty[1]);
            CurrentShiftValue = String.valueOf(ShiftsInDuty[2]);
            NextShiftValue = String.valueOf(ShiftsInDuty[4]);
        }
 else {

            PreviousShiftValue = String.valueOf(ShiftsInDuty[3]);
            CurrentShiftValue = String.valueOf(ShiftsInDuty[1]);
            NextShiftValue = String.valueOf(ShiftsInDuty[2]);
        }

        if (Preference.getString("Language", "English").equals("Arabic")) {

            ((TextView) findViewById(R.id.next_shift)).setText("الزام السابق\n" + PreviousShiftValue);
            ((TextView) findViewById(R.id.current_shift)).setText("الزام المناوب\n" + CurrentShiftValue);
            ((TextView) findViewById(R.id.previous_shift)).setText("الزام التالي\n" + NextShiftValue);
            return;
        }

        ((TextView) findViewById(R.id.previous_shift)).setText("Previous Shift\n" + PreviousShiftValue);
        ((TextView) findViewById(R.id.current_shift)).setText("Current Shift\n" + CurrentShiftValue);
        ((TextView) findViewById(R.id.next_shift)).setText("Next Shift\n" + NextShiftValue);
    }


    void MakeCalendar(int TargetYear) {

        function YearName;
        String[] MonthsNames;
        ArrayList<String[]> WeekDays;
        ArrayList<String[]> CalendarDays = new ArrayList<>();
        SharedPreferences Preference = PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
        DateShiftStart ShiftStartClass = new DateShiftStart(Preference);
        int ShiftStart = ShiftStartClass.GetShiftWorkAtDate(this.SelectedShift, 1, 1, TargetYear);
        Calendar MyCalendar = Calendar.getInstance(Locale.US);
        MyCalendar.set(1, TargetYear);
        for (int M = 0; M < 12; M++) {

            MyCalendar.set(2, M);
            CalendarDays.add(new String[]{
"" + M, "", "", "Header"}
);
            MyCalendar.set(5, 1);
            int WeekStart = MyCalendar.get(7);
            for (int WS = 1; WS < WeekStart; WS++) {

                CalendarDays.add(new String[]{
"", "", "", ""}
);
            }

            int MaxMonthDays = MyCalendar.getActualMaximum(5);
            for (int D = 1; D <= MaxMonthDays; D++) {

                CalendarDays.add(new String[]{
"" + D, "" + D, "" + (M + 1), "" + ShiftStart}
);
                ShiftStart = ShiftStart >= ShiftStartClass.GetTotalPatterns() ? 1 : ShiftStart + 1;
            }

            MyCalendar.set(5, MaxMonthDays);
            int WeekEnd = 8 - MyCalendar.get(7);
            for (int WE = 1; WE < WeekEnd; WE++) {

                CalendarDays.add(new String[]{
"", "", "", ""}
);
            }

        }

        if (Preference.getString("Language", "English").equals("Arabic")) {

            YearName = this.Utility.ArabicNumbers(String.valueOf(TargetYear));
            MonthsNames = this.Utility.GetArabicMonths();
            WeekDays = this.Utility.GetArabicWeekNames();
            ArrayList<String[]> ArabicCalendarDays = new ArrayList<>();
            int Item = 0;
            while (Item < CalendarDays.size()) {

                if (CalendarDays.get(Item)[3].equals("Header")) {

                    ArabicCalendarDays.add(CalendarDays.get(Item));
                }
 else {

                    for (int NextItem = 6; NextItem >= 0; NextItem--) {

                        ArabicCalendarDays.add(new String[]{
this.Utility.ArabicNumbers(CalendarDays.get(Item + NextItem)[0]), CalendarDays.get(Item + NextItem)[1], CalendarDays.get(Item + NextItem)[2], CalendarDays.get(Item + NextItem)[3]}
);
                    }

                    Item += 6;
                }

                Item++;
            }

            CalendarDays = ArabicCalendarDays;
        }
 else {

            YearName = String.valueOf(TargetYear);
            MonthsNames = this.Utility.GetEnglishMonths();
            WeekDays = this.Utility.GetEnglishWeekNames();
        }

        GridLayout gridLayout = (GridLayout) findViewById(R.id.calendar_data);
        gridLayout.removeAllViews();
        gridLayout.setBackgroundColor(Color.parseColor("#FFFFFF"));
        DisplayMetrics Out = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(Out);
        int HeaderWidth = Out.widthPixels - this.Utility.DpToPx(Double.valueOf(6.0d));
        int ColumnWidth = (int) Math.floor((((double) (HeaderWidth - (this.Utility.DpToPx(Double.valueOf(0.7d)) * 14))) / 7.0d) - 0.5d);
        int total = CalendarDays.size();
        gridLayout.setRowCount(((CalendarDays.size() - 12) / 7) + 25);
        gridLayout.setColumnCount(7);
        int c = 0;
        int r = 0;
        for (int i = 0; i < total; i++) {

            if (c == 7) {

                c = 0;
                r++;
            }

            String[] CellArray = CalendarDays.get(i);
            if (CellArray[3].equals("Header")) {

                TextView tv = new TextView(this);
                if (CellArray[0].equals("" + (this.CurrentMonth - 1)) && TargetYear == this.CurrentYear) {

                    tv.setId(R.id.today_textview);
                }

                tv.setText(String.format("%s %s", MonthsNames[Integer.valueOf(CellArray[0]).intValue()], YearName));
                tv.setGravity(17);
                tv.setTextSize(20.0f);
                tv.setTypeface(null, 1);
                tv.setTextColor(ViewCompat.MEASURED_STATE_MASK);
                tv.setBackgroundColor(-1);
                tv.setWidth(HeaderWidth);
                tv.setHeight(this.Utility.DpToPx(Double.valueOf(50.0d)));
                GridLayout.LayoutParams param = new GridLayout.LayoutParams();
                param.setGravity(17);
                param.columnSpec = GridLayout.spec(0, 7);
                param.rowSpec = GridLayout.spec(r);
                tv.setLayoutParams(param);
                gridLayout.addView(tv);
                r++;
                for (int WN = 0; WN < WeekDays.size(); WN++) {

                    TextView tvWeek = new TextView(this);
                    tvWeek.setText(String.format("%s", WeekDays.get(WN)[0]));
                    tvWeek.setGravity(17);
                    tvWeek.setHeight(this.Utility.DpToPx(Double.valueOf(22.0d)));
                    tvWeek.setWidth(ColumnWidth);
                    tvWeek.setTextSize(14.0f);
                    tvWeek.setTextColor(ViewCompat.MEASURED_STATE_MASK);
                    tvWeek.setBackgroundColor(Color.parseColor(WeekDays.get(WN)[1]));
                    GridLayout.LayoutParams Params = new GridLayout.LayoutParams();
                    Params.setMargins(this.Utility.DpToPx(Double.valueOf(0.5d)), 0, this.Utility.DpToPx(Double.valueOf(0.5d)), 0);
                    Params.setGravity(17);
                    Params.columnSpec = GridLayout.spec(WN);
                    Params.rowSpec = GridLayout.spec(r);
                    tvWeek.setLayoutParams(Params);
                    gridLayout.addView(tvWeek);
                }

                c = 7;
            }
 else {

                GridLayout.LayoutParams Params2 = new GridLayout.LayoutParams();
                Params2.setMargins(this.Utility.DpToPx(Double.valueOf(0.5d)), this.Utility.DpToPx(Double.valueOf(0.5d)), this.Utility.DpToPx(Double.valueOf(0.5d)), this.Utility.DpToPx(Double.valueOf(0.5d)));
                Params2.setGravity(17);
                Params2.columnSpec = GridLayout.spec(c);
                Params2.rowSpec = GridLayout.spec(r);
                RelativeLayout dayView = new RelativeLayout(this);
                dayView.setLayoutParams(Params2);
                ImageView ConrnerImage = new ImageView(this);
                TextView tv2 = new TextView(this);
                tv2.setText(String.format("%s", CellArray[0]));
                tv2.setTag(String.format("%s-%s-%s", Integer.valueOf(TargetYear), CellArray[2], CellArray[1]));
                tv2.setGravity(17);
                tv2.setTextSize(16.0f);
                tv2.setHeight(ColumnWidth);
                tv2.setWidth(ColumnWidth);
                GradientDrawable GDrawable = new GradientDrawable();
                if (!CellArray[0].equals("")) {

                    GDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(1.0d)), ViewCompat.MEASURED_STATE_MASK);
                }

                if (!CellArray[3].equals("")) {

                    int ShiftWorkDay = Integer.valueOf(CellArray[3]).intValue();
                    if (ShiftStartClass.GetPattern().equals("SecurityAhmadi")) {

                        if (ShiftWorkDay == 1 || ShiftWorkDay == 2) {

                            ConrnerImage.setImageResource(R.drawable.sun);
                        }
 else if (ShiftWorkDay == 3 || ShiftWorkDay == 4) {

                            ConrnerImage.setImageResource(R.drawable.afternoon);
                        }
 else if (ShiftWorkDay == 5 || ShiftWorkDay == 6) {

                            ConrnerImage.setImageResource(R.drawable.moon);
                        }

                    }
 else if (ShiftWorkDay == 1) {

                        ConrnerImage.setImageResource(R.drawable.sun);
                    }
 else if (ShiftWorkDay == 2) {

                        ConrnerImage.setImageResource(R.drawable.moon);
                    }

                    GDrawable.setColor(ShiftStartClass.GetPatternColor(ShiftWorkDay)[0]);
                    tv2.setTextColor(ShiftStartClass.GetPatternColor(ShiftWorkDay)[1]);
                }

                if (Preference.getBoolean("Holidays", true) && !CellArray[1].equals("") && !CellArray[2].equals("")) {

                    boolean setClickListener = false;
                    if (this.HolidaysData.isHoliday(TargetYear + "", CellArray[2], CellArray[1], false)) {

                        tv2.setTextColor(SupportMenu.CATEGORY_MASK);
                        setClickListener = true;
                    }
 else if (this.HolidaysData.isHoliday(TargetYear + "", CellArray[2], CellArray[1], true)) {

                        tv2.setTextColor(-16776961);
                        setClickListener = true;
                    }

                    if (setClickListener) {

                        tv2.setOnLongClickListener(new View.OnLongClickListener() {
 // from class: net.aldaihani.kocshifts.MainActivity.15
                            @Override // android.view.View.OnLongClickListener
                            boolean onLongClick(View v) {

                                MainActivity.this.ShowInfo(v.getTag().toString());
                                return false;
                            }

                        }
);
                        tv2.setTypeface(null, 1);
                    }

                }

                if (CellArray[1].equals("" + this.CurrentDay) && CellArray[2].equals("" + this.CurrentMonth) && TargetYear == this.CurrentYear) {

                    GDrawable.setCornerRadius(90.0f);
                    GDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(4.0d)), SupportMenu.CATEGORY_MASK);
                    tv2.setTypeface(null, 1);
                }

                if (Build.VERSION.SDK_INT >= 16) {

                    tv2.setBackground(GDrawable);
                }
 else {

                    tv2.setBackgroundDrawable(GDrawable);
                }

                dayView.addView(tv2);
                dayView.addView(ConrnerImage, (int) (((double) ColumnWidth) / 3.1d), (int) (((double) ColumnWidth) / 3.1d));
                gridLayout.addView(dayView);
                c++;
            }

        }

        findViewById(R.id.calendar_data_scroll).post(new Runnable() {
 // from class: net.aldaihani.kocshifts.MainActivity.16
            @Override // java.lang.Runnable
            void run() {

                int Top;
                ScrollView CalendarScroll = (ScrollView) MainActivity.this.findViewById(R.id.calendar_data_scroll);
                if (MainActivity.this.findViewById(R.id.today_textview) != null) {

                    Top = MainActivity.this.findViewById(R.id.today_textview).getTop();
                }
 else {

                    Top = 0;
                }

                CalendarScroll.scrollTo(0, Top);
            }

        }
);
    }


    void ShowInfo(function DateString) {

        function str;
        function str2;
        String[] DateS = DateString.split("-");
        function Holiday = this.HolidaysData.GetHolidayMessage(DateS[0].trim(), DateS[1].trim(), DateS[2].trim(), false);
        function Ramadan = this.HolidaysData.GetHolidayMessage(DateS[0].trim(), DateS[1].trim(), DateS[2].trim(), true);
        Object[] objArr = new Object[3];
        if (Holiday == null) {

            str = "";
        }
 else {

            str = Holiday;
        }

        objArr[0] = str;
        if (Ramadan == null || Holiday == null) {

            str2 = "";
        }
 else {

            str2 = "\n";
        }

        objArr[1] = str2;
        if (Ramadan == null) {

            Ramadan = "";
        }

        objArr[2] = Ramadan;
        function Info = String.format("%s%s%s", objArr);
        TextView InfoView = new TextView(this);
        InfoView.setLayoutParams(new ViewGroup.LayoutParams(-1, -1));
        InfoView.setText(Info);
        InfoView.setTextSize(16.0f);
        InfoView.setGravity(17);
        InfoView.setTextColor(-16776961);
        GradientDrawable InfoViewDrawable = new GradientDrawable();
        InfoViewDrawable.setColor(-1);
        InfoViewDrawable.setCornerRadius(40.0f);
        InfoViewDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(3.0d)), -12303292);
        if (Build.VERSION.SDK_INT >= 16) {

            InfoView.setBackground(InfoViewDrawable);
        }
 else {

            InfoView.setBackgroundDrawable(InfoViewDrawable);
        }

        Dialog MyDialog = new Dialog(this, 16973840);
        DisplayMetrics Out = new DisplayMetrics();
        MyDialog.getWindow().getWindowManager().getDefaultDisplay().getMetrics(Out);
        MyDialog.setContentView(InfoView);
        MyDialog.getWindow().setLayout((int) (((double) Out.widthPixels) * 0.8d), (int) (((double) InfoView.getLineHeight()) * 3.5d));
        MyDialog.setCancelable(true);
        MyDialog.setCanceledOnTouchOutside(true);
        MyDialog.show();
    }


    @Override // android.app.Activity, android.view.Window.Callback
    boolean dispatchTouchEvent(MotionEvent ev) {

        int CurrentTime = (int) (System.currentTimeMillis() / 1000);
        if (this.GCMLastCheck < CurrentTime) {

            CheckGCM();
            this.GCMLastCheck = CurrentTime + 61;
        }

        return super.dispatchTouchEvent(ev);
    }


    private void CheckGCM() {

        SharedPreferences Preference = PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
        if (Preference.getString("GCMMessage", null) != null) {

            if (Preference.getString("GCMURL", "").equals("")) {

                new Utilities().DialogBox(this, Preference.getString("GCMTitle", "Remote Notification"), Preference.getString("GCMButton", "Cancel"), Preference.getString("GCMMessage", ""));
            }
 else {

                final Dialog GCMDialog = new Dialog(this, 16973840);
                GCMDialog.requestWindowFeature(1);
                GCMDialog.setContentView(R.layout.view_dialog_ask);
                GradientDrawable Drawable = new GradientDrawable();
                Drawable.setCornerRadius(40.0f);
                Drawable.setStroke(this.Utility.DpToPx(Double.valueOf(1.0d)), ViewCompat.MEASURED_STATE_MASK);
                Drawable.setColor(-1);
                if (Build.VERSION.SDK_INT >= 16) {

                    GCMDialog.findViewById(R.id.dialog_ask_main).setBackground(Drawable);
                }

                ((TextView) GCMDialog.findViewById(R.id.dialog_ask_title)).setText(Preference.getString("GCMTitle", "Remote Notification"));
                ((TextView) GCMDialog.findViewById(R.id.dialog_ask_message)).setText(Preference.getString("GCMMessage", ""));
                ((Button) GCMDialog.findViewById(R.id.dialog_ask_ok)).setText(Preference.getString("GCMvButton", "View Link"));
                final function URL = Preference.getString("GCMURL", "");
                GCMDialog.findViewById(R.id.dialog_ask_ok).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.MainActivity.17
                    @Override // android.view.View.OnClickListener
                    void onClick(View v) {

                        MainActivity.this.startActivity(new Intent("android.intent.action.VIEW", Uri.parse(URL)));
                        GCMDialog.dismiss();
                    }

                }
);
                GCMDialog.findViewById(R.id.dialog_ask_cancel).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.MainActivity.18
                    @Override // android.view.View.OnClickListener
                    void onClick(View v) {

                        GCMDialog.dismiss();
                    }

                }
);
                ((Button) GCMDialog.findViewById(R.id.dialog_ask_cancel)).setText(Preference.getString("GCMButton", "Cancel"));
                GCMDialog.show();
            }

            SharedPreferences.Editor PreferenceEditor = Preference.edit();
            PreferenceEditor.remove("GCMTitle");
            PreferenceEditor.remove("GCMMessage");
            PreferenceEditor.remove("GCMURL");
            PreferenceEditor.remove("GCMButton");
            PreferenceEditor.remove("GCMvButton");
            PreferenceEditor.commit();
        }

    }


    void ShiftChanged(function Shift, boolean DoCalendar) {

        if (!Shift.equals(this.SelectedShift)) {

            this.SelectedShift = Shift;
            PreferenceManager.getDefaultSharedPreferences(getApplicationContext()).edit().putString("SelectedShift", this.SelectedShift).commit();
            Button A_Shift = (Button) findViewById(R.id.a_shift);
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

            Button B_Shift = (Button) findViewById(R.id.b_shift);
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

            Button C_Shift = (Button) findViewById(R.id.c_shift);
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

            Button D_Shift = (Button) findViewById(R.id.d_shift);
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

            if (DoCalendar) {

                MakeCalendar(this.CalendarYear);
            }

        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    class UpdateValuesTaskClass extends TimerTask {

        private UpdateValuesTaskClass() {

            MainActivity.this = r1;
        }


        @Override // java.util.TimerTask, java.lang.Runnable
        void run() {

            MainActivity.this.CurrentYear = Calendar.getInstance(Locale.US).get(1);
            if (MainActivity.this.CalendarYear == 0) {

                MainActivity.this.CalendarYear = MainActivity.this.CurrentYear;
            }

            MainActivity.this.CurrentMonth = Calendar.getInstance(Locale.US).get(2) + 1;
            if (MainActivity.this.CurrentDay != Calendar.getInstance(Locale.US).get(5)) {

                MainActivity.this.CurrentDay = Calendar.getInstance(Locale.US).get(5);
                MainActivity.this.runOnUiThread(new Runnable() {
 // from class: net.aldaihani.kocshifts.MainActivity.UpdateValuesTaskClass.1
                    @Override // java.lang.Runnable
                    void run() {

                        MainActivity.this.MakeCalendar(MainActivity.this.CalendarYear);
                    }

                }
);
            }

            MainActivity.this.CurrentHour = Calendar.getInstance(Locale.US).get(11);
            MainActivity.this.runOnUiThread(new Runnable() {
 // from class: net.aldaihani.kocshifts.MainActivity.UpdateValuesTaskClass.2
                @Override // java.lang.Runnable
                void run() {

                    MainActivity.this.ShiftsInDutyStatus();
                }

            }
);
        }

    }

}

