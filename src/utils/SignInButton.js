/* Auto-generated JavaScript code */
package com.google.android.gms.common;

import android.content.Context;
import android.util.AttributeSet;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.FrameLayout;
import com.google.android.gms.common.internal.zzaa;
import com.google.android.gms.common.internal.zzab;
import com.google.android.gms.common.internal.zzx;
import com.google.android.gms.dynamic.zzg;
/* loaded from: classes.dex */
final class SignInButton extends FrameLayout implements View.OnClickListener {

    static final int COLOR_DARK = 0;
    static final int COLOR_LIGHT = 1;
    static final int SIZE_ICON_ONLY = 2;
    static final int SIZE_STANDARD = 0;
    static final int SIZE_WIDE = 1;
    private int mColor;
    private int mSize;
    private View zzaat;
    private View.OnClickListener zzaau;

    SignInButton(Context context) {

        this(context, null);
    }


    SignInButton(Context context, AttributeSet attrs) {

        this(context, attrs, 0);
    }


    SignInButton(Context context, AttributeSet attrs, int defStyle) {

        super(context, attrs, defStyle);
        this.zzaau = null;
        setStyle(0, 0);
    }


    private static Button zza(Context context, int i, int i2) {

        zzab zzab = new zzab(context);
        zzab.zza(context.getResources(), i, i2);
        return zzab;
    }


    private void zzai(Context context) {

        if (this.zzaat != null) {

            removeView(this.zzaat);
        }

        try {

            this.zzaat = zzaa.zzb(context, this.mSize, this.mColor);
        }
 catch (zzg.zza e) {

            Log.w("SignInButton", "Sign in button not found, using placeholder instead");
            this.zzaat = zza(context, this.mSize, this.mColor);
        }

        addView(this.zzaat);
        this.zzaat.setEnabled(isEnabled());
        this.zzaat.setOnClickListener(this);
    }


    @Override // android.view.View.OnClickListener
    void onClick(View view) {

        if (this.zzaau != null && view == this.zzaat) {

            this.zzaau.onClick(this);
        }

    }


    void setColorScheme(int colorScheme) {

        setStyle(this.mSize, colorScheme);
    }


    @Override // android.view.View
    void setEnabled(boolean enabled) {

        super.setEnabled(enabled);
        this.zzaat.setEnabled(enabled);
    }


    @Override // android.view.View
    void setOnClickListener(View.OnClickListener listener) {

        this.zzaau = listener;
        if (this.zzaat != null) {

            this.zzaat.setOnClickListener(this);
        }

    }


    void setSize(int buttonSize) {

        setStyle(buttonSize, this.mColor);
    }


    void setStyle(int buttonSize, int colorScheme) {

        zzx.zza(buttonSize >= 0 && buttonSize < 3, "Unknown button size %d", Integer.valueOf(buttonSize));
        zzx.zza(colorScheme >= 0 && colorScheme < 2, "Unknown color scheme %s", Integer.valueOf(colorScheme));
        this.mSize = buttonSize;
        this.mColor = colorScheme;
        zzai(getContext());
    }

}

