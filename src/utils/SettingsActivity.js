/* Auto-generated JavaScript code */
package net.aldaihani.kocshifts;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AlarmManager;
import android.app.Dialog;
import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.content.ComponentName;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import android.media.MediaPlayer;
import android.os.Build;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.support.v4.app.ShareCompat;
import android.support.v4.view.ViewCompat;
import android.text.TextUtils;
import android.util.DisplayMetrics;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.BaseAdapter;
import android.widget.Button;
import android.widget.CompoundButton;
import android.widget.GridLayout;
import android.widget.ListAdapter;
import android.widget.ListView;
import android.widget.ProgressBar;
import android.widget.RelativeLayout;
import android.widget.Switch;
import android.widget.TextView;
import java.util.ArrayList;
@SuppressLint({
"NewApi", "RtlHardcoded"}
)
/* loaded from: classes.dex */
class SettingsActivity extends Activity {

    Button ColorsButton;
    Dialog ColorsDialog;
    Dialog MyProgressDialog;
    Dialog PatternsDialog;
    Dialog RemainderDialog;
    function RemainderSelectedShift;
    View RemainderSelectingTimeView;
    Dialog RemainderSoundDialog;
    function SelectedLanguage;
    function WidgetsSelectedShift;
    MediaPlayer mediaPlayer;
    ArrayList<String[]> RemainderSoundList = new ArrayList<>();
    ArrayList<String[]> ColorsList = new ArrayList<>();
    ArrayList<String[]> PatternsArrayList = new ArrayList<>();
    int MorningColor = 10000;
    int AfternoonColor = 10000;
    int NightColor = 10000;
    int RestColor = 10000;
    int SelectedPattern = 0;
    int SelectingPattern = 0;
    int SelectedRemainderSound = 0;
    int SelectingRemainderSound = 0;
    int RemainderSelectedTime = 0;
    int RemainderSelectingTime = 10000;
    Utilities Utility = new Utilities();

