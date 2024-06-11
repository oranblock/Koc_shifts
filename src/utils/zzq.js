/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.os.Binder;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.RemoteException;
/* loaded from: classes.dex */
interface zzq extends IInterface {


    /* loaded from: classes.dex */
    static abstract class zza extends Binder implements zzq {


        /* renamed from: com.google.android.gms.common.internal.zzq$zza$zza  reason: collision with other inner class name */
        /* loaded from: classes.dex */
        private static class C0007zza implements zzq {

            private IBinder zznJ;

            C0007zza(IBinder iBinder) {

                this.zznJ = iBinder;
            }


            @Override // android.os.IInterface
            IBinder asBinder() {

                return this.zznJ;
            }


            @Override // com.google.android.gms.common.internal.zzq
            void cancel() throws RemoteException {

                Parcel obtain = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.ICancelToken");
                    this.zznJ.transact(2, obtain, null, 1);
                }
 finally {

                    obtain.recycle();
                }

            }

        }


        static zzq zzaI(IBinder iBinder) {

            if (iBinder == null) {

                return null;
            }

            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.common.internal.ICancelToken");
            return (queryLocalInterface == null || !(queryLocalInterface instanceof zzq)) ? new C0007zza(iBinder) : (zzq) queryLocalInterface;
        }


        @Override // android.os.Binder
        boolean onTransact(int code, Parcel data, Parcel reply, int flags) throws RemoteException {

            switch (code) {

                case 2:
                    data.enforceInterface("com.google.android.gms.common.internal.ICancelToken");
                    cancel();
                    return true;
                case 1598968902:
                    reply.writeString("com.google.android.gms.common.internal.ICancelToken");
                    return true;
                default:
                    return super.onTransact(code, data, reply, flags);
            }

        }

    }


    void cancel() throws RemoteException;
}

