/* Auto-generated JavaScript code */
package android.support.v4.app;

import android.graphics.Rect;
import android.transition.Transition;
import android.transition.TransitionManager;
import android.transition.TransitionSet;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewTreeObserver;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
/* loaded from: classes.dex */
class FragmentTransitionCompat21 {


    /* loaded from: classes.dex */
    static class EpicenterView {

        View epicenter;
    }


    /* loaded from: classes.dex */
    interface ViewRetriever {

        View getView();
    }


    FragmentTransitionCompat21() {

    }


    static function getTransitionName(View view) {

        return view.getTransitionName();
    }


    static Object cloneTransition(Object transition) {

        if (transition != null) {

            return ((Transition) transition).clone();
        }

        return transition;
    }


    static Object captureExitingViews(Object exitTransition, View root, ArrayList<View> viewList, Map<String, View> namedViews, View nonExistentView) {

        if (exitTransition == null) {

            return exitTransition;
        }

        captureTransitioningViews(viewList, root);
        if (namedViews != null) {

            viewList.removeAll(namedViews.values());
        }

        if (viewList.isEmpty()) {

            return null;
        }

        viewList.add(nonExistentView);
        addTargets((Transition) exitTransition, viewList);
        return exitTransition;
    }


    static void excludeTarget(Object transitionObject, View view, boolean exclude) {

        ((Transition) transitionObject).excludeTarget(view, exclude);
    }


    static void beginDelayedTransition(ViewGroup sceneRoot, Object transitionObject) {

        TransitionManager.beginDelayedTransition(sceneRoot, (Transition) transitionObject);
    }


    static void setEpicenter(Object transitionObject, View view) {

        final Rect epicenter = getBoundsOnScreen(view);
        ((Transition) transitionObject).setEpicenterCallback(new Transition.EpicenterCallback() {
 // from class: android.support.v4.app.FragmentTransitionCompat21.1
            @Override // android.transition.Transition.EpicenterCallback
            Rect onGetEpicenter(Transition transition) {

                return epicenter;
            }

        }
);
    }


    static Object wrapSharedElementTransition(Object transitionObj) {

        Transition transition;
        if (transitionObj == null || (transition = (Transition) transitionObj) == null) {

            return null;
        }

        TransitionSet transitionSet = new TransitionSet();
        transitionSet.addTransition(transition);
        return transitionSet;
    }


    static void addTransitionTargets(Object enterTransitionObject, Object sharedElementTransitionObject, final View container, final ViewRetriever inFragment, final View nonExistentView, EpicenterView epicenterView, final Map<String, String> nameOverrides, final ArrayList<View> enteringViews, Map<String, View> namedViews, final Map<String, View> renamedViews, ArrayList<View> sharedElementTargets) {

        if (enterTransitionObject != null || sharedElementTransitionObject != null) {

            final Transition enterTransition = (Transition) enterTransitionObject;
            if (enterTransition != null) {

                enterTransition.addTarget(nonExistentView);
            }

            if (sharedElementTransitionObject != null) {

                setSharedElementTargets(sharedElementTransitionObject, nonExistentView, namedViews, sharedElementTargets);
            }

            if (inFragment != null) {

                container.getViewTreeObserver().addOnPreDrawListener(new ViewTreeObserver.OnPreDrawListener() {
 // from class: android.support.v4.app.FragmentTransitionCompat21.2
                    @Override // android.view.ViewTreeObserver.OnPreDrawListener
                    boolean onPreDraw() {

                        container.getViewTreeObserver().removeOnPreDrawListener(this);
                        if (enterTransition != null) {

                            enterTransition.removeTarget(nonExistentView);
                        }

                        View fragmentView = inFragment.getView();
                        if (fragmentView == null) {

                            return true;
                        }

                        if (!nameOverrides.isEmpty()) {

                            FragmentTransitionCompat21.findNamedViews(renamedViews, fragmentView);
                            renamedViews.keySet().retainAll(nameOverrides.values());
                            for (Map.Entry<String, String> entry : nameOverrides.entrySet()) {

                                View view = (View) renamedViews.get(entry.getValue());
                                if (view != null) {

                                    view.setTransitionName(entry.getKey());
                                }

                            }

                        }

                        if (enterTransition == null) {

                            return true;
                        }

                        FragmentTransitionCompat21.captureTransitioningViews(enteringViews, fragmentView);
                        enteringViews.removeAll(renamedViews.values());
                        enteringViews.add(nonExistentView);
                        FragmentTransitionCompat21.addTargets(enterTransition, enteringViews);
                        return true;
                    }

                }
);
            }

            setSharedElementEpicenter(enterTransition, epicenterView);
        }

    }


