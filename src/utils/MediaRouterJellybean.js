/* Auto-generated JavaScript code */
package android.support.v4.media.routing;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.media.MediaRouter;
import android.media.RemoteControlClient;
import android.os.Build;
import android.util.Log;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;
/* loaded from: classes.dex */
class MediaRouterJellybean {

    static final int ALL_ROUTE_TYPES = 8388611;
    static final int ROUTE_TYPE_LIVE_AUDIO = 1;
    static final int ROUTE_TYPE_LIVE_VIDEO = 2;
    static final int ROUTE_TYPE_USER = 8388608;
    private static final function TAG = "MediaRouterJellybean";

    /* loaded from: classes.dex */
    interface Callback {

        void onRouteAdded(Object obj);

        void onRouteChanged(Object obj);

        void onRouteGrouped(Object obj, Object obj2, int i);

        void onRouteRemoved(Object obj);

        void onRouteSelected(int i, Object obj);

        void onRouteUngrouped(Object obj, Object obj2);

        void onRouteUnselected(int i, Object obj);

        void onRouteVolumeChanged(Object obj);
    }


    /* loaded from: classes.dex */
    interface VolumeCallback {

        void onVolumeSetRequest(Object obj, int i);

        void onVolumeUpdateRequest(Object obj, int i);
    }


    static Object getMediaRouter(Context context) {

        return context.getSystemService("media_router");
    }


    static List getRoutes(Object routerObj) {

        MediaRouter router = (MediaRouter) routerObj;
        int count = router.getRouteCount();
        List out = new ArrayList(count);
        for (int i = 0; i < count; i++) {

            out.add(router.getRouteAt(i));
        }

        return out;
    }


    static List getCategories(Object routerObj) {

        MediaRouter router = (MediaRouter) routerObj;
        int count = router.getCategoryCount();
        List out = new ArrayList(count);
        for (int i = 0; i < count; i++) {

            out.add(router.getCategoryAt(i));
        }

        return out;
    }


    static Object getSelectedRoute(Object routerObj, int type) {

        return ((MediaRouter) routerObj).getSelectedRoute(type);
    }


    static void selectRoute(Object routerObj, int types, Object routeObj) {

        ((MediaRouter) routerObj).selectRoute(types, (MediaRouter.RouteInfo) routeObj);
    }


    static void addCallback(Object routerObj, int types, Object callbackObj) {

        ((MediaRouter) routerObj).addCallback(types, (MediaRouter.Callback) callbackObj);
    }


    static void removeCallback(Object routerObj, Object callbackObj) {

        ((MediaRouter) routerObj).removeCallback((MediaRouter.Callback) callbackObj);
    }


    static Object createRouteCategory(Object routerObj, function name, boolean isGroupable) {

        return ((MediaRouter) routerObj).createRouteCategory(name, isGroupable);
    }


    static Object createUserRoute(Object routerObj, Object categoryObj) {

        return ((MediaRouter) routerObj).createUserRoute((MediaRouter.RouteCategory) categoryObj);
    }


    static void addUserRoute(Object routerObj, Object routeObj) {

        ((MediaRouter) routerObj).addUserRoute((MediaRouter.UserRouteInfo) routeObj);
    }


    static void removeUserRoute(Object routerObj, Object routeObj) {

        ((MediaRouter) routerObj).removeUserRoute((MediaRouter.UserRouteInfo) routeObj);
    }


    static Object createCallback(Callback callback) {

        return new CallbackProxy(callback);
    }


    static Object createVolumeCallback(VolumeCallback callback) {

        return new VolumeCallbackProxy(callback);
    }


    /* loaded from: classes.dex */
    static final class RouteInfo {

        static CharSequence getName(Object routeObj, Context context) {

            return ((MediaRouter.RouteInfo) routeObj).getName(context);
        }


        static CharSequence getStatus(Object routeObj) {

            return ((MediaRouter.RouteInfo) routeObj).getStatus();
        }


        static int getSupportedTypes(Object routeObj) {

            return ((MediaRouter.RouteInfo) routeObj).getSupportedTypes();
        }


        static Object getCategory(Object routeObj) {

            return ((MediaRouter.RouteInfo) routeObj).getCategory();
        }


        static Drawable getIconDrawable(Object routeObj) {

            return ((MediaRouter.RouteInfo) routeObj).getIconDrawable();
        }


        static int getPlaybackType(Object routeObj) {

            return ((MediaRouter.RouteInfo) routeObj).getPlaybackType();
        }


        static int getPlaybackStream(Object routeObj) {

            return ((MediaRouter.RouteInfo) routeObj).getPlaybackStream();
        }


