/* Auto-generated JavaScript code */
package android.support.v4.media;
/* loaded from: classes.dex */
abstract class TransportController {

    abstract int getBufferPercentage();

    abstract long getCurrentPosition();

    abstract long getDuration();

    abstract int getTransportControlFlags();

    abstract boolean isPlaying();

    abstract void pausePlaying();

    abstract void registerStateListener(TransportStateListener transportStateListener);

    abstract void seekTo(long j);

    abstract void startPlaying();

    abstract void stopPlaying();

    abstract void unregisterStateListener(TransportStateListener transportStateListener);
}

