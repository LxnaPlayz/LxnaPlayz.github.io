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

const SOCIAL_CARDS = {
    en: [
        {
            title: "Main TikTok",
            description: "Lyna posts her main content here. The account is private, but follow requests are accepted.",
            url: "https://tiktok.com/theLxna_playz",
            iconClass: "fab fa-tiktok",
            actionLabel: "Follow on TikTok"
        },
        {
            title: "VRC TikTok",
            description: "A public profile focused on VRChat clips, stream moments, and event highlights.",
            url: "https://tiktok.com/theLxna_playz",
            iconClass: "fab fa-tiktok",
            actionLabel: "Follow on TikTok"
        },
        {
            title: "VRC Family TikTok",
            description: "A profile focused on VRChat family, friends, and community collaborations.",
            url: "https://tiktok.com/LxnaPlayz_VRC",
            iconClass: "fab fa-tiktok",
            actionLabel: "Follow on TikTok"
        },
        {
            title: "Instagram",
            description: "Follow for random posts and stories with everyday moments and creative content.",
            url: "https://www.instagram.com/theLxna_playz",
            iconClass: "fab fa-instagram",
            actionLabel: "Follow on Instagram"
        },
        {
            title: "Twitch",
            description: "Lyna streams occasionally on Twitch. Follow to catch live sessions.",
            url: "https://www.twitch.tv/theLxna_playz",
            iconClass: "fab fa-twitch",
            actionLabel: "Follow on Twitch"
        },
        {
            title: "Linktree",
            description: "Find all social links in one place as the central hub across all platforms.",
            url: "https://linktr.ee/theLxna_playz",
            iconClass: "fab fa-linktree",
            actionLabel: "Open Linktree"
        }
    ],
    de: [
        {
            title: "Main TikTok",
            description: "Hier postet Lyna ihren Hauptcontent. Das Profil ist privat, Follow-Anfragen werden aber angenommen.",
            url: "https://tiktok.com/theLxna_playz",
            iconClass: "fab fa-tiktok",
            actionLabel: "TikTok folgen"
        },
        {
            title: "VRC TikTok",
            description: "Ein oeffentliches Profil mit VRChat Clips, Stream-Momenten und Event-Highlights.",
            url: "https://tiktok.com/theLxna_playz",
            iconClass: "fab fa-tiktok",
            actionLabel: "TikTok folgen"
        },
        {
            title: "VRC Family TikTok",
            description: "Ein Profil mit Fokus auf VRChat Familie, Freunde und Community-Kollaborationen.",
            url: "https://tiktok.com/LxnaPlayz_VRC",
            iconClass: "fab fa-tiktok",
            actionLabel: "TikTok folgen"
        },
        {
            title: "Instagram",
            description: "Folge fuer spontane Posts und Stories mit Alltagsmomenten und kreativem Content.",
            url: "https://www.instagram.com/theLxna_playz",
            iconClass: "fab fa-instagram",
            actionLabel: "Instagram folgen"
        },
        {
            title: "Twitch",
            description: "Lyna streamt gelegentlich auf Twitch. Folge, um Live-Sessions nicht zu verpassen.",
            url: "https://www.twitch.tv/theLxna_playz",
            iconClass: "fab fa-twitch",
            actionLabel: "Twitch folgen"
        },
        {
            title: "Linktree",
            description: "Hier findest du alle Social-Links gesammelt an einem Ort.",
            url: "https://linktr.ee/theLxna_playz",
            iconClass: "fab fa-linktree",
            actionLabel: "Linktree oeffnen"
        }
    ]
};

const GALLERY_IMAGES = [
    "VRC1.png",
    "VRC2.png",
    "VRC3.png",
    "VRC4.png",
    "VRC5.png",
    "VRC6.png",
    "VRC7.png",
    "VRC8.png",
    "VRC9.png",
    "VRC10.png",
    "VRC11.png",
    "VRC12.png"
];

function getCurrentLanguage() {
    const stored = localStorage.getItem("siteLanguage");
    return stored === "de" ? "de" : "en";
}

function renderSocialCards() {
    const $socialContainer = $("#socials");
    if (!$socialContainer.length) {
        return;
    }

    const lang = getCurrentLanguage();
    const cards = SOCIAL_CARDS[lang] || SOCIAL_CARDS.en;
    $socialContainer.empty();

    cards.forEach(function (card) {
        const $card = $("<div>").addClass("other-container");
        const $iconContainer = $("<div>").addClass("icon-container");
        const $button = $("<button>")
            .attr("type", "button")
            .attr("title", card.actionLabel)
            .on("click", function () {
                openSocialLink(card.url);
            });
        const $icon = $("<i>").addClass(card.iconClass).attr("aria-hidden", "true");
        const $details = $("<div>").addClass("details-container");

        $button.append($icon);
        $iconContainer.append($button);
        $details
            .append($("<h1>").text(card.title))
            .append($("<p>").text(card.description));

        $card.append($iconContainer, $details);
        $socialContainer.append($card);
    });
}

function renderGalleryImages() {
    const $galleryGrid = $("#gallery-grid");
    if (!$galleryGrid.length || $galleryGrid.children().length) {
        return;
    }

    GALLERY_IMAGES.forEach(function (fileName, index) {
        const imageNumber = index + 1;
        const imagePath = "res/pictures/" + fileName;
        const $slot = $("<div>").addClass("post-slot");
        const $imageSlot = $("<div>").addClass("image-slot");
        const $image = $("<img>")
            .addClass("slot-image")
            .attr({
                src: imagePath,
                alt: (getCurrentLanguage() === "de" ? "VRChat Showcase Bild " : "VRChat showcase image ") + imageNumber,
                loading: "lazy"
            });

        $imageSlot.append($image);
        $slot.append($imageSlot);
        $galleryGrid.append($slot);
    });
}

function initLightbox($lightbox, $lightboxImage) {
    function openGalleryLightbox(imageSrc, imageAlt) {
        if (!imageSrc) {
            return;
        }

        $lightboxImage.attr("src", imageSrc);
        const fallbackAlt = getCurrentLanguage() === "de" ? "Vergroessertes Galerie-Bild" : "Expanded gallery image";
        $lightboxImage.attr("alt", imageAlt || fallbackAlt);
        $lightbox.removeAttr("hidden").attr("aria-hidden", "false");
        $("body").addClass("lightbox-open");
    }

    function closeGalleryLightbox() {
        $lightbox.attr("hidden", "hidden").attr("aria-hidden", "true");
        $lightboxImage.attr("src", "");
        $("body").removeClass("lightbox-open");
    }

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
}

/**
 * Initialize all event listeners
 */
$(function () {
    renderSocialCards();
    renderGalleryImages();

    const $lightbox = $("#gallery-lightbox");
    const $lightboxImage = $("#lightbox-image");

    // Unified navigation handling for all menu items with data-scroll
    $("[data-scroll]").on("click", function () {
        scrollToSection($(this).data("scroll"));
    });

    // Add smooth scroll behavior for anchor links
    $("a[href^='#']").on("click", function (e) {
        e.preventDefault();
        const target = $(this).attr("href").slice(1);
        scrollToSection(target);
    });

    initLightbox($lightbox, $lightboxImage);

    // Re-render dynamic social cards when language changes.
    document.addEventListener("siteLanguageChanged", function () {
        renderSocialCards();
    });
});