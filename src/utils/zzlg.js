/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.content.Context;
import android.os.Bundle;
import android.os.Looper;
import android.util.Log;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GoogleApiAvailability;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.Result;
import com.google.android.gms.common.api.Scope;
import com.google.android.gms.common.internal.ResolveAccountResponse;
import com.google.android.gms.common.internal.zzf;
import com.google.android.gms.common.internal.zzp;
import com.google.android.gms.common.internal.zzt;
import com.google.android.gms.common.internal.zzx;
import com.google.android.gms.internal.zzlb;
import com.google.android.gms.internal.zzli;
import com.google.android.gms.signin.internal.AuthAccountResult;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Future;
import java.util.concurrent.locks.Lock;
/* loaded from: classes.dex */
class zzlg implements zzlj {

    private final Context mContext;
    private final GoogleApiAvailability zzaaP;
    private final Api.zza<? extends zzqw, zzqx> zzaaQ;
    private zzqw zzabB;
    private int zzabC;
    private boolean zzabD;
    private boolean zzabE;
    private zzp zzabF;
    private boolean zzabG;
    private boolean zzabH;
    private final com.google.android.gms.common.internal.zzf zzabI;
    private final Map<Api<?>, Integer> zzabJ;
    private final zzli zzabr;
    private final Lock zzabt;
    private ConnectionResult zzabu;
    private int zzabv;
    private int zzaby;
    private int zzabw = 0;
    private boolean zzabx = false;
    private final Bundle zzabz = new Bundle();
    private final Set<Api.zzc> zzabA = new HashSet();
    private ArrayList<Future<?>> zzabK = new ArrayList<>();

    /* loaded from: classes.dex */
    private static class zza extends com.google.android.gms.signin.internal.zzb {

        private final WeakReference<zzlg> zzabM;

        zza(zzlg zzlg) {

            this.zzabM = new WeakReference<>(zzlg);
        }


        @Override // com.google.android.gms.signin.internal.zzb, com.google.android.gms.signin.internal.zze
        void zza(final ConnectionResult connectionResult, AuthAccountResult authAccountResult) {

            final zzlg zzlg = this.zzabM.get();
            if (zzlg != null) {

                zzlg.zzabr.zza(new zzli.zzb(zzlg) {
 // from class: com.google.android.gms.internal.zzlg.zza.1
                    @Override // com.google.android.gms.internal.zzli.zzb
                    void zznO() {

                        zzlg.zzc(connectionResult);
                    }

                }
);
            }

        }

    }


    /* loaded from: classes.dex */
    private static class zzb extends zzt.zza {

        private final WeakReference<zzlg> zzabM;

        zzb(zzlg zzlg) {

            this.zzabM = new WeakReference<>(zzlg);
        }


