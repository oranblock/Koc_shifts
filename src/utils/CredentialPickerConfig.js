/* Auto-generated JavaScript code */
package com.google.android.gms.auth.api.credentials;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
/* loaded from: classes.dex */
final class CredentialPickerConfig implements SafeParcelable {

    static final Parcelable.Creator<CredentialPickerConfig> CREATOR = new zzb();
    private final boolean mShowCancelButton;
    final int mVersionCode;
    private final boolean zzSn;

    /* loaded from: classes.dex */
    static class Builder {

        private boolean zzSn = false;
        private boolean mShowCancelButton = true;

        CredentialPickerConfig build() {

            return new CredentialPickerConfig(this);
        }


        Builder setShowAddAccountButton(boolean showAddAccountButton) {

            this.zzSn = showAddAccountButton;
            return this;
        }


        Builder setShowCancelButton(boolean showCancelButton) {

            this.mShowCancelButton = showCancelButton;
            return this;
        }

    }


    CredentialPickerConfig(int version, boolean showAddAccountButton, boolean showCancelButton) {

        this.mVersionCode = version;
        this.zzSn = showAddAccountButton;
        this.mShowCancelButton = showCancelButton;
    }


    private CredentialPickerConfig(Builder builder) {

        this(1, builder.zzSn, builder.mShowCancelButton);
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    boolean shouldShowAddAccountButton() {

        return this.zzSn;
    }


    boolean shouldShowCancelButton() {

        return this.mShowCancelButton;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel out, int flags) {

        zzb.zza(this, out, flags);
    }

}