    @Override // android.app.Activity
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_settings);
        this.PatternsArrayList.add(new String[]{
"General", "عام", "12/24/12/48", "General", "4"}
);
        this.PatternsArrayList.add(new String[]{
"Export Operations", "عمليات التصدير", "12/24/12/48", "COCC", "4"}
);
        this.PatternsArrayList.add(new String[]{
"Ahmadi Security Team", "قسم أمن الأحمدي", "SecurityAhmadi", "SecurityAhmadi", "8"}
);
        this.PatternsArrayList.add(new String[]{
"Marine Operations", "العمليات البحرية", "12/24/12/48", "MarineOperations", "4"}
);
        this.PatternsArrayList.add(new String[]{
"Ambulance Services", "خدمات الإسعاف", "12/24/12/48", "AmbulanceServices", "4"}
);
        this.PatternsArrayList.add(new String[]{
"Ambulance Services Ahmadi", "خدمات الإسعاف الأحمدي", "12/24/12/48", "AmbulanceServicesAhmadi", "4"}
);
        this.ColorsList.add(new String[]{
"#FFFFFF", "#000000"}
);
        this.ColorsList.add(new String[]{
"#000000", "#FFFFFF"}
);
        this.ColorsList.add(new String[]{
"#96DDFF", "#000000"}
);
        this.ColorsList.add(new String[]{
"#FF7F00", "#000000"}
);
        this.ColorsList.add(new String[]{
"#44EBF4", "#000000"}
);
        this.ColorsList.add(new String[]{
"#007BF4", "#000000"}
);
        this.ColorsList.add(new String[]{
"#ED3DF4", "#000000"}
);
        this.ColorsList.add(new String[]{
"#F4857B", "#000000"}
);
        this.ColorsList.add(new String[]{
"#F4F07C", "#000000"}
);
        this.ColorsList.add(new String[]{
"#926438", "#000000"}
);
        this.ColorsList.add(new String[]{
"#C75FF4", "#000000"}
);
        this.ColorsList.add(new String[]{
"#F498CC", "#000000"}
);
        this.ColorsList.add(new String[]{
"#61A1F4", "#000000"}
);
        this.ColorsList.add(new String[]{
"#5A78F4", "#000000"}
);
        this.ColorsList.add(new String[]{
"#9DBCF4", "#000000"}
);
        this.ColorsList.add(new String[]{
"#640000", "#FFFFFF"}
);
        this.ColorsList.add(new String[]{
"#00FF00", "#000000"}
);
        this.ColorsList.add(new String[]{
"#FFFF00", "#000000"}
);
        this.ColorsList.add(new String[]{
"#434343", "#FFFFFF"}
);
        this.ColorsList.add(new String[]{
"#C0C0C0", "#000000"}
);
        this.RemainderSoundList.add(new String[]{
"Alarm Clock", "2131034113"}
);
        this.RemainderSoundList.add(new String[]{
"Alarm", "2131034112"}
);
        this.RemainderSoundList.add(new String[]{
"Annoying Alarm", "2131034114"}
);
        this.RemainderSoundList.add(new String[]{
"Code 3 Alarm", "2131034115"}
);
        this.RemainderSoundList.add(new String[]{
"Fire Alarm", "2131034116"}
);
        this.RemainderSoundList.add(new String[]{
"Old Alarm Clock", "2131034117"}
);
        this.RemainderSoundList.add(new String[]{
"Tornado Siren", "2131034118"}
);
        GradientDrawable DialogBorder = new GradientDrawable();
        DialogBorder.setCornerRadius(40.0f);
        DialogBorder.setStroke(this.Utility.DpToPx(Double.valueOf(2.0d)), -12303292);
        DialogBorder.setColor(Color.parseColor("#CCCCCC"));
        this.PatternsDialog = new Dialog(this, 16973840);
        this.PatternsDialog.requestWindowFeature(1);
        this.PatternsDialog.setContentView(R.layout.dialog_patterns);
        this.PatternsDialog.setCanceledOnTouchOutside(true);
        if (Build.VERSION.SDK_INT >= 16) {

            this.PatternsDialog.findViewById(R.id.dialog_patterns_main).setBackground(DialogBorder);
        }

        ((ListView) this.PatternsDialog.findViewById(R.id.dialog_patterns_list)).setAdapter((ListAdapter) new PatternsAdapter(this));
        ((ListView) this.PatternsDialog.findViewById(R.id.dialog_patterns_list)).setOnItemClickListener(new AdapterView.OnItemClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.1
            @Override // android.widget.AdapterView.OnItemClickListener
            void onItemClick(AdapterView<?> arg0, View rowView, int position, long arg3) {

                View OldRow = ((ListView) SettingsActivity.this.PatternsDialog.findViewById(R.id.dialog_patterns_list)).getChildAt(SettingsActivity.this.SelectingPattern);
                if (OldRow != null) {

                    OldRow.setBackgroundColor(0);
                }

                SettingsActivity.this.SelectingPattern = position;
                rowView.setBackgroundColor(-7829368);
            }

        }
);
        this.PatternsDialog.findViewById(R.id.dialog_patterns_contact).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.2
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                ShareCompat.IntentBuilder builder = ShareCompat.IntentBuilder.from(SettingsActivity.this);
                builder.setType("message/rfc822");
                builder.addEmailTo("Saied@aldaihani.net");
                builder.setSubject("K.O.C. Shifts Add Shift Pattern");
                if (SettingsActivity.this.SelectedLanguage.equals("Arabic")) {

                    builder.setText(String.format("\n    معلومات الإتصال:\n     ١- الأسم\n     ٢- رقم الهاتف\n\nمعلومات نمط النوبة:\n     ١- أسم المجموعة\n     ٢- أسم الفريق\n     ٣- كود الفريق\n     ٤- صورة من نمط النوبة لمدة شهر\n     ٥- بداية النوبة الصباحية\n     ٦- إجمالي ساعات العمل\n     ٧- إجمالي أيام العمل من ضمنهم أيام الراحة\n     ٨- هل يوم الجمعة يضاف للإجازة\n\n-------------------------------------------\nDevice Brand/Model %s\nDevice Version %s\nApplication Version v%s\n-------------------------------------------\n", Build.BRAND + "/" + Build.MODEL, Build.VERSION.RELEASE, PreferenceManager.getDefaultSharedPreferences(SettingsActivity.this.getApplicationContext()).getString("AppVersion", "1.0.0.0")));
                }
 else {

                    builder.setText(String.format("Contact informations:\n     1- Name.\n     2- Contact Phone Number.\n\nShift Pattern informations:\n     1- Group name.\n     2- Team name.\n     3- Organization code.\n     4- One month shift roster.\n     5- Morning shift start time.\n     6- Total working hours.\n     7- Total working days including rest days.\n     8- Vacation leave fridays is it inclouded in leave?\n\n-------------------------------------------\nDevice Brand/Model %s\nDevice Version %s\nApplication Version v%s\n-------------------------------------------\n", Build.BRAND + "/" + Build.MODEL, Build.VERSION.RELEASE, PreferenceManager.getDefaultSharedPreferences(SettingsActivity.this.getApplicationContext()).getString("AppVersion", "1.0.0.0")));
                }

                builder.setChooserTitle("Send Mail...");
                builder.startChooser();
            }

        }
);
        this.PatternsDialog.findViewById(R.id.dialog_patterns_ok).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.3
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.SelectedPattern = SettingsActivity.this.SelectingPattern;
                ((Button) SettingsActivity.this.findViewById(R.id.settings_pattern)).setText(SettingsActivity.this.PatternsArrayList.get(SettingsActivity.this.SelectedPattern)[SettingsActivity.this.SelectedLanguage.equals("Arabic") ? (char) 1 : 0]);
                SettingsActivity.this.ShowHideAfternoon();
                SettingsActivity.this.PatternsDialog.dismiss();
            }

        }
);
        this.PatternsDialog.findViewById(R.id.dialog_patterns_cancel).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.4
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.PatternsDialog.dismiss();
            }

        }
);
        ((TextView) this.PatternsDialog.findViewById(R.id.dialog_patterns_ok)).setText("Contact To Add Your Shift Pattern");
        ((Button) this.PatternsDialog.findViewById(R.id.dialog_patterns_ok)).setText("Done");
        ((Button) this.PatternsDialog.findViewById(R.id.dialog_patterns_cancel)).setText("Cancel");
        GridLayout ColorsGridLayout = new GridLayout(this);
        GradientDrawable ColorsGridLayoutDrawable = new GradientDrawable();
        ColorsGridLayoutDrawable.setColor(-12303292);
        ColorsGridLayoutDrawable.setCornerRadius(20.0f);
        if (Build.VERSION.SDK_INT >= 16) {

            ColorsGridLayout.setBackground(ColorsGridLayoutDrawable);
        }

        ColorsGridLayout.setLayoutParams(new ViewGroup.LayoutParams(-1, -1));
        ColorsGridLayout.setColumnCount(5);
        ColorsGridLayout.setRowCount(4);
        int c = 0;
        int r = 0;
        for (int i = 0; i < this.ColorsList.size(); i++) {

            if (c == 5) {

                c = 0;
                r++;
            }

            int MarginTop = r == 0 ? this.Utility.DpToPx(Double.valueOf(15.0d)) : this.Utility.DpToPx(Double.valueOf(5.0d));
            int MarginLeft = c == 0 ? this.Utility.DpToPx(Double.valueOf(15.0d)) : this.Utility.DpToPx(Double.valueOf(5.0d));
            int MarginBottom = r == 3 ? this.Utility.DpToPx(Double.valueOf(15.0d)) : 0;
            int MarginRight = c == 4 ? this.Utility.DpToPx(Double.valueOf(15.0d)) : 0;
            Button NewButton = new Button(this);
            NewButton.setBackgroundColor(Color.parseColor(this.ColorsList.get(i)[0]));
            NewButton.setTag(Integer.valueOf(i));
            GridLayout.LayoutParams ButtonParams = new GridLayout.LayoutParams();
            ButtonParams.setGravity(17);
            ButtonParams.columnSpec = GridLayout.spec(c);
            ButtonParams.rowSpec = GridLayout.spec(r);
            ButtonParams.width = this.Utility.DpToPx(Double.valueOf(35.0d));
            ButtonParams.height = this.Utility.DpToPx(Double.valueOf(35.0d));
            ButtonParams.setMargins(MarginLeft, MarginTop, MarginRight, MarginBottom);
            NewButton.setLayoutParams(ButtonParams);
            NewButton.setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.5
                @Override // android.view.View.OnClickListener
                void onClick(View v) {

                    SettingsActivity.this.ColorsDialog.dismiss();
                    if (SettingsActivity.this.ColorsButton != null && v.getTag() != null) {

                        if (SettingsActivity.this.ColorsButton.getId() == R.id.settings_color_morning) {

                            SettingsActivity.this.MorningColor = Integer.valueOf(v.getTag().toString()).intValue();
                            String[] ColorArray = SettingsActivity.this.ColorsList.get(SettingsActivity.this.MorningColor);
                            SettingsActivity.this.ButtonChangeColor(SettingsActivity.this.ColorsButton, ColorArray[0], ColorArray[1], true);
                        }
 else if (SettingsActivity.this.ColorsButton.getId() == R.id.settings_color_afternoon) {

                            SettingsActivity.this.AfternoonColor = Integer.valueOf(v.getTag().toString()).intValue();
                            String[] ColorArray2 = SettingsActivity.this.ColorsList.get(SettingsActivity.this.AfternoonColor);
                            SettingsActivity.this.ButtonChangeColor(SettingsActivity.this.ColorsButton, ColorArray2[0], ColorArray2[1], true);
                        }
 else if (SettingsActivity.this.ColorsButton.getId() == R.id.settings_color_night) {

                            SettingsActivity.this.NightColor = Integer.valueOf(v.getTag().toString()).intValue();
                            String[] ColorArray3 = SettingsActivity.this.ColorsList.get(SettingsActivity.this.NightColor);
                            SettingsActivity.this.ButtonChangeColor(SettingsActivity.this.ColorsButton, ColorArray3[0], ColorArray3[1], true);
                        }
 else {

                            SettingsActivity.this.RestColor = Integer.valueOf(v.getTag().toString()).intValue();
                            String[] ColorArray4 = SettingsActivity.this.ColorsList.get(SettingsActivity.this.RestColor);
                            SettingsActivity.this.ButtonChangeColor(SettingsActivity.this.ColorsButton, ColorArray4[0], ColorArray4[1], true);
                        }

                        SettingsActivity.this.ColorsButton = null;
                    }

                }

            }
);
            ColorsGridLayout.addView(NewButton);
            c++;
        }

        this.ColorsDialog = new Dialog(this, 16973840);
        this.ColorsDialog.setContentView(ColorsGridLayout);
        this.ColorsDialog.getWindow().setLayout(-2, -2);
        this.ColorsDialog.setCanceledOnTouchOutside(true);
        this.RemainderDialog = new Dialog(this, 16973840);
        this.RemainderDialog.requestWindowFeature(1);
        this.RemainderDialog.setContentView(R.layout.dialog_remainder);
        this.RemainderDialog.setCanceledOnTouchOutside(true);
        if (Build.VERSION.SDK_INT >= 16) {

            this.RemainderDialog.findViewById(R.id.dialog_remainder_main).setBackground(DialogBorder);
        }

        ((ListView) this.RemainderDialog.findViewById(R.id.dialog_remainder_list)).setAdapter((ListAdapter) new RemainderTimeAdapter(this));
        ((ListView) this.RemainderDialog.findViewById(R.id.dialog_remainder_list)).setOnItemClickListener(new AdapterView.OnItemClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.6
            @Override // android.widget.AdapterView.OnItemClickListener
            void onItemClick(AdapterView<?> arg0, View rowView, int position, long arg3) {

                if (!(SettingsActivity.this.RemainderSelectingTime == position || SettingsActivity.this.RemainderSelectingTimeView == null)) {

                    SettingsActivity.this.UnHighlightRow(SettingsActivity.this.RemainderSelectingTimeView);
                }

                SettingsActivity.this.RemainderSelectingTime = position;
                SettingsActivity.this.RemainderSelectingTimeView = rowView;
                SettingsActivity.this.HighlightRow(rowView);
            }

        }
);
        this.RemainderDialog.findViewById(R.id.dialog_remainder_ok).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.7
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.RemainderSelectedTime = SettingsActivity.this.RemainderSelectingTime;
                ((Button) SettingsActivity.this.findViewById(R.id.settings_remainder_before)).setText(new Utilities().IntToTimeString(SettingsActivity.this.RemainderSelectedTime, SettingsActivity.this.SelectedLanguage));
                SettingsActivity.this.RemainderDialog.dismiss();
            }

        }
);
        this.RemainderDialog.findViewById(R.id.dialog_remainder_cancel).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.8
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.RemainderDialog.dismiss();
            }

        }
);
        this.RemainderSoundDialog = new Dialog(this, 16973840);
        this.RemainderSoundDialog.requestWindowFeature(1);
        this.RemainderSoundDialog.setContentView(R.layout.dialog_remainder_sound);
        this.RemainderSoundDialog.setCanceledOnTouchOutside(true);
        if (Build.VERSION.SDK_INT >= 16) {

            this.RemainderSoundDialog.findViewById(R.id.dialog_remainder_sound_main).setBackground(DialogBorder);
        }

        ((ListView) this.RemainderSoundDialog.findViewById(R.id.dialog_remainder_sound_list)).setAdapter((ListAdapter) new RemainderSoundAdapter(this));
        ((ListView) this.RemainderSoundDialog.findViewById(R.id.dialog_remainder_sound_list)).setOnItemClickListener(new AdapterView.OnItemClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.9
            @Override // android.widget.AdapterView.OnItemClickListener
            void onItemClick(AdapterView<?> arg0, View rowView, int position, long arg3) {

                View OldRow = ((ListView) SettingsActivity.this.RemainderSoundDialog.findViewById(R.id.dialog_remainder_sound_list)).getChildAt(SettingsActivity.this.SelectingRemainderSound);
                if (OldRow != null) {

                    OldRow.setBackgroundColor(0);
                }

                SettingsActivity.this.SelectingRemainderSound = position;
                rowView.setBackgroundColor(-7829368);
                int resourceID = Integer.valueOf(SettingsActivity.this.RemainderSoundList.get(SettingsActivity.this.SelectingRemainderSound)[1]).intValue();
                if (SettingsActivity.this.mediaPlayer != null && SettingsActivity.this.mediaPlayer.isPlaying()) {

                    SettingsActivity.this.mediaPlayer.stop();
                    SettingsActivity.this.mediaPlayer.reset();
                    SettingsActivity.this.mediaPlayer.release();
                }

                SettingsActivity.this.mediaPlayer = MediaPlayer.create(SettingsActivity.this, resourceID);
                SettingsActivity.this.mediaPlayer.start();
            }

        }
);
        this.RemainderSoundDialog.findViewById(R.id.dialog_remainder_sound_ok).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.10
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.SelectedRemainderSound = Integer.valueOf(SettingsActivity.this.RemainderSoundList.get(SettingsActivity.this.SelectingRemainderSound)[1]).intValue();
                ((Button) SettingsActivity.this.findViewById(R.id.settings_remainder_sound)).setText(SettingsActivity.this.RemainderSoundList.get(SettingsActivity.this.SelectingRemainderSound)[0]);
                SettingsActivity.this.RemainderSoundDialog.dismiss();
            }

        }
);
        this.RemainderSoundDialog.findViewById(R.id.dialog_remainder_sound_cancel).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.11
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.RemainderSoundDialog.dismiss();
            }

        }
);
        this.RemainderSoundDialog.setOnDismissListener(new DialogInterface.OnDismissListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.12
            @Override // android.content.DialogInterface.OnDismissListener
            void onDismiss(DialogInterface dialog) {

                if (SettingsActivity.this.mediaPlayer != null) {

                    if (SettingsActivity.this.mediaPlayer.isPlaying()) {

                        SettingsActivity.this.mediaPlayer.stop();
                    }

                    SettingsActivity.this.mediaPlayer.reset();
                    SettingsActivity.this.mediaPlayer.release();
                    SettingsActivity.this.mediaPlayer = null;
                }

            }

        }
);
        RelativeLayout MainProgress = new RelativeLayout(this);
        MainProgress.setLayoutParams(new ViewGroup.LayoutParams(this.Utility.DpToPx(Double.valueOf(100.0d)), this.Utility.DpToPx(Double.valueOf(100.0d))));
        GradientDrawable MainProgress_Drawable = new GradientDrawable();
        MainProgress_Drawable.setCornerRadius(40.0f);
        MainProgress_Drawable.setStroke(this.Utility.DpToPx(Double.valueOf(2.0d)), -12303292);
        MainProgress_Drawable.setColor(-1);
        if (Build.VERSION.SDK_INT >= 16) {

            MainProgress.setBackground(MainProgress_Drawable);
        }
 else {

            MainProgress.setBackgroundDrawable(MainProgress_Drawable);
        }

        ProgressBar ProgressView = new ProgressBar(this);
        RelativeLayout.LayoutParams ProgressViewParams = new RelativeLayout.LayoutParams(this.Utility.DpToPx(Double.valueOf(40.0d)), this.Utility.DpToPx(Double.valueOf(40.0d)));
        ProgressViewParams.addRule(14);
        ProgressViewParams.addRule(15);
        ProgressView.setLayoutParams(ProgressViewParams);
        MainProgress.addView(ProgressView);
        this.MyProgressDialog = new Dialog(this, 16973840);
        this.MyProgressDialog.getWindow().getWindowManager().getDefaultDisplay().getMetrics(new DisplayMetrics());
        this.MyProgressDialog.setContentView(MainProgress);
        this.MyProgressDialog.getWindow().setLayout(this.Utility.DpToPx(Double.valueOf(100.0d)), this.Utility.DpToPx(Double.valueOf(100.0d)));
        this.MyProgressDialog.setCancelable(false);
        this.MyProgressDialog.setCanceledOnTouchOutside(false);
        findViewById(R.id.settings_tick).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.13
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.MyProgressDialog.show();
                new Thread() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.13.1
                    @Override // java.lang.Thread, java.lang.Runnable
                    void run() {

                        ArrayList<String> Messages = new ArrayList<>();
                        boolean BooleanCalendar = false;
                        boolean BooleanPattern = false;
                        boolean BooleanLanguage = false;
                        boolean BooleanRemainder = false;
                        boolean BooleanHolidays = false;
                        SharedPreferences Preference = PreferenceManager.getDefaultSharedPreferences(SettingsActivity.this.getApplicationContext());
                        SharedPreferences.Editor PreferenceEditor = Preference.edit();
                        if (!Preference.getString("Language", "English").equals(SettingsActivity.this.SelectedLanguage)) {

                            BooleanLanguage = true;
                            PreferenceEditor.putString("Language", SettingsActivity.this.SelectedLanguage).apply();
                            if (SettingsActivity.this.SelectedLanguage.equals("Arabic")) {

                                Messages.add("تم تغير اللغة إلى العربيه");
                            }
 else {

                                Messages.add("Language changed to English");
                            }

                        }

                        if (Preference.getInt("PatternItem", 0) != SettingsActivity.this.SelectedPattern) {

                            BooleanCalendar = true;
                            BooleanPattern = true;
                            PreferenceEditor.putInt("PatternItem", SettingsActivity.this.SelectedPattern).apply();
                            PreferenceEditor.putString("Pattern", SettingsActivity.this.PatternsArrayList.get(SettingsActivity.this.SelectedPattern)[2]).apply();
                            PreferenceEditor.putString("ShiftPattern", SettingsActivity.this.PatternsArrayList.get(SettingsActivity.this.SelectedPattern)[3]).apply();
                            if (SettingsActivity.this.SelectedLanguage.equals("Arabic")) {

                                Messages.add("تم تغير نمط المناوبة");
                            }
 else {

                                Messages.add("Shift Pattern has been changed");
                            }

                        }

                        if (SettingsActivity.this.MorningColor != 10000 && !Preference.getString("MorningColor", "#96DDFF").equals(SettingsActivity.this.ColorsList.get(SettingsActivity.this.MorningColor)[0])) {

                            BooleanCalendar = true;
                            PreferenceEditor.putString("MorningColor", SettingsActivity.this.ColorsList.get(SettingsActivity.this.MorningColor)[0]).apply();
                            PreferenceEditor.putString("MorningColorT", SettingsActivity.this.ColorsList.get(SettingsActivity.this.MorningColor)[1]).apply();
                            if (SettingsActivity.this.SelectedLanguage.equals("Arabic")) {

                                Messages.add("تم تغير لون المناوبة الصباحية");
                            }
 else {

                                Messages.add("Morning Shift Color was changed");
                            }

                        }

                        if (SettingsActivity.this.AfternoonColor != 10000 && !Preference.getString("AfternoonColor", "#F4F07C").equals(SettingsActivity.this.ColorsList.get(SettingsActivity.this.AfternoonColor)[0])) {

                            BooleanCalendar = true;
                            PreferenceEditor.putString("AfternoonColor", SettingsActivity.this.ColorsList.get(SettingsActivity.this.AfternoonColor)[0]).apply();
                            PreferenceEditor.putString("AfternoonColorT", SettingsActivity.this.ColorsList.get(SettingsActivity.this.AfternoonColor)[1]).apply();
                            if (SettingsActivity.this.SelectedLanguage.equals("Arabic")) {

                                Messages.add("تم تغير لون مناوبة العصر");
                            }
 else {

                                Messages.add("Afternoon Shift Color was changed");
                            }

                        }

                        if (SettingsActivity.this.NightColor != 10000 && !Preference.getString("NightColor", "#C0C0C0").equals(SettingsActivity.this.ColorsList.get(SettingsActivity.this.NightColor)[0])) {

                            BooleanCalendar = true;
                            PreferenceEditor.putString("NightColor", SettingsActivity.this.ColorsList.get(SettingsActivity.this.NightColor)[0]).apply();
                            PreferenceEditor.putString("NightColorT", SettingsActivity.this.ColorsList.get(SettingsActivity.this.NightColor)[1]).apply();
                            if (SettingsActivity.this.SelectedLanguage.equals("Arabic")) {

                                Messages.add("تم تغير لون المناوبة المسائية");
                            }
 else {

                                Messages.add("Night Shift Color was changed");
                            }

                        }

                        if (SettingsActivity.this.RestColor != 10000 && !Preference.getString("RestColor", "#FFFFFF").equals(SettingsActivity.this.ColorsList.get(SettingsActivity.this.RestColor)[0])) {

                            BooleanCalendar = true;
                            PreferenceEditor.putString("RestColor", SettingsActivity.this.ColorsList.get(SettingsActivity.this.RestColor)[0]).apply();
                            PreferenceEditor.putString("RestColorT", SettingsActivity.this.ColorsList.get(SettingsActivity.this.RestColor)[1]).apply();
                            if (SettingsActivity.this.SelectedLanguage.equals("Arabic")) {

                                Messages.add("تم تغير لون يوم الراحه");
                            }
 else {

                                Messages.add("Rest Day Color was changed");
                            }

                        }

                        if (Preference.getBoolean("Holidays", true) != ((Switch) SettingsActivity.this.findViewById(R.id.settings_holidays)).isChecked()) {

                            BooleanHolidays = true;
                            Boolean HolidaysStatus = Boolean.valueOf(((Switch) SettingsActivity.this.findViewById(R.id.settings_holidays)).isChecked());
                            PreferenceEditor.putBoolean("Holidays", HolidaysStatus.booleanValue()).apply();
                            if (HolidaysStatus.booleanValue()) {

                                new GetHolidays(SettingsActivity.this, true).UpdateServerData(null);
                            }

                            if (SettingsActivity.this.SelectedLanguage.equals("Arabic")) {

                                if (HolidaysStatus.booleanValue()) {

                                    Messages.add("تم تفعيل العطل الرسمية");
                                }
 else {

                                    Messages.add("تم إيقاف العطل الرسمية");
                                }

                            }
 else if (HolidaysStatus.booleanValue()) {

                                Messages.add("Holidays has been enabled");
                            }
 else {

                                Messages.add("Holidays has been disabled");
                            }

                        }

                        if (!((Switch) SettingsActivity.this.findViewById(R.id.settings_remainder)).isChecked()) {

                            AlarmManager AlarmMngr = (AlarmManager) SettingsActivity.this.getSystemService("alarm");
                            AlarmMngr.cancel(PendingIntent.getBroadcast(SettingsActivity.this, 1, new Intent(SettingsActivity.this, AlarmReciever.class), 134217728));
                            AlarmMngr.cancel(PendingIntent.getBroadcast(SettingsActivity.this, 2, new Intent(SettingsActivity.this, AlarmReciever.class), 134217728));
                            if (Preference.getBoolean("RemainderEnable", false)) {

                                BooleanRemainder = true;
                                PreferenceEditor.putBoolean("RemainderEnable", false).apply();
                                if (SettingsActivity.this.SelectedLanguage.equals("Arabic")) {

                                    Messages.add("تم إيقاف التذكير بالمناوبة");
                                }
 else {

                                    Messages.add("Duty remainder has been disabled");
                                }

                            }

                        }
 else {

                            if (!Preference.getBoolean("RemainderEnable", false)) {

                                PreferenceEditor.putBoolean("RemainderEnable", true).apply();
                                BooleanRemainder = true;
                                if (SettingsActivity.this.SelectedLanguage.equals("Arabic")) {

                                    Messages.add("تم تفعيل التذكير بالمناوبة");
                                }
 else {

                                    Messages.add("Duty remainder has been enabled");
                                }

                            }

                            if (!Preference.getString("RemainderShift", "").equals(SettingsActivity.this.RemainderSelectedShift)) {

                                PreferenceEditor.putString("RemainderShift", SettingsActivity.this.RemainderSelectedShift).apply();
                                BooleanRemainder = true;
                                if (SettingsActivity.this.SelectedLanguage.equals("Arabic")) {

                                    Messages.add("تم تغير زام التذكير بالمناوبة");
                                }
 else {

                                    Messages.add("Remainder Shift Was Changed");
                                }

                            }

                            if (Preference.getInt("RemainderTime", 999999999) != SettingsActivity.this.RemainderSelectedTime) {

                                PreferenceEditor.putInt("RemainderTime", SettingsActivity.this.RemainderSelectedTime).apply();
                                BooleanRemainder = true;
                                if (SettingsActivity.this.SelectedLanguage.equals("Arabic")) {

                                    Messages.add("تم تغير وقت التذكير بالمناوبة");
                                }
 else {

                                    Messages.add("Remainder Time Was Changed");
                                }

                            }

                            if (Preference.getInt("RemainderSound", R.raw.alarm) != SettingsActivity.this.SelectedRemainderSound) {

                                PreferenceEditor.putInt("RemainderSound", SettingsActivity.this.SelectedRemainderSound).apply();
                                BooleanRemainder = true;
                                if (SettingsActivity.this.SelectedLanguage.equals("Arabic")) {

                                    Messages.add("تم تغير صوت التذكير بالمناوبة");
                                }
 else {

                                    Messages.add("Remainder Sound Was Changed");
                                }

                            }

                        }

                        if ((BooleanLanguage || BooleanPattern || BooleanRemainder) && Preference.getBoolean("RemainderEnable", false)) {

                            SettingsActivity.this.sendBroadcast(new Intent(SettingsActivity.this, BootReceiver.class));
                        }

                        if (!Preference.getString("WidgetsShift", "A").equals(SettingsActivity.this.WidgetsSelectedShift)) {

                            PreferenceEditor.putString("WidgetsShift", SettingsActivity.this.WidgetsSelectedShift).apply();
                            if (SettingsActivity.this.SelectedLanguage.equals("Arabic")) {

                                Messages.add("تم تغير مناوبة التطبيقات المصغرة");
                            }
 else {

                                Messages.add("Widgets Shift Was Changed");
                            }

                        }

                        PreferenceEditor.commit();
                        Intent intent = new Intent(SettingsActivity.this, WidgetProvider.class);
                        intent.setAction("android.appwidget.action.APPWIDGET_UPDATE");
                        intent.putExtra("appWidgetIds", AppWidgetManager.getInstance(SettingsActivity.this.getApplication()).getAppWidgetIds(new ComponentName(SettingsActivity.this.getApplication(), WidgetProvider.class)));
                        SettingsActivity.this.sendBroadcast(intent);
                        function Messagesfunction = "";
                        if (Messages.size() > 0) {

                            Messagesfunction = TextUtils.join("\n", Messages);
                        }

                        Intent IntentAct = new Intent();
                        IntentAct.putExtra("Messages", MessagesString);
                        IntentAct.putExtra("Calendar", BooleanCalendar);
                        IntentAct.putExtra("Language", BooleanLanguage);
                        IntentAct.putExtra("Remainder", BooleanRemainder);
                        IntentAct.putExtra("Holidays", BooleanHolidays);
                        if (SettingsActivity.this.getParent() == null) {

                            SettingsActivity.this.setResult(-1, IntentAct);
                        }
 else {

                            SettingsActivity.this.getParent().setResult(-1, IntentAct);
                        }

                        SettingsActivity.this.MyProgressDialog.dismiss();
                        SettingsActivity.this.finish();
                    }

                }
