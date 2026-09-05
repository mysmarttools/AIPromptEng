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

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("show");

    });


    mainNav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("show");

        });

    });


    /* =========================
       FILTER TOOLS
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

            const content =
                card.textContent.toLowerCase();

            const pricing =
                card.dataset.pricing;


            const matchesSearch =
                name.includes(searchValue) ||
                content.includes(searchValue);


            const matchesPricing =
                pricingValue === "all" ||
                pricing === pricingValue;


            if (
                matchesSearch &&
                matchesPricing
            ) {

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
       SORT TOOLS
    ========================= */

    function sortCards() {

        const sortValue =
            sortTools.value;


        if (sortValue === "name") {

            cards.sort(function (a, b) {

                return a.dataset.name
                    .localeCompare(
                        b.dataset.name
                    );

            });

        }


        if (sortValue === "rating") {

            cards.sort(function (a, b) {

                return (
                    parseFloat(
                        b.dataset.rating
                    ) -
                    parseFloat(
                        a.dataset.rating
                    )
                );

            });

        }


        if (sortValue === "featured") {

            cards.sort(function (a, b) {

                return (
                    parseFloat(
                        b.dataset.rating
                    ) -
                    parseFloat(
                        a.dataset.rating
                    )
                );

            });

        }


        cards.forEach(function (card) {

            toolsGrid.appendChild(card);

        });


        filterTools();

    }


    /* =========================
       SEARCH
    ========================= */

    searchInput.addEventListener(
        "input",
        filterTools
    );


    /* =========================
       PRICING
    ========================= */

    pricingFilter.addEventListener(
        "change",
        filterTools
    );


    /* =========================
       SORT
    ========================= */

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


    /* =========================
       FAQ ACCORDION
    ========================= */

    const faqQuestions =
        document.querySelectorAll(
            ".faq-question"
        );


    faqQuestions.forEach(function (question) {

        question.addEventListener(
            "click",
            function () {

                const currentItem =
                    question.closest(".faq-item");


                document
                    .querySelectorAll(".faq-item")
                    .forEach(function (item) {

                        if (
                            item !== currentItem
                        ) {

                            item.classList.remove(
                                "open"
                            );

                        }

                    });


                currentItem.classList.toggle(
                    "open"
                );

            }
        );

    });


    /* INITIAL FILTER */

    filterTools();

});
