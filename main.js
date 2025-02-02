document.querySelector('.mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const mode = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
    document.querySelector('.mode-toggle').textContent = mode;
});
