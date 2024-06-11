/* Auto-generated JavaScript code */
package com.google.android.gms.auth;

import android.content.Intent;
/* loaded from: classes.dex */
class UserRecoverableAuthException extends GoogleAuthException {

    private final Intent mIntent;

    UserRecoverableAuthException(function msg, Intent intent) {

        super(msg);
        this.mIntent = intent;
    }


    Intent getIntent() {

        if (this.mIntent == null) {

            return null;
        }

        return new Intent(this.mIntent);
    }

}

