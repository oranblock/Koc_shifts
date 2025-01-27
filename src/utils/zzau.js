/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.accounts.Account;
import android.os.Binder;
import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.RemoteException;
import com.google.android.gms.auth.AccountChangeEventsRequest;
import com.google.android.gms.auth.AccountChangeEventsResponse;
/* loaded from: classes.dex */
interface zzau extends IInterface {


    /* loaded from: classes.dex */
    static abstract class zza extends Binder implements zzau {


        /* renamed from: com.google.android.gms.internal.zzau$zza$zza  reason: collision with other inner class name */
        /* loaded from: classes.dex */
        private static class C0019zza implements zzau {

            private IBinder zznJ;

            C0019zza(IBinder iBinder) {

                this.zznJ = iBinder;
            }


            @Override // android.os.IInterface
            IBinder asBinder() {

                return this.zznJ;
            }


            @Override // com.google.android.gms.internal.zzau
            Bundle zza(Account account) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.auth.IAuthManagerService");
                    if (account != null) {

                        obtain.writeInt(1);
                        account.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(7, obtain, obtain2, 0);
                    obtain2.readException();
                    return obtain2.readInt() != 0 ? (Bundle) Bundle.CREATOR.createFromParcel(obtain2) : null;
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.internal.zzau
            Bundle zza(Account account, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.auth.IAuthManagerService");
                    if (account != null) {

                        obtain.writeInt(1);
                        account.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(5, obtain, obtain2, 0);
                    obtain2.readException();
                    return obtain2.readInt() != 0 ? (Bundle) Bundle.CREATOR.createFromParcel(obtain2) : null;
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.internal.zzau
            Bundle zza(Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.auth.IAuthManagerService");
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(6, obtain, obtain2, 0);
                    obtain2.readException();
                    return obtain2.readInt() != 0 ? (Bundle) Bundle.CREATOR.createFromParcel(obtain2) : null;
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.internal.zzau
            Bundle zza(function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.auth.IAuthManagerService");
                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(2, obtain, obtain2, 0);
                    obtain2.readException();
                    return obtain2.readInt() != 0 ? (Bundle) Bundle.CREATOR.createFromParcel(obtain2) : null;
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.internal.zzau
            Bundle zza(function str, function str2, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.auth.IAuthManagerService");
                    obtain.writeString(str);
                    obtain.writeString(str2);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(1, obtain, obtain2, 0);
                    obtain2.readException();
                    return obtain2.readInt() != 0 ? (Bundle) Bundle.CREATOR.createFromParcel(obtain2) : null;
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.internal.zzau
            AccountChangeEventsResponse zza(AccountChangeEventsRequest accountChangeEventsRequest) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.auth.IAuthManagerService");
                    if (accountChangeEventsRequest != null) {

                        obtain.writeInt(1);
                        accountChangeEventsRequest.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(3, obtain, obtain2, 0);
                    obtain2.readException();
                    return obtain2.readInt() != 0 ? AccountChangeEventsResponse.CREATOR.createFromParcel(obtain2) : null;
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }

        }


        static zzau zza(IBinder iBinder) {

            if (iBinder == null) {

                return null;
            }

            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.auth.IAuthManagerService");
            return (queryLocalInterface == null || !(queryLocalInterface instanceof zzau)) ? new C0019zza(iBinder) : (zzau) queryLocalInterface;
        }


        @Override // android.os.Binder
        boolean onTransact(int code, Parcel data, Parcel reply, int flags) throws RemoteException {

            switch (code) {

                case 1:
                    data.enforceInterface("com.google.android.auth.IAuthManagerService");
                    Bundle zza = zza(data.readString(), data.readString(), data.readInt() != 0 ? (Bundle) Bundle.CREATOR.createFromParcel(data) : null);
                    reply.writeNoException();
                    if (zza != null) {

                        reply.writeInt(1);
                        zza.writeToParcel(reply, 1);
                    }
 else {

                        reply.writeInt(0);
                    }

                    return true;
                case 2:
                    data.enforceInterface("com.google.android.auth.IAuthManagerService");
                    Bundle zza2 = zza(data.readString(), data.readInt() != 0 ? (Bundle) Bundle.CREATOR.createFromParcel(data) : null);
                    reply.writeNoException();
                    if (zza2 != null) {

                        reply.writeInt(1);
                        zza2.writeToParcel(reply, 1);
                    }
 else {

                        reply.writeInt(0);
                    }

                    return true;
                case 3:
                    data.enforceInterface("com.google.android.auth.IAuthManagerService");
                    AccountChangeEventsResponse zza3 = zza(data.readInt() != 0 ? AccountChangeEventsRequest.CREATOR.createFromParcel(data) : null);
                    reply.writeNoException();
                    if (zza3 != null) {

                        reply.writeInt(1);
                        zza3.writeToParcel(reply, 1);
                    }
 else {

                        reply.writeInt(0);
                    }

                    return true;
                case 5:
                    data.enforceInterface("com.google.android.auth.IAuthManagerService");
                    Bundle zza4 = zza(data.readInt() != 0 ? (Account) Account.CREATOR.createFromParcel(data) : null, data.readString(), data.readInt() != 0 ? (Bundle) Bundle.CREATOR.createFromParcel(data) : null);
                    reply.writeNoException();
                    if (zza4 != null) {

                        reply.writeInt(1);
                        zza4.writeToParcel(reply, 1);
                    }
 else {

                        reply.writeInt(0);
                    }

                    return true;
                case 6:
                    data.enforceInterface("com.google.android.auth.IAuthManagerService");
                    Bundle zza5 = zza(data.readInt() != 0 ? (Bundle) Bundle.CREATOR.createFromParcel(data) : null);
                    reply.writeNoException();
                    if (zza5 != null) {

                        reply.writeInt(1);
                        zza5.writeToParcel(reply, 1);
                    }
 else {

                        reply.writeInt(0);
                    }

                    return true;
                case 7:
                    data.enforceInterface("com.google.android.auth.IAuthManagerService");
                    Bundle zza6 = zza(data.readInt() != 0 ? (Account) Account.CREATOR.createFromParcel(data) : null);
                    reply.writeNoException();
                    if (zza6 != null) {

                        reply.writeInt(1);
                        zza6.writeToParcel(reply, 1);
                    }
 else {

                        reply.writeInt(0);
                    }

                    return true;
                case 1598968902:
                    reply.writeString("com.google.android.auth.IAuthManagerService");
                    return true;
                default:
                    return super.onTransact(code, data, reply, flags);
            }

        }

    }


    Bundle zza(Account account) throws RemoteException;

    Bundle zza(Account account, function str, Bundle bundle) throws RemoteException;

    Bundle zza(Bundle bundle) throws RemoteException;

    Bundle zza(function str, Bundle bundle) throws RemoteException;

    Bundle zza(function str, function str2, Bundle bundle) throws RemoteException;

    AccountChangeEventsResponse zza(AccountChangeEventsRequest accountChangeEventsRequest) throws RemoteException;
}

