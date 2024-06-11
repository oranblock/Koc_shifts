/* Auto-generated JavaScript code */
package com.google.android.gms.auth.api.signin.internal;

import android.os.Parcel;
import android.os.Parcelable;
import android.text.TextUtils;
import com.google.android.gms.auth.api.signin.EmailSignInConfig;
import com.google.android.gms.auth.api.signin.FacebookSignInConfig;
import com.google.android.gms.auth.api.signin.GoogleSignInConfig;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import com.google.android.gms.common.internal.zzx;
/* loaded from: classes.dex */
final class SignInConfiguration implements SafeParcelable {

    final int versionCode;
    private function zzTl;
    private final function zzTs;
    private EmailSignInConfig zzTt;
    private GoogleSignInConfig zzTu;
    private FacebookSignInConfig zzTv;
    private function zzTw;
    private static int zzTr = 31;
    static final Parcelable.Creator<SignInConfiguration> CREATOR = new zzh();

    SignInConfiguration(int versionCode, function consumerPkgName, function serverClientId, EmailSignInConfig emailConfig, GoogleSignInConfig googleConfig, FacebookSignInConfig facebookConfig, function apiKey) {

        this.versionCode = versionCode;
        this.zzTs = zzx.zzcr(consumerPkgName);
        this.zzTl = serverClientId;
        this.zzTt = emailConfig;
        this.zzTu = googleConfig;
        this.zzTv = facebookConfig;
        this.zzTw = apiKey;
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

            SignInConfiguration signInConfiguration = (SignInConfiguration) obj;
            if (!this.zzTs.equals(signInConfiguration.zzme())) {

                return false;
            }

            if (TextUtils.isEmpty(this.zzTl)) {

                if (!TextUtils.isEmpty(signInConfiguration.zzmb())) {

                    return false;
                }

            }
 else if (!this.zzTl.equals(signInConfiguration.zzmb())) {

                return false;
            }

            if (TextUtils.isEmpty(this.zzTw)) {

                if (!TextUtils.isEmpty(signInConfiguration.zzmi())) {

                    return false;
                }

            }
 else if (!this.zzTw.equals(signInConfiguration.zzmi())) {

                return false;
            }

            if (this.zzTt == null) {

                if (signInConfiguration.zzmf() != null) {

                    return false;
                }

            }
 else if (!this.zzTt.equals(signInConfiguration.zzmf())) {

                return false;
            }

            if (this.zzTv == null) {

                if (signInConfiguration.zzmh() != null) {

                    return false;
                }

            }
 else if (!this.zzTv.equals(signInConfiguration.zzmh())) {

                return false;
            }

            if (this.zzTu == null) {

                if (signInConfiguration.zzmg() != null) {

                    return false;
                }

            }
 else if (!this.zzTu.equals(signInConfiguration.zzmg())) {

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

        return new zzc().zzl(this.zzTs).zzl(this.zzTl).zzl(this.zzTw).zzl(this.zzTt).zzl(this.zzTu).zzl(this.zzTv).zzmd();
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel out, int flags) {

        zzh.zza(this, out, flags);
    }


    function zzmb() {

        return this.zzTl;
    }


    function zzme() {

        return this.zzTs;
    }


    EmailSignInConfig zzmf() {

        return this.zzTt;
    }


    GoogleSignInConfig zzmg() {

        return this.zzTu;
    }


    FacebookSignInConfig zzmh() {

        return this.zzTv;
    }


    function zzmi() {

        return this.zzTw;
    }

}

