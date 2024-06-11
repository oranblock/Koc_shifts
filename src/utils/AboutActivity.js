/* Auto-generated JavaScript code */
package net.aldaihani.kocshifts;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.ResolveInfo;
import android.graphics.drawable.GradientDrawable;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.support.v4.app.ShareCompat;
import android.support.v4.view.ViewCompat;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import java.util.Iterator;
/* loaded from: classes.dex */
class AboutActivity extends Activity {

    @Override // android.app.Activity
    @SuppressLint({
"NewApi"}
)
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_about);
        TextView Info_Gifted = (TextView) findViewById(R.id.info_gifted);
        TextView Info_Name = (TextView) findViewById(R.id.info_name);
        TextView Info_Message = (TextView) findViewById(R.id.info_message);
        Button Info_Tweet = (Button) findViewById(R.id.info_tweet);
        Button Info_Follow = (Button) findViewById(R.id.info_follow);
        Button Info_Mail = (Button) findViewById(R.id.info_mail);
        SharedPreferences Preference = PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
        findViewById(R.id.info_home).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.AboutActivity.1
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                AboutActivity.this.finish();
            }

        }
);
        Info_Tweet.setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.AboutActivity.2
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                Intent tweetIntent = new Intent("android.intent.action.SEND");
                tweetIntent.putExtra("android.intent.extra.TEXT", "@s_aldaihani ");
                tweetIntent.setType("text/plain");
                boolean resolved = false;
                Iterator<ResolveInfo> it = AboutActivity.this.getPackageManager().queryIntentActivities(tweetIntent, 65536).iterator();
                while (true) {

                    if (!it.hasNext()) {

                        break;
                    }

                    ResolveInfo resolveInfo = it.next();
                    if (resolveInfo.activityInfo.packageName.startsWith("com.twitter.android")) {

                        tweetIntent.setClassName(resolveInfo.activityInfo.packageName, resolveInfo.activityInfo.name);
                        resolved = true;
                        break;
                    }

                }

                if (resolved) {

                    AboutActivity.this.startActivity(tweetIntent);
                }
 else if (PreferenceManager.getDefaultSharedPreferences(AboutActivity.this.getApplicationContext()).getString("Language", "English").equals("Arabic")) {

                    new Utilities().DialogBox(AboutActivity.this, "مناوبات شركة نفط الكويت", "موافق", "لم يتم العثور علي تطبيق تويتر");
                }
 else {

                    new Utilities().DialogBox(AboutActivity.this, "K.O.C. Shifts", "Ok", "Twitter app not found");
                }

            }

        }
);
        Info_Follow.setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.AboutActivity.3
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                try {

                    AboutActivity.this.startActivity(new Intent("android.intent.action.VIEW", Uri.parse("twitter://user?screen_name=s_aldaihani")));
                }
 catch (Exception e) {

                    AboutActivity.this.startActivity(new Intent("android.intent.action.VIEW", Uri.parse("https://twitter.com/#!/s_aldaihani")));
                }

            }

        }
);
        Info_Mail.setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.AboutActivity.4
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                ShareCompat.IntentBuilder builder = ShareCompat.IntentBuilder.from(AboutActivity.this);
                builder.setType("message/rfc822");
                builder.addEmailTo("Saied@aldaihani.net");
                builder.setSubject("K.O.C. Shifts");
                builder.setText(String.format("\n-------------------------------------------\nDevice Brand/Model %s\nDevice Version %s\nApplication Version v%s\n-------------------------------------------\n", Build.BRAND.toString() + "/" + Build.MODEL.toString(), Build.VERSION.RELEASE.toString(), PreferenceManager.getDefaultSharedPreferences(AboutActivity.this.getApplicationContext()).getString("AppVersion", "1.0.0.0")));
                builder.setChooserTitle("Send Mail...");
                builder.startChooser();
            }

        }
);
        ((TextView) findViewById(R.id.info_appname)).setText("K.O.C. Shifts v" + Preference.getString("AppVersion", "1.0.0.0"));
        Info_Tweet.setText("Send Tweet: @s_aldaihani");
        Info_Mail.setText("E-Mail: Saied@aldaihani.net");
        if (Preference.getString("Language", "English").equals("Arabic") || Preference.getBoolean("InfoStartArabic", false)) {

            Preference.edit().putBoolean("InfoStartArabic", false).commit();
            Info_Gifted.setText("إهداء من");
            Info_Name.setText("سعيد عويض الديحاني");
            Info_Tweet.setText("@s_aldaihani :إرسال تغريدة");
            Info_Follow.setText("تابعني علي تويتر");
            Info_Mail.setText("Saied@Aldaihani.net :إرسال بريد");
            Info_Message.setText("إهداء الي جميع الزملاء\n\nالعاملين في قطاع النفطي الكويتي");
        }
 else {

            Info_Gifted.setText("Dedicated From");
            Info_Name.setText("Saied O Aldaihani");
            Info_Tweet.setText("Send tweet: @s_aldaihani");
            Info_Follow.setText("Follow Me in twitter");
            Info_Mail.setText("E-mail: Saied@Aldaihani.net");
            Info_Message.setText("Dedicated to all colleagues\n\nWorkers in the Kuwaiti oil sector");
        }

        Utilities Utility = new Utilities();
        GradientDrawable GDrawable = new GradientDrawable();
        GDrawable.setCornerRadius(40.0f);
        GDrawable.setStroke(Utility.DpToPx(Double.valueOf(1.0d)), ViewCompat.MEASURED_STATE_MASK);
        if (Build.VERSION.SDK_INT >= 16) {

            Info_Tweet.setBackground(GDrawable);
            Info_Follow.setBackground(GDrawable);
            Info_Mail.setBackground(GDrawable);
            return;
        }

        Info_Tweet.setBackgroundDrawable(GDrawable);
        Info_Follow.setBackgroundDrawable(GDrawable);
        Info_Mail.setBackgroundDrawable(GDrawable);
    }

}

