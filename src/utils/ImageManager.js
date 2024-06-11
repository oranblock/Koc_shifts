/* Auto-generated JavaScript code */
package com.google.android.gms.common.images;

import android.app.ActivityManager;
import android.content.ComponentCallbacks2;
import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.ParcelFileDescriptor;
import android.os.ResultReceiver;
import android.os.SystemClock;
import android.util.Log;
import android.widget.ImageView;
import com.google.android.gms.common.images.zza;
import com.google.android.gms.internal.zzlv;
import com.google.android.gms.internal.zzmg;
import com.google.android.gms.internal.zzmx;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
/* loaded from: classes.dex */
final class ImageManager {

    private static final Object zzadG = new Object();
    private static HashSet<Uri> zzadH = new HashSet<>();
    private static ImageManager zzadI;
    private static ImageManager zzadJ;
    private final Context mContext;
    private final Handler mHandler = new Handler(Looper.getMainLooper());
    private final ExecutorService zzadK = Executors.newFixedThreadPool(4);
    private final zzb zzadL;
    private final zzlv zzadM;
    private final Map<zza, ImageReceiver> zzadN;
    private final Map<Uri, ImageReceiver> zzadO;
    private final Map<Uri, Long> zzadP;

    /* loaded from: classes.dex */
    final class ImageReceiver extends ResultReceiver {

        private final Uri mUri;
        private final ArrayList<zza> zzadQ = new ArrayList<>();

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        ImageReceiver(Uri uri) {

            super(new Handler(Looper.getMainLooper()));
            ImageManager.this = r3;
            this.mUri = uri;
        }


        @Override // android.os.ResultReceiver
        void onReceiveResult(int resultCode, Bundle resultData) {

            ImageManager.this.zzadK.execute(new zzc(this.mUri, (ParcelFileDescriptor) resultData.getParcelable("com.google.android.gms.extra.fileDescriptor")));
        }


        void zzb(zza zza) {

            com.google.android.gms.common.internal.zzb.zzci("ImageReceiver.addImageRequest() must be called in the main thread");
            this.zzadQ.add(zza);
        }


        void zzc(zza zza) {

            com.google.android.gms.common.internal.zzb.zzci("ImageReceiver.removeImageRequest() must be called in the main thread");
            this.zzadQ.remove(zza);
        }


        void zzoE() {

            Intent intent = new Intent("com.google.android.gms.common.images.LOAD_IMAGE");
            intent.putExtra("com.google.android.gms.extras.uri", this.mUri);
            intent.putExtra("com.google.android.gms.extras.resultReceiver", this);
            intent.putExtra("com.google.android.gms.extras.priority", 3);
            ImageManager.this.mContext.sendBroadcast(intent);
        }

    }


    /* loaded from: classes.dex */
    interface OnImageLoadedListener {

        void onImageLoaded(Uri uri, Drawable drawable, boolean z);
    }


    /* loaded from: classes.dex */
    static final class zza {

        static int zza(ActivityManager activityManager) {

            return activityManager.getLargeMemoryClass();
        }

    }


    /* loaded from: classes.dex */
    static final class zzb extends zzmg<zza.C0004zza, Bitmap> {

        zzb(Context context) {

            super(zzaj(context));
        }


        private static int zzaj(Context context) {

            ActivityManager activityManager = (ActivityManager) context.getSystemService("activity");
            return (int) (((float) (((!((context.getApplicationInfo().flags & 1048576) != 0) || !zzmx.zzqu()) ? activityManager.getMemoryClass() : zza.zza(activityManager)) * 1048576)) * 0.33f);
        }


        /* renamed from: zza */
        int sizeOf(zza.C0004zza zza, Bitmap bitmap) {

            return bitmap.getHeight() * bitmap.getRowBytes();
        }


        /* renamed from: zza */
        void entryRemoved(boolean z, zza.C0004zza zza, Bitmap bitmap, Bitmap bitmap2) {

            super.entryRemoved(z, zza, bitmap, bitmap2);
        }

    }


    /* loaded from: classes.dex */
    private final class zzc implements Runnable {

        private final Uri mUri;
        private final ParcelFileDescriptor zzadS;

