document.addEventListener("DOMContentLoaded", () => {

    /* MOBILE MENU */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("open");
        });

        mainNav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                mainNav.classList.remove("open");
            });

        });

    }


    /* PROMPT FILTER */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const promptCards =
        document.querySelectorAll(".prompt-card");

    const searchInput =
        document.getElementById("promptSearch");

    const noResults =
        document.getElementById("noResults");

    let currentFilter = "all";


    function filterPrompts() {

        const searchTerm =
            searchInput
                ? searchInput.value.toLowerCase().trim()
                : "";

        let visibleCount = 0;


        promptCards.forEach(card => {

            const category =
                card.dataset.category || "";

            const title =
                card.dataset.title || "";

            const text =
                card.textContent.toLowerCase();

            const matchesCategory =
                currentFilter === "all" ||
                category === currentFilter;

            const matchesSearch =
                !searchTerm ||
                title.includes(searchTerm) ||
                text.includes(searchTerm);


            if (matchesCategory && matchesSearch) {

                card.style.display = "";
                visibleCount++;

            } else {

                card.style.display = "none";

            }

        });


        if (noResults) {

            noResults.hidden =
                visibleCount !== 0;

        }

    }


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            currentFilter =
                button.dataset.filter;

            filterPrompts();

        });

    });


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterPrompts
        );

    }


    /* COPY PROMPT */

    const copyButtons =
        document.querySelectorAll(".copy-btn");


    copyButtons.forEach(button => {

        button.addEventListener("click", async () => {

            const prompt =
                button.dataset.prompt;

            if (!prompt) return;


            try {

                await navigator.clipboard.writeText(prompt);

                const originalText =
                    button.textContent;

                button.textContent =
                    "✓ Prompt Copied!";

                button.classList.add("copied");


                setTimeout(() => {

                    button.textContent =
                        originalText;

                    button.classList.remove("copied");

                }, 1800);


            } catch (error) {

                const textarea =
                    document.createElement("textarea");

                textarea.value = prompt;

                document.body.appendChild(textarea);

                textarea.select();

                document.execCommand("copy");

                textarea.remove();


                button.textContent =
                    "✓ Prompt Copied!";

                button.classList.add("copied");


                setTimeout(() => {

                    button.textContent =
                        "Copy Prompt";

                    button.classList.remove("copied");

                }, 1800);

            }

        });

    });


    /* CURRENT YEAR */

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* ESCAPE KEY */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            if (mainNav) {
                mainNav.classList.remove("open");
            }

        }

    });

});
