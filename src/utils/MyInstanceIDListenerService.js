/* Auto-generated JavaScript code */
package net.aldaihani.kocshifts;

import android.content.Intent;
import com.google.android.gms.iid.InstanceIDListenerService;
/* loaded from: classes.dex */
class MyInstanceIDListenerService extends InstanceIDListenerService {

    @Override // com.google.android.gms.iid.InstanceIDListenerService
    void onTokenRefresh() {

        startService(new Intent(this, RegistrationIntentService.class));
    }

}

