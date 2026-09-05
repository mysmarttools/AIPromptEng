/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("active");

    menuToggle.textContent =
        mainNav.classList.contains("active")
            ? "✕"
            : "☰";

});


/* =========================
   HEADER SEARCH
========================= */

const searchToggle = document.getElementById("searchToggle");
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");

searchToggle.addEventListener("click", () => {

    searchBar.classList.toggle("active");

    if (searchBar.classList.contains("active")) {
        searchInput.focus();
    }

});

clearSearch.addEventListener("click", () => {

    searchInput.value = "";
    searchInput.focus();

});


/* =========================
   DIRECTORY ELEMENTS
========================= */

const directorySearch =
    document.getElementById("directorySearch");

const categoryButtons =
    document.querySelectorAll(".category-btn");

const toolCards =
    Array.from(document.querySelectorAll(".tool-card"));

const toolGrid =
    document.getElementById("toolGrid");

const toolCount =
    document.getElementById("toolCount");

const noResults =
    document.getElementById("noResults");

const resetFilters =
    document.getElementById("resetFilters");

const sortTools =
    document.getElementById("sortTools");


let currentCategory = "all";


/* =========================
   FILTER TOOLS
========================= */

function filterTools() {

    const query =
        directorySearch.value
            .trim()
            .toLowerCase();

    let visibleTools = [];

    toolCards.forEach(card => {

        const name =
            card.dataset.name.toLowerCase();

        const category =
            card.dataset.category.toLowerCase();

        const description =
            card.querySelector("p")
                .textContent
                .toLowerCase();

        const matchesSearch =
            name.includes(query) ||
            category.includes(query) ||
            description.includes(query);

        const matchesCategory =
            currentCategory === "all" ||
            category === currentCategory;

        if (matchesSearch && matchesCategory) {

            card.style.display = "flex";

            visibleTools.push(card);

        } else {

            card.style.display = "none";

        }

    });


    toolCount.textContent =
        visibleTools.length;


    if (visibleTools.length === 0) {

        noResults.classList.add("show");

    } else {

        noResults.classList.remove("show");

    }

}


/* =========================
   CATEGORY BUTTONS
========================= */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        currentCategory =
            button.dataset.category;

        filterTools();

        /*
           Scroll slightly toward tools
           on mobile.
        */

        if (window.innerWidth <= 760) {

            document
                .querySelector(".tools-area")
                .scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

        }

    });

});


/* =========================
   SEARCH
========================= */

directorySearch.addEventListener(
    "input",
    filterTools
);


/* =========================
   SORT TOOLS
========================= */

sortTools.addEventListener("change", () => {

    const cards =
        Array.from(
            toolGrid.querySelectorAll(".tool-card")
        );

    const sortType =
        sortTools.value;


    if (sortType === "name") {

        cards.sort((a, b) => {

            return a.dataset.name.localeCompare(
                b.dataset.name
            );

        });

    }


    if (sortType === "rating") {

        cards.sort((a, b) => {

            return (
                parseFloat(b.dataset.rating) -
                parseFloat(a.dataset.rating)
            );

        });

    }


    cards.forEach(card => {
        toolGrid.appendChild(card);
    });

});


/* =========================
   RESET FILTERS
========================= */

resetFilters.addEventListener("click", () => {

    directorySearch.value = "";

    currentCategory = "all";

    categoryButtons.forEach(button => {

        button.classList.remove("active");

    });

    categoryButtons[0].classList.add("active");

    sortTools.value = "default";

    filterTools();

});


/* =========================
   INITIALIZE
========================= */

filterTools();
