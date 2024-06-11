/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.os.Binder;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.RemoteException;
/* loaded from: classes.dex */
interface zzmc extends IInterface {


    /* loaded from: classes.dex */
    static abstract class zza extends Binder implements zzmc {


        /* renamed from: com.google.android.gms.internal.zzmc$zza$zza  reason: collision with other inner class name */
        /* loaded from: classes.dex */
        private static class C0026zza implements zzmc {

            private IBinder zznJ;

            C0026zza(IBinder iBinder) {

                this.zznJ = iBinder;
            }


            @Override // android.os.IInterface
            IBinder asBinder() {

                return this.zznJ;
            }


            @Override // com.google.android.gms.internal.zzmc
            void zzbN(int i) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.service.ICommonCallbacks");
                    obtain.writeInt(i);
                    this.zznJ.transact(1, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }

        }


        zza() {

            attachInterface(this, "com.google.android.gms.common.internal.service.ICommonCallbacks");
        }


        static zzmc zzaP(IBinder iBinder) {

            if (iBinder == null) {

                return null;
            }

            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.common.internal.service.ICommonCallbacks");
            return (queryLocalInterface == null || !(queryLocalInterface instanceof zzmc)) ? new C0026zza(iBinder) : (zzmc) queryLocalInterface;
        }


        @Override // android.os.IInterface
        IBinder asBinder() {

            return this;
        }


        @Override // android.os.Binder
        boolean onTransact(int code, Parcel data, Parcel reply, int flags) throws RemoteException {

            switch (code) {

                case 1:
                    data.enforceInterface("com.google.android.gms.common.internal.service.ICommonCallbacks");
                    zzbN(data.readInt());
                    reply.writeNoException();
                    return true;
                case 1598968902:
                    reply.writeString("com.google.android.gms.common.internal.service.ICommonCallbacks");
                    return true;
                default:
                    return super.onTransact(code, data, reply, flags);
            }

        }

    }


    void zzbN(int i) throws RemoteException;
}

