const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.country-card');

searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.toLowerCase();

    cards.forEach(card => {

        const text = card.textContent.toLowerCase();

        if (text.includes(keyword)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }

    });
});
