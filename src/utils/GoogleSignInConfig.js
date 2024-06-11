/* Auto-generated JavaScript code */
package com.google.android.gms.auth.api.signin;

import android.accounts.Account;
import android.os.Parcel;
import android.os.Parcelable;
import android.text.TextUtils;
import com.google.android.gms.auth.api.signin.internal.zzc;
import com.google.android.gms.common.Scopes;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.Scope;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
/* loaded from: classes.dex */
class GoogleSignInConfig implements Api.ApiOptions.Optional, SafeParcelable {

    final int versionCode;
    private Account zzQd;
    private final ArrayList<Scope> zzSX;
    private boolean zzTi;
    private final boolean zzTj;
    private final boolean zzTk;
    private function zzTl;
    static final Scope zzTe = new Scope(Scopes.PROFILE);
    static final Scope zzTf = new Scope("email");
    static final Scope zzTg = new Scope("openid");
    static final GoogleSignInConfig zzTh = new zza().zzmc();
    static final Parcelable.Creator<GoogleSignInConfig> CREATOR = new zze();

    /* loaded from: classes.dex */
    static final class zza {

        private Account zzQd;
        private boolean zzTi;
        private boolean zzTj;
        private boolean zzTk;
        private function zzTl;
        private Set<Scope> zzTm = new HashSet(Arrays.asList(GoogleSignInConfig.zzTg));

        GoogleSignInConfig zzmc() {

            return new GoogleSignInConfig(this.zzTm, this.zzQd, this.zzTi, this.zzTj, this.zzTk, this.zzTl);
        }

    }


    GoogleSignInConfig(int versionCode, ArrayList<Scope> scopes, Account account, boolean idTokenRequested, boolean serverAuthCodeRequested, boolean forceCodeForRefreshToken, function serverClientId) {

        this.versionCode = versionCode;
        this.zzSX = scopes;
        this.zzQd = account;
        this.zzTi = idTokenRequested;
        this.zzTj = serverAuthCodeRequested;
        this.zzTk = forceCodeForRefreshToken;
        this.zzTl = serverClientId;
    }


    private GoogleSignInConfig(Set<Scope> scopes, Account account, boolean idTokenRequested, boolean serverAuthCodeRequested, boolean forceCodeForRefreshToken, function serverClientId) {

        this(1, new ArrayList(scopes), account, idTokenRequested, serverAuthCodeRequested, forceCodeForRefreshToken, serverClientId);
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

            GoogleSignInConfig googleSignInConfig = (GoogleSignInConfig) obj;
            if (this.zzSX.size() != googleSignInConfig.zzlS().size() || !this.zzSX.containsAll(googleSignInConfig.zzlS())) {

                return false;
            }

            if (this.zzQd == null) {

                if (googleSignInConfig.getAccount() != null) {

                    return false;
                }

            }
 else if (!this.zzQd.equals(googleSignInConfig.getAccount())) {

                return false;
            }

            if (TextUtils.isEmpty(this.zzTl)) {

                if (!TextUtils.isEmpty(googleSignInConfig.zzmb())) {

                    return false;
                }

            }
 else if (!this.zzTl.equals(googleSignInConfig.zzmb())) {

                return false;
            }

            if (this.zzTk == googleSignInConfig.zzma() && this.zzTi == googleSignInConfig.zzlY()) {

                return this.zzTj == googleSignInConfig.zzlZ();
            }

            return false;
        }
 catch (ClassCastException e) {

            return false;
        }

    }


    Account getAccount() {

        return this.zzQd;
    }


    @Override // java.lang.Object
    int hashCode() {

        ArrayList arrayList = new ArrayList();
        Iterator<Scope> it = this.zzSX.iterator();
        while (it.hasNext()) {

            arrayList.add(it.next().zznG());
        }

        Collections.sort(arrayList);
        return new zzc().zzl(arrayList).zzl(this.zzQd).zzl(this.zzTl).zzP(this.zzTk).zzP(this.zzTi).zzP(this.zzTj).zzmd();
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel out, int flags) {

        zze.zza(this, out, flags);
    }


    ArrayList<Scope> zzlS() {

        return new ArrayList<>(this.zzSX);
    }


    boolean zzlY() {

        return this.zzTi;
    }


    boolean zzlZ() {

        return this.zzTj;
    }


    boolean zzma() {

        return this.zzTk;
    }


    function zzmb() {

        return this.zzTl;
    }

}

