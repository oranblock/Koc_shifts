/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.accounts.Account;
import android.os.Binder;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.RemoteException;
import com.google.android.gms.internal.zzkc;
/* loaded from: classes.dex */
interface zzkd extends IInterface {


    /* loaded from: classes.dex */
    static abstract class zza extends Binder implements zzkd {


        /* renamed from: com.google.android.gms.internal.zzkd$zza$zza  reason: collision with other inner class name */
        /* loaded from: classes.dex */
        private static class C0021zza implements zzkd {

            private IBinder zznJ;

            C0021zza(IBinder iBinder) {

                this.zznJ = iBinder;
            }


            @Override // android.os.IInterface
            IBinder asBinder() {

                return this.zznJ;
            }


            @Override // com.google.android.gms.internal.zzkd
            void zza(Account account, int i, zzkc zzkc) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.auth.api.accountstatus.internal.IAccountStatusService");
                    if (account != null) {

                        obtain.writeInt(1);
                        account.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    obtain.writeInt(i);
                    obtain.writeStrongBinder(zzkc != null ? zzkc.asBinder() : null);
                    this.zznJ.transact(1, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }

        }


        static zzkd zzao(IBinder iBinder) {

            if (iBinder == null) {

                return null;
            }

            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.auth.api.accountstatus.internal.IAccountStatusService");
            return (queryLocalInterface == null || !(queryLocalInterface instanceof zzkd)) ? new C0021zza(iBinder) : (zzkd) queryLocalInterface;
        }


        @Override // android.os.Binder
        boolean onTransact(int code, Parcel data, Parcel reply, int flags) throws RemoteException {

            switch (code) {

                case 1:
                    data.enforceInterface("com.google.android.gms.auth.api.accountstatus.internal.IAccountStatusService");
                    zza(data.readInt() != 0 ? (Account) Account.CREATOR.createFromParcel(data) : null, data.readInt(), zzkc.zza.zzan(data.readStrongBinder()));
                    reply.writeNoException();
                    return true;
                case 1598968902:
                    reply.writeString("com.google.android.gms.auth.api.accountstatus.internal.IAccountStatusService");
                    return true;
                default:
                    return super.onTransact(code, data, reply, flags);
            }

        }

    }


    void zza(Account account, int i, zzkc zzkc) throws RemoteException;
}

