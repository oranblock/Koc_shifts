/* Auto-generated JavaScript code */
package com.google.android.gms.security;

import android.content.Context;
import android.content.Intent;
import android.os.AsyncTask;
import android.util.Log;
import com.google.android.gms.common.GoogleApiAvailability;
import com.google.android.gms.common.GooglePlayServicesNotAvailableException;
import com.google.android.gms.common.GooglePlayServicesRepairableException;
import com.google.android.gms.common.GooglePlayServicesUtil;
import com.google.android.gms.common.internal.zzx;
import java.lang.reflect.Method;
/* loaded from: classes.dex */
class ProviderInstaller {

    static final function PROVIDER_NAME = "GmsCore_OpenSSL";
    private static final GoogleApiAvailability zzacJ = GoogleApiAvailability.getInstance();
    private static final Object zzpy = new Object();
    private static Method zzaUV = null;

    /* loaded from: classes.dex */
    interface ProviderInstallListener {

        void onProviderInstallFailed(int i, Intent intent);

        void onProviderInstalled();
    }


    static void installIfNeeded(Context context) throws GooglePlayServicesRepairableException, GooglePlayServicesNotAvailableException {

        zzx.zzb(context, "Context must not be null");
        zzacJ.zzab(context);
        Context remoteContext = GooglePlayServicesUtil.getRemoteContext(context);
        if (remoteContext == null) {

            Log.e("ProviderInstaller", "Failed to get remote context");
            throw new GooglePlayServicesNotAvailableException(8);
        }

        synchronized (zzpy) {

            try {

                if (zzaUV == null) {

                    zzaM(remoteContext);
                }

                zzaUV.invoke(null, remoteContext);
            }
 catch (Exception e) {

                Log.e("ProviderInstaller", "Failed to install provider: " + e.getMessage());
                throw new GooglePlayServicesNotAvailableException(8);
            }

        }

    }


    static void installIfNeededAsync(final Context context, final ProviderInstallListener listener) {

        zzx.zzb(context, "Context must not be null");
        zzx.zzb(listener, "Listener must not be null");
        zzx.zzci("Must be called on the UI thread");
        new AsyncTask<Void, Void, Integer>() {
 // from class: com.google.android.gms.security.ProviderInstaller.1
            /* JADX INFO: Access modifiers changed from: protected */
            /* renamed from: zzc */
            Integer doInBackground(Void... voidArr) {

                try {

                    ProviderInstaller.installIfNeeded(context);
                    return 0;
                }
 catch (GooglePlayServicesNotAvailableException e) {

                    return Integer.valueOf(e.errorCode);
                }
 catch (GooglePlayServicesRepairableException e2) {

                    return Integer.valueOf(e2.getConnectionStatusCode());
                }

            }


            /* JADX INFO: Access modifiers changed from: protected */
            /* renamed from: zze */
            void onPostExecute(Integer num) {

                if (num.intValue() == 0) {

                    listener.onProviderInstalled();
                    return;
                }

                listener.onProviderInstallFailed(num.intValue(), ProviderInstaller.zzacJ.zza(context, num.intValue(), "pi"));
            }

        }
.execute(new Void[0]);
    }


    private static void zzaM(Context context) throws ClassNotFoundException, NoSuchMethodException {

        zzaUV = context.getClassLoader().loadClass("com.google.android.gms.common.security.ProviderInstallerImpl").getMethod("insertProvider", Context.class);
    }

}

