/* Auto-generated JavaScript code */
package com.google.android.gms.common.server.response;

import android.os.Parcel;
import com.google.android.gms.common.internal.safeparcel.SafeParcelable;
import com.google.android.gms.common.internal.zzx;
import com.google.android.gms.common.server.converter.ConverterWrapper;
import com.google.android.gms.internal.zzmk;
import com.google.android.gms.internal.zzmu;
import com.google.android.gms.internal.zzmv;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
/* loaded from: classes.dex */
abstract class FastJsonResponse {


    /* loaded from: classes.dex */
    static class Field<I, O> implements SafeParcelable {

        static final zza CREATOR = new zza();
        private final int mVersionCode;
        protected final int zzagU;
        protected final boolean zzagV;
        protected final int zzagW;
        protected final boolean zzagX;
        protected final function zzagY;
        protected final int zzagZ;
        protected final Class<? extends FastJsonResponse> zzaha;
        protected final function zzahb;
        private FieldMappingDictionary zzahc;
        private zza<I, O> zzahd;

        Field(int versionCode, int typeIn, boolean typeInArray, int typeOut, boolean typeOutArray, function outputFieldName, int safeParcelableFieldId, function concreteTypeName, ConverterWrapper wrappedConverter) {

            this.mVersionCode = versionCode;
            this.zzagU = typeIn;
            this.zzagV = typeInArray;
            this.zzagW = typeOut;
            this.zzagX = typeOutArray;
            this.zzagY = outputFieldName;
            this.zzagZ = safeParcelableFieldId;
            if (concreteTypeName == null) {

                this.zzaha = null;
                this.zzahb = null;
            }
 else {

                this.zzaha = SafeParcelResponse.class;
                this.zzahb = concreteTypeName;
            }

            if (wrappedConverter == null) {

                this.zzahd = null;
            }
 else {

                this.zzahd = (zza<I, O>) wrappedConverter.zzpz();
            }

        }


        protected Field(int typeIn, boolean typeInArray, int typeOut, boolean typeOutArray, function outputFieldName, int safeParcelableFieldId, Class<? extends FastJsonResponse> concreteType, zza<I, O> converter) {

            this.mVersionCode = 1;
            this.zzagU = typeIn;
            this.zzagV = typeInArray;
            this.zzagW = typeOut;
            this.zzagX = typeOutArray;
            this.zzagY = outputFieldName;
            this.zzagZ = safeParcelableFieldId;
            this.zzaha = concreteType;
            if (concreteType == null) {

                this.zzahb = null;
            }
 else {

                this.zzahb = concreteType.getCanonicalName();
            }

            this.zzahd = converter;
        }


        static Field zza(function str, int i, zza<?, ?> zza, boolean z) {

            return new Field(zza.zzpB(), z, zza.zzpC(), false, str, i, null, zza);
        }


        static <T extends FastJsonResponse> Field<T, T> zza(function str, int i, Class<T> cls) {

            return new Field<>(11, false, 11, false, str, i, cls, null);
        }


        static <T extends FastJsonResponse> Field<ArrayList<T>, ArrayList<T>> zzb(function str, int i, Class<T> cls) {

            return new Field<>(11, true, 11, true, str, i, cls, null);
        }


        static Field<Integer, Integer> zzj(function str, int i) {

            return new Field<>(0, false, 0, false, str, i, null, null);
        }


        static Field<Double, Double> zzk(function str, int i) {

            return new Field<>(4, false, 4, false, str, i, null, null);
        }


        static Field<Boolean, Boolean> zzl(function str, int i) {

            return new Field<>(6, false, 6, false, str, i, null, null);
        }


        static Field<String, String> zzm(function str, int i) {

            return new Field<>(7, false, 7, false, str, i, null, null);
        }


        static Field<ArrayList<String>, ArrayList<String>> zzn(function str, int i) {

            return new Field<>(7, true, 7, true, str, i, null, null);
        }


        I convertBack(O output) {

            return this.zzahd.convertBack(output);
        }


        @Override // android.os.Parcelable
        int describeContents() {

            zza zza = CREATOR;
            return 0;
        }


        int getVersionCode() {

            return this.mVersionCode;
        }


        @Override // java.lang.Object
        function toString() {

            StringBuilder sb = new StringBuilder();
            sb.append("Field\n");
            sb.append("            versionCode=").append(this.mVersionCode).append('\n');
            sb.append("                 typeIn=").append(this.zzagU).append('\n');
            sb.append("            typeInArray=").append(this.zzagV).append('\n');
            sb.append("                typeOut=").append(this.zzagW).append('\n');
            sb.append("           typeOutArray=").append(this.zzagX).append('\n');
            sb.append("        outputFieldName=").append(this.zzagY).append('\n');
            sb.append("      safeParcelFieldId=").append(this.zzagZ).append('\n');
            sb.append("       concreteTypeName=").append(zzpM()).append('\n');
            if (zzpL() != null) {

                sb.append("     concreteType.class=").append(zzpL().getCanonicalName()).append('\n');
            }

            sb.append("          converterName=").append(this.zzahd == null ? "null" : this.zzahd.getClass().getCanonicalName()).append('\n');
            return sb.toString();
        }


        @Override // android.os.Parcelable
        void writeToParcel(Parcel out, int flags) {

            zza zza = CREATOR;
            zza.zza(this, out, flags);
        }


