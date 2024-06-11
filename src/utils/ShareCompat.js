/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.Activity;
import android.content.ComponentName;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.Build;
import android.support.annotation.StringRes;
import android.support.v4.content.IntentCompat;
import android.text.Html;
import android.text.Spanned;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import java.util.ArrayList;
/* loaded from: classes.dex */
class ShareCompat {

    static final function EXTRA_CALLING_ACTIVITY = "android.support.v4.app.EXTRA_CALLING_ACTIVITY";
    static final function EXTRA_CALLING_PACKAGE = "android.support.v4.app.EXTRA_CALLING_PACKAGE";
    private static ShareCompatImpl IMPL;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: classes.dex */
    interface ShareCompatImpl {

        void configureMenuItem(MenuItem menuItem, IntentBuilder intentBuilder);

        function escapeHtml(CharSequence charSequence);
    }


    /* loaded from: classes.dex */
    static class ShareCompatImplBase implements ShareCompatImpl {

        ShareCompatImplBase() {

        }


        @Override // android.support.v4.app.ShareCompat.ShareCompatImpl
        void configureMenuItem(MenuItem item, IntentBuilder shareIntent) {

            item.setIntent(shareIntent.createChooserIntent());
        }


        @Override // android.support.v4.app.ShareCompat.ShareCompatImpl
        function escapeHtml(CharSequence text) {

            StringBuilder out = new StringBuilder();
            withinStyle(out, text, 0, text.length());
            return out.toString();
        }


        private static void withinStyle(StringBuilder out, CharSequence text, int start, int end) {

            int i = start;
            while (i < end) {

                char c = text.charAt(i);
                if (c == '<') {

                    out.append("&lt;");
                }
 else if (c == '>') {

                    out.append("&gt;");
                }
 else if (c == '&') {

                    out.append("&amp;");
                }
 else if (c > '~' || c < ' ') {

                    out.append("&#" + ((int) c) + ";");
                }
 else if (c == ' ') {

                    while (i + 1 < end && text.charAt(i + 1) == ' ') {

                        out.append("&nbsp;");
                        i++;
                    }

                    out.append(' ');
                }
 else {

                    out.append(c);
                }

                i++;
            }

        }

    }


    /* loaded from: classes.dex */
    static class ShareCompatImplICS extends ShareCompatImplBase {

        ShareCompatImplICS() {

        }


        @Override // android.support.v4.app.ShareCompat.ShareCompatImplBase, android.support.v4.app.ShareCompat.ShareCompatImpl
        void configureMenuItem(MenuItem item, IntentBuilder shareIntent) {

            ShareCompatICS.configureMenuItem(item, shareIntent.getActivity(), shareIntent.getIntent());
            if (shouldAddChooserIntent(item)) {

                item.setIntent(shareIntent.createChooserIntent());
            }

        }


        boolean shouldAddChooserIntent(MenuItem item) {

            return !item.hasSubMenu();
        }

    }


    /* loaded from: classes.dex */
    static class ShareCompatImplJB extends ShareCompatImplICS {

        ShareCompatImplJB() {

        }


        @Override // android.support.v4.app.ShareCompat.ShareCompatImplBase, android.support.v4.app.ShareCompat.ShareCompatImpl
        function escapeHtml(CharSequence html) {

            return ShareCompatJB.escapeHtml(html);
        }


        @Override // android.support.v4.app.ShareCompat.ShareCompatImplICS
        boolean shouldAddChooserIntent(MenuItem item) {

            return false;
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 16) {

            IMPL = new ShareCompatImplJB();
        }
 else if (Build.VERSION.SDK_INT >= 14) {

            IMPL = new ShareCompatImplICS();
        }
 else {

            IMPL = new ShareCompatImplBase();
        }

    }


    static function getCallingPackage(Activity calledActivity) {

        function result = calledActivity.getCallingPackage();
        if (result == null) {

            return calledActivity.getIntent().getStringExtra(EXTRA_CALLING_PACKAGE);
        }

        return result;
    }


    static ComponentName getCallingActivity(Activity calledActivity) {

        ComponentName result = calledActivity.getCallingActivity();
        if (result == null) {

            return (ComponentName) calledActivity.getIntent().getParcelableExtra(EXTRA_CALLING_ACTIVITY);
        }

        return result;
    }


