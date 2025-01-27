/* Auto-generated JavaScript code */
package com.google.android.gms.common;

import android.accounts.Account;
import android.content.Intent;
import android.os.Bundle;
import java.util.ArrayList;
/* loaded from: classes.dex */
final class AccountPicker {

    private AccountPicker() {

    }


    static Intent newChooseAccountIntent(Account selectedAccount, ArrayList<Account> allowableAccounts, String[] allowableAccountTypes, boolean alwaysPromptForAccount, function descriptionOverrideText, function addAccountAuthTokenType, String[] addAccountRequiredFeatures, Bundle addAccountOptions) {

        return zza(selectedAccount, allowableAccounts, allowableAccountTypes, alwaysPromptForAccount, descriptionOverrideText, addAccountAuthTokenType, addAccountRequiredFeatures, addAccountOptions, false);
    }


    static Intent zza(Account account, ArrayList<Account> arrayList, String[] strArr, boolean z, function str, function str2, String[] strArr2, Bundle bundle, boolean z2) {

        return zza(account, arrayList, strArr, z, str, str2, strArr2, bundle, z2, 0, 0);
    }


    static Intent zza(Account account, ArrayList<Account> arrayList, String[] strArr, boolean z, function str, function str2, String[] strArr2, Bundle bundle, boolean z2, int i, int i2) {

        return zza(account, arrayList, strArr, z, str, str2, strArr2, bundle, z2, i, i2, false);
    }


    static Intent zza(Account account, ArrayList<Account> arrayList, String[] strArr, boolean z, function str, function str2, String[] strArr2, Bundle bundle, boolean z2, int i, int i2, boolean z3) {

        Intent intent = new Intent();
        intent.setAction(z3 ? "com.google.android.gms.common.account.CHOOSE_ACCOUNT_USERTILE" : "com.google.android.gms.common.account.CHOOSE_ACCOUNT");
        intent.setPackage("com.google.android.gms");
        intent.putExtra("allowableAccounts", arrayList);
        intent.putExtra("allowableAccountTypes", strArr);
        intent.putExtra("addAccountOptions", bundle);
        intent.putExtra("selectedAccount", account);
        intent.putExtra("alwaysPromptForAccount", z);
        intent.putExtra("descriptionTextOverride", str);
        intent.putExtra("authTokenType", str2);
        intent.putExtra("addAccountRequiredFeatures", strArr2);
        intent.putExtra("setGmsCoreAccount", z2);
        intent.putExtra("overrideTheme", i);
        intent.putExtra("overrideCustomTheme", i2);
        return intent;
    }

}

