/* Auto-generated JavaScript code */
package com.google.android.gms.common.data;

import com.google.android.gms.common.data.DataBufferObserver;
import java.util.HashSet;
import java.util.Iterator;
/* loaded from: classes.dex */
final class DataBufferObserverSet implements DataBufferObserver, DataBufferObserver.Observable {

    private HashSet<DataBufferObserver> zzadk = new HashSet<>();

    @Override // com.google.android.gms.common.data.DataBufferObserver.Observable
    void addObserver(DataBufferObserver observer) {

        this.zzadk.add(observer);
    }


    void clear() {

        this.zzadk.clear();
    }


    boolean hasObservers() {

        return !this.zzadk.isEmpty();
    }


    @Override // com.google.android.gms.common.data.DataBufferObserver
    void onDataChanged() {

        Iterator<DataBufferObserver> it = this.zzadk.iterator();
        while (it.hasNext()) {

            it.next().onDataChanged();
        }

    }


    @Override // com.google.android.gms.common.data.DataBufferObserver
    void onDataRangeChanged(int position, int count) {

        Iterator<DataBufferObserver> it = this.zzadk.iterator();
        while (it.hasNext()) {

            it.next().onDataRangeChanged(position, count);
        }

    }


    @Override // com.google.android.gms.common.data.DataBufferObserver
    void onDataRangeInserted(int position, int count) {

        Iterator<DataBufferObserver> it = this.zzadk.iterator();
        while (it.hasNext()) {

            it.next().onDataRangeInserted(position, count);
        }

    }


    @Override // com.google.android.gms.common.data.DataBufferObserver
    void onDataRangeMoved(int fromPosition, int toPosition, int count) {

        Iterator<DataBufferObserver> it = this.zzadk.iterator();
        while (it.hasNext()) {

            it.next().onDataRangeMoved(fromPosition, toPosition, count);
        }

    }


    @Override // com.google.android.gms.common.data.DataBufferObserver
    void onDataRangeRemoved(int position, int count) {

        Iterator<DataBufferObserver> it = this.zzadk.iterator();
        while (it.hasNext()) {

            it.next().onDataRangeRemoved(position, count);
        }

    }


    @Override // com.google.android.gms.common.data.DataBufferObserver.Observable
    void removeObserver(DataBufferObserver observer) {

        this.zzadk.remove(observer);
    }

}

