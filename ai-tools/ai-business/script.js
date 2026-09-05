document.addEventListener("DOMContentLoaded", function () {

  const searchInput = document.getElementById("toolSearch");
  const pricingFilter = document.getElementById("pricingFilter");
  const sortTools = document.getElementById("sortTools");
  const toolsGrid = document.getElementById("toolsGrid");
  const noResults = document.getElementById("noResults");

  let cards = Array.from(
    document.querySelectorAll(".tool-card")
  );


  /* SEARCH + FILTER */

  function filterTools() {

    const searchTerm = searchInput.value
      .toLowerCase()
      .trim();

    const pricing = pricingFilter.value;

    let visibleCount = 0;

    cards.forEach(card => {

      const name = card.dataset.name.toLowerCase();
      const category = card.dataset.category.toLowerCase();
      const cardPricing = card.dataset.pricing;

      const matchesSearch =
        name.includes(searchTerm) ||
        category.includes(searchTerm);

      const matchesPricing =
        pricing === "all" ||
        cardPricing === pricing;

      if (matchesSearch && matchesPricing) {
        card.style.display = "";
        visibleCount++;
      } else {
        card.style.display = "none";
      }

    });

    noResults.style.display =
      visibleCount === 0 ? "block" : "none";
  }


  /* SORT */

  function sortCards() {

    const sortValue = sortTools.value;

    const sortedCards = [...cards];

    if (sortValue === "rating") {

      sortedCards.sort(
        (a, b) =>
          Number(b.dataset.rating) -
          Number(a.dataset.rating)
      );

    }

    if (sortValue === "name") {

      sortedCards.sort(
        (a, b) =>
          a.dataset.name.localeCompare(
            b.dataset.name
          )
      );

    }

    if (sortValue === "featured") {

      const originalOrder = [
        "HubSpot",
        "Salesforce",
        "Zoho",
        "Shopify",
        "Intercom",
        "Gong",
        "QuickBooks",
        "Notion"
      ];

      sortedCards.sort(
        (a, b) =>
          originalOrder.indexOf(a.dataset.name) -
          originalOrder.indexOf(b.dataset.name)
      );

    }

    sortedCards.forEach(card => {
      toolsGrid.appendChild(card);
    });

    cards = sortedCards;

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
    sortCards
  );


  /* FAQ */

  const faqItems =
    document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {

    const question =
      item.querySelector(".faq-question");

    question.addEventListener("click", () => {

      faqItems.forEach(otherItem => {

        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }

      });

      item.classList.toggle("active");

    });

  });


  /* MOBILE MENU */

  const menuToggle =
    document.getElementById("menuToggle");

  const mainNav =
    document.getElementById("mainNav");

  menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("active");

    menuToggle.textContent =
      mainNav.classList.contains("active")
        ? "✕"
        : "☰";

  });


  /* CLOSE MOBILE MENU AFTER CLICK */

  mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("active");
      menuToggle.textContent = "☰";

    });

  });

});
