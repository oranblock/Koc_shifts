/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.content.Intent;
import android.os.Binder;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.RemoteException;
import com.google.android.gms.auth.api.consent.GetConsentIntentRequest;
/* loaded from: classes.dex */
interface zzkg extends IInterface {


    /* loaded from: classes.dex */
    static abstract class zza extends Binder implements zzkg {


        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: com.google.android.gms.internal.zzkg$zza$zza  reason: collision with other inner class name */
        /* loaded from: classes.dex */
        static class C0022zza implements zzkg {

            private IBinder zznJ;

            C0022zza(IBinder iBinder) {

                this.zznJ = iBinder;
            }


            @Override // android.os.IInterface
            IBinder asBinder() {

                return this.zznJ;
            }


            @Override // com.google.android.gms.internal.zzkg
            Intent zza(GetConsentIntentRequest getConsentIntentRequest) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.auth.api.consent.internal.IConsentService");
                    if (getConsentIntentRequest != null) {

                        obtain.writeInt(1);
                        getConsentIntentRequest.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(1, obtain, obtain2, 0);
                    obtain2.readException();
                    return obtain2.readInt() != 0 ? (Intent) Intent.CREATOR.createFromParcel(obtain2) : null;
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }

        }


        static zzkg zzaq(IBinder iBinder) {

            if (iBinder == null) {

                return null;
            }

            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.auth.api.consent.internal.IConsentService");
            return (queryLocalInterface == null || !(queryLocalInterface instanceof zzkg)) ? new C0022zza(iBinder) : (zzkg) queryLocalInterface;
        }


        @Override // android.os.Binder
        boolean onTransact(int code, Parcel data, Parcel reply, int flags) throws RemoteException {

            switch (code) {

                case 1:
                    data.enforceInterface("com.google.android.gms.auth.api.consent.internal.IConsentService");
                    Intent zza = zza(data.readInt() != 0 ? GetConsentIntentRequest.CREATOR.createFromParcel(data) : null);
                    reply.writeNoException();
                    if (zza != null) {

                        reply.writeInt(1);
                        zza.writeToParcel(reply, 1);
                    }
 else {

                        reply.writeInt(0);
                    }

                    return true;
                case 1598968902:
                    reply.writeString("com.google.android.gms.auth.api.consent.internal.IConsentService");
                    return true;
                default:
                    return super.onTransact(code, data, reply, flags);
            }

        }

    }


    Intent zza(GetConsentIntentRequest getConsentIntentRequest) throws RemoteException;
}

