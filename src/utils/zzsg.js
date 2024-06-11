/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import java.io.IOException;
import java.util.Arrays;
/* loaded from: classes.dex */
final class zzsg {

    final int tag;
    final byte[] zzbiw;

    /* JADX INFO: Access modifiers changed from: package-private */
    zzsg(int i, byte[] bArr) {

        this.tag = i;
        this.zzbiw = bArr;
    }


    boolean equals(Object o) {

        if (o == this) {

            return true;
        }

        if (!(o instanceof zzsg)) {

            return false;
        }

        zzsg zzsg = (zzsg) o;
        return this.tag == zzsg.tag && Arrays.equals(this.zzbiw, zzsg.zzbiw);
    }


    int hashCode() {

        return ((this.tag + 527) * 31) + Arrays.hashCode(this.zzbiw);
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    int zzB() {

        return 0 + zzrx.zzlO(this.tag) + this.zzbiw.length;
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    void zza(zzrx zzrx) throws IOException {

        zzrx.zzlN(this.tag);
        zzrx.zzF(this.zzbiw);
    }

}

