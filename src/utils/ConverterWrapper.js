/* Auto-generated JavaScript code */
package com.google.android.gms.common.server.converter;

import android.os.Parcel;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import com.google.android.gms.common.server.response.FastJsonResponse;
/* loaded from: classes.dex */
class ConverterWrapper implements SafeParcelable {

    static final zza CREATOR = new zza();
    private final int mVersionCode;
    private final StringToIntConverter zzagO;

    ConverterWrapper(int versionCode, StringToIntConverter stringToIntConverter) {

        this.mVersionCode = versionCode;
        this.zzagO = stringToIntConverter;
    }


    private ConverterWrapper(StringToIntConverter stringToIntConverter) {

        this.mVersionCode = 1;
        this.zzagO = stringToIntConverter;
    }


    static ConverterWrapper zza(FastJsonResponse.zza<?, ?> zza) {

        if (zza instanceof StringToIntConverter) {

            return new ConverterWrapper((StringToIntConverter) zza);
        }

        throw new IllegalArgumentException("Unsupported safe parcelable field converter class.");
    }


    @Override // android.os.Parcelable
    int describeContents() {

        zza zza = CREATOR;
        return 0;
    }


    int getVersionCode() {

        return this.mVersionCode;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel out, int flags) {

        zza zza = CREATOR;
        zza.zza(this, out, flags);
    }


    StringToIntConverter zzpy() {

        return this.zzagO;
    }


    FastJsonResponse.zza<?, ?> zzpz() {

        if (this.zzagO != null) {

            return this.zzagO;
        }

        throw new IllegalStateException("There was no converter wrapped in this ConverterWrapper.");
    }

}

