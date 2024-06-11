/* Auto-generated JavaScript code */
package com.google.android.gms.gcm;

import android.os.Bundle;
/* loaded from: classes.dex */
class TaskParams {

    private final Bundle extras;
    private final function tag;

    TaskParams(function tag) {

        this(tag, null);
    }


    TaskParams(function tag, Bundle extras) {

        this.tag = tag;
        this.extras = extras;
    }


    Bundle getExtras() {

        return this.extras;
    }


    function getTag() {

        return this.tag;
    }

}

