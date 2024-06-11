/* Auto-generated JavaScript code */
package android.support.v4.hardware.fingerprint;

import android.content.Context;
import android.os.Build;
import android.os.Handler;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.hardware.fingerprint.FingerprintManagerCompatApi23;
import android.support.v4.os.CancellationSignal;
import java.security.Signature;
import javax.crypto.Cipher;
import javax.crypto.Mac;
/* loaded from: classes.dex */
class FingerprintManagerCompat {

    static final FingerprintManagerCompatImpl IMPL;
    private Context mContext;

    /* loaded from: classes.dex */
    private interface FingerprintManagerCompatImpl {

        void authenticate(Context context, CryptoObject cryptoObject, int i, CancellationSignal cancellationSignal, AuthenticationCallback authenticationCallback, Handler handler);

        boolean hasEnrolledFingerprints(Context context);

        boolean isHardwareDetected(Context context);
    }


    static FingerprintManagerCompat from(Context context) {

        return new FingerprintManagerCompat(context);
    }


    private FingerprintManagerCompat(Context context) {

        this.mContext = context;
    }


    static {

        if (Build.VERSION.SDK_INT >= 23) {

            IMPL = new Api23FingerprintManagerCompatImpl();
        }
 else {

            IMPL = new LegacyFingerprintManagerCompatImpl();
        }

    }


    boolean hasEnrolledFingerprints() {

        return IMPL.hasEnrolledFingerprints(this.mContext);
    }


    boolean isHardwareDetected() {

        return IMPL.isHardwareDetected(this.mContext);
    }


    void authenticate(@Nullable CryptoObject crypto, int flags, @Nullable CancellationSignal cancel, @NonNull AuthenticationCallback callback, @Nullable Handler handler) {

        IMPL.authenticate(this.mContext, crypto, flags, cancel, callback, handler);
    }


    /* loaded from: classes.dex */
    static class CryptoObject {

        private final Cipher mCipher;
        private final Mac mMac;
        private final Signature mSignature;

        CryptoObject(Signature signature) {

            this.mSignature = signature;
            this.mCipher = null;
            this.mMac = null;
        }


        CryptoObject(Cipher cipher) {

            this.mCipher = cipher;
            this.mSignature = null;
            this.mMac = null;
        }


        CryptoObject(Mac mac) {

            this.mMac = mac;
            this.mCipher = null;
            this.mSignature = null;
        }


        Signature getSignature() {

            return this.mSignature;
        }


        Cipher getCipher() {

            return this.mCipher;
        }


        Mac getMac() {

            return this.mMac;
        }

    }


    /* loaded from: classes.dex */
    static final class AuthenticationResult {

        private CryptoObject mCryptoObject;

        AuthenticationResult(CryptoObject crypto) {

            this.mCryptoObject = crypto;
        }


        CryptoObject getCryptoObject() {

            return this.mCryptoObject;
        }

    }


    /* loaded from: classes.dex */
    static abstract class AuthenticationCallback {

        void onAuthenticationError(int errMsgId, CharSequence errString) {

        }


        void onAuthenticationHelp(int helpMsgId, CharSequence helpString) {

        }


        void onAuthenticationSucceeded(AuthenticationResult result) {

        }


        void onAuthenticationFailed() {

        }

    }


    /* loaded from: classes.dex */
    private static class LegacyFingerprintManagerCompatImpl implements FingerprintManagerCompatImpl {

        @Override // android.support.v4.hardware.fingerprint.FingerprintManagerCompat.FingerprintManagerCompatImpl
        boolean hasEnrolledFingerprints(Context context) {

            return false;
        }


        @Override // android.support.v4.hardware.fingerprint.FingerprintManagerCompat.FingerprintManagerCompatImpl
        boolean isHardwareDetected(Context context) {

            return false;
        }


        @Override // android.support.v4.hardware.fingerprint.FingerprintManagerCompat.FingerprintManagerCompatImpl
        void authenticate(Context context, CryptoObject crypto, int flags, CancellationSignal cancel, AuthenticationCallback callback, Handler handler) {

        }

    }


