/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.RemoteInput;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.RemoteInputCompatBase;
/* loaded from: classes.dex */
class RemoteInputCompatApi20 {

    RemoteInputCompatApi20() {

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static RemoteInputCompatBase.RemoteInput[] toCompat(RemoteInput[] srcArray, RemoteInputCompatBase.RemoteInput.Factory factory) {

        if (srcArray == null) {

            return null;
        }

        RemoteInputCompatBase.RemoteInput[] result = factory.newArray(srcArray.length);
        for (int i = 0; i < srcArray.length; i++) {

            RemoteInput src = srcArray[i];
            result[i] = factory.build(src.getResultKey(), src.getLabel(), src.getChoices(), src.getAllowFreeFormInput(), src.getExtras());
        }

        return result;
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static RemoteInput[] fromCompat(RemoteInputCompatBase.RemoteInput[] srcArray) {

        if (srcArray == null) {

            return null;
        }

        RemoteInput[] result = new RemoteInput[srcArray.length];
        for (int i = 0; i < srcArray.length; i++) {

            RemoteInputCompatBase.RemoteInput src = srcArray[i];
            result[i] = new RemoteInput.Builder(src.getResultKey()).setLabel(src.getLabel()).setChoices(src.getChoices()).setAllowFreeFormInput(src.getAllowFreeFormInput()).addExtras(src.getExtras()).build();
        }

        return result;
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static Bundle getResultsFromIntent(Intent intent) {

        return RemoteInput.getResultsFromIntent(intent);
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    static void addResultsToIntent(RemoteInputCompatBase.RemoteInput[] remoteInputs, Intent intent, Bundle results) {

        RemoteInput.addResultsToIntent(fromCompat(remoteInputs), intent, results);
    }

}