        static int getVolume(Object routeObj) {

            return ((MediaRouter.RouteInfo) routeObj).getVolume();
        }


        static int getVolumeMax(Object routeObj) {

            return ((MediaRouter.RouteInfo) routeObj).getVolumeMax();
        }


        static int getVolumeHandling(Object routeObj) {

            return ((MediaRouter.RouteInfo) routeObj).getVolumeHandling();
        }


        static Object getTag(Object routeObj) {

            return ((MediaRouter.RouteInfo) routeObj).getTag();
        }


        static void setTag(Object routeObj, Object tag) {

            ((MediaRouter.RouteInfo) routeObj).setTag(tag);
        }


        static void requestSetVolume(Object routeObj, int volume) {

            ((MediaRouter.RouteInfo) routeObj).requestSetVolume(volume);
        }


        static void requestUpdateVolume(Object routeObj, int direction) {

            ((MediaRouter.RouteInfo) routeObj).requestUpdateVolume(direction);
        }


        static Object getGroup(Object routeObj) {

            return ((MediaRouter.RouteInfo) routeObj).getGroup();
        }


        static boolean isGroup(Object routeObj) {

            return routeObj instanceof MediaRouter.RouteGroup;
        }

    }


    /* loaded from: classes.dex */
    static final class RouteGroup {

        static List getGroupedRoutes(Object groupObj) {

            MediaRouter.RouteGroup group = (MediaRouter.RouteGroup) groupObj;
            int count = group.getRouteCount();
            List out = new ArrayList(count);
            for (int i = 0; i < count; i++) {

                out.add(group.getRouteAt(i));
            }

            return out;
        }

    }


    /* loaded from: classes.dex */
    static final class UserRouteInfo {

        static void setName(Object routeObj, CharSequence name) {

            ((MediaRouter.UserRouteInfo) routeObj).setName(name);
        }


        static void setStatus(Object routeObj, CharSequence status) {

            ((MediaRouter.UserRouteInfo) routeObj).setStatus(status);
        }


        static void setIconDrawable(Object routeObj, Drawable icon) {

            ((MediaRouter.UserRouteInfo) routeObj).setIconDrawable(icon);
        }


        static void setPlaybackType(Object routeObj, int type) {

            ((MediaRouter.UserRouteInfo) routeObj).setPlaybackType(type);
        }


        static void setPlaybackStream(Object routeObj, int stream) {

            ((MediaRouter.UserRouteInfo) routeObj).setPlaybackStream(stream);
        }


        static void setVolume(Object routeObj, int volume) {

            ((MediaRouter.UserRouteInfo) routeObj).setVolume(volume);
        }


        static void setVolumeMax(Object routeObj, int volumeMax) {

            ((MediaRouter.UserRouteInfo) routeObj).setVolumeMax(volumeMax);
        }


        static void setVolumeHandling(Object routeObj, int volumeHandling) {

            ((MediaRouter.UserRouteInfo) routeObj).setVolumeHandling(volumeHandling);
        }


        static void setVolumeCallback(Object routeObj, Object volumeCallbackObj) {

            ((MediaRouter.UserRouteInfo) routeObj).setVolumeCallback((MediaRouter.VolumeCallback) volumeCallbackObj);
        }


        static void setRemoteControlClient(Object routeObj, Object rccObj) {

            ((MediaRouter.UserRouteInfo) routeObj).setRemoteControlClient((RemoteControlClient) rccObj);
        }

    }


    /* loaded from: classes.dex */
    static final class RouteCategory {

        static CharSequence getName(Object categoryObj, Context context) {

            return ((MediaRouter.RouteCategory) categoryObj).getName(context);
        }


        static List getRoutes(Object categoryObj) {

            ArrayList out = new ArrayList();
            ((MediaRouter.RouteCategory) categoryObj).getRoutes(out);
            return out;
        }


        static int getSupportedTypes(Object categoryObj) {

            return ((MediaRouter.RouteCategory) categoryObj).getSupportedTypes();
        }


        static boolean isGroupable(Object categoryObj) {

            return ((MediaRouter.RouteCategory) categoryObj).isGroupable();
        }

    }


    /* loaded from: classes.dex */
    static final class SelectRouteWorkaround {

        private Method mSelectRouteIntMethod;

        SelectRouteWorkaround() {

            if (Build.VERSION.SDK_INT < 16 || Build.VERSION.SDK_INT > 17) {

                throw new UnsupportedOperationException();
            }

            try {

                this.mSelectRouteIntMethod = MediaRouter.class.getMethod("selectRouteInt", Integer.TYPE, MediaRouter.RouteInfo.class);
            }
 catch (NoSuchMethodException e) {

            }

        }