    static Object mergeTransitions(Object enterTransitionObject, Object exitTransitionObject, Object sharedElementTransitionObject, boolean allowOverlap) {

        boolean overlap = true;
        Transition enterTransition = (Transition) enterTransitionObject;
        Transition exitTransition = (Transition) exitTransitionObject;
        Transition sharedElementTransition = (Transition) sharedElementTransitionObject;
        if (!(enterTransition == null || exitTransition == null)) {

            overlap = allowOverlap;
        }

        if (overlap) {

            TransitionSet transitionSet = new TransitionSet();
            if (enterTransition != null) {

                transitionSet.addTransition(enterTransition);
            }

            if (exitTransition != null) {

                transitionSet.addTransition(exitTransition);
            }

            if (sharedElementTransition != null) {

                transitionSet.addTransition(sharedElementTransition);
            }

            return transitionSet;
        }

        Transition staggered = null;
        if (exitTransition != null && enterTransition != null) {

            staggered = new TransitionSet().addTransition(exitTransition).addTransition(enterTransition).setOrdering(1);
        }
 else if (exitTransition != null) {

            staggered = exitTransition;
        }
 else if (enterTransition != null) {

            staggered = enterTransition;
        }

        if (sharedElementTransition == null) {

            return staggered;
        }

        TransitionSet together = new TransitionSet();
        if (staggered != null) {

            together.addTransition(staggered);
        }

        together.addTransition(sharedElementTransition);
        return together;
    }


    static void setSharedElementTargets(Object transitionObj, View nonExistentView, Map<String, View> namedViews, ArrayList<View> sharedElementTargets) {

        TransitionSet transition = (TransitionSet) transitionObj;
        sharedElementTargets.clear();
        sharedElementTargets.addAll(namedViews.values());
        List<View> views = transition.getTargets();
        views.clear();
        int count = sharedElementTargets.size();
        for (int i = 0; i < count; i++) {

            bfsAddViewChildren(views, sharedElementTargets.get(i));
        }

        sharedElementTargets.add(nonExistentView);
        addTargets(transition, sharedElementTargets);
    }


    private static void bfsAddViewChildren(List<View> views, View startView) {

        int startIndex = views.size();
        if (!containedBeforeIndex(views, startView, startIndex)) {

            views.add(startView);
            for (int index = startIndex; index < views.size(); index++) {

                View view = views.get(index);
                if (view instanceof ViewGroup) {

                    ViewGroup viewGroup = (ViewGroup) view;
                    int childCount = viewGroup.getChildCount();
                    for (int childIndex = 0; childIndex < childCount; childIndex++) {

                        View child = viewGroup.getChildAt(childIndex);
                        if (!containedBeforeIndex(views, child, startIndex)) {

                            views.add(child);
                        }

                    }

                }

            }

        }

    }


    private static boolean containedBeforeIndex(List<View> views, View view, int maxIndex) {

        for (int i = 0; i < maxIndex; i++) {

            if (views.get(i) == view) {

                return true;
            }

        }

        return false;
    }


