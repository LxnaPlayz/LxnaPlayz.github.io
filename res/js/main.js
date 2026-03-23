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
    const $lightbox = $("#gallery-lightbox");
    const $lightboxImage = $("#lightbox-image");

    function openGalleryLightbox(imageSrc, imageAlt) {
        if (!imageSrc) {
            return;
        }

        $lightboxImage.attr("src", imageSrc);
        $lightboxImage.attr("alt", imageAlt || "Expanded gallery image");
        $lightbox.removeAttr("hidden").attr("aria-hidden", "false");
        $("body").addClass("lightbox-open");
    }

    function closeGalleryLightbox() {
        $lightbox.attr("hidden", "hidden").attr("aria-hidden", "true");
        $lightboxImage.attr("src", "");
        $("body").removeClass("lightbox-open");
    }

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

    // Make gallery cards keyboard-accessible and open them in a lightbox.
    $(".info .image-slot")
        .attr({
            role: "button",
            tabindex: "0",
            "aria-label": "Open image in larger view"
        })
        .on("click", function () {
            const $image = $(this).find("img.slot-image").first();
            openGalleryLightbox($image.attr("src"), $image.attr("alt"));
        })
        .on("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                $(this).trigger("click");
            }
        });

    $(".lightbox-close").on("click", closeGalleryLightbox);

    $lightbox.on("click", function (e) {
        if (e.target === this) {
            closeGalleryLightbox();
        }
    });

    $(document).on("keydown", function (e) {
        if (e.key === "Escape" && !$lightbox.is("[hidden]")) {
            closeGalleryLightbox();
        }
    });
});