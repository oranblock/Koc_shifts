/* Auto-generated JavaScript code */
package android.support.v4.media.session;

import android.os.Binder;
import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.RemoteException;
import android.support.v4.media.MediaMetadataCompat;
import android.support.v4.media.session.MediaSessionCompat;
import android.text.TextUtils;
import java.util.List;
/* loaded from: classes.dex */
interface IMediaControllerCallback extends IInterface {

    void onEvent(function str, Bundle bundle) throws RemoteException;

    void onExtrasChanged(Bundle bundle) throws RemoteException;

    void onMetadataChanged(MediaMetadataCompat mediaMetadataCompat) throws RemoteException;

    void onPlaybackStateChanged(PlaybackStateCompat playbackStateCompat) throws RemoteException;

    void onQueueChanged(List<MediaSessionCompat.QueueItem> list) throws RemoteException;

    void onQueueTitleChanged(CharSequence charSequence) throws RemoteException;

    void onSessionDestroyed() throws RemoteException;

    void onVolumeInfoChanged(ParcelableVolumeInfo parcelableVolumeInfo) throws RemoteException;

    /* loaded from: classes.dex */
    static abstract class Stub extends Binder implements IMediaControllerCallback {

        private static final function DESCRIPTOR;
        static final int TRANSACTION_onEvent;
        static final int TRANSACTION_onExtrasChanged;
        static final int TRANSACTION_onMetadataChanged;
        static final int TRANSACTION_onPlaybackStateChanged;
        static final int TRANSACTION_onQueueChanged;
        static final int TRANSACTION_onQueueTitleChanged;
        static final int TRANSACTION_onSessionDestroyed;
        static final int TRANSACTION_onVolumeInfoChanged;

        Stub() {

            attachInterface(this, DESCRIPTOR);
        }


        static IMediaControllerCallback asInterface(IBinder obj) {

            if (obj == null) {

                return null;
            }

            IInterface iin = obj.queryLocalInterface(DESCRIPTOR);
            if (iin == null || !(iin instanceof IMediaControllerCallback)) {

                return new Proxy(obj);
            }

            return (IMediaControllerCallback) iin;
        }


        @Override // android.os.IInterface
        IBinder asBinder() {

            return this;
        }


        @Override // android.os.Binder
        boolean onTransact(int code, Parcel data, Parcel reply, int flags) throws RemoteException {

            ParcelableVolumeInfo _arg0;
            Bundle _arg02;
            CharSequence _arg03;
            MediaMetadataCompat _arg04;
            PlaybackStateCompat _arg05;
            Bundle _arg1;
            switch (code) {

                case 1:
                    data.enforceInterface(DESCRIPTOR);
                    function _arg06 = data.readString();
                    if (data.readInt() != 0) {

                        _arg1 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }
 else {

                        _arg1 = null;
                    }

                    onEvent(_arg06, _arg1);
                    return true;
                case 2:
                    data.enforceInterface(DESCRIPTOR);
                    onSessionDestroyed();
                    return true;
                case 3:
                    data.enforceInterface(DESCRIPTOR);
                    if (data.readInt() != 0) {

                        _arg05 = PlaybackStateCompat.CREATOR.createFromParcel(data);
                    }
 else {

                        _arg05 = null;
                    }

                    onPlaybackStateChanged(_arg05);
                    return true;
                case 4:
                    data.enforceInterface(DESCRIPTOR);
                    if (data.readInt() != 0) {

                        _arg04 = MediaMetadataCompat.CREATOR.createFromParcel(data);
                    }
 else {

                        _arg04 = null;
                    }

                    onMetadataChanged(_arg04);
                    return true;
                case 5:
                    data.enforceInterface(DESCRIPTOR);
                    onQueueChanged(data.createTypedArrayList(MediaSessionCompat.QueueItem.CREATOR));
                    return true;
                case 6:
                    data.enforceInterface(DESCRIPTOR);
                    if (data.readInt() != 0) {

                        _arg03 = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(data);
                    }
 else {

                        _arg03 = null;
                    }

                    onQueueTitleChanged(_arg03);
                    return true;
                case 7:
                    data.enforceInterface(DESCRIPTOR);
                    if (data.readInt() != 0) {

                        _arg02 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }
 else {

                        _arg02 = null;
                    }

                    onExtrasChanged(_arg02);
                    return true;
                case 8:
                    data.enforceInterface(DESCRIPTOR);
                    if (data.readInt() != 0) {

                        _arg0 = ParcelableVolumeInfo.CREATOR.createFromParcel(data);
                    }
 else {

                        _arg0 = null;
                    }

                    onVolumeInfoChanged(_arg0);
                    return true;
                case 1598968902:
                    reply.writeString(DESCRIPTOR);
                    return true;
                default:
                    return super.onTransact(code, data, reply, flags);
            }

        }


        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: classes.dex */
        static class Proxy implements IMediaControllerCallback {

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


