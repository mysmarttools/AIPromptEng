document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    const searchInput = document.getElementById("categorySearch");
    const categoryGrid = document.getElementById("categoryGrid");
    const categoryCount = document.getElementById("categoryCount");
    const noResults = document.getElementById("noResults");

    const cards = Array.from(
        categoryGrid.querySelectorAll(".category-card")
    );


    /* MOBILE MENU */

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("show");

    });


    /* CATEGORY SEARCH */

    searchInput.addEventListener("input", function () {

        const searchValue = this.value
            .toLowerCase()
            .trim();

        let visibleCount = 0;


        cards.forEach(function (card) {

            const text = card.textContent.toLowerCase();

            if (text.includes(searchValue)) {

                card.style.display = "flex";

                visibleCount++;

            } else {

                card.style.display = "none";

            }

        });


        categoryCount.textContent =
            visibleCount + " Categories";


        if (visibleCount === 0) {

            noResults.style.display = "block";

        } else {

            noResults.style.display = "none";

        }

    });


    /* CLOSE MOBILE MENU AFTER CLICK */

    mainNav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("show");

        });

    });

});
