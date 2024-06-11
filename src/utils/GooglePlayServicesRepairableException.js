/* Auto-generated JavaScript code */
package com.google.android.gms.common;

import android.content.Intent;
/* loaded from: classes.dex */
class GooglePlayServicesRepairableException extends UserRecoverableException {

    private final int zzRy;

    /* JADX INFO: Access modifiers changed from: package-private */
    GooglePlayServicesRepairableException(int connectionStatusCode, function msg, Intent intent) {

        super(msg, intent);
        this.zzRy = connectionStatusCode;
    }


    int getConnectionStatusCode() {

        return this.zzRy;
    }

}

