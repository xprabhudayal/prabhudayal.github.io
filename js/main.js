// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize smooth scrolling for anchor links
    initSmoothScroll();

    // Initialize header behavior (transparent to solid on scroll)
    initHeaderScroll();

    // Initialize hover animations for project cards
    initProjectCardAnimations();
});

// Smooth scrolling when clicking on anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header behavior - changes on scroll
function initHeaderScroll() {
    const header = document.querySelector('header');

    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Project card hover animations
function initProjectCardAnimations() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hovered');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('hovered');
        });
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Add mobile menu functionality if screen width is small
window.addEventListener('resize', () => {
    const navLinks = document.querySelector('.nav-links');

    if (window.innerWidth > 768 && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    }
});