        zzc(Uri uri, ParcelFileDescriptor parcelFileDescriptor) {

            ImageManager.this = r1;
            this.mUri = uri;
            this.zzadS = parcelFileDescriptor;
        }


        @Override // java.lang.Runnable
        void run() {

            com.google.android.gms.common.internal.zzb.zzcj("LoadBitmapFromDiskRunnable can't be executed in the main thread");
            boolean z = false;
            Bitmap bitmap = null;
            if (this.zzadS != null) {

                try {

                    bitmap = BitmapFactory.decodeFileDescriptor(this.zzadS.getFileDescriptor());
                }
 catch (OutOfMemoryError e) {

                    Log.e("ImageManager", "OOM while loading bitmap for uri: " + this.mUri, e);
                    z = true;
                }

                try {

                    this.zzadS.close();
                }
 catch (IOException e2) {

                    Log.e("ImageManager", "closed failed", e2);
                }

            }

            CountDownLatch countDownLatch = new CountDownLatch(1);
            ImageManager.this.mHandler.post(new zzf(this.mUri, bitmap, z, countDownLatch));
            try {

                countDownLatch.await();
            }
 catch (InterruptedException e3) {

                Log.w("ImageManager", "Latch interrupted while posting " + this.mUri);
            }

        }

    }


    /* loaded from: classes.dex */
    final class zzd implements Runnable {

        private final zza zzadT;

        zzd(zza zza) {

            ImageManager.this = r1;
            this.zzadT = zza;
        }


        @Override // java.lang.Runnable
        void run() {

            com.google.android.gms.common.internal.zzb.zzci("LoadImageRunnable must be executed on the main thread");
            ImageReceiver imageReceiver = (ImageReceiver) ImageManager.this.zzadN.get(this.zzadT);
            if (imageReceiver != null) {

                ImageManager.this.zzadN.remove(this.zzadT);
                imageReceiver.zzc(this.zzadT);
            }

            zza.C0004zza zza = this.zzadT.zzadV;
            if (zza.uri == null) {

                this.zzadT.zza(ImageManager.this.mContext, ImageManager.this.zzadM, true);
                return;
            }

            Bitmap zza2 = ImageManager.this.zza(zza);
            if (zza2 != null) {

                this.zzadT.zza(ImageManager.this.mContext, zza2, true);
                return;
            }

            Long l = (Long) ImageManager.this.zzadP.get(zza.uri);
            if (l != null) {

                if (SystemClock.elapsedRealtime() - l.longValue() < 3600000) {

                    this.zzadT.zza(ImageManager.this.mContext, ImageManager.this.zzadM, true);
                    return;
                }

                ImageManager.this.zzadP.remove(zza.uri);
            }

            this.zzadT.zza(ImageManager.this.mContext, ImageManager.this.zzadM);
            ImageReceiver imageReceiver2 = (ImageReceiver) ImageManager.this.zzadO.get(zza.uri);
            if (imageReceiver2 == null) {

                imageReceiver2 = new ImageReceiver(zza.uri);
                ImageManager.this.zzadO.put(zza.uri, imageReceiver2);
            }

            imageReceiver2.zzb(this.zzadT);
            if (!(this.zzadT instanceof zza.zzc)) {

                ImageManager.this.zzadN.put(this.zzadT, imageReceiver2);
            }

            synchronized (ImageManager.zzadG) {

                if (!ImageManager.zzadH.contains(zza.uri)) {

                    ImageManager.zzadH.add(zza.uri);
                    imageReceiver2.zzoE();
                }

            }

        }

    }


    /* loaded from: classes.dex */
    static final class zze implements ComponentCallbacks2 {

        private final zzb zzadL;

        zze(zzb zzb) {

            this.zzadL = zzb;
        }


        @Override // android.content.ComponentCallbacks
        void onConfigurationChanged(Configuration newConfig) {

        }


        @Override // android.content.ComponentCallbacks
        void onLowMemory() {

            this.zzadL.evictAll();
        }


        @Override // android.content.ComponentCallbacks2
        void onTrimMemory(int level) {

            if (level >= 60) {

                this.zzadL.evictAll();
            }
 else if (level >= 20) {

                this.zzadL.trimToSize(this.zzadL.size() / 2);
            }

        }

    }


    /* loaded from: classes.dex */
    private final class zzf implements Runnable {

