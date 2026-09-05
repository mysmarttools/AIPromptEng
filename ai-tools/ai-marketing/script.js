document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("searchInput");
  const pricingFilter = document.getElementById("pricingFilter");
  const sortTools = document.getElementById("sortTools");
  const toolsGrid = document.getElementById("toolsGrid");
  const toolCount = document.getElementById("toolCount");
  const noResults = document.getElementById("noResults");
  const resetBtn = document.getElementById("resetBtn");

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  const cards = Array.from(
    document.querySelectorAll(".tool-card")
  );


  /* MOBILE MENU */

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {

      mainNav.classList.toggle("active");

      const icon = menuToggle.querySelector("i");

      if (mainNav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }

    });
  }


  /* FILTER + SEARCH */

  function filterTools() {

    const searchTerm =
      searchInput.value
        .trim()
        .toLowerCase();

    const pricing =
      pricingFilter.value;

    let visibleCards = [];


    cards.forEach(card => {

      const name =
        card.dataset.name.toLowerCase();

      const category =
        card.dataset.category.toLowerCase();

      const text =
        card.innerText.toLowerCase();

      const cardPricing =
        card.dataset.pricing;


      const matchesSearch =
        searchTerm === "" ||
        name.includes(searchTerm) ||
        category.includes(searchTerm) ||
        text.includes(searchTerm);


      const matchesPricing =
        pricing === "all" ||
        cardPricing === pricing;


      if (matchesSearch && matchesPricing) {

        card.style.display = "flex";
        visibleCards.push(card);

      } else {

        card.style.display = "none";

      }

    });


    sortCards(visibleCards);


    toolCount.textContent =
      `${visibleCards.length} ${
        visibleCards.length === 1
          ? "tool"
          : "tools"
      }`;


    if (visibleCards.length === 0) {

      noResults.style.display = "block";
      toolsGrid.style.display = "none";

    } else {

      noResults.style.display = "none";
      toolsGrid.style.display = "grid";

    }

  }


  /* SORT */

  function sortCards(visibleCards) {

    const sort =
      sortTools.value;


    visibleCards.sort((a, b) => {

      if (sort === "name") {

        return a.dataset.name
          .localeCompare(b.dataset.name);

      }


      if (sort === "rating") {

        return (
          parseFloat(b.dataset.rating) -
          parseFloat(a.dataset.rating)
        );

      }


      return 0;

    });


    visibleCards.forEach(card => {
      toolsGrid.appendChild(card);
    });

  }


  /* RESET */

  function resetFilters() {

    searchInput.value = "";
    pricingFilter.value = "all";
    sortTools.value = "featured";

    filterTools();

  }


  searchInput.addEventListener(
    "input",
    filterTools
  );

  pricingFilter.addEventListener(
    "change",
    filterTools
  );

  sortTools.addEventListener(
    "change",
    filterTools
  );

  resetBtn.addEventListener(
    "click",
    resetFilters
  );


  /* FAQ */

  const faqItems =
    document.querySelectorAll(".faq-item");


  faqItems.forEach(item => {

    const question =
      item.querySelector(".faq-question");

    const answer =
      item.querySelector(".faq-answer");


    question.addEventListener("click", () => {

      const isActive =
        item.classList.contains("active");


      faqItems.forEach(otherItem => {

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


  /* INITIAL LOAD */

  filterTools();

});
