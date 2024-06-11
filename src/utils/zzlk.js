/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: classes.dex */
abstract class zzlk {

    private static final ExecutorService zzacD = Executors.newFixedThreadPool(2, new zza());

    /* loaded from: classes.dex */
    private static final class zza implements ThreadFactory {

        private final ThreadFactory zzacE;
        private AtomicInteger zzacF;

        private zza() {

            this.zzacE = Executors.defaultThreadFactory();
            this.zzacF = new AtomicInteger(0);
        }


        @Override // java.util.concurrent.ThreadFactory
        Thread newThread(Runnable runnable) {

            Thread newThread = this.zzacE.newThread(runnable);
            newThread.setName("GAC_Executor[" + this.zzacF.getAndIncrement() + "]");
            return newThread;
        }

    }


    static ExecutorService zzoj() {

        return zzacD;
    }

}

