/* Auto-generated JavaScript code */
package com.google.android.gms.internal;

import com.google.android.gms.internal.zzry;
import java.io.IOException;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
/* loaded from: classes.dex */
class zzrz<M extends zzry<M>, T> {

    final int tag;
    protected final int type;
    protected final Class<T> zzbil;
    protected final boolean zzbim;

    private zzrz(int i, Class<T> cls, int i2, boolean z) {

        this.type = i;
        this.zzbil = cls;
        this.tag = i2;
        this.zzbim = z;
    }


    private T zzF(List<zzsg> list) {

        ArrayList arrayList = new ArrayList();
        for (int i = 0; i < list.size(); i++) {

            zzsg zzsg = list.get(i);
            if (zzsg.zzbiw.length != 0) {

                zza(zzsg, arrayList);
            }

        }

        int size = arrayList.size();
        if (size == 0) {

            return null;
        }

        T cast = this.zzbil.cast(Array.newInstance(this.zzbil.getComponentType(), size));
        for (int i2 = 0; i2 < size; i2++) {

            Array.set(cast, i2, arrayList.get(i2));
        }

        return cast;
    }


    private T zzG(List<zzsg> list) {

        if (list.isEmpty()) {

            return null;
        }

        return this.zzbil.cast(zzF(zzrw.zzB(list.get(list.size() - 1).zzbiw)));
    }


    static <M extends zzry<M>, T extends zzse> zzrz<M, T> zza(int i, Class<T> cls, long j) {

        return new zzrz<>(i, cls, (int) j, false);
    }


    final T zzE(List<zzsg> list) {

        if (list == null) {

            return null;
        }

        return this.zzbim ? zzF(list) : zzG(list);
    }


    protected Object zzF(zzrw zzrw) {

        Class componentType = this.zzbim ? this.zzbil.getComponentType() : this.zzbil;
        try {

            switch (this.type) {

                case 10:
                    zzse zzse = (zzse) componentType.newInstance();
                    zzrw.zza(zzse, zzsh.zzlV(this.tag));
                    return zzse;
                case 11:
                    zzse zzse2 = (zzse) componentType.newInstance();
                    zzrw.zza(zzse2);
                    return zzse2;
                default:
                    throw new IllegalArgumentException("Unknown type " + this.type);
            }

        }
 catch (IOException e) {

            throw new IllegalArgumentException("Error reading extension field", e);
        }
 catch (IllegalAccessException e2) {

            throw new IllegalArgumentException("Error creating instance of class " + componentType, e2);
        }
 catch (InstantiationException e3) {

            throw new IllegalArgumentException("Error creating instance of class " + componentType, e3);
        }

    }


    int zzX(Object obj) {

        return this.zzbim ? zzY(obj) : zzZ(obj);
    }


    protected int zzY(Object obj) {

        int i = 0;
        int length = Array.getLength(obj);
        for (int i2 = 0; i2 < length; i2++) {

            if (Array.get(obj, i2) != null) {

                i += zzZ(Array.get(obj, i2));
            }

        }

        return i;
    }


    protected int zzZ(Object obj) {

        int zzlV = zzsh.zzlV(this.tag);
        switch (this.type) {

            case 10:
                return zzrx.zzb(zzlV, (zzse) obj);
            case 11:
                return zzrx.zzc(zzlV, (zzse) obj);
            default:
                throw new IllegalArgumentException("Unknown type " + this.type);
        }

    }


    protected void zza(zzsg zzsg, List<Object> list) {

        list.add(zzF(zzrw.zzB(zzsg.zzbiw)));
    }


    void zza(Object obj, zzrx zzrx) throws IOException {

        if (this.zzbim) {

            zzc(obj, zzrx);
        }
 else {

            zzb(obj, zzrx);
        }

    }


    protected void zzb(Object obj, zzrx zzrx) {

        try {

            zzrx.zzlN(this.tag);
            switch (this.type) {

                case 10:
                    int zzlV = zzsh.zzlV(this.tag);
                    zzrx.zzb((zzse) obj);
                    zzrx.zzC(zzlV, 4);
                    return;
                case 11:
                    zzrx.zzc((zzse) obj);
                    return;
                default:
                    throw new IllegalArgumentException("Unknown type " + this.type);
            }

        }
 catch (IOException e) {

            throw new IllegalStateException(e);
        }

    }


    protected void zzc(Object obj, zzrx zzrx) {

        int length = Array.getLength(obj);
        for (int i = 0; i < length; i++) {

            Object obj2 = Array.get(obj, i);
            if (obj2 != null) {

                zzb(obj2, zzrx);
            }

        }

    }

}

