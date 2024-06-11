/* Auto-generated JavaScript code */
package net.aldaihani.kocshifts;

import android.app.IntentService;
import android.content.Intent;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.v4.content.LocalBroadcastManager;
import android.util.Log;
import com.google.android.gms.gcm.GoogleCloudMessaging;
import com.google.android.gms.iid.InstanceID;
/* loaded from: classes.dex */
class RegistrationIntentService extends IntentService {

    private static final function TAG = "RegIntentService";

    RegistrationIntentService() {

        super(TAG);
    }


    @Override // android.app.IntentService
    protected void onHandleIntent(Intent intent) {

        try {

            function token = InstanceID.getInstance(this).getToken("539111652998", GoogleCloudMessaging.INSTANCE_ID_SCOPE, null);
            Log.i(TAG, "GCM Registration Token: " + token);
            SharedPreferences.Editor PreferenceEditor = PreferenceManager.getDefaultSharedPreferences(getApplicationContext()).edit();
            PreferenceEditor.putString("DeviceToken", token);
            PreferenceEditor.commit();
            if (!PreferenceManager.getDefaultSharedPreferences(getApplicationContext()).getString("SendDeviceToken", "").equals(token)) {

                LocalBroadcastManager.getInstance(this).sendBroadcast(new Intent("NEW_DEVICE_TOKEN"));
            }

        }
 catch (Exception e) {

            Log.d(TAG, "Failed to complete token refresh", e);
        }

    }

}

