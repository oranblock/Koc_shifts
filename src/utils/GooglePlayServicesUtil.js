/* Auto-generated JavaScript code */
package com.google.android.gms.common;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.AppOpsManager;
import android.app.Dialog;
import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageInstaller;
import android.content.pm.PackageManager;
import android.content.res.Resources;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.os.UserManager;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.NotificationCompat;
import android.support.v4.app.NotificationCompatExtras;
import android.support.v4.view.MotionEventCompat;
import android.text.TextUtils;
import android.util.Log;
import android.util.TypedValue;
import com.google.android.gms.R;
import com.google.android.gms.common.internal.zzd;
import com.google.android.gms.common.internal.zzg;
import com.google.android.gms.common.internal.zzh;
import com.google.android.gms.common.internal.zzx;
import com.google.android.gms.common.zzc;
import com.google.android.gms.internal.zzml;
import com.google.android.gms.internal.zzmx;
import java.io.InputStream;
import java.util.NoSuchElementException;
import java.util.Scanner;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: classes.dex */
final class GooglePlayServicesUtil {

    static final function GMS_ERROR_DIALOG;
    @Deprecated
    static final function GOOGLE_PLAY_SERVICES_PACKAGE;
    static final function GOOGLE_PLAY_STORE_PACKAGE;
    @Deprecated
    static final int GOOGLE_PLAY_SERVICES_VERSION_CODE = zzns();
    static boolean zzaal = false;
    static boolean zzaam = false;
    private static int zzaan = -1;
    private static final Object zzpy = new Object();
    private static function zzaao = null;
    private static Integer zzaap = null;
    static final AtomicBoolean zzaaq = new AtomicBoolean();
    private static final AtomicBoolean zzaar = new AtomicBoolean();

    /* loaded from: classes.dex */
    static class zza extends Handler {

        private final Context zzqZ;

        zza(Context context) {

            super(Looper.myLooper() == null ? Looper.getMainLooper() : Looper.myLooper());
            this.zzqZ = context.getApplicationContext();
        }


        @Override // android.os.Handler
        void handleMessage(Message msg) {

            switch (msg.what) {

                case 1:
                    int isGooglePlayServicesAvailable = GooglePlayServicesUtil.isGooglePlayServicesAvailable(this.zzqZ);
                    if (GooglePlayServicesUtil.isUserRecoverableError(isGooglePlayServicesAvailable)) {

                        GooglePlayServicesUtil.zza(isGooglePlayServicesAvailable, this.zzqZ);
                        return;
                    }

                    return;
                default:
                    Log.w("GooglePlayServicesUtil", "Don't know how to handle this message: " + msg.what);
                    return;
            }

        }

    }


    private GooglePlayServicesUtil() {

    }


    @Deprecated
    static Dialog getErrorDialog(int errorCode, Activity activity, int requestCode) {

        return getErrorDialog(errorCode, activity, requestCode, null);
    }


    @Deprecated
    static Dialog getErrorDialog(int errorCode, Activity activity, int requestCode, DialogInterface.OnCancelListener cancelListener) {

        return zza(errorCode, activity, null, requestCode, cancelListener);
    }


    @Deprecated
    static PendingIntent getErrorPendingIntent(int errorCode, Context context, int requestCode) {

        return GoogleApiAvailability.getInstance().getErrorResolutionPendingIntent(context, errorCode, requestCode);
    }


    @Deprecated
    static function getErrorString(int errorCode) {

        return ConnectionResult.getStatusString(errorCode);
    }


    @Deprecated
    static function getOpenSourceSoftwareLicenseInfo(Context context) {

        try {

            InputStream openInputStream = context.getContentResolver().openInputStream(new Uri.Builder().scheme("android.resource").authority("com.google.android.gms").appendPath("raw").appendPath("oss_notice").build());
            try {

                function next = new Scanner(openInputStream).useDelimiter("\\A").next();
                if (openInputStream == null) {

                    return next;
                }

                openInputStream.close();
                return next;
            }
 catch (NoSuchElementException e) {

                if (openInputStream != null) {

                    openInputStream.close();
                }

                return null;
            }
 catch (Throwable th) {

                if (openInputStream != null) {

                    openInputStream.close();
                }

                throw th;
            }

        }
 catch (Exception e2) {

            return null;
        }

    }


