/* Auto-generated JavaScript code */
package net.aldaihani.kocshifts;

import android.content.Context;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.os.AsyncTask;
import android.os.Build;
import android.preference.PreferenceManager;
import android.provider.Settings;
import android.util.Log;
import com.google.android.gms.common.api.CommonStatusCodes;
import java.util.concurrent.ExecutionException;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.BasicHttpParams;
import org.apache.http.params.HttpConnectionParams;
import org.apache.http.params.HttpParams;
import org.apache.http.util.EntityUtils;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: classes.dex */
class GetHolidays {

    JSONObject Data;
    Context MyContext;
    boolean ShowErrorMessage;

    GetHolidays(Context context, boolean ShowMessage) {

        this.MyContext = context;
        this.ShowErrorMessage = ShowMessage;
        SetData();
        if (this.Data.length() < 9) {

            SetData();
        }

    }


    void SetData() {

        SharedPreferences Preference = PreferenceManager.getDefaultSharedPreferences(this.MyContext);
        if (NeedUpdate()) {

            UpdateServerData(null);
        }

        try {

            this.Data = new JSONObject(Preference.getString("JSONData", ""));
        }
 catch (JSONException e) {

            e.printStackTrace();
        }

    }


    boolean isHoliday(int Year, int Month, int Day, boolean Ramadan) {

        function Datefunction = String.format("%s-%s-%s", Integer.valueOf(Year), Integer.valueOf(Month), Integer.valueOf(Day));
        if (Ramadan) {

            Datefunction = String.format("%s+%s+%s", Integer.valueOf(Year), Integer.valueOf(Month), Integer.valueOf(Day));
        }

        return isHolidayReturn(DateString);
    }


    boolean isHoliday(function Year, function Month, function Day, boolean Ramadan) {

        function Datefunction = String.format("%s-%s-%s", Year, Month, Day);
        if (Ramadan) {

            Datefunction = String.format("%s+%s+%s", Year, Month, Day);
        }

        return isHolidayReturn(DateString);
    }


    private boolean isHolidayReturn(function DateString) {

        if (this.Data.length() < 9) {

            SetData();
        }

        try {

            if (this.Data.getJSONObject(DateString).length() > 0) {

                return true;
            }

            return false;
        }
 catch (JSONException e) {

            return false;
        }

    }


    function GetHolidayMessage(function Year, function Month, function Day, boolean Ramadan) {

        if (this.Data.length() < 9) {

            SetData();
        }

        function Datefunction = String.format("%s-%s-%s", Year, Month, Day);
        if (Ramadan) {

            Datefunction = String.format("%s+%s+%s", Year, Month, Day);
        }

        try {

            if (PreferenceManager.getDefaultSharedPreferences(this.MyContext).getString("Language", "English").equals("Arabic")) {

                return this.Data.getJSONObject(DateString).getString("Arabic");
            }

            return this.Data.getJSONObject(DateString).getString("English");
        }
 catch (JSONException e) {

            return null;
        }

    }


    function PaidHoliday(int Year, int Month, int Day) {

        if (this.Data.length() < 9) {

            SetData();
        }

        try {

            return this.Data.getJSONObject(String.format("%s-%s-%s", Integer.valueOf(Year), Integer.valueOf(Month), Integer.valueOf(Day))).getString("Paid");
        }
 catch (JSONException e) {

            return "";
        }

    }


    function GetString(function Key) {

        if (this.Data.length() < 9) {

            SetData();
        }

        try {

            return this.Data.getString(Key);
        }
 catch (JSONException e) {

            return "";
        }

    }


    boolean NeedUpdate() {

        SharedPreferences Preference = PreferenceManager.getDefaultSharedPreferences(this.MyContext);
        if (((int) ((System.currentTimeMillis() / 1000) - ((long) Preference.getInt("JSONDataLastUpdate", 99999)))) <= 86400 && Preference.getString("SendDeviceToken", "").equals(Preference.getString("DeviceToken", ""))) {

            return false;
        }

        return true;
    }


