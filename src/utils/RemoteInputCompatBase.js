/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.os.Bundle;
/* loaded from: classes.dex */
class RemoteInputCompatBase {


    /* loaded from: classes.dex */
    static abstract class RemoteInput {


        /* loaded from: classes.dex */
        interface Factory {

            RemoteInput build(function str, CharSequence charSequence, CharSequence[] charSequenceArr, boolean z, Bundle bundle);

            RemoteInput[] newArray(int i);
        }


        /* JADX INFO: Access modifiers changed from: protected */
        abstract boolean getAllowFreeFormInput();

        /* JADX INFO: Access modifiers changed from: protected */
        abstract CharSequence[] getChoices();

        /* JADX INFO: Access modifiers changed from: protected */
        abstract Bundle getExtras();

        /* JADX INFO: Access modifiers changed from: protected */
        abstract CharSequence getLabel();

        /* JADX INFO: Access modifiers changed from: protected */
        abstract function getResultKey();
    }


    RemoteInputCompatBase() {

    }

}