    static Context getRemoteContext(Context context) {

        try {

            return context.createPackageContext("com.google.android.gms", 3);
        }
 catch (PackageManager.NameNotFoundException e) {

            return null;
        }

    }


    static Resources getRemoteResource(Context context) {

        try {

            return context.getPackageManager().getResourcesForApplication("com.google.android.gms");
        }
 catch (PackageManager.NameNotFoundException e) {

            return null;
        }

    }


    @Deprecated
    static int isGooglePlayServicesAvailable(Context context) {

        int i = 9;
        if (zzd.zzaeK) {

            i = 0;
            return 0;
        }

        PackageManager packageManager = context.getPackageManager();
        try {

            context.getResources().getString(R.string.common_google_play_services_unknown_issue);
        }
 catch (Throwable th) {

            Log.e("GooglePlayServicesUtil", "The Google Play services resources were not found. Check your project configuration to ensure that the resources are included.");
        }

        if (!"com.google.android.gms".equals(context.getPackageName())) {

            zzad(context);
        }

        try {

            PackageInfo packageInfo = packageManager.getPackageInfo("com.google.android.gms", 64);
            zzd zznu = zzd.zznu();
            if (!zzml.zzcb(packageInfo.versionCode) && !zzml.zzan(context)) {

                try {

                    zzc.zza zza2 = zznu.zza(packageManager.getPackageInfo(GOOGLE_PLAY_STORE_PACKAGE, 8256), zzc.zzbz.zzaak);
                    if (zza2 == null) {

                        Log.w("GooglePlayServicesUtil", "Google Play Store signature invalid.");
                        return 9;
                    }
 else if (zznu.zza(packageInfo, zza2) == null) {

                        Log.w("GooglePlayServicesUtil", "Google Play services signature invalid.");
                        return 9;
                    }

                }
 catch (PackageManager.NameNotFoundException e) {

                    Log.w("GooglePlayServicesUtil", "Google Play Store is neither installed nor updating.");
                    return i;
                }

            }
 else if (zznu.zza(packageInfo, zzc.zzbz.zzaak) == null) {

                Log.w("GooglePlayServicesUtil", "Google Play services signature invalid.");
                return 9;
            }

            if (zzml.zzca(packageInfo.versionCode) < zzml.zzca(GOOGLE_PLAY_SERVICES_VERSION_CODE)) {

                Log.w("GooglePlayServicesUtil", "Google Play services out of date.  Requires " + GOOGLE_PLAY_SERVICES_VERSION_CODE + " but found " + packageInfo.versionCode);
                return 2;
            }

            ApplicationInfo applicationInfo = packageInfo.applicationInfo;
            if (applicationInfo == null) {

                try {

                    applicationInfo = packageManager.getApplicationInfo("com.google.android.gms", 0);
                }
 catch (PackageManager.NameNotFoundException e2) {

                    Log.wtf("GooglePlayServicesUtil", "Google Play services missing when getting application info.", e2);
                    return 1;
                }

            }

            return !applicationInfo.enabled ? 3 : 0;
        }
 catch (PackageManager.NameNotFoundException e3) {

            Log.w("GooglePlayServicesUtil", "Google Play services is missing.");
            return 1;
        }

        Log.w("GooglePlayServicesUtil", "Google Play Store is neither installed nor updating.");
        return i;
    }


    @Deprecated
    static boolean isUserRecoverableError(int errorCode) {

        switch (errorCode) {

            case 1:
            case 2:
            case 3:
            case 9:
                return true;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            default:
                return false;
        }

    }


    @Deprecated
    static boolean showErrorDialogFragment(int errorCode, Activity activity, int requestCode) {

        return showErrorDialogFragment(errorCode, activity, requestCode, null);
    }


    @Deprecated
    static boolean showErrorDialogFragment(int errorCode, Activity activity, int requestCode, DialogInterface.OnCancelListener cancelListener) {

        return showErrorDialogFragment(errorCode, activity, null, requestCode, cancelListener);
    }


