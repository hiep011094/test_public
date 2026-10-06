/**
 * about.js — About Us page interactive scripts
 */

(function ($) {
    'use strict';

    $(function () {
        // Subtle hover interaction for value cards
        const $cards = $('.p-about__value-card');
        if ($cards.length) {
            $cards.on('mouseenter', function () {
                $(this).addClass('is-hovered');
            }).on('mouseleave', function () {
                $(this).removeClass('is-hovered');
            });
        }

        // Animated counter for history years if visible
        const $years = $('.p-about__history-year');
        if ('IntersectionObserver' in window && $years.length) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        $(entry.target).addClass('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });

            $years.each(function () {
                observer.observe(this);
            });
        }

        // Subtle hover interaction for stats items
        const $statItems = $('.p-about__stat-item');
        if ($statItems.length) {
            $statItems.on('mouseenter', function () {
                $(this).addClass('is-hovered');
            }).on('mouseleave', function () {
                $(this).removeClass('is-hovered');
            });
        }

        // Timeline item interaction
        $('.p-about__history .l-tbl__item').on('mouseenter', function () {
            $(this).addClass('is-active');
        }).on('mouseleave', function () {
            $(this).removeClass('is-active');
        });

        // Strengths item interaction
        $('.p-about__strengths-item').on('mouseenter', function () {
            $(this).addClass('is-hovered');
        }).on('mouseleave', function () {
            $(this).removeClass('is-hovered');
        });
    });
})(jQuery);
