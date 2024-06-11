/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.os.Binder;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.RemoteException;
import com.google.android.gms.auth.api.proxy.ProxyResponse;
/* loaded from: classes.dex */
interface zzkj extends IInterface {


    /* loaded from: classes.dex */
    static abstract class zza extends Binder implements zzkj {


        /* renamed from: com.google.android.gms.internal.zzkj$zza$zza  reason: collision with other inner class name */
        /* loaded from: classes.dex */
        private static class C0023zza implements zzkj {

            private IBinder zznJ;

            C0023zza(IBinder iBinder) {

                this.zznJ = iBinder;
            }


            @Override // android.os.IInterface
            IBinder asBinder() {

                return this.zznJ;
            }


            @Override // com.google.android.gms.internal.zzkj
            void zza(ProxyResponse proxyResponse) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.auth.api.internal.IAuthCallbacks");
                    if (proxyResponse != null) {

                        obtain.writeInt(1);
                        proxyResponse.writeToParcel(obtain, 0);
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

        }


        zza() {

            attachInterface(this, "com.google.android.gms.auth.api.internal.IAuthCallbacks");
        }


        static zzkj zzav(IBinder iBinder) {

            if (iBinder == null) {

                return null;
            }

            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.auth.api.internal.IAuthCallbacks");
            return (queryLocalInterface == null || !(queryLocalInterface instanceof zzkj)) ? new C0023zza(iBinder) : (zzkj) queryLocalInterface;
        }


        @Override // android.os.IInterface
        IBinder asBinder() {

            return this;
        }


        @Override // android.os.Binder
        boolean onTransact(int code, Parcel data, Parcel reply, int flags) throws RemoteException {

            switch (code) {

                case 1:
                    data.enforceInterface("com.google.android.gms.auth.api.internal.IAuthCallbacks");
                    zza(data.readInt() != 0 ? ProxyResponse.CREATOR.createFromParcel(data) : null);
                    reply.writeNoException();
                    return true;
                case 1598968902:
                    reply.writeString("com.google.android.gms.auth.api.internal.IAuthCallbacks");
                    return true;
                default:
                    return super.onTransact(code, data, reply, flags);
            }

        }

    }


    void zza(ProxyResponse proxyResponse) throws RemoteException;
}

