/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("active");

    if (mainNav.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


/* =========================
   SEARCH
========================= */

const searchToggle = document.getElementById("searchToggle");
const searchBox = document.getElementById("searchBox");
const siteSearch = document.getElementById("siteSearch");

searchToggle.addEventListener("click", () => {

    searchBox.classList.toggle("active");

    if (searchBox.classList.contains("active")) {
        siteSearch.focus();
    }

});


/* =========================
   SEARCH BUTTON
========================= */

const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {

    const query = siteSearch.value.trim();

    if (!query) {
        siteSearch.focus();
        return;
    }

    /*
       Later we can connect this to:
       /search/?q=query

       or create a real search system.
    */

    window.location.href =
        "/search/?q=" + encodeURIComponent(query);

});


/* =========================
   ENTER KEY SEARCH
========================= */

siteSearch.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        searchButton.click();
    }

});


/* =========================
   COPY PROMPT
========================= */

const copyButtons =
    document.querySelectorAll(".copy-btn");

copyButtons.forEach(button => {

    button.addEventListener("click", async () => {

        const prompt = button.dataset.prompt;

        try {

            await navigator.clipboard.writeText(prompt);

            const originalText = button.textContent;

            button.textContent = "✓ Copied!";

            setTimeout(() => {
                button.textContent = originalText;
            }, 1500);

        } catch (error) {

            alert("Unable to copy prompt.");

        }

    });

});


/* =========================
   NEWSLETTER
========================= */

const newsletterForm =
    document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email =
        newsletterForm.querySelector("input").value;

    if (!email) return;

    alert(
        "Thanks for subscribing to AIPromptEng!"
    );

    newsletterForm.reset();

});
