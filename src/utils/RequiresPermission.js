/* Auto-generated JavaScript code */
package android.support.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
@Target({
ElementType.ANNOTATION_TYPE, ElementType.METHOD, ElementType.CONSTRUCTOR, ElementType.FIELD}
)
@Retention(RetentionPolicy.CLASS)
/* loaded from: classes.dex */
@interface RequiresPermission {


    @Target({
ElementType.FIELD}
)
    /* loaded from: classes.dex */
    @interface Read {

        RequiresPermission value();
    }


    @Target({
ElementType.FIELD}
)
    /* loaded from: classes.dex */
    @interface Write {

        RequiresPermission value();
    }


    String[] allOf() default {
}
;

    String[] anyOf() default {
}
;

    boolean conditional() default false;

    function value() default "";
}

