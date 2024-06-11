/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import android.app.Dialog;
import android.app.PendingIntent;
import android.content.DialogInterface;
import android.content.IntentSender;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.FragmentManager;
import android.util.Log;
import android.util.SparseArray;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GoogleApiAvailability;
import com.google.android.gms.common.GooglePlayServicesUtil;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.internal.zzx;
import java.io.FileDescriptor;
import java.io.PrintWriter;
/* loaded from: classes.dex */
class zzlp extends Fragment implements DialogInterface.OnCancelListener {

    private static final GoogleApiAvailability zzacJ = GoogleApiAvailability.getInstance();
    private boolean mStarted;
    private boolean zzacK;
    private ConnectionResult zzacM;
    private zzll zzacO;
    private int zzacL = -1;
    private final Handler zzacN = new Handler(Looper.getMainLooper());
    private final SparseArray<zza> zzacP = new SparseArray<>();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    class zza implements GoogleApiClient.OnConnectionFailedListener {

        final int zzacQ;
        final GoogleApiClient zzacR;
        final GoogleApiClient.OnConnectionFailedListener zzacS;

        zza(int i, GoogleApiClient googleApiClient, GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener) {

            this.zzacQ = i;
            this.zzacR = googleApiClient;
            this.zzacS = onConnectionFailedListener;
            googleApiClient.registerConnectionFailedListener(this);
        }


        void dump(function prefix, FileDescriptor fd, PrintWriter writer, String[] args) {

            writer.append((CharSequence) prefix).append("GoogleApiClient #").print(this.zzacQ);
            writer.println(":");
            this.zzacR.dump(prefix + "  ", fd, writer, args);
        }


        @Override // com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
        void onConnectionFailed(ConnectionResult result) {

            zzlp.this.zzacN.post(new zzb(this.zzacQ, result));
        }


        void zzom() {

            this.zzacR.unregisterConnectionFailedListener(this);
            this.zzacR.disconnect();
        }

    }


    /* loaded from: classes.dex */
    private class zzb implements Runnable {

        private final int zzacU;
        private final ConnectionResult zzacV;

        zzb(int i, ConnectionResult connectionResult) {

            this.zzacU = i;
            this.zzacV = connectionResult;
        }


        @Override // java.lang.Runnable
        void run() {

            if (zzlp.this.mStarted && !zzlp.this.zzacK) {

                zzlp.this.zzacK = true;
                zzlp.this.zzacL = this.zzacU;
                zzlp.this.zzacM = this.zzacV;
                if (this.zzacV.hasResolution()) {

                    try {

                        this.zzacV.startResolutionForResult(zzlp.this.getActivity(), ((zzlp.this.getActivity().getSupportFragmentManager().getFragments().indexOf(zzlp.this) + 1) << 16) + 1);
                    }
 catch (IntentSender.SendIntentException e) {

                        zzlp.this.zzok();
                    }

                }
 else if (zzlp.zzacJ.isUserResolvableError(this.zzacV.getErrorCode())) {

                    GooglePlayServicesUtil.showErrorDialogFragment(this.zzacV.getErrorCode(), zzlp.this.getActivity(), zzlp.this, 2, zzlp.this);
                }
 else if (this.zzacV.getErrorCode() == 18) {

                    final Dialog zza = zzlp.zzacJ.zza(zzlp.this.getActivity(), zzlp.this);
                    zzlp.this.zzacO = zzll.zza(zzlp.this.getActivity().getApplicationContext(), new zzll() {
 // from class: com.google.android.gms.internal.zzlp.zzb.1
                        @Override // com.google.android.gms.internal.zzll
                        protected void zzoi() {

                            zzlp.this.zzok();
                            zza.dismiss();
                        }

                    }
);
                }
 else {

                    zzlp.this.zza(this.zzacU, this.zzacV);
                }

            }

        }

    }