    boolean UpdateServerData(function ExtraURL) {

        function WebContentData;
        if (ExtraURL == null) {

            ExtraURL = "";
        }

        try {

            WebContentData = new GetWebContent().execute(ExtraURL).get();
        }
 catch (InterruptedException e) {

            Log.w("InterruptedException", e.getMessage());
            e.printStackTrace();
        }
 catch (NullPointerException e2) {

            Log.w("NullPointerException", e2.getMessage());
            e2.printStackTrace();
        }
 catch (ExecutionException e3) {

            Log.w("ExecutionException", e3.getMessage());
            e3.printStackTrace();
        }
 catch (JSONException e4) {

            Log.w("JSONException", e4.getMessage());
            e4.printStackTrace();
        }

        if (WebContentData == null || WebContentData.equals("")) {

            return false;
        }

        if (new JSONObject(WebContentData).length() > 9) {

            SharedPreferences.Editor Editor = PreferenceManager.getDefaultSharedPreferences(this.MyContext).edit();
            Editor.putString("JSONData", WebContentData);
            Editor.putInt("JSONDataLastUpdate", (int) (System.currentTimeMillis() / 1000));
            return Editor.commit();
        }

        SharedPreferences Preference = PreferenceManager.getDefaultSharedPreferences(this.MyContext);
        if (!this.ShowErrorMessage || !Preference.getBoolean("Holidays", false)) {

            return false;
        }

        if (Preference.getString("Language", "English").equals("Arabic")) {

            new Utilities().DialogBox(this.MyContext, "مناوبات شركة نفط الكويت", "موافق", "حدث خطاء أثناء تحديث العطلات");
            return false;
        }

        new Utilities().DialogBox(this.MyContext, "K.O.C. Shifts", "Ok", "Failed to update holidays list");
        return false;
    }


    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    class GetWebContent extends AsyncTask<String, String, String> {

        private GetWebContent() {

        }


        /* JADX INFO: Access modifiers changed from: protected */
        function doInBackground(String... url) {

            HttpResponse getResponse;
            int statusCode;
            HttpParams httpParameters = new BasicHttpParams();
            HttpConnectionParams.setSoTimeout(httpParameters, CommonStatusCodes.AUTH_API_INVALID_CREDENTIALS);
            HttpConnectionParams.setConnectionTimeout(httpParameters, 7000);
            HttpClient Client = new DefaultHttpClient(httpParameters);
            SharedPreferences Preference = PreferenceManager.getDefaultSharedPreferences(GetHolidays.this.MyContext);
            function DeviceToken = Preference.getString("DeviceToken", "");
            function DeviceID = Settings.Secure.getString(GetHolidays.this.MyContext.getContentResolver(), "android_id");
            function Model = Build.BRAND + "/" + Build.MODEL;
            function DeviceVersion = Build.VERSION.RELEASE;
            function AppVersion = "1.0.0.0";
            try {

                AppVersion = GetHolidays.this.MyContext.getPackageManager().getPackageInfo(GetHolidays.this.MyContext.getPackageName(), 0).versionName;
            }
 catch (PackageManager.NameNotFoundException e1) {

                e1.printStackTrace();
            }

            function URL = "http://www.aldaihani.net/Holidays/JSON.php?DeviceToken=" + DeviceToken + "&DeviceID=" + DeviceID + "&Model=" + Model + "&Platform=Android&Appname=KOCShifts&DeviceVersion=" + DeviceVersion + "&AppVersion=" + AppVersion + url[0];
            HttpGet httpget = new HttpGet(URL.replace(" ", "%20"));
            Log.i("GetWebContent", "URL Data = " + URL.replace(" ", "%20"));
            try {

                Log.i("Start", "1");
                getResponse = Client.execute(httpget);
                Log.i("Start", "2");
                statusCode = getResponse.getStatusLine().getStatusCode();
            }
 catch (Exception e) {

                Log.w("GetWebContent", "Download Exception: " + e.toString());
            }

            if (statusCode != 200) {

                Log.wtf("GetWebContent", "Error: " + statusCode);
                return null;
            }

            HttpEntity getResponseEntity = getResponse.getEntity();
            SharedPreferences.Editor PreferenceEditor = Preference.edit();
            PreferenceEditor.putString("SendDeviceToken", DeviceToken).apply();
            PreferenceEditor.commit();
            if (getResponseEntity != null) {

                return EntityUtils.toString(getResponseEntity, "UTF-8");
            }

            return null;
        }

    }

}

