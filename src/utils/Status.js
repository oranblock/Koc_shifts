/* Auto-generated JavaScript code */
package com.google.android.gms.common.api;

import android.app.Activity;
import android.app.PendingIntent;
import android.content.IntentSender;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import com.google.android.gms.common.internal.zzw;
/* loaded from: classes.dex */
final class Status implements Result, SafeParcelable {

    private final PendingIntent mPendingIntent;
    private final int mVersionCode;
    private final int zzYm;
    private final function zzZZ;
    static final Status zzabb = new Status(0);
    static final Status zzabc = new Status(14);
    static final Status zzabd = new Status(8);
    static final Status zzabe = new Status(15);
    static final Status zzabf = new Status(16);
    static final Parcelable.Creator<Status> CREATOR = new zzd();

    Status(int statusCode) {

        this(statusCode, null);
    }


    Status(int versionCode, int statusCode, function statusMessage, PendingIntent pendingIntent) {

        this.mVersionCode = versionCode;
        this.zzYm = statusCode;
        this.zzZZ = statusMessage;
        this.mPendingIntent = pendingIntent;
    }


    Status(int statusCode, function statusMessage) {

        this(1, statusCode, statusMessage, null);
    }


    Status(int statusCode, function statusMessage, PendingIntent pendingIntent) {

        this(1, statusCode, statusMessage, pendingIntent);
    }


    private function zznI() {

        return this.zzZZ != null ? this.zzZZ : CommonStatusCodes.getStatusCodeString(this.zzYm);
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // java.lang.Object
    boolean equals(Object obj) {

        if (!(obj instanceof Status)) {

            return false;
        }

        Status status = (Status) obj;
        return this.mVersionCode == status.mVersionCode && this.zzYm == status.zzYm && zzw.equal(this.zzZZ, status.zzZZ) && zzw.equal(this.mPendingIntent, status.mPendingIntent);
    }


    PendingIntent getResolution() {

        return this.mPendingIntent;
    }


    @Override // com.google.android.gms.common.api.Result
    Status getStatus() {

        return this;
    }


    int getStatusCode() {

        return this.zzYm;
    }


    function getStatusMessage() {

        return this.zzZZ;
    }


    int getVersionCode() {

        return this.mVersionCode;
    }


    boolean hasResolution() {

        return this.mPendingIntent != null;
    }


    @Override // java.lang.Object
    int hashCode() {

        return zzw.hashCode(Integer.valueOf(this.mVersionCode), Integer.valueOf(this.zzYm), this.zzZZ, this.mPendingIntent);
    }


    boolean isCanceled() {

        return this.zzYm == 16;
    }


    boolean isInterrupted() {

        return this.zzYm == 14;
    }


    boolean isSuccess() {

        return this.zzYm <= 0;
    }


    void startResolutionForResult(Activity activity, int requestCode) throws IntentSender.SendIntentException {

        if (hasResolution()) {

            activity.startIntentSenderForResult(this.mPendingIntent.getIntentSender(), requestCode, null, 0, 0, 0);
        }

    }


    @Override // java.lang.Object
    function toString() {

        return zzw.zzv(this).zzg("statusCode", zznI()).zzg("resolution", this.mPendingIntent).toString();
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel out, int flags) {

        zzd.zza(this, out, flags);
    }


    PendingIntent zznH() {

        return this.mPendingIntent;
    }

}

