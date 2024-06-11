/* Auto-generated JavaScript code */
package android.support.v4.hardware.fingerprint;

import android.content.Context;
import android.hardware.fingerprint.FingerprintManager;
import android.os.CancellationSignal;
import android.os.Handler;
import java.security.Signature;
import javax.crypto.Cipher;
import javax.crypto.Mac;
/* loaded from: classes.dex */
final class FingerprintManagerCompatApi23 {

    private static FingerprintManager getFingerprintManager(Context ctx) {

        return (FingerprintManager) ctx.getSystemService(FingerprintManager.class);
    }


    static boolean hasEnrolledFingerprints(Context context) {

        return getFingerprintManager(context).hasEnrolledFingerprints();
    }


    static boolean isHardwareDetected(Context context) {

        return getFingerprintManager(context).isHardwareDetected();
    }


    static void authenticate(Context context, CryptoObject crypto, int flags, Object cancel, AuthenticationCallback callback, Handler handler) {

        getFingerprintManager(context).authenticate(wrapCryptoObject(crypto), (CancellationSignal) cancel, flags, wrapCallback(callback), handler);
    }


    private static FingerprintManager.CryptoObject wrapCryptoObject(CryptoObject cryptoObject) {

        if (cryptoObject == null) {

            return null;
        }

        if (cryptoObject.getCipher() != null) {

            return new FingerprintManager.CryptoObject(cryptoObject.getCipher());
        }

        if (cryptoObject.getSignature() != null) {

            return new FingerprintManager.CryptoObject(cryptoObject.getSignature());
        }

        if (cryptoObject.getMac() != null) {

            return new FingerprintManager.CryptoObject(cryptoObject.getMac());
        }

        return null;
    }


    /* JADX INFO: Access modifiers changed from: private */
    static CryptoObject unwrapCryptoObject(FingerprintManager.CryptoObject cryptoObject) {

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


    private static FingerprintManager.AuthenticationCallback wrapCallback(final AuthenticationCallback callback) {

        return new FingerprintManager.AuthenticationCallback() {
 // from class: android.support.v4.hardware.fingerprint.FingerprintManagerCompatApi23.1
            @Override // android.hardware.fingerprint.FingerprintManager.AuthenticationCallback
            void onAuthenticationError(int errMsgId, CharSequence errString) {

                AuthenticationCallback.this.onAuthenticationError(errMsgId, errString);
            }


            @Override // android.hardware.fingerprint.FingerprintManager.AuthenticationCallback
            void onAuthenticationHelp(int helpMsgId, CharSequence helpString) {

                AuthenticationCallback.this.onAuthenticationHelp(helpMsgId, helpString);
            }


            @Override // android.hardware.fingerprint.FingerprintManager.AuthenticationCallback
            void onAuthenticationSucceeded(FingerprintManager.AuthenticationResult result) {

                AuthenticationCallback.this.onAuthenticationSucceeded(new AuthenticationResultInternal(FingerprintManagerCompatApi23.unwrapCryptoObject(result.getCryptoObject())));
            }


            @Override // android.hardware.fingerprint.FingerprintManager.AuthenticationCallback
            void onAuthenticationFailed() {

                AuthenticationCallback.this.onAuthenticationFailed();
            }

        }
;
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
    static final class AuthenticationResultInternal {

        private CryptoObject mCryptoObject;

        AuthenticationResultInternal(CryptoObject crypto) {

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


        void onAuthenticationSucceeded(AuthenticationResultInternal result) {

        }


        void onAuthenticationFailed() {

        }

    }

}