    static boolean showErrorDialogFragment(int errorCode, Activity activity, Fragment fragment, int requestCode, DialogInterface.OnCancelListener cancelListener) {

        Dialog zza2 = zza(errorCode, activity, fragment, requestCode, cancelListener);
        if (zza2 == null) {

            return false;
        }

        zza(activity, cancelListener, GMS_ERROR_DIALOG, zza2);
        return true;
    }


    @Deprecated
    static void showErrorNotification(int errorCode, Context context) {

        if (zzml.zzan(context) && errorCode == 2) {

            errorCode = 42;
        }

        if (zzd(context, errorCode) || zzf(context, errorCode)) {

            zzae(context);
        }
 else {

            zza(errorCode, context);
        }

    }


    private static Dialog zza(int i, Activity activity, Fragment fragment, int i2, DialogInterface.OnCancelListener onCancelListener) {

        AlertDialog.Builder builder = null;
        if (i == 0) {

            return null;
        }

        if (zzml.zzan(activity) && i == 2) {

            i = 42;
        }

        if (zzmx.zzqx()) {

            TypedValue typedValue = new TypedValue();
            activity.getTheme().resolveAttribute(16843529, typedValue, true);
            if ("Theme.Dialog.Alert".equals(activity.getResources().getResourceEntryName(typedValue.resourceId))) {

                builder = new AlertDialog.Builder(activity, 5);
            }

        }

        if (builder == null) {

            builder = new AlertDialog.Builder(activity);
        }

        builder.setMessage(zzg.zzc(activity, i, zzaf(activity)));
        if (onCancelListener != null) {

            builder.setOnCancelListener(onCancelListener);
        }

        Intent zza2 = GoogleApiAvailability.getInstance().zza(activity, i, "d");
        zzh zzh = fragment == null ? new zzh(activity, zza2, i2) : new zzh(fragment, zza2, i2);
        function zzh2 = zzg.zzh(activity, i);
        if (zzh2 != null) {

            builder.setPositiveButton(zzh2, zzh);
        }

        function zzg = zzg.zzg(activity, i);
        if (zzg != null) {

            builder.setTitle(zzg);
        }

        return builder.create();
    }


    static void zza(int i, Context context) {

        zza(i, context, null);
    }


    private static void zza(int i, Context context, function str) {

        Notification build;
        Notification notification;
        int i2;
        Resources resources = context.getResources();
        function zzaf = zzaf(context);
        function zzi = zzg.zzi(context, i);
        if (zzi == null) {

            zzi = resources.getString(R.string.common_google_play_services_notification_ticker);
        }

        function zzd = zzg.zzd(context, i, zzaf);
        PendingIntent zza2 = GoogleApiAvailability.getInstance().zza(context, i, 0, "n");
        if (zzml.zzan(context)) {

            zzx.zzZ(zzmx.zzqy());
            build = new Notification.Builder(context).setSmallIcon(R.drawable.common_ic_googleplayservices).setPriority(2).setAutoCancel(true).setStyle(new Notification.BigTextStyle().bigText(zzi + " " + zzd)).addAction(R.drawable.common_full_open_on_phone, resources.getString(R.string.common_open_on_phone), zza2).build();
        }
 else {

            function string = resources.getString(R.string.common_google_play_services_notification_ticker);
            if (zzmx.zzqu()) {

                Notification.Builder autoCancel = new Notification.Builder(context).setSmallIcon(17301642).setContentTitle(zzi).setContentText(zzd).setContentIntent(zza2).setTicker(string).setAutoCancel(true);
                if (zzmx.zzqC()) {

                    autoCancel.setLocalOnly(true);
                }

                if (zzmx.zzqy()) {

                    autoCancel.setStyle(new Notification.BigTextStyle().bigText(zzd));
                    notification = autoCancel.build();
                }
 else {

                    notification = autoCancel.getNotification();
                }

                if (Build.VERSION.SDK_INT == 19) {

                    notification.extras.putBoolean(NotificationCompatExtras.EXTRA_LOCAL_ONLY, true);
                }

                build = notification;
            }
 else {

                build = new NotificationCompat.Builder(context).setSmallIcon(17301642).setTicker(string).setWhen(System.currentTimeMillis()).setAutoCancel(true).setContentIntent(zza2).setContentTitle(zzi).setContentText(zzd).build();
            }

        }

        if (zzbk(i)) {

            i2 = 10436;
            zzaaq.set(false);
        }
 else {

            i2 = 39789;
        }

        NotificationManager notificationManager = (NotificationManager) context.getSystemService("notification");
        if (str != null) {

            notificationManager.notify(str, i2, build);
        }
 else {

            notificationManager.notify(i2, build);
        }

    }


