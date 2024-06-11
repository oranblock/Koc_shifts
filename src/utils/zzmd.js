/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.os.Binder;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.RemoteException;
import com.google.android.gms.internal.zzmc;
/* loaded from: classes.dex */
interface zzmd extends IInterface {


    /* loaded from: classes.dex */
    static abstract class zza extends Binder implements zzmd {


        /* renamed from: com.google.android.gms.internal.zzmd$zza$zza  reason: collision with other inner class name */
        /* loaded from: classes.dex */
        private static class C0027zza implements zzmd {

            private IBinder zznJ;

            C0027zza(IBinder iBinder) {

                this.zznJ = iBinder;
            }


            @Override // android.os.IInterface
            IBinder asBinder() {

                return this.zznJ;
            }


            @Override // com.google.android.gms.internal.zzmd
            void zza(zzmc zzmc) throws RemoteException {

                IBinder iBinder = null;
                Parcel obtain = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.service.ICommonService");
                    if (zzmc != null) {

                        iBinder = zzmc.asBinder();
                    }

                    obtain.writeStrongBinder(iBinder);
                    this.zznJ.transact(1, obtain, null, 1);
                }
 finally {

                    obtain.recycle();
                }

            }

        }


        static zzmd zzaQ(IBinder iBinder) {

            if (iBinder == null) {

                return null;
            }

            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.common.internal.service.ICommonService");
            return (queryLocalInterface == null || !(queryLocalInterface instanceof zzmd)) ? new C0027zza(iBinder) : (zzmd) queryLocalInterface;
        }


        @Override // android.os.Binder
        boolean onTransact(int code, Parcel data, Parcel reply, int flags) throws RemoteException {

            switch (code) {

                case 1:
                    data.enforceInterface("com.google.android.gms.common.internal.service.ICommonService");
                    zza(zzmc.zza.zzaP(data.readStrongBinder()));
                    return true;
                case 1598968902:
                    reply.writeString("com.google.android.gms.common.internal.service.ICommonService");
                    return true;
                default:
                    return super.onTransact(code, data, reply, flags);
            }

        }

    }


    void zza(zzmc zzmc) throws RemoteException;
}