        private final Bitmap mBitmap;
        private final Uri mUri;
        private boolean zzadU;
        private final CountDownLatch zzoS;

        zzf(Uri uri, Bitmap bitmap, boolean z, CountDownLatch countDownLatch) {

            ImageManager.this = r1;
            this.mUri = uri;
            this.mBitmap = bitmap;
            this.zzadU = z;
            this.zzoS = countDownLatch;
        }


        private void zza(ImageReceiver imageReceiver, boolean z) {

            ArrayList arrayList = imageReceiver.zzadQ;
            int size = arrayList.size();
            for (int i = 0; i < size; i++) {

                zza zza = (zza) arrayList.get(i);
                if (z) {

                    zza.zza(ImageManager.this.mContext, this.mBitmap, false);
                }
 else {

                    ImageManager.this.zzadP.put(this.mUri, Long.valueOf(SystemClock.elapsedRealtime()));
                    zza.zza(ImageManager.this.mContext, ImageManager.this.zzadM, false);
                }

                if (!(zza instanceof zza.zzc)) {

                    ImageManager.this.zzadN.remove(zza);
                }

            }

        }


        @Override // java.lang.Runnable
        void run() {

            com.google.android.gms.common.internal.zzb.zzci("OnBitmapLoadedRunnable must be executed in the main thread");
            boolean z = this.mBitmap != null;
            if (ImageManager.this.zzadL != null) {

                if (this.zzadU) {

                    ImageManager.this.zzadL.evictAll();
                    System.gc();
                    this.zzadU = false;
                    ImageManager.this.mHandler.post(this);
                    return;
                }
 else if (z) {

                    ImageManager.this.zzadL.put(new zza.C0004zza(this.mUri), this.mBitmap);
                }

            }

            ImageReceiver imageReceiver = (ImageReceiver) ImageManager.this.zzadO.remove(this.mUri);
            if (imageReceiver != null) {

                zza(imageReceiver, z);
            }

            this.zzoS.countDown();
            synchronized (ImageManager.zzadG) {

                ImageManager.zzadH.remove(this.mUri);
            }

        }

    }


    private ImageManager(Context context, boolean withMemoryCache) {

        this.mContext = context.getApplicationContext();
        if (withMemoryCache) {

            this.zzadL = new zzb(this.mContext);
            if (zzmx.zzqx()) {

                zzoB();
            }

        }
 else {

            this.zzadL = null;
        }

        this.zzadM = new zzlv();
        this.zzadN = new HashMap();
        this.zzadO = new HashMap();
        this.zzadP = new HashMap();
    }


    static ImageManager create(Context context) {

        return zzb(context, false);
    }


    Bitmap zza(zza.C0004zza zza2) {

        if (this.zzadL == null) {

            return null;
        }

        return this.zzadL.get(zza2);
    }


    static ImageManager zzb(Context context, boolean z) {

        if (z) {

            if (zzadJ == null) {

                zzadJ = new ImageManager(context, true);
            }

            return zzadJ;
        }

        if (zzadI == null) {

            zzadI = new ImageManager(context, false);
        }

        return zzadI;
    }


    private void zzoB() {

        this.mContext.registerComponentCallbacks(new zze(this.zzadL));
    }


    void loadImage(ImageView imageView, int resId) {

        zza(new zza.zzb(imageView, resId));
    }


    void loadImage(ImageView imageView, Uri uri) {

        zza(new zza.zzb(imageView, uri));
    }


    void loadImage(ImageView imageView, Uri uri, int defaultResId) {

        zza.zzb zzb2 = new zza.zzb(imageView, uri);
        zzb2.zzby(defaultResId);
        zza(zzb2);
    }


    void loadImage(OnImageLoadedListener listener, Uri uri) {

        zza(new zza.zzc(listener, uri));
    }


    void loadImage(OnImageLoadedListener listener, Uri uri, int defaultResId) {

        zza.zzc zzc2 = new zza.zzc(listener, uri);
        zzc2.zzby(defaultResId);
        zza(zzc2);
    }


    void zza(zza zza2) {

        com.google.android.gms.common.internal.zzb.zzci("ImageManager.loadImage() must be called in the main thread");
        new zzd(zza2).run();
    }

}

