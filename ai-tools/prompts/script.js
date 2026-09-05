document.addEventListener("DOMContentLoaded", function () {

  const searchInput =
    document.getElementById("promptSearch");

  const categoryButtons =
    document.querySelectorAll(".category-btn");

  const promptCards =
    Array.from(document.querySelectorAll(".prompt-card"));

  const noResults =
    document.getElementById("noResults");

  let currentCategory = "all";


  /* FILTER PROMPTS */

  function filterPrompts() {

    const searchTerm =
      searchInput.value.toLowerCase().trim();

    let visibleCount = 0;

    promptCards.forEach(card => {

      const title =
        card.dataset.title.toLowerCase();

      const category =
        card.dataset.category.toLowerCase();

      const description =
        card.querySelector(".prompt-description")
          .textContent
          .toLowerCase();

      const matchesSearch =
        title.includes(searchTerm) ||
        category.includes(searchTerm) ||
        description.includes(searchTerm);

      const matchesCategory =
        currentCategory === "all" ||
        category === currentCategory;

      if (matchesSearch && matchesCategory) {

        card.style.display = "";

        visibleCount++;

      } else {

        card.style.display = "none";

      }

    });


    noResults.style.display =
      visibleCount === 0 ? "block" : "none";

  }


  /* SEARCH */

  searchInput.addEventListener(
    "input",
    filterPrompts
  );


  /* CATEGORY */

  categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

      categoryButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      this.classList.add("active");

      currentCategory =
        this.dataset.category;

      filterPrompts();

    });

  });


  /* COPY PROMPT */

  const copyButtons =
    document.querySelectorAll(".copy-btn");

  copyButtons.forEach(button => {

    button.addEventListener("click", async function () {

      const prompt =
        this.dataset.prompt;

      try {

        await navigator.clipboard.writeText(prompt);

        const originalText =
          this.textContent;

        this.textContent =
          "✓ Copied!";

        this.classList.add("copied");

        setTimeout(() => {

          this.textContent =
            originalText;

          this.classList.remove("copied");

        }, 1800);

      } catch (error) {

        const textArea =
          document.createElement("textarea");

        textArea.value = prompt;

        document.body.appendChild(textArea);

        textArea.select();

        document.execCommand("copy");

        textArea.remove();

        const originalText =
          this.textContent;

        this.textContent =
          "✓ Copied!";

        this.classList.add("copied");

        setTimeout(() => {

          this.textContent =
            originalText;

          this.classList.remove("copied");

        }, 1800);

      }

    });

  });


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


  /* CLOSE MENU */

  mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("active");

      menuToggle.textContent = "☰";

    });

  });


  /* INITIAL FILTER */

  filterPrompts();

});
