/**
 * company.js — Company page interactive scripts
 */

(function ($) {
    'use strict';

    $(function () {
        // Copy address to clipboard functionality
        const $copyBtn = $('[data-copy-address]');
        if ($copyBtn.length) {
            $copyBtn.on('click', function () {
                const targetText = $(this).data('copy-address') || '東京都渋谷区渋谷2丁目1-1 渋谷ビル 5F';
                
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(targetText).then(() => {
                        const originalText = $copyBtn.text();
                        $copyBtn.addClass('is-copied').text('住所をコピーしました！');
                        setTimeout(() => {
                            $copyBtn.removeClass('is-copied').text(originalText);
                        }, 2500);
                    }).catch(() => {
                        fallbackCopy(targetText);
                    });
                } else {
                    fallbackCopy(targetText);
                }
            });
        }

        function fallbackCopy(text) {
            const $temp = $('<textarea>');
            $('body').append($temp);
            $temp.val(text).select();
            document.execCommand('copy');
            $temp.remove();

            const originalText = $copyBtn.text();
            $copyBtn.addClass('is-copied').text('住所をコピーしました！');
            setTimeout(() => {
                $copyBtn.removeClass('is-copied').text(originalText);
            }, 2500);
        }

        // Interactive hover feedback for branch cards and badges
        $('.p-company__branches-card, .p-company__badge-item').on('mouseenter', function () {
            $(this).addClass('is-active');
        }).on('mouseleave', function () {
            $(this).removeClass('is-active');
        });

        // Table row hover feedback
        $('.p-company__overview .l-tbl__item').on('mouseenter', function () {
            $(this).addClass('is-row-active');
        }).on('mouseleave', function () {
            $(this).removeClass('is-row-active');
        });
    });
})(jQuery);
