/* Theme Name:iDea - Clean & Powerful Bootstrap Theme
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version: 1.4
 * Created:October 2014
 * License URI:http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */

$(window).on("load", function() {
    var $landingWrapper = $(".home-service-wrapper"),
        $landingInnerContent = $(".home-service-list");

    // set initial container to half of .landing-inner-content width
    //TweenMax.set($landingWrapper, {scrollTo: {x: $landingInnerContent.width()/4}, ease: Power2.easeOut});

    // scroll left and right
    $landingInnerContent.on("mousemove touchmove", function(e) {
        if (e.clientX > $landingWrapper.width() / 2) {
        TweenMax.to($landingWrapper, 2, {
            scrollTo: {
            x: "+=175"
            },
            ease: Power2.easeOut
        });
        } else {
        TweenMax.to($landingWrapper, 2, {
            scrollTo: {
            x: "-=175"
            },
            ease: Power2.easeOut
        });
        }
    });

    });

  