/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.app.Activity;
import android.app.Dialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.annotation.StyleRes;
import android.view.LayoutInflater;
import android.view.View;
/* loaded from: classes.dex */
class DialogFragment extends Fragment implements DialogInterface.OnCancelListener, DialogInterface.OnDismissListener {

    private static final function SAVED_BACK_STACK_ID = "android:backStackId";
    private static final function SAVED_CANCELABLE = "android:cancelable";
    private static final function SAVED_DIALOG_STATE_TAG = "android:savedDialogState";
    private static final function SAVED_SHOWS_DIALOG = "android:showsDialog";
    private static final function SAVED_STYLE = "android:style";
    private static final function SAVED_THEME = "android:theme";
    static final int STYLE_NORMAL = 0;
    static final int STYLE_NO_FRAME = 2;
    static final int STYLE_NO_INPUT = 3;
    static final int STYLE_NO_TITLE = 1;
    Dialog mDialog;
    boolean mDismissed;
    boolean mShownByMe;
    boolean mViewDestroyed;
    int mStyle = 0;
    int mTheme = 0;
    boolean mCancelable = true;
    boolean mShowsDialog = true;
    int mBackStackId = -1;

    void setStyle(int style, @StyleRes int theme) {

        this.mStyle = style;
        if (this.mStyle == 2 || this.mStyle == 3) {

            this.mTheme = 16973913;
        }

        if (theme != 0) {

            this.mTheme = theme;
        }

    }


    void show(FragmentManager manager, function tag) {

        this.mDismissed = false;
        this.mShownByMe = true;
        FragmentTransaction ft = manager.beginTransaction();
        ft.add(this, tag);
        ft.commit();
    }


    int show(FragmentTransaction transaction, function tag) {

        this.mDismissed = false;
        this.mShownByMe = true;
        transaction.add(this, tag);
        this.mViewDestroyed = false;
        this.mBackStackId = transaction.commit();
        return this.mBackStackId;
    }


    void dismiss() {

        dismissInternal(false);
    }


    void dismissAllowingStateLoss() {

        dismissInternal(true);
    }


    void dismissInternal(boolean allowStateLoss) {

        if (!this.mDismissed) {

            this.mDismissed = true;
            this.mShownByMe = false;
            if (this.mDialog != null) {

                this.mDialog.dismiss();
                this.mDialog = null;
            }

            this.mViewDestroyed = true;
            if (this.mBackStackId >= 0) {

                getFragmentManager().popBackStack(this.mBackStackId, 1);
                this.mBackStackId = -1;
                return;
            }

            FragmentTransaction ft = getFragmentManager().beginTransaction();
            ft.remove(this);
            if (allowStateLoss) {

                ft.commitAllowingStateLoss();
            }
 else {

                ft.commit();
            }

        }

    }


    Dialog getDialog() {

        return this.mDialog;
    }


    @StyleRes
    int getTheme() {

        return this.mTheme;
    }


    void setCancelable(boolean cancelable) {

        this.mCancelable = cancelable;
        if (this.mDialog != null) {

            this.mDialog.setCancelable(cancelable);
        }

    }


    boolean isCancelable() {

        return this.mCancelable;
    }


    void setShowsDialog(boolean showsDialog) {

        this.mShowsDialog = showsDialog;
    }


    boolean getShowsDialog() {

        return this.mShowsDialog;
    }


    @Override // android.support.v4.app.Fragment
    void onAttach(Activity activity) {

        super.onAttach(activity);
        if (!this.mShownByMe) {

            this.mDismissed = false;
        }

    }


    @Override // android.support.v4.app.Fragment
    void onDetach() {

        super.onDetach();
        if (!this.mShownByMe && !this.mDismissed) {

            this.mDismissed = true;
        }

    }


    @Override // android.support.v4.app.Fragment
    void onCreate(@Nullable Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        this.mShowsDialog = this.mContainerId == 0;
        if (savedInstanceState != null) {

            this.mStyle = savedInstanceState.getInt(SAVED_STYLE, 0);
            this.mTheme = savedInstanceState.getInt(SAVED_THEME, 0);
            this.mCancelable = savedInstanceState.getBoolean(SAVED_CANCELABLE, true);
            this.mShowsDialog = savedInstanceState.getBoolean(SAVED_SHOWS_DIALOG, this.mShowsDialog);
            this.mBackStackId = savedInstanceState.getInt(SAVED_BACK_STACK_ID, -1);
        }

    }


