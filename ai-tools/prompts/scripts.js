document.addEventListener("DOMContentLoaded", () => {

    /* ================= MOBILE MENU ================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");


    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                mainNav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        mainNav
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    mainNav.classList.remove("open");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                });

            });

    }


    /* ================= SEARCH ================= */

    const searchInput =
        document.getElementById("promptSearch");

    const clearSearch =
        document.getElementById("clearSearch");

    const promptCards =
        document.querySelectorAll(".prompt-card");

    const noResults =
        document.getElementById("noResults");

    const resultsCount =
        document.getElementById("resultsCount");

    const resetSearch =
        document.getElementById("resetSearch");


    /* ================= FILTER ================= */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    let currentFilter = "all";


    function updatePrompts() {

        const searchTerm =
            searchInput
                ? searchInput.value
                    .toLowerCase()
                    .trim()
                : "";

        let visibleCount = 0;


        promptCards.forEach(card => {

            const category =
                card.dataset.category || "";

            const searchData =
                (
                    card.dataset.search ||
                    ""
                ).toLowerCase();

            const cardText =
                card.textContent.toLowerCase();


            const categoryMatch =
                currentFilter === "all" ||
                category === currentFilter;


            const searchMatch =
                !searchTerm ||
                searchData.includes(searchTerm) ||
                cardText.includes(searchTerm);


            if (
                categoryMatch &&
                searchMatch
            ) {

                card.style.display = "";

                visibleCount++;

            } else {

                card.style.display = "none";

            }

        });


        if (resultsCount) {

            resultsCount.textContent =
                `Showing ${visibleCount} ${
                    visibleCount === 1
                        ? "prompt"
                        : "prompts"
                }`;

        }


        if (noResults) {

            noResults.hidden =
                visibleCount !== 0;

        }


        if (clearSearch) {

            clearSearch.style.display =
                searchTerm
                    ? "flex"
                    : "none";

        }

    }


    /* ================= FILTER BUTTONS ================= */

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            button.classList.add("active");

            currentFilter =
                button.dataset.filter ||
                "all";

            updatePrompts();

        });

    });


    /* ================= SEARCH INPUT ================= */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            updatePrompts
        );

    }


    /* ================= CLEAR SEARCH ================= */

    if (clearSearch) {

        clearSearch.addEventListener(
            "click",
            () => {

                searchInput.value = "";

                currentFilter = "all";


                filterButtons.forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                const allButton =
                    document.querySelector(
                        '.filter-btn[data-filter="all"]'
                    );


                if (allButton) {

                    allButton.classList.add(
                        "active"
                    );

                }


                updatePrompts();

                searchInput.focus();

            }
        );

    }


    /* ================= RESET ================= */

    if (resetSearch) {

        resetSearch.addEventListener(
            "click",
            () => {

                if (searchInput) {
                    searchInput.value = "";
                }

                currentFilter = "all";


                filterButtons.forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                const allButton =
                    document.querySelector(
                        '.filter-btn[data-filter="all"]'
                    );


                if (allButton) {

                    allButton.classList.add(
                        "active"
                    );

                }


                updatePrompts();


                document
                    .getElementById(
                        "prompt-library"
                    )
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    }


    /* ================= COPY PROMPT ================= */

    const copyButtons =
        document.querySelectorAll(".copy-btn");


    copyButtons.forEach(button => {

        button.addEventListener(
            "click",
            async () => {

                const prompt =
                    button.dataset.prompt;


                if (!prompt) return;


                const originalHTML =
                    button.innerHTML;


                try {

                    await navigator
                        .clipboard
                        .writeText(prompt);

                } catch (error) {

                    const textarea =
                        document.createElement(
                            "textarea"
                        );

                    textarea.value = prompt;

                    textarea.style.position =
                        "fixed";

                    textarea.style.opacity =
                        "0";

                    document.body.appendChild(
                        textarea
                    );

                    textarea.focus();

                    textarea.select();

                    document.execCommand(
                        "copy"
                    );

                    textarea.remove();

                }


                button.classList.add(
                    "copied"
                );

                button.innerHTML =
                    "<span>✓ Prompt Copied!</span>";


                setTimeout(() => {

                    button.classList.remove(
                        "copied"
                    );

                    button.innerHTML =
                        originalHTML;

                }, 1800);

            }
        );

    });


    /* ================= CURRENT YEAR ================= */

    const currentYear =
        document.getElementById(
            "currentYear"
        );


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* ================= ESCAPE KEY ================= */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                if (mainNav) {

                    mainNav.classList.remove(
                        "open"
                    );

                }

                if (menuToggle) {

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );


    /* ================= INITIAL LOAD ================= */

    updatePrompts();

});
