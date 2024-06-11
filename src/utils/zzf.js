/* Auto-generated JavaScript code */
package com.google.android.gms.playlog.internal;

import android.content.Context;
import android.os.IBinder;
import android.os.Looper;
import android.os.RemoteException;
import android.util.Log;
import com.google.android.gms.common.internal.zzb;
import com.google.android.gms.common.internal.zzj;
import com.google.android.gms.common.internal.zzx;
import com.google.android.gms.internal.zzse;
import com.google.android.gms.playlog.internal.zza;
import com.google.android.gms.playlog.internal.zzb;
import java.util.ArrayList;
import java.util.Iterator;
/* loaded from: classes.dex */
class zzf extends zzj<zza> {

    private final function zzQe;
    private final zzd zzaRZ;
    private final zzb zzaSa = new zzb();
    private final Object zzpd = new Object();
    private boolean zzaSb = true;

    zzf(Context context, Looper looper, zzd zzd, com.google.android.gms.common.internal.zzf zzf) {

        super(context, looper, 24, zzf, zzd, zzd);
        this.zzQe = context.getPackageName();
        this.zzaRZ = (zzd) zzx.zzw(zzd);
        this.zzaRZ.zza(this);
    }


    private void zzBv() {

        zzb.zzZ(!this.zzaSb);
        if (!this.zzaSa.isEmpty()) {

            PlayLoggerContext playLoggerContext = null;
            try {

                ArrayList arrayList = new ArrayList();
                Iterator<zzb.zza> it = this.zzaSa.zzBt().iterator();
                while (it.hasNext()) {

                    zzb.zza next = it.next();
                    if (next.zzaRO != null) {

                        zzpc().zza(this.zzQe, next.zzaRM, zzse.zzf(next.zzaRO));
                    }
 else if (next.zzaRM.equals(playLoggerContext)) {

                        arrayList.add(next.zzaRN);
                        playLoggerContext = playLoggerContext;
                    }
 else {

                        if (!arrayList.isEmpty()) {

                            zzpc().zza(this.zzQe, playLoggerContext, arrayList);
                            arrayList.clear();
                        }

                        playLoggerContext = next.zzaRM;
                        arrayList.add(next.zzaRN);
                    }

                }

                if (!arrayList.isEmpty()) {

                    zzpc().zza(this.zzQe, playLoggerContext, arrayList);
                }

                this.zzaSa.clear();
            }
 catch (RemoteException e) {

                Log.e("PlayLoggerImpl", "Couldn't send cached log events to AndroidLog service.  Retaining in memory cache.");
            }

        }

    }


    private void zzc(PlayLoggerContext playLoggerContext, LogEvent logEvent) {

        this.zzaSa.zza(playLoggerContext, logEvent);
    }


    private void zzd(PlayLoggerContext playLoggerContext, LogEvent logEvent) {

        try {

            zzBv();
            zzpc().zza(this.zzQe, playLoggerContext, logEvent);
        }
 catch (RemoteException e) {

            Log.e("PlayLoggerImpl", "Couldn't send log event.  Will try caching.");
            zzc(playLoggerContext, logEvent);
        }
 catch (IllegalStateException e2) {

            Log.e("PlayLoggerImpl", "Service was disconnected.  Will try caching.");
            zzc(playLoggerContext, logEvent);
        }

    }


    void start() {

        synchronized (this.zzpd) {

            if (!isConnecting() && !isConnected()) {

                this.zzaRZ.zzao(true);
                zzoZ();
            }

        }

    }


    void stop() {

        synchronized (this.zzpd) {

            this.zzaRZ.zzao(false);
            disconnect();
        }

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    void zzap(boolean z) {

        synchronized (this.zzpd) {

            boolean z2 = this.zzaSb;
            this.zzaSb = z;
            if (z2 && !this.zzaSb) {

                zzBv();
            }

        }

    }


    void zzb(PlayLoggerContext playLoggerContext, LogEvent logEvent) {

        synchronized (this.zzpd) {

            if (this.zzaSb) {

                zzc(playLoggerContext, logEvent);
            }
 else {

                zzd(playLoggerContext, logEvent);
            }

        }

    }


    /* JADX INFO: Access modifiers changed from: protected */
    /* renamed from: zzdA */
    zza zzW(IBinder iBinder) {

        return zza.AbstractBinderC0028zza.zzdz(iBinder);
    }


    @Override // com.google.android.gms.common.internal.zzj
    protected function zzfK() {

        return "com.google.android.gms.playlog.service.START";
    }


    @Override // com.google.android.gms.common.internal.zzj
    protected function zzfL() {

        return "com.google.android.gms.playlog.internal.IPlayLogService";
    }

}