        @Override // com.google.android.gms.common.internal.zzt
        void zzb(final ResolveAccountResponse resolveAccountResponse) {

            final zzlg zzlg = this.zzabM.get();
            if (zzlg != null) {

                zzlg.zzabr.zza(new zzli.zzb(zzlg) {
 // from class: com.google.android.gms.internal.zzlg.zzb.1
                    @Override // com.google.android.gms.internal.zzli.zzb
                    void zznO() {

                        zzlg.zza(resolveAccountResponse);
                    }

                }
);
            }

        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    class zzc extends zzi {

        private zzc() {

            super();
        }


        @Override // com.google.android.gms.internal.zzlg.zzi
        void zznO() {

            zzlg.this.zzabB.zza(zzlg.this.zzabF, zzlg.this.zzabr.zzaci, new zza(zzlg.this));
        }

    }


    /* loaded from: classes.dex */
    private static class zzd implements GoogleApiClient.zza {

        private final WeakReference<zzlg> zzabM;
        private final Api<?> zzabS;
        private final int zzabT;

        zzd(zzlg zzlg, Api<?> api, int i) {

            this.zzabM = new WeakReference<>(zzlg);
            this.zzabS = api;
            this.zzabT = i;
        }


        @Override // com.google.android.gms.common.api.GoogleApiClient.zza
        void zza(ConnectionResult connectionResult) {

            boolean z = false;
            zzlg zzlg = this.zzabM.get();
            if (zzlg != null) {

                if (Looper.myLooper() == zzlg.zzabr.getLooper()) {

                    z = true;
                }

                zzx.zza(z, "onReportServiceBinding must be called on the GoogleApiClient handler thread");
                zzlg.zzabt.lock();
                try {

                    if (zzlg.zzbn(0)) {

                        if (!connectionResult.isSuccess()) {

                            zzlg.zzb(connectionResult, this.zzabS, this.zzabT);
                        }

                        if (zzlg.zznP()) {

                            zzlg.zznQ();
                        }

                    }

                }
 finally {

                    zzlg.zzabt.unlock();
                }

            }

        }


        @Override // com.google.android.gms.common.api.GoogleApiClient.zza
        void zzb(ConnectionResult connectionResult) {

            boolean z = true;
            zzlg zzlg = this.zzabM.get();
            if (zzlg != null) {

                if (Looper.myLooper() != zzlg.zzabr.getLooper()) {

                    z = false;
                }

                zzx.zza(z, "onReportAccountValidation must be called on the GoogleApiClient handler thread");
                zzlg.zzabt.lock();
                try {

                    if (zzlg.zzbn(1)) {

                        if (!connectionResult.isSuccess()) {

                            zzlg.zzb(connectionResult, this.zzabS, this.zzabT);
                        }

                        if (zzlg.zznP()) {

                            zzlg.zznS();
                        }

                    }

                }
 finally {

                    zzlg.zzabt.unlock();
                }

            }

        }

    }


    /* loaded from: classes.dex */
    private class zze extends zzi {

        private final Map<Api.zzb, GoogleApiClient.zza> zzabU;

        zze(Map<Api.zzb, GoogleApiClient.zza> map) {

            super();
            this.zzabU = map;
        }


        @Override // com.google.android.gms.internal.zzlg.zzi
        void zznO() {

            int isGooglePlayServicesAvailable = zzlg.this.zzaaP.isGooglePlayServicesAvailable(zzlg.this.mContext);
            if (isGooglePlayServicesAvailable != 0) {

                final ConnectionResult connectionResult = new ConnectionResult(isGooglePlayServicesAvailable, null);
                zzlg.this.zzabr.zza(new zzli.zzb(zzlg.this) {
 // from class: com.google.android.gms.internal.zzlg.zze.1
                    @Override // com.google.android.gms.internal.zzli.zzb
                    void zznO() {

                        zzlg.this.zzf(connectionResult);
                    }

                }
);
                return;
            }

            if (zzlg.this.zzabD) {

                zzlg.this.zzabB.connect();
            }

            for (Api.zzb zzb : this.zzabU.keySet()) {

                zzb.zza(this.zzabU.get(zzb));
            }

        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    class zzf extends zzi {

        private final ArrayList<Api.zzb> zzabX;

        zzf(ArrayList<Api.zzb> arrayList) {

            super();
            this.zzabX = arrayList;
        }


        @Override // com.google.android.gms.internal.zzlg.zzi
        void zznO() {

            Set<Scope> set = zzlg.this.zzabr.zzaci;
            Set<Scope> zznX = set.isEmpty() ? zzlg.this.zznX() : set;
            Iterator<Api.zzb> it = this.zzabX.iterator();
            while (it.hasNext()) {

                it.next().zza(zzlg.this.zzabF, zznX);
            }

        }

    }


    /* loaded from: classes.dex */
    private class zzg implements GoogleApiClient.ConnectionCallbacks, GoogleApiClient.OnConnectionFailedListener {

        private zzg() {

        }


        @Override // com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
        void onConnected(Bundle connectionHint) {

            zzlg.this.zzabB.zza(new zzb(zzlg.this));
        }


        @Override // com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
        void onConnectionFailed(ConnectionResult result) {

            zzlg.this.zzabt.lock();
            try {

                if (zzlg.this.zze(result)) {

                    zzlg.this.zznV();
                    zzlg.this.zznT();
                }
 else {

                    zzlg.this.zzf(result);
                }

            }
 finally {

                zzlg.this.zzabt.unlock();
            }

        }


        @Override // com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
        void onConnectionSuspended(int cause) {

        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    class zzh extends zzi {

        private final ArrayList<Api.zzb> zzabX;

        zzh(ArrayList<Api.zzb> arrayList) {

            super();
            this.zzabX = arrayList;
        }


        @Override // com.google.android.gms.internal.zzlg.zzi
        void zznO() {

            Iterator<Api.zzb> it = this.zzabX.iterator();
            while (it.hasNext()) {

                it.next().zza(zzlg.this.zzabF);
            }

        }

    }


    /* loaded from: classes.dex */
    private abstract class zzi implements Runnable {

        private zzi() {

        }


        @Override // java.lang.Runnable
        void run() {

            zzlg.this.zzabt.lock();
            try {

                if (!Thread.interrupted()) {

                    zznO();
                }

            }
 catch (RuntimeException e) {

                zzlg.this.zzabr.zza(e);
            }
 finally {

                zzlg.this.zzabt.unlock();
            }

        }


        protected abstract void zznO();
    }


    zzlg(zzli zzli, com.google.android.gms.common.internal.zzf zzf2, Map<Api<?>, Integer> map, GoogleApiAvailability googleApiAvailability, Api.zza<? extends zzqw, zzqx> zza2, Lock lock, Context context) {

        this.zzabr = zzli;
        this.zzabI = zzf2;
        this.zzabJ = map;
        this.zzaaP = googleApiAvailability;
        this.zzaaQ = zza2;
        this.zzabt = lock;
        this.mContext = context;
    }


    private void zzY(boolean z) {

        if (this.zzabB != null) {

            if (this.zzabB.isConnected() && z) {

                this.zzabB.zzCe();
            }

            this.zzabB.disconnect();
            this.zzabF = null;
        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    void zza(ResolveAccountResponse resolveAccountResponse) {

        if (zzbn(0)) {

            ConnectionResult zzpr = resolveAccountResponse.zzpr();
            if (zzpr.isSuccess()) {

                this.zzabF = resolveAccountResponse.zzpq();
                this.zzabE = true;
                this.zzabG = resolveAccountResponse.zzps();
                this.zzabH = resolveAccountResponse.zzpt();
                zznQ();
            }
 else if (zze(zzpr)) {

                zznV();
                zznQ();
            }
 else {

                zzf(zzpr);
            }

        }

    }


    private boolean zza(int i, int i2, ConnectionResult connectionResult) {

        if (i2 != 1 || zzd(connectionResult)) {

            return this.zzabu == null || i < this.zzabv;
        }

        return false;
    }


    /* JADX INFO: Access modifiers changed from: private */
    void zzb(ConnectionResult connectionResult, Api<?> api, int i) {

        if (i != 2) {

            int priority = api.zznv().getPriority();
            if (zza(priority, i, connectionResult)) {

                this.zzabu = connectionResult;
                this.zzabv = priority;
            }

        }

        this.zzabr.zzach.put(api.zznx(), connectionResult);
    }


    /* JADX INFO: Access modifiers changed from: private */
    boolean zzbn(int i) {

        if (this.zzabw == i) {

            return true;
        }

        Log.i("GoogleApiClientConnecting", this.zzabr.zzog());
        Log.wtf("GoogleApiClientConnecting", "GoogleApiClient connecting is in step " + zzbo(this.zzabw) + " but received callback for step " + zzbo(i), new Exception());
        zzf(new ConnectionResult(8, null));
        return false;
    }


    private function zzbo(int i) {

        switch (i) {

            case 0:
                return "STEP_GETTING_SERVICE_BINDINGS";
            case 1:
                return "STEP_VALIDATING_ACCOUNT";
            case 2:
                return "STEP_AUTHENTICATING";
            case 3:
                return "STEP_GETTING_REMOTE_SERVICE";
            default:
                return "UNKNOWN";
        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    void zzc(ConnectionResult connectionResult) {

        if (zzbn(2)) {

            if (connectionResult.isSuccess()) {

                zznT();
            }
 else if (zze(connectionResult)) {

                zznV();
                zznT();
            }
 else {

                zzf(connectionResult);
            }

        }

    }


    private boolean zzd(ConnectionResult connectionResult) {

        return connectionResult.hasResolution() || this.zzaaP.zzbi(connectionResult.getErrorCode()) != null;
    }


    /* JADX INFO: Access modifiers changed from: private */
    boolean zze(ConnectionResult connectionResult) {

        if (this.zzabC != 2) {

            return this.zzabC == 1 && !connectionResult.hasResolution();
        }

        return true;
    }


    /* JADX INFO: Access modifiers changed from: private */
    void zzf(ConnectionResult connectionResult) {

        zznW();
        zzY(!connectionResult.hasResolution());
        this.zzabr.zzach.clear();
        this.zzabr.zzg(connectionResult);
        if (!this.zzaaP.zzd(this.mContext, connectionResult.getErrorCode())) {

            this.zzabr.zzof();
        }

        if (!this.zzabx && !this.zzabr.zzoc()) {

            this.zzabr.zzabZ.zzi(connectionResult);
        }

        this.zzabx = false;
        this.zzabr.zzabZ.zzpk();
    }


    /* JADX INFO: Access modifiers changed from: private */
    boolean zznP() {

        this.zzaby--;
        if (this.zzaby > 0) {

            return false;
        }

        if (this.zzaby < 0) {

            Log.i("GoogleApiClientConnecting", this.zzabr.zzog());
            Log.wtf("GoogleApiClientConnecting", "GoogleApiClient received too many callbacks for the given step. Clients may be in an unexpected state; GoogleApiClient will now disconnect.", new Exception());
            zzf(new ConnectionResult(8, null));
            return false;
        }
 else if (this.zzabu == null) {

            return true;
        }
 else {

            zzf(this.zzabu);
            return false;
        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    void zznQ() {

        if (this.zzaby == 0) {

            if (!this.zzabD) {

                zznT();
            }
 else if (this.zzabE) {

                zznR();
            }

        }

    }


    private void zznR() {

        ArrayList arrayList = new ArrayList();
        this.zzabw = 1;
        this.zzaby = this.zzabr.zzacg.size();
        for (Api.zzc<?> zzc2 : this.zzabr.zzacg.keySet()) {

            if (!this.zzabr.zzach.containsKey(zzc2)) {

                arrayList.add(this.zzabr.zzacg.get(zzc2));
            }
 else if (zznP()) {

                zznS();
            }

        }

        if (!arrayList.isEmpty()) {

            this.zzabK.add(zzlk.zzoj().submit(new zzh(arrayList)));
        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    void zznS() {

        this.zzabw = 2;
        this.zzabr.zzaci = zznX();
        this.zzabK.add(zzlk.zzoj().submit(new zzc()));
    }


    /* JADX INFO: Access modifiers changed from: private */
    void zznT() {

        ArrayList arrayList = new ArrayList();
        this.zzabw = 3;
        this.zzaby = this.zzabr.zzacg.size();
        for (Api.zzc<?> zzc2 : this.zzabr.zzacg.keySet()) {

            if (!this.zzabr.zzach.containsKey(zzc2)) {

                arrayList.add(this.zzabr.zzacg.get(zzc2));
            }
 else if (zznP()) {

                zznU();
            }

        }

        if (!arrayList.isEmpty()) {

            this.zzabK.add(zzlk.zzoj().submit(new zzf(arrayList)));
        }

    }


    private void zznU() {

        this.zzabr.zzob();
        zzlk.zzoj().execute(new Runnable() {
 // from class: com.google.android.gms.internal.zzlg.1
            @Override // java.lang.Runnable
            void run() {

                zzlg.this.zzaaP.zzac(zzlg.this.mContext);
            }

        }
);
        if (this.zzabB != null) {

            if (this.zzabG) {

                this.zzabB.zza(this.zzabF, this.zzabH);
            }

            zzY(false);
        }

        for (Api.zzc<?> zzc2 : this.zzabr.zzach.keySet()) {

            this.zzabr.zzacg.get(zzc2).disconnect();
        }

        if (this.zzabx) {

            this.zzabx = false;
            disconnect();
            return;
        }

        this.zzabr.zzabZ.zzh(this.zzabz.isEmpty() ? null : this.zzabz);
    }


    /* JADX INFO: Access modifiers changed from: private */
    void zznV() {

        this.zzabD = false;
        this.zzabr.zzaci = Collections.emptySet();
        for (Api.zzc<?> zzc2 : this.zzabA) {

            if (!this.zzabr.zzach.containsKey(zzc2)) {

                this.zzabr.zzach.put(zzc2, new ConnectionResult(17, null));
            }

        }

    }


    private void zznW() {

        Iterator<Future<?>> it = this.zzabK.iterator();
        while (it.hasNext()) {

            it.next().cancel(true);
        }

        this.zzabK.clear();
    }


    /* JADX INFO: Access modifiers changed from: private */
    Set<Scope> zznX() {

        HashSet hashSet = new HashSet(this.zzabI.zzoK());
        Map<Api<?>, zzf.zza> zzoM = this.zzabI.zzoM();
        for (Api<?> api : zzoM.keySet()) {

            if (!this.zzabr.zzach.containsKey(api.zznx())) {

                hashSet.addAll(zzoM.get(api).zzTm);
            }

        }

        return hashSet;
    }


    @Override // com.google.android.gms.internal.zzlj
    void begin() {

        this.zzabr.zzabZ.zzpl();
        this.zzabr.zzach.clear();
        this.zzabx = false;
        this.zzabD = false;
        this.zzabu = null;
        this.zzabw = 0;
        this.zzabC = 2;
        this.zzabE = false;
        this.zzabG = false;
        HashMap hashMap = new HashMap();
        boolean z = false;
        for (Api<?> api : this.zzabJ.keySet()) {

            Api.zzb zzb2 = this.zzabr.zzacg.get(api.zznx());
            int intValue = this.zzabJ.get(api).intValue();
            z = (api.zznv().getPriority() == 1) | z;
            if (zzb2.zzlN()) {

                this.zzabD = true;
                if (intValue < this.zzabC) {

                    this.zzabC = intValue;
                }

                if (intValue != 0) {

                    this.zzabA.add(api.zznx());
                }

            }

            hashMap.put(zzb2, new zzd(this, api, intValue));
        }

        if (z) {

            this.zzabD = false;
        }

        if (this.zzabD) {

            this.zzabI.zza(Integer.valueOf(this.zzabr.getSessionId()));
            zzg zzg2 = new zzg();
            this.zzabB = (zzqw) this.zzaaQ.zza(this.mContext, this.zzabr.getLooper(), this.zzabI, this.zzabI.zzoQ(), zzg2, zzg2);
        }

        this.zzaby = this.zzabr.zzacg.size();
        this.zzabK.add(zzlk.zzoj().submit(new zze(hashMap)));
    }


    @Override // com.google.android.gms.internal.zzlj
    void connect() {

        this.zzabx = false;
    }


    @Override // com.google.android.gms.internal.zzlj
    void disconnect() {

        Iterator<zzli.zzf<?>> it = this.zzabr.zzaca.iterator();
        while (it.hasNext()) {

            zzli.zzf<?> next = it.next();
            if (next.zznK() != 1) {

                next.cancel();
                it.remove();
            }

        }

        this.zzabr.zznY();
        if (this.zzabu != null || this.zzabr.zzaca.isEmpty()) {

            zznW();
            zzY(true);
            this.zzabr.zzach.clear();
            this.zzabr.zzg(null);
            this.zzabr.zzabZ.zzpk();
            return;
        }

        this.zzabx = true;
    }


    @Override // com.google.android.gms.internal.zzlj
    function getName() {

        return "CONNECTING";
    }


    @Override // com.google.android.gms.internal.zzlj
    void onConnected(Bundle connectionHint) {

        if (zzbn(3)) {

            if (connectionHint != null) {

                this.zzabz.putAll(connectionHint);
            }

            if (zznP()) {

                zznU();
            }

        }

    }


    @Override // com.google.android.gms.internal.zzlj
    void onConnectionSuspended(int cause) {

        zzf(new ConnectionResult(8, null));
    }


    @Override // com.google.android.gms.internal.zzlj
    <A extends Api.zzb, R extends Result, T extends zzlb.zza<R, A>> T zza(T t) {

        this.zzabr.zzaca.add(t);
        return t;
    }


    @Override // com.google.android.gms.internal.zzlj
    void zza(ConnectionResult connectionResult, Api<?> api, int i) {

        if (zzbn(3)) {

            zzb(connectionResult, api, i);
            if (zznP()) {

                zznU();
            }

        }

    }


    @Override // com.google.android.gms.internal.zzlj
    <A extends Api.zzb, T extends zzlb.zza<? extends Result, A>> T zzb(T t) {

        throw new IllegalStateException("GoogleApiClient is not connected yet.");
    }

}

