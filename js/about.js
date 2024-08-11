document.addEventListener('DOMContentLoaded', function() {
    // Animate sections on scroll
    const fadeElems = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    fadeElems.forEach(elem => observer.observe(elem));

    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.3}s`;
    });

    // Team member hover effect
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', () => {
            member.style.transform = 'scale(1.05)';
            member.style.transition = 'transform 0.3s ease';
        });
        member.addEventListener('mouseleave', () => {
            member.style.transform = 'scale(1)';
        });
    });

    // Value card click to show more info
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach(card => {
        card.addEventListener('click', () => {
            const value = card.querySelector('h3').textContent;
            const description = card.querySelector('p').textContent;
            showValueDetails(value, description);
        });
    });

    function showValueDetails(value, description) {
        const modal = document.createElement('div');
        modal.classList.add('value-details-modal');
        
        modal.innerHTML = `
            <div class="value-details-content">
                <span class="close-details">&times;</span>
                <h2>${value}</h2>
                <p>${description}</p>
                <div class="value-details-example"></div>
            </div>
        `;

        document.body.appendChild(modal);

        // Add an example or additional information based on the value
        const exampleContainer = modal.querySelector('.value-details-example');
        switch(value) {
            case "Innovation":
                exampleContainer.innerHTML = "<h4>How we innovate:</h4><ul><li>Regular hackathons and innovation challenges</li><li>Collaboration with research institutions</li><li>Continuous learning and development programs</li></ul>";
                break;
            case "Collaboration":
                exampleContainer.innerHTML = "<h4>Our collaborative approach:</h4><ul><li>Cross-functional project teams</li><li>Partnerships with local and international organizations</li><li>Open-source contributions to the AI community</li></ul>";
                break;
            case "Inclusivity":
                exampleContainer.innerHTML = "<h4>Ensuring inclusive AI:</h4><ul><li>Diverse datasets representing all demographics</li><li>Accessibility features in all our solutions</li><li>Community outreach programs for AI education</li></ul>";
                break;
            case "Integrity":
                exampleContainer.innerHTML = "<h4>Our commitment to ethical AI:</h4><ul><li>Transparent AI decision-making processes</li><li>Regular ethical audits of our AI systems</li><li>Adherence to international AI ethics guidelines</li></ul>";
                break;
        }

        const closeButton = modal.querySelector('.close-details');
        closeButton.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optional: Add a parallax effect to the hero section
    window.addEventListener('scroll', () => {
        const heroSection = document.getElementById('about-hero');
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
});