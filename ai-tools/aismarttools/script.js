/* =========================================
   AI SMART TOOLS - AIPROMPTENG
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
  });


  document.addEventListener("click", function (event) {

    if (
      !mainNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      mainNav.classList.remove("active");
    }

  });


  const navLinks = mainNav.querySelectorAll("a");

  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
      mainNav.classList.remove("active");
    });

  });

}


/* =========================================
   FAQ ACCORDION
========================================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {

  const question = item.querySelector(".faq-question");

  question.addEventListener("click", function () {

    const isActive = item.classList.contains("active");


    /* Close all FAQs */

    faqItems.forEach(function (otherItem) {
      otherItem.classList.remove("active");
    });


    /* Open selected FAQ */

    if (!isActive) {
      item.classList.add("active");
    }

  });

});


/* =========================================
   SMOOTH ANCHOR LINKS
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

  link.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (
      targetId &&
      targetId !== "#"
    ) {

      const target = document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    }

  });

});


/* =========================================
   ESC KEY - CLOSE MOBILE MENU
========================================= */

document.addEventListener("keydown", function (event) {

  if (event.key === "Escape") {

    if (mainNav) {
      mainNav.classList.remove("active");
    }

  }

});


/* =========================================
   CURRENT YEAR
========================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}


/* =========================================
   HEADER SHADOW ON SCROLL
========================================= */

const header = document.querySelector(".site-header");

window.addEventListener("scroll", function () {

  if (!header) return;

  if (window.scrollY > 20) {

    header.style.boxShadow =
      "0 8px 30px rgba(17, 24, 39, 0.06)";

  } else {

    header.style.boxShadow = "none";

  }

});
