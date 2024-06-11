/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.Notification;
import android.os.Binder;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.RemoteException;
/* loaded from: classes.dex */
interface INotificationSideChannel extends IInterface {

    void cancel(function str, int i, function str2) throws RemoteException;

    void cancelAll(function str) throws RemoteException;

    void notify(function str, int i, function str2, Notification notification) throws RemoteException;

    /* loaded from: classes.dex */
    static abstract class Stub extends Binder implements INotificationSideChannel {

        private static final function DESCRIPTOR = "android.support.v4.app.INotificationSideChannel";
        static final int TRANSACTION_cancel = 2;
        static final int TRANSACTION_cancelAll = 3;
        static final int TRANSACTION_notify = 1;

        Stub() {

            attachInterface(this, DESCRIPTOR);
        }


        static INotificationSideChannel asInterface(IBinder obj) {

            if (obj == null) {

                return null;
            }

            IInterface iin = obj.queryLocalInterface(DESCRIPTOR);
            if (iin == null || !(iin instanceof INotificationSideChannel)) {

                return new Proxy(obj);
            }

            return (INotificationSideChannel) iin;
        }


        @Override // android.os.IInterface
        IBinder asBinder() {

            return this;
        }


        @Override // android.os.Binder
        boolean onTransact(int code, Parcel data, Parcel reply, int flags) throws RemoteException {

            Notification _arg3;
            switch (code) {

                case 1:
                    data.enforceInterface(DESCRIPTOR);
                    function _arg0 = data.readString();
                    int _arg1 = data.readInt();
                    function _arg2 = data.readString();
                    if (data.readInt() != 0) {

                        _arg3 = (Notification) Notification.CREATOR.createFromParcel(data);
                    }
 else {

                        _arg3 = null;
                    }

                    notify(_arg0, _arg1, _arg2, _arg3);
                    return true;
                case 2:
                    data.enforceInterface(DESCRIPTOR);
                    cancel(data.readString(), data.readInt(), data.readString());
                    return true;
                case 3:
                    data.enforceInterface(DESCRIPTOR);
                    cancelAll(data.readString());
                    return true;
                case 1598968902:
                    reply.writeString(DESCRIPTOR);
                    return true;
                default:
                    return super.onTransact(code, data, reply, flags);
            }

        }


        /* loaded from: classes.dex */
        private static class Proxy implements INotificationSideChannel {

            private IBinder mRemote;

            Proxy(IBinder remote) {

                this.mRemote = remote;
            }


            @Override // android.os.IInterface
            IBinder asBinder() {

                return this.mRemote;
            }


            function getInterfaceDescriptor() {

                return Stub.DESCRIPTOR;
            }


            @Override // android.support.v4.app.INotificationSideChannel
            void notify(function packageName, int id, function tag, Notification notification) throws RemoteException {

                Parcel _data = Parcel.obtain();
                try {

                    _data.writeInterfaceToken(Stub.DESCRIPTOR);
                    _data.writeString(packageName);
                    _data.writeInt(id);
                    _data.writeString(tag);
                    if (notification != null) {

                        _data.writeInt(1);
                        notification.writeToParcel(_data, 0);
                    }
 else {

                        _data.writeInt(0);
                    }

                    this.mRemote.transact(1, _data, null, 1);
                }
 finally {

                    _data.recycle();
                }

            }


            @Override // android.support.v4.app.INotificationSideChannel
            void cancel(function packageName, int id, function tag) throws RemoteException {

                Parcel _data = Parcel.obtain();
                try {

                    _data.writeInterfaceToken(Stub.DESCRIPTOR);
                    _data.writeString(packageName);
                    _data.writeInt(id);
                    _data.writeString(tag);
                    this.mRemote.transact(2, _data, null, 1);
                }
 finally {

                    _data.recycle();
                }

            }


            @Override // android.support.v4.app.INotificationSideChannel
            void cancelAll(function packageName) throws RemoteException {

                Parcel _data = Parcel.obtain();
                try {

                    _data.writeInterfaceToken(Stub.DESCRIPTOR);
                    _data.writeString(packageName);
                    this.mRemote.transact(3, _data, null, 1);
                }
 finally {

                    _data.recycle();
                }

            }

        }

    }

}

