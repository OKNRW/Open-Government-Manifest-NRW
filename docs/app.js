document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.sub-accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const accordion = header.parentElement;
            accordion.classList.toggle('active');
        });
    });
});