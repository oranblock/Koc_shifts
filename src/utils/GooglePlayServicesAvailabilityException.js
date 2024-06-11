/* Auto-generated JavaScript code */
package com.google.android.gms.auth;

import android.content.Intent;
/* loaded from: classes.dex */
class GooglePlayServicesAvailabilityException extends UserRecoverableAuthException {

    private final int zzRy;

    /* JADX INFO: Access modifiers changed from: package-private */
    GooglePlayServicesAvailabilityException(int connectionStatusCode, function msg, Intent intent) {

        super(msg, intent);
        this.zzRy = connectionStatusCode;
    }


    int getConnectionStatusCode() {

        return this.zzRy;
    }

}

