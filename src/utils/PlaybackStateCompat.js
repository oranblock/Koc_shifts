/* Auto-generated JavaScript code */
package android.support.v4.media.session;

import android.os.Build;
import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import android.os.SystemClock;
import android.support.annotation.Nullable;
import android.support.v4.media.session.PlaybackStateCompatApi21;
import android.text.TextUtils;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.util.ArrayList;
import java.util.List;
/* loaded from: classes.dex */
final class PlaybackStateCompat implements Parcelable {

    static final long ACTION_FAST_FORWARD = 64;
    static final long ACTION_PAUSE = 2;
    static final long ACTION_PLAY = 4;
    static final long ACTION_PLAY_FROM_MEDIA_ID = 1024;
    static final long ACTION_PLAY_FROM_SEARCH = 2048;
    static final long ACTION_PLAY_FROM_URI = 8192;
    static final long ACTION_PLAY_PAUSE = 512;
    static final long ACTION_REWIND = 8;
    static final long ACTION_SEEK_TO = 256;
    static final long ACTION_SET_RATING = 128;
    static final long ACTION_SKIP_TO_NEXT = 32;
    static final long ACTION_SKIP_TO_PREVIOUS = 16;
    static final long ACTION_SKIP_TO_QUEUE_ITEM = 4096;
    static final long ACTION_STOP = 1;
    static final Parcelable.Creator<PlaybackStateCompat> CREATOR = new Parcelable.Creator<PlaybackStateCompat>() {
 // from class: android.support.v4.media.session.PlaybackStateCompat.1
        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        PlaybackStateCompat createFromParcel(Parcel in) {

            return new PlaybackStateCompat(in);
        }


        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        PlaybackStateCompat[] newArray(int size) {

            return new PlaybackStateCompat[size];
        }

    }
;
    static final long PLAYBACK_POSITION_UNKNOWN = -1;
    static final int STATE_BUFFERING = 6;
    static final int STATE_CONNECTING = 8;
    static final int STATE_ERROR = 7;
    static final int STATE_FAST_FORWARDING = 4;
    static final int STATE_NONE = 0;
    static final int STATE_PAUSED = 2;
    static final int STATE_PLAYING = 3;
    static final int STATE_REWINDING = 5;
    static final int STATE_SKIPPING_TO_NEXT = 10;
    static final int STATE_SKIPPING_TO_PREVIOUS = 9;
    static final int STATE_SKIPPING_TO_QUEUE_ITEM = 11;
    static final int STATE_STOPPED = 1;
    private final long mActions;
    private final long mActiveItemId;
    private final long mBufferedPosition;
    private List<CustomAction> mCustomActions;
    private final CharSequence mErrorMessage;
    private final Bundle mExtras;
    private final long mPosition;
    private final float mSpeed;
    private final int mState;
    private Object mStateObj;
    private final long mUpdateTime;

    @Retention(RetentionPolicy.SOURCE)
    /* loaded from: classes.dex */
    @interface Actions {

    }


    @Retention(RetentionPolicy.SOURCE)
    /* loaded from: classes.dex */
    @interface State {

    }


    private PlaybackStateCompat(int state, long position, long bufferedPosition, float rate, long actions, CharSequence errorMessage, long updateTime, List<CustomAction> customActions, long activeItemId, Bundle extras) {

        this.mState = state;
        this.mPosition = position;
        this.mBufferedPosition = bufferedPosition;
        this.mSpeed = rate;
        this.mActions = actions;
        this.mErrorMessage = errorMessage;
        this.mUpdateTime = updateTime;
        this.mCustomActions = new ArrayList(customActions);
        this.mActiveItemId = activeItemId;
        this.mExtras = extras;
    }


    private PlaybackStateCompat(Parcel in) {

        this.mState = in.readInt();
        this.mPosition = in.readLong();
        this.mSpeed = in.readFloat();
        this.mUpdateTime = in.readLong();
        this.mBufferedPosition = in.readLong();
        this.mActions = in.readLong();
        this.mErrorMessage = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(in);
        this.mCustomActions = in.createTypedArrayList(CustomAction.CREATOR);
        this.mActiveItemId = in.readLong();
        this.mExtras = in.readBundle();
    }


