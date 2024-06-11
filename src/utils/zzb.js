/* Auto-generated JavaScript code */
package com.google.android.gms.playlog.internal;

import com.google.android.gms.common.internal.zzx;
import com.google.android.gms.internal.zzsi;
import java.util.ArrayList;
/* loaded from: classes.dex */
class zzb {

    private final ArrayList<zza> zzaRK;
    private int zzaRL;

    /* loaded from: classes.dex */
    static class zza {

        final PlayLoggerContext zzaRM;
        final LogEvent zzaRN;
        final zzsi.zzd zzaRO;

        private zza(PlayLoggerContext playLoggerContext, LogEvent logEvent) {

            this.zzaRM = (PlayLoggerContext) zzx.zzw(playLoggerContext);
            this.zzaRN = (LogEvent) zzx.zzw(logEvent);
            this.zzaRO = null;
        }

    }


    zzb() {

        this(100);
    }


    zzb(int i) {

        this.zzaRK = new ArrayList<>();
        this.zzaRL = i;
    }


    private void zzBu() {

        while (getSize() > getCapacity()) {

            this.zzaRK.remove(0);
        }

    }


    void clear() {

        this.zzaRK.clear();
    }


    int getCapacity() {

        return this.zzaRL;
    }


    int getSize() {

        return this.zzaRK.size();
    }


    boolean isEmpty() {

        return this.zzaRK.isEmpty();
    }


    ArrayList<zza> zzBt() {

        return this.zzaRK;
    }


    void zza(PlayLoggerContext playLoggerContext, LogEvent logEvent) {

        this.zzaRK.add(new zza(playLoggerContext, logEvent));
        zzBu();
    }

}

