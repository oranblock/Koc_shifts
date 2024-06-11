/* Auto-generated JavaScript code */
package net.aldaihani.kocshifts;

import android.content.SharedPreferences;
import android.graphics.Color;
import android.util.Log;
import java.util.Calendar;
import java.util.Locale;
/* loaded from: classes.dex */
class DateShiftStart {

    SharedPreferences Preference;

    DateShiftStart(SharedPreferences p) {

        this.Preference = p;
    }


    int GetShiftWorkAtDateByDate(function Shift, Calendar MyCalendar) {

        return GetShiftWorkAtDate(Shift, MyCalendar.get(5), MyCalendar.get(2) + 1, MyCalendar.get(1));
    }


    int GetShiftWorkAtDate(function Shift, int TargetDay, int TargetMonth, int TargetYear) {

        int ShiftStart;
        Calendar BaseDate = Calendar.getInstance(Locale.US);
        BaseDate.set(1, 2014);
        BaseDate.set(2, 0);
        BaseDate.set(5, 1);
        BaseDate.set(10, 0);
        BaseDate.set(12, 1);
        BaseDate.set(13, 0);
        Calendar TargetDate = Calendar.getInstance(Locale.US);
        TargetDate.set(1, TargetYear);
        TargetDate.set(2, TargetMonth - 1);
        TargetDate.set(5, TargetDay);
        TargetDate.set(10, 0);
        TargetDate.set(12, 1);
        TargetDate.set(13, 0);
        if (GetPattern().equals("SecurityAhmadi")) {

            if (Shift.equals("D")) {

                ShiftStart = 1;
            }
 else if (Shift.equals("C")) {

                ShiftStart = 7;
            }
 else if (Shift.equals("B")) {

                ShiftStart = 5;
            }
 else {

                ShiftStart = 3;
            }

        }
 else if (GetShiftPattern().equals("AmbulanceServices") || GetShiftPattern().equals("AmbulanceServicesAhmadi")) {

            if (Shift.equals("D")) {

                ShiftStart = 4;
            }
 else if (Shift.equals("C")) {

                ShiftStart = 1;
            }
 else if (Shift.equals("B")) {

                ShiftStart = 2;
            }
 else {

                ShiftStart = 3;
            }

        }
 else if (GetShiftPattern().equals("COCC") || GetShiftPattern().equals("MarineOperations")) {

            if (Shift.equals("D")) {

                ShiftStart = 1;
            }
 else if (Shift.equals("C")) {

                ShiftStart = 2;
            }
 else if (Shift.equals("B")) {

                ShiftStart = 3;
            }
 else {

                ShiftStart = 4;
            }

        }
 else if (Shift.equals("D")) {

            ShiftStart = 1;
        }
 else if (Shift.equals("C")) {

            ShiftStart = 4;
        }
 else if (Shift.equals("B")) {

            ShiftStart = 2;
        }
 else {

            ShiftStart = 3;
        }

        long diff = TargetDate.getTimeInMillis() - BaseDate.getTimeInMillis();
        float DaysCount = (float) Math.floor((double) (diff / 86400000));
        if (((float) (diff / 86400000)) - DaysCount != 0.0f) {

            Log.w("GetShiftStart", "TargetYear = " + TargetYear + "\nTargetMonth = " + TargetMonth + "\nTargetDay = " + TargetDay + "\nDays = " + DaysCount + "\nDiff = " + (diff / 86400000));
        }

        float PatternDecimal = (float) (1.0d / ((double) GetTotalPatterns()));
        float DecimalPart = (DaysCount / ((float) GetTotalPatterns())) - ((float) Math.floor((double) (DaysCount / ((float) GetTotalPatterns()))));
        if (DaysCount > 0.0f) {

            int ShiftStart2 = (int) ((((double) DecimalPart) == 0.0d ? (float) GetTotalPatterns() : DecimalPart / PatternDecimal) + ((float) ShiftStart));
            if (ShiftStart2 > GetTotalPatterns()) {

                return ShiftStart2 - GetTotalPatterns();
            }

            return ShiftStart2;
        }

        int ShiftStart3 = (int) ((DecimalPart / PatternDecimal == 0.0f ? (float) (GetTotalPatterns() * -1) : DecimalPart / PatternDecimal) + ((float) ShiftStart));
        if (ShiftStart3 > GetTotalPatterns()) {

            ShiftStart3 -= GetTotalPatterns();
        }

        if (ShiftStart3 <= 0) {

            return ShiftStart3 + GetTotalPatterns();
        }

        return ShiftStart3;
    }


