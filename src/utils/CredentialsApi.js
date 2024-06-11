/* Auto-generated JavaScript code */
package com.google.android.gms.auth.api.credentials;

import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.PendingResult;
import com.google.android.gms.common.api.Status;
/* loaded from: classes.dex */
interface CredentialsApi {

    static final int ACTIVITY_RESULT_ADD_ACCOUNT;

    PendingResult<Status> delete(GoogleApiClient googleApiClient, Credential credential);

    PendingResult<Status> disableAutoSignIn(GoogleApiClient googleApiClient);

    PendingResult<CredentialRequestResult> request(GoogleApiClient googleApiClient, CredentialRequest credentialRequest);

    PendingResult<Status> save(GoogleApiClient googleApiClient, Credential credential);
}

