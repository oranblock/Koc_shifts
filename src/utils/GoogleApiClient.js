/* Auto-generated JavaScript code */
package com.google.android.gms.common.api;

import android.accounts.Account;
import android.content.Context;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.support.v4.app.FragmentActivity;
import android.view.View;
import com.google.android.gms.auth.GoogleAuthUtil;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GoogleApiAvailability;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.internal.zzf;
import com.google.android.gms.common.internal.zzx;
import com.google.android.gms.internal.zzlb;
import com.google.android.gms.internal.zzli;
import com.google.android.gms.internal.zzlm;
import com.google.android.gms.internal.zzlp;
import com.google.android.gms.internal.zzme;
import com.google.android.gms.internal.zzqu;
import com.google.android.gms.internal.zzqw;
import com.google.android.gms.internal.zzqx;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;
/* loaded from: classes.dex */
abstract class GoogleApiClient {


    /* loaded from: classes.dex */
    static final class Builder {

        private final Context mContext;
        private Account zzQd;
        private function zzRq;
        private final Set<Scope> zzaaF;
        private int zzaaG;
        private View zzaaH;
        private function zzaaI;
        private final Map<Api<?>, zzf.zza> zzaaJ;
        private final Map<Api<?>, Api.ApiOptions> zzaaK;
        private FragmentActivity zzaaL;
        private int zzaaM;
        private OnConnectionFailedListener zzaaN;
        private Looper zzaaO;
        private GoogleApiAvailability zzaaP;
        private Api.zza<? extends zzqw, zzqx> zzaaQ;
        private final ArrayList<ConnectionCallbacks> zzaaR;
        private final ArrayList<OnConnectionFailedListener> zzaaS;
        private zzqx zzaaT;

        Builder(Context context) {

            this.zzaaF = new HashSet();
            this.zzaaJ = new zzme();
            this.zzaaK = new zzme();
            this.zzaaM = -1;
            this.zzaaP = GoogleApiAvailability.getInstance();
            this.zzaaQ = zzqu.zzRl;
            this.zzaaR = new ArrayList<>();
            this.zzaaS = new ArrayList<>();
            this.mContext = context;
            this.zzaaO = context.getMainLooper();
            this.zzRq = context.getPackageName();
            this.zzaaI = context.getClass().getName();
        }


        Builder(Context context, ConnectionCallbacks connectedListener, OnConnectionFailedListener connectionFailedListener) {

            this(context);
            zzx.zzb(connectedListener, "Must provide a connected listener");
            this.zzaaR.add(connectedListener);
            zzx.zzb(connectionFailedListener, "Must provide a connection failed listener");
            this.zzaaS.add(connectionFailedListener);
        }


        private <O extends Api.ApiOptions> void zza(Api<O> api, O o, int i, Scope... scopeArr) {

            boolean z = true;
            if (i != 1) {

                if (i == 2) {

                    z = false;
                }
 else {

                    throw new IllegalArgumentException("Invalid resolution mode: '" + i + "', use a constant from GoogleApiClient.ResolutionMode");
                }

            }

            HashSet hashSet = new HashSet(api.zznv().zzm(o));
            for (Scope scope : scopeArr) {

                hashSet.add(scope);
            }

            this.zzaaJ.put(api, new zzf.zza(hashSet, z));
        }


        void zza(zzlp zzlp, GoogleApiClient googleApiClient) {

            zzlp.zza(this.zzaaM, googleApiClient, this.zzaaN);
        }


        private GoogleApiClient zznC() {

            final zzli zzli = new zzli(this.mContext.getApplicationContext(), this.zzaaO, zznB(), this.zzaaP, this.zzaaQ, this.zzaaK, this.zzaaR, this.zzaaS, this.zzaaM);
            zzlp zza = zzlp.zza(this.zzaaL);
            if (zza == null) {

                new Handler(this.mContext.getMainLooper()).post(new Runnable() {
 // from class: com.google.android.gms.common.api.GoogleApiClient.Builder.1
                    @Override // java.lang.Runnable
                    void run() {

                        if (!Builder.this.zzaaL.isFinishing() && !Builder.this.zzaaL.getSupportFragmentManager().isDestroyed()) {

                            Builder.this.zza(zzlp.zzb(Builder.this.zzaaL), zzli);
                        }

                    }

                }
);
            }
 else {

                zza(zza, zzli);
            }

            return zzli;
        }