.start();
            }

        }
);
        findViewById(R.id.settings_cross).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.14
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                if (SettingsActivity.this.getParent() == null) {

                    SettingsActivity.this.setResult(0, new Intent());
                }
 else {

                    SettingsActivity.this.getParent().setResult(0, new Intent());
                }

                SettingsActivity.this.finish();
            }

        }
);
        findViewById(R.id.settings_language_english).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.15
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.LanguageChanged("English");
            }

        }
);
        findViewById(R.id.settings_language_arabic).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.16
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.LanguageChanged("Arabic");
            }

        }
);
        findViewById(R.id.settings_pattern).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.17
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.SelectingPattern = SettingsActivity.this.SelectedPattern;
                SettingsActivity.this.PatternsDialog.show();
            }

        }
);
        findViewById(R.id.settings_color_morning).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.18
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.ColorsDialog.show();
                SettingsActivity.this.ColorsButton = (Button) v;
            }

        }
);
        findViewById(R.id.settings_color_afternoon).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.19
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.ColorsDialog.show();
                SettingsActivity.this.ColorsButton = (Button) v;
            }

        }
);
        findViewById(R.id.settings_color_night).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.20
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.ColorsDialog.show();
                SettingsActivity.this.ColorsButton = (Button) v;
            }

        }
);
        findViewById(R.id.settings_color_rest).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.21
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.ColorsDialog.show();
                SettingsActivity.this.ColorsButton = (Button) v;
            }

        }
);
        ((Switch) findViewById(R.id.settings_remainder)).setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.22
            @Override // android.widget.CompoundButton.OnCheckedChangeListener
            void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {

                if (isChecked) {

                    SettingsActivity.this.findViewById(R.id.settings_remainder_a_shift).setEnabled(true);
                    SettingsActivity.this.findViewById(R.id.settings_remainder_b_shift).setEnabled(true);
                    SettingsActivity.this.findViewById(R.id.settings_remainder_c_shift).setEnabled(true);
                    SettingsActivity.this.findViewById(R.id.settings_remainder_d_shift).setEnabled(true);
                    SettingsActivity.this.findViewById(R.id.settings_remainder_before).setEnabled(true);
                    SettingsActivity.this.findViewById(R.id.settings_remainder_sound).setEnabled(true);
                    ((TextView) SettingsActivity.this.findViewById(R.id.settings_remainder_before_text)).setTextColor(ViewCompat.MEASURED_STATE_MASK);
                    ((TextView) SettingsActivity.this.findViewById(R.id.settings_remainder_sound_text)).setTextColor(ViewCompat.MEASURED_STATE_MASK);
                    return;
                }

                SettingsActivity.this.findViewById(R.id.settings_remainder_a_shift).setEnabled(false);
                SettingsActivity.this.findViewById(R.id.settings_remainder_b_shift).setEnabled(false);
                SettingsActivity.this.findViewById(R.id.settings_remainder_c_shift).setEnabled(false);
                SettingsActivity.this.findViewById(R.id.settings_remainder_d_shift).setEnabled(false);
                SettingsActivity.this.findViewById(R.id.settings_remainder_before).setEnabled(false);
                SettingsActivity.this.findViewById(R.id.settings_remainder_sound).setEnabled(false);
                ((TextView) SettingsActivity.this.findViewById(R.id.settings_remainder_before_text)).setTextColor(-7829368);
                ((TextView) SettingsActivity.this.findViewById(R.id.settings_remainder_sound_text)).setTextColor(-7829368);
            }

        }
);
        findViewById(R.id.settings_widget_a_shift).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.23
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.WidgetsShiftChanged("A");
            }

        }
);
        findViewById(R.id.settings_widget_b_shift).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.24
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.WidgetsShiftChanged("B");
            }

        }
);
        findViewById(R.id.settings_widget_c_shift).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.25
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.WidgetsShiftChanged("C");
            }

        }
);
        findViewById(R.id.settings_widget_d_shift).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.26
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.WidgetsShiftChanged("D");
            }

        }
);
        findViewById(R.id.settings_remainder_a_shift).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.27
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.RemainderShiftChanged("A");
            }

        }
);
        findViewById(R.id.settings_remainder_b_shift).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.28
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.RemainderShiftChanged("B");
            }

        }
);
        findViewById(R.id.settings_remainder_c_shift).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.29
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.RemainderShiftChanged("C");
            }

        }
);
        findViewById(R.id.settings_remainder_d_shift).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.30
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.RemainderShiftChanged("D");
            }

        }
);
        findViewById(R.id.settings_remainder_before).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.31
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                SettingsActivity.this.RemainderSelectingTime = SettingsActivity.this.RemainderSelectedTime;
                SettingsActivity.this.RemainderDialog.show();
            }

        }
);
        findViewById(R.id.settings_remainder_sound).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.SettingsActivity.32
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                for (int i2 = 0; i2 < SettingsActivity.this.RemainderSoundList.size(); i2++) {

                    if (SettingsActivity.this.RemainderSoundList.get(i2)[1].equals("" + SettingsActivity.this.SelectedRemainderSound)) {

                        SettingsActivity.this.SelectingRemainderSound = i2;
                    }

                }

                SettingsActivity.this.RemainderSoundDialog.show();
            }

        }
);
        ((Button) findViewById(R.id.settings_widget_a_shift)).setText("A");
        ((Button) findViewById(R.id.settings_widget_b_shift)).setText("B");
        ((Button) findViewById(R.id.settings_widget_c_shift)).setText("C");
        ((Button) findViewById(R.id.settings_widget_d_shift)).setText("D");
        ((Button) findViewById(R.id.settings_remainder_a_shift)).setText("A");
        ((Button) findViewById(R.id.settings_remainder_b_shift)).setText("B");
        ((Button) findViewById(R.id.settings_remainder_c_shift)).setText("C");
        ((Button) findViewById(R.id.settings_remainder_d_shift)).setText("D");
        ((Button) findViewById(R.id.settings_language_english)).setText("English");
        ((Button) findViewById(R.id.settings_language_arabic)).setText("العربيه");
        SharedPreferences Preference = PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
        ButtonChangeColor((Button) findViewById(R.id.settings_color_morning), Preference.getString("MorningColor", "#96DDFF"), Preference.getString("MorningColorT", "#000000"), true);
        ButtonChangeColor((Button) findViewById(R.id.settings_color_afternoon), Preference.getString("AfternoonColor", "#F4F07C"), Preference.getString("AfternoonColorT", "#000000"), true);
        ButtonChangeColor((Button) findViewById(R.id.settings_color_night), Preference.getString("NightColor", "#C0C0C0"), Preference.getString("NightColorT", "#000000"), true);
        ButtonChangeColor((Button) findViewById(R.id.settings_color_rest), Preference.getString("RestColor", "#FFFFFF"), Preference.getString("RestColorT", "#000000"), true);
        ((Switch) findViewById(R.id.settings_holidays)).setChecked(Preference.getBoolean("Holidays", true));
        ((Switch) findViewById(R.id.settings_remainder)).setChecked(Preference.getBoolean("RemainderEnable", false));
        WidgetsShiftChanged(Preference.getString("WidgetsShift", "A"));
        RemainderShiftChanged(Preference.getString("RemainderShift", "A"));
        this.RemainderSelectedTime = Preference.getInt("RemainderTime", 0);
        this.SelectedPattern = Preference.getInt("PatternItem", 0);
        this.SelectedRemainderSound = Preference.getInt("RemainderSound", R.raw.alarm);
        int SelectedSound = 0;
        for (int i2 = 0; i2 < this.RemainderSoundList.size(); i2++) {

            if (this.RemainderSoundList.get(i2)[1].equals("" + this.SelectedRemainderSound)) {

                SelectedSound = i2;
            }

        }

        ((Button) findViewById(R.id.settings_remainder_sound)).setText(this.RemainderSoundList.get(SelectedSound)[0]);
        LanguageChanged(Preference.getString("Language", "English"));
    }


    void ShowHideAfternoon() {

        if (this.SelectedLanguage.equals("Arabic")) {

            ((TextView) findViewById(R.id.settings_color_afternoon_text)).setText("لون مناوبة العصر");
            ((TextView) findViewById(R.id.settings_color_afternoon_text)).setGravity(5);
            ((Button) findViewById(R.id.settings_color_afternoon)).setText("تغير");
            ((TextView) findViewById(R.id.settings_color_night_text)).setText("لون المناوبة المسائية");
            ((TextView) findViewById(R.id.settings_color_night_text)).setGravity(5);
            ((Button) findViewById(R.id.settings_color_night)).setText("تغير");
            if (this.PatternsArrayList.get(this.SelectedPattern)[4].equals("8")) {

                findViewById(R.id.settings_color_afternoon).setVisibility(0);
                findViewById(R.id.settings_color_afternoon_text).setVisibility(0);
                RelativeLayout.LayoutParams Afternoon_Button_Params = new RelativeLayout.LayoutParams(this.Utility.DpToPx(Double.valueOf(100.0d)), this.Utility.DpToPx(Double.valueOf(33.0d)));
                Afternoon_Button_Params.addRule(3, R.id.settings_color_morning);
                Afternoon_Button_Params.addRule(9);
                Afternoon_Button_Params.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), this.Utility.DpToPx(Double.valueOf(5.0d)), this.Utility.DpToPx(Double.valueOf(4.0d)), 0);
                findViewById(R.id.settings_color_afternoon).setLayoutParams(Afternoon_Button_Params);
                RelativeLayout.LayoutParams Afternoon_Text_Params = new RelativeLayout.LayoutParams(-1, -2);
                Afternoon_Text_Params.addRule(4, R.id.settings_color_afternoon);
                Afternoon_Text_Params.addRule(1, R.id.settings_color_afternoon);
                Afternoon_Text_Params.setMargins(0, 0, this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
                findViewById(R.id.settings_color_afternoon_text).setLayoutParams(Afternoon_Text_Params);
                RelativeLayout.LayoutParams Night_Button_Params = new RelativeLayout.LayoutParams(this.Utility.DpToPx(Double.valueOf(100.0d)), this.Utility.DpToPx(Double.valueOf(33.0d)));
                Night_Button_Params.addRule(3, R.id.settings_color_afternoon);
                Night_Button_Params.addRule(9);
                Night_Button_Params.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), this.Utility.DpToPx(Double.valueOf(5.0d)), this.Utility.DpToPx(Double.valueOf(4.0d)), 0);
                findViewById(R.id.settings_color_night).setLayoutParams(Night_Button_Params);
                RelativeLayout.LayoutParams Night_Text_Params = new RelativeLayout.LayoutParams(-1, -2);
                Night_Text_Params.addRule(4, R.id.settings_color_night);
                Night_Text_Params.addRule(1, R.id.settings_color_night);
                Night_Text_Params.setMargins(0, 0, this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
                findViewById(R.id.settings_color_night_text).setLayoutParams(Night_Text_Params);
                return;
            }

            findViewById(R.id.settings_color_afternoon).setVisibility(8);
            findViewById(R.id.settings_color_afternoon_text).setVisibility(8);
            RelativeLayout.LayoutParams Night_Button_Params2 = new RelativeLayout.LayoutParams(this.Utility.DpToPx(Double.valueOf(100.0d)), this.Utility.DpToPx(Double.valueOf(33.0d)));
            Night_Button_Params2.addRule(3, R.id.settings_color_morning);
            Night_Button_Params2.addRule(9);
            Night_Button_Params2.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), this.Utility.DpToPx(Double.valueOf(5.0d)), this.Utility.DpToPx(Double.valueOf(4.0d)), 0);
            findViewById(R.id.settings_color_night).setLayoutParams(Night_Button_Params2);
            RelativeLayout.LayoutParams Night_Text_Params2 = new RelativeLayout.LayoutParams(-1, -2);
            Night_Text_Params2.addRule(4, R.id.settings_color_night);
            Night_Text_Params2.addRule(1, R.id.settings_color_night);
            Night_Text_Params2.setMargins(0, 0, this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
            findViewById(R.id.settings_color_night_text).setLayoutParams(Night_Text_Params2);
            return;
        }

        ((TextView) findViewById(R.id.settings_color_afternoon_text)).setText("Afternoon Shift Color");
        ((TextView) findViewById(R.id.settings_color_afternoon_text)).setGravity(3);
        ((Button) findViewById(R.id.settings_color_afternoon)).setText("Change");
        ((TextView) findViewById(R.id.settings_color_night_text)).setText("Night Shift Color");
        ((TextView) findViewById(R.id.settings_color_night_text)).setGravity(3);
        ((Button) findViewById(R.id.settings_color_night)).setText("Change");
        if (this.PatternsArrayList.get(this.SelectedPattern)[4].equals("8")) {

            findViewById(R.id.settings_color_afternoon).setVisibility(0);
            findViewById(R.id.settings_color_afternoon_text).setVisibility(0);
            RelativeLayout.LayoutParams Afternoon_Button_Params2 = new RelativeLayout.LayoutParams(this.Utility.DpToPx(Double.valueOf(100.0d)), this.Utility.DpToPx(Double.valueOf(33.0d)));
            Afternoon_Button_Params2.addRule(3, R.id.settings_color_morning);
            Afternoon_Button_Params2.addRule(11);
            Afternoon_Button_Params2.setMargins(this.Utility.DpToPx(Double.valueOf(4.0d)), this.Utility.DpToPx(Double.valueOf(5.0d)), this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
            findViewById(R.id.settings_color_afternoon).setLayoutParams(Afternoon_Button_Params2);
            RelativeLayout.LayoutParams Afternoon_Text_Params2 = new RelativeLayout.LayoutParams(-1, -2);
            Afternoon_Text_Params2.addRule(4, R.id.settings_color_afternoon);
            Afternoon_Text_Params2.addRule(0, R.id.settings_color_afternoon);
            Afternoon_Text_Params2.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), 0, 0, 0);
            findViewById(R.id.settings_color_afternoon_text).setLayoutParams(Afternoon_Text_Params2);
            RelativeLayout.LayoutParams Night_Button_Params3 = new RelativeLayout.LayoutParams(this.Utility.DpToPx(Double.valueOf(100.0d)), this.Utility.DpToPx(Double.valueOf(33.0d)));
            Night_Button_Params3.addRule(3, R.id.settings_color_afternoon);
            Night_Button_Params3.addRule(11);
            Night_Button_Params3.setMargins(this.Utility.DpToPx(Double.valueOf(4.0d)), this.Utility.DpToPx(Double.valueOf(5.0d)), this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
            findViewById(R.id.settings_color_night).setLayoutParams(Night_Button_Params3);
            RelativeLayout.LayoutParams Night_Text_Params3 = new RelativeLayout.LayoutParams(-1, -2);
            Night_Text_Params3.addRule(4, R.id.settings_color_night);
            Night_Text_Params3.addRule(0, R.id.settings_color_night);
            Night_Text_Params3.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), 0, 0, 0);
            findViewById(R.id.settings_color_night_text).setLayoutParams(Night_Text_Params3);
            return;
        }

        findViewById(R.id.settings_color_afternoon).setVisibility(8);
        findViewById(R.id.settings_color_afternoon_text).setVisibility(8);
        RelativeLayout.LayoutParams Night_Button_Params4 = new RelativeLayout.LayoutParams(this.Utility.DpToPx(Double.valueOf(100.0d)), this.Utility.DpToPx(Double.valueOf(33.0d)));
        Night_Button_Params4.addRule(3, R.id.settings_color_morning);
        Night_Button_Params4.addRule(11);
        Night_Button_Params4.setMargins(this.Utility.DpToPx(Double.valueOf(4.0d)), this.Utility.DpToPx(Double.valueOf(5.0d)), this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
        findViewById(R.id.settings_color_night).setLayoutParams(Night_Button_Params4);
        RelativeLayout.LayoutParams Night_Text_Params4 = new RelativeLayout.LayoutParams(-1, -2);
        Night_Text_Params4.addRule(4, R.id.settings_color_night);
        Night_Text_Params4.addRule(0, R.id.settings_color_night);
        Night_Text_Params4.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), 0, 0, 0);
        findViewById(R.id.settings_color_night_text).setLayoutParams(Night_Text_Params4);
    }


    void LanguageChanged(function Language) {

        if (!Language.equals(this.SelectedLanguage)) {

            this.SelectedLanguage = Language;
            Button EnglishLanguage = (Button) findViewById(R.id.settings_language_english);
            GradientDrawable EnglishLanguage_GradientDrawable = new GradientDrawable();
            EnglishLanguage_GradientDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(0.4d)), -7829368);
            EnglishLanguage_GradientDrawable.setCornerRadii(new float[]{
15.0f, 15.0f, 0.0f, 0.0f, 0.0f, 0.0f, 15.0f, 15.0f}
);
            if (this.SelectedLanguage.equals("English")) {

                EnglishLanguage.setTextColor(-1);
                EnglishLanguage_GradientDrawable.setColor(-7829368);
            }
 else {

                EnglishLanguage.setTextColor(-7829368);
                EnglishLanguage_GradientDrawable.setColor(-1);
            }

            if (Build.VERSION.SDK_INT >= 16) {

                EnglishLanguage.setBackground(EnglishLanguage_GradientDrawable);
            }
 else {

                EnglishLanguage.setBackgroundDrawable(EnglishLanguage_GradientDrawable);
            }

            Button ArabicLanguage = (Button) findViewById(R.id.settings_language_arabic);
            GradientDrawable ArabicLanguage_GradientDrawable = new GradientDrawable();
            ArabicLanguage_GradientDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(0.4d)), -7829368);
            ArabicLanguage_GradientDrawable.setCornerRadii(new float[]{
0.0f, 0.0f, 15.0f, 15.0f, 15.0f, 15.0f, 0.0f, 0.0f}
);
            if (this.SelectedLanguage.equals("Arabic")) {

                ArabicLanguage.setTextColor(-1);
                ArabicLanguage_GradientDrawable.setColor(-7829368);
            }
 else {

                ArabicLanguage.setTextColor(-7829368);
                ArabicLanguage_GradientDrawable.setColor(-1);
            }

            if (Build.VERSION.SDK_INT >= 16) {

                ArabicLanguage.setBackground(ArabicLanguage_GradientDrawable);
            }
 else {

                ArabicLanguage.setBackgroundDrawable(ArabicLanguage_GradientDrawable);
            }

            ((TextView) findViewById(R.id.settings_remainder_before)).setText(new Utilities().IntToTimeString(this.RemainderSelectedTime, this.SelectedLanguage));
            ((Button) findViewById(R.id.settings_pattern)).setText(this.PatternsArrayList.get(this.SelectedPattern)[this.SelectedLanguage.equals("Arabic") ? (char) 1 : 0]);
            ShowHideAfternoon();
            if (this.SelectedLanguage.equals("Arabic")) {

                ((TextView) findViewById(R.id.settings_settings_text)).setText("الإعدادات");
                ((TextView) findViewById(R.id.settings_language_text)).setText("إختر اللغة");
                ((TextView) findViewById(R.id.settings_language_text)).setGravity(5);
                ((TextView) findViewById(R.id.settings_pattern_text)).setText("نمط النوبة");
                ((TextView) findViewById(R.id.settings_pattern_text)).setGravity(5);
                ((TextView) findViewById(R.id.settings_widget_text)).setText("مناوبة التطبيقات المصغرة");
                ((TextView) findViewById(R.id.settings_widget_text)).setGravity(5);
                ((TextView) findViewById(R.id.settings_color_morning_text)).setText("لون المناوبة الصباحية");
                ((TextView) findViewById(R.id.settings_color_morning_text)).setGravity(5);
                ((Button) findViewById(R.id.settings_color_morning)).setText("تغير");
                ((TextView) findViewById(R.id.settings_color_rest_text)).setText("لون يوم الراحة");
                ((TextView) findViewById(R.id.settings_color_rest_text)).setGravity(5);
                ((Button) findViewById(R.id.settings_color_rest)).setText("تغير");
                ((TextView) findViewById(R.id.settings_holidays_text)).setText("إظهار العطلات الرسمية");
                ((TextView) findViewById(R.id.settings_holidays_text)).setGravity(5);
                ((TextView) findViewById(R.id.settings_remainder_text)).setText("التذكير بالمناوبة");
                ((TextView) findViewById(R.id.settings_remainder_text)).setGravity(5);
                ((TextView) findViewById(R.id.settings_remainder_before_text)).setText("التذكير قبل المناوبة");
                ((TextView) findViewById(R.id.settings_remainder_before_text)).setGravity(5);
                ((TextView) findViewById(R.id.settings_remainder_sound_text)).setText("صوت التذكير");
                ((TextView) findViewById(R.id.settings_remainder_sound_text)).setGravity(5);
                ((Button) this.RemainderDialog.findViewById(R.id.dialog_remainder_ok)).setText("موافق");
                ((Button) this.RemainderDialog.findViewById(R.id.dialog_remainder_cancel)).setText("إلغاء");
                ((Button) this.RemainderSoundDialog.findViewById(R.id.dialog_remainder_sound_ok)).setText("موافق");
                ((Button) this.RemainderSoundDialog.findViewById(R.id.dialog_remainder_sound_cancel)).setText("إلغاء");
                ((Button) this.PatternsDialog.findViewById(R.id.dialog_patterns_ok)).setText("موافق");
                ((Button) this.PatternsDialog.findViewById(R.id.dialog_patterns_cancel)).setText("إلغاء");
                ((Button) this.PatternsDialog.findViewById(R.id.dialog_patterns_contact)).setText("الاتصال لإضافة نمط مناوبتك");
                RelativeLayout.LayoutParams Morning_Button_Params = new RelativeLayout.LayoutParams(this.Utility.DpToPx(Double.valueOf(100.0d)), this.Utility.DpToPx(Double.valueOf(33.0d)));
                Morning_Button_Params.addRule(3, R.id.settings_widget_segmented);
                Morning_Button_Params.addRule(9);
                Morning_Button_Params.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), this.Utility.DpToPx(Double.valueOf(5.0d)), this.Utility.DpToPx(Double.valueOf(4.0d)), 0);
                findViewById(R.id.settings_color_morning).setLayoutParams(Morning_Button_Params);
                RelativeLayout.LayoutParams Morning_Text_Params = new RelativeLayout.LayoutParams(-1, -2);
                Morning_Text_Params.addRule(4, R.id.settings_color_morning);
                Morning_Text_Params.addRule(1, R.id.settings_color_morning);
                Morning_Text_Params.setMargins(0, 0, this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
                findViewById(R.id.settings_color_morning_text).setLayoutParams(Morning_Text_Params);
                RelativeLayout.LayoutParams Rest_Button_Params = new RelativeLayout.LayoutParams(this.Utility.DpToPx(Double.valueOf(100.0d)), this.Utility.DpToPx(Double.valueOf(33.0d)));
                Rest_Button_Params.addRule(3, R.id.settings_color_night);
                Rest_Button_Params.addRule(9);
                Rest_Button_Params.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), this.Utility.DpToPx(Double.valueOf(5.0d)), this.Utility.DpToPx(Double.valueOf(4.0d)), 0);
                findViewById(R.id.settings_color_rest).setLayoutParams(Rest_Button_Params);
                RelativeLayout.LayoutParams Rest_Text_Params = new RelativeLayout.LayoutParams(-1, -2);
                Rest_Text_Params.addRule(4, R.id.settings_color_rest);
                Rest_Text_Params.addRule(1, R.id.settings_color_rest);
                Rest_Text_Params.setMargins(0, 0, this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
                findViewById(R.id.settings_color_rest_text).setLayoutParams(Rest_Text_Params);
                RelativeLayout.LayoutParams Holidays_Switch_Params = new RelativeLayout.LayoutParams(this.Utility.DpToPx(Double.valueOf(110.0d)), this.Utility.DpToPx(Double.valueOf(33.0d)));
                Holidays_Switch_Params.addRule(3, R.id.settings_color_rest);
                Holidays_Switch_Params.addRule(9);
                Holidays_Switch_Params.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), this.Utility.DpToPx(Double.valueOf(5.0d)), this.Utility.DpToPx(Double.valueOf(4.0d)), 0);
                findViewById(R.id.settings_holidays).setLayoutParams(Holidays_Switch_Params);
                RelativeLayout.LayoutParams Holidays_Text_Params = new RelativeLayout.LayoutParams(-1, -2);
                Holidays_Text_Params.addRule(4, R.id.settings_holidays);
                Holidays_Text_Params.addRule(1, R.id.settings_holidays);
                Holidays_Text_Params.setMargins(0, 0, this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
                findViewById(R.id.settings_holidays_text).setLayoutParams(Holidays_Text_Params);
                RelativeLayout.LayoutParams Remainder_Switch_Params = new RelativeLayout.LayoutParams(this.Utility.DpToPx(Double.valueOf(110.0d)), this.Utility.DpToPx(Double.valueOf(33.0d)));
                Remainder_Switch_Params.addRule(3, R.id.settings_holidays);
                Remainder_Switch_Params.addRule(9);
                Remainder_Switch_Params.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), this.Utility.DpToPx(Double.valueOf(5.0d)), this.Utility.DpToPx(Double.valueOf(4.0d)), 0);
                findViewById(R.id.settings_remainder).setLayoutParams(Remainder_Switch_Params);
                RelativeLayout.LayoutParams Remainder_Text_Params = new RelativeLayout.LayoutParams(-1, -2);
                Remainder_Text_Params.addRule(4, R.id.settings_remainder);
                Remainder_Text_Params.addRule(1, R.id.settings_remainder);
                Remainder_Text_Params.setMargins(0, 0, this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
                findViewById(R.id.settings_remainder_text).setLayoutParams(Remainder_Text_Params);
                return;
            }

            ((TextView) findViewById(R.id.settings_settings_text)).setText("Settings");
            ((TextView) findViewById(R.id.settings_language_text)).setText("Choose Language");
            ((TextView) findViewById(R.id.settings_language_text)).setGravity(3);
            ((TextView) findViewById(R.id.settings_pattern_text)).setText("Shift Pattern");
            ((TextView) findViewById(R.id.settings_pattern_text)).setGravity(3);
            ((TextView) findViewById(R.id.settings_widget_text)).setText("Widgets Shift");
            ((TextView) findViewById(R.id.settings_widget_text)).setGravity(3);
            ((TextView) findViewById(R.id.settings_color_morning_text)).setText("Morning Shift Color");
            ((TextView) findViewById(R.id.settings_color_morning_text)).setGravity(3);
            ((Button) findViewById(R.id.settings_color_morning)).setText("Change");
            ((TextView) findViewById(R.id.settings_color_rest_text)).setText("Rest Day Color");
            ((TextView) findViewById(R.id.settings_color_rest_text)).setGravity(3);
            ((Button) findViewById(R.id.settings_color_rest)).setText("Change");
            ((TextView) findViewById(R.id.settings_holidays_text)).setText("Show Holidays");
            ((TextView) findViewById(R.id.settings_holidays_text)).setGravity(3);
            ((TextView) findViewById(R.id.settings_remainder_text)).setText("Shift Remainder");
            ((TextView) findViewById(R.id.settings_remainder_text)).setGravity(3);
            ((TextView) findViewById(R.id.settings_remainder_before_text)).setText("Remainde me before");
            ((TextView) findViewById(R.id.settings_remainder_before_text)).setGravity(3);
            ((TextView) findViewById(R.id.settings_remainder_sound_text)).setText("Remainder Sound");
            ((TextView) findViewById(R.id.settings_remainder_sound_text)).setGravity(3);
            ((Button) this.RemainderDialog.findViewById(R.id.dialog_remainder_ok)).setText("Done");
            ((Button) this.RemainderDialog.findViewById(R.id.dialog_remainder_cancel)).setText("Cancel");
            ((Button) this.RemainderSoundDialog.findViewById(R.id.dialog_remainder_sound_ok)).setText("Done");
            ((Button) this.RemainderSoundDialog.findViewById(R.id.dialog_remainder_sound_cancel)).setText("Cancel");
            ((Button) this.PatternsDialog.findViewById(R.id.dialog_patterns_ok)).setText("Done");
            ((Button) this.PatternsDialog.findViewById(R.id.dialog_patterns_cancel)).setText("Cancel");
            ((Button) this.PatternsDialog.findViewById(R.id.dialog_patterns_contact)).setText("Contact To Add Your Shift Pattern");
            RelativeLayout.LayoutParams Morning_Button_Params2 = new RelativeLayout.LayoutParams(this.Utility.DpToPx(Double.valueOf(100.0d)), this.Utility.DpToPx(Double.valueOf(33.0d)));
            Morning_Button_Params2.addRule(3, R.id.settings_widget_segmented);
            Morning_Button_Params2.addRule(11);
            Morning_Button_Params2.setMargins(this.Utility.DpToPx(Double.valueOf(4.0d)), this.Utility.DpToPx(Double.valueOf(5.0d)), this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
            findViewById(R.id.settings_color_morning).setLayoutParams(Morning_Button_Params2);
            RelativeLayout.LayoutParams Morning_Text_Params2 = new RelativeLayout.LayoutParams(-1, -2);
            Morning_Text_Params2.addRule(4, R.id.settings_color_morning);
            Morning_Text_Params2.addRule(0, R.id.settings_color_morning);
            Morning_Text_Params2.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), 0, 0, 0);
            findViewById(R.id.settings_color_morning_text).setLayoutParams(Morning_Text_Params2);
            RelativeLayout.LayoutParams Rest_Button_Params2 = new RelativeLayout.LayoutParams(this.Utility.DpToPx(Double.valueOf(100.0d)), this.Utility.DpToPx(Double.valueOf(33.0d)));
            Rest_Button_Params2.addRule(3, R.id.settings_color_night);
            Rest_Button_Params2.addRule(11);
            Rest_Button_Params2.setMargins(this.Utility.DpToPx(Double.valueOf(4.0d)), this.Utility.DpToPx(Double.valueOf(5.0d)), this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
            findViewById(R.id.settings_color_rest).setLayoutParams(Rest_Button_Params2);
            RelativeLayout.LayoutParams Rest_Text_Params2 = new RelativeLayout.LayoutParams(-1, -2);
            Rest_Text_Params2.addRule(4, R.id.settings_color_rest);
            Rest_Text_Params2.addRule(0, R.id.settings_color_rest);
            Rest_Text_Params2.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), 0, 0, 0);
            findViewById(R.id.settings_color_rest_text).setLayoutParams(Rest_Text_Params2);
            RelativeLayout.LayoutParams Holidays_Switch_Params2 = new RelativeLayout.LayoutParams(this.Utility.DpToPx(Double.valueOf(110.0d)), this.Utility.DpToPx(Double.valueOf(33.0d)));
            Holidays_Switch_Params2.addRule(3, R.id.settings_color_rest);
            Holidays_Switch_Params2.addRule(11);
            Holidays_Switch_Params2.setMargins(this.Utility.DpToPx(Double.valueOf(4.0d)), this.Utility.DpToPx(Double.valueOf(5.0d)), this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
            findViewById(R.id.settings_holidays).setLayoutParams(Holidays_Switch_Params2);
            RelativeLayout.LayoutParams Holidays_Text_Params2 = new RelativeLayout.LayoutParams(-1, -2);
            Holidays_Text_Params2.addRule(4, R.id.settings_holidays);
            Holidays_Text_Params2.addRule(0, R.id.settings_holidays);
            Holidays_Text_Params2.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), 0, 0, 0);
            findViewById(R.id.settings_holidays_text).setLayoutParams(Holidays_Text_Params2);
            RelativeLayout.LayoutParams Remainder_Switch_Params2 = new RelativeLayout.LayoutParams(this.Utility.DpToPx(Double.valueOf(110.0d)), this.Utility.DpToPx(Double.valueOf(33.0d)));
            Remainder_Switch_Params2.addRule(3, R.id.settings_holidays);
            Remainder_Switch_Params2.addRule(11);
            Remainder_Switch_Params2.setMargins(this.Utility.DpToPx(Double.valueOf(4.0d)), this.Utility.DpToPx(Double.valueOf(5.0d)), this.Utility.DpToPx(Double.valueOf(10.0d)), 0);
            findViewById(R.id.settings_remainder).setLayoutParams(Remainder_Switch_Params2);
            RelativeLayout.LayoutParams Remainder_Text_Params2 = new RelativeLayout.LayoutParams(-1, -2);
            Remainder_Text_Params2.addRule(4, R.id.settings_remainder);
            Remainder_Text_Params2.addRule(0, R.id.settings_remainder);
            Remainder_Text_Params2.setMargins(this.Utility.DpToPx(Double.valueOf(10.0d)), 0, 0, 0);
            findViewById(R.id.settings_remainder_text).setLayoutParams(Remainder_Text_Params2);
        }

    }


    void WidgetsShiftChanged(function Shift) {

        if (!Shift.equals(this.WidgetsSelectedShift)) {

            this.WidgetsSelectedShift = Shift;
            Button A_Shift = (Button) findViewById(R.id.settings_widget_a_shift);
            GradientDrawable A_GradientDrawable = new GradientDrawable();
            A_GradientDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(0.4d)), -7829368);
            A_GradientDrawable.setCornerRadii(new float[]{
15.0f, 15.0f, 0.0f, 0.0f, 0.0f, 0.0f, 15.0f, 15.0f}
);
            if (this.WidgetsSelectedShift.equals("A")) {

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

            Button B_Shift = (Button) findViewById(R.id.settings_widget_b_shift);
            GradientDrawable B_GradientDrawable = new GradientDrawable();
            B_GradientDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(0.4d)), -7829368);
            if (this.WidgetsSelectedShift.equals("B")) {

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

            Button C_Shift = (Button) findViewById(R.id.settings_widget_c_shift);
            GradientDrawable C_GradientDrawable = new GradientDrawable();
            C_GradientDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(0.4d)), -7829368);
            if (this.WidgetsSelectedShift.equals("C")) {

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

            Button D_Shift = (Button) findViewById(R.id.settings_widget_d_shift);
            GradientDrawable D_GradientDrawable = new GradientDrawable();
            D_GradientDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(0.4d)), -7829368);
            D_GradientDrawable.setCornerRadii(new float[]{
0.0f, 0.0f, 15.0f, 15.0f, 15.0f, 15.0f, 0.0f, 0.0f}
);
            if (this.WidgetsSelectedShift.equals("D")) {

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


    void RemainderShiftChanged(function Shift) {

        if (!Shift.equals(this.RemainderSelectedShift)) {

            this.RemainderSelectedShift = Shift;
            Button A_Shift = (Button) findViewById(R.id.settings_remainder_a_shift);
            GradientDrawable A_GradientDrawable = new GradientDrawable();
            A_GradientDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(0.4d)), -7829368);
            A_GradientDrawable.setCornerRadii(new float[]{
15.0f, 15.0f, 0.0f, 0.0f, 0.0f, 0.0f, 15.0f, 15.0f}
);
            if (this.RemainderSelectedShift.equals("A")) {

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

            Button B_Shift = (Button) findViewById(R.id.settings_remainder_b_shift);
            GradientDrawable B_GradientDrawable = new GradientDrawable();
            B_GradientDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(0.4d)), -7829368);
            if (this.RemainderSelectedShift.equals("B")) {

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

            Button C_Shift = (Button) findViewById(R.id.settings_remainder_c_shift);
            GradientDrawable C_GradientDrawable = new GradientDrawable();
            C_GradientDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(0.4d)), -7829368);
            if (this.RemainderSelectedShift.equals("C")) {

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

            Button D_Shift = (Button) findViewById(R.id.settings_remainder_d_shift);
            GradientDrawable D_GradientDrawable = new GradientDrawable();
            D_GradientDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(0.4d)), -7829368);
            D_GradientDrawable.setCornerRadii(new float[]{
0.0f, 0.0f, 15.0f, 15.0f, 15.0f, 15.0f, 0.0f, 0.0f}
);
            if (this.RemainderSelectedShift.equals("D")) {

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


    void ButtonChangeColor(Button TargetButton, function BackColor, function TextColor, Boolean Rund) {

        GradientDrawable TargetButton_GradientDrawable = new GradientDrawable();
        TargetButton_GradientDrawable.setStroke(this.Utility.DpToPx(Double.valueOf(0.6d)), ViewCompat.MEASURED_STATE_MASK);
        if (Rund.booleanValue()) {

            TargetButton_GradientDrawable.setCornerRadii(new float[]{
15.0f, 15.0f, 15.0f, 15.0f, 15.0f, 15.0f, 15.0f, 15.0f}
);
        }

        TargetButton_GradientDrawable.setColor(Color.parseColor(BackColor));
        if (Build.VERSION.SDK_INT >= 16) {

            TargetButton.setBackground(TargetButton_GradientDrawable);
        }
 else {

            TargetButton.setBackgroundDrawable(TargetButton_GradientDrawable);
        }

        TargetButton.setTextColor(Color.parseColor(TextColor));
    }


    /* loaded from: classes.dex */
    class RemainderTimeAdapter extends BaseAdapter {

        Context MyContext;
        private LayoutInflater inflater;

        RemainderTimeAdapter(Context context) {

            this.inflater = null;
            this.MyContext = context;
            this.inflater = (LayoutInflater) this.MyContext.getSystemService("layout_inflater");
        }


        @Override // android.widget.Adapter
        int getCount() {

            return new Utilities().IntToTimeMax();
        }


        @Override // android.widget.Adapter
        Object getItem(int position) {

            return Integer.valueOf(position);
        }


        @Override // android.widget.Adapter
        long getItemId(int position) {

            return (long) position;
        }


        @Override // android.widget.Adapter
        @SuppressLint({
"InflateParams"}
)
        View getView(int position, View convertView, ViewGroup parent) {

            if (convertView == null) {

                convertView = this.inflater.inflate(R.layout.row, (ViewGroup) null);
            }

            ((TextView) convertView.findViewById(R.id.text)).setText(new Utilities().IntToTimeString(position, SettingsActivity.this.SelectedLanguage));
            ((TextView) convertView.findViewById(R.id.text)).setTextSize(17.0f);
            if (SettingsActivity.this.RemainderSelectingTime == position) {

                SettingsActivity.this.HighlightRow(convertView);
                SettingsActivity.this.RemainderSelectingTimeView = convertView;
            }
 else {

                SettingsActivity.this.UnHighlightRow(convertView);
            }

            return convertView;
        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    void HighlightRow(View RowView) {

        RowView.setBackgroundColor(-12303292);
        TextView RowText = (TextView) RowView.findViewById(R.id.text);
        if (RowText != null) {

            RowText.setTextColor(-1);
        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    void UnHighlightRow(View RowView) {

        RowView.setBackgroundColor(0);
        TextView RowText = (TextView) RowView.findViewById(R.id.text);
        if (RowText != null) {

            RowText.setTextColor(ViewCompat.MEASURED_STATE_MASK);
        }

    }


    /* loaded from: classes.dex */
    class PatternsAdapter extends BaseAdapter {

        private LayoutInflater inflater;

        PatternsAdapter(Context context) {

            this.inflater = null;
            this.inflater = (LayoutInflater) context.getSystemService("layout_inflater");
        }


        @Override // android.widget.Adapter
        int getCount() {

            return SettingsActivity.this.PatternsArrayList.size();
        }


        @Override // android.widget.Adapter
        Object getItem(int position) {

            return Integer.valueOf(position);
        }


        @Override // android.widget.Adapter
        long getItemId(int position) {

            return (long) position;
        }


        @Override // android.widget.Adapter
        @SuppressLint({
"InflateParams"}
)
        View getView(int position, View convertView, ViewGroup parent) {

            char c;
            if (convertView == null) {

                convertView = this.inflater.inflate(R.layout.row, (ViewGroup) null);
            }

            TextView textView = (TextView) convertView.findViewById(R.id.text);
            String[] strArr = SettingsActivity.this.PatternsArrayList.get(position);
            if (SettingsActivity.this.SelectedLanguage.equals("Arabic")) {

                c = 1;
            }
 else {

                c = 0;
            }

            textView.setText(strArr[c]);
            ((TextView) convertView.findViewById(R.id.text)).setTextSize(17.0f);
            if (SettingsActivity.this.SelectingPattern == position) {

                convertView.setBackgroundColor(-7829368);
            }
 else {

                convertView.setBackgroundColor(0);
            }

            return convertView;
        }

    }


    /* loaded from: classes.dex */
    class RemainderSoundAdapter extends BaseAdapter {

        private LayoutInflater inflater;

        RemainderSoundAdapter(Context context) {

            this.inflater = null;
            this.inflater = (LayoutInflater) context.getSystemService("layout_inflater");
        }


        @Override // android.widget.Adapter
        int getCount() {

            return SettingsActivity.this.RemainderSoundList.size();
        }


        @Override // android.widget.Adapter
        Object getItem(int position) {

            return Integer.valueOf(position);
        }


        @Override // android.widget.Adapter
        long getItemId(int position) {

            return (long) position;
        }


        @Override // android.widget.Adapter
        @SuppressLint({
"InflateParams"}
)
        View getView(int position, View convertView, ViewGroup parent) {

            if (convertView == null) {

                convertView = this.inflater.inflate(R.layout.row, (ViewGroup) null);
            }

            ((TextView) convertView.findViewById(R.id.text)).setText(SettingsActivity.this.RemainderSoundList.get(position)[0]);
            ((TextView) convertView.findViewById(R.id.text)).setTextSize(17.0f);
            if (SettingsActivity.this.SelectingRemainderSound == position) {

                convertView.setBackgroundColor(-7829368);
            }
 else {

                convertView.setBackgroundColor(0);
            }

            return convertView;
        }

    }

}

