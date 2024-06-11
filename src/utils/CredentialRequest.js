/* Auto-generated JavaScript code */
package com.google.android.gms.auth.api.credentials;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.auth.api.credentials.CredentialPickerConfig;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import com.google.android.gms.common.internal.zzx;
/* loaded from: classes.dex */
final class CredentialRequest implements SafeParcelable {

    static final Parcelable.Creator<CredentialRequest> CREATOR = new zzc();
    final int mVersionCode;
    private final boolean zzSo;
    private final String[] zzSp;
    private final CredentialPickerConfig zzSq;
    private final CredentialPickerConfig zzSr;

    /* loaded from: classes.dex */
    static final class Builder {

        private boolean zzSo;
        private String[] zzSp;
        private CredentialPickerConfig zzSq;
        private CredentialPickerConfig zzSr;

        CredentialRequest build() {

            if (this.zzSp == null) {

                this.zzSp = new String[0];
            }

            if (this.zzSo || this.zzSp.length != 0) {

                return new CredentialRequest(this);
            }

            throw new IllegalStateException("At least one authentication method must be specified");
        }


        Builder setAccountTypes(String... accountTypes) {

            this.zzSp = accountTypes;
            return this;
        }


        Builder setCredentialHintPickerConfig(CredentialPickerConfig config) {

            this.zzSr = config;
            return this;
        }


        Builder setCredentialPickerConfig(CredentialPickerConfig config) {

            this.zzSq = config;
            return this;
        }


        Builder setSupportsPasswordLogin(boolean supportsPasswordLogin) {

            this.zzSo = supportsPasswordLogin;
            return this;
        }

    }


    CredentialRequest(int version, boolean supportsPasswordLogin, String[] accountTypes, CredentialPickerConfig credentialPickerConfig, CredentialPickerConfig credentialHintPickerConfig) {

        this.mVersionCode = version;
        this.zzSo = supportsPasswordLogin;
        this.zzSp = (String[]) zzx.zzw(accountTypes);
        this.zzSq = credentialPickerConfig == null ? new CredentialPickerConfig.Builder().build() : credentialPickerConfig;
        this.zzSr = credentialHintPickerConfig == null ? new CredentialPickerConfig.Builder().build() : credentialHintPickerConfig;
    }


    private CredentialRequest(Builder builder) {

        this(2, builder.zzSo, builder.zzSp, builder.zzSq, builder.zzSr);
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    String[] getAccountTypes() {

        return this.zzSp;
    }


    CredentialPickerConfig getCredentialHintPickerConfig() {

        return this.zzSr;
    }


    CredentialPickerConfig getCredentialPickerConfig() {

        return this.zzSq;
    }


    boolean getSupportsPasswordLogin() {

        return this.zzSo;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel out, int flags) {

        zzc.zza(this, out, flags);
    }

}

