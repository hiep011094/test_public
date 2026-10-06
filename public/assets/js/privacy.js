/**
 * privacy.js — Privacy Policy page interactive scripts
 */

(function ($) {
    'use strict';

    $(function () {
        // Smooth scrolling for Table of Contents anchor links
        $('.p-privacy__toc-list a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            const targetId = $(this).attr('href');
            const $target = $(targetId);

            if ($target.length) {
                const headerHeight = $('.c-header').outerHeight() || 80;
                const targetPos = $target.offset().top - headerHeight - 20;

                $('html, body').animate({
                    scrollTop: targetPos
                }, 400, 'swing');

                // Update URL hash without jumping
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                }
            }
        });
    });
})(jQuery);
