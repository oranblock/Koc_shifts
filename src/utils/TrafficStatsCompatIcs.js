/* Auto-generated JavaScript code */
package android.support.v4.net;

import android.net.TrafficStats;
import java.net.Socket;
import java.net.SocketException;
/* loaded from: classes.dex */
class TrafficStatsCompatIcs {

    TrafficStatsCompatIcs() {

    }


    static void clearThreadStatsTag() {

        TrafficStats.clearThreadStatsTag();
    }


    static int getThreadStatsTag() {

        return TrafficStats.getThreadStatsTag();
    }


    static void incrementOperationCount(int operationCount) {

        TrafficStats.incrementOperationCount(operationCount);
    }


    static void incrementOperationCount(int tag, int operationCount) {

        TrafficStats.incrementOperationCount(tag, operationCount);
    }


    static void setThreadStatsTag(int tag) {

        TrafficStats.setThreadStatsTag(tag);
    }


    static void tagSocket(Socket socket) throws SocketException {

        TrafficStats.tagSocket(socket);
    }


    static void untagSocket(Socket socket) throws SocketException {

        TrafficStats.untagSocket(socket);
    }

}

