document.addEventListener("DOMContentLoaded", function () {

    /* MOBILE MENU */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("show");

        });

        mainNav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("show");

            });

        });

    }


    /* FAQ ACCORDION */

    const faqQuestions =
        document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const currentItem =
                this.closest(".faq-item");

            const isOpen =
                currentItem.classList.contains("open");


            document
                .querySelectorAll(".faq-item")
                .forEach(function (item) {

                    item.classList.remove("open");

                });


            if (!isOpen) {

                currentItem.classList.add("open");

            }

        });

    });

});
