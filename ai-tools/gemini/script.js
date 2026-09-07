document.addEventListener("DOMContentLoaded", function () {

    /* MOBILE MENU */

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");

    if (menuToggle && mobileNav) {

        menuToggle.addEventListener("click", function (event) {
            event.stopPropagation();
            mobileNav.classList.toggle("active");

            menuToggle.textContent =
                mobileNav.classList.contains("active") ? "✕" : "☰";
        });


        document.addEventListener("click", function (event) {

            if (
                mobileNav.classList.contains("active") &&
                !mobileNav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                mobileNav.classList.remove("active");
                menuToggle.textContent = "☰";
            }

        });


        mobileNav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                mobileNav.classList.remove("active");
                menuToggle.textContent = "☰";
            });

        });

    }


    /* FAQ ACCORDION */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {

        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", function () {

            const isActive = item.classList.contains("active");

            faqItems.forEach(function (otherItem) {

                otherItem.classList.remove("active");

                const otherAnswer =
                    otherItem.querySelector(".faq-answer");

                otherAnswer.style.maxHeight = null;

            });


            if (!isActive) {

                item.classList.add("active");

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            }

        });

    });


    /* SMOOTH INTERNAL LINKS */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

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
