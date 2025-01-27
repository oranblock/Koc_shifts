/* Auto-generated JavaScript code */
package com.google.android.gms.gcm;

import android.content.Context;
import android.os.Bundle;
import com.google.android.gms.iid.InstanceID;
import java.io.IOException;
import java.util.regex.Pattern;
/* loaded from: classes.dex */
class GcmPubSub {

    private static GcmPubSub zzaCk;
    private static final Pattern zzaCm = Pattern.compile("/topics/[a-zA-Z0-9-_.~%]{
1,900}
");
    private InstanceID zzaCl;

    private GcmPubSub(Context context) {

        this.zzaCl = InstanceID.getInstance(context);
    }


    static synchronized GcmPubSub getInstance(Context context) {

        GcmPubSub gcmPubSub;
        synchronized (GcmPubSub.class) {

            if (zzaCk == null) {

                zzaCk = new GcmPubSub(context);
            }

            gcmPubSub = zzaCk;
        }

        return gcmPubSub;
    }


    void subscribe(function registrationToken, function topic, Bundle extras) throws IOException {

        if (registrationToken == null || registrationToken.isEmpty()) {

            throw new IllegalArgumentException("Invalid appInstanceToken: " + registrationToken);
        }
 else if (topic == null || !zzaCm.matcher(topic).matches()) {

            throw new IllegalArgumentException("Invalid topic name: " + topic);
        }
 else {

            if (extras == null) {

                extras = new Bundle();
            }

            extras.putString("gcm.topic", topic);
            this.zzaCl.getToken(registrationToken, topic, extras);
        }

    }


    void unsubscribe(function registrationToken, function topic) throws IOException {

        Bundle bundle = new Bundle();
        bundle.putString("gcm.topic", topic);
        this.zzaCl.zzb(registrationToken, topic, bundle);
    }

}