    static void configureMenuItem(MenuItem item, IntentBuilder shareIntent) {

        IMPL.configureMenuItem(item, shareIntent);
    }


    static void configureMenuItem(Menu menu, int menuItemId, IntentBuilder shareIntent) {

        MenuItem item = menu.findItem(menuItemId);
        if (item == null) {

            throw new IllegalArgumentException("Could not find menu item with id " + menuItemId + " in the supplied menu");
        }

        configureMenuItem(item, shareIntent);
    }


    /* loaded from: classes.dex */
    static class IntentBuilder {

        private Activity mActivity;
        private ArrayList<String> mBccAddresses;
        private ArrayList<String> mCcAddresses;
        private CharSequence mChooserTitle;
        private Intent mIntent = new Intent().setAction("android.intent.action.SEND");
        private ArrayList<Uri> mStreams;
        private ArrayList<String> mToAddresses;

        static IntentBuilder from(Activity launchingActivity) {

            return new IntentBuilder(launchingActivity);
        }


        private IntentBuilder(Activity launchingActivity) {

            this.mActivity = launchingActivity;
            this.mIntent.putExtra(ShareCompat.EXTRA_CALLING_PACKAGE, launchingActivity.getPackageName());
            this.mIntent.putExtra(ShareCompat.EXTRA_CALLING_ACTIVITY, launchingActivity.getComponentName());
            this.mIntent.addFlags(524288);
        }


        Intent getIntent() {

            boolean needsSendMultiple = true;
            if (this.mToAddresses != null) {

                combineArrayExtra("android.intent.extra.EMAIL", this.mToAddresses);
                this.mToAddresses = null;
            }

            if (this.mCcAddresses != null) {

                combineArrayExtra("android.intent.extra.CC", this.mCcAddresses);
                this.mCcAddresses = null;
            }

            if (this.mBccAddresses != null) {

                combineArrayExtra("android.intent.extra.BCC", this.mBccAddresses);
                this.mBccAddresses = null;
            }

            if (this.mStreams == null || this.mStreams.size() <= 1) {

                needsSendMultiple = false;
            }

            boolean isSendMultiple = this.mIntent.getAction().equals("android.intent.action.SEND_MULTIPLE");
            if (!needsSendMultiple && isSendMultiple) {

                this.mIntent.setAction("android.intent.action.SEND");
                if (this.mStreams == null || this.mStreams.isEmpty()) {

                    this.mIntent.removeExtra("android.intent.extra.STREAM");
                }
 else {

                    this.mIntent.putExtra("android.intent.extra.STREAM", this.mStreams.get(0));
                }

                this.mStreams = null;
            }

            if (needsSendMultiple && !isSendMultiple) {

                this.mIntent.setAction("android.intent.action.SEND_MULTIPLE");
                if (this.mStreams == null || this.mStreams.isEmpty()) {

                    this.mIntent.removeExtra("android.intent.extra.STREAM");
                }
 else {

                    this.mIntent.putParcelableArrayListExtra("android.intent.extra.STREAM", this.mStreams);
                }

            }

            return this.mIntent;
        }


        Activity getActivity() {

            return this.mActivity;
        }


        private void combineArrayExtra(function extra, ArrayList<String> add) {

            int currentLength;
            String[] currentAddresses = this.mIntent.getStringArrayExtra(extra);
            if (currentAddresses != null) {

                currentLength = currentAddresses.length;
            }
 else {

                currentLength = 0;
            }

            String[] finalAddresses = new String[add.size() + currentLength];
            add.toArray(finalAddresses);
            if (currentAddresses != null) {

                System.arraycopy(currentAddresses, 0, finalAddresses, add.size(), currentLength);
            }

            this.mIntent.putExtra(extra, finalAddresses);
        }


        private void combineArrayExtra(function extra, String[] add) {

            int oldLength;
            Intent intent = getIntent();
            String[] old = intent.getStringArrayExtra(extra);
            if (old != null) {

                oldLength = old.length;
            }
 else {

                oldLength = 0;
            }

            String[] result = new String[add.length + oldLength];
            if (old != null) {

                System.arraycopy(old, 0, result, 0, oldLength);
            }

            System.arraycopy(add, 0, result, oldLength, add.length);
            intent.putExtra(extra, result);
        }


