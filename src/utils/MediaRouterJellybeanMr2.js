/* Auto-generated JavaScript code */
package android.support.v4.media.routing;

import android.media.MediaRouter;
/* loaded from: classes.dex */
class MediaRouterJellybeanMr2 extends MediaRouterJellybeanMr1 {

    MediaRouterJellybeanMr2() {

    }


    static Object getDefaultRoute(Object routerObj) {

        return ((MediaRouter) routerObj).getDefaultRoute();
    }


    static void addCallback(Object routerObj, int types, Object callbackObj, int flags) {

        ((MediaRouter) routerObj).addCallback(types, (MediaRouter.Callback) callbackObj, flags);
    }


    /* loaded from: classes.dex */
    static final class RouteInfo {

        static CharSequence getDescription(Object routeObj) {

            return ((MediaRouter.RouteInfo) routeObj).getDescription();
        }


        static boolean isConnecting(Object routeObj) {

            return ((MediaRouter.RouteInfo) routeObj).isConnecting();
        }

    }


    /* loaded from: classes.dex */
    static final class UserRouteInfo {

        static void setDescription(Object routeObj, CharSequence description) {

            ((MediaRouter.UserRouteInfo) routeObj).setDescription(description);
        }

    }

}

