document.addEventListener("DOMContentLoaded", function () {
    const showcaseDiv = document.getElementById("showcase");

    const btnForecast = document.getElementById("btn-forecast");
    const btnObservations = document.getElementById("btn-observations");
    const btnDashboard = document.getElementById("btn-dashboard");

    function updateShowcase(page) {
        let content;
        switch (page) {
            case "forecast":
                content = window.innerWidth <= 1025 ? window.forecastTableMobile : window.forecastTable;
                break;
            case "observations":
                content = window.observationsTable;
                break;
            case "dashboard":
                content = window.dashboardTable;
                break;
            default:
                content = "<p>Page not found</p>";
        }

        showcaseDiv.innerHTML = content;
        window.location.hash = page;
        updateButtonStyles(page);
        attachModalCloseListeners(); // Re-attach modal listeners when content updates
    }

    function updateButtonStyles(page) {
        document.querySelectorAll("nav a[data-page]").forEach((btn) => {
            btn.dataset.page === page
                ? btn.classList.add("active")
                : btn.classList.remove("active");
        });
    }

    function loadPageFromHash() {
        const page = window.location.hash.replace("#", "") || "forecast";
        updateShowcase(page);
    }

    // ✅ FIXED OPEN MODAL FUNCTION
    window.openModal = function (modalId, event) {
        if (event) event.preventDefault(); // Stop default link behavior
        const modal = document.getElementById(modalId);
        if (modal) {
            console.log("Opening modal:", modalId);
            modal.showModal();
            document.body.classList.add("modal-open");
        } else {
            console.error("Modal not found:", modalId);
        }
    };

    // ✅ FIXED CLOSE MODAL FUNCTION
    window.closeModal = function (modalId, event) {
        if (event) event.preventDefault(); // Stop default link behavior
        const modal = document.getElementById(modalId);
        if (modal) {
            console.log("Closing modal:", modalId);
            modal.close();
            document.body.classList.remove("modal-open");
        } else {
            console.error("Modal not found:", modalId);
        }
    };

    // ✅ CLOSE MODAL WHEN CLICKING OUTSIDE
    function attachModalCloseListeners() {
        document.querySelectorAll("dialog").forEach((modal) => {
            modal.addEventListener("click", (event) => {
                if (event.target === modal) {
                    modal.close();
                    document.body.classList.remove("modal-open");
                }
            });
        });
    }

    attachModalCloseListeners(); // Attach listeners when page loads

    // ✅ RE-ATTACH MODAL LISTENERS IF NEW CONTENT IS LOADED
    function observeModals() {
        const observer = new MutationObserver(() => {
            attachModalCloseListeners(); // Re-attach close event if modals are updated dynamically
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }
    observeModals(); // Start observing for dynamic modals

    btnForecast.addEventListener("click", () => updateShowcase("forecast"));
    btnObservations.addEventListener("click", () => updateShowcase("observations"));
    btnDashboard.addEventListener("click", () => updateShowcase("dashboard"));

    window.addEventListener("hashchange", loadPageFromHash);
    window.addEventListener("resize", () => {
        if (window.location.hash.includes("forecast")) {
            updateShowcase("forecast");
        }
    });

    loadPageFromHash();
});
