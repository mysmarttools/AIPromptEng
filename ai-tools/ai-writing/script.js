document.addEventListener("DOMContentLoaded", function () {

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");

    const searchInput =
        document.getElementById("toolSearch");

    const pricingFilter =
        document.getElementById("pricingFilter");

    const sortTools =
        document.getElementById("sortTools");

    const toolsGrid =
        document.getElementById("toolsGrid");

    const toolCount =
        document.getElementById("toolCount");

    const noResults =
        document.getElementById("noResults");

    const resetFilters =
        document.getElementById("resetFilters");


    let cards =
        Array.from(
            toolsGrid.querySelectorAll(".tool-card")
        );


    /* =========================
       MOBILE MENU
    ========================= */

    if (menuToggle) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("show");

        });

    }


    if (mainNav) {

        mainNav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("show");

            });

        });

    }


    /* =========================
       FILTER + SEARCH
    ========================= */

    function filterTools() {

        const searchValue =
            searchInput.value
                .toLowerCase()
                .trim();

        const pricingValue =
            pricingFilter.value;


        let visibleCards = [];


        cards.forEach(function (card) {

            const name =
                card.dataset.name.toLowerCase();

            const text =
                card.textContent.toLowerCase();

            const pricing =
                card.dataset.pricing;


            const matchesSearch =
                name.includes(searchValue) ||
                text.includes(searchValue);


            const matchesPricing =
                pricingValue === "all" ||
                pricing === pricingValue;


            if (matchesSearch && matchesPricing) {

                card.style.display = "flex";

                visibleCards.push(card);

            } else {

                card.style.display = "none";

            }

        });


        toolCount.textContent =
            visibleCards.length + " Tools";


        if (visibleCards.length === 0) {

            noResults.style.display = "block";

        } else {

            noResults.style.display = "none";

        }

    }


    /* =========================
       SORT
    ========================= */

    function sortCards() {

        const sortValue =
            sortTools.value;


        if (sortValue === "name") {

            cards.sort(function (a, b) {

                return a.dataset.name
                    .localeCompare(b.dataset.name);

            });

        }


        if (sortValue === "rating") {

            cards.sort(function (a, b) {

                return (
                    parseFloat(b.dataset.rating) -
                    parseFloat(a.dataset.rating)
                );

            });

        }


        if (sortValue === "featured") {

            cards.sort(function (a, b) {

                return (
                    parseFloat(b.dataset.rating) -
                    parseFloat(a.dataset.rating)
                );

            });

        }


        cards.forEach(function (card) {

            toolsGrid.appendChild(card);

        });


        filterTools();

    }


    /* =========================
       EVENTS
    ========================= */

    searchInput.addEventListener(
        "input",
        filterTools
    );


    pricingFilter.addEventListener(
        "change",
        filterTools
    );


    sortTools.addEventListener(
        "change",
        sortCards
    );


    /* =========================
       RESET
    ========================= */

    resetFilters.addEventListener(
        "click",
        function () {

            searchInput.value = "";

            pricingFilter.value = "all";

            sortTools.value = "featured";

            sortCards();

        }
    );


    /* INITIAL */

    filterTools();

});