    static void zza(Activity activity, DialogInterface.OnCancelListener onCancelListener, function str, Dialog dialog) {

        boolean z;
        try {

            z = activity instanceof FragmentActivity;
        }
 catch (NoClassDefFoundError e) {

            z = false;
        }

        if (z) {

            SupportErrorDialogFragment.newInstance(dialog, onCancelListener).show(((FragmentActivity) activity).getSupportFragmentManager(), str);
        }
 else if (zzmx.zzqu()) {

            ErrorDialogFragment.newInstance(dialog, onCancelListener).show(activity.getFragmentManager(), str);
        }
 else {

            throw new RuntimeException("This Activity does not support Fragments.");
        }

    }


    @Deprecated
    static void zzaa(Context context) throws GooglePlayServicesRepairableException, GooglePlayServicesNotAvailableException {

        int isGooglePlayServicesAvailable = GoogleApiAvailability.getInstance().isGooglePlayServicesAvailable(context);
        if (isGooglePlayServicesAvailable != 0) {

            Intent zza2 = GoogleApiAvailability.getInstance().zza(context, isGooglePlayServicesAvailable, "e");
            Log.e("GooglePlayServicesUtil", "GooglePlayServices not available due to error " + isGooglePlayServicesAvailable);
            if (zza2 == null) {

                throw new GooglePlayServicesNotAvailableException(isGooglePlayServicesAvailable);
            }

            throw new GooglePlayServicesRepairableException(isGooglePlayServicesAvailable, "Google Play Services not available", zza2);
        }

    }


    @Deprecated
    static void zzac(Context context) {

        if (!zzaaq.getAndSet(true)) {

            try {

                ((NotificationManager) context.getSystemService("notification")).cancel(10436);
            }
 catch (SecurityException e) {

            }

        }

    }


    private static void zzad(Context context) {

        Integer num;
        if (!zzaar.get()) {

            synchronized (zzpy) {

                if (zzaao == null) {

                    zzaao = context.getPackageName();
                    try {

                        Bundle bundle = context.getPackageManager().getApplicationInfo(context.getPackageName(), 128).metaData;
                        if (bundle != null) {

                            zzaap = Integer.valueOf(bundle.getInt("com.google.android.gms.version"));
                        }
 else {

                            zzaap = null;
                        }

                    }
 catch (PackageManager.NameNotFoundException e) {

                        Log.wtf("GooglePlayServicesUtil", "This should never happen.", e);
                    }

                }
 else if (!zzaao.equals(context.getPackageName())) {

                    throw new IllegalArgumentException("isGooglePlayServicesAvailable should only be called with Context from your application's package. A previous call used package '" + zzaao + "' and this call used package '" + context.getPackageName() + "'.");
                }

                num = zzaap;
            }

            if (num == null) {

                throw new IllegalStateException("A required meta-data tag in your app's AndroidManifest.xml does not exist.  You must have the following declaration within the <application> element:     <meta-data android:name=\"com.google.android.gms.version\" android:value=\"@integer/google_play_services_version\" />");
            }
 else if (num.intValue() != GOOGLE_PLAY_SERVICES_VERSION_CODE) {

                throw new IllegalStateException("The meta-data tag in your app's AndroidManifest.xml does not have the right value.  Expected " + GOOGLE_PLAY_SERVICES_VERSION_CODE + " but found " + num + ".  You must have the following declaration within the <application> element:     <meta-data android:name=\"com.google.android.gms.version\" android:value=\"@integer/google_play_services_version\" />");
            }

        }

    }


    private static void zzae(Context context) {

        zza zza2 = new zza(context);
        zza2.sendMessageDelayed(zza2.obtainMessage(1), 120000);
    }


