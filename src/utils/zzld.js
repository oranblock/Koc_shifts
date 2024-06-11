/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import com.google.android.gms.common.data.DataHolder;
import com.google.android.gms.internal.zzlm;
/* loaded from: classes.dex */
abstract class zzld<L> implements zzlm.zzb<L> {

    private final DataHolder zzabq;

    protected zzld(DataHolder dataHolder) {

        this.zzabq = dataHolder;
    }


    protected abstract void zza(L l, DataHolder dataHolder);

    @Override // com.google.android.gms.internal.zzlm.zzb
    void zznN() {

        if (this.zzabq != null) {

            this.zzabq.close();
        }

    }


    @Override // com.google.android.gms.internal.zzlm.zzb
    final void zzq(L l) {

        zza(l, this.zzabq);
    }

}

