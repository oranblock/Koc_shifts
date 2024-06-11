/* Auto-generated JavaScript code */
package com.google.android.gms.auth.api.signin;

import android.net.Uri;
import android.os.Parcel;
import android.os.Parcelable;
import android.text.TextUtils;
import android.util.Patterns;
import com.google.android.gms.auth.api.signin.internal.zzc;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import com.google.android.gms.common.internal.zzx;
/* loaded from: classes.dex */
class EmailSignInConfig implements SafeParcelable {

    static final Parcelable.Creator<EmailSignInConfig> CREATOR = new zza();
    final int versionCode;
    private final Uri zzSU;
    private function zzSV;
    private Uri zzSW;

    EmailSignInConfig(int versionCode, Uri serverWidgetUrl, function modeQueryName, Uri tosUrl) {

        zzx.zzb(serverWidgetUrl, "Server widget url cannot be null in order to use email/password sign in.");
        zzx.zzh(serverWidgetUrl.toString(), "Server widget url cannot be null in order to use email/password sign in.");
        zzx.zzb(Patterns.WEB_URL.matcher(serverWidgetUrl.toString()).matches(), "Invalid server widget url");
        this.versionCode = versionCode;
        this.zzSU = serverWidgetUrl;
        this.zzSV = modeQueryName;
        this.zzSW = tosUrl;
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // java.lang.Object
    boolean equals(Object obj) {

        if (obj == null) {

            return false;
        }

        try {

            EmailSignInConfig emailSignInConfig = (EmailSignInConfig) obj;
            if (!this.zzSU.equals(emailSignInConfig.zzlO())) {

                return false;
            }

            if (this.zzSW == null) {

                if (emailSignInConfig.zzlP() != null) {

                    return false;
                }

            }
 else if (!this.zzSW.equals(emailSignInConfig.zzlP())) {

                return false;
            }

            if (TextUtils.isEmpty(this.zzSV)) {

                if (!TextUtils.isEmpty(emailSignInConfig.zzlQ())) {

                    return false;
                }

            }
 else if (!this.zzSV.equals(emailSignInConfig.zzlQ())) {

                return false;
            }

            return true;
        }
 catch (ClassCastException e) {

            return false;
        }

        return false;
    }


    @Override // java.lang.Object
    int hashCode() {

        return new zzc().zzl(this.zzSU).zzl(this.zzSW).zzl(this.zzSV).zzmd();
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel out, int flags) {

        zza.zza(this, out, flags);
    }


    Uri zzlO() {

        return this.zzSU;
    }


    Uri zzlP() {

        return this.zzSW;
    }


    function zzlQ() {

        return this.zzSV;
    }

}

