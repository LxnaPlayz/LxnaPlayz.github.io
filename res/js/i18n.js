(function () {
    const SUPPORTED_LANGUAGES = ["en", "de"];
    let currentLanguage = "en";

    const translations = {
        en: {
            page_title_home: "Lyna Socials - Official Social Links",
            page_title_commission: "VRChat Avatar Commissions | Lyna Playz",
            page_title_examples: "Examples | Lyna Playz",
            commission_meta_description: "VRChat avatar commissions by Lyna Playz: setup, customization, and optimization with transparent hourly pricing.",
            examples_meta_description: "Examples by Lyna Playz: VRChat avatar showcases with organized image sets.",
            logo_back_home: "Back to homepage",
            main_navigation: "Main navigation",
            nav_home: "Home",
            nav_socials: "Socials",
            nav_gallery: "Gallery",
            nav_examples: "Examples",
            nav_commission: "Commission",
            lang_label: "Language",
            language_switch: "Language switch",
            mobile_menu_title: "Menu",
            mobile_menu_open: "Open menu",
            mobile_menu_close: "Close menu",
            mobile_navigation: "Mobile navigation",
            home_welcome: "WELCOME",
            home_subtitle: "On Lyna Playz's Official Social Hub!",
            home_commission_kicker: "Commission Open",
            home_commission_title: "VRChat Avatar Commissions Are Open",
            home_commission_text: "Custom setup, optimization, and detail-focused avatar work. Click below to request your commission.",
            home_commission_cta: "Go to Commission Page",
            lightbox_close: "Close image preview",
            lightbox_dialog: "Image preview",
            lightbox_image_alt: "Expanded gallery image",
            footer_imprint: "Imprint",
            commission_hero_title: "VRChat Avatar Commissions",
            commission_hero_text: "I help with setup, customization, and optimization of your VRChat avatar. Important: base and assets are always paid by the client. My hourly rate is between 10 and 20 EUR depending on complexity.",
            commission_cta_request: "Request now",
            commission_cta_examples: "View examples",
            commission_services_title: "What I can do for your avatar",
            commission_service_setup_title: "Avatar Setup",
            commission_service_setup_text: "Import, Unity project structure, core configuration, and clean preparation for VRChat upload.",
            commission_service_toggle_title: "Toggles & Expressions",
            commission_service_toggle_text: "Menus, parameters, gestures, material swaps, and smart toggles tailored to your avatar concept.",
            commission_service_perf_title: "Performance Optimization",
            commission_service_perf_text: "Optimization of structure and settings so your avatar runs smoothly and reliably in VRChat.",
            commission_process_title: "How a commission works",
            commission_step1_title: "Request",
            commission_step1_text: "Send your style direction, references, and the exact features you want.",
            commission_step2_title: "Files",
            commission_step2_text: "You provide base and assets. These are always paid by the client.",
            commission_step3_title: "Production",
            commission_step3_text: "I implement the agreed features and provide progress updates for full transparency.",
            commission_step4_title: "Delivery",
            commission_step4_text: "You receive the final version with a short handover and usage notes.",
            commission_pricing_title: "Pricing & Cost Rules",
            commission_price_hourly_title: "Hourly Rate",
            commission_price_hourly_value: "10 - 20 EUR / hour",
            commission_price_hourly_text: "The exact rate depends on scope, complexity, and urgency.",
            commission_price_assets_title: "Base & Assets",
            commission_price_assets_value: "always paid by the client",
            commission_price_assets_text: "Bases, clothing, hair, add-ons, and other assets are always paid by the client.",
            commission_price_transparency_title: "Transparency",
            commission_price_transparency_value: "clear communication",
            commission_price_transparency_text: "Before we start, you get a realistic estimate for timeline and expected effort.",
            commission_disclaimer: "Disclaimer: If you prefer, I can also purchase assets for you when you send the money upfront. In that case, you always receive proof of purchase/receipts. This can simplify file sharing and transfer.",
            commission_qualifications_title: "Core Principles",
            commission_qualification_1: "Bug fixes are free for lifetime.",
            commission_qualification_2: "I only work with hourly billing, never per project.",
            commission_qualification_3: "I focus on fine detail, not on speed.",
            commission_qualification_4: "I listen to every detail you want, so dont hesitate to tell me every small thing",
            commission_qualification_5: "No project is delivered as just \"good enough\".",
            commission_requirements_title: "What I need from you before we start",
            commission_req_1_title: "Base and asset files",
            commission_req_1_text: "Please send all required files, including installation notes or readme information if available.",
            commission_req_2_title: "Clear feature list",
            commission_req_2_text: "List requested features clearly, such as GoGo-Loco, toggles, hue sliders, material swaps, or custom expressions.",
            commission_req_3_title: "Active contact channel",
            commission_req_3_text: "Keep one contact channel available during production so approvals can happen quickly.",
            commission_faq_title: "Frequently Asked Questions",
            commission_faq_1_title: "Who pays for base and assets?",
            commission_faq_1_text: "Always the client. This applies to all required bases and additional assets.",
            commission_faq_2_title: "Can you buy assets for me?",
            commission_faq_2_text: "Yes. If you send the amount upfront, I can handle the purchase and provide receipts.",
            commission_faq_3_title: "How is billing handled?",
            commission_faq_3_text: "Billing is hourly in the 10 to 20 EUR range depending on complexity.",
            commission_faq_4_title: "How long does a commission take?",
            commission_faq_4_text: "Usually 3 to 7 days. Larger projects can take longer.",
            commission_contact_title: "Ready for your project?",
            commission_contact_text: "Send your avatar concept, desired features, and available assets. You will get a clear estimate shortly.",
            examples_hero_title: "Avatar Examples",
            examples_hero_text: "Here you can see complete showcase sets. Each block contains one organized avatar example.",
            examples_set1_title: "Example 1 - Lynabeast",
            examples_set2_title: "Example 2 - Estrella Ligera"
        },
        de: {
            page_title_home: "Lyna Socials - Offizielle Social Links",
            page_title_commission: "VRChat Avatar Kommissionen | Lyna Playz",
            page_title_examples: "Beispiele | Lyna Playz",
            commission_meta_description: "VRChat-Avatar-Kommissionen von Lyna Playz: Setup, Anpassung und Optimierung mit transparentem Stundenlohn.",
            examples_meta_description: "Beispiele von Lyna Playz: VRChat-Avatar-Showcases mit sortierten Bildsets.",
            logo_back_home: "Zur Startseite",
            main_navigation: "Hauptnavigation",
            nav_home: "Home",
            nav_socials: "Socials",
            nav_gallery: "Galerie",
            nav_examples: "Beispiele",
            nav_commission: "Kommission",
            lang_label: "Sprache",
            language_switch: "Sprachumschalter",
            mobile_menu_title: "Menue",
            mobile_menu_open: "Menue oeffnen",
            mobile_menu_close: "Menue schliessen",
            mobile_navigation: "Mobile Navigation",
            home_welcome: "WILLKOMMEN",
            home_subtitle: "Auf dem offiziellen Social Hub von Lyna Playz!",
            home_commission_kicker: "Kommission Offen",
            home_commission_title: "VRChat Avatar Kommissionen sind offen",
            home_commission_text: "Individuelles Setup, Optimierung und detailfokussierte Avatar-Arbeit. Klicke unten, um deine Kommission anzufragen.",
            home_commission_cta: "Zur Kommissionsseite",
            lightbox_close: "Bildvorschau schliessen",
            lightbox_dialog: "Bildvorschau",
            lightbox_image_alt: "Vergroessertes Galerie-Bild",
            footer_imprint: "Impressum",
            commission_hero_title: "VRChat Avatar Kommissionen",
            commission_hero_text: "Ich helfe dir bei Setup, Anpassung und Optimierung deines VRChat-Avatars. Wichtig: Base und Assets werden immer vom Kunden bezahlt. Mein Stundenlohn liegt je nach Aufwand zwischen 10 und 20 EUR.",
            commission_cta_request: "Jetzt anfragen",
            commission_cta_examples: "Beispiele ansehen",
            commission_services_title: "Was ich an deinem Avatar umsetze",
            commission_service_setup_title: "Avatar Setup",
            commission_service_setup_text: "Import, Unity-Projekt-Struktur, Grundkonfiguration und saubere Vorbereitung fuer den VRChat-Upload.",
            commission_service_toggle_title: "Toggles & Expressions",
            commission_service_toggle_text: "Menues, Parameter, Gesten, Material-Swaps und sinnvolle Schalter passend zu deinem Avatar-Konzept.",
            commission_service_perf_title: "Performance Optimierung",
            commission_service_perf_text: "Optimierung von Struktur und Einstellungen, damit dein Avatar stabil und angenehm in VRChat laeuft.",
            commission_process_title: "So laeuft eine Kommission ab",
            commission_step1_title: "Anfrage",
            commission_step1_text: "Schick mir Stilrichtung, Referenzen und die genauen Features, die du moechtest.",
            commission_step2_title: "Dateien",
            commission_step2_text: "Du stellst Base und Assets bereit. Diese werden immer vom Kunden bezahlt.",
            commission_step3_title: "Umsetzung",
            commission_step3_text: "Ich setze die vereinbarten Features um und gebe Zwischenupdates fuer volle Transparenz.",
            commission_step4_title: "Abgabe",
            commission_step4_text: "Du bekommst den finalen Stand mit kurzer Uebergabe und Hinweisen zur Nutzung.",
            commission_pricing_title: "Preise & Kostenregeln",
            commission_price_hourly_title: "Stundenlohn",
            commission_price_hourly_value: "10 - 20 EUR / Stunde",
            commission_price_hourly_text: "Der genaue Satz richtet sich nach Aufwand, Komplexitaet und Dringlichkeit.",
            commission_price_assets_title: "Base & Assets",
            commission_price_assets_value: "immer kundenbezahlt",
            commission_price_assets_text: "Bases, Kleidung, Haare, Add-ons und weitere Assets werden immer vom Kunden bezahlt.",
            commission_price_transparency_title: "Transparenz",
            commission_price_transparency_value: "klare Absprache",
            commission_price_transparency_text: "Vor Start bekommst du eine realistische Einschaetzung zu Zeitrahmen und Aufwand.",
            commission_disclaimer: "Disclaimer: Auf Wunsch kaufe ich Assets auch selbst fuer dich, wenn du mir das Geld vorab sendest. Du bekommst in diesem Fall immer Belege/Quittungen. Das vereinfacht den Austausch und das Senden von Dateien.",
            commission_qualifications_title: "Schwerpunkte",
            commission_qualification_1: "Bugfixes sind lebenslang kostenlos.",
            commission_qualification_2: "Ich nehme nur stundenweise Bezahlung, nicht pro Projekt.",
            commission_qualification_3: "Ich arbeite nach feinem Detail, nicht nach Geschwindigkeit.",
            commission_qualification_4: "Ich hoere mir alle Wuensche an.",
            commission_qualification_5: "Kein Projekt wird nur \"gut genug\" abgegeben.",
            commission_requirements_title: "Was ich vor Start von dir brauche",
            commission_req_1_title: "Base- und Asset-Dateien",
            commission_req_1_text: "Bitte sende alle benoetigten Dateien sowie Installations- oder Readme-Hinweise, falls vorhanden.",
            commission_req_2_title: "Klare Wunschliste",
            commission_req_2_text: "Liste gewuenschte Features wie GoGo-Loco, Toggles, Hue-Slider, Material-Swaps oder spezielle Expressions klar auf.",
            commission_req_3_title: "Aktiver Kontaktweg",
            commission_req_3_text: "Halte waehrend der Umsetzung einen Kontaktweg offen, damit Freigaben schnell erfolgen koennen.",
            commission_faq_title: "Haeufige Fragen",
            commission_faq_1_title: "Wer bezahlt Base und Assets?",
            commission_faq_1_text: "Immer der Kunde. Das gilt fuer alle benoetigten Bases und Zusatz-Assets.",
            commission_faq_2_title: "Kannst du Assets fuer mich kaufen?",
            commission_faq_2_text: "Ja. Wenn du mir den Betrag vorab sendest, uebernehme ich den Kauf und sende die Belege.",
            commission_faq_3_title: "Wie wird abgerechnet?",
            commission_faq_3_text: "Die Abrechnung erfolgt nach Stundenaufwand im Rahmen von 10 bis 20 EUR pro Stunde.",
            commission_faq_4_title: "Wie lange dauert eine Kommission?",
            commission_faq_4_text: "In der Regel 3 bis 7 Tage. Groessere Projekte koennen laenger dauern.",
            commission_contact_title: "Bereit fuer dein Projekt?",
            commission_contact_text: "Schick mir dein Avatar-Konzept, gewuenschte Features und vorhandene Assets. Du bekommst zeitnah eine klare Einschaetzung.",
            examples_hero_title: "Avatar Beispiele",
            examples_hero_text: "Hier siehst du vollstaendige Showcase-Sets. Jeder Block enthaelt ein sortiertes Avatar-Beispiel.",
            examples_set1_title: "Beispiel 1 - Lynabeast",
            examples_set2_title: "Beispiel 2 - Estrella Ligera"
        }
    };

    function getInitialLanguage() {
        const langFromHtml = document.documentElement.lang;
        return SUPPORTED_LANGUAGES.includes(langFromHtml) ? langFromHtml : "en";
    }

    function applyTranslations(lang) {
        const selectedLang = SUPPORTED_LANGUAGES.includes(lang) ? lang : "en";
        const dict = translations[selectedLang];
        currentLanguage = selectedLang;

        document.documentElement.lang = selectedLang;

        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            const key = element.dataset.i18n;
            if (dict[key]) {
                element.textContent = dict[key];
            }
        });

        document.querySelectorAll("[data-i18n-content]").forEach(function (element) {
            const key = element.dataset.i18nContent;
            if (dict[key]) {
                element.setAttribute("content", dict[key]);
            }
        });

        document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
            const key = element.dataset.i18nAriaLabel;
            if (dict[key]) {
                element.setAttribute("aria-label", dict[key]);
            }
        });

        document.querySelectorAll("[data-i18n-alt]").forEach(function (element) {
            const key = element.dataset.i18nAlt;
            if (dict[key]) {
                element.setAttribute("alt", dict[key]);
            }
        });

        document.querySelectorAll(".lang-btn").forEach(function (button) {
            const isActive = button.dataset.lang === selectedLang;
            button.classList.toggle("menu-btn-active", isActive);
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        document.dispatchEvent(new CustomEvent("siteLanguageChanged", {
            detail: { lang: selectedLang }
        }));
    }

    function setLanguage(lang) {
        applyTranslations(lang);
    }

    function initLanguageSwitch() {
        const initialLanguage = getInitialLanguage();

        document.querySelectorAll(".lang-btn").forEach(function (button) {
            button.addEventListener("click", function () {
                setLanguage(button.dataset.lang);
            });
        });

        applyTranslations(initialLanguage);
    }

    window.siteI18n = {
        setLanguage: setLanguage,
        getLanguage: function () {
            return currentLanguage;
        },
        applyTranslations: applyTranslations
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initLanguageSwitch);
    } else {
        initLanguageSwitch();
    }
})();

