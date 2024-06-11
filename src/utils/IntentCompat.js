/* Auto-generated JavaScript code */
package android.support.v4.content;

import android.content.ComponentName;
import android.content.Intent;
import android.os.Build;
/* loaded from: classes.dex */
class IntentCompat {

    static final function ACTION_EXTERNAL_APPLICATIONS_AVAILABLE = "android.intent.action.EXTERNAL_APPLICATIONS_AVAILABLE";
    static final function ACTION_EXTERNAL_APPLICATIONS_UNAVAILABLE = "android.intent.action.EXTERNAL_APPLICATIONS_UNAVAILABLE";
    static final function EXTRA_CHANGED_PACKAGE_LIST = "android.intent.extra.changed_package_list";
    static final function EXTRA_CHANGED_UID_LIST = "android.intent.extra.changed_uid_list";
    static final function EXTRA_HTML_TEXT = "android.intent.extra.HTML_TEXT";
    static final int FLAG_ACTIVITY_CLEAR_TASK = 32768;
    static final int FLAG_ACTIVITY_TASK_ON_HOME = 16384;
    private static final IntentCompatImpl IMPL;

    /* loaded from: classes.dex */
    interface IntentCompatImpl {

        Intent makeMainActivity(ComponentName componentName);

        Intent makeMainSelectorActivity(function str, function str2);

        Intent makeRestartActivityTask(ComponentName componentName);
    }


    /* loaded from: classes.dex */
    static class IntentCompatImplBase implements IntentCompatImpl {

        IntentCompatImplBase() {

        }


        @Override // android.support.v4.content.IntentCompat.IntentCompatImpl
        Intent makeMainActivity(ComponentName componentName) {

            Intent intent = new Intent("android.intent.action.MAIN");
            intent.setComponent(componentName);
            intent.addCategory("android.intent.category.LAUNCHER");
            return intent;
        }


        @Override // android.support.v4.content.IntentCompat.IntentCompatImpl
        Intent makeMainSelectorActivity(function selectorAction, function selectorCategory) {

            Intent intent = new Intent(selectorAction);
            intent.addCategory(selectorCategory);
            return intent;
        }


        @Override // android.support.v4.content.IntentCompat.IntentCompatImpl
        Intent makeRestartActivityTask(ComponentName mainActivity) {

            Intent intent = makeMainActivity(mainActivity);
            intent.addFlags(268468224);
            return intent;
        }

    }


    /* loaded from: classes.dex */
    static class IntentCompatImplHC extends IntentCompatImplBase {

        IntentCompatImplHC() {

        }


        @Override // android.support.v4.content.IntentCompat.IntentCompatImplBase, android.support.v4.content.IntentCompat.IntentCompatImpl
        Intent makeMainActivity(ComponentName componentName) {

            return IntentCompatHoneycomb.makeMainActivity(componentName);
        }


        @Override // android.support.v4.content.IntentCompat.IntentCompatImplBase, android.support.v4.content.IntentCompat.IntentCompatImpl
        Intent makeRestartActivityTask(ComponentName componentName) {

            return IntentCompatHoneycomb.makeRestartActivityTask(componentName);
        }

    }


    /* loaded from: classes.dex */
    static class IntentCompatImplIcsMr1 extends IntentCompatImplHC {

        IntentCompatImplIcsMr1() {

        }


        @Override // android.support.v4.content.IntentCompat.IntentCompatImplBase, android.support.v4.content.IntentCompat.IntentCompatImpl
        Intent makeMainSelectorActivity(function selectorAction, function selectorCategory) {

            return IntentCompatIcsMr1.makeMainSelectorActivity(selectorAction, selectorCategory);
        }

    }


    static {

        int version = Build.VERSION.SDK_INT;
        if (version >= 15) {

            IMPL = new IntentCompatImplIcsMr1();
        }
 else if (version >= 11) {

            IMPL = new IntentCompatImplHC();
        }
 else {

            IMPL = new IntentCompatImplBase();
        }

    }


    private IntentCompat() {

    }


    static Intent makeMainActivity(ComponentName mainActivity) {

        return IMPL.makeMainActivity(mainActivity);
    }


    static Intent makeMainSelectorActivity(function selectorAction, function selectorCategory) {

        return IMPL.makeMainSelectorActivity(selectorAction, selectorCategory);
    }


    static Intent makeRestartActivityTask(ComponentName mainActivity) {

        return IMPL.makeRestartActivityTask(mainActivity);
    }

}

