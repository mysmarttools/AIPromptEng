/* =====================================================
   AIPROMPTENG - AI SEO TOOLS JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");
    const pricingFilter = document.getElementById("pricingFilter");
    const sortSelect = document.getElementById("sortSelect");
    const resetBtn = document.getElementById("resetBtn");

    const toolsGrid = document.getElementById("toolsGrid");
    const resultCount = document.getElementById("resultCount");
    const noResults = document.getElementById("noResults");

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    const cards = Array.from(
        document.querySelectorAll(".tool-card")
    );


    /* ===============================
       MOBILE MENU
    =============================== */

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            mainNav.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if (mainNav.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });


        mainNav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                mainNav.classList.remove("active");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }


    /* ===============================
       FILTER TOOLS
    =============================== */

    function filterTools() {

        const searchTerm =
            searchInput.value.trim().toLowerCase();

        const pricing =
            pricingFilter.value;

        let visibleCards = cards.filter(card => {

            const name =
                card.dataset.name.toLowerCase();

            const category =
                card.dataset.category.toLowerCase();

            const cardPricing =
                card.dataset.pricing.toLowerCase();

            const matchesSearch =
                name.includes(searchTerm) ||
                category.includes(searchTerm);

            const matchesPricing =
                pricing === "all" ||
                cardPricing.includes(pricing);

            return matchesSearch && matchesPricing;

        });


        sortCards(visibleCards);


        cards.forEach(card => {
            card.style.display = "none";
        });


        visibleCards.forEach(card => {
            card.style.display = "flex";
        });


        resultCount.textContent =
            visibleCards.length;


        if (visibleCards.length === 0) {

            noResults.classList.add("show");

        } else {

            noResults.classList.remove("show");

        }

    }


    /* ===============================
       SORT
    =============================== */

    function sortCards(cardList) {

        const sortValue =
            sortSelect.value;

        cardList.sort((a, b) => {

            if (sortValue === "name") {

                return a.dataset.name
                    .localeCompare(b.dataset.name);

            }

            if (sortValue === "rating") {

                return Number(b.dataset.rating)
                    - Number(a.dataset.rating);

            }

            return Number(a.dataset.featured)
                - Number(b.dataset.featured);

        });


        cardList.forEach(card => {
            toolsGrid.appendChild(card);
        });

    }


    /* ===============================
       EVENTS
    =============================== */

    searchInput.addEventListener(
        "input",
        filterTools
    );

    pricingFilter.addEventListener(
        "change",
        filterTools
    );

    sortSelect.addEventListener(
        "change",
        filterTools
    );


    /* ===============================
       RESET
    =============================== */

    resetBtn.addEventListener("click", () => {

        searchInput.value = "";

        pricingFilter.value = "all";

        sortSelect.value = "featured";

        filterTools();

    });


    /* ===============================
       INITIAL LOAD
    =============================== */

    filterTools();

});
