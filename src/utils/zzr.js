/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.os.Binder;
import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.RemoteException;
/* loaded from: classes.dex */
interface zzr extends IInterface {


    /* loaded from: classes.dex */
    static abstract class zza extends Binder implements zzr {


        /* renamed from: com.google.android.gms.common.internal.zzr$zza$zza  reason: collision with other inner class name */
        /* loaded from: classes.dex */
        private static class C0008zza implements zzr {

            private IBinder zznJ;

            C0008zza(IBinder iBinder) {

                this.zznJ = iBinder;
            }


            @Override // android.os.IInterface
            IBinder asBinder() {

                return this.zznJ;
            }


            @Override // com.google.android.gms.common.internal.zzr
            void zza(int i, IBinder iBinder, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsCallbacks");
                    obtain.writeInt(i);
                    obtain.writeStrongBinder(iBinder);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(1, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzr
            void zzb(int i, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsCallbacks");
                    obtain.writeInt(i);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
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


        zza() {

            attachInterface(this, "com.google.android.gms.common.internal.IGmsCallbacks");
        }


        static zzr zzaJ(IBinder iBinder) {

            if (iBinder == null) {

                return null;
            }

            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.common.internal.IGmsCallbacks");
            return (queryLocalInterface == null || !(queryLocalInterface instanceof zzr)) ? new C0008zza(iBinder) : (zzr) queryLocalInterface;
        }


        @Override // android.os.IInterface
        IBinder asBinder() {

            return this;
        }


        @Override // android.os.Binder
        boolean onTransact(int code, Parcel data, Parcel reply, int flags) throws RemoteException {

            Bundle bundle = null;
            switch (code) {

                case 1:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsCallbacks");
                    int readInt = data.readInt();
                    IBinder readStrongBinder = data.readStrongBinder();
                    if (data.readInt() != 0) {

                        bundle = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zza(readInt, readStrongBinder, bundle);
                    reply.writeNoException();
                    return true;
                case 2:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsCallbacks");
                    int readInt2 = data.readInt();
                    if (data.readInt() != 0) {

                        bundle = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zzb(readInt2, bundle);
                    reply.writeNoException();
                    return true;
                case 1598968902:
                    reply.writeString("com.google.android.gms.common.internal.IGmsCallbacks");
                    return true;
                default:
                    return super.onTransact(code, data, reply, flags);
            }

        }

    }


    void zza(int i, IBinder iBinder, Bundle bundle) throws RemoteException;

    void zzb(int i, Bundle bundle) throws RemoteException;
}

