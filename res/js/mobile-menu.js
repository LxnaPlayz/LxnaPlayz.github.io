(function () {
    function setMenuState(isOpen) {
        const menu = document.getElementById("mobile-side-menu");
        const backdrop = document.querySelector(".mobile-menu-backdrop");
        const toggle = document.querySelector(".mobile-menu-toggle");

        if (!menu || !backdrop || !toggle) {
            return;
        }

        menu.classList.toggle("is-open", isOpen);
        menu.setAttribute("aria-hidden", String(!isOpen));
        toggle.setAttribute("aria-expanded", String(isOpen));

        if (isOpen) {
            backdrop.removeAttribute("hidden");
        } else {
            backdrop.setAttribute("hidden", "hidden");
        }
    }

    function initMobileMenu() {
        const menu = document.getElementById("mobile-side-menu");
        const backdrop = document.querySelector(".mobile-menu-backdrop");
        const toggle = document.querySelector(".mobile-menu-toggle");
        const closeButton = document.querySelector(".mobile-side-close");

        if (!menu || !backdrop || !toggle || !closeButton) {
            return;
        }

        setMenuState(false);

        toggle.addEventListener("click", function () {
            const isOpen = toggle.getAttribute("aria-expanded") === "true";
            setMenuState(!isOpen);
        });

        closeButton.addEventListener("click", function () {
            setMenuState(false);
        });

        backdrop.addEventListener("click", function () {
            setMenuState(false);
        });

        menu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                setMenuState(false);
            });
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                setMenuState(false);
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initMobileMenu);
    } else {
        initMobileMenu();
    }
})();


