/**
 * ============================================
 * LYNA PLAYZ - SOCIAL LINKS PAGE
 * Main JavaScript File
 * ============================================
 */

/**
 * Smooth scroll to a specific section
 * @param {string} section - The data-section attribute value
 */
function scrollToSection(section) {
    const targetElement = $(`[data-section="${section}"]`);

    if (targetElement.length) {
        $([document.body, document.documentElement]).animate({
            scrollTop: targetElement.offset().top
        }, 1000, 'swing');
    }
}

/**
 * Open social media links in a new tab
 * @param {string} link - The URL to open
 */
function openSocialLink(link) {
    window.open(link, "_blank", "noopener,noreferrer");
}

/**
 * Initialize all event listeners
 */
$(function () {
    // Navigation button event listeners
    $("#home-btn").on("click", function () {
        scrollToSection("landing");
    });

    $("#info-btn").on("click", function () {
        scrollToSection("info");
    });

    $("#anderes-btn").on("click", function () {
        scrollToSection("other");
    });

    // Add smooth scroll behavior for anchor links
    $("a[href^='#']").on("click", function (e) {
        e.preventDefault();
        const target = $(this).attr("href").slice(1);
        scrollToSection(target);
    });
});