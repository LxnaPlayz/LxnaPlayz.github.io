function scrollToSection(section) {
    $([document.body, document.documentElement]).animate({
        scrollTop: $(`[data-section=${section}]`).offset().top
    }, 1000);
}

function openSocialLink(link) {
    window.open(link, "_blank");
}

$(function () {
    $("#info-btn").on("click", function () {
        scrollToSection("info");
    });

    $("#home-btn").on("click", function () {
        scrollToSection("landing");
    });

    $("#anderes-btn").on("click", function () {
        scrollToSection("other");
    });
});