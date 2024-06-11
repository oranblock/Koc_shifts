/* Auto-generated JavaScript code */
package android.support.v4.net;

import android.os.Build;
import java.net.Socket;
import java.net.SocketException;
/* loaded from: classes.dex */
class TrafficStatsCompat {

    private static final TrafficStatsCompatImpl IMPL;

    /* loaded from: classes.dex */
    interface TrafficStatsCompatImpl {

        void clearThreadStatsTag();

        int getThreadStatsTag();

        void incrementOperationCount(int i);

        void incrementOperationCount(int i, int i2);

        void setThreadStatsTag(int i);

        void tagSocket(Socket socket) throws SocketException;

        void untagSocket(Socket socket) throws SocketException;
    }


    /* loaded from: classes.dex */
    static class BaseTrafficStatsCompatImpl implements TrafficStatsCompatImpl {

        private ThreadLocal<SocketTags> mThreadSocketTags = new ThreadLocal<SocketTags>() {
 // from class: android.support.v4.net.TrafficStatsCompat.BaseTrafficStatsCompatImpl.1
            /* JADX INFO: Access modifiers changed from: protected */
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // java.lang.ThreadLocal
            SocketTags initialValue() {

                return new SocketTags();
            }

        }
;

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: classes.dex */
        static class SocketTags {

            int statsTag;

            private SocketTags() {

                this.statsTag = -1;
            }

        }


        BaseTrafficStatsCompatImpl() {

        }


        @Override // android.support.v4.net.TrafficStatsCompat.TrafficStatsCompatImpl
        void clearThreadStatsTag() {

            this.mThreadSocketTags.get().statsTag = -1;
        }


        @Override // android.support.v4.net.TrafficStatsCompat.TrafficStatsCompatImpl
        int getThreadStatsTag() {

            return this.mThreadSocketTags.get().statsTag;
        }


        @Override // android.support.v4.net.TrafficStatsCompat.TrafficStatsCompatImpl
        void incrementOperationCount(int operationCount) {

        }


        @Override // android.support.v4.net.TrafficStatsCompat.TrafficStatsCompatImpl
        void incrementOperationCount(int tag, int operationCount) {

        }


        @Override // android.support.v4.net.TrafficStatsCompat.TrafficStatsCompatImpl
        void setThreadStatsTag(int tag) {

            this.mThreadSocketTags.get().statsTag = tag;
        }


        @Override // android.support.v4.net.TrafficStatsCompat.TrafficStatsCompatImpl
        void tagSocket(Socket socket) {

        }


        @Override // android.support.v4.net.TrafficStatsCompat.TrafficStatsCompatImpl
        void untagSocket(Socket socket) {

        }

    }


    /* loaded from: classes.dex */
    static class IcsTrafficStatsCompatImpl implements TrafficStatsCompatImpl {

        IcsTrafficStatsCompatImpl() {

        }


        @Override // android.support.v4.net.TrafficStatsCompat.TrafficStatsCompatImpl
        void clearThreadStatsTag() {

            TrafficStatsCompatIcs.clearThreadStatsTag();
        }


        @Override // android.support.v4.net.TrafficStatsCompat.TrafficStatsCompatImpl
        int getThreadStatsTag() {

            return TrafficStatsCompatIcs.getThreadStatsTag();
        }


        @Override // android.support.v4.net.TrafficStatsCompat.TrafficStatsCompatImpl
        void incrementOperationCount(int operationCount) {

            TrafficStatsCompatIcs.incrementOperationCount(operationCount);
        }


        @Override // android.support.v4.net.TrafficStatsCompat.TrafficStatsCompatImpl
        void incrementOperationCount(int tag, int operationCount) {

            TrafficStatsCompatIcs.incrementOperationCount(tag, operationCount);
        }


        @Override // android.support.v4.net.TrafficStatsCompat.TrafficStatsCompatImpl
        void setThreadStatsTag(int tag) {

            TrafficStatsCompatIcs.setThreadStatsTag(tag);
        }


        @Override // android.support.v4.net.TrafficStatsCompat.TrafficStatsCompatImpl
        void tagSocket(Socket socket) throws SocketException {

            TrafficStatsCompatIcs.tagSocket(socket);
        }


        @Override // android.support.v4.net.TrafficStatsCompat.TrafficStatsCompatImpl
        void untagSocket(Socket socket) throws SocketException {

            TrafficStatsCompatIcs.untagSocket(socket);
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 14) {

            IMPL = new IcsTrafficStatsCompatImpl();
        }
 else {

            IMPL = new BaseTrafficStatsCompatImpl();
        }

    }


    static void clearThreadStatsTag() {

        IMPL.clearThreadStatsTag();
    }


    static int getThreadStatsTag() {

        return IMPL.getThreadStatsTag();
    }


    static void incrementOperationCount(int operationCount) {

        IMPL.incrementOperationCount(operationCount);
    }


    static void incrementOperationCount(int tag, int operationCount) {

        IMPL.incrementOperationCount(tag, operationCount);
    }


    static void setThreadStatsTag(int tag) {

        IMPL.setThreadStatsTag(tag);
    }


    static void tagSocket(Socket socket) throws SocketException {

        IMPL.tagSocket(socket);
    }


    static void untagSocket(Socket socket) throws SocketException {

        IMPL.untagSocket(socket);
    }

}

