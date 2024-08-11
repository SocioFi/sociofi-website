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

    // Handle "Learn More" clicks for solution cards
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const industry = this.closest('.solution-card').getAttribute('data-industry');
            showIndustryDetails(industry);
        });
    });

    function showIndustryDetails(industry) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>${industry.charAt(0).toUpperCase() + industry.slice(1)} Solutions</h2>
                <p>Detailed information about our AI solutions for the ${industry} industry would be displayed here.</p>
                <ul>
                    <li>Solution 1 for ${industry}</li>
                    <li>Solution 2 for ${industry}</li>
                    <li>Solution 3 for ${industry}</li>
                </ul>
                <a href="#" class="btn btn-primary">Request a Demo</a>
            </div>
        `;
        document.body.appendChild(modal);

        const closeBtn = modal.querySelector('.close');
        closeBtn.onclick = function() {
            document.body.removeChild(modal);
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                document.body.removeChild(modal);
            }
        };
    }

    // Key Features Interaction
    const featureCards = document.querySelectorAll('.feature-card');
    const featureDetails = document.querySelectorAll('.feature-detail');

    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            const feature = this.getAttribute('data-feature');
            showFeatureDetails(feature);
        });
    });

    function showFeatureDetails(feature) {
        featureCards.forEach(card => {
            card.classList.remove('active');
            if (card.getAttribute('data-feature') === feature) {
                card.classList.add('active');
            }
        });

        featureDetails.forEach(detail => {
            detail.classList.remove('active');
            if (detail.id === `${feature}-detail`) {
                detail.classList.add('active');
            }
        });
    }

    // Automatic feature rotation
    let currentFeatureIndex = 0;
    const features = ['nlp', 'analytics', 'automation', 'security'];

    function rotateFeatures() {
        currentFeatureIndex = (currentFeatureIndex + 1) % features.length;
        showFeatureDetails(features[currentFeatureIndex]);
    }

    let rotationInterval = setInterval(rotateFeatures, 5000); // Rotate every 5 seconds

    // Pause rotation on hover
    const featuresSection = document.getElementById('ai-features');
    featuresSection.addEventListener('mouseenter', () => {
        clearInterval(rotationInterval);
    });
    featuresSection.addEventListener('mouseleave', () => {
        rotationInterval = setInterval(rotateFeatures, 5000);
    });

    // Touch swipe functionality for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    const featuresCarousel = document.querySelector('.features-carousel');

    featuresCarousel.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    featuresCarousel.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchStartX - touchEndX > 50) {
            // Swipe left
            currentFeatureIndex = (currentFeatureIndex + 1) % features.length;
        } else if (touchEndX - touchStartX > 50) {
            // Swipe right
            currentFeatureIndex = (currentFeatureIndex - 1 + features.length) % features.length;
        }
        showFeatureDetails(features[currentFeatureIndex]);
    }

    // Handle case study clicks
    const caseStudyButtons = document.querySelectorAll('.read-case-study');
    caseStudyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const caseStudyTitle = this.closest('.case-study-card').querySelector('h3').textContent;
            showCaseStudy(caseStudyTitle);
        });
    });

    function showCaseStudy(title) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>${title}</h2>
                <p>Detailed case study content would be displayed here, including challenge, solution, and results.</p>
                <h3>Challenge</h3>
                <p>Description of the challenge faced by the client...</p>
                <h3>Solution</h3>
                <p>How SocioFi's AI solution addressed the challenge...</p>
                <h3>Results</h3>
                <p>Quantifiable results and improvements achieved...</p>
            </div>
        `;
        document.body.appendChild(modal);

        const closeBtn = modal.querySelector('.close');
        closeBtn.onclick = function() {
            document.body.removeChild(modal);
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                document.body.removeChild(modal);
            }
        };
    }

    // Handle consultation request
    const consultationButton = document.getElementById('request-consultation');
    if (consultationButton) {
        consultationButton.addEventListener('click', function(e) {
            e.preventDefault();
            showConsultationForm();
        });
    }

    function showConsultationForm() {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Request a Consultation</h2>
                <form id="consultation-form">
                    <input type="text" placeholder="Full Name" required>
                    <input type="email" placeholder="Email" required>
                    <input type="tel" placeholder="Phone Number" required>
                    <select required>
                        <option value="">Select Industry</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance and Banking</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="education">Education</option>
                    </select>
                    <textarea placeholder="Tell us about your AI needs" required></textarea>
                    <button type="submit" class="btn btn-primary">Submit Request</button>
                </form>
            </div>
        `;
        document.body.appendChild(modal);

        const closeBtn = modal.querySelector('.close');
        closeBtn.onclick = function() {
            document.body.removeChild(modal);
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                document.body.removeChild(modal);
            }
        };

        const form = modal.querySelector('#consultation-form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your consultation request. We will contact you shortly to schedule a meeting.');
            document.body.removeChild(modal);
        });
    }

    // Case study slider functionality
    const caseStudySlider = document.querySelector('.case-study-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    caseStudySlider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - caseStudySlider.offsetLeft;
        scrollLeft = caseStudySlider.scrollLeft;
    });

    caseStudySlider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    caseStudySlider.addEventListener('mouseup', () => {
        isDown = false;
    });

    caseStudySlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - caseStudySlider.offsetLeft;
        const walk = (x - startX) * 3;
        caseStudySlider.scrollLeft = scrollLeft - walk;
    });
});