/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.os.Binder;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.RemoteException;
/* loaded from: classes.dex */
interface zzt extends IInterface {


    /* loaded from: classes.dex */
    static abstract class zza extends Binder implements zzt {


        /* renamed from: com.google.android.gms.common.internal.zzt$zza$zza  reason: collision with other inner class name */
        /* loaded from: classes.dex */
        private static class C0010zza implements zzt {

            private IBinder zznJ;

            C0010zza(IBinder iBinder) {

                this.zznJ = iBinder;
            }


            @Override // android.os.IInterface
            IBinder asBinder() {

                return this.zznJ;
            }


            @Override // com.google.android.gms.common.internal.zzt
            void zzb(ResolveAccountResponse resolveAccountResponse) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IResolveAccountCallbacks");
                    if (resolveAccountResponse != null) {

                        obtain.writeInt(1);
                        resolveAccountResponse.writeToParcel(obtain, 0);
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

            attachInterface(this, "com.google.android.gms.common.internal.IResolveAccountCallbacks");
        }


        static zzt zzaL(IBinder iBinder) {

            if (iBinder == null) {

                return null;
            }

            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.common.internal.IResolveAccountCallbacks");
            return (queryLocalInterface == null || !(queryLocalInterface instanceof zzt)) ? new C0010zza(iBinder) : (zzt) queryLocalInterface;
        }


        @Override // android.os.IInterface
        IBinder asBinder() {

            return this;
        }


        @Override // android.os.Binder
        boolean onTransact(int code, Parcel data, Parcel reply, int flags) throws RemoteException {

            switch (code) {

                case 2:
                    data.enforceInterface("com.google.android.gms.common.internal.IResolveAccountCallbacks");
                    zzb(data.readInt() != 0 ? ResolveAccountResponse.CREATOR.createFromParcel(data) : null);
                    reply.writeNoException();
                    return true;
                case 1598968902:
                    reply.writeString("com.google.android.gms.common.internal.IResolveAccountCallbacks");
                    return true;
                default:
                    return super.onTransact(code, data, reply, flags);
            }

        }

    }


    void zzb(ResolveAccountResponse resolveAccountResponse) throws RemoteException;
}

