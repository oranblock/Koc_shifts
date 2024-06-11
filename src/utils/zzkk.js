/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.os.Binder;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.RemoteException;
import com.google.android.gms.auth.api.proxy.ProxyGrpcRequest;
import com.google.android.gms.auth.api.proxy.ProxyRequest;
import com.google.android.gms.internal.zzkj;
/* loaded from: classes.dex */
interface zzkk extends IInterface {


    /* loaded from: classes.dex */
    static abstract class zza extends Binder implements zzkk {


        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: com.google.android.gms.internal.zzkk$zza$zza  reason: collision with other inner class name */
        /* loaded from: classes.dex */
        static class C0024zza implements zzkk {

            private IBinder zznJ;

            C0024zza(IBinder iBinder) {

                this.zznJ = iBinder;
            }


            @Override // android.os.IInterface
            IBinder asBinder() {

                return this.zznJ;
            }


            @Override // com.google.android.gms.internal.zzkk
            void zza(zzkj zzkj, ProxyGrpcRequest proxyGrpcRequest) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.auth.api.internal.IAuthService");
                    obtain.writeStrongBinder(zzkj != null ? zzkj.asBinder() : null);
                    if (proxyGrpcRequest != null) {

                        obtain.writeInt(1);
                        proxyGrpcRequest.writeToParcel(obtain, 0);
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


            @Override // com.google.android.gms.internal.zzkk
            void zza(zzkj zzkj, ProxyRequest proxyRequest) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.auth.api.internal.IAuthService");
                    obtain.writeStrongBinder(zzkj != null ? zzkj.asBinder() : null);
                    if (proxyRequest != null) {

                        obtain.writeInt(1);
                        proxyRequest.writeToParcel(obtain, 0);
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


        static zzkk zzaw(IBinder iBinder) {

            if (iBinder == null) {

                return null;
            }

            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.auth.api.internal.IAuthService");
            return (queryLocalInterface == null || !(queryLocalInterface instanceof zzkk)) ? new C0024zza(iBinder) : (zzkk) queryLocalInterface;
        }


        @Override // android.os.Binder
        boolean onTransact(int code, Parcel data, Parcel reply, int flags) throws RemoteException {

            ProxyGrpcRequest proxyGrpcRequest = null;
            ProxyRequest proxyRequest = null;
            switch (code) {

                case 1:
                    data.enforceInterface("com.google.android.gms.auth.api.internal.IAuthService");
                    zzkj zzav = zzkj.zza.zzav(data.readStrongBinder());
                    if (data.readInt() != 0) {

                        proxyRequest = ProxyRequest.CREATOR.createFromParcel(data);
                    }

                    zza(zzav, proxyRequest);
                    reply.writeNoException();
                    return true;
                case 2:
                    data.enforceInterface("com.google.android.gms.auth.api.internal.IAuthService");
                    zzkj zzav2 = zzkj.zza.zzav(data.readStrongBinder());
                    if (data.readInt() != 0) {

                        proxyGrpcRequest = ProxyGrpcRequest.CREATOR.createFromParcel(data);
                    }

                    zza(zzav2, proxyGrpcRequest);
                    reply.writeNoException();
                    return true;
                case 1598968902:
                    reply.writeString("com.google.android.gms.auth.api.internal.IAuthService");
                    return true;
                default:
                    return super.onTransact(code, data, reply, flags);
            }

        }

    }


    void zza(zzkj zzkj, ProxyGrpcRequest proxyGrpcRequest) throws RemoteException;

    void zza(zzkj zzkj, ProxyRequest proxyRequest) throws RemoteException;
}

