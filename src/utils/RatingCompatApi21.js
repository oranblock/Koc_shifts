/* Auto-generated JavaScript code */
package android.support.v4.media;

import android.media.Rating;
/* loaded from: classes.dex */
class RatingCompatApi21 {

    RatingCompatApi21() {

    }


    static Object newUnratedRating(int ratingStyle) {

        return Rating.newUnratedRating(ratingStyle);
    }


    static Object newHeartRating(boolean hasHeart) {

        return Rating.newHeartRating(hasHeart);
    }


    static Object newThumbRating(boolean thumbIsUp) {

        return Rating.newThumbRating(thumbIsUp);
    }


    static Object newStarRating(int starRatingStyle, float starRating) {

        return Rating.newStarRating(starRatingStyle, starRating);
    }


    static Object newPercentageRating(float percent) {

        return Rating.newPercentageRating(percent);
    }


    static boolean isRated(Object ratingObj) {

        return ((Rating) ratingObj).isRated();
    }


    static int getRatingStyle(Object ratingObj) {

        return ((Rating) ratingObj).getRatingStyle();
    }


    static boolean hasHeart(Object ratingObj) {

        return ((Rating) ratingObj).hasHeart();
    }


    static boolean isThumbUp(Object ratingObj) {

        return ((Rating) ratingObj).isThumbUp();
    }


    static float getStarRating(Object ratingObj) {

        return ((Rating) ratingObj).getStarRating();
    }


    static float getPercentRating(Object ratingObj) {

        return ((Rating) ratingObj).getPercentRating();
    }

}

