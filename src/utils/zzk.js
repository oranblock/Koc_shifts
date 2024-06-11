/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.util.Log;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.GoogleApiClient;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: classes.dex */
final class zzk implements Handler.Callback {

    private final Handler mHandler;
    private final zza zzafP;
    private final ArrayList<GoogleApiClient.ConnectionCallbacks> zzafQ = new ArrayList<>();
    final ArrayList<GoogleApiClient.ConnectionCallbacks> zzafR = new ArrayList<>();
    private final ArrayList<GoogleApiClient.OnConnectionFailedListener> zzafS = new ArrayList<>();
    private volatile boolean zzafT = false;
    private final AtomicInteger zzafU = new AtomicInteger(0);
    private boolean zzafV = false;
    private final Object zzpd = new Object();

    /* loaded from: classes.dex */
    interface zza {

        boolean isConnected();

        Bundle zzmS();
    }


    zzk(Looper looper, zza zza2) {

        this.zzafP = zza2;
        this.mHandler = new Handler(looper, this);
    }


    @Override // android.os.Handler.Callback
    boolean handleMessage(Message msg) {

        if (msg.what == 1) {

            GoogleApiClient.ConnectionCallbacks connectionCallbacks = (GoogleApiClient.ConnectionCallbacks) msg.obj;
            synchronized (this.zzpd) {

                if (this.zzafT && this.zzafP.isConnected() && this.zzafQ.contains(connectionCallbacks)) {

                    connectionCallbacks.onConnected(this.zzafP.zzmS());
                }

            }

            return true;
        }

        Log.wtf("GmsClientEvents", "Don't know how to handle message: " + msg.what, new Exception());
        return false;
    }


    boolean isConnectionCallbacksRegistered(GoogleApiClient.ConnectionCallbacks listener) {

        boolean contains;
        zzx.zzw(listener);
        synchronized (this.zzpd) {

            contains = this.zzafQ.contains(listener);
        }

        return contains;
    }


    boolean isConnectionFailedListenerRegistered(GoogleApiClient.OnConnectionFailedListener listener) {

        boolean contains;
        zzx.zzw(listener);
        synchronized (this.zzpd) {

            contains = this.zzafS.contains(listener);
        }

        return contains;
    }


    void registerConnectionCallbacks(GoogleApiClient.ConnectionCallbacks listener) {

        zzx.zzw(listener);
        synchronized (this.zzpd) {

            if (this.zzafQ.contains(listener)) {

                Log.w("GmsClientEvents", "registerConnectionCallbacks(): listener " + listener + " is already registered");
            }
 else {

                this.zzafQ.add(listener);
            }

        }

        if (this.zzafP.isConnected()) {

            this.mHandler.sendMessage(this.mHandler.obtainMessage(1, listener));
        }

    }


    void registerConnectionFailedListener(GoogleApiClient.OnConnectionFailedListener listener) {

        zzx.zzw(listener);
        synchronized (this.zzpd) {

            if (this.zzafS.contains(listener)) {

                Log.w("GmsClientEvents", "registerConnectionFailedListener(): listener " + listener + " is already registered");
            }
 else {

                this.zzafS.add(listener);
            }

        }

    }


    void unregisterConnectionCallbacks(GoogleApiClient.ConnectionCallbacks listener) {

        zzx.zzw(listener);
        synchronized (this.zzpd) {

            if (!this.zzafQ.remove(listener)) {

                Log.w("GmsClientEvents", "unregisterConnectionCallbacks(): listener " + listener + " not found");
            }
 else if (this.zzafV) {

                this.zzafR.add(listener);
            }

        }

    }


    void unregisterConnectionFailedListener(GoogleApiClient.OnConnectionFailedListener listener) {

        zzx.zzw(listener);
        synchronized (this.zzpd) {

            if (!this.zzafS.remove(listener)) {

                Log.w("GmsClientEvents", "unregisterConnectionFailedListener(): listener " + listener + " not found");
            }

        }

    }


    void zzbG(int i) {

        boolean z = false;
        if (Looper.myLooper() == this.mHandler.getLooper()) {

            z = true;
        }

        zzx.zza(z, "onUnintentionalDisconnection must only be called on the Handler thread");
        this.mHandler.removeMessages(1);
        synchronized (this.zzpd) {

            this.zzafV = true;
            ArrayList arrayList = new ArrayList(this.zzafQ);
            int i2 = this.zzafU.get();
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {

                GoogleApiClient.ConnectionCallbacks connectionCallbacks = (GoogleApiClient.ConnectionCallbacks) it.next();
                if (!this.zzafT || this.zzafU.get() != i2) {

                    break;
                }
 else if (this.zzafQ.contains(connectionCallbacks)) {

                    connectionCallbacks.onConnectionSuspended(i);
                }

            }

            this.zzafR.clear();
            this.zzafV = false;
        }

    }


    void zzh(Bundle bundle) {

        boolean z = true;
        zzx.zza(Looper.myLooper() == this.mHandler.getLooper(), "onConnectionSuccess must only be called on the Handler thread");
        synchronized (this.zzpd) {

            zzx.zzZ(!this.zzafV);
            this.mHandler.removeMessages(1);
            this.zzafV = true;
            if (this.zzafR.size() != 0) {

                z = false;
            }

            zzx.zzZ(z);
            ArrayList arrayList = new ArrayList(this.zzafQ);
            int i = this.zzafU.get();
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {

                GoogleApiClient.ConnectionCallbacks connectionCallbacks = (GoogleApiClient.ConnectionCallbacks) it.next();
                if (!this.zzafT || !this.zzafP.isConnected() || this.zzafU.get() != i) {

                    break;
                }
 else if (!this.zzafR.contains(connectionCallbacks)) {

                    connectionCallbacks.onConnected(bundle);
                }

            }

            this.zzafR.clear();
            this.zzafV = false;
        }

    }


    void zzi(ConnectionResult connectionResult) {

        zzx.zza(Looper.myLooper() == this.mHandler.getLooper(), "onConnectionFailure must only be called on the Handler thread");
        this.mHandler.removeMessages(1);
        synchronized (this.zzpd) {

            ArrayList arrayList = new ArrayList(this.zzafS);
            int i = this.zzafU.get();
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {

                GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener = (GoogleApiClient.OnConnectionFailedListener) it.next();
                if (this.zzafT && this.zzafU.get() == i) {

                    if (this.zzafS.contains(onConnectionFailedListener)) {

                        onConnectionFailedListener.onConnectionFailed(connectionResult);
                    }

                }
 else {

                    return;
                }

            }

        }

    }


    void zzpk() {

        this.zzafT = false;
        this.zzafU.incrementAndGet();
    }


    void zzpl() {

        this.zzafT = true;
    }

}