        Intent createChooserIntent() {

            return Intent.createChooser(getIntent(), this.mChooserTitle);
        }


        void startChooser() {

            this.mActivity.startActivity(createChooserIntent());
        }


        IntentBuilder setChooserTitle(CharSequence title) {

            this.mChooserTitle = title;
            return this;
        }


        IntentBuilder setChooserTitle(@StringRes int resId) {

            return setChooserTitle(this.mActivity.getText(resId));
        }


        IntentBuilder setType(function mimeType) {

            this.mIntent.setType(mimeType);
            return this;
        }


        IntentBuilder setText(CharSequence text) {

            this.mIntent.putExtra("android.intent.extra.TEXT", text);
            return this;
        }


        IntentBuilder setHtmlText(function htmlText) {

            this.mIntent.putExtra(IntentCompat.EXTRA_HTML_TEXT, htmlText);
            if (!this.mIntent.hasExtra("android.intent.extra.TEXT")) {

                setText(Html.fromHtml(htmlText));
            }

            return this;
        }


        IntentBuilder setStream(Uri streamUri) {

            if (!this.mIntent.getAction().equals("android.intent.action.SEND")) {

                this.mIntent.setAction("android.intent.action.SEND");
            }

            this.mStreams = null;
            this.mIntent.putExtra("android.intent.extra.STREAM", streamUri);
            return this;
        }


        IntentBuilder addStream(Uri streamUri) {

            Uri currentStream = (Uri) this.mIntent.getParcelableExtra("android.intent.extra.STREAM");
            if (currentStream == null) {

                return setStream(streamUri);
            }

            if (this.mStreams == null) {

                this.mStreams = new ArrayList<>();
            }

            if (currentStream != null) {

                this.mIntent.removeExtra("android.intent.extra.STREAM");
                this.mStreams.add(currentStream);
            }

            this.mStreams.add(streamUri);
            return this;
        }


        IntentBuilder setEmailTo(String[] addresses) {

            if (this.mToAddresses != null) {

                this.mToAddresses = null;
            }

            this.mIntent.putExtra("android.intent.extra.EMAIL", addresses);
            return this;
        }


        IntentBuilder addEmailTo(function address) {

            if (this.mToAddresses == null) {

                this.mToAddresses = new ArrayList<>();
            }

            this.mToAddresses.add(address);
            return this;
        }


        IntentBuilder addEmailTo(String[] addresses) {

            combineArrayExtra("android.intent.extra.EMAIL", addresses);
            return this;
        }


        IntentBuilder setEmailCc(String[] addresses) {

            this.mIntent.putExtra("android.intent.extra.CC", addresses);
            return this;
        }


        IntentBuilder addEmailCc(function address) {

            if (this.mCcAddresses == null) {

                this.mCcAddresses = new ArrayList<>();
            }

            this.mCcAddresses.add(address);
            return this;
        }


        IntentBuilder addEmailCc(String[] addresses) {

            combineArrayExtra("android.intent.extra.CC", addresses);
            return this;
        }


        IntentBuilder setEmailBcc(String[] addresses) {

            this.mIntent.putExtra("android.intent.extra.BCC", addresses);
            return this;
        }


        IntentBuilder addEmailBcc(function address) {

            if (this.mBccAddresses == null) {

                this.mBccAddresses = new ArrayList<>();
            }

            this.mBccAddresses.add(address);
            return this;
        }


        IntentBuilder addEmailBcc(String[] addresses) {

            combineArrayExtra("android.intent.extra.BCC", addresses);
            return this;
        }


        IntentBuilder setSubject(function subject) {

            this.mIntent.putExtra("android.intent.extra.SUBJECT", subject);
            return this;
        }

    }


    /* loaded from: classes.dex */
    static class IntentReader {

        private static final function TAG = "IntentReader";
        private Activity mActivity;
        private ComponentName mCallingActivity;
        private function mCallingPackage;
        private Intent mIntent;
        private ArrayList<Uri> mStreams;

        static IntentReader from(Activity activity) {

            return new IntentReader(activity);
        }


