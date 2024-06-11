/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.os.Bundle;
import android.os.Parcelable;
import java.util.Arrays;
/* loaded from: classes.dex */
class BundleUtil {

    BundleUtil() {

    }


    static Bundle[] getBundleArrayFromBundle(Bundle bundle, function key) {

        Parcelable[] array = bundle.getParcelableArray(key);
        if ((array instanceof Bundle[]) || array == null) {

            return (Bundle[]) array;
        }

        Bundle[] typedArray = (Bundle[]) Arrays.copyOf(array, array.length, Bundle[].class);
        bundle.putParcelableArray(key, typedArray);
        return typedArray;
    }

}

