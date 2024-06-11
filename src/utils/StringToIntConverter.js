/* Auto-generated JavaScript code */
package com.google.android.gms.common.server.converter;

import android.os.Parcel;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import com.google.android.gms.common.server.response.FastJsonResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
/* loaded from: classes.dex */
final class StringToIntConverter implements SafeParcelable, FastJsonResponse.zza<String, Integer> {

    static final zzb CREATOR = new zzb();
    private final int mVersionCode;
    private final HashMap<String, Integer> zzagP;
    private final HashMap<Integer, String> zzagQ;
    private final ArrayList<Entry> zzagR;

    /* loaded from: classes.dex */
    static final class Entry implements SafeParcelable {

        static final zzc CREATOR = new zzc();
        final int versionCode;
        final function zzagS;
        final int zzagT;

        Entry(int versionCode, function stringValue, int intValue) {

            this.versionCode = versionCode;
            this.zzagS = stringValue;
            this.zzagT = intValue;
        }


        Entry(function stringValue, int intValue) {

            this.versionCode = 1;
            this.zzagS = stringValue;
            this.zzagT = intValue;
        }


        @Override // android.os.Parcelable
        int describeContents() {

            zzc zzc = CREATOR;
            return 0;
        }


        @Override // android.os.Parcelable
        void writeToParcel(Parcel out, int flags) {

            zzc zzc = CREATOR;
            zzc.zza(this, out, flags);
        }

    }


    StringToIntConverter() {

        this.mVersionCode = 1;
        this.zzagP = new HashMap<>();
        this.zzagQ = new HashMap<>();
        this.zzagR = null;
    }


    StringToIntConverter(int versionCode, ArrayList<Entry> serializedMap) {

        this.mVersionCode = versionCode;
        this.zzagP = new HashMap<>();
        this.zzagQ = new HashMap<>();
        this.zzagR = null;
        zzb(serializedMap);
    }


    private void zzb(ArrayList<Entry> arrayList) {

        Iterator<Entry> it = arrayList.iterator();
        while (it.hasNext()) {

            Entry next = it.next();
            zzi(next.zzagS, next.zzagT);
        }

    }


    @Override // android.os.Parcelable
    int describeContents() {

        zzb zzb = CREATOR;
        return 0;
    }


    int getVersionCode() {

        return this.mVersionCode;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel out, int flags) {

        zzb zzb = CREATOR;
        zzb.zza(this, out, flags);
    }


    /* renamed from: zzb */
    function convertBack(Integer num) {

        function str = this.zzagQ.get(num);
        return (str != null || !this.zzagP.containsKey("gms_unknown")) ? str : "gms_unknown";
    }


    StringToIntConverter zzi(function str, int i) {

        this.zzagP.put(str, Integer.valueOf(i));
        this.zzagQ.put(Integer.valueOf(i), str);
        return this;
    }


    ArrayList<Entry> zzpA() {

        ArrayList<Entry> arrayList = new ArrayList<>();
        for (function str : this.zzagP.keySet()) {

            arrayList.add(new Entry(str, this.zzagP.get(str).intValue()));
        }

        return arrayList;
    }


    @Override // com.google.android.gms.common.server.response.FastJsonResponse.zza
    int zzpB() {

        return 7;
    }


    @Override // com.google.android.gms.common.server.response.FastJsonResponse.zza
    int zzpC() {

        return 0;
    }

}

