/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.os.Binder;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.RemoteException;
import com.google.android.gms.common.api.Status;
/* loaded from: classes.dex */
interface zzkc extends IInterface {


    /* loaded from: classes.dex */
    static abstract class zza extends Binder implements zzkc {


        /* renamed from: com.google.android.gms.internal.zzkc$zza$zza  reason: collision with other inner class name */
        /* loaded from: classes.dex */
        private static class C0020zza implements zzkc {

            private IBinder zznJ;

            C0020zza(IBinder iBinder) {

                this.zznJ = iBinder;
            }


            @Override // android.os.IInterface
            IBinder asBinder() {

                return this.zznJ;
            }


            @Override // com.google.android.gms.internal.zzkc
            void zzf(Status status) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.auth.api.accountstatus.internal.IAccountStatusCallbacks");
                    if (status != null) {

                        obtain.writeInt(1);
                        status.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(2, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }

        }


        static zzkc zzan(IBinder iBinder) {

            if (iBinder == null) {

                return null;
            }

            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.auth.api.accountstatus.internal.IAccountStatusCallbacks");
            return (queryLocalInterface == null || !(queryLocalInterface instanceof zzkc)) ? new C0020zza(iBinder) : (zzkc) queryLocalInterface;
        }


        @Override // android.os.IInterface
        IBinder asBinder() {

            return this;
        }


        @Override // android.os.Binder
        boolean onTransact(int code, Parcel data, Parcel reply, int flags) throws RemoteException {

            switch (code) {

                case 2:
                    data.enforceInterface("com.google.android.gms.auth.api.accountstatus.internal.IAccountStatusCallbacks");
                    zzf(data.readInt() != 0 ? Status.CREATOR.createFromParcel(data) : null);
                    reply.writeNoException();
                    return true;
                case 1598968902:
                    reply.writeString("com.google.android.gms.auth.api.accountstatus.internal.IAccountStatusCallbacks");
                    return true;
                default:
                    return super.onTransact(code, data, reply, flags);
            }

        }

    }


    void zzf(Status status) throws RemoteException;
}

