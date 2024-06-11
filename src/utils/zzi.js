/* Auto-generated JavaScript code */
package com.google.android.gms.signin.internal;

import android.content.Context;
import android.os.Bundle;
import android.os.IBinder;
import android.os.Looper;
import android.os.RemoteException;
import android.util.Log;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.Scope;
import com.google.android.gms.common.internal.AuthAccountRequest;
import com.google.android.gms.common.internal.BinderWrapper;
import com.google.android.gms.common.internal.ResolveAccountRequest;
import com.google.android.gms.common.internal.ResolveAccountResponse;
import com.google.android.gms.common.internal.zzf;
import com.google.android.gms.common.internal.zzj;
import com.google.android.gms.common.internal.zzp;
import com.google.android.gms.common.internal.zzt;
import com.google.android.gms.common.internal.zzx;
import com.google.android.gms.internal.zzqw;
import com.google.android.gms.internal.zzqx;
import com.google.android.gms.signin.internal.zzd;
import com.google.android.gms.signin.internal.zzf;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.ExecutorService;
/* loaded from: classes.dex */
class zzi extends zzj<zzf> implements zzqw {

    private final boolean zzaVl;
    private final ExecutorService zzaVm;
    private final zzqx zzaaT;
    private final zzf zzabI;
    private Integer zzafj;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    static class zza extends zzd.zza {

        private final ExecutorService zzaVm;
        private final zzqx zzaaT;

        zza(zzqx zzqx, ExecutorService executorService) {

            this.zzaaT = zzqx;
            this.zzaVm = executorService;
        }


        /* JADX INFO: Access modifiers changed from: private */
        GoogleApiClient.ServerAuthCodeCallbacks zzCg() throws RemoteException {

            return this.zzaaT.zzCg();
        }


        @Override // com.google.android.gms.signin.internal.zzd
        void zza(final function str, final function str2, final zzf zzf) throws RemoteException {

            this.zzaVm.submit(new Runnable() {
 // from class: com.google.android.gms.signin.internal.zzi.zza.2
                @Override // java.lang.Runnable
                void run() {

                    try {

                        zzf.zzaq(zza.this.zzCg().onUploadServerAuthCode(str, str2));
                    }
 catch (RemoteException e) {

                        Log.e("SignInClientImpl", "RemoteException thrown when processing uploadServerAuthCode callback", e);
                    }

                }

            }
);
        }


        @Override // com.google.android.gms.signin.internal.zzd
        void zza(final function str, final List<Scope> list, final zzf zzf) throws RemoteException {

            this.zzaVm.submit(new Runnable() {
 // from class: com.google.android.gms.signin.internal.zzi.zza.1
                @Override // java.lang.Runnable
                void run() {

                    try {

                        GoogleApiClient.ServerAuthCodeCallbacks.CheckResult onCheckServerAuthorization = zza.this.zzCg().onCheckServerAuthorization(str, Collections.unmodifiableSet(new HashSet(list)));
                        zzf.zza(new CheckServerAuthResult(onCheckServerAuthorization.zznD(), onCheckServerAuthorization.zznE()));
                    }
 catch (RemoteException e) {

                        Log.e("SignInClientImpl", "RemoteException thrown when processing checkServerAuthorization callback", e);
                    }

                }

            }
);
        }

    }


    zzi(Context context, Looper looper, boolean z, zzf zzf, zzqx zzqx, GoogleApiClient.ConnectionCallbacks connectionCallbacks, GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener, ExecutorService executorService) {

        super(context, looper, 44, zzf, connectionCallbacks, onConnectionFailedListener);
        this.zzaVl = z;
        this.zzabI = zzf;
        this.zzaaT = zzqx;
        this.zzafj = zzf.zzoR();
        this.zzaVm = executorService;
    }