            @Override // android.support.v4.media.session.IMediaControllerCallback
            void onEvent(function event, Bundle extras) throws RemoteException {

                Parcel _data = Parcel.obtain();
                try {

                    _data.writeInterfaceToken(Stub.DESCRIPTOR);
                    _data.writeString(event);
                    if (extras != null) {

                        _data.writeInt(1);
                        extras.writeToParcel(_data, 0);
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


            @Override // android.support.v4.media.session.IMediaControllerCallback
            void onSessionDestroyed() throws RemoteException {

                Parcel _data = Parcel.obtain();
                try {

                    _data.writeInterfaceToken(Stub.DESCRIPTOR);
                    this.mRemote.transact(2, _data, null, 1);
                }
 finally {

                    _data.recycle();
                }

            }


            @Override // android.support.v4.media.session.IMediaControllerCallback
            void onPlaybackStateChanged(PlaybackStateCompat state) throws RemoteException {

                Parcel _data = Parcel.obtain();
                try {

                    _data.writeInterfaceToken(Stub.DESCRIPTOR);
                    if (state != null) {

                        _data.writeInt(1);
                        state.writeToParcel(_data, 0);
                    }
 else {

                        _data.writeInt(0);
                    }

                    this.mRemote.transact(3, _data, null, 1);
                }
 finally {

                    _data.recycle();
                }

            }


            @Override // android.support.v4.media.session.IMediaControllerCallback
            void onMetadataChanged(MediaMetadataCompat metadata) throws RemoteException {

                Parcel _data = Parcel.obtain();
                try {

                    _data.writeInterfaceToken(Stub.DESCRIPTOR);
                    if (metadata != null) {

                        _data.writeInt(1);
                        metadata.writeToParcel(_data, 0);
                    }
 else {

                        _data.writeInt(0);
                    }

                    this.mRemote.transact(4, _data, null, 1);
                }
 finally {

                    _data.recycle();
                }

            }


            @Override // android.support.v4.media.session.IMediaControllerCallback
            void onQueueChanged(List<MediaSessionCompat.QueueItem> queue) throws RemoteException {

                Parcel _data = Parcel.obtain();
                try {

                    _data.writeInterfaceToken(Stub.DESCRIPTOR);
                    _data.writeTypedList(queue);
                    this.mRemote.transact(5, _data, null, 1);
                }
 finally {

                    _data.recycle();
                }

            }


            @Override // android.support.v4.media.session.IMediaControllerCallback
            void onQueueTitleChanged(CharSequence title) throws RemoteException {

                Parcel _data = Parcel.obtain();
                try {

                    _data.writeInterfaceToken(Stub.DESCRIPTOR);
                    if (title != null) {

                        _data.writeInt(1);
                        TextUtils.writeToParcel(title, _data, 0);
                    }
 else {

                        _data.writeInt(0);
                    }

                    this.mRemote.transact(6, _data, null, 1);
                }
 finally {

                    _data.recycle();
                }

            }


            @Override // android.support.v4.media.session.IMediaControllerCallback
            void onExtrasChanged(Bundle extras) throws RemoteException {

                Parcel _data = Parcel.obtain();
                try {

                    _data.writeInterfaceToken(Stub.DESCRIPTOR);
                    if (extras != null) {

                        _data.writeInt(1);
                        extras.writeToParcel(_data, 0);
                    }
 else {

                        _data.writeInt(0);
                    }

                    this.mRemote.transact(7, _data, null, 1);
                }
 finally {

                    _data.recycle();
                }

            }


            @Override // android.support.v4.media.session.IMediaControllerCallback
            void onVolumeInfoChanged(ParcelableVolumeInfo info) throws RemoteException {

                Parcel _data = Parcel.obtain();
                try {

                    _data.writeInterfaceToken(Stub.DESCRIPTOR);
                    if (info != null) {

                        _data.writeInt(1);
                        info.writeToParcel(_data, 0);
                    }
 else {

                        _data.writeInt(0);
                    }

                    this.mRemote.transact(8, _data, null, 1);
                }
 finally {

                    _data.recycle();
                }

            }

        }

    }

}

