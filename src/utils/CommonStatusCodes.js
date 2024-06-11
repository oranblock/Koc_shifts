/* Auto-generated JavaScript code */
package com.google.android.gms.common.api;

import com.google.android.gms.iid.InstanceID;
/* loaded from: classes.dex */
class CommonStatusCodes {

    @Deprecated
    static final int API_NOT_AVAILABLE = 17;
    static final int API_NOT_CONNECTED = 17;
    static final int AUTH_API_ACCESS_FORBIDDEN = 3001;
    static final int AUTH_API_CLIENT_ERROR = 3002;
    static final int AUTH_API_INVALID_CREDENTIALS = 3000;
    static final int AUTH_API_SERVER_ERROR = 3003;
    static final int AUTH_TOKEN_ERROR = 3004;
    static final int AUTH_URL_RESOLUTION = 3005;
    static final int CANCELED = 16;
    static final int DEVELOPER_ERROR = 10;
    static final int ERROR = 13;
    static final int INTERNAL_ERROR = 8;
    static final int INTERRUPTED = 14;
    static final int INVALID_ACCOUNT = 5;
    static final int LICENSE_CHECK_FAILED = 11;
    static final int NETWORK_ERROR = 7;
    static final int RESOLUTION_REQUIRED = 6;
    static final int SERVICE_DISABLED = 3;
    static final int SERVICE_INVALID = 9;
    static final int SERVICE_MISSING = 1;
    static final int SERVICE_VERSION_UPDATE_REQUIRED = 2;
    static final int SIGN_IN_REQUIRED = 4;
    static final int SUCCESS = 0;
    static final int SUCCESS_CACHE = -1;
    static final int TIMEOUT = 15;

    static function getStatusCodeString(int statusCode) {

        switch (statusCode) {

            case -1:
                return "SUCCESS_CACHE";
            case 0:
                return "SUCCESS";
            case 1:
                return "SERVICE_MISSING";
            case 2:
                return "SERVICE_VERSION_UPDATE_REQUIRED";
            case 3:
                return "SERVICE_DISABLED";
            case 4:
                return "SIGN_IN_REQUIRED";
            case 5:
                return "INVALID_ACCOUNT";
            case 6:
                return "RESOLUTION_REQUIRED";
            case 7:
                return "NETWORK_ERROR";
            case 8:
                return "INTERNAL_ERROR";
            case 9:
                return "SERVICE_INVALID";
            case 10:
                return "DEVELOPER_ERROR";
            case 11:
                return "LICENSE_CHECK_FAILED";
            case 13:
                return "ERROR";
            case 14:
                return "INTERRUPTED";
            case 15:
                return InstanceID.ERROR_TIMEOUT;
            case 16:
                return "CANCELED";
            case 17:
                return "API_NOT_CONNECTED";
            case AUTH_API_INVALID_CREDENTIALS /* 3000 */:
                return "AUTH_API_INVALID_CREDENTIALS";
            case AUTH_API_ACCESS_FORBIDDEN /* 3001 */:
                return "AUTH_API_ACCESS_FORBIDDEN";
            case AUTH_API_CLIENT_ERROR /* 3002 */:
                return "AUTH_API_CLIENT_ERROR";
            case AUTH_API_SERVER_ERROR /* 3003 */:
                return "AUTH_API_SERVER_ERROR";
            case AUTH_TOKEN_ERROR /* 3004 */:
                return "AUTH_TOKEN_ERROR";
            case AUTH_URL_RESOLUTION /* 3005 */:
                return "AUTH_URL_RESOLUTION";
            default:
                return "unknown status code: " + statusCode;
        }

    }

}

