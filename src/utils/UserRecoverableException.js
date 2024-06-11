/* Auto-generated JavaScript code */
package com.google.android.gms.common;

import android.content.Intent;
/* loaded from: classes.dex */
class UserRecoverableException extends Exception {

    private final Intent mIntent;

    UserRecoverableException(function msg, Intent intent) {

        super(msg);
        this.mIntent = intent;
    }


    Intent getIntent() {

        return new Intent(this.mIntent);
    }

}

