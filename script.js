document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = document.querySelector(e.target.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
