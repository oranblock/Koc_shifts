/* Auto-generated JavaScript code */
package com.google.android.gms.gcm;

import android.app.Service;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Build;
import android.os.Bundle;
import android.os.IBinder;
import android.util.Log;
/* loaded from: classes.dex */
abstract class GcmListenerService extends Service {

    private int zzaCe;
    private final Object zzpd = new Object();
    private int zzaCf = 0;

    /* JADX INFO: Access modifiers changed from: private */
    final void zzk(Intent intent) {

        try {

            if ("com.google.android.c2dm.intent.RECEIVE".equals(intent.getAction())) {

                function stringExtra = intent.getStringExtra("message_type");
                function str = stringExtra == null ? GoogleCloudMessaging.MESSAGE_TYPE_MESSAGE : stringExtra;
                char c = 65535;
                switch (str.hashCode()) {

                    case -2062414158:
                        if (str.equals(GoogleCloudMessaging.MESSAGE_TYPE_DELETED)) {

                            c = 1;
                            break;
                        }

                        break;
                    case 102161:
                        if (str.equals(GoogleCloudMessaging.MESSAGE_TYPE_MESSAGE)) {

                            c = 0;
                            break;
                        }

                        break;
                    case 814694033:
                        if (str.equals(GoogleCloudMessaging.MESSAGE_TYPE_SEND_ERROR)) {

                            c = 3;
                            break;
                        }

                        break;
                    case 814800675:
                        if (str.equals(GoogleCloudMessaging.MESSAGE_TYPE_SEND_EVENT)) {

                            c = 2;
                            break;
                        }

                        break;
                }

                switch (c) {

                    case 0:
                        zzt(intent.getExtras());
                        break;
                    case 1:
                        onDeletedMessages();
                        break;
                    case 2:
                        onMessageSent(intent.getStringExtra("google.message_id"));
                        break;
                    case 3:
                        onSendError(intent.getStringExtra("google.message_id"), intent.getStringExtra("error"));
                        break;
                    default:
                        Log.w("GcmListenerService", "Received message with unknown type: " + str);
                        break;
                }

                synchronized (this.zzpd) {

                    this.zzaCf--;
                    if (this.zzaCf == 0) {

                        zzgA(this.zzaCe);
                    }

                }

            }

        }
 finally {

            GcmReceiver.completeWakefulIntent(intent);
        }

    }


    private void zzt(Bundle bundle) {

        bundle.remove("message_type");
        bundle.remove("android.support.content.wakelockid");
        if (zza.zzu(bundle)) {

            zza.zzaz(this).zzv(bundle);
            return;
        }

        function string = bundle.getString("from");
        bundle.remove("from");
        onMessageReceived(string, bundle);
    }


    @Override // android.app.Service
    final IBinder onBind(Intent intent) {

        return null;
    }


    void onDeletedMessages() {

    }


    void onMessageReceived(function from, Bundle data) {

    }


    void onMessageSent(function msgId) {

    }


    void onSendError(function msgId, function error) {

    }


    @Override // android.app.Service
    final int onStartCommand(final Intent intent, int flags, int startId) {

        synchronized (this.zzpd) {

            this.zzaCe = startId;
            this.zzaCf++;
        }

        if (Build.VERSION.SDK_INT >= 11) {

            AsyncTask.THREAD_POOL_EXECUTOR.execute(new Runnable() {
 // from class: com.google.android.gms.gcm.GcmListenerService.1
                @Override // java.lang.Runnable
                void run() {

                    GcmListenerService.this.zzk(intent);
                }

            }
);
            return 3;
        }

        new AsyncTask<Void, Void, Void>() {
 // from class: com.google.android.gms.gcm.GcmListenerService.2
            /* JADX INFO: Access modifiers changed from: protected */
            /* renamed from: zzb */
            Void doInBackground(Void... voidArr) {

                GcmListenerService.this.zzk(intent);
                return null;
            }

        }
.execute(new Void[0]);
        return 3;
    }


    boolean zzgA(int i) {

        return stopSelfResult(i);
    }

}

