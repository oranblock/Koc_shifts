/* Auto-generated JavaScript code */
package android.support.v4.widget;

import android.content.res.ColorStateList;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.widget.CompoundButton;
/* loaded from: classes.dex */
final class CompoundButtonCompat {

    private static final CompoundButtonCompatImpl IMPL;

    /* loaded from: classes.dex */
    interface CompoundButtonCompatImpl {

        Drawable getButtonDrawable(CompoundButton compoundButton);

        ColorStateList getButtonTintList(CompoundButton compoundButton);

        PorterDuff.Mode getButtonTintMode(CompoundButton compoundButton);

        void setButtonTintList(CompoundButton compoundButton, ColorStateList colorStateList);

        void setButtonTintMode(CompoundButton compoundButton, PorterDuff.Mode mode);
    }


    static {

        int sdk = Build.VERSION.SDK_INT;
        if (sdk >= 23) {

            IMPL = new Api23CompoundButtonImpl();
        }
 else if (sdk >= 21) {

            IMPL = new LollipopCompoundButtonImpl();
        }
 else {

            IMPL = new BaseCompoundButtonCompat();
        }

    }


    /* loaded from: classes.dex */
    static class BaseCompoundButtonCompat implements CompoundButtonCompatImpl {

        BaseCompoundButtonCompat() {

        }


        @Override // android.support.v4.widget.CompoundButtonCompat.CompoundButtonCompatImpl
        void setButtonTintList(CompoundButton button, ColorStateList tint) {

            CompoundButtonCompatDonut.setButtonTintList(button, tint);
        }


        @Override // android.support.v4.widget.CompoundButtonCompat.CompoundButtonCompatImpl
        ColorStateList getButtonTintList(CompoundButton button) {

            return CompoundButtonCompatDonut.getButtonTintList(button);
        }


        @Override // android.support.v4.widget.CompoundButtonCompat.CompoundButtonCompatImpl
        void setButtonTintMode(CompoundButton button, PorterDuff.Mode tintMode) {

            CompoundButtonCompatDonut.setButtonTintMode(button, tintMode);
        }


        @Override // android.support.v4.widget.CompoundButtonCompat.CompoundButtonCompatImpl
        PorterDuff.Mode getButtonTintMode(CompoundButton button) {

            return CompoundButtonCompatDonut.getButtonTintMode(button);
        }


        @Override // android.support.v4.widget.CompoundButtonCompat.CompoundButtonCompatImpl
        Drawable getButtonDrawable(CompoundButton button) {

            return CompoundButtonCompatDonut.getButtonDrawable(button);
        }

    }


    /* loaded from: classes.dex */
    static class LollipopCompoundButtonImpl extends BaseCompoundButtonCompat {

        LollipopCompoundButtonImpl() {

        }


        @Override // android.support.v4.widget.CompoundButtonCompat.BaseCompoundButtonCompat, android.support.v4.widget.CompoundButtonCompat.CompoundButtonCompatImpl
        void setButtonTintList(CompoundButton button, ColorStateList tint) {

            CompoundButtonCompatLollipop.setButtonTintList(button, tint);
        }


        @Override // android.support.v4.widget.CompoundButtonCompat.BaseCompoundButtonCompat, android.support.v4.widget.CompoundButtonCompat.CompoundButtonCompatImpl
        ColorStateList getButtonTintList(CompoundButton button) {

            return CompoundButtonCompatLollipop.getButtonTintList(button);
        }


        @Override // android.support.v4.widget.CompoundButtonCompat.BaseCompoundButtonCompat, android.support.v4.widget.CompoundButtonCompat.CompoundButtonCompatImpl
        void setButtonTintMode(CompoundButton button, PorterDuff.Mode tintMode) {

            CompoundButtonCompatLollipop.setButtonTintMode(button, tintMode);
        }


        @Override // android.support.v4.widget.CompoundButtonCompat.BaseCompoundButtonCompat, android.support.v4.widget.CompoundButtonCompat.CompoundButtonCompatImpl
        PorterDuff.Mode getButtonTintMode(CompoundButton button) {

            return CompoundButtonCompatLollipop.getButtonTintMode(button);
        }

    }


    /* loaded from: classes.dex */
    static class Api23CompoundButtonImpl extends LollipopCompoundButtonImpl {

        Api23CompoundButtonImpl() {

        }


        @Override // android.support.v4.widget.CompoundButtonCompat.BaseCompoundButtonCompat, android.support.v4.widget.CompoundButtonCompat.CompoundButtonCompatImpl
        Drawable getButtonDrawable(CompoundButton button) {

            return CompoundButtonCompatApi23.getButtonDrawable(button);
        }

    }


    private CompoundButtonCompat() {

    }


    static void setButtonTintList(@NonNull CompoundButton button, @Nullable ColorStateList tint) {

        IMPL.setButtonTintList(button, tint);
    }


    @Nullable
    static ColorStateList getButtonTintList(@NonNull CompoundButton button) {

        return IMPL.getButtonTintList(button);
    }


    static void setButtonTintMode(@NonNull CompoundButton button, @Nullable PorterDuff.Mode tintMode) {

        IMPL.setButtonTintMode(button, tintMode);
    }


    @Nullable
    static PorterDuff.Mode getButtonTintMode(@NonNull CompoundButton button) {

        return IMPL.getButtonTintMode(button);
    }


    @Nullable
    static Drawable getButtonDrawable(@NonNull CompoundButton button) {

        return IMPL.getButtonDrawable(button);
    }

}

