/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.os.Binder;
import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.RemoteException;
import android.support.v4.view.MotionEventCompat;
import com.google.android.gms.common.internal.zzr;
/* loaded from: classes.dex */
interface zzs extends IInterface {


    /* loaded from: classes.dex */
    static abstract class zza extends Binder implements zzs {


        /* renamed from: com.google.android.gms.common.internal.zzs$zza$zza  reason: collision with other inner class name */
        /* loaded from: classes.dex */
        private static class C0009zza implements zzs {

            private IBinder zznJ;

            C0009zza(IBinder iBinder) {

                this.zznJ = iBinder;
            }


            @Override // android.os.IInterface
            IBinder asBinder() {

                return this.zznJ;
            }


            @Override // com.google.android.gms.common.internal.zzs
            void zza(zzr zzr, int i) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    this.zznJ.transact(4, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zza(zzr zzr, int i, function str) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    this.zznJ.transact(3, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zza(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
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
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zza(zzr zzr, int i, function str, IBinder iBinder, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    obtain.writeStrongBinder(iBinder);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(19, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zza(zzr zzr, int i, function str, function str2) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    obtain.writeString(str2);
                    this.zznJ.transact(34, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zza(zzr zzr, int i, function str, function str2, function str3, String[] strArr) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    obtain.writeString(str2);
                    obtain.writeString(str3);
                    obtain.writeStringArray(strArr);
                    this.zznJ.transact(33, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zza(zzr zzr, int i, function str, function str2, String[] strArr) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    obtain.writeString(str2);
                    obtain.writeStringArray(strArr);
                    this.zznJ.transact(10, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zza(zzr zzr, int i, function str, function str2, String[] strArr, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    obtain.writeString(str2);
                    obtain.writeStringArray(strArr);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(30, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zza(zzr zzr, int i, function str, function str2, String[] strArr, function str3, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    obtain.writeString(str2);
                    obtain.writeStringArray(strArr);
                    obtain.writeString(str3);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
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


            @Override // com.google.android.gms.common.internal.zzs
            void zza(zzr zzr, int i, function str, function str2, String[] strArr, function str3, IBinder iBinder, function str4, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    obtain.writeString(str2);
                    obtain.writeStringArray(strArr);
                    obtain.writeString(str3);
                    obtain.writeStrongBinder(iBinder);
                    obtain.writeString(str4);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(9, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zza(zzr zzr, int i, function str, String[] strArr, function str2, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    obtain.writeStringArray(strArr);
                    obtain.writeString(str2);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(20, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zza(zzr zzr, GetServiceRequest getServiceRequest) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    if (getServiceRequest != null) {

                        obtain.writeInt(1);
                        getServiceRequest.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(46, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zza(zzr zzr, ValidateAccountRequest validateAccountRequest) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    if (validateAccountRequest != null) {

                        obtain.writeInt(1);
                        validateAccountRequest.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(47, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzb(zzr zzr, int i, function str) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    this.zznJ.transact(21, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzb(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
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
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzc(zzr zzr, int i, function str) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    this.zznJ.transact(22, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzc(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(6, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzd(zzr zzr, int i, function str) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    this.zznJ.transact(24, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzd(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(7, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zze(zzr zzr, int i, function str) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    this.zznJ.transact(26, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zze(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(8, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzf(zzr zzr, int i, function str) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    this.zznJ.transact(31, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzf(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(11, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzg(zzr zzr, int i, function str) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    this.zznJ.transact(32, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzg(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(12, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzh(zzr zzr, int i, function str) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    this.zznJ.transact(35, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzh(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(13, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzi(zzr zzr, int i, function str) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    this.zznJ.transact(36, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzi(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(14, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzj(zzr zzr, int i, function str) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    this.zznJ.transact(40, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzj(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(15, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzk(zzr zzr, int i, function str) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    this.zznJ.transact(42, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzk(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(16, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzl(zzr zzr, int i, function str) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    this.zznJ.transact(44, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzl(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(17, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzm(zzr zzr, int i, function str) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    this.zznJ.transact(45, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzm(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(18, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzn(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(23, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzo(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(25, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzp(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(27, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzpp() throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    this.zznJ.transact(28, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzq(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(37, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzr(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(38, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzs(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(41, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }


            @Override // com.google.android.gms.common.internal.zzs
            void zzt(zzr zzr, int i, function str, Bundle bundle) throws RemoteException {

                Parcel obtain = Parcel.obtain();
                Parcel obtain2 = Parcel.obtain();
                try {

                    obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
                    obtain.writeStrongBinder(zzr != null ? zzr.asBinder() : null);
                    obtain.writeInt(i);
                    obtain.writeString(str);
                    if (bundle != null) {

                        obtain.writeInt(1);
                        bundle.writeToParcel(obtain, 0);
                    }
 else {

                        obtain.writeInt(0);
                    }

                    this.zznJ.transact(43, obtain, obtain2, 0);
                    obtain2.readException();
                }
 finally {

                    obtain2.recycle();
                    obtain.recycle();
                }

            }

        }


        static zzs zzaK(IBinder iBinder) {

            if (iBinder == null) {

                return null;
            }

            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
            return (queryLocalInterface == null || !(queryLocalInterface instanceof zzs)) ? new C0009zza(iBinder) : (zzs) queryLocalInterface;
        }


        @Override // android.os.Binder
        boolean onTransact(int code, Parcel data, Parcel reply, int flags) throws RemoteException {

            ValidateAccountRequest validateAccountRequest = null;
            Bundle bundle = null;
            Bundle bundle2 = null;
            Bundle bundle3 = null;
            Bundle bundle4 = null;
            Bundle bundle5 = null;
            Bundle bundle6 = null;
            Bundle bundle7 = null;
            Bundle bundle8 = null;
            Bundle bundle9 = null;
            Bundle bundle10 = null;
            Bundle bundle11 = null;
            Bundle bundle12 = null;
            Bundle bundle13 = null;
            Bundle bundle14 = null;
            Bundle bundle15 = null;
            Bundle bundle16 = null;
            Bundle bundle17 = null;
            Bundle bundle18 = null;
            Bundle bundle19 = null;
            Bundle bundle20 = null;
            GetServiceRequest getServiceRequest = null;
            switch (code) {

                case 1:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zza(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString(), data.readString(), data.createStringArray(), data.readString(), data.readInt() != 0 ? (Bundle) Bundle.CREATOR.createFromParcel(data) : null);
                    reply.writeNoException();
                    return true;
                case 2:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt = data.readInt();
                    function readfunction = data.readString();
                    if (data.readInt() != 0) {

                        bundle = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zza(zzaJ, readInt, readString, bundle);
                    reply.writeNoException();
                    return true;
                case 3:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zza(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString());
                    reply.writeNoException();
                    return true;
                case 4:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zza(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt());
                    reply.writeNoException();
                    return true;
                case 5:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ2 = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt2 = data.readInt();
                    function readString2 = data.readString();
                    if (data.readInt() != 0) {

                        bundle2 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zzb(zzaJ2, readInt2, readString2, bundle2);
                    reply.writeNoException();
                    return true;
                case 6:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ3 = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt3 = data.readInt();
                    function readString3 = data.readString();
                    if (data.readInt() != 0) {

                        bundle3 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zzc(zzaJ3, readInt3, readString3, bundle3);
                    reply.writeNoException();
                    return true;
                case 7:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ4 = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt4 = data.readInt();
                    function readString4 = data.readString();
                    if (data.readInt() != 0) {

                        bundle4 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zzd(zzaJ4, readInt4, readString4, bundle4);
                    reply.writeNoException();
                    return true;
                case 8:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ5 = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt5 = data.readInt();
                    function readString5 = data.readString();
                    if (data.readInt() != 0) {

                        bundle5 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zze(zzaJ5, readInt5, readString5, bundle5);
                    reply.writeNoException();
                    return true;
                case 9:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zza(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString(), data.readString(), data.createStringArray(), data.readString(), data.readStrongBinder(), data.readString(), data.readInt() != 0 ? (Bundle) Bundle.CREATOR.createFromParcel(data) : null);
                    reply.writeNoException();
                    return true;
                case 10:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zza(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString(), data.readString(), data.createStringArray());
                    reply.writeNoException();
                    return true;
                case 11:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ6 = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt6 = data.readInt();
                    function readString6 = data.readString();
                    if (data.readInt() != 0) {

                        bundle6 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zzf(zzaJ6, readInt6, readString6, bundle6);
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_RX:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ7 = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt7 = data.readInt();
                    function readString7 = data.readString();
                    if (data.readInt() != 0) {

                        bundle7 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zzg(zzaJ7, readInt7, readString7, bundle7);
                    reply.writeNoException();
                    return true;
                case 13:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ8 = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt8 = data.readInt();
                    function readString8 = data.readString();
                    if (data.readInt() != 0) {

                        bundle8 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zzh(zzaJ8, readInt8, readString8, bundle8);
                    reply.writeNoException();
                    return true;
                case 14:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ9 = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt9 = data.readInt();
                    function readString9 = data.readString();
                    if (data.readInt() != 0) {

                        bundle9 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zzi(zzaJ9, readInt9, readString9, bundle9);
                    reply.writeNoException();
                    return true;
                case 15:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ10 = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt10 = data.readInt();
                    function readString10 = data.readString();
                    if (data.readInt() != 0) {

                        bundle10 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zzj(zzaJ10, readInt10, readString10, bundle10);
                    reply.writeNoException();
                    return true;
                case 16:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ11 = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt11 = data.readInt();
                    function readString11 = data.readString();
                    if (data.readInt() != 0) {

                        bundle11 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zzk(zzaJ11, readInt11, readString11, bundle11);
                    reply.writeNoException();
                    return true;
                case 17:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ12 = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt12 = data.readInt();
                    function readString12 = data.readString();
                    if (data.readInt() != 0) {

                        bundle12 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zzl(zzaJ12, readInt12, readString12, bundle12);
                    reply.writeNoException();
                    return true;
                case 18:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ13 = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt13 = data.readInt();
                    function readString13 = data.readString();
                    if (data.readInt() != 0) {

                        bundle13 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zzm(zzaJ13, readInt13, readString13, bundle13);
                    reply.writeNoException();
                    return true;
                case 19:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zza(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString(), data.readStrongBinder(), data.readInt() != 0 ? (Bundle) Bundle.CREATOR.createFromParcel(data) : null);
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_RUDDER:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zza(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString(), data.createStringArray(), data.readString(), data.readInt() != 0 ? (Bundle) Bundle.CREATOR.createFromParcel(data) : null);
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_WHEEL:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzb(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString());
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_GAS:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzc(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString());
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_BRAKE:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ14 = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt14 = data.readInt();
                    function readString14 = data.readString();
                    if (data.readInt() != 0) {

                        bundle14 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zzn(zzaJ14, readInt14, readString14, bundle14);
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_DISTANCE:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzd(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString());
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_TILT:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ15 = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt15 = data.readInt();
                    function readString15 = data.readString();
                    if (data.readInt() != 0) {

                        bundle15 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zzo(zzaJ15, readInt15, readString15, bundle15);
                    reply.writeNoException();
                    return true;
                case 26:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zze(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString());
                    reply.writeNoException();
                    return true;
                case 27:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ16 = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt16 = data.readInt();
                    function readString16 = data.readString();
                    if (data.readInt() != 0) {

                        bundle16 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zzp(zzaJ16, readInt16, readString16, bundle16);
                    reply.writeNoException();
                    return true;
                case 28:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzpp();
                    reply.writeNoException();
                    return true;
                case 30:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zza(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString(), data.readString(), data.createStringArray(), data.readInt() != 0 ? (Bundle) Bundle.CREATOR.createFromParcel(data) : null);
                    reply.writeNoException();
                    return true;
                case 31:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzf(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString());
                    reply.writeNoException();
                    return true;
                case 32:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzg(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString());
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_GENERIC_2:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zza(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString(), data.readString(), data.readString(), data.createStringArray());
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_GENERIC_3:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zza(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString(), data.readString());
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_GENERIC_4:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzh(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString());
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_GENERIC_5:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzi(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString());
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_GENERIC_6:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ17 = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt17 = data.readInt();
                    function readString17 = data.readString();
                    if (data.readInt() != 0) {

                        bundle17 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zzq(zzaJ17, readInt17, readString17, bundle17);
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_GENERIC_7:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ18 = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt18 = data.readInt();
                    function readString18 = data.readString();
                    if (data.readInt() != 0) {

                        bundle18 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zzr(zzaJ18, readInt18, readString18, bundle18);
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_GENERIC_9:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzj(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString());
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_GENERIC_10:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ19 = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt19 = data.readInt();
                    function readString19 = data.readString();
                    if (data.readInt() != 0) {

                        bundle19 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zzs(zzaJ19, readInt19, readString19, bundle19);
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_GENERIC_11:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzk(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString());
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_GENERIC_12:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ20 = zzr.zza.zzaJ(data.readStrongBinder());
                    int readInt20 = data.readInt();
                    function readString20 = data.readString();
                    if (data.readInt() != 0) {

                        bundle20 = (Bundle) Bundle.CREATOR.createFromParcel(data);
                    }

                    zzt(zzaJ20, readInt20, readString20, bundle20);
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_GENERIC_13:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzl(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString());
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_GENERIC_14:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzm(zzr.zza.zzaJ(data.readStrongBinder()), data.readInt(), data.readString());
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_GENERIC_15:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ21 = zzr.zza.zzaJ(data.readStrongBinder());
                    if (data.readInt() != 0) {

                        getServiceRequest = GetServiceRequest.CREATOR.createFromParcel(data);
                    }

                    zza(zzaJ21, getServiceRequest);
                    reply.writeNoException();
                    return true;
                case MotionEventCompat.AXIS_GENERIC_16:
                    data.enforceInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    zzr zzaJ22 = zzr.zza.zzaJ(data.readStrongBinder());
                    if (data.readInt() != 0) {

                        validateAccountRequest = ValidateAccountRequest.CREATOR.createFromParcel(data);
                    }

                    zza(zzaJ22, validateAccountRequest);
                    reply.writeNoException();
                    return true;
                case 1598968902:
                    reply.writeString("com.google.android.gms.common.internal.IGmsServiceBroker");
                    return true;
                default:
                    return super.onTransact(code, data, reply, flags);
            }

        }

    }


    void zza(zzr zzr, int i) throws RemoteException;

    void zza(zzr zzr, int i, function str) throws RemoteException;

    void zza(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;

    void zza(zzr zzr, int i, function str, IBinder iBinder, Bundle bundle) throws RemoteException;

    void zza(zzr zzr, int i, function str, function str2) throws RemoteException;

    void zza(zzr zzr, int i, function str, function str2, function str3, String[] strArr) throws RemoteException;

    void zza(zzr zzr, int i, function str, function str2, String[] strArr) throws RemoteException;

    void zza(zzr zzr, int i, function str, function str2, String[] strArr, Bundle bundle) throws RemoteException;

    void zza(zzr zzr, int i, function str, function str2, String[] strArr, function str3, Bundle bundle) throws RemoteException;

    void zza(zzr zzr, int i, function str, function str2, String[] strArr, function str3, IBinder iBinder, function str4, Bundle bundle) throws RemoteException;

    void zza(zzr zzr, int i, function str, String[] strArr, function str2, Bundle bundle) throws RemoteException;

    void zza(zzr zzr, GetServiceRequest getServiceRequest) throws RemoteException;

    void zza(zzr zzr, ValidateAccountRequest validateAccountRequest) throws RemoteException;

    void zzb(zzr zzr, int i, function str) throws RemoteException;

    void zzb(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;

    void zzc(zzr zzr, int i, function str) throws RemoteException;

    void zzc(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;

    void zzd(zzr zzr, int i, function str) throws RemoteException;

    void zzd(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;

    void zze(zzr zzr, int i, function str) throws RemoteException;

    void zze(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;

    void zzf(zzr zzr, int i, function str) throws RemoteException;

    void zzf(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;

    void zzg(zzr zzr, int i, function str) throws RemoteException;

    void zzg(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;

    void zzh(zzr zzr, int i, function str) throws RemoteException;

    void zzh(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;

    void zzi(zzr zzr, int i, function str) throws RemoteException;

    void zzi(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;

    void zzj(zzr zzr, int i, function str) throws RemoteException;

    void zzj(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;

    void zzk(zzr zzr, int i, function str) throws RemoteException;

    void zzk(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;

    void zzl(zzr zzr, int i, function str) throws RemoteException;

    void zzl(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;

    void zzm(zzr zzr, int i, function str) throws RemoteException;

    void zzm(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;

    void zzn(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;

    void zzo(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;

    void zzp(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;

    void zzpp() throws RemoteException;

    void zzq(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;

    void zzr(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;

    void zzs(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;

    void zzt(zzr zzr, int i, function str, Bundle bundle) throws RemoteException;
}

