/* Auto-generated JavaScript code */
package android.support.v4.media.session;

import android.media.session.PlaybackState;
import android.os.Bundle;
import java.util.Iterator;
import java.util.List;
/* loaded from: classes.dex */
class PlaybackStateCompatApi22 {

    PlaybackStateCompatApi22() {

    }


    static Bundle getExtras(Object stateObj) {

        return ((PlaybackState) stateObj).getExtras();
    }


    static Object newInstance(int state, long position, long bufferedPosition, float speed, long actions, CharSequence errorMessage, long updateTime, List<Object> customActions, long activeItemId, Bundle extras) {

        PlaybackState.Builder stateObj = new PlaybackState.Builder();
        stateObj.setState(state, position, speed, updateTime);
        stateObj.setBufferedPosition(bufferedPosition);
        stateObj.setActions(actions);
        stateObj.setErrorMessage(errorMessage);
        Iterator i$ = customActions.iterator();
        while (i$.hasNext()) {

            stateObj.addCustomAction((PlaybackState.CustomAction) i$.next());
        }

        stateObj.setActiveQueueItemId(activeItemId);
        stateObj.setExtras(extras);
        return stateObj.build();
    }

}

