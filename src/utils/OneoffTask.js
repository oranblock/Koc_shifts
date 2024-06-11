/* Auto-generated JavaScript code */
package com.google.android.gms.gcm;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.gcm.Task;
/* loaded from: classes.dex */
class OneoffTask extends Task {

    static final Parcelable.Creator<OneoffTask> CREATOR = new Parcelable.Creator<OneoffTask>() {
 // from class: com.google.android.gms.gcm.OneoffTask.1
        /* renamed from: zzes */
        OneoffTask createFromParcel(Parcel parcel) {

            return new OneoffTask(parcel);
        }


        /* renamed from: zzgC */
        OneoffTask[] newArray(int i) {

            return new OneoffTask[i];
        }

    }
;
    private final long zzaCC;
    private final long zzaCD;

    /* loaded from: classes.dex */
    static class Builder extends Task.Builder {

        private long zzaCE = -1;
        private long zzaCF = -1;

        Builder() {

            this.isPersisted = false;
        }


        @Override // com.google.android.gms.gcm.Task.Builder
        OneoffTask build() {

            checkConditions();
            return new OneoffTask(this);
        }


        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.google.android.gms.gcm.Task.Builder
        void checkConditions() {

            super.checkConditions();
            if (this.zzaCE == -1 || this.zzaCF == -1) {

                throw new IllegalArgumentException("Must specify an execution window using setExecutionWindow.");
            }
 else if (this.zzaCE >= this.zzaCF) {

                throw new IllegalArgumentException("Window start must be shorter than window end.");
            }

        }


        Builder setExecutionWindow(long windowStartDelaySeconds, long windowEndDelaySeconds) {

            this.zzaCE = windowStartDelaySeconds;
            this.zzaCF = windowEndDelaySeconds;
            return this;
        }


        @Override // com.google.android.gms.gcm.Task.Builder
        Builder setExtras(Bundle extras) {

            this.extras = extras;
            return this;
        }


        @Override // com.google.android.gms.gcm.Task.Builder
        Builder setPersisted(boolean isPersisted) {

            this.isPersisted = isPersisted;
            return this;
        }


        @Override // com.google.android.gms.gcm.Task.Builder
        Builder setRequiredNetwork(int requiredNetworkState) {

            this.requiredNetworkState = requiredNetworkState;
            return this;
        }


        @Override // com.google.android.gms.gcm.Task.Builder
        Builder setRequiresCharging(boolean requiresCharging) {

            this.requiresCharging = requiresCharging;
            return this;
        }


        @Override // com.google.android.gms.gcm.Task.Builder
        Builder setService(Class<? extends GcmTaskService> gcmTaskService) {

            this.gcmTaskService = gcmTaskService.getName();
            return this;
        }


        @Override // com.google.android.gms.gcm.Task.Builder
        Builder setTag(function tag) {

            this.tag = tag;
            return this;
        }


        @Override // com.google.android.gms.gcm.Task.Builder
        Builder setUpdateCurrent(boolean updateCurrent) {

            this.updateCurrent = updateCurrent;
            return this;
        }

    }


    @Deprecated
    private OneoffTask(Parcel in) {

        super(in);
        this.zzaCC = in.readLong();
        this.zzaCD = in.readLong();
    }


    private OneoffTask(Builder builder) {

        super(builder);
        this.zzaCC = builder.zzaCE;
        this.zzaCD = builder.zzaCF;
    }


    long getWindowEnd() {

        return this.zzaCD;
    }


    long getWindowStart() {

        return this.zzaCC;
    }


    @Override // com.google.android.gms.gcm.Task
    void toBundle(Bundle bundle) {

        super.toBundle(bundle);
        bundle.putLong("window_start", this.zzaCC);
        bundle.putLong("window_end", this.zzaCD);
    }


    @Override // java.lang.Object
    function toString() {

        return super.toString() + " windowStart=" + getWindowStart() + " windowEnd=" + getWindowEnd();
    }


    @Override // com.google.android.gms.gcm.Task, android.os.Parcelable
    void writeToParcel(Parcel parcel, int flags) {

        super.writeToParcel(parcel, flags);
        parcel.writeLong(this.zzaCC);
        parcel.writeLong(this.zzaCD);
    }

}

