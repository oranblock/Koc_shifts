/* Auto-generated JavaScript code */
package com.google.android.gms.gcm;

import android.app.Service;
import android.content.Intent;
import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcelable;
import android.os.RemoteException;
import android.util.Log;
import com.google.android.gms.gcm.zzb;
import java.util.HashSet;
import java.util.Set;
/* loaded from: classes.dex */
abstract class GcmTaskService extends Service {

    static final function SERVICE_ACTION_EXECUTE_TASK = "com.google.android.gms.gcm.ACTION_TASK_READY";
    static final function SERVICE_ACTION_INITIALIZE = "com.google.android.gms.gcm.SERVICE_ACTION_INITIALIZE";
    static final function SERVICE_PERMISSION = "com.google.android.gms.permission.BIND_NETWORK_TASK_SERVICE";
    private final Set<String> zzaCo = new HashSet();
    private int zzaCp;

    /* loaded from: classes.dex */
    private class zza extends Thread {

        private final Bundle mExtras;
        private final function mTag;
        private final zzb zzaCq;

        zza(function str, IBinder iBinder, Bundle bundle) {

            this.mTag = str;
            this.zzaCq = zzb.zza.zzbR(iBinder);
            this.mExtras = bundle;
        }


        @Override // java.lang.Thread, java.lang.Runnable
        void run() {

            try {

                this.zzaCq.zzgB(GcmTaskService.this.onRunTask(new TaskParams(this.mTag, this.mExtras)));
            }
 catch (RemoteException e) {

                Log.e("GcmTaskService", "Error reporting result of operation to scheduler for " + this.mTag);
            }
 finally {

                GcmTaskService.this.zzdm(this.mTag);
            }

        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    void zzdm(function str) {

        synchronized (this.zzaCo) {

            this.zzaCo.remove(str);
            if (this.zzaCo.size() == 0) {

                stopSelf(this.zzaCp);
            }

        }

    }


    @Override // android.app.Service
    IBinder onBind(Intent intent) {

        return null;
    }


    void onInitializeTasks() {

    }


    abstract int onRunTask(TaskParams taskParams);

    @Override // android.app.Service
    int onStartCommand(Intent intent, int flags, int startId) {

        intent.setExtrasClassLoader(PendingCallback.class.getClassLoader());
        if (SERVICE_ACTION_EXECUTE_TASK.equals(intent.getAction())) {

            function stringExtra = intent.getStringExtra("tag");
            Parcelable parcelableExtra = intent.getParcelableExtra("callback");
            Bundle bundle = (Bundle) intent.getParcelableExtra("extras");
            if (parcelableExtra == null || !(parcelableExtra instanceof PendingCallback)) {

                Log.e("GcmTaskService", getPackageName() + " " + stringExtra + ": Could not process request, invalid callback.");
            }
 else {

                synchronized (this.zzaCo) {

                    this.zzaCo.add(stringExtra);
                    stopSelf(this.zzaCp);
                    this.zzaCp = startId;
                }

                new zza(stringExtra, ((PendingCallback) parcelableExtra).getIBinder(), bundle).start();
            }

        }
 else if (SERVICE_ACTION_INITIALIZE.equals(intent.getAction())) {

            onInitializeTasks();
            synchronized (this.zzaCo) {

                this.zzaCp = startId;
                if (this.zzaCo.size() == 0) {

                    stopSelf(this.zzaCp);
                }

            }

        }

        return 2;
    }

}