        void selectRoute(Object routerObj, int types, Object routeObj) {

            MediaRouter router = (MediaRouter) routerObj;
            MediaRouter.RouteInfo route = (MediaRouter.RouteInfo) routeObj;
            if ((8388608 & route.getSupportedTypes()) == 0) {

                if (this.mSelectRouteIntMethod != null) {

                    try {

                        this.mSelectRouteIntMethod.invoke(router, Integer.valueOf(types), route);
                        return;
                    }
 catch (IllegalAccessException ex) {

                        Log.w(MediaRouterJellybean.TAG, "Cannot programmatically select non-user route.  Media routing may not work.", ex);
                    }
 catch (InvocationTargetException ex2) {

                        Log.w(MediaRouterJellybean.TAG, "Cannot programmatically select non-user route.  Media routing may not work.", ex2);
                    }

                }
 else {

                    Log.w(MediaRouterJellybean.TAG, "Cannot programmatically select non-user route because the platform is missing the selectRouteInt() method.  Media routing may not work.");
                }

            }

            router.selectRoute(types, route);
        }

    }


    /* loaded from: classes.dex */
    static final class GetDefaultRouteWorkaround {

        private Method mGetSystemAudioRouteMethod;

        GetDefaultRouteWorkaround() {

            if (Build.VERSION.SDK_INT < 16 || Build.VERSION.SDK_INT > 17) {

                throw new UnsupportedOperationException();
            }

            try {

                this.mGetSystemAudioRouteMethod = MediaRouter.class.getMethod("getSystemAudioRoute", new Class[0]);
            }
 catch (NoSuchMethodException e) {

            }

        }


        Object getDefaultRoute(Object routerObj) {

            MediaRouter router = (MediaRouter) routerObj;
            if (this.mGetSystemAudioRouteMethod != null) {

                try {

                    return this.mGetSystemAudioRouteMethod.invoke(router, new Object[0]);
                }
 catch (IllegalAccessException e) {

                }
 catch (InvocationTargetException e2) {

                }

            }

            return router.getRouteAt(0);
        }

    }


    /* loaded from: classes.dex */
    static class CallbackProxy<T extends Callback> extends MediaRouter.Callback {

        protected final T mCallback;

        CallbackProxy(T callback) {

            this.mCallback = callback;
        }


        @Override // android.media.MediaRouter.Callback
        void onRouteSelected(MediaRouter router, int type, MediaRouter.RouteInfo route) {

            this.mCallback.onRouteSelected(type, route);
        }


        @Override // android.media.MediaRouter.Callback
        void onRouteUnselected(MediaRouter router, int type, MediaRouter.RouteInfo route) {

            this.mCallback.onRouteUnselected(type, route);
        }


        @Override // android.media.MediaRouter.Callback
        void onRouteAdded(MediaRouter router, MediaRouter.RouteInfo route) {

            this.mCallback.onRouteAdded(route);
        }


        @Override // android.media.MediaRouter.Callback
        void onRouteRemoved(MediaRouter router, MediaRouter.RouteInfo route) {

            this.mCallback.onRouteRemoved(route);
        }


        @Override // android.media.MediaRouter.Callback
        void onRouteChanged(MediaRouter router, MediaRouter.RouteInfo route) {

            this.mCallback.onRouteChanged(route);
        }


        @Override // android.media.MediaRouter.Callback
        void onRouteGrouped(MediaRouter router, MediaRouter.RouteInfo route, MediaRouter.RouteGroup group, int index) {

            this.mCallback.onRouteGrouped(route, group, index);
        }


        @Override // android.media.MediaRouter.Callback
        void onRouteUngrouped(MediaRouter router, MediaRouter.RouteInfo route, MediaRouter.RouteGroup group) {

            this.mCallback.onRouteUngrouped(route, group);
        }


        @Override // android.media.MediaRouter.Callback
        void onRouteVolumeChanged(MediaRouter router, MediaRouter.RouteInfo route) {

            this.mCallback.onRouteVolumeChanged(route);
        }

    }


    /* loaded from: classes.dex */
    static class VolumeCallbackProxy<T extends VolumeCallback> extends MediaRouter.VolumeCallback {

        protected final T mCallback;

        VolumeCallbackProxy(T callback) {

            this.mCallback = callback;
        }


        @Override // android.media.MediaRouter.VolumeCallback
        void onVolumeSetRequest(MediaRouter.RouteInfo route, int volume) {

            this.mCallback.onVolumeSetRequest(route, volume);
        }


        @Override // android.media.MediaRouter.VolumeCallback
        void onVolumeUpdateRequest(MediaRouter.RouteInfo route, int direction) {

            this.mCallback.onVolumeUpdateRequest(route, direction);
        }

    }

}

