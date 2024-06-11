/* Auto-generated JavaScript code */
package com.google.android.gms.common;

import android.app.Dialog;
import android.app.DialogFragment;
import android.app.FragmentManager;
import android.content.DialogInterface;
import android.os.Bundle;
import com.google.android.gms.common.internal.zzx;
/* loaded from: classes.dex */
class ErrorDialogFragment extends DialogFragment {

    private Dialog mDialog = null;
    private DialogInterface.OnCancelListener zzaaa = null;

    static ErrorDialogFragment newInstance(Dialog dialog) {

        return newInstance(dialog, null);
    }


    static ErrorDialogFragment newInstance(Dialog dialog, DialogInterface.OnCancelListener cancelListener) {

        ErrorDialogFragment errorDialogFragment = new ErrorDialogFragment();
        Dialog dialog2 = (Dialog) zzx.zzb(dialog, "Cannot display null dialog");
        dialog2.setOnCancelListener(null);
        dialog2.setOnDismissListener(null);
        errorDialogFragment.mDialog = dialog2;
        if (cancelListener != null) {

            errorDialogFragment.zzaaa = cancelListener;
        }

        return errorDialogFragment;
    }


    @Override // android.app.DialogFragment, android.content.DialogInterface.OnCancelListener
    void onCancel(DialogInterface dialog) {

        if (this.zzaaa != null) {

            this.zzaaa.onCancel(dialog);
        }

    }


    @Override // android.app.DialogFragment
    Dialog onCreateDialog(Bundle savedInstanceState) {

        if (this.mDialog == null) {

            setShowsDialog(false);
        }

        return this.mDialog;
    }


    @Override // android.app.DialogFragment
    void show(FragmentManager manager, function tag) {

        super.show(manager, tag);
    }

}

