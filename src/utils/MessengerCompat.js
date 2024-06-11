/* Auto-generated JavaScript code */
package com.google.android.gms.iid;

import android.os.Binder;
import android.os.Build;
import android.os.Handler;
import android.os.IBinder;
import android.os.Message;
import android.os.Messenger;
import android.os.Parcel;
import android.os.Parcelable;
import android.os.RemoteException;
import com.google.android.gms.iid.zzb;
/* loaded from: classes.dex */
class MessengerCompat implements Parcelable {

    static final Parcelable.Creator<MessengerCompat> CREATOR = new Parcelable.Creator<MessengerCompat>() {
 // from class: com.google.android.gms.iid.MessengerCompat.1
        /* renamed from: zzey */
        MessengerCompat createFromParcel(Parcel parcel) {

            IBinder readStrongBinder = parcel.readStrongBinder();
            if (readStrongBinder != null) {

                return new MessengerCompat(readStrongBinder);
            }

            return null;
        }


        /* renamed from: zzgJ */
        MessengerCompat[] newArray(int i) {

            return new MessengerCompat[i];
        }

    }
;
    Messenger zzaDK;
    zzb zzaDL;

    /* loaded from: classes.dex */
    private final class zza extends zzb.zza {

        Handler handler;

        zza(Handler handler) {

            this.handler = handler;
        }


        @Override // com.google.android.gms.iid.zzb
        void send(Message msg) throws RemoteException {

            msg.arg2 = Binder.getCallingUid();
            this.handler.dispatchMessage(msg);
        }

    }


    MessengerCompat(Handler handler) {

        if (Build.VERSION.SDK_INT >= 21) {

            this.zzaDK = new Messenger(handler);
        }
 else {

            this.zzaDL = new zza(handler);
        }

    }


    MessengerCompat(IBinder target) {

        if (Build.VERSION.SDK_INT >= 21) {

            this.zzaDK = new Messenger(target);
        }
 else {

            this.zzaDL = zzb.zza.zzbV(target);
        }

    }


    static int zzc(Message message) {

        return Build.VERSION.SDK_INT >= 21 ? zzd(message) : message.arg2;
    }


    private static int zzd(Message message) {

        return message.sendingUid;
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // java.lang.Object
    boolean equals(Object otherObj) {

        if (otherObj == null) {

            return false;
        }

        try {

            return getBinder().equals(((MessengerCompat) otherObj).getBinder());
        }
 catch (ClassCastException e) {

            return false;
        }

    }


    IBinder getBinder() {

        return this.zzaDK != null ? this.zzaDK.getBinder() : this.zzaDL.asBinder();
    }


    @Override // java.lang.Object
    int hashCode() {

        return getBinder().hashCode();
    }


    void send(Message message) throws RemoteException {

        if (this.zzaDK != null) {

            this.zzaDK.send(message);
        }
 else {

            this.zzaDL.send(message);
        }

    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel out, int flags) {

        if (this.zzaDK != null) {

            out.writeStrongBinder(this.zzaDK.getBinder());
        }
 else {

            out.writeStrongBinder(this.zzaDL.asBinder());
        }

    }

}