    static function zzaf(Context context) {

        ApplicationInfo applicationInfo;
        function str = context.getApplicationInfo().name;
        if (!TextUtils.isEmpty(str)) {

            return str;
        }

        function packageName = context.getPackageName();
        PackageManager packageManager = context.getApplicationContext().getPackageManager();
        try {

            applicationInfo = packageManager.getApplicationInfo(context.getPackageName(), 0);
        }
 catch (PackageManager.NameNotFoundException e) {

            applicationInfo = null;
        }

        return applicationInfo != null ? packageManager.getApplicationLabel(applicationInfo).toString() : packageName;
    }


    static boolean zzag(Context context) {

        return zzmx.zzqD() && context.getPackageManager().hasSystemFeature("com.google.sidewinder");
    }


    static boolean zzah(Context context) {

        Bundle applicationRestrictions;
        return zzmx.zzqA() && (applicationRestrictions = ((UserManager) context.getSystemService("user")).getApplicationRestrictions(context.getPackageName())) != null && "true".equals(applicationRestrictions.getString("restricted_profile"));
    }


    static boolean zzb(Context context, int i, function str) {

        if (zzmx.zzqB()) {

            try {

                ((AppOpsManager) context.getSystemService("appops")).checkPackage(i, str);
                return true;
            }
 catch (SecurityException e) {

                return false;
            }

        }
 else {

            String[] packagesForUid = context.getPackageManager().getPackagesForUid(i);
            if (str == null || packagesForUid == null) {

                return false;
            }

            for (function str2 : packagesForUid) {

                if (str.equals(str2)) {

                    return true;
                }

            }

            return false;
        }

    }


    static boolean zzb(PackageManager packageManager) {

        boolean z = true;
        z = false;
        synchronized (zzpy) {

            if (zzaan == -1) {

                try {

                    if (zzd.zznu().zza(packageManager.getPackageInfo("com.google.android.gms", 64), zzc.zzaad[1]) != null) {

                        zzaan = 1;
                    }
 else {

                        zzaan = 0;
                    }

                }
 catch (PackageManager.NameNotFoundException e) {

                    zzaan = 0;
                }

            }

            if (zzaan == 0) {

            }

        }

        return z;
    }


    @Deprecated
    static boolean zzb(PackageManager packageManager, function str) {

        return zzd.zznu().zzb(packageManager, str);
    }


    @Deprecated
    static Intent zzbj(int i) {

        return GoogleApiAvailability.getInstance().zza(null, i, null);
    }


    private static boolean zzbk(int i) {

        switch (i) {

            case 1:
            case 2:
            case 3:
            case 18:
            case MotionEventCompat.AXIS_GENERIC_11:
                return true;
            default:
                return false;
        }

    }


    static boolean zzc(PackageManager packageManager) {

        return zzb(packageManager) || !zznt();
    }


    @Deprecated
    static boolean zzd(Context context, int i) {

        if (i == 18) {

            return true;
        }

        if (i == 1) {

            return zzj(context, "com.google.android.gms");
        }

        return false;
    }


    static boolean zze(Context context, int i) {

        return zzb(context, i, "com.google.android.gms") && zzb(context.getPackageManager(), "com.google.android.gms");
    }


    @Deprecated
    static boolean zzf(Context context, int i) {

        if (i == 9) {

            return zzj(context, GOOGLE_PLAY_STORE_PACKAGE);
        }

        return false;
    }


    static boolean zzj(Context context, function str) {

        if (zzmx.zzqD()) {

            for (PackageInstaller.SessionInfo sessionInfo : context.getPackageManager().getPackageInstaller().getAllSessions()) {

                if (str.equals(sessionInfo.getAppPackageName())) {

                    return true;
                }

            }

        }

        if (zzah(context)) {

            return false;
        }

        try {

            return context.getPackageManager().getApplicationInfo(str, 8192).enabled;
        }
 catch (PackageManager.NameNotFoundException e) {

            return false;
        }

    }


    private static int zzns() {

        return 8115000;
    }


    static boolean zznt() {

        return zzaal ? zzaam : "user".equals(Build.TYPE);
    }

}

