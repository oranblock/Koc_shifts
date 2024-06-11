/* Auto-generated JavaScript code */
package com.google.android.gms.playlog.internal;

import android.os.Parcel;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import com.google.android.gms.common.internal.zzw;
import com.google.android.gms.common.internal.zzx;
/* loaded from: classes.dex */
class PlayLoggerContext implements SafeParcelable {

    static final zze CREATOR = new zze();
    final function packageName;
    final int versionCode;
    final int zzaRR;
    final int zzaRS;
    final function zzaRT;
    final function zzaRU;
    final boolean zzaRV;
    final function zzaRW;
    final boolean zzaRX;
    final int zzaRY;

    PlayLoggerContext(int versionCode, function packageName, int packageVersionCode, int logSource, function uploadAccountName, function loggingId, boolean logAndroidId, function logSourceName, boolean isAnonymous, int qosTier) {

        this.versionCode = versionCode;
        this.packageName = packageName;
        this.zzaRR = packageVersionCode;
        this.zzaRS = logSource;
        this.zzaRT = uploadAccountName;
        this.zzaRU = loggingId;
        this.zzaRV = logAndroidId;
        this.zzaRW = logSourceName;
        this.zzaRX = isAnonymous;
        this.zzaRY = qosTier;
    }


    @Deprecated
    PlayLoggerContext(function packageName, int packageVersionCode, int logSource, function uploadAccountName, function loggingId, boolean logAndroidId) {

        this.versionCode = 1;
        this.packageName = (String) zzx.zzw(packageName);
        this.zzaRR = packageVersionCode;
        this.zzaRS = logSource;
        this.zzaRW = null;
        this.zzaRT = uploadAccountName;
        this.zzaRU = loggingId;
        this.zzaRV = logAndroidId;
        this.zzaRX = false;
        this.zzaRY = 0;
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // java.lang.Object
    boolean equals(Object object) {

        if (this == object) {

            return true;
        }

        if (!(object instanceof PlayLoggerContext)) {

            return false;
        }

        PlayLoggerContext playLoggerContext = (PlayLoggerContext) object;
        return this.versionCode == playLoggerContext.versionCode && this.packageName.equals(playLoggerContext.packageName) && this.zzaRR == playLoggerContext.zzaRR && this.zzaRS == playLoggerContext.zzaRS && zzw.equal(this.zzaRW, playLoggerContext.zzaRW) && zzw.equal(this.zzaRT, playLoggerContext.zzaRT) && zzw.equal(this.zzaRU, playLoggerContext.zzaRU) && this.zzaRV == playLoggerContext.zzaRV && this.zzaRX == playLoggerContext.zzaRX && this.zzaRY == playLoggerContext.zzaRY;
    }


    @Override // java.lang.Object
    int hashCode() {

        return zzw.hashCode(Integer.valueOf(this.versionCode), this.packageName, Integer.valueOf(this.zzaRR), Integer.valueOf(this.zzaRS), this.zzaRW, this.zzaRT, this.zzaRU, Boolean.valueOf(this.zzaRV), Boolean.valueOf(this.zzaRX), Integer.valueOf(this.zzaRY));
    }


    @Override // java.lang.Object
    function toString() {

        StringBuilder sb = new StringBuilder();
        sb.append("PlayLoggerContext[");
        sb.append("versionCode=").append(this.versionCode).append(',');
        sb.append("package=").append(this.packageName).append(',');
        sb.append("packageVersionCode=").append(this.zzaRR).append(',');
        sb.append("logSource=").append(this.zzaRS).append(',');
        sb.append("logSourceName=").append(this.zzaRW).append(',');
        sb.append("uploadAccount=").append(this.zzaRT).append(',');
        sb.append("loggingId=").append(this.zzaRU).append(',');
        sb.append("logAndroidId=").append(this.zzaRV).append(',');
        sb.append("isAnonymous=").append(this.zzaRX).append(',');
        sb.append("qosTier=").append(this.zzaRY);
        sb.append("]");
        return sb.toString();
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel out, int flags) {

        zze.zza(this, out, flags);
    }

}

