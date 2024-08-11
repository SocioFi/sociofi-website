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

    // Partner card click functionality
    const partnerCards = document.querySelectorAll('.partner-card');
    partnerCards.forEach(card => {
        card.addEventListener('click', function() {
            const partnerId = this.getAttribute('data-partner');
            showPartnerDetails(partnerId);
        });
    });

    function showPartnerDetails(partnerId) {
        // In a real application, you would fetch the partner details from a server
        // For this example, we'll just show a modal with placeholder content
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>${document.querySelector(`[data-partner="${partnerId}"] h3`).textContent}</h2>
                <p>Detailed information about our partnership and collaborative projects would be displayed here.</p>
                <ul>
                    <li>Joint Project 1</li>
                    <li>Joint Project 2</li>
                    <li>Future Collaborations</li>
                </ul>
                <a href="#" class="btn btn-primary">Visit Partner Website</a>
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

    // Spotlight read more functionality
    const readMoreSpotlight = document.querySelector('.read-more-spotlight');
    if (readMoreSpotlight) {
        readMoreSpotlight.addEventListener('click', function(e) {
            e.preventDefault();
            showSpotlightDetails();
        });
    }

    function showSpotlightDetails() {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>BanglaAI Solutions Partnership</h2>
                <p>Detailed information about our partnership with BanglaAI Solutions, including:</p>
                <ul>
                    <li>History of the partnership</li>
                    <li>Key achievements in Bangla NLP</li>
                    <li>Ongoing research projects</li>
                    <li>Future collaboration plans</li>
                </ul>
                <p>This partnership has been instrumental in advancing AI capabilities for the Bangla language, benefiting various sectors across Bangladesh.</p>
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

    // Success stories slider functionality
    const storySlider = document.querySelector('.story-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    storySlider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - storySlider.offsetLeft;
        scrollLeft = storySlider.scrollLeft;
    });

    storySlider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    storySlider.addEventListener('mouseup', () => {
        isDown = false;
    });

    storySlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - storySlider.offsetLeft;
        const walk = (x - startX) * 3;
        storySlider.scrollLeft = scrollLeft - walk;
    });

    // API details functionality
    const apiDetailButtons = document.querySelectorAll('.api-details');
    apiDetailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const apiName = this.parentElement.querySelector('h3').textContent;
            showApiDetails(apiName);
        });
    });

    function showApiDetails(apiName) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>${apiName}</h2>
                <p>Technical details and documentation for the ${apiName} would be displayed here, including:</p>
                <ul>
                    <li>API endpoints</li>
                    <li>Authentication methods</li>
                    <li>Request/response formats</li>
                    <li>Code examples</li>
                    <li>Usage limits and pricing</li>
                </ul>
                <a href="#" class="btn btn-primary">Download Documentation</a>
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

    // Partner with us functionality
    const partnerWithUsButton = document.getElementById('partner-with-us');
    if (partnerWithUsButton) {
        partnerWithUsButton.addEventListener('click', function(e) {
            e.preventDefault();
            showPartnershipForm();
        });
    }

    function showPartnershipForm() {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Become a Partner</h2>
                <form id="partnership-form">
                    <input type="text" placeholder="Company Name" required>
                    <input type="text" placeholder="Contact Person" required>
                    <input type="email" placeholder="Email" required>
                    <input type="tel" placeholder="Phone Number" required>
                    <select required>
                        <option value="">Select Partnership Type</option>
                        <option value="technology">Technology Partner</option>
                        <option value="research">Research Partner</option>
                        <option value="industry">Industry Partner</option>
                    </select>
                    <textarea placeholder="Tell us about your company and partnership goals" required></textarea>
                    <button type="submit" class="btn btn-primary">Submit Partnership Request</button>
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

        const form = modal.querySelector('#partnership-form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your partnership request. We will review your information and contact you soon.');
            document.body.removeChild(modal);
        });
    }
});