// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Sticky header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#fff';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = '#fff';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Read More functionality
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const serviceCard = this.parentElement;
        const paragraph = serviceCard.querySelector('p');
        
        if (paragraph.classList.contains('expanded')) {
            paragraph.classList.remove('expanded');
            this.textContent = 'Read More';
        } else {
            paragraph.classList.add('expanded');
            this.textContent = 'Read Less';
        }
    });
});

// Simple form validation for contact form (if added later)
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault
