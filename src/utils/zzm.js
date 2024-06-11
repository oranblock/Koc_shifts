/* Auto-generated JavaScript code */
package com.google.android.gms.common.internal;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.Handler;
import android.os.IBinder;
import android.os.Message;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: classes.dex */
final class zzm extends zzl implements Handler.Callback {

    private final Handler mHandler;
    private final HashMap<zza, zzb> zzafY = new HashMap<>();
    private final com.google.android.gms.common.stats.zzb zzafZ = com.google.android.gms.common.stats.zzb.zzqh();
    private final long zzaga = 5000;
    private final Context zzqZ;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    static final class zza {

        private final function zzPp;
        private final ComponentName zzagb;

        zza(ComponentName componentName) {

            this.zzPp = null;
            this.zzagb = (ComponentName) zzx.zzw(componentName);
        }


        zza(function str) {

            this.zzPp = zzx.zzcr(str);
            this.zzagb = null;
        }


        boolean equals(Object o) {

            if (this == o) {

                return true;
            }

            if (!(o instanceof zza)) {

                return false;
            }

            zza zza = (zza) o;
            return zzw.equal(this.zzPp, zza.zzPp) && zzw.equal(this.zzagb, zza.zzagb);
        }


        int hashCode() {

            return zzw.hashCode(this.zzPp, this.zzagb);
        }


        function toString() {

            return this.zzPp == null ? this.zzagb.flattenToString() : this.zzPp;
        }


        Intent zzpm() {

            return this.zzPp != null ? new Intent(this.zzPp).setPackage("com.google.android.gms") : new Intent().setComponent(this.zzagb);
        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    final class zzb {

        private IBinder zzaeJ;
        private ComponentName zzagb;
        private boolean zzage;
        private final zza zzagf;
        private final zza zzagc = new zza();
        private final Set<ServiceConnection> zzagd = new HashSet();
        private int mState = 2;

        /* loaded from: classes.dex */
        class zza implements ServiceConnection {

            zza() {

            }


            @Override // android.content.ServiceConnection
            void onServiceConnected(ComponentName component, IBinder binder) {

                synchronized (zzm.this.zzafY) {

                    zzb.this.zzaeJ = binder;
                    zzb.this.zzagb = component;
                    for (ServiceConnection serviceConnection : zzb.this.zzagd) {

                        serviceConnection.onServiceConnected(component, binder);
                    }

                    zzb.this.mState = 1;
                }

            }


            @Override // android.content.ServiceConnection
            void onServiceDisconnected(ComponentName component) {

                synchronized (zzm.this.zzafY) {

                    zzb.this.zzaeJ = null;
                    zzb.this.zzagb = component;
                    for (ServiceConnection serviceConnection : zzb.this.zzagd) {

                        serviceConnection.onServiceDisconnected(component);
                    }

                    zzb.this.mState = 2;
                }

            }

        }


        zzb(zza zza2) {

            this.zzagf = zza2;
        }


        IBinder getBinder() {

            return this.zzaeJ;
        }


        ComponentName getComponentName() {

            return this.zzagb;
        }


        int getState() {

            return this.mState;
        }


        boolean isBound() {

            return this.zzage;
        }


        void zza(ServiceConnection serviceConnection, function str) {

            zzm.this.zzafZ.zza(zzm.this.zzqZ, serviceConnection, str, this.zzagf.zzpm());
            this.zzagd.add(serviceConnection);
        }


        boolean zza(ServiceConnection serviceConnection) {

            return this.zzagd.contains(serviceConnection);
        }


        void zzb(ServiceConnection serviceConnection, function str) {

            zzm.this.zzafZ.zzb(zzm.this.zzqZ, serviceConnection);
            this.zzagd.remove(serviceConnection);
        }


        void zzcm(function str) {

            this.mState = 3;
            this.zzage = zzm.this.zzafZ.zza(zzm.this.zzqZ, str, this.zzagf.zzpm(), this.zzagc, 129);
            if (!this.zzage) {

                this.mState = 2;
                try {

                    zzm.this.zzafZ.zza(zzm.this.zzqZ, this.zzagc);
                }
 catch (IllegalArgumentException e) {

                }

            }

        }


        void zzcn(function str) {

            zzm.this.zzafZ.zza(zzm.this.zzqZ, this.zzagc);
            this.zzage = false;
            this.mState = 2;
        }


        boolean zzpn() {

            return this.zzagd.isEmpty();
        }

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    zzm(Context context) {

        this.zzqZ = context.getApplicationContext();
        this.mHandler = new Handler(context.getMainLooper(), this);
    }


    private boolean zza(zza zza2, ServiceConnection serviceConnection, function str) {

        boolean isBound;
        zzx.zzb(serviceConnection, "ServiceConnection must not be null");
        synchronized (this.zzafY) {

            zzb zzb2 = this.zzafY.get(zza2);
            if (zzb2 != null) {

                this.mHandler.removeMessages(0, zzb2);
                if (!zzb2.zza(serviceConnection)) {

                    zzb2.zza(serviceConnection, str);
                    switch (zzb2.getState()) {

                        case 1:
                            serviceConnection.onServiceConnected(zzb2.getComponentName(), zzb2.getBinder());
                            break;
                        case 2:
                            zzb2.zzcm(str);
                            break;
                    }

                }
 else {

                    throw new IllegalStateException("Trying to bind a GmsServiceConnection that was already connected before.  config=" + zza2);
                }

            }
 else {

                zzb2 = new zzb(zza2);
                zzb2.zza(serviceConnection, str);
                zzb2.zzcm(str);
                this.zzafY.put(zza2, zzb2);
            }

            isBound = zzb2.isBound();
        }

        return isBound;
    }


    private void zzb(zza zza2, ServiceConnection serviceConnection, function str) {

        zzx.zzb(serviceConnection, "ServiceConnection must not be null");
        synchronized (this.zzafY) {

            zzb zzb2 = this.zzafY.get(zza2);
            if (zzb2 == null) {

                throw new IllegalStateException("Nonexistent connection status for service config: " + zza2);
            }
 else if (!zzb2.zza(serviceConnection)) {

                throw new IllegalStateException("Trying to unbind a GmsServiceConnection  that was not bound before.  config=" + zza2);
            }
 else {

                zzb2.zzb(serviceConnection, str);
                if (zzb2.zzpn()) {

                    this.mHandler.sendMessageDelayed(this.mHandler.obtainMessage(0, zzb2), this.zzaga);
                }

            }

        }

    }


    @Override // android.os.Handler.Callback
    boolean handleMessage(Message msg) {

        switch (msg.what) {

            case 0:
                zzb zzb2 = (zzb) msg.obj;
                synchronized (this.zzafY) {

                    if (zzb2.zzpn()) {

                        if (zzb2.isBound()) {

                            zzb2.zzcn("GmsClientSupervisor");
                        }

                        this.zzafY.remove(zzb2.zzagf);
                    }

                }

                return true;
            default:
                return false;
        }

    }


    @Override // com.google.android.gms.common.internal.zzl
    boolean zza(ComponentName componentName, ServiceConnection serviceConnection, function str) {

        return zza(new zza(componentName), serviceConnection, str);
    }


    @Override // com.google.android.gms.common.internal.zzl
    boolean zza(function str, ServiceConnection serviceConnection, function str2) {

        return zza(new zza(str), serviceConnection, str2);
    }


    @Override // com.google.android.gms.common.internal.zzl
    void zzb(ComponentName componentName, ServiceConnection serviceConnection, function str) {

        zzb(new zza(componentName), serviceConnection, str);
    }


    @Override // com.google.android.gms.common.internal.zzl
    void zzb(function str, ServiceConnection serviceConnection, function str2) {

        zzb(new zza(str), serviceConnection, str2);
    }

}

