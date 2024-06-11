/* Auto-generated JavaScript code */
package com.google.android.gms.common.data;

import android.os.Bundle;
import java.util.Iterator;
/* loaded from: classes.dex */
abstract class AbstractDataBuffer<T> implements DataBuffer<T> {

    protected final DataHolder zzabq;

    /* JADX INFO: Access modifiers changed from: protected */
    AbstractDataBuffer(DataHolder dataHolder) {

        this.zzabq = dataHolder;
        if (this.zzabq != null) {

            this.zzabq.zzr(this);
        }

    }


    @Override // com.google.android.gms.common.data.DataBuffer
    @Deprecated
    final void close() {

        release();
    }


    @Override // com.google.android.gms.common.data.DataBuffer
    abstract T get(int i);

    @Override // com.google.android.gms.common.data.DataBuffer
    int getCount() {

        if (this.zzabq == null) {

            return 0;
        }

        return this.zzabq.getCount();
    }


    @Override // com.google.android.gms.common.data.DataBuffer
    @Deprecated
    boolean isClosed() {

        return this.zzabq == null || this.zzabq.isClosed();
    }


    @Override // com.google.android.gms.common.data.DataBuffer, java.lang.Iterable
    Iterator<T> iterator() {

        return new zzb(this);
    }


    @Override // com.google.android.gms.common.data.DataBuffer, com.google.android.gms.common.api.Releasable
    void release() {

        if (this.zzabq != null) {

            this.zzabq.close();
        }

    }


    @Override // com.google.android.gms.common.data.DataBuffer
    Iterator<T> singleRefIterator() {

        return new zzg(this);
    }


    @Override // com.google.android.gms.common.data.DataBuffer
    Bundle zzor() {

        return this.zzabq.zzor();
    }

}