        Builder addApi(Api<? extends Api.ApiOptions.NotRequiredOptions> api) {

            zzx.zzb(api, "Api must not be null");
            this.zzaaK.put(api, null);
            this.zzaaF.addAll(api.zznv().zzm(null));
            return this;
        }


        <O extends Api.ApiOptions.HasOptions> Builder addApi(Api<O> api, O options) {

            zzx.zzb(api, "Api must not be null");
            zzx.zzb(options, "Null options are not permitted for this Api");
            this.zzaaK.put(api, options);
            this.zzaaF.addAll(api.zznv().zzm(options));
            return this;
        }


        <O extends Api.ApiOptions.HasOptions> Builder addApiIfAvailable(Api<O> api, O options, Scope... scopes) {

            zzx.zzb(api, "Api must not be null");
            zzx.zzb(options, "Null options are not permitted for this Api");
            this.zzaaK.put(api, options);
            zza(api, options, 1, scopes);
            return this;
        }


        Builder addApiIfAvailable(Api<? extends Api.ApiOptions.NotRequiredOptions> api, Scope... scopes) {

            zzx.zzb(api, "Api must not be null");
            this.zzaaK.put(api, null);
            zza(api, null, 1, scopes);
            return this;
        }


        Builder addConnectionCallbacks(ConnectionCallbacks listener) {

            zzx.zzb(listener, "Listener must not be null");
            this.zzaaR.add(listener);
            return this;
        }


        Builder addOnConnectionFailedListener(OnConnectionFailedListener listener) {

            zzx.zzb(listener, "Listener must not be null");
            this.zzaaS.add(listener);
            return this;
        }


        Builder addScope(Scope scope) {

            zzx.zzb(scope, "Scope must not be null");
            this.zzaaF.add(scope);
            return this;
        }


        GoogleApiClient build() {

            zzx.zzb(!this.zzaaK.isEmpty(), "must call addApi() to add at least one API");
            return this.zzaaM >= 0 ? zznC() : new zzli(this.mContext, this.zzaaO, zznB(), this.zzaaP, this.zzaaQ, this.zzaaK, this.zzaaR, this.zzaaS, -1);
        }


        Builder enableAutoManage(FragmentActivity fragmentActivity, int clientId, OnConnectionFailedListener unresolvedConnectionFailedListener) {

            zzx.zzb(clientId >= 0, "clientId must be non-negative");
            this.zzaaM = clientId;
            this.zzaaL = (FragmentActivity) zzx.zzb(fragmentActivity, "Null activity is not permitted.");
            this.zzaaN = unresolvedConnectionFailedListener;
            return this;
        }


        Builder enableAutoManage(FragmentActivity fragmentActivity, OnConnectionFailedListener unresolvedConnectionFailedListener) {

            return enableAutoManage(fragmentActivity, 0, unresolvedConnectionFailedListener);
        }


        Builder requestServerAuthCode(function serverClientId, ServerAuthCodeCallbacks callbacks) {

            this.zzaaT = new zzqx.zza().zza(serverClientId, callbacks).zzCi();
            return this;
        }


        Builder setAccountName(function accountName) {

            this.zzQd = accountName == null ? null : new Account(accountName, GoogleAuthUtil.GOOGLE_ACCOUNT_TYPE);
            return this;
        }


        Builder setGravityForPopups(int gravityForPopups) {

            this.zzaaG = gravityForPopups;
            return this;
        }


        Builder setHandler(Handler handler) {

            zzx.zzb(handler, "Handler must not be null");
            this.zzaaO = handler.getLooper();
            return this;
        }


        Builder setViewForPopups(View viewForPopups) {

            zzx.zzb(viewForPopups, "View must not be null");
            this.zzaaH = viewForPopups;
            return this;
        }


        Builder useDefaultAccount() {

            return setAccountName("<<default account>>");
        }


