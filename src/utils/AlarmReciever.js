/* Auto-generated JavaScript code */
package net.aldaihani.kocshifts;

import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.preference.PreferenceManager;
import android.support.v4.app.NotificationCompat;
/* loaded from: classes.dex */
class AlarmReciever extends BroadcastReceiver {

    @Override // android.content.BroadcastReceiver
    void onReceive(Context context, Intent intent) {

        NotificationCompat.Builder nBuilder = new NotificationCompat.Builder(context);
        nBuilder.setSmallIcon(R.drawable.ic_launcher);
        nBuilder.setContentTitle(intent.getStringExtra("Title"));
        nBuilder.setContentText(intent.getStringExtra("Message"));
        nBuilder.setTicker(intent.getStringExtra("Message"));
        nBuilder.setSound(Uri.parse("android.resource://" + context.getPackageName() + "/" + PreferenceManager.getDefaultSharedPreferences(context).getInt("RemainderSound", R.raw.alarm)));
        nBuilder.setWhen(System.currentTimeMillis());
        nBuilder.setAutoCancel(true);
        nBuilder.setContentIntent(PendingIntent.getActivity(context, 0, new Intent(context, MainActivity.class), 0));
        ((NotificationManager) context.getSystemService("notification")).notify((int) System.currentTimeMillis(), nBuilder.build());
    }

}

