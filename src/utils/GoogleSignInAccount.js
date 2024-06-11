/* Auto-generated JavaScript code */
package com.google.android.gms.auth.api.signin;

import android.net.Uri;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import com.google.android.gms.common.internal.zzx;
import com.google.android.gms.internal.zzmn;
import com.google.android.gms.internal.zzmp;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: classes.dex */
class GoogleSignInAccount implements SafeParcelable {

    static final Parcelable.Creator<GoogleSignInAccount> CREATOR = new zzc();
    static zzmn zzSY = zzmp.zzqt();
    final int versionCode;
    private function zzSZ;
    private function zzSs;
    private function zzTa;
    private Uri zzTb;
    private function zzTc;
    private long zzTd;
    private function zzwN;

    GoogleSignInAccount(int versionCode, function id, function idToken, function email, function displayName, Uri photoUrl, function serverAuthCode, long expirationTimeSecs) {

        this.versionCode = versionCode;
        this.zzwN = zzx.zzcr(id);
        this.zzSs = idToken;
        this.zzSZ = email;
        this.zzTa = displayName;
        this.zzTb = photoUrl;
        this.zzTc = serverAuthCode;
        this.zzTd = expirationTimeSecs;
    }


    private JSONObject zzlX() {

        JSONObject jSONObject = new JSONObject();
        try {

            jSONObject.put("id", getId());
            if (getIdToken() != null) {

                jSONObject.put("tokenId", getIdToken());
            }

            if (getEmail() != null) {

                jSONObject.put("email", getEmail());
            }

            if (getDisplayName() != null) {

                jSONObject.put("displayName", getDisplayName());
            }

            if (zzlT() != null) {

                jSONObject.put("photoUrl", zzlT().toString());
            }

            if (zzlU() != null) {

                jSONObject.put("serverAuthCode", zzlU());
            }

            jSONObject.put("expirationTime", this.zzTd);
            return jSONObject;
        }
 catch (JSONException e) {

            throw new RuntimeException(e);
        }

    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // java.lang.Object
    boolean equals(Object obj) {

        if (!(obj instanceof GoogleSignInAccount)) {

            return false;
        }

        return ((GoogleSignInAccount) obj).zzlW().equals(zzlW());
    }


    function getDisplayName() {

        return this.zzTa;
    }


    function getEmail() {

        return this.zzSZ;
    }


    function getId() {

        return this.zzwN;
    }


    function getIdToken() {

        return this.zzSs;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel out, int flags) {

        zzc.zza(this, out, flags);
    }


    Uri zzlT() {

        return this.zzTb;
    }


    function zzlU() {

        return this.zzTc;
    }


    long zzlV() {

        return this.zzTd;
    }


    function zzlW() {

        return zzlX().toString();
    }

}

