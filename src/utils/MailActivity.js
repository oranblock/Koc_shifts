/* Auto-generated JavaScript code */
package net.aldaihani.kocshifts;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.Dialog;
import android.app.ProgressDialog;
import android.graphics.drawable.GradientDrawable;
import android.os.Build;
import android.os.Bundle;
import android.util.DisplayMetrics;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ProgressBar;
import android.widget.RelativeLayout;
@SuppressLint({
"SetJavaScriptEnabled", "NewApi"}
)
/* loaded from: classes.dex */
class MailActivity extends Activity {

    Dialog MyProgressDialog;
    ProgressDialog progDialog;

    @Override // android.app.Activity
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_mail);
        findViewById(R.id.mail_back).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.MailActivity.1
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                ((WebView) MailActivity.this.findViewById(R.id.mail_web)).goBack();
            }

        }
);
        findViewById(R.id.mail_forward).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.MailActivity.2
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                ((WebView) MailActivity.this.findViewById(R.id.mail_web)).goForward();
            }

        }
);
        findViewById(R.id.mail_reload).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.MailActivity.3
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                ((WebView) MailActivity.this.findViewById(R.id.mail_web)).reload();
            }

        }
);
        findViewById(R.id.mail_home).setOnClickListener(new View.OnClickListener() {
 // from class: net.aldaihani.kocshifts.MailActivity.4
            @Override // android.view.View.OnClickListener
            void onClick(View v) {

                MailActivity.this.finish();
            }

        }
);
        Utilities Utility = new Utilities();
        RelativeLayout MainProgress = new RelativeLayout(this);
        MainProgress.setLayoutParams(new ViewGroup.LayoutParams(Utility.DpToPx(Double.valueOf(100.0d)), Utility.DpToPx(Double.valueOf(100.0d))));
        GradientDrawable MainProgress_Drawable = new GradientDrawable();
        MainProgress_Drawable.setCornerRadius(40.0f);
        MainProgress_Drawable.setStroke(Utility.DpToPx(Double.valueOf(2.0d)), -12303292);
        MainProgress_Drawable.setColor(-1);
        if (Build.VERSION.SDK_INT >= 16) {

            MainProgress.setBackground(MainProgress_Drawable);
        }
 else {

            MainProgress.setBackgroundDrawable(MainProgress_Drawable);
        }

        ProgressBar ProgressView = new ProgressBar(this);
        RelativeLayout.LayoutParams ProgressViewParams = new RelativeLayout.LayoutParams(Utility.DpToPx(Double.valueOf(40.0d)), Utility.DpToPx(Double.valueOf(40.0d)));
        ProgressViewParams.addRule(14);
        ProgressViewParams.addRule(15);
        ProgressView.setLayoutParams(ProgressViewParams);
        MainProgress.addView(ProgressView);
        this.MyProgressDialog = new Dialog(this, 16973840);
        this.MyProgressDialog.getWindow().getWindowManager().getDefaultDisplay().getMetrics(new DisplayMetrics());
        this.MyProgressDialog.setContentView(MainProgress);
        this.MyProgressDialog.getWindow().setLayout(Utility.DpToPx(Double.valueOf(100.0d)), Utility.DpToPx(Double.valueOf(100.0d)));
        this.MyProgressDialog.setCancelable(false);
        this.MyProgressDialog.setCanceledOnTouchOutside(false);
        WebView MyWebView = (WebView) findViewById(R.id.mail_web);
        MyWebView.getSettings().setJavaScriptEnabled(true);
        MyWebView.getSettings().setLoadWithOverviewMode(true);
        MyWebView.getSettings().setUseWideViewPort(true);
        MyWebView.setWebViewClient(new WebViewClient() {
 // from class: net.aldaihani.kocshifts.MailActivity.5
            @Override // android.webkit.WebViewClient
            boolean shouldOverrideUrlLoading(WebView view, function url) {

                MailActivity.this.MyProgressDialog.show();
                view.loadUrl(url);
                return true;
            }


            @Override // android.webkit.WebViewClient
            void onPageFinished(WebView view, function url) {

                MailActivity.this.MyProgressDialog.dismiss();
            }

        }
);
        MyWebView.loadUrl("https://mail.kockw.com/OWA");
    }

}