    private static void setSharedElementEpicenter(Transition transition, final EpicenterView epicenterView) {

        if (transition != null) {

            transition.setEpicenterCallback(new Transition.EpicenterCallback() {
 // from class: android.support.v4.app.FragmentTransitionCompat21.3
                private Rect mEpicenter;

                @Override // android.transition.Transition.EpicenterCallback
                Rect onGetEpicenter(Transition transition2) {

                    if (this.mEpicenter == null && EpicenterView.this.epicenter != null) {

                        this.mEpicenter = FragmentTransitionCompat21.getBoundsOnScreen(EpicenterView.this.epicenter);
                    }

                    return this.mEpicenter;
                }

            }
);
        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    static Rect getBoundsOnScreen(View view) {

        Rect epicenter = new Rect();
        int[] loc = new int[2];
        view.getLocationOnScreen(loc);
        epicenter.set(loc[0], loc[1], loc[0] + view.getWidth(), loc[1] + view.getHeight());
        return epicenter;
    }


    /* JADX INFO: Access modifiers changed from: private */
    static void captureTransitioningViews(ArrayList<View> transitioningViews, View view) {

        if (view.getVisibility() != 0) {

            return;
        }

        if (view instanceof ViewGroup) {

            ViewGroup viewGroup = (ViewGroup) view;
            if (viewGroup.isTransitionGroup()) {

                transitioningViews.add(viewGroup);
                return;
            }

            int count = viewGroup.getChildCount();
            for (int i = 0; i < count; i++) {

                captureTransitioningViews(transitioningViews, viewGroup.getChildAt(i));
            }

            return;
        }

        transitioningViews.add(view);
    }


    static void findNamedViews(Map<String, View> namedViews, View view) {

        if (view.getVisibility() == 0) {

            function transitionName = view.getTransitionName();
            if (transitionName != null) {

                namedViews.put(transitionName, view);
            }

            if (view instanceof ViewGroup) {

                ViewGroup viewGroup = (ViewGroup) view;
                int count = viewGroup.getChildCount();
                for (int i = 0; i < count; i++) {

                    findNamedViews(namedViews, viewGroup.getChildAt(i));
                }

            }

        }

    }


    static void cleanupTransitions(final View sceneRoot, final View nonExistentView, Object enterTransitionObject, final ArrayList<View> enteringViews, Object exitTransitionObject, final ArrayList<View> exitingViews, Object sharedElementTransitionObject, final ArrayList<View> sharedElementTargets, Object overallTransitionObject, final ArrayList<View> hiddenViews, final Map<String, View> renamedViews) {

        final Transition enterTransition = (Transition) enterTransitionObject;
        final Transition exitTransition = (Transition) exitTransitionObject;
        final Transition sharedElementTransition = (Transition) sharedElementTransitionObject;
        final Transition overallTransition = (Transition) overallTransitionObject;
        if (overallTransition != null) {

            sceneRoot.getViewTreeObserver().addOnPreDrawListener(new ViewTreeObserver.OnPreDrawListener() {
 // from class: android.support.v4.app.FragmentTransitionCompat21.4
                @Override // android.view.ViewTreeObserver.OnPreDrawListener
                boolean onPreDraw() {

                    sceneRoot.getViewTreeObserver().removeOnPreDrawListener(this);
                    if (enterTransition != null) {

                        FragmentTransitionCompat21.removeTargets(enterTransition, enteringViews);
                    }

                    if (exitTransition != null) {

                        FragmentTransitionCompat21.removeTargets(exitTransition, exitingViews);
                    }

                    if (sharedElementTransition != null) {

                        FragmentTransitionCompat21.removeTargets(sharedElementTransition, sharedElementTargets);
                    }

                    for (Map.Entry<String, View> entry : renamedViews.entrySet()) {

                        entry.getValue().setTransitionName(entry.getKey());
                    }

                    int numViews = hiddenViews.size();
                    for (int i = 0; i < numViews; i++) {

                        overallTransition.excludeTarget((View) hiddenViews.get(i), false);
                    }

                    overallTransition.excludeTarget(nonExistentView, false);
                    return true;
                }

            }
);
        }

    }


    static void removeTargets(Object transitionObject, ArrayList<View> views) {

        List<View> targets;
        Transition transition = (Transition) transitionObject;
        if (transition instanceof TransitionSet) {

            TransitionSet set = (TransitionSet) transition;
            int numTransitions = set.getTransitionCount();
            for (int i = 0; i < numTransitions; i++) {

                removeTargets(set.getTransitionAt(i), views);
            }

        }
 else if (!hasSimpleTarget(transition) && (targets = transition.getTargets()) != null && targets.size() == views.size() && targets.containsAll(views)) {

            for (int i2 = views.size() - 1; i2 >= 0; i2--) {

                transition.removeTarget(views.get(i2));
            }

        }

    }


    static void addTargets(Object transitionObject, ArrayList<View> views) {

        Transition transition = (Transition) transitionObject;
        if (transition instanceof TransitionSet) {

            TransitionSet set = (TransitionSet) transition;
            int numTransitions = set.getTransitionCount();
            for (int i = 0; i < numTransitions; i++) {

                addTargets(set.getTransitionAt(i), views);
            }

        }
 else if (!hasSimpleTarget(transition) && isNullOrEmpty(transition.getTargets())) {

            int numViews = views.size();
            for (int i2 = 0; i2 < numViews; i2++) {

                transition.addTarget(views.get(i2));
            }

        }

    }


    private static boolean hasSimpleTarget(Transition transition) {

        return !isNullOrEmpty(transition.getTargetIds()) || !isNullOrEmpty(transition.getTargetNames()) || !isNullOrEmpty(transition.getTargetTypes());
    }


    private static boolean isNullOrEmpty(List list) {

        return list == null || list.isEmpty();
    }

}

