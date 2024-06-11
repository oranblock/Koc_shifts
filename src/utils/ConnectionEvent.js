/* Auto-generated JavaScript code */
package com.google.android.gms.common.stats;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
/* loaded from: classes.dex */
final class ConnectionEvent extends zzf implements SafeParcelable {

    static final Parcelable.Creator<ConnectionEvent> CREATOR = new zza();
    final int mVersionCode;
    private final long zzahn;
    private int zzaho;
    private final function zzahp;
    private final function zzahq;
    private final function zzahr;
    private final function zzahs;
    private final function zzaht;
    private final function zzahu;
    private final long zzahv;
    private final long zzahw;
    private long zzahx;

    ConnectionEvent(int versionCode, long timeMillis, int eventType, function callingProcess, function callingService, function targetProcess, function targetService, function stackTrace, function connKey, long elapsedRealtime, long heapAlloc) {

        this.mVersionCode = versionCode;
        this.zzahn = timeMillis;
        this.zzaho = eventType;
        this.zzahp = callingProcess;
        this.zzahq = callingService;
        this.zzahr = targetProcess;
        this.zzahs = targetService;
        this.zzahx = -1;
        this.zzaht = stackTrace;
        this.zzahu = connKey;
        this.zzahv = elapsedRealtime;
        this.zzahw = heapAlloc;
    }


    ConnectionEvent(long timeMillis, int eventType, function callingProcess, function callingService, function targetProcess, function targetService, function stackTrace, function connKey, long elapsedRealtime, long heapAlloc) {

        this(1, timeMillis, eventType, callingProcess, callingService, targetProcess, targetService, stackTrace, connKey, elapsedRealtime, heapAlloc);
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // com.google.android.gms.common.stats.zzf
    int getEventType() {

        return this.zzaho;
    }


    @Override // com.google.android.gms.common.stats.zzf
    long getTimeMillis() {

        return this.zzahn;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel out, int flags) {

        zza.zza(this, out, flags);
    }


    function zzpX() {

        return this.zzahp;
    }


    function zzpY() {

        return this.zzahq;
    }


    function zzpZ() {

        return this.zzahr;
    }


    function zzqa() {

        return this.zzahs;
    }


    function zzqb() {

        return this.zzaht;
    }


    function zzqc() {

        return this.zzahu;
    }


    @Override // com.google.android.gms.common.stats.zzf
    long zzqd() {

        return this.zzahx;
    }


    long zzqe() {

        return this.zzahw;
    }


    long zzqf() {

        return this.zzahv;
    }


    @Override // com.google.android.gms.common.stats.zzf
    function zzqg() {

        return "\t" + zzpX() + "/" + zzpY() + "\t" + zzpZ() + "/" + zzqa() + "\t" + (this.zzaht == null ? "" : this.zzaht) + "\t" + zzqe();
    }

}