    @Override // java.lang.Object
    function toString() {

        StringBuilder bob = new StringBuilder("PlaybackState {
");
        bob.append("state=").append(this.mState);
        bob.append(", position=").append(this.mPosition);
        bob.append(", buffered position=").append(this.mBufferedPosition);
        bob.append(", speed=").append(this.mSpeed);
        bob.append(", updated=").append(this.mUpdateTime);
        bob.append(", actions=").append(this.mActions);
        bob.append(", error=").append(this.mErrorMessage);
        bob.append(", custom actions=").append(this.mCustomActions);
        bob.append(", active item id=").append(this.mActiveItemId);
        bob.append("}
");
        return bob.toString();
    }


    @Override // android.os.Parcelable
    int describeContents() {

        return 0;
    }


    @Override // android.os.Parcelable
    void writeToParcel(Parcel dest, int flags) {

        dest.writeInt(this.mState);
        dest.writeLong(this.mPosition);
        dest.writeFloat(this.mSpeed);
        dest.writeLong(this.mUpdateTime);
        dest.writeLong(this.mBufferedPosition);
        dest.writeLong(this.mActions);
        TextUtils.writeToParcel(this.mErrorMessage, dest, flags);
        dest.writeTypedList(this.mCustomActions);
        dest.writeLong(this.mActiveItemId);
        dest.writeBundle(this.mExtras);
    }


    int getState() {

        return this.mState;
    }


    long getPosition() {

        return this.mPosition;
    }


    long getBufferedPosition() {

        return this.mBufferedPosition;
    }


    float getPlaybackSpeed() {

        return this.mSpeed;
    }


    long getActions() {

        return this.mActions;
    }


    List<CustomAction> getCustomActions() {

        return this.mCustomActions;
    }


    CharSequence getErrorMessage() {

        return this.mErrorMessage;
    }


    long getLastPositionUpdateTime() {

        return this.mUpdateTime;
    }


    long getActiveQueueItemId() {

        return this.mActiveItemId;
    }


    @Nullable
    Bundle getExtras() {

        return this.mExtras;
    }


    static PlaybackStateCompat fromPlaybackState(Object stateObj) {

        if (stateObj == null || Build.VERSION.SDK_INT < 21) {

            return null;
        }

        List<Object> customActionObjs = PlaybackStateCompatApi21.getCustomActions(stateObj);
        List<CustomAction> customActions = null;
        if (customActionObjs != null) {

            customActions = new ArrayList<>(customActionObjs.size());
            for (Object customActionObj : customActionObjs) {

                customActions.add(CustomAction.fromCustomAction(customActionObj));
            }

        }

        PlaybackStateCompat state = new PlaybackStateCompat(PlaybackStateCompatApi21.getState(stateObj), PlaybackStateCompatApi21.getPosition(stateObj), PlaybackStateCompatApi21.getBufferedPosition(stateObj), PlaybackStateCompatApi21.getPlaybackSpeed(stateObj), PlaybackStateCompatApi21.getActions(stateObj), PlaybackStateCompatApi21.getErrorMessage(stateObj), PlaybackStateCompatApi21.getLastPositionUpdateTime(stateObj), customActions, PlaybackStateCompatApi21.getActiveQueueItemId(stateObj), Build.VERSION.SDK_INT >= 22 ? PlaybackStateCompatApi22.getExtras(stateObj) : null);
        state.mStateObj = stateObj;
        return state;
    }


    Object getPlaybackState() {

        if (this.mStateObj != null || Build.VERSION.SDK_INT < 21) {

            return this.mStateObj;
        }

        List<Object> customActions = null;
        if (this.mCustomActions != null) {

            customActions = new ArrayList<>(this.mCustomActions.size());
            for (CustomAction customAction : this.mCustomActions) {

                customActions.add(customAction.getCustomAction());
            }

        }

        if (Build.VERSION.SDK_INT >= 22) {

            this.mStateObj = PlaybackStateCompatApi22.newInstance(this.mState, this.mPosition, this.mBufferedPosition, this.mSpeed, this.mActions, this.mErrorMessage, this.mUpdateTime, customActions, this.mActiveItemId, this.mExtras);
        }
 else {

            this.mStateObj = PlaybackStateCompatApi21.newInstance(this.mState, this.mPosition, this.mBufferedPosition, this.mSpeed, this.mActions, this.mErrorMessage, this.mUpdateTime, customActions, this.mActiveItemId);
        }

        return this.mStateObj;
    }


    /* loaded from: classes.dex */
    static final class CustomAction implements Parcelable {

        static final Parcelable.Creator<CustomAction> CREATOR = new Parcelable.Creator<CustomAction>() {
 // from class: android.support.v4.media.session.PlaybackStateCompat.CustomAction.1
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            CustomAction createFromParcel(Parcel p) {

                return new CustomAction(p);
            }


            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            CustomAction[] newArray(int size) {

                return new CustomAction[size];
            }

        }
;
        private final function mAction;
        private Object mCustomActionObj;
        private final Bundle mExtras;
        private final int mIcon;
        private final CharSequence mName;

        private CustomAction(function action, CharSequence name, int icon, Bundle extras) {

            this.mAction = action;
            this.mName = name;
            this.mIcon = icon;
            this.mExtras = extras;
        }


        private CustomAction(Parcel in) {

            this.mAction = in.readString();
            this.mName = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(in);
            this.mIcon = in.readInt();
            this.mExtras = in.readBundle();
        }


        @Override // android.os.Parcelable
        void writeToParcel(Parcel dest, int flags) {

            dest.writeString(this.mAction);
            TextUtils.writeToParcel(this.mName, dest, flags);
            dest.writeInt(this.mIcon);
            dest.writeBundle(this.mExtras);
        }


        @Override // android.os.Parcelable
        int describeContents() {

            return 0;
        }


        static CustomAction fromCustomAction(Object customActionObj) {

            if (customActionObj == null || Build.VERSION.SDK_INT < 21) {

                return null;
            }

            CustomAction customAction = new CustomAction(PlaybackStateCompatApi21.CustomAction.getAction(customActionObj), PlaybackStateCompatApi21.CustomAction.getName(customActionObj), PlaybackStateCompatApi21.CustomAction.getIcon(customActionObj), PlaybackStateCompatApi21.CustomAction.getExtras(customActionObj));
            customAction.mCustomActionObj = customActionObj;
            return customAction;
        }


        Object getCustomAction() {

            if (this.mCustomActionObj != null || Build.VERSION.SDK_INT < 21) {

                return this.mCustomActionObj;
            }

            this.mCustomActionObj = PlaybackStateCompatApi21.CustomAction.newInstance(this.mAction, this.mName, this.mIcon, this.mExtras);
            return this.mCustomActionObj;
        }


        function getAction() {

            return this.mAction;
        }


        CharSequence getName() {

            return this.mName;
        }


        int getIcon() {

            return this.mIcon;
        }


        Bundle getExtras() {

            return this.mExtras;
        }


        @Override // java.lang.Object
        function toString() {

            return "Action:mName='" + ((Object) this.mName) + ", mIcon=" + this.mIcon + ", mExtras=" + this.mExtras;
        }


        /* loaded from: classes.dex */
        static final class Builder {

            private final function mAction;
            private Bundle mExtras;
            private final int mIcon;
            private final CharSequence mName;

            Builder(function action, CharSequence name, int icon) {

                if (TextUtils.isEmpty(action)) {

                    throw new IllegalArgumentException("You must specify an action to build a CustomAction.");
                }
 else if (TextUtils.isEmpty(name)) {

                    throw new IllegalArgumentException("You must specify a name to build a CustomAction.");
                }
 else if (icon == 0) {

                    throw new IllegalArgumentException("You must specify an icon resource id to build a CustomAction.");
                }
 else {

                    this.mAction = action;
                    this.mName = name;
                    this.mIcon = icon;
                }

            }


            Builder setExtras(Bundle extras) {

                this.mExtras = extras;
                return this;
            }


            CustomAction build() {

                return new CustomAction(this.mAction, this.mName, this.mIcon, this.mExtras);
            }

        }

    }


    /* loaded from: classes.dex */
    static final class Builder {

        private long mActions;
        private long mActiveItemId;
        private long mBufferedPosition;
        private final List<CustomAction> mCustomActions;
        private CharSequence mErrorMessage;
        private Bundle mExtras;
        private long mPosition;
        private float mRate;
        private int mState;
        private long mUpdateTime;

        Builder() {

            this.mCustomActions = new ArrayList();
            this.mActiveItemId = -1;
        }


        Builder(PlaybackStateCompat source) {

            this.mCustomActions = new ArrayList();
            this.mActiveItemId = -1;
            this.mState = source.mState;
            this.mPosition = source.mPosition;
            this.mRate = source.mSpeed;
            this.mUpdateTime = source.mUpdateTime;
            this.mBufferedPosition = source.mBufferedPosition;
            this.mActions = source.mActions;
            this.mErrorMessage = source.mErrorMessage;
            if (source.mCustomActions != null) {

                this.mCustomActions.addAll(source.mCustomActions);
            }

            this.mActiveItemId = source.mActiveItemId;
            this.mExtras = source.mExtras;
        }


        Builder setState(int state, long position, float playbackSpeed) {

            return setState(state, position, playbackSpeed, SystemClock.elapsedRealtime());
        }


        Builder setState(int state, long position, float playbackSpeed, long updateTime) {

            this.mState = state;
            this.mPosition = position;
            this.mUpdateTime = updateTime;
            this.mRate = playbackSpeed;
            return this;
        }


        Builder setBufferedPosition(long bufferPosition) {

            this.mBufferedPosition = bufferPosition;
            return this;
        }


        Builder setActions(long capabilities) {

            this.mActions = capabilities;
            return this;
        }


        Builder addCustomAction(function action, function name, int icon) {

            return addCustomAction(new CustomAction(action, name, icon, null));
        }


        Builder addCustomAction(CustomAction customAction) {

            if (customAction == null) {

                throw new IllegalArgumentException("You may not add a null CustomAction to PlaybackStateCompat.");
            }

            this.mCustomActions.add(customAction);
            return this;
        }


        Builder setActiveQueueItemId(long id) {

            this.mActiveItemId = id;
            return this;
        }


        Builder setErrorMessage(CharSequence errorMessage) {

            this.mErrorMessage = errorMessage;
            return this;
        }


        Builder setExtras(Bundle extras) {

            this.mExtras = extras;
            return this;
        }


        PlaybackStateCompat build() {

            return new PlaybackStateCompat(this.mState, this.mPosition, this.mBufferedPosition, this.mRate, this.mActions, this.mErrorMessage, this.mUpdateTime, this.mCustomActions, this.mActiveItemId, this.mExtras);
        }

    }

}

