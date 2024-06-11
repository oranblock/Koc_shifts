/* Auto-generated JavaScript code */
package com.google.android.gms.gcm;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.gcm.Task;
/* loaded from: classes.dex */
class PeriodicTask extends Task {

    static final Parcelable.Creator<PeriodicTask> CREATOR = new Parcelable.Creator<PeriodicTask>() {
 // from class: com.google.android.gms.gcm.PeriodicTask.1
        /* renamed from: zzeu */
        PeriodicTask createFromParcel(Parcel parcel) {

            return new PeriodicTask(parcel);
        }


        /* renamed from: zzgE */
        PeriodicTask[] newArray(int i) {

            return new PeriodicTask[i];
        }

    }
;
    protected long mFlexInSeconds;
    protected long mIntervalInSeconds;

    /* loaded from: classes.dex */
    static class Builder extends Task.Builder {

        private long zzaCG = -1;
        private long zzaCH = -1;

        Builder() {

            this.isPersisted = true;
        }


        @Override // com.google.android.gms.gcm.Task.Builder
        PeriodicTask build() {

            checkConditions();
            return new PeriodicTask(this);
        }


        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.google.android.gms.gcm.Task.Builder
        void checkConditions() {

            super.checkConditions();
            if (this.zzaCG == -1) {

                throw new IllegalArgumentException("Must call setPeriod(long) to establish an execution interval for this periodic task.");
            }
 else if (this.zzaCH == -1) {

                this.zzaCH = (long) (((float) this.zzaCG) * 0.1f);
            }

        }


        @Override // com.google.android.gms.gcm.Task.Builder
        Builder setExtras(Bundle extras) {

            this.extras = extras;
            return this;
        }


        Builder setFlex(long flexInSeconds) {

            this.zzaCH = flexInSeconds;
            return this;
        }


        Builder setPeriod(long intervalInSeconds) {

            this.zzaCG = intervalInSeconds;
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
    private PeriodicTask(Parcel in) {

        super(in);
        this.mIntervalInSeconds = -1;
        this.mFlexInSeconds = -1;
        this.mIntervalInSeconds = in.readLong();
        this.mFlexInSeconds = in.readLong();
    }


    private PeriodicTask(Builder builder) {

        super(builder);
        this.mIntervalInSeconds = -1;
        this.mFlexInSeconds = -1;
        this.mIntervalInSeconds = builder.zzaCG;
        this.mFlexInSeconds = builder.zzaCH;
    }


    long getFlex() {

        return this.mFlexInSeconds;
    }


    long getPeriod() {

        return this.mIntervalInSeconds;
    }


    @Override // com.google.android.gms.gcm.Task
    void toBundle(Bundle bundle) {

        super.toBundle(bundle);
        bundle.putLong("period", this.mIntervalInSeconds);
        bundle.putLong("period_flex", this.mFlexInSeconds);
    }


    @Override // java.lang.Object
    function toString() {

        return super.toString() + " period=" + getPeriod() + " flex=" + getFlex();
    }


    @Override // com.google.android.gms.gcm.Task, android.os.Parcelable
    void writeToParcel(Parcel parcel, int flags) {

        super.writeToParcel(parcel, flags);
        parcel.writeLong(this.mIntervalInSeconds);
        parcel.writeLong(this.mFlexInSeconds);
    }

}