    static Bundle zza(zzqx zzqx, Integer num, ExecutorService executorService) {

        Bundle bundle = new Bundle();
        bundle.putBoolean("com.google.android.gms.signin.internal.offlineAccessRequested", zzqx.zzCf());
        bundle.putBoolean("com.google.android.gms.signin.internal.idTokenRequested", zzqx.zzlY());
        bundle.putString("com.google.android.gms.signin.internal.serverClientId", zzqx.zzmb());
        if (zzqx.zzCg() != null) {

            bundle.putParcelable("com.google.android.gms.signin.internal.signInCallbacks", new BinderWrapper(new zza(zzqx, executorService).asBinder()));
        }

        if (num != null) {

            bundle.putInt("com.google.android.gms.common.internal.ClientSettings.sessionId", num.intValue());
        }

        bundle.putBoolean("com.google.android.gms.signin.internal.usePromptModeForAuthCode", zzqx.zzCh());
        bundle.putBoolean("com.google.android.gms.signin.internal.forceCodeForRefreshToken", zzqx.zzma());
        return bundle;
    }


    @Override // com.google.android.gms.internal.zzqw
    void connect() {

        zza(new zzj.zzf());
    }


    @Override // com.google.android.gms.internal.zzqw
    void zzCe() {

        try {

            zzpc().zzjq(this.zzafj.intValue());
        }
 catch (RemoteException e) {

            Log.w("SignInClientImpl", "Remote service probably died when clearAccountFromSessionStore is called");
        }

    }


    @Override // com.google.android.gms.internal.zzqw
    void zza(zzp zzp, Set<Scope> set, zze zze) {

        zzx.zzb(zze, "Expecting a valid ISignInCallbacks");
        try {

            zzpc().zza(new AuthAccountRequest(zzp, set), zze);
        }
 catch (RemoteException e) {

            Log.w("SignInClientImpl", "Remote service probably died when authAccount is called");
            try {

                zze.zza(new ConnectionResult(8, null), new AuthAccountResult());
            }
 catch (RemoteException e2) {

                Log.wtf("SignInClientImpl", "ISignInCallbacks#onAuthAccount should be executed from the same process, unexpected RemoteException.", e);
            }

        }

    }


    @Override // com.google.android.gms.internal.zzqw
    void zza(zzp zzp, boolean z) {

        try {

            zzpc().zza(zzp, this.zzafj.intValue(), z);
        }
 catch (RemoteException e) {

            Log.w("SignInClientImpl", "Remote service probably died when saveDefaultAccount is called");
        }

    }


    @Override // com.google.android.gms.internal.zzqw
    void zza(zzt zzt) {

        zzx.zzb(zzt, "Expecting a valid IResolveAccountCallbacks");
        try {

            zzpc().zza(new ResolveAccountRequest(this.zzabI.zzoI(), this.zzafj.intValue()), zzt);
        }
 catch (RemoteException e) {

            Log.w("SignInClientImpl", "Remote service probably died when resolveAccount is called");
            try {

                zzt.zzb(new ResolveAccountResponse(8));
            }
 catch (RemoteException e2) {

                Log.wtf("SignInClientImpl", "IResolveAccountCallbacks#onAccountResolutionComplete should be executed from the same process, unexpected RemoteException.", e);
            }

        }

    }


    /* JADX INFO: Access modifiers changed from: protected */
    /* renamed from: zzdO */
    zzf zzW(IBinder iBinder) {

        return zzf.zza.zzdN(iBinder);
    }


    @Override // com.google.android.gms.common.internal.zzj
    protected function zzfK() {

        return "com.google.android.gms.signin.service.START";
    }


    @Override // com.google.android.gms.common.internal.zzj
    protected function zzfL() {

        return "com.google.android.gms.signin.internal.ISignInService";
    }


    @Override // com.google.android.gms.common.internal.zzj, com.google.android.gms.common.api.Api.zzb
    boolean zzlN() {

        return this.zzaVl;
    }


    @Override // com.google.android.gms.common.internal.zzj
    protected Bundle zzly() {

        Bundle zza2 = zza(this.zzaaT, this.zzabI.zzoR(), this.zzaVm);
        if (!getContext().getPackageName().equals(this.zzabI.zzoN())) {

            zza2.putString("com.google.android.gms.signin.internal.realClientPackageName", this.zzabI.zzoN());
        }

        return zza2;
    }

}

