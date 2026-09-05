document.addEventListener("DOMContentLoaded", () => {

  const searchInput =
    document.getElementById("searchInput");

  const pricingFilter =
    document.getElementById("pricingFilter");

  const sortTools =
    document.getElementById("sortTools");

  const toolsGrid =
    document.getElementById("toolsGrid");

  const toolCards =
    Array.from(
      document.querySelectorAll(".tool-card")
    );

  const toolCount =
    document.getElementById("toolCount");

  const noResults =
    document.getElementById("noResults");

  const resetBtn =
    document.getElementById("resetBtn");

  const menuToggle =
    document.getElementById("menuToggle");

  const mainNav =
    document.getElementById("mainNav");


  /* =========================
     MOBILE MENU
  ========================= */

  menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("active");

    menuToggle.textContent =
      mainNav.classList.contains("active")
        ? "✕"
        : "☰";

  });


  /* =========================
     UPDATE TOOLS
  ========================= */

  function updateTools() {

    const searchTerm =
      searchInput.value
        .toLowerCase()
        .trim();

    const pricing =
      pricingFilter.value;

    const sort =
      sortTools.value;


    let cards = [...toolCards];


    /* =========================
       SORT
    ========================= */

    if (sort === "name") {

      cards.sort((a, b) => {

        return a.dataset.name.localeCompare(
          b.dataset.name
        );

      });

    }


    if (sort === "rating") {

      cards.sort((a, b) => {

        return (
          parseFloat(b.dataset.rating) -
          parseFloat(a.dataset.rating)
        );

      });

    }


    /* =========================
       REORDER
    ========================= */

    cards.forEach(card => {

      toolsGrid.appendChild(card);

    });


    /* =========================
       FILTER
    ========================= */

    let visibleCount = 0;


    cards.forEach(card => {

      const name =
        card.dataset.name.toLowerCase();

      const text =
        card.innerText.toLowerCase();

      const cardPricing =
        card.dataset.pricing;


      const matchesSearch =
        name.includes(searchTerm) ||
        text.includes(searchTerm);


      let matchesPricing = true;


      if (pricing === "free") {

        matchesPricing =
          cardPricing === "free";

      }


      if (pricing === "paid") {

        matchesPricing =
          cardPricing === "paid";

      }


      if (
        matchesSearch &&
        matchesPricing
      ) {

        card.style.display = "flex";

        visibleCount++;

      } else {

        card.style.display = "none";

      }

    });


    /* =========================
       COUNT
    ========================= */

    toolCount.textContent =
      visibleCount;


    /* =========================
       NO RESULTS
    ========================= */

    if (visibleCount === 0) {

      noResults.style.display =
        "block";

    } else {

      noResults.style.display =
        "none";

    }

  }


  /* =========================
     EVENTS
  ========================= */

  searchInput.addEventListener(
    "input",
    updateTools
  );


  pricingFilter.addEventListener(
    "change",
    updateTools
  );


  sortTools.addEventListener(
    "change",
    updateTools
  );


  /* =========================
     RESET
  ========================= */

  resetBtn.addEventListener(
    "click",
    () => {

      searchInput.value = "";

      pricingFilter.value =
        "all";

      sortTools.value =
        "featured";

      updateTools();

    }
  );


  /* =========================
     INITIAL LOAD
  ========================= */

  updateTools();

});
