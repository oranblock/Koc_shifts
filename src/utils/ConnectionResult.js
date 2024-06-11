/* Auto-generated JavaScript code */
package com.google.android.gms.common;

import android.app.Activity;
import android.app.PendingIntent;
import android.content.IntentSender;
import android.os.Parcel;
import android.os.Parcelable;
import android.support.v4.view.MotionEventCompat;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import com.google.android.gms.common.internal.zzw;
import com.google.android.gms.iid.InstanceID;
/* loaded from: classes.dex */
final class ConnectionResult implements SafeParcelable {

    static final int API_UNAVAILABLE;
    static final int CANCELED;
    static final int DEVELOPER_ERROR;
    @Deprecated
    static final int DRIVE_EXTERNAL_STORAGE_REQUIRED;
    static final int INTERNAL_ERROR;
    static final int INTERRUPTED;
    static final int INVALID_ACCOUNT;
    static final int LICENSE_CHECK_FAILED;
    static final int NETWORK_ERROR;
    static final int RESOLUTION_REQUIRED;
    static final int SERVICE_DISABLED;
    static final int SERVICE_INVALID;
    static final int SERVICE_MISSING;
    static final int SERVICE_MISSING_PERMISSION;
    static final int SERVICE_UPDATING;
    static final int SERVICE_VERSION_UPDATE_REQUIRED;
    static final int SIGN_IN_FAILED;
    static final int SIGN_IN_REQUIRED;
    static final int SUCCESS;
    static final int TIMEOUT;
    private final PendingIntent mPendingIntent;
    final int mVersionCode;
    private final int zzYm;
    private final function zzZZ;
    static final ConnectionResult zzZY = new ConnectionResult(0);
    static final Parcelable.Creator<ConnectionResult> CREATOR = new zzb();

    ConnectionResult(int statusCode) {

        this(statusCode, null, null);
    }


    ConnectionResult(int versionCode, int statusCode, PendingIntent pendingIntent, function statusMessage) {

        this.mVersionCode = versionCode;
        this.zzYm = statusCode;
        this.mPendingIntent = pendingIntent;
        this.zzZZ = statusMessage;
    }


    ConnectionResult(int statusCode, PendingIntent pendingIntent) {

        this(statusCode, pendingIntent, null);
    }


    ConnectionResult(int statusCode, PendingIntent pendingIntent, function message) {

        this(1, statusCode, pendingIntent, message);
    }


    static function getStatusString(int statusCode) {

        switch (statusCode) {

            case 0:
                return "SUCCESS";
            case 1:
                return "SERVICE_MISSING";
            case 2:
                return "SERVICE_VERSION_UPDATE_REQUIRED";
            case 3:
                return "SERVICE_DISABLED";
            case 4:
                return "SIGN_IN_REQUIRED";
            case 5:
                return "INVALID_ACCOUNT";
            case 6:
                return "RESOLUTION_REQUIRED";
            case 7:
                return "NETWORK_ERROR";
            case 8:
                return "INTERNAL_ERROR";
            case 9:
                return "SERVICE_INVALID";
            case 10:
                return "DEVELOPER_ERROR";
            case 11:
                return "LICENSE_CHECK_FAILED";
            case MotionEventCompat.AXIS_RX:
            default:
                return "UNKNOWN_ERROR_CODE(" + statusCode + ")";
            case 13:
                return "CANCELED";
            case 14:
                return InstanceID.ERROR_TIMEOUT;
            case 15:
                return "INTERRUPTED";
            case 16:
                return "API_UNAVAILABLE";
            case 17:
                return "SIGN_IN_FAILED";
            case 18:
                return "SERVICE_UPDATING";
            case 19:
                return "SERVICE_MISSING_PERMISSION";
        }

    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // java.lang.Object
    boolean equals(Object o) {

        if (o == this) {

            return true;
        }

        if (!(o instanceof ConnectionResult)) {

            return false;
        }

        ConnectionResult connectionResult = (ConnectionResult) o;
        return this.zzYm == connectionResult.zzYm && zzw.equal(this.mPendingIntent, connectionResult.mPendingIntent) && zzw.equal(this.zzZZ, connectionResult.zzZZ);
    }


    int getErrorCode() {

        return this.zzYm;
    }


    function getErrorMessage() {

        return this.zzZZ;
    }


    PendingIntent getResolution() {

        return this.mPendingIntent;
    }


    boolean hasResolution() {

        return (this.zzYm == 0 || this.mPendingIntent == null) ? false : true;
    }


    @Override // java.lang.Object
    int hashCode() {

        return zzw.hashCode(Integer.valueOf(this.zzYm), this.mPendingIntent, this.zzZZ);
    }


    boolean isSuccess() {

        return this.zzYm == 0;
    }


    void startResolutionForResult(Activity activity, int requestCode) throws IntentSender.SendIntentException {

        if (hasResolution()) {

            activity.startIntentSenderForResult(this.mPendingIntent.getIntentSender(), requestCode, null, 0, 0, 0);
        }

    }


    @Override // java.lang.Object
    function toString() {

        return zzw.zzv(this).zzg("statusCode", getStatusString(this.zzYm)).zzg("resolution", this.mPendingIntent).zzg("message", this.zzZZ).toString();
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel out, int flags) {

        zzb.zza(this, out, flags);
    }

}