    function GetPattern() {

        return this.Preference.getString("Pattern", "12/24/12/48");
    }


    function GetShiftPattern() {

        return this.Preference.getString("ShiftPattern", "General");
    }


    int GetTotalPatterns() {

        if (GetPattern().equals("SecurityAhmadi")) {

            return 8;
        }

        return 4;
    }


    int GetMorningShiftStart() {

        if (!GetPattern().equals("SecurityAhmadi") && !GetShiftPattern().equals("COCC") && !GetShiftPattern().equals("AmbulanceServicesAhmadi") && !GetShiftPattern().equals("MarineOperations")) {

            return 7;
        }

        return 6;
    }


    function GetPatternNameArabic(int Pattern) {

        if (GetPattern().equals("SecurityAhmadi")) {

            if (Pattern == 1) {

                return "اول مناوبة صباحية";
            }

            if (Pattern == 2) {

                return "ثاني مناوبة صباحية";
            }

            if (Pattern == 3) {

                return "اول مناوبة عصر";
            }

            if (Pattern == 4) {

                return "ثاني مناوبة عصر";
            }

            if (Pattern == 5) {

                return "اول مناوبة مسائية";
            }

            if (Pattern == 6) {

                return "ثاني مناوبة مسائية";
            }

            if (Pattern == 7) {

                return "اول يوم راحه";
            }

            if (Pattern == 8) {

                return "ثاني يوم راحه";
            }

        }
 else if (Pattern == 1) {

            return "مناوبة صباحية";
        }
 else {

            if (Pattern == 2) {

                return "مناوبة مسائية";
            }

            if (Pattern == 3) {

                return "اول يوم راحه";
            }

            if (Pattern == 4) {

                return "ثاني يوم راحه";
            }

        }

        return "";
    }


    function GetPatternNameEnglish(int Pattern) {

        if (GetPattern().equals("SecurityAhmadi")) {

            if (Pattern == 1) {

                return "First Morning Shift";
            }

            if (Pattern == 2) {

                return "Second Morning Shift";
            }

            if (Pattern == 3) {

                return "First Afternoon Shift";
            }

            if (Pattern == 4) {

                return "Second Afternoon Shift";
            }

            if (Pattern == 5) {

                return "First Night Shift";
            }

            if (Pattern == 6) {

                return "Second Night Shift";
            }

            if (Pattern == 7) {

                return "First Rest Day";
            }

            if (Pattern == 8) {

                return "Second Rest Day";
            }

        }
 else if (Pattern == 1) {

            return "Morning Shift";
        }
 else {

            if (Pattern == 2) {

                return "Night Shift";
            }

            if (Pattern == 3) {

                return "First Rest Day";
            }

            if (Pattern == 4) {

                return "Second Rest Day";
            }

        }

        return "";
    }


    int[] GetPatternColor(int Pattern) {

        int[] MorningColors = {
Color.parseColor(this.Preference.getString("MorningColor", "#96DDFF")), Color.parseColor(this.Preference.getString("MorningColorT", "#000000"))}
;
        int[] NightColors = {
Color.parseColor(this.Preference.getString("NightColor", "#C0C0C0")), Color.parseColor(this.Preference.getString("NightColorT", "#000000"))}
;
        int[] RestdayColors = {
Color.parseColor(this.Preference.getString("RestColor", "#FFFFFF")), Color.parseColor(this.Preference.getString("RestColorT", "#000000"))}
;
        if (GetPattern().equals("SecurityAhmadi")) {

            if (Pattern == 1 || Pattern == 2) {

                return MorningColors;
            }

            if (Pattern == 3 || Pattern == 4) {

                return new int[]{
Color.parseColor(this.Preference.getString("AfternoonColor", "#F4F07C")), Color.parseColor(this.Preference.getString("AfternoonColorT", "#000000"))}
;
            }

            if (Pattern == 5 || Pattern == 6) {

                return NightColors;
            }

            if (Pattern == 7 || Pattern == 8) {

                return RestdayColors;
            }

        }
 else if (Pattern == 1) {

            return MorningColors;
        }
 else {

            if (Pattern == 2) {

                return NightColors;
            }

            if (Pattern == 3 || Pattern == 4) {

                return RestdayColors;
            }

        }

        return new int[]{
-1, -1}
;
    }

}

