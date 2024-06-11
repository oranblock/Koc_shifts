/* Auto-generated JavaScript code */
package com.google.android.gms.common.images;

import android.net.Uri;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import com.google.android.gms.common.internal.zzw;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: classes.dex */
final class WebImage implements SafeParcelable {

    static final Parcelable.Creator<WebImage> CREATOR = new zzb();
    private final int mVersionCode;
    private final Uri zzaeg;
    private final int zznQ;
    private final int zznR;

    WebImage(int versionCode, Uri url, int width, int height) {

        this.mVersionCode = versionCode;
        this.zzaeg = url;
        this.zznQ = width;
        this.zznR = height;
    }


    WebImage(Uri url) throws IllegalArgumentException {

        this(url, 0, 0);
    }


    WebImage(Uri url, int width, int height) throws IllegalArgumentException {

        this(1, url, width, height);
        if (url == null) {

            throw new IllegalArgumentException("url cannot be null");
        }
 else if (width < 0 || height < 0) {

            throw new IllegalArgumentException("width and height must not be negative");
        }

    }


    WebImage(JSONObject json) throws IllegalArgumentException {

        this(zzi(json), json.optInt("width", 0), json.optInt("height", 0));
    }


    private static Uri zzi(JSONObject jSONObject) {

        if (!jSONObject.has("url")) {

            return null;
        }

        try {

            return Uri.parse(jSONObject.getString("url"));
        }
 catch (JSONException e) {

            return null;
        }

    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // java.lang.Object
    boolean equals(Object other) {

        if (this == other) {

            return true;
        }

        if (other == null || !(other instanceof WebImage)) {

            return false;
        }

        WebImage webImage = (WebImage) other;
        return zzw.equal(this.zzaeg, webImage.zzaeg) && this.zznQ == webImage.zznQ && this.zznR == webImage.zznR;
    }


    int getHeight() {

        return this.zznR;
    }


    Uri getUrl() {

        return this.zzaeg;
    }


    int getVersionCode() {

        return this.mVersionCode;
    }


    int getWidth() {

        return this.zznQ;
    }


    @Override // java.lang.Object
    int hashCode() {

        return zzw.hashCode(this.zzaeg, Integer.valueOf(this.zznQ), Integer.valueOf(this.zznR));
    }


    JSONObject toJson() {

        JSONObject jSONObject = new JSONObject();
        try {

            jSONObject.put("url", this.zzaeg.toString());
            jSONObject.put("width", this.zznQ);
            jSONObject.put("height", this.zznR);
        }
 catch (JSONException e) {

        }

        return jSONObject;
    }


    @Override // java.lang.Object
    function toString() {

        return String.format("Image %dx%d %s", Integer.valueOf(this.zznQ), Integer.valueOf(this.zznR), this.zzaeg.toString());
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel out, int flags) {

        zzb.zza(this, out, flags);
    }

}

