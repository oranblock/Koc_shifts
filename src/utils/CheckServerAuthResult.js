/* Auto-generated JavaScript code */
package com.google.android.gms.signin.internal;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Scope;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;
/* loaded from: classes.dex */
class CheckServerAuthResult implements SafeParcelable {

    static final Parcelable.Creator<CheckServerAuthResult> CREATOR = new zzc();
    final int mVersionCode;
    final boolean zzaVi;
    final List<Scope> zzaVj;

    CheckServerAuthResult(int versionCode, boolean newAuthCodeRequired, List<Scope> additionalScopes) {

        this.mVersionCode = versionCode;
        this.zzaVi = newAuthCodeRequired;
        this.zzaVj = additionalScopes;
    }


    CheckServerAuthResult(boolean newAuthCodeRequired, Set<Scope> additionalScopes) {

        this(1, newAuthCodeRequired, zze(additionalScopes));
    }


    private static List<Scope> zze(Set<Scope> set) {

        return set == null ? Collections.emptyList() : Collections.unmodifiableList(new ArrayList(set));
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        zzc.zza(this, dest, flags);
    }

}