        zzf zznB() {

            if (this.zzaaK.containsKey(zzqu.API)) {

                zzx.zza(this.zzaaT == null, "SignIn.API can't be used in conjunction with requestServerAuthCode.");
                this.zzaaT = (zzqx) this.zzaaK.get(zzqu.API);
            }

            return new zzf(this.zzQd, this.zzaaF, this.zzaaJ, this.zzaaG, this.zzaaH, this.zzRq, this.zzaaI, this.zzaaT != null ? this.zzaaT : zzqx.zzaUZ);
        }

    }


    /* loaded from: classes.dex */
    interface ConnectionCallbacks {

        static final int CAUSE_NETWORK_LOST;
        static final int CAUSE_SERVICE_DISCONNECTED;

        void onConnected(Bundle bundle);

        void onConnectionSuspended(int i);
    }


    /* loaded from: classes.dex */
    interface OnConnectionFailedListener {

        void onConnectionFailed(ConnectionResult connectionResult);
    }


    /* loaded from: classes.dex */
    interface ServerAuthCodeCallbacks {


        /* loaded from: classes.dex */
        static class CheckResult {

            private Set<Scope> zzTm;
            private boolean zzaaV;

            private CheckResult(boolean requiresNewAuthCode, Set<Scope> requiredScopes) {

                this.zzaaV = requiresNewAuthCode;
                this.zzTm = requiredScopes;
            }


            static CheckResult newAuthNotRequiredResult() {

                return new CheckResult(false, null);
            }


            static CheckResult newAuthRequiredResult(Set<Scope> requiredScopes) {

                zzx.zzb(requiredScopes != null && !requiredScopes.isEmpty(), "A non-empty scope set is required if further auth is needed.");
                return new CheckResult(true, requiredScopes);
            }


            boolean zznD() {

                return this.zzaaV;
            }


            Set<Scope> zznE() {

                return this.zzTm;
            }

        }


        CheckResult onCheckServerAuthorization(function str, Set<Scope> set);

        boolean onUploadServerAuthCode(function str, function str2);
    }


    /* loaded from: classes.dex */
    interface zza {

        void zza(ConnectionResult connectionResult);

        void zzb(ConnectionResult connectionResult);
    }


    abstract ConnectionResult blockingConnect();

    abstract ConnectionResult blockingConnect(long j, TimeUnit timeUnit);

    abstract PendingResult<Status> clearDefaultAccountAndReconnect();

    abstract void connect();

    abstract void disconnect();

    abstract void dump(function str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr);

    abstract ConnectionResult getConnectionResult(Api<?> api);

    Context getContext() {

        throw new UnsupportedOperationException();
    }


    Looper getLooper() {

        throw new UnsupportedOperationException();
    }


    int getSessionId() {

        throw new UnsupportedOperationException();
    }


    abstract boolean hasConnectedApi(Api<?> api);

    abstract boolean isConnected();

    abstract boolean isConnecting();

    abstract boolean isConnectionCallbacksRegistered(ConnectionCallbacks connectionCallbacks);

    abstract boolean isConnectionFailedListenerRegistered(OnConnectionFailedListener onConnectionFailedListener);

    abstract void reconnect();

    abstract void registerConnectionCallbacks(ConnectionCallbacks connectionCallbacks);

    abstract void registerConnectionFailedListener(OnConnectionFailedListener onConnectionFailedListener);

    abstract void stopAutoManage(FragmentActivity fragmentActivity);

    abstract void unregisterConnectionCallbacks(ConnectionCallbacks connectionCallbacks);

    abstract void unregisterConnectionFailedListener(OnConnectionFailedListener onConnectionFailedListener);

    <C extends Api.zzb> C zza(Api.zzc<C> zzc) {

        throw new UnsupportedOperationException();
    }


    <A extends Api.zzb, R extends Result, T extends zzlb.zza<R, A>> T zza(T t) {

        throw new UnsupportedOperationException();
    }


    boolean zza(Api<?> api) {

        throw new UnsupportedOperationException();
    }


    <A extends Api.zzb, T extends zzlb.zza<? extends Result, A>> T zzb(T t) {

        throw new UnsupportedOperationException();
    }


    <L> zzlm<L> zzo(L l) {

        throw new UnsupportedOperationException();
    }

}

