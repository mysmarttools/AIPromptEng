document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const mainNav =
        document.querySelector(".main-nav");


    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function (event) {

            event.stopPropagation();

            mainNav.classList.toggle("active");

            const opened =
                mainNav.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                opened ? "true" : "false"
            );

            menuToggle.innerHTML =
                opened ? "✕" : "☰";

        });


        document.addEventListener("click", function (event) {

            if (
                mainNav.classList.contains("active") &&
                !mainNav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                mainNav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.innerHTML = "☰";
            }

        });


        const navLinks =
            mainNav.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.innerHTML = "☰";

            });

        });

    }


    /* =========================================
       FAQ ACCORDION
    ========================================= */

    const faqItems =
        document.querySelectorAll(".faq-item");


    faqItems.forEach(function (item) {

        const question =
            item.querySelector(".faq-question");


        if (!question) {
            return;
        }


        question.addEventListener("click", function () {

            const currentlyOpen =
                item.classList.contains("active");


            faqItems.forEach(function (otherItem) {

                otherItem.classList.remove("active");

                const otherQuestion =
                    otherItem.querySelector(".faq-question");


                if (otherQuestion) {

                    otherQuestion.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            });


            if (!currentlyOpen) {

                item.classList.add("active");

                question.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        });

    });


    /* =========================================
       SMOOTH SCROLL
    ========================================= */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                const header =
                    document.querySelector(".site-header");


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const position =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight -
                    15;


                window.scrollTo({

                    top: position,

                    behavior: "smooth"

                });

            }

        });

    });


    /* =========================================
       CLOSE MENU ON ESCAPE
    ========================================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            if (mainNav) {
                mainNav.classList.remove("active");
            }

            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.innerHTML = "☰";

            }

        }

    });


    /* =========================================
       CURRENT YEAR
    ========================================= */

    const yearElements =
        document.querySelectorAll(".current-year");


    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });


});
