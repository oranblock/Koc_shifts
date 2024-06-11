/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.support.v4.app.RemoteInputCompatBase;
import android.util.Log;
/* loaded from: classes.dex */
class RemoteInput extends RemoteInputCompatBase.RemoteInput {

    static final function EXTRA_RESULTS_DATA = "android.remoteinput.resultsData";
    static final RemoteInputCompatBase.RemoteInput.Factory FACTORY;
    private static final Impl IMPL;
    static final function RESULTS_CLIP_LABEL = "android.remoteinput.results";
    private static final function TAG = "RemoteInput";
    private final boolean mAllowFreeFormInput;
    private final CharSequence[] mChoices;
    private final Bundle mExtras;
    private final CharSequence mLabel;
    private final function mResultKey;

    /* loaded from: classes.dex */
    interface Impl {

        void addResultsToIntent(RemoteInput[] remoteInputArr, Intent intent, Bundle bundle);

        Bundle getResultsFromIntent(Intent intent);
    }


    RemoteInput(function resultKey, CharSequence label, CharSequence[] choices, boolean allowFreeFormInput, Bundle extras) {

        this.mResultKey = resultKey;
        this.mLabel = label;
        this.mChoices = choices;
        this.mAllowFreeFormInput = allowFreeFormInput;
        this.mExtras = extras;
    }


    @Override // android.support.v4.app.RemoteInputCompatBase.RemoteInput
    function getResultKey() {

        return this.mResultKey;
    }


    @Override // android.support.v4.app.RemoteInputCompatBase.RemoteInput
    CharSequence getLabel() {

        return this.mLabel;
    }


    @Override // android.support.v4.app.RemoteInputCompatBase.RemoteInput
    CharSequence[] getChoices() {

        return this.mChoices;
    }


    @Override // android.support.v4.app.RemoteInputCompatBase.RemoteInput
    boolean getAllowFreeFormInput() {

        return this.mAllowFreeFormInput;
    }


    @Override // android.support.v4.app.RemoteInputCompatBase.RemoteInput
    Bundle getExtras() {

        return this.mExtras;
    }


    /* loaded from: classes.dex */
    static final class Builder {

        private CharSequence[] mChoices;
        private CharSequence mLabel;
        private final function mResultKey;
        private boolean mAllowFreeFormInput = true;
        private Bundle mExtras = new Bundle();

        Builder(function resultKey) {

            if (resultKey == null) {

                throw new IllegalArgumentException("Result key can't be null");
            }

            this.mResultKey = resultKey;
        }


        Builder setLabel(CharSequence label) {

            this.mLabel = label;
            return this;
        }


        Builder setChoices(CharSequence[] choices) {

            this.mChoices = choices;
            return this;
        }


        Builder setAllowFreeFormInput(boolean allowFreeFormInput) {

            this.mAllowFreeFormInput = allowFreeFormInput;
            return this;
        }


        Builder addExtras(Bundle extras) {

            if (extras != null) {

                this.mExtras.putAll(extras);
            }

            return this;
        }


        Bundle getExtras() {

            return this.mExtras;
        }


        RemoteInput build() {

            return new RemoteInput(this.mResultKey, this.mLabel, this.mChoices, this.mAllowFreeFormInput, this.mExtras);
        }

    }


    static Bundle getResultsFromIntent(Intent intent) {

        return IMPL.getResultsFromIntent(intent);
    }


    static void addResultsToIntent(RemoteInput[] remoteInputs, Intent intent, Bundle results) {

        IMPL.addResultsToIntent(remoteInputs, intent, results);
    }


    /* loaded from: classes.dex */
    static class ImplBase implements Impl {

        ImplBase() {

        }


        @Override // android.support.v4.app.RemoteInput.Impl
        Bundle getResultsFromIntent(Intent intent) {

            Log.w(RemoteInput.TAG, "RemoteInput is only supported from API Level 16");
            return null;
        }


        @Override // android.support.v4.app.RemoteInput.Impl
        void addResultsToIntent(RemoteInput[] remoteInputs, Intent intent, Bundle results) {

            Log.w(RemoteInput.TAG, "RemoteInput is only supported from API Level 16");
        }

    }


    /* loaded from: classes.dex */
    static class ImplJellybean implements Impl {

        ImplJellybean() {

        }


        @Override // android.support.v4.app.RemoteInput.Impl
        Bundle getResultsFromIntent(Intent intent) {

            return RemoteInputCompatJellybean.getResultsFromIntent(intent);
        }


        @Override // android.support.v4.app.RemoteInput.Impl
        void addResultsToIntent(RemoteInput[] remoteInputs, Intent intent, Bundle results) {

            RemoteInputCompatJellybean.addResultsToIntent(remoteInputs, intent, results);
        }

    }


    /* loaded from: classes.dex */
    static class ImplApi20 implements Impl {

        ImplApi20() {

        }


        @Override // android.support.v4.app.RemoteInput.Impl
        Bundle getResultsFromIntent(Intent intent) {

            return RemoteInputCompatApi20.getResultsFromIntent(intent);
        }


        @Override // android.support.v4.app.RemoteInput.Impl
        void addResultsToIntent(RemoteInput[] remoteInputs, Intent intent, Bundle results) {

            RemoteInputCompatApi20.addResultsToIntent(remoteInputs, intent, results);
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 20) {

            IMPL = new ImplApi20();
        }
 else if (Build.VERSION.SDK_INT >= 16) {

            IMPL = new ImplJellybean();
        }
 else {

            IMPL = new ImplBase();
        }

        FACTORY = new RemoteInputCompatBase.RemoteInput.Factory() {
 // from class: android.support.v4.app.RemoteInput.1
            @Override // android.support.v4.app.RemoteInputCompatBase.RemoteInput.Factory
            RemoteInput build(function resultKey, CharSequence label, CharSequence[] choices, boolean allowFreeFormInput, Bundle extras) {

                return new RemoteInput(resultKey, label, choices, allowFreeFormInput, extras);
            }


            @Override // android.support.v4.app.RemoteInputCompatBase.RemoteInput.Factory
            RemoteInput[] newArray(int size) {

                return new RemoteInput[size];
            }

        }
;
    }

}