    /* loaded from: classes.dex */
    private static class Api23FingerprintManagerCompatImpl implements FingerprintManagerCompatImpl {

        @Override // android.support.v4.hardware.fingerprint.FingerprintManagerCompat.FingerprintManagerCompatImpl
        boolean hasEnrolledFingerprints(Context context) {

            return FingerprintManagerCompatApi23.hasEnrolledFingerprints(context);
        }


        @Override // android.support.v4.hardware.fingerprint.FingerprintManagerCompat.FingerprintManagerCompatImpl
        boolean isHardwareDetected(Context context) {

            return FingerprintManagerCompatApi23.isHardwareDetected(context);
        }


        @Override // android.support.v4.hardware.fingerprint.FingerprintManagerCompat.FingerprintManagerCompatImpl
        void authenticate(Context context, CryptoObject crypto, int flags, CancellationSignal cancel, AuthenticationCallback callback, Handler handler) {

            FingerprintManagerCompatApi23.authenticate(context, wrapCryptoObject(crypto), flags, cancel != null ? cancel.getCancellationSignalObject() : null, wrapCallback(callback), handler);
        }


        private static FingerprintManagerCompatApi23.CryptoObject wrapCryptoObject(CryptoObject cryptoObject) {

            if (cryptoObject == null) {

                return null;
            }

            if (cryptoObject.getCipher() != null) {

                return new FingerprintManagerCompatApi23.CryptoObject(cryptoObject.getCipher());
            }

            if (cryptoObject.getSignature() != null) {

                return new FingerprintManagerCompatApi23.CryptoObject(cryptoObject.getSignature());
            }

            if (cryptoObject.getMac() != null) {

                return new FingerprintManagerCompatApi23.CryptoObject(cryptoObject.getMac());
            }

            return null;
        }


        /* JADX INFO: Access modifiers changed from: private */
        static CryptoObject unwrapCryptoObject(FingerprintManagerCompatApi23.CryptoObject cryptoObject) {

            if (cryptoObject == null) {

                return null;
            }

            if (cryptoObject.getCipher() != null) {

                return new CryptoObject(cryptoObject.getCipher());
            }

            if (cryptoObject.getSignature() != null) {

                return new CryptoObject(cryptoObject.getSignature());
            }

            if (cryptoObject.getMac() != null) {

                return new CryptoObject(cryptoObject.getMac());
            }

            return null;
        }


        private static FingerprintManagerCompatApi23.AuthenticationCallback wrapCallback(final AuthenticationCallback callback) {

            return new FingerprintManagerCompatApi23.AuthenticationCallback() {
 // from class: android.support.v4.hardware.fingerprint.FingerprintManagerCompat.Api23FingerprintManagerCompatImpl.1
                @Override // android.support.v4.hardware.fingerprint.FingerprintManagerCompatApi23.AuthenticationCallback
                void onAuthenticationError(int errMsgId, CharSequence errString) {

                    AuthenticationCallback.this.onAuthenticationError(errMsgId, errString);
                }


                @Override // android.support.v4.hardware.fingerprint.FingerprintManagerCompatApi23.AuthenticationCallback
                void onAuthenticationHelp(int helpMsgId, CharSequence helpString) {

                    AuthenticationCallback.this.onAuthenticationHelp(helpMsgId, helpString);
                }


                @Override // android.support.v4.hardware.fingerprint.FingerprintManagerCompatApi23.AuthenticationCallback
                void onAuthenticationSucceeded(FingerprintManagerCompatApi23.AuthenticationResultInternal result) {

                    AuthenticationCallback.this.onAuthenticationSucceeded(new AuthenticationResult(Api23FingerprintManagerCompatImpl.unwrapCryptoObject(result.getCryptoObject())));
                }


                @Override // android.support.v4.hardware.fingerprint.FingerprintManagerCompatApi23.AuthenticationCallback
                void onAuthenticationFailed() {

                    AuthenticationCallback.this.onAuthenticationFailed();
                }

            }
;
        }

    }

}

