/* =========================================
   AIPROMPTENG
   JASPER AI PAGE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       MOBILE MENU
    ===================================== */

    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const mobileMenu =
        document.getElementById("mobileMenu");


    if (mobileMenuBtn && mobileMenu) {

        mobileMenuBtn.addEventListener("click", function () {

            mobileMenu.classList.toggle("show");


            if (mobileMenu.classList.contains("show")) {

                mobileMenuBtn.innerHTML = "✕";

            } else {

                mobileMenuBtn.innerHTML = "☰";

            }

        });


        /* CLOSE MENU AFTER LINK CLICK */

        const mobileLinks =
            mobileMenu.querySelectorAll("a");


        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileMenu.classList.remove("show");

                mobileMenuBtn.innerHTML = "☰";

            });

        });

    }


    /* =====================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ===================================== */

    document.addEventListener("click", function (event) {

        if (!mobileMenu || !mobileMenuBtn) {
            return;
        }


        const clickedInsideMenu =
            mobileMenu.contains(event.target);


        const clickedButton =
            mobileMenuBtn.contains(event.target);


        if (
            mobileMenu.classList.contains("show") &&
            !clickedInsideMenu &&
            !clickedButton
        ) {

            mobileMenu.classList.remove("show");

            mobileMenuBtn.innerHTML = "☰";

        }

    });


    /* =====================================
       FAQ ACCORDION
    ===================================== */

    const faqQuestions =
        document.querySelectorAll(".faq-question");


    faqQuestions.forEach(function (question) {


        question.addEventListener("click", function () {


            const currentItem =
                question.closest(".faq-item");


            const currentAnswer =
                currentItem.querySelector(".faq-answer");


            /* CLOSE OTHER FAQS */

            document.querySelectorAll(".faq-item")
                .forEach(function (item) {


                    if (item !== currentItem) {

                        item.classList.remove("active");


                        const answer =
                            item.querySelector(".faq-answer");


                        if (answer) {

                            answer.style.maxHeight = null;

                        }

                    }

                });


            /* TOGGLE CURRENT FAQ */

            currentItem.classList.toggle("active");


            if (currentItem.classList.contains("active")) {

                currentAnswer.style.maxHeight =
                    currentAnswer.scrollHeight + "px";

            } else {

                currentAnswer.style.maxHeight = null;

            }

        });

    });


    /* =====================================
       SMOOTH INTERNAL LINKS
    ===================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');


    internalLinks.forEach(function (link) {


        link.addEventListener("click", function (event) {


            const targetId =
                link.getAttribute("href");


            if (!targetId || targetId === "#") {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});
