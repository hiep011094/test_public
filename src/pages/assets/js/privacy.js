/**
 * privacy.js — Privacy Policy page interactive scripts
 */

(function ($) {
    'use strict';

    $(function () {
        // Smooth scrolling for Table of Contents anchor links and back to top
        $('.p-privacy__toc-list a[href^="#"], .p-privacy__back-btn').on('click', function (e) {
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

        // Hover effect for highlight cards
        $('.p-privacy__highlight-card').on('mouseenter', function () {
            $(this).addClass('is-hover');
        }).on('mouseleave', function () {
            $(this).removeClass('is-hover');
        });

        // Hover effect for article sections
        $('.p-privacy__article').on('mouseenter', function () {
            $(this).addClass('is-focused');
        }).on('mouseleave', function () {
            $(this).removeClass('is-focused');
        });
    });
})(jQuery);