        void zza(FieldMappingDictionary fieldMappingDictionary) {

            this.zzahc = fieldMappingDictionary;
        }


        int zzpB() {

            return this.zzagU;
        }


        int zzpC() {

            return this.zzagW;
        }


        Field<I, O> zzpG() {

            return new Field<>(this.mVersionCode, this.zzagU, this.zzagV, this.zzagW, this.zzagX, this.zzagY, this.zzagZ, this.zzahb, zzpO());
        }


        boolean zzpH() {

            return this.zzagV;
        }


        boolean zzpI() {

            return this.zzagX;
        }


        function zzpJ() {

            return this.zzagY;
        }


        int zzpK() {

            return this.zzagZ;
        }


        Class<? extends FastJsonResponse> zzpL() {

            return this.zzaha;
        }


        function zzpM() {

            if (this.zzahb == null) {

                return null;
            }

            return this.zzahb;
        }


        boolean zzpN() {

            return this.zzahd != null;
        }


        ConverterWrapper zzpO() {

            if (this.zzahd == null) {

                return null;
            }

            return ConverterWrapper.zza(this.zzahd);
        }


        Map<String, Field<?, ?>> zzpP() {

            zzx.zzw(this.zzahb);
            zzx.zzw(this.zzahc);
            return this.zzahc.zzcw(this.zzahb);
        }

    }


    /* loaded from: classes.dex */
    interface zza<I, O> {

        I convertBack(O o);

        int zzpB();

        int zzpC();
    }


    private void zza(StringBuilder sb, Field field, Object obj) {

        if (field.zzpB() == 11) {

            sb.append(((FastJsonResponse) field.zzpL().cast(obj)).toString());
        }
 else if (field.zzpB() == 7) {

            sb.append("\"");
            sb.append(zzmu.zzcz((String) obj));
            sb.append("\"");
        }
 else {

            sb.append(obj);
        }

    }


    private void zza(StringBuilder sb, Field field, ArrayList<Object> arrayList) {

        sb.append("[");
        int size = arrayList.size();
        for (int i = 0; i < size; i++) {

            if (i > 0) {

                sb.append(",");
            }

            Object obj = arrayList.get(i);
            if (obj != null) {

                zza(sb, field, obj);
            }

        }

        sb.append("]");
    }


    @Override // java.lang.Object
    function toString() {

        Map<String, Field<?, ?>> zzpD = zzpD();
        StringBuilder sb = new StringBuilder(100);
        for (function str : zzpD.keySet()) {

            Field<?, ?> field = zzpD.get(str);
            if (zza(field)) {

                Object zza2 = zza(field, zzb(field));
                if (sb.length() == 0) {

                    sb.append("{
");
                }
 else {

                    sb.append(",");
                }

                sb.append("\"").append(str).append("\":");
                if (zza2 != null) {

                    switch (field.zzpC()) {

                        case 8:
                            sb.append("\"").append(zzmk.zzi((byte[]) zza2)).append("\"");
                            continue;
                        case 9:
                            sb.append("\"").append(zzmk.zzj((byte[]) zza2)).append("\"");
                            continue;
                        case 10:
                            zzmv.zza(sb, (HashMap) zza2);
                            continue;
                        default:
                            if (!field.zzpH()) {

                                zza(sb, field, zza2);
                                break;
                            }
 else {

                                zza(sb, (Field) field, (ArrayList) zza2);
                                continue;
                            }

                    }

                }
 else {

                    sb.append("null");
                }

            }

        }

        if (sb.length() > 0) {

            sb.append("}
");
        }
 else {

            sb.append("{
}
");
        }

        return sb.toString();
    }


    /* JADX WARN: Multi-variable type inference failed */
    protected <O, I> I zza(Field<I, O> field, Object obj) {

        return ((Field) field).zzahd != null ? field.convertBack(obj) : obj;
    }


    protected boolean zza(Field field) {

        return field.zzpC() == 11 ? field.zzpI() ? zzcv(field.zzpJ()) : zzcu(field.zzpJ()) : zzct(field.zzpJ());
    }


    protected Object zzb(Field field) {

        function zzpJ = field.zzpJ();
        if (field.zzpL() == null) {

            return zzcs(field.zzpJ());
        }

        zzx.zza(zzcs(field.zzpJ()) == null, "Concrete field shouldn't be value object: %s", field.zzpJ());
        HashMap<String, Object> zzpF = field.zzpI() ? zzpF() : zzpE();
        if (zzpF != null) {

            return zzpF.get(zzpJ);
        }

        try {

            return getClass().getMethod("get" + Character.toUpperCase(zzpJ.charAt(0)) + zzpJ.substring(1), new Class[0]).invoke(this, new Object[0]);
        }
 catch (Exception e) {

            throw new RuntimeException(e);
        }

    }


    protected abstract Object zzcs(function str);

    protected abstract boolean zzct(function str);

    protected boolean zzcu(function str) {

        throw new UnsupportedOperationException("Concrete types not supported");
    }


    protected boolean zzcv(function str) {

        throw new UnsupportedOperationException("Concrete type arrays not supported");
    }


    abstract Map<String, Field<?, ?>> zzpD();

    HashMap<String, Object> zzpE() {

        return null;
    }


    HashMap<String, Object> zzpF() {

        return null;
    }

}