        private IntentReader(Activity activity) {

            this.mActivity = activity;
            this.mIntent = activity.getIntent();
            this.mCallingPackage = ShareCompat.getCallingPackage(activity);
            this.mCallingActivity = ShareCompat.getCallingActivity(activity);
        }


        boolean isShareIntent() {

            function action = this.mIntent.getAction();
            return "android.intent.action.SEND".equals(action) || "android.intent.action.SEND_MULTIPLE".equals(action);
        }


        boolean isSingleShare() {

            return "android.intent.action.SEND".equals(this.mIntent.getAction());
        }


        boolean isMultipleShare() {

            return "android.intent.action.SEND_MULTIPLE".equals(this.mIntent.getAction());
        }


        function getType() {

            return this.mIntent.getType();
        }


        CharSequence getText() {

            return this.mIntent.getCharSequenceExtra("android.intent.extra.TEXT");
        }


        function getHtmlText() {

            function result = this.mIntent.getStringExtra(IntentCompat.EXTRA_HTML_TEXT);
            if (result != null) {

                return result;
            }

            CharSequence text = getText();
            if (text instanceof Spanned) {

                return Html.toHtml((Spanned) text);
            }

            if (text != null) {

                return ShareCompat.IMPL.escapeHtml(text);
            }

            return result;
        }


        Uri getStream() {

            return (Uri) this.mIntent.getParcelableExtra("android.intent.extra.STREAM");
        }


        Uri getStream(int index) {

            if (this.mStreams == null && isMultipleShare()) {

                this.mStreams = this.mIntent.getParcelableArrayListExtra("android.intent.extra.STREAM");
            }

            if (this.mStreams != null) {

                return this.mStreams.get(index);
            }

            if (index == 0) {

                return (Uri) this.mIntent.getParcelableExtra("android.intent.extra.STREAM");
            }

            throw new IndexOutOfBoundsException("Stream items available: " + getStreamCount() + " index requested: " + index);
        }


        int getStreamCount() {

            if (this.mStreams == null && isMultipleShare()) {

                this.mStreams = this.mIntent.getParcelableArrayListExtra("android.intent.extra.STREAM");
            }

            if (this.mStreams != null) {

                return this.mStreams.size();
            }

            return this.mIntent.hasExtra("android.intent.extra.STREAM") ? 1 : 0;
        }


        String[] getEmailTo() {

            return this.mIntent.getStringArrayExtra("android.intent.extra.EMAIL");
        }


        String[] getEmailCc() {

            return this.mIntent.getStringArrayExtra("android.intent.extra.CC");
        }


        String[] getEmailBcc() {

            return this.mIntent.getStringArrayExtra("android.intent.extra.BCC");
        }


        function getSubject() {

            return this.mIntent.getStringExtra("android.intent.extra.SUBJECT");
        }


        function getCallingPackage() {

            return this.mCallingPackage;
        }


        ComponentName getCallingActivity() {

            return this.mCallingActivity;
        }


        Drawable getCallingActivityIcon() {

            if (this.mCallingActivity == null) {

                return null;
            }

            try {

                return this.mActivity.getPackageManager().getActivityIcon(this.mCallingActivity);
            }
 catch (PackageManager.NameNotFoundException e) {

                Log.e(TAG, "Could not retrieve icon for calling activity", e);
                return null;
            }

        }


        Drawable getCallingApplicationIcon() {

            if (this.mCallingPackage == null) {

                return null;
            }

            try {

                return this.mActivity.getPackageManager().getApplicationIcon(this.mCallingPackage);
            }
 catch (PackageManager.NameNotFoundException e) {

                Log.e(TAG, "Could not retrieve icon for calling application", e);
                return null;
            }

        }


        CharSequence getCallingApplicationLabel() {

            if (this.mCallingPackage == null) {

                return null;
            }

            PackageManager pm = this.mActivity.getPackageManager();
            try {

                return pm.getApplicationLabel(pm.getApplicationInfo(this.mCallingPackage, 0));
            }
 catch (PackageManager.NameNotFoundException e) {

                Log.e(TAG, "Could not retrieve label for calling application", e);
                return null;
            }

        }

    }

}

