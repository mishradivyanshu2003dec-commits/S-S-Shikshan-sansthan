// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form submission (alert for demo)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! We will contact you soon.');
});