/* Auto-generated JavaScript code */
package android.support.v4.view;

import android.os.Build;
import android.view.KeyEvent;
import android.view.View;
/* loaded from: classes.dex */
class KeyEventCompat {

    static final KeyEventVersionImpl IMPL;

    /* loaded from: classes.dex */
    interface KeyEventVersionImpl {

        boolean dispatch(KeyEvent keyEvent, KeyEvent.Callback callback, Object obj, Object obj2);

        Object getKeyDispatcherState(View view);

        boolean isTracking(KeyEvent keyEvent);

        boolean metaStateHasModifiers(int i, int i2);

        boolean metaStateHasNoModifiers(int i);

        int normalizeMetaState(int i);

        void startTracking(KeyEvent keyEvent);
    }


    /* loaded from: classes.dex */
    static class BaseKeyEventVersionImpl implements KeyEventVersionImpl {

        private static final int META_ALL_MASK = 247;
        private static final int META_MODIFIER_MASK = 247;

        BaseKeyEventVersionImpl() {

        }


        private static int metaStateFilterDirectionalModifiers(int metaState, int modifiers, int basic, int left, int right) {

            boolean wantBasic;
            boolean wantLeftOrRight = true;
            if ((modifiers & basic) != 0) {

                wantBasic = true;
            }
 else {

                wantBasic = false;
            }

            int directional = left | right;
            if ((modifiers & directional) == 0) {

                wantLeftOrRight = false;
            }

            if (wantBasic) {

                if (!wantLeftOrRight) {

                    return metaState & (directional ^ -1);
                }

                throw new IllegalArgumentException("bad arguments");
            }
 else if (wantLeftOrRight) {

                return metaState & (basic ^ -1);
            }
 else {

                return metaState;
            }

        }


        @Override // android.support.v4.view.KeyEventCompat.KeyEventVersionImpl
        int normalizeMetaState(int metaState) {

            if ((metaState & 192) != 0) {

                metaState |= 1;
            }

            if ((metaState & 48) != 0) {

                metaState |= 2;
            }

            return metaState & 247;
        }


        @Override // android.support.v4.view.KeyEventCompat.KeyEventVersionImpl
        boolean metaStateHasModifiers(int metaState, int modifiers) {

            if (metaStateFilterDirectionalModifiers(metaStateFilterDirectionalModifiers(normalizeMetaState(metaState) & 247, modifiers, 1, 64, 128), modifiers, 2, 16, 32) == modifiers) {

                return true;
            }

            return false;
        }


        @Override // android.support.v4.view.KeyEventCompat.KeyEventVersionImpl
        boolean metaStateHasNoModifiers(int metaState) {

            return (normalizeMetaState(metaState) & 247) == 0;
        }


        @Override // android.support.v4.view.KeyEventCompat.KeyEventVersionImpl
        void startTracking(KeyEvent event) {

        }


        @Override // android.support.v4.view.KeyEventCompat.KeyEventVersionImpl
        boolean isTracking(KeyEvent event) {

            return false;
        }


        @Override // android.support.v4.view.KeyEventCompat.KeyEventVersionImpl
        Object getKeyDispatcherState(View view) {

            return null;
        }


        @Override // android.support.v4.view.KeyEventCompat.KeyEventVersionImpl
        boolean dispatch(KeyEvent event, KeyEvent.Callback receiver, Object state, Object target) {

            return event.dispatch(receiver);
        }

    }


    /* loaded from: classes.dex */
    static class EclairKeyEventVersionImpl extends BaseKeyEventVersionImpl {

        EclairKeyEventVersionImpl() {

        }


        @Override // android.support.v4.view.KeyEventCompat.BaseKeyEventVersionImpl, android.support.v4.view.KeyEventCompat.KeyEventVersionImpl
        void startTracking(KeyEvent event) {

            KeyEventCompatEclair.startTracking(event);
        }


        @Override // android.support.v4.view.KeyEventCompat.BaseKeyEventVersionImpl, android.support.v4.view.KeyEventCompat.KeyEventVersionImpl
        boolean isTracking(KeyEvent event) {

            return KeyEventCompatEclair.isTracking(event);
        }


        @Override // android.support.v4.view.KeyEventCompat.BaseKeyEventVersionImpl, android.support.v4.view.KeyEventCompat.KeyEventVersionImpl
        Object getKeyDispatcherState(View view) {

            return KeyEventCompatEclair.getKeyDispatcherState(view);
        }


        @Override // android.support.v4.view.KeyEventCompat.BaseKeyEventVersionImpl, android.support.v4.view.KeyEventCompat.KeyEventVersionImpl
        boolean dispatch(KeyEvent event, KeyEvent.Callback receiver, Object state, Object target) {

            return KeyEventCompatEclair.dispatch(event, receiver, state, target);
        }

    }


    /* loaded from: classes.dex */
    static class HoneycombKeyEventVersionImpl extends EclairKeyEventVersionImpl {

        HoneycombKeyEventVersionImpl() {

        }


        @Override // android.support.v4.view.KeyEventCompat.BaseKeyEventVersionImpl, android.support.v4.view.KeyEventCompat.KeyEventVersionImpl
        int normalizeMetaState(int metaState) {

            return KeyEventCompatHoneycomb.normalizeMetaState(metaState);
        }


        @Override // android.support.v4.view.KeyEventCompat.BaseKeyEventVersionImpl, android.support.v4.view.KeyEventCompat.KeyEventVersionImpl
        boolean metaStateHasModifiers(int metaState, int modifiers) {

            return KeyEventCompatHoneycomb.metaStateHasModifiers(metaState, modifiers);
        }


        @Override // android.support.v4.view.KeyEventCompat.BaseKeyEventVersionImpl, android.support.v4.view.KeyEventCompat.KeyEventVersionImpl
        boolean metaStateHasNoModifiers(int metaState) {

            return KeyEventCompatHoneycomb.metaStateHasNoModifiers(metaState);
        }

    }


    static {

        if (Build.VERSION.SDK_INT >= 11) {

            IMPL = new HoneycombKeyEventVersionImpl();
        }
 else {

            IMPL = new BaseKeyEventVersionImpl();
        }

    }


    static int normalizeMetaState(int metaState) {

        return IMPL.normalizeMetaState(metaState);
    }


    static boolean metaStateHasModifiers(int metaState, int modifiers) {

        return IMPL.metaStateHasModifiers(metaState, modifiers);
    }


    static boolean metaStateHasNoModifiers(int metaState) {

        return IMPL.metaStateHasNoModifiers(metaState);
    }


    static boolean hasModifiers(KeyEvent event, int modifiers) {

        return IMPL.metaStateHasModifiers(event.getMetaState(), modifiers);
    }


    static boolean hasNoModifiers(KeyEvent event) {

        return IMPL.metaStateHasNoModifiers(event.getMetaState());
    }


    static void startTracking(KeyEvent event) {

        IMPL.startTracking(event);
    }


    static boolean isTracking(KeyEvent event) {

        return IMPL.isTracking(event);
    }


    static Object getKeyDispatcherState(View view) {

        return IMPL.getKeyDispatcherState(view);
    }


    static boolean dispatch(KeyEvent event, KeyEvent.Callback receiver, Object state, Object target) {

        return IMPL.dispatch(event, receiver, state, target);
    }

}

