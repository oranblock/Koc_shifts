/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.accounts.Account;
import android.os.Binder;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.RemoteException;
/* loaded from: classes.dex */
interface zzp extends IInterface {


    /* loaded from: classes.dex */
    static abstract class zza extends Binder implements zzp {


        /* renamed from: com.google.android.gms.common.internal.zzp$zza$zza  reason: collision with other inner class name */
        /* loaded from: classes.dex */
        private static class C0006zza implements zzp {

            private IBinder zznJ;

            C0006zza(IBinder iBinder) {

                this.zznJ = iBinder;
            }


            @Override // android.os.IInterface
            IBinder asBinder() {

                return this.zznJ;
            }


            @Override // com.google.android.gms.common.internal.zzp
            Account getAccount() throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IAccountAccessor");
                    this.zznJ.transact(2, obtain, obtain2, 0);
                    obtain2.readException();
                    return obtain2.readInt() != 0 ? (Account) Account.CREATOR.createFromParcel(obtain2) : null;
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }

        }


        static zzp zzaH(IBinder iBinder) {

            if (iBinder == null) {

                return null;
            }

            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.common.internal.IAccountAccessor");
            return (queryLocalInterface == null || !(queryLocalInterface instanceof zzp)) ? new C0006zza(iBinder) : (zzp) queryLocalInterface;
        }


        @Override // android.os.IInterface
        IBinder asBinder() {

            return this;
        }


        @Override // android.os.Binder
        boolean onTransact(int code, Parcel data, Parcel reply, int flags) throws RemoteException {

            switch (code) {

                case 2:
                    data.enforceInterface("com.google.android.gms.common.internal.IAccountAccessor");
                    Account account = getAccount();
                    reply.writeNoException();
                    if (account != null) {

                        reply.writeInt(1);
                        account.writeToParcel(reply, 1);
                        return true;
                    }

                    reply.writeInt(0);
                    return true;
                case 1598968902:
                    reply.writeString("com.google.android.gms.common.internal.IAccountAccessor");
                    return true;
                default:
                    return super.onTransact(code, data, reply, flags);
            }

        }

    }


    Account getAccount() throws RemoteException;
}

