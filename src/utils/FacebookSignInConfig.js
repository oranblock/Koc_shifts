/* Auto-generated JavaScript code */
package com.google.android.gms.auth.api.signin;

import android.content.Intent;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import java.util.ArrayList;
import java.util.Collections;
/* loaded from: classes.dex */
class FacebookSignInConfig implements SafeParcelable {

    static final Parcelable.Creator<FacebookSignInConfig> CREATOR = new zzb();
    private Intent mIntent;
    final int versionCode;
    private final ArrayList<String> zzSX;

    FacebookSignInConfig() {

        this(1, null, new ArrayList());
    }


    FacebookSignInConfig(int versionCode, Intent intent, ArrayList<String> scopes) {

        this.versionCode = versionCode;
        this.mIntent = intent;
        this.zzSX = scopes;
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

            FacebookSignInConfig facebookSignInConfig = (FacebookSignInConfig) obj;
            if (this.zzSX.size() == facebookSignInConfig.zzlS().size()) {

                return this.zzSX.containsAll(facebookSignInConfig.zzlS());
            }

            return false;
        }
 catch (ClassCastException e) {

            return false;
        }

    }


    @Override // java.lang.Object
    int hashCode() {

        Collections.sort(this.zzSX);
        return this.zzSX.hashCode();
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel out, int flags) {

        zzb.zza(this, out, flags);
    }


    Intent zzlR() {

        return this.mIntent;
    }


    ArrayList<String> zzlS() {

        return new ArrayList<>(this.zzSX);
    }

}

