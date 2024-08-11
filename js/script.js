document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    

    // Dynamic Hero Background
    const hero = document.getElementById('hero');
    const sectorCards = document.querySelectorAll('.sector-card');
    let lastSelectedSector = null;

    sectorCards.forEach(card => {
        card.addEventListener('click', function() {
            const sector = this.getAttribute('data-sector');
            updateHeroBackground(sector);
        });
    });

    function updateHeroBackground(sector) {
        if (lastSelectedSector) {
            lastSelectedSector.classList.remove('active');
        }

        const selectedCard = document.querySelector(`.sector-card[data-sector="${sector}"]`);
        selectedCard.classList.add('active');
        lastSelectedSector = selectedCard;

        hero.style.backgroundImage = `url('images/${sector}-hero-bg.jpg')`;
    }

    // Horizontal scroll for sector cards
    const sectorScrollContainer = document.querySelector('.sector-scroll-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    sectorScrollContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - sectorScrollContainer.offsetLeft;
        scrollLeft = sectorScrollContainer.scrollLeft;
    });

    sectorScrollContainer.addEventListener('mouseleave', () => {
        isDown = false;
    });

    sectorScrollContainer.addEventListener('mouseup', () => {
        isDown = false;
    });

    sectorScrollContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sectorScrollContainer.offsetLeft;
        const walk = (x - startX) * 2;
        sectorScrollContainer.scrollLeft = scrollLeft - walk;
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Submission Handling
    const contactForm = document.getElementById('inquiry-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For this example, we'll just log it to the console
            console.log('Form submitted');
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }

    // Dynamic Copyright Year
    const currentYear = new Date().getFullYear();
    document.querySelector('.footer-bottom p').innerHTML = `&copy; ${currentYear} SocioFi Technology. All rights reserved.`;

    // Intersection Observer for Animations
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });
});

// Function to animate counters
function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 2000; // Animation duration in milliseconds
    const step = (target / duration) * 10; // Update every 10ms

    let current = 0;
    const timer = setInterval(() => {
        current += step;
        el.textContent = Math.round(current);
        if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
        }
    }, 10);
}

// Animate counters when they come into view
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));


function updateHeroBackground(sector) {
    const sectorBackgrounds = {
        'healthcare': 'healthcare-bg.jpg',
        'finance': 'finance-bg.jpg',
        'agriculture': 'agriculture-bg.jpg',
        'education': 'education-bg.jpg',
        'retail': 'retail-bg.jpg',
        'travel': 'travel-bg.jpg',
        'manufacturing': 'manufacturing-bg.jpg',
        'legal': 'legal-bg.jpg',
        'logistics': 'logistics-bg.jpg',
        'default': 'default-hero-bg.jpg'
    };

    const bgImage = sectorBackgrounds[sector] || sectorBackgrounds['default'];
    hero.style.backgroundImage = `url('images/${bgImage}')`;
}
