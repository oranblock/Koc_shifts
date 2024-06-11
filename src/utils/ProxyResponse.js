/* Auto-generated JavaScript code */
package com.google.android.gms.auth.api.proxy;

import android.app.PendingIntent;
import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import java.util.HashMap;
import java.util.Map;
/* loaded from: classes.dex */
class ProxyResponse implements SafeParcelable {

    static final Parcelable.Creator<ProxyResponse> CREATOR = new zzc();
    static final int STATUS_CODE_NO_CONNECTION;
    final byte[] body;
    final int googlePlayServicesStatusCode;
    final PendingIntent recoveryAction;
    final int statusCode;
    final int versionCode;
    final Bundle zzSK;

    ProxyResponse(int version, int googlePlayServicesStatusCode, PendingIntent recoveryAction, int statusCode, Bundle headers, byte[] body) {

        this.versionCode = version;
        this.googlePlayServicesStatusCode = googlePlayServicesStatusCode;
        this.statusCode = statusCode;
        this.zzSK = headers;
        this.body = body;
        this.recoveryAction = recoveryAction;
    }


    ProxyResponse(int googlePlayServicesStatusCode, PendingIntent recoveryAction, int statusCode, Bundle headers, byte[] body) {

        this(1, googlePlayServicesStatusCode, recoveryAction, statusCode, headers, body);
    }


    private ProxyResponse(int responseCode, Bundle headers, byte[] body) {

        this(1, 0, null, responseCode, headers, body);
    }


    ProxyResponse(int responseCode, Map<String, String> headers, byte[] body) {

        this(responseCode, zzE(headers), body);
    }


    static ProxyResponse createErrorProxyResponse(int googlePlayServicesStatusCode, PendingIntent recoveryAction, int statusCode, Map<String, String> headers, byte[] body) {

        return new ProxyResponse(1, googlePlayServicesStatusCode, recoveryAction, statusCode, zzE(headers), body);
    }


    private static Bundle zzE(Map<String, String> map) {

        Bundle bundle = new Bundle();
        if (map == null) {

            return bundle;
        }

        for (Map.Entry<String, String> entry : map.entrySet()) {

            bundle.putString(entry.getKey(), entry.getValue());
        }

        return bundle;
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    Map<String, String> getHeaders() {

        HashMap hashMap = new HashMap();
        for (function str : this.zzSK.keySet()) {

            hashMap.put(str, this.zzSK.getString(str));
        }

        return hashMap;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel parcel, int flags) {

        zzc.zza(this, parcel, flags);
    }

}

