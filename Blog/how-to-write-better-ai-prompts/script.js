document.addEventListener("DOMContentLoaded", function () {

    /* MOBILE MENU */

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", function () {
            nav.classList.toggle("show");

            menuBtn.textContent =
                nav.classList.contains("show") ? "✕" : "☰";
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("show");
                menuBtn.textContent = "☰";
            });
        });
    }


    /* FAQ ACCORDION */

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const answer = this.nextElementSibling;
            const icon = this.querySelector("span");

            const isOpen = answer.classList.contains("open");

            document.querySelectorAll(".faq-answer").forEach(function (item) {
                item.classList.remove("open");
            });

            document.querySelectorAll(".faq-question span").forEach(function (item) {
                item.textContent = "+";
            });

            if (!isOpen) {
                answer.classList.add("open");
                icon.textContent = "−";
            }

        });

    });

});