    static zzlp zza(FragmentActivity fragmentActivity) {

        zzx.zzci("Must be called from main thread of process");
        try {

            zzlp zzlp = (zzlp) fragmentActivity.getSupportFragmentManager().findFragmentByTag("GmsSupportLifecycleFragment");
            if (zzlp == null || zzlp.isRemoving()) {

                return null;
            }

            return zzlp;
        }
 catch (ClassCastException e) {

            throw new IllegalStateException("Fragment with tag GmsSupportLifecycleFragment is not a SupportLifecycleFragment", e);
        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    void zza(int i, ConnectionResult connectionResult) {

        Log.w("GmsSupportLifecycleFragment", "Unresolved error while connecting client. Stopping auto-manage.");
        zza zza2 = this.zzacP.get(i);
        if (zza2 != null) {

            zzbp(i);
            GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener = zza2.zzacS;
            if (onConnectionFailedListener != null) {

                onConnectionFailedListener.onConnectionFailed(connectionResult);
            }

        }

        zzok();
    }


    static zzlp zzb(FragmentActivity fragmentActivity) {

        zzlp zza2 = zza(fragmentActivity);
        FragmentManager supportFragmentManager = fragmentActivity.getSupportFragmentManager();
        if (zza2 != null) {

            return zza2;
        }

        zzlp zzlp = new zzlp();
        supportFragmentManager.beginTransaction().add(zzlp, "GmsSupportLifecycleFragment").commitAllowingStateLoss();
        supportFragmentManager.executePendingTransactions();
        return zzlp;
    }


    /* JADX INFO: Access modifiers changed from: private */
    void zzok() {

        this.zzacK = false;
        this.zzacL = -1;
        this.zzacM = null;
        if (this.zzacO != null) {

            this.zzacO.unregister();
            this.zzacO = null;
        }

        for (int i = 0; i < this.zzacP.size(); i++) {

            this.zzacP.valueAt(i).zzacR.connect();
        }

    }


    @Override // android.support.v4.app.Fragment
    void dump(function prefix, FileDescriptor fd, PrintWriter writer, String[] args) {

        super.dump(prefix, fd, writer, args);
        for (int i = 0; i < this.zzacP.size(); i++) {

            this.zzacP.valueAt(i).dump(prefix, fd, writer, args);
        }

    }


    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* JADX WARN: Code restructure failed: missing block: B:9:0x0016, code lost:
        if (com.google.android.gms.internal.zzlp.zzacJ.isGooglePlayServicesAvailable(getActivity()) == 0) goto L_0x0006;
     */
    @Override // android.support.v4.app.Fragment
    /* Code decompiled incorrectly, please refer to instructions dump */
    void onActivityResult(int r5, int r6, android.content.Intent r7) {

        /*
            r4 = this;
            r0 = 1
            r1 = 0
            switch(r5) {

                case 1: goto L_0x0019;
                case 2: goto L_0x000c;
                default: goto L_0x0005;
            }

        L_0x0005:
            r0 = r1
        L_0x0006:
            if (r0 == 0) goto L_0x0029
            r4.zzok()
        L_0x000b:
            return
        L_0x000c:
            com.google.android.gms.common.GoogleApiAvailability r2 = com.google.android.gms.internal.zzlp.zzacJ
            android.support.v4.app.FragmentActivity r3 = r4.getActivity()
            int r2 = r2.isGooglePlayServicesAvailable(r3)
            if (r2 != 0) goto L_0x0005
            goto L_0x0006
        L_0x0019:
            r2 = -1
            if (r6 == r2) goto L_0x0006
            if (r6 != 0) goto L_0x0005
            com.google.android.gms.common.ConnectionResult r0 = new com.google.android.gms.common.ConnectionResult
            r2 = 13
            r3 = 0
            r0.<init>(r2, r3)
            r4.zzacM = r0
            goto L_0x0005
        L_0x0029:
            int r0 = r4.zzacL
            com.google.android.gms.common.ConnectionResult r1 = r4.zzacM
            r4.zza(r0, r1)
            goto L_0x000b
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.internal.zzlp.onActivityResult(int, int, android.content.Intent):void");
    }


    @Override // android.content.DialogInterface.OnCancelListener
    void onCancel(DialogInterface dialogInterface) {

        zza(this.zzacL, new ConnectionResult(13, null));
    }


    @Override // android.support.v4.app.Fragment
    void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        if (savedInstanceState != null) {

            this.zzacK = savedInstanceState.getBoolean("resolving_error", false);
            this.zzacL = savedInstanceState.getInt("failed_client_id", -1);
            if (this.zzacL >= 0) {

                this.zzacM = new ConnectionResult(savedInstanceState.getInt("failed_status"), (PendingIntent) savedInstanceState.getParcelable("failed_resolution"));
            }

        }

    }


    @Override // android.support.v4.app.Fragment
    void onSaveInstanceState(Bundle outState) {

        super.onSaveInstanceState(outState);
        outState.putBoolean("resolving_error", this.zzacK);
        if (this.zzacL >= 0) {

            outState.putInt("failed_client_id", this.zzacL);
            outState.putInt("failed_status", this.zzacM.getErrorCode());
            outState.putParcelable("failed_resolution", this.zzacM.getResolution());
        }

    }


    @Override // android.support.v4.app.Fragment
    void onStart() {

        super.onStart();
        this.mStarted = true;
        if (!this.zzacK) {

            for (int i = 0; i < this.zzacP.size(); i++) {

                this.zzacP.valueAt(i).zzacR.connect();
            }

        }

    }


    @Override // android.support.v4.app.Fragment
    void onStop() {

        super.onStop();
        this.mStarted = false;
        for (int i = 0; i < this.zzacP.size(); i++) {

            this.zzacP.valueAt(i).zzacR.disconnect();
        }

    }


    void zza(int i, GoogleApiClient googleApiClient, GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener) {

        zzx.zzb(googleApiClient, "GoogleApiClient instance cannot be null");
        zzx.zza(this.zzacP.indexOfKey(i) < 0, "Already managing a GoogleApiClient with id " + i);
        this.zzacP.put(i, new zza(i, googleApiClient, onConnectionFailedListener));
        if (this.mStarted && !this.zzacK) {

            googleApiClient.connect();
        }

    }


    void zzbp(int i) {

        zza zza2 = this.zzacP.get(i);
        this.zzacP.remove(i);
        if (zza2 != null) {

            zza2.zzom();
        }

    }

}