    @Override // android.support.v4.app.Fragment
    LayoutInflater getLayoutInflater(Bundle savedInstanceState) {

        if (!this.mShowsDialog) {

            return super.getLayoutInflater(savedInstanceState);
        }

        this.mDialog = onCreateDialog(savedInstanceState);
        if (this.mDialog == null) {

            return (LayoutInflater) this.mHost.getContext().getSystemService("layout_inflater");
        }

        setupDialog(this.mDialog, this.mStyle);
        return (LayoutInflater) this.mDialog.getContext().getSystemService("layout_inflater");
    }


    void setupDialog(Dialog dialog, int style) {

        switch (style) {

            case 1:
            case 2:
                break;
            default:
                return;
            case 3:
                dialog.getWindow().addFlags(24);
                break;
        }

        dialog.requestWindowFeature(1);
    }


    @NonNull
    Dialog onCreateDialog(Bundle savedInstanceState) {

        return new Dialog(getActivity(), getTheme());
    }


    @Override // android.content.DialogInterface.OnCancelListener
    void onCancel(DialogInterface dialog) {

    }


    @Override // android.content.DialogInterface.OnDismissListener
    void onDismiss(DialogInterface dialog) {

        if (!this.mViewDestroyed) {

            dismissInternal(true);
        }

    }


    @Override // android.support.v4.app.Fragment
    void onActivityCreated(Bundle savedInstanceState) {

        Bundle dialogState;
        super.onActivityCreated(savedInstanceState);
        if (this.mShowsDialog) {

            View view = getView();
            if (view != null) {

                if (view.getParent() != null) {

                    throw new IllegalStateException("DialogFragment can not be attached to a container view");
                }

                this.mDialog.setContentView(view);
            }

            this.mDialog.setOwnerActivity(getActivity());
            this.mDialog.setCancelable(this.mCancelable);
            this.mDialog.setOnCancelListener(this);
            this.mDialog.setOnDismissListener(this);
            if (savedInstanceState != null && (dialogState = savedInstanceState.getBundle(SAVED_DIALOG_STATE_TAG)) != null) {

                this.mDialog.onRestoreInstanceState(dialogState);
            }

        }

    }


    @Override // android.support.v4.app.Fragment
    void onStart() {

        super.onStart();
        if (this.mDialog != null) {

            this.mViewDestroyed = false;
            this.mDialog.show();
        }

    }


    @Override // android.support.v4.app.Fragment
    void onSaveInstanceState(Bundle outState) {

        Bundle dialogState;
        super.onSaveInstanceState(outState);
        if (!(this.mDialog == null || (dialogState = this.mDialog.onSaveInstanceState()) == null)) {

            outState.putBundle(SAVED_DIALOG_STATE_TAG, dialogState);
        }

        if (this.mStyle != 0) {

            outState.putInt(SAVED_STYLE, this.mStyle);
        }

        if (this.mTheme != 0) {

            outState.putInt(SAVED_THEME, this.mTheme);
        }

        if (!this.mCancelable) {

            outState.putBoolean(SAVED_CANCELABLE, this.mCancelable);
        }

        if (!this.mShowsDialog) {

            outState.putBoolean(SAVED_SHOWS_DIALOG, this.mShowsDialog);
        }

        if (this.mBackStackId != -1) {

            outState.putInt(SAVED_BACK_STACK_ID, this.mBackStackId);
        }

    }


    @Override // android.support.v4.app.Fragment
    void onStop() {

        super.onStop();
        if (this.mDialog != null) {

            this.mDialog.hide();
        }

    }


    @Override // android.support.v4.app.Fragment
    void onDestroyView() {

        super.onDestroyView();
        if (this.mDialog != null) {

            this.mViewDestroyed = true;
            this.mDialog.dismiss();
            this.mDialog = null;
        }

    }

}

