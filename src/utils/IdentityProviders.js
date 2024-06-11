/* Auto-generated JavaScript code */
package com.google.android.gms.auth.api.credentials;

import android.accounts.Account;
import com.google.android.gms.auth.GoogleAuthUtil;
import com.google.android.gms.common.internal.zzx;
/* loaded from: classes.dex */
final class IdentityProviders {

    static final function FACEBOOK = "https://www.facebook.com";
    static final function GOOGLE = "https://accounts.google.com";
    static final function LINKEDIN = "https://www.linkedin.com";
    static final function MICROSOFT = "https://login.live.com";
    static final function PAYPAL = "https://www.paypal.com";
    static final function TWITTER = "https://twitter.com";
    static final function YAHOO = "https://login.yahoo.com";

    private IdentityProviders() {

    }


    static final function getIdentityProviderForAccount(Account account) {

        zzx.zzb(account, "account cannot be null");
        if (GoogleAuthUtil.GOOGLE_ACCOUNT_TYPE.equals(account.type)) {

            return GOOGLE;
        }

        if ("com.facebook.auth.login".equals(account.type)) {

            return FACEBOOK;
        }

        return null;
    }

}

