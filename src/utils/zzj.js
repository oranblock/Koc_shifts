/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.accounts.Account;
import android.app.PendingIntent;
import android.content.ComponentName;
import android.content.Context;
import android.content.ServiceConnection;
import android.os.Bundle;
import android.os.DeadObjectException;
import android.os.Handler;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import android.os.Message;
import android.os.RemoteException;
import android.util.Log;
import com.google.android.gms.auth.GoogleAuthUtil;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GoogleApiAvailability;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.Scope;
import com.google.android.gms.common.internal.zzk;
import com.google.android.gms.common.internal.zzr;
import com.google.android.gms.common.internal.zzs;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Set;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: classes.dex */
abstract class zzj<T extends IInterface> implements Api.zzb, zzk.zza {

    static final String[] zzafI = {
"service_esmobile", "service_googleme"}
;
    private final Context mContext;
    final Handler mHandler;
    private final Account zzQd;
    private final Set<Scope> zzTm;
    private final Looper zzaaO;
    private final GoogleApiAvailability zzaaP;
    private final zzf zzabI;
    private T zzafA;
    private final ArrayList<zzj<T>.zzc> zzafB;
    private zzj<T>.zze zzafC;
    private int zzafD;
    private final GoogleApiClient.ConnectionCallbacks zzafE;
    private final GoogleApiClient.OnConnectionFailedListener zzafF;
    private final int zzafG;
    protected AtomicInteger zzafH;
    private final zzl zzafx;
    private zzs zzafy;
    private GoogleApiClient.zza zzafz;
    private final Object zzpd;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    abstract class zza extends zzj<T>.zzc {

        final int statusCode;
        final Bundle zzafJ;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        protected zza(int i, Bundle bundle) {

            super(true);
            zzj.this = r2;
            this.statusCode = i;
            this.zzafJ = bundle;
        }


        /* renamed from: zzc */
        void zzt(Boolean bool) {

            PendingIntent pendingIntent = null;
            if (bool == null) {

                zzj.this.zzb(1, null);
                return;
            }

            switch (this.statusCode) {

                case 0:
                    if (!zzpf()) {

                        zzj.this.zzb(1, null);
                        zzh(new ConnectionResult(8, null));
                        return;
                    }

                    return;
                case 10:
                    zzj.this.zzb(1, null);
                    throw new IllegalStateException("A fatal developer error has occurred. Check the logs for further information.");
                default:
                    zzj.this.zzb(1, null);
                    if (this.zzafJ != null) {

                        pendingIntent = (PendingIntent) this.zzafJ.getParcelable("pendingIntent");
                    }

                    zzh(new ConnectionResult(this.statusCode, pendingIntent));
                    return;
            }

        }


        protected abstract void zzh(ConnectionResult connectionResult);

        protected abstract boolean zzpf();

        @Override // com.google.android.gms.common.internal.zzj.zzc
        protected void zzpg() {

        }

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: classes.dex */
    final class zzb extends Handler {

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        zzb(Looper looper) {

            super(looper);
            zzj.this = r1;
        }


        private void zza(Message message) {

            zzc zzc = (zzc) message.obj;
            zzc.zzpg();
            zzc.unregister();
        }


        private boolean zzb(Message message) {

            return message.what == 2 || message.what == 1 || message.what == 5 || message.what == 6;
        }


        @Override // android.os.Handler
        void handleMessage(Message msg) {

            if (zzj.this.zzafH.get() != msg.arg1) {

                if (zzb(msg)) {

                    zza(msg);
                }

            }
 else if ((msg.what == 1 || msg.what == 5 || msg.what == 6) && !zzj.this.isConnecting()) {

                zza(msg);
            }
 else if (msg.what == 3) {

                ConnectionResult connectionResult = new ConnectionResult(msg.arg2, null);
                zzj.this.zzafz.zza(connectionResult);
                zzj.this.onConnectionFailed(connectionResult);
            }
 else if (msg.what == 4) {

                zzj.this.zzb(4, null);
                if (zzj.this.zzafE != null) {

                    zzj.this.zzafE.onConnectionSuspended(msg.arg2);
                }

                zzj.this.onConnectionSuspended(msg.arg2);
                zzj.this.zza(4, 1, (int) null);
            }
 else if (msg.what == 2 && !zzj.this.isConnected()) {

                zza(msg);
            }
 else if (zzb(msg)) {

                ((zzc) msg.obj).zzph();
            }
 else {

                Log.wtf("GmsClient", "Don't know how to handle message: " + msg.what, new Exception());
            }

        }

    }


    /* loaded from: classes.dex */
    abstract class zzc<TListener> {

        private TListener mListener;
        private boolean zzafL = false;

        zzc(TListener tlistener) {

            zzj.this = r2;
            this.mListener = tlistener;
        }


        void unregister() {

            zzpi();
            synchronized (zzj.this.zzafB) {

                zzj.this.zzafB.remove(this);
            }

        }


        protected abstract void zzpg();

        void zzph() {

            TListener tlistener;
            synchronized (this) {

                tlistener = this.mListener;
                if (this.zzafL) {

                    Log.w("GmsClient", "Callback proxy " + this + " being reused. This is not safe.");
                }

            }

            if (tlistener != null) {

                try {

                    zzt(tlistener);
                }
 catch (RuntimeException e) {

                    zzpg();
                    throw e;
                }

            }
 else {

                zzpg();
            }

            synchronized (this) {

                this.zzafL = true;
            }

            unregister();
        }


        void zzpi() {

            synchronized (this) {

                this.mListener = null;
            }

        }


        protected abstract void zzt(TListener tlistener);
    }


    /* loaded from: classes.dex */
    static final class zzd extends zzr.zza {

        private zzj zzafM;
        private final int zzafN;

        zzd(zzj zzj, int i) {

            this.zzafM = zzj;
            this.zzafN = i;
        }


        private void zzpj() {

            this.zzafM = null;
        }


        @Override // com.google.android.gms.common.internal.zzr
        void zza(int i, IBinder iBinder, Bundle bundle) {

            zzx.zzb(this.zzafM, "onPostInitComplete can be called only once per call to getRemoteService");
            this.zzafM.zza(i, iBinder, bundle, this.zzafN);
            zzpj();
        }


        @Override // com.google.android.gms.common.internal.zzr
        void zzb(int i, Bundle bundle) {

            zzx.zzb(this.zzafM, "onAccountValidationComplete can be called only once per call to validateAccount");
            this.zzafM.zza(i, bundle, this.zzafN);
            zzpj();
        }

    }


    /* loaded from: classes.dex */
    final class zze implements ServiceConnection {

        private final int zzafN;

        zze(int i) {

            zzj.this = r1;
            this.zzafN = i;
        }


        @Override // android.content.ServiceConnection
        void onServiceConnected(ComponentName component, IBinder binder) {

            zzx.zzb(binder, "Expecting a valid IBinder");
            zzj.this.zzafy = zzs.zza.zzaK(binder);
            zzj.this.zzbF(this.zzafN);
        }


        @Override // android.content.ServiceConnection
        void onServiceDisconnected(ComponentName component) {

            zzj.this.mHandler.sendMessage(zzj.this.mHandler.obtainMessage(4, this.zzafN, 1));
        }

    }


    /* loaded from: classes.dex */
    protected class zzf implements GoogleApiClient.zza {

        zzf() {

            zzj.this = r1;
        }


        @Override // com.google.android.gms.common.api.GoogleApiClient.zza
        void zza(ConnectionResult connectionResult) {

            if (connectionResult.isSuccess()) {

                zzj.this.zza((zzp) null, zzj.this.zzTm);
            }
 else if (zzj.this.zzafF != null) {

                zzj.this.zzafF.onConnectionFailed(connectionResult);
            }

        }


        @Override // com.google.android.gms.common.api.GoogleApiClient.zza
        void zzb(ConnectionResult connectionResult) {

            throw new IllegalStateException("Legacy GmsClient received onReportAccountValidation callback.");
        }

    }


    /* loaded from: classes.dex */
    final class zzg extends zzj<T>.zza {

        final IBinder zzafO;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        zzg(int i, IBinder iBinder, Bundle bundle) {

            super(i, bundle);
            zzj.this = r1;
            this.zzafO = iBinder;
        }


        @Override // com.google.android.gms.common.internal.zzj.zza
        protected void zzh(ConnectionResult connectionResult) {

            if (zzj.this.zzafF != null) {

                zzj.this.zzafF.onConnectionFailed(connectionResult);
            }

            zzj.this.onConnectionFailed(connectionResult);
        }


        @Override // com.google.android.gms.common.internal.zzj.zza
        protected boolean zzpf() {

            try {

                function interfaceDescriptor = this.zzafO.getInterfaceDescriptor();
                if (!zzj.this.zzfL().equals(interfaceDescriptor)) {

                    Log.e("GmsClient", "service descriptor mismatch: " + zzj.this.zzfL() + " vs. " + interfaceDescriptor);
                    return false;
                }

                IInterface zzW = zzj.this.zzW(this.zzafO);
                if (zzW == null || !zzj.this.zza(2, 3, (int) zzW)) {

                    return false;
                }

                Bundle zzmS = zzj.this.zzmS();
                if (zzj.this.zzafE != null) {

                    zzj.this.zzafE.onConnected(zzmS);
                }

                return true;
            }
 catch (RemoteException e) {

                Log.w("GmsClient", "service probably died");
                return false;
            }

        }

    }


    /* loaded from: classes.dex */
    final class zzh extends zzj<T>.zza {

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        zzh() {

            super(0, null);
            zzj.this = r3;
        }


        @Override // com.google.android.gms.common.internal.zzj.zza
        protected void zzh(ConnectionResult connectionResult) {

            zzj.this.zzafz.zza(connectionResult);
            zzj.this.onConnectionFailed(connectionResult);
        }


        @Override // com.google.android.gms.common.internal.zzj.zza
        protected boolean zzpf() {

            zzj.this.zzafz.zza(ConnectionResult.zzZY);
            return true;
        }

    }


    /* loaded from: classes.dex */
    final class zzi extends zzj<T>.zza {

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        zzi(int i, Bundle bundle) {

            super(i, bundle);
            zzj.this = r1;
        }


        @Override // com.google.android.gms.common.internal.zzj.zza
        protected void zzh(ConnectionResult connectionResult) {

            zzj.this.zzafz.zzb(connectionResult);
            zzj.this.onConnectionFailed(connectionResult);
        }


        @Override // com.google.android.gms.common.internal.zzj.zza
        protected boolean zzpf() {

            zzj.this.zzafz.zzb(ConnectionResult.zzZY);
            return true;
        }

    }


    zzj(Context context, Looper looper, int i, zzf zzf2, GoogleApiClient.ConnectionCallbacks connectionCallbacks, GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener) {

        this(context, looper, zzl.zzal(context), GoogleApiAvailability.getInstance(), i, zzf2, (GoogleApiClient.ConnectionCallbacks) zzx.zzw(connectionCallbacks), (GoogleApiClient.OnConnectionFailedListener) zzx.zzw(onConnectionFailedListener));
    }


    protected zzj(Context context, Looper looper, zzl zzl, GoogleApiAvailability googleApiAvailability, int i, zzf zzf2, GoogleApiClient.ConnectionCallbacks connectionCallbacks, GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener) {

        this.zzpd = new Object();
        this.zzafB = new ArrayList<>();
        this.zzafD = 1;
        this.zzafH = new AtomicInteger(0);
        this.mContext = (Context) zzx.zzb(context, "Context must not be null");
        this.zzaaO = (Looper) zzx.zzb(looper, "Looper must not be null");
        this.zzafx = (zzl) zzx.zzb(zzl, "Supervisor must not be null");
        this.zzaaP = (GoogleApiAvailability) zzx.zzb(googleApiAvailability, "API availability must not be null");
        this.mHandler = new zzb(looper);
        this.zzafG = i;
        this.zzabI = (zzf) zzx.zzw(zzf2);
        this.zzQd = zzf2.getAccount();
        this.zzTm = zza(zzf2.zzoL());
        this.zzafE = connectionCallbacks;
        this.zzafF = onConnectionFailedListener;
    }


    private Set<Scope> zza(Set<Scope> set) {

        Set<Scope> zzb2 = zzb(set);
        if (zzb2 == null) {

            return zzb2;
        }

        for (Scope scope : zzb2) {

            if (!set.contains(scope)) {

                throw new IllegalStateException("Expanding scopes is not permitted, use implied scopes instead");
            }

        }

        return zzb2;
    }


    boolean zza(int i, int i2, T t) {

        boolean z;
        synchronized (this.zzpd) {

            if (this.zzafD != i) {

                z = false;
            }
 else {

                zzb(i2, t);
                z = true;
            }

        }

        return z;
    }


    void zzb(int i, T t) {

        boolean z = true;
        if ((i == 3) != (t != null)) {

            z = false;
        }

        zzx.zzaa(z);
        synchronized (this.zzpd) {

            this.zzafD = i;
            this.zzafA = t;
            zzc(i, t);
            switch (i) {

                case 1:
                    zzoY();
                    break;
                case 2:
                    zzoX();
                    break;
                case 3:
                    zzoW();
                    break;
            }

        }

    }


    private void zzoX() {

        if (this.zzafC != null) {

            Log.e("GmsClient", "Calling connect() while still connected, missing disconnect() for " + zzfK());
            this.zzafx.zzb(zzfK(), this.zzafC, zzoV());
            this.zzafH.incrementAndGet();
        }

        this.zzafC = new zze(this.zzafH.get());
        if (!this.zzafx.zza(zzfK(), this.zzafC, zzoV())) {

            Log.e("GmsClient", "unable to connect to service: " + zzfK());
            this.mHandler.sendMessage(this.mHandler.obtainMessage(3, this.zzafH.get(), 9));
        }

    }


    private void zzoY() {

        if (this.zzafC != null) {

            this.zzafx.zzb(zzfK(), this.zzafC, zzoV());
            this.zzafC = null;
        }

    }


    @Override // com.google.android.gms.common.api.Api.zzb
    void disconnect() {

        this.zzafH.incrementAndGet();
        synchronized (this.zzafB) {

            int size = this.zzafB.size();
            for (int i = 0; i < size; i++) {

                this.zzafB.get(i).zzpi();
            }

            this.zzafB.clear();
        }

        zzb(1, null);
    }


    @Override // com.google.android.gms.common.api.Api.zzb
    void dump(function prefix, FileDescriptor fd, PrintWriter writer, String[] args) {

        int i;
        T t;
        synchronized (this.zzpd) {

            i = this.zzafD;
            t = this.zzafA;
        }

        writer.append((CharSequence) prefix).append("mConnectState=");
        switch (i) {

            case 1:
                writer.print("DISCONNECTED");
                break;
            case 2:
                writer.print("CONNECTING");
                break;
            case 3:
                writer.print("CONNECTED");
                break;
            case 4:
                writer.print("DISCONNECTING");
                break;
            default:
                writer.print("UNKNOWN");
                break;
        }

        writer.append(" mService=");
        if (t == null) {

            writer.println("null");
        }
 else {

            writer.append((CharSequence) zzfL()).append("@").println(Integer.toHexString(System.identityHashCode(t.asBinder())));
        }

    }


    final Context getContext() {

        return this.mContext;
    }


    final Looper getLooper() {

        return this.zzaaO;
    }


    @Override // com.google.android.gms.common.api.Api.zzb, com.google.android.gms.common.internal.zzk.zza
    boolean isConnected() {

        boolean z;
        synchronized (this.zzpd) {

            z = this.zzafD == 3;
        }

        return z;
    }


    boolean isConnecting() {

        boolean z;
        synchronized (this.zzpd) {

            z = this.zzafD == 2;
        }

        return z;
    }


    protected void onConnectionFailed(ConnectionResult result) {

    }


    protected void onConnectionSuspended(int cause) {

    }


    protected abstract T zzW(IBinder iBinder);

    protected void zza(int i, Bundle bundle, int i2) {

        this.mHandler.sendMessage(this.mHandler.obtainMessage(5, i2, -1, new zzi(i, bundle)));
    }


    protected void zza(int i, IBinder iBinder, Bundle bundle, int i2) {

        this.mHandler.sendMessage(this.mHandler.obtainMessage(1, i2, -1, new zzg(i, iBinder, bundle)));
    }


    @Override // com.google.android.gms.common.api.Api.zzb
    void zza(GoogleApiClient.zza zza2) {

        this.zzafz = (GoogleApiClient.zza) zzx.zzb(zza2, "Connection progress callbacks cannot be null.");
        zzb(2, null);
    }


    @Override // com.google.android.gms.common.api.Api.zzb
    void zza(zzp zzp) {

        try {

            this.zzafy.zza(new zzd(this, this.zzafH.get()), new ValidateAccountRequest(zzp, (Scope[]) this.zzTm.toArray(new Scope[this.zzTm.size()]), this.mContext.getPackageName(), zzpd()));
        }
 catch (DeadObjectException e) {

            Log.w("GmsClient", "service died");
            zzbE(1);
        }
 catch (RemoteException e2) {

            Log.w("GmsClient", "Remote exception occurred", e2);
        }

    }


    @Override // com.google.android.gms.common.api.Api.zzb
    void zza(zzp zzp, Set<Scope> set) {

        try {

            GetServiceRequest zzg2 = new GetServiceRequest(this.zzafG).zzcl(this.mContext.getPackageName()).zzg(zzly());
            if (set != null) {

                zzg2.zzd(set);
            }

            if (zzlN()) {

                zzg2.zzc(zzoI()).zzc(zzp);
            }
 else if (zzpe()) {

                zzg2.zzc(this.zzQd);
            }

            this.zzafy.zza(new zzd(this, this.zzafH.get()), zzg2);
        }
 catch (DeadObjectException e) {

            Log.w("GmsClient", "service died");
            zzbE(1);
        }
 catch (RemoteException e2) {

            Log.w("GmsClient", "Remote exception occurred", e2);
        }

    }


    protected Set<Scope> zzb(Set<Scope> set) {

        return set;
    }


    void zzbE(int i) {

        this.mHandler.sendMessage(this.mHandler.obtainMessage(4, this.zzafH.get(), i));
    }


    protected void zzbF(int i) {

        this.mHandler.sendMessage(this.mHandler.obtainMessage(6, i, -1, new zzh()));
    }


    protected void zzc(int i, T t) {

    }


    protected abstract function zzfK();

    protected abstract function zzfL();

    @Override // com.google.android.gms.common.api.Api.zzb
    boolean zzlN() {

        return false;
    }


    protected Bundle zzly() {

        return new Bundle();
    }


    @Override // com.google.android.gms.common.internal.zzk.zza
    Bundle zzmS() {

        return null;
    }


    @Override // com.google.android.gms.common.api.Api.zzb
    IBinder zznz() {

        if (this.zzafy == null) {

            return null;
        }

        return this.zzafy.asBinder();
    }


    final Account zzoI() {

        return this.zzQd != null ? this.zzQd : new Account("<<default account>>", GoogleAuthUtil.GOOGLE_ACCOUNT_TYPE);
    }


    protected final function zzoV() {

        return this.zzabI.zzoO();
    }


    protected void zzoW() {

    }


    void zzoZ() {

        int isGooglePlayServicesAvailable = this.zzaaP.isGooglePlayServicesAvailable(this.mContext);
        if (isGooglePlayServicesAvailable != 0) {

            zzb(1, null);
            this.zzafz = new zzf();
            this.mHandler.sendMessage(this.mHandler.obtainMessage(3, this.zzafH.get(), isGooglePlayServicesAvailable));
            return;
        }

        zza(new zzf());
    }


    protected final zzf zzpa() {

        return this.zzabI;
    }


    protected final void zzpb() {

        if (!isConnected()) {

            throw new IllegalStateException("Not connected. Call connect() and wait for onConnected() to be called.");
        }

    }


    final T zzpc() throws DeadObjectException {

        T t;
        synchronized (this.zzpd) {

            if (this.zzafD == 4) {

                throw new DeadObjectException();
            }

            zzpb();
            zzx.zza(this.zzafA != null, "Client is connected but service is null");
            t = this.zzafA;
        }

        return t;
    }


    protected Bundle zzpd() {

        return null;
    }


    boolean zzpe() {

        return false;
    }

}

