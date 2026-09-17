const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

    const keyword = searchInput.value.toLowerCase();

    const sections = document.querySelectorAll(".region-section");

    sections.forEach(section => {

        const cards = section.querySelectorAll(".country-card");

        let visibleCount = 0;

        cards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(keyword)) {
                card.style.display = "";
                visibleCount++;
            } else {
                card.style.display = "none";
            }

        });

        section.style.display =
            visibleCount > 0 ? "" : "none";

    });

});
``