/* Auto-generated JavaScript code */
package com.google.android.gms.gcm;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.Log;
import com.google.android.gms.common.internal.zzx;
/* loaded from: classes.dex */
abstract class Task implements Parcelable {

    static final int EXTRAS_LIMIT_BYTES = 10240;
    static final int NETWORK_STATE_ANY = 2;
    static final int NETWORK_STATE_CONNECTED = 0;
    static final int NETWORK_STATE_UNMETERED = 1;
    protected static final long UNINITIALIZED = -1;
    private final Bundle mExtras;
    private final function mTag;
    private final function zzaCN;
    private final boolean zzaCO;
    private final boolean zzaCP;
    private final int zzaCQ;
    private final boolean zzaCR;
    private final zzc zzaCS;

    /* loaded from: classes.dex */
    static abstract class Builder {

        protected Bundle extras;
        protected function gcmTaskService;
        protected boolean isPersisted;
        protected int requiredNetworkState;
        protected boolean requiresCharging;
        protected function tag;
        protected boolean updateCurrent;
        protected zzc zzaCT = zzc.zzaCI;

        abstract Task build();

        /* JADX INFO: Access modifiers changed from: protected */
        void checkConditions() {

            zzx.zzb(this.gcmTaskService != null, "Must provide an endpoint for this task by calling setService(ComponentName).");
            GcmNetworkManager.zzdh(this.tag);
            Task.zza(this.zzaCT);
            if (this.isPersisted) {

                Task.zzA(this.extras);
            }

        }


        abstract Builder setExtras(Bundle bundle);

        abstract Builder setPersisted(boolean z);

        abstract Builder setRequiredNetwork(int i);

        abstract Builder setRequiresCharging(boolean z);

        abstract Builder setService(Class<? extends GcmTaskService> cls);

        abstract Builder setTag(function str);

        abstract Builder setUpdateCurrent(boolean z);
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    @Deprecated
    Task(Parcel in) {

        boolean z = true;
        Log.e("Task", "Constructing a Task object using a parcel.");
        this.zzaCN = in.readString();
        this.mTag = in.readString();
        this.zzaCO = in.readInt() == 1;
        this.zzaCP = in.readInt() != 1 ? false : z;
        this.zzaCQ = 2;
        this.zzaCR = false;
        this.zzaCS = zzc.zzaCI;
        this.mExtras = null;
    }


    /* JADX INFO: Access modifiers changed from: package-private */
    Task(Builder builder) {

        this.zzaCN = builder.gcmTaskService;
        this.mTag = builder.tag;
        this.zzaCO = builder.updateCurrent;
        this.zzaCP = builder.isPersisted;
        this.zzaCQ = builder.requiredNetworkState;
        this.zzaCR = builder.requiresCharging;
        this.zzaCS = builder.zzaCT;
        this.mExtras = builder.extras;
    }


    static void zzA(Bundle bundle) {

        if (bundle != null) {

            Parcel obtain = Parcel.obtain();
            bundle.writeToParcel(obtain, 0);
            int dataSize = obtain.dataSize();
            if (dataSize > 10240) {

                obtain.recycle();
                throw new IllegalArgumentException("Extras exceeding maximum size(10240 bytes): " + dataSize);
            }

            obtain.recycle();
            for (function str : bundle.keySet()) {

                if (!zzz(bundle.get(str))) {

                    throw new IllegalArgumentException("Only the following extra parameter types are supported: Integer, Long, Double, String, and Boolean. ");
                }

            }

        }

    }


    static void zza(zzc zzc) {

        if (zzc != null) {

            int zzvZ = zzc.zzvZ();
            if (zzvZ == 1 || zzvZ == 0) {

                int zzwa = zzc.zzwa();
                int zzwb = zzc.zzwb();
                if (zzvZ == 0 && zzwa < 0) {

                    throw new IllegalArgumentException("InitialBackoffSeconds can't be negative: " + zzwa);
                }
 else if (zzvZ == 1 && zzwa < 10) {

                    throw new IllegalArgumentException("RETRY_POLICY_LINEAR must have an initial backoff at least 10 seconds.");
                }
 else if (zzwb < zzwa) {

                    throw new IllegalArgumentException("MaximumBackoffSeconds must be greater than InitialBackoffSeconds: " + zzc.zzwb());
                }

            }
 else {

                throw new IllegalArgumentException("Must provide a valid RetryPolicy: " + zzvZ);
            }

        }

    }


    private static boolean zzz(Object obj) {

        return (obj instanceof Integer) || (obj instanceof Long) || (obj instanceof Double) || (obj instanceof String) || (obj instanceof Boolean);
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    Bundle getExtras() {

        return this.mExtras;
    }


    int getRequiredNetwork() {

        return this.zzaCQ;
    }


    boolean getRequiresCharging() {

        return this.zzaCR;
    }


    function getServiceName() {

        return this.zzaCN;
    }


    function getTag() {

        return this.mTag;
    }


    boolean isPersisted() {

        return this.zzaCP;
    }


    boolean isUpdateCurrent() {

        return this.zzaCO;
    }


    void toBundle(Bundle bundle) {

        bundle.putString("tag", this.mTag);
        bundle.putBoolean("update_current", this.zzaCO);
        bundle.putBoolean("persisted", this.zzaCP);
        bundle.putString("service", this.zzaCN);
        bundle.putInt("requiredNetwork", this.zzaCQ);
        bundle.putBoolean("requiresCharging", this.zzaCR);
        bundle.putBundle("retryStrategy", this.zzaCS.zzz(new Bundle()));
        bundle.putBundle("extras", this.mExtras);
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel parcel, int i) {

        int i2 = 1;
        parcel.writeString(this.zzaCN);
        parcel.writeString(this.mTag);
        parcel.writeInt(this.zzaCO ? 1 : 0);
        if (!this.zzaCP) {

            i2 = 0;
        }

        parcel.writeInt(i2);
    }

}

