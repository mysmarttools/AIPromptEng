/* =========================================================
   AIPROMPTENG BLOG JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       MOBILE MENU
    =============================== */

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {

            navbar.classList.toggle("show");

            if (navbar.classList.contains("show")) {
                menuToggle.textContent = "✕";
            } else {
                menuToggle.textContent = "☰";
            }

        });

    }


    /* ===============================
       FAQ ACCORDION
    =============================== */

    const faqQuestions =
        document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const currentItem =
                question.closest(".faq-item");

            const allItems =
                document.querySelectorAll(".faq-item");

            allItems.forEach(function (item) {

                if (item !== currentItem) {
                    item.classList.remove("open");
                }

            });

            currentItem.classList.toggle("open");

        });

    });


    /* ===============================
       CURRENT YEAR
    =============================== */

    const yearElement =
        document.getElementById("year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* ===============================
       CLOSE MOBILE MENU ON LINK CLICK
    =============================== */

    const navLinks =
        document.querySelectorAll(".navbar a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navbar) {
                navbar.classList.remove("show");
            }

            if (menuToggle) {
                menuToggle.textContent = "☰";
            }

        });

    });

});
