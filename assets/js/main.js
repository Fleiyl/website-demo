/*
    MEAS Laboratory Website
    Based on Solid State by HTML5 UP
*/

(function($) {

    var $window = $(window),
        $body = $('body'),
        $header = $('#header'),
        $banner = $('#banner');


    // ============================================================
    // Breakpoints
    // ============================================================

    breakpoints({
        xlarge: '(max-width: 1680px)',
        large:  '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small:  '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });


    // ============================================================
    // Initial Page Animation
    // ============================================================

    $window.on('load', function() {

        window.setTimeout(function() {

            $body.removeClass('is-preload');

        }, 100);

    });


    // ============================================================
    // Header
    // ============================================================

    if (
        $banner.length > 0 &&
        $header.hasClass('alt')
    ) {

        $window.on('resize', function() {

            $window.trigger('scroll');

        });


        $banner.scrollex({

            bottom: $header.outerHeight(),

            terminate: function() {

                $header.removeClass('alt');

            },

            enter: function() {

                $header.addClass('alt');

            },

            leave: function() {

                $header.removeClass('alt');

            }

        });

    }


    // ============================================================
    // MEAS Navigation Menu
    // Solid State menu mechanism is preserved.
    // ============================================================

    var $menu = $('#menu');


    // Prevent multiple menu actions
    // from being triggered too quickly.

    $menu._locked = false;


    $menu._lock = function() {

        if ($menu._locked) {

            return false;

        }

        $menu._locked = true;


        window.setTimeout(function() {

            $menu._locked = false;

        }, 350);


        return true;

    };


    // Show menu

    $menu._show = function() {

        if ($menu._lock()) {

            $body.addClass('is-menu-visible');

        }

    };


    // Hide menu

    $menu._hide = function() {

        if ($menu._lock()) {

            $body.removeClass('is-menu-visible');

        }

    };


    // Toggle menu

    $menu._toggle = function() {

        if ($menu._lock()) {

            $body.toggleClass('is-menu-visible');

        }

    };


    // ============================================================
    // Menu Interaction
    // ============================================================

    $menu
        .appendTo($body)

        .on('click', function(event) {

            event.stopPropagation();

            // Hide menu
            $menu._hide();

        })


        .find('.inner')


        // Close button
        .on('click', '.close', function(event) {

            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();


            // Hide menu
            $menu._hide();

        })


        // Prevent clicks inside menu
        // from closing the menu.

        .on('click', function(event) {

            event.stopPropagation();

        })


        // Navigation links

        .on('click', 'a', function(event) {

            var href = $(this).attr('href');


            event.preventDefault();
            event.stopPropagation();


            // Hide menu

            $menu._hide();


            // Navigate after menu animation

            window.setTimeout(function() {

                window.location.href = href;

            }, 350);

        });


    // ============================================================
    // Menu Trigger & Keyboard Interaction
    // ============================================================

    $body

        // Menu button

        .on('click', 'a[href="#menu"]', function(event) {

            event.stopPropagation();
            event.preventDefault();


            // Toggle menu

            $menu._toggle();

        })


        // Close menu with Escape key

        .on('keydown', function(event) {

            if (event.keyCode == 27) {

                $menu._hide();

            }

        });


})(jQuery);
