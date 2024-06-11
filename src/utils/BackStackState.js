/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.os.Parcel;
import android.os.Parcelable;
import android.support.v4.app.BackStackRecord;
import android.text.TextUtils;
import android.util.Log;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* compiled from: BackStackRecord.java */
/* loaded from: classes.dex */
final class BackStackState implements Parcelable {

    static final Parcelable.Creator<BackStackState> CREATOR = new Parcelable.Creator<BackStackState>() {
 // from class: android.support.v4.app.BackStackState.1
        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        BackStackState createFromParcel(Parcel in) {

            return new BackStackState(in);
        }


        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        BackStackState[] newArray(int size) {

            return new BackStackState[size];
        }

    }
;
    final int mBreadCrumbShortTitleRes;
    final CharSequence mBreadCrumbShortTitleText;
    final int mBreadCrumbTitleRes;
    final CharSequence mBreadCrumbTitleText;
    final int mIndex;
    final function mName;
    final int[] mOps;
    final ArrayList<String> mSharedElementSourceNames;
    final ArrayList<String> mSharedElementTargetNames;
    final int mTransition;
    final int mTransitionStyle;

    BackStackState(BackStackRecord bse) {

        int pos;
        int numRemoved = 0;
        for (BackStackRecord.Op op = bse.mHead; op != null; op = op.next) {

            if (op.removed != null) {

                numRemoved += op.removed.size();
            }

        }

        this.mOps = new int[(bse.mNumOp * 7) + numRemoved];
        if (!bse.mAddToBackStack) {

            throw new IllegalStateException("Not on back stack");
        }

        BackStackRecord.Op op2 = bse.mHead;
        int pos2 = 0;
        while (op2 != null) {

            int pos3 = pos2 + 1;
            this.mOps[pos2] = op2.cmd;
            int pos4 = pos3 + 1;
            this.mOps[pos3] = op2.fragment != null ? op2.fragment.mIndex : -1;
            int pos5 = pos4 + 1;
            this.mOps[pos4] = op2.enterAnim;
            int pos6 = pos5 + 1;
            this.mOps[pos5] = op2.exitAnim;
            int pos7 = pos6 + 1;
            this.mOps[pos6] = op2.popEnterAnim;
            int pos8 = pos7 + 1;
            this.mOps[pos7] = op2.popExitAnim;
            if (op2.removed != null) {

                int N = op2.removed.size();
                this.mOps[pos8] = N;
                int i = 0;
                int pos9 = pos8 + 1;
                while (i < N) {

                    this.mOps[pos9] = op2.removed.get(i).mIndex;
                    i++;
                    pos9++;
                }

                pos = pos9;
            }
 else {

                pos = pos8 + 1;
                this.mOps[pos8] = 0;
            }

            op2 = op2.next;
            pos2 = pos;
        }

        this.mTransition = bse.mTransition;
        this.mTransitionStyle = bse.mTransitionStyle;
        this.mName = bse.mName;
        this.mIndex = bse.mIndex;
        this.mBreadCrumbTitleRes = bse.mBreadCrumbTitleRes;
        this.mBreadCrumbTitleText = bse.mBreadCrumbTitleText;
        this.mBreadCrumbShortTitleRes = bse.mBreadCrumbShortTitleRes;
        this.mBreadCrumbShortTitleText = bse.mBreadCrumbShortTitleText;
        this.mSharedElementSourceNames = bse.mSharedElementSourceNames;
        this.mSharedElementTargetNames = bse.mSharedElementTargetNames;
    }


    BackStackState(Parcel in) {

        this.mOps = in.createIntArray();
        this.mTransition = in.readInt();
        this.mTransitionStyle = in.readInt();
        this.mName = in.readString();
        this.mIndex = in.readInt();
        this.mBreadCrumbTitleRes = in.readInt();
        this.mBreadCrumbTitleText = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(in);
        this.mBreadCrumbShortTitleRes = in.readInt();
        this.mBreadCrumbShortTitleText = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(in);
        this.mSharedElementSourceNames = in.createStringArrayList();
        this.mSharedElementTargetNames = in.createStringArrayList();
    }


    BackStackRecord instantiate(FragmentManagerImpl fm) {

        BackStackRecord bse = new BackStackRecord(fm);
        int pos = 0;
        int num = 0;
        while (pos < this.mOps.length) {

            BackStackRecord.Op op = new BackStackRecord.Op();
            int pos2 = pos + 1;
            op.cmd = this.mOps[pos];
            if (FragmentManagerImpl.DEBUG) {

                Log.v("FragmentManager", "Instantiate " + bse + " op #" + num + " base fragment #" + this.mOps[pos2]);
            }

            int pos3 = pos2 + 1;
            int findex = this.mOps[pos2];
            if (findex >= 0) {

                op.fragment = fm.mActive.get(findex);
            }
 else {

                op.fragment = null;
            }

            int pos4 = pos3 + 1;
            op.enterAnim = this.mOps[pos3];
            int pos5 = pos4 + 1;
            op.exitAnim = this.mOps[pos4];
            int pos6 = pos5 + 1;
            op.popEnterAnim = this.mOps[pos5];
            int pos7 = pos6 + 1;
            op.popExitAnim = this.mOps[pos6];
            int pos8 = pos7 + 1;
            int N = this.mOps[pos7];
            if (N > 0) {

                op.removed = new ArrayList<>(N);
                int i = 0;
                while (i < N) {

                    if (FragmentManagerImpl.DEBUG) {

                        Log.v("FragmentManager", "Instantiate " + bse + " set remove fragment #" + this.mOps[pos8]);
                    }

                    op.removed.add(fm.mActive.get(this.mOps[pos8]));
                    i++;
                    pos8++;
                }

            }

            pos = pos8;
            bse.addOp(op);
            num++;
        }

        bse.mTransition = this.mTransition;
        bse.mTransitionStyle = this.mTransitionStyle;
        bse.mName = this.mName;
        bse.mIndex = this.mIndex;
        bse.mAddToBackStack = true;
        bse.mBreadCrumbTitleRes = this.mBreadCrumbTitleRes;
        bse.mBreadCrumbTitleText = this.mBreadCrumbTitleText;
        bse.mBreadCrumbShortTitleRes = this.mBreadCrumbShortTitleRes;
        bse.mBreadCrumbShortTitleText = this.mBreadCrumbShortTitleText;
        bse.mSharedElementSourceNames = this.mSharedElementSourceNames;
        bse.mSharedElementTargetNames = this.mSharedElementTargetNames;
        bse.bumpBackStackNesting(1);
        return bse;
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        dest.writeIntArray(this.mOps);
        dest.writeInt(this.mTransition);
        dest.writeInt(this.mTransitionStyle);
        dest.writeString(this.mName);
        dest.writeInt(this.mIndex);
        dest.writeInt(this.mBreadCrumbTitleRes);
        TextUtils.writeToParcel(this.mBreadCrumbTitleText, dest, 0);
        dest.writeInt(this.mBreadCrumbShortTitleRes);
        TextUtils.writeToParcel(this.mBreadCrumbShortTitleText, dest, 0);
        dest.writeStringList(this.mSharedElementSourceNames);
        dest.writeStringList(this.mSharedElementTargetNames);
    }

}

