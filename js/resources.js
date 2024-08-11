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

    // Handle blog post "Read More" clicks
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const postId = this.getAttribute('data-post');
            showBlogPost(postId);
        });
    });

    function showBlogPost(postId) {
        // In a real application, you would fetch the full blog post content
        // For this example, we'll just show a modal with placeholder content
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Blog Post ${postId}</h2>
                <p>This is the full content of blog post ${postId}. In a real application, this would be fetched from a server or database.</p>
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

    // Handle whitepaper downloads
    const downloadButtons = document.querySelectorAll('.download-whitepaper');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const whitepaperTitle = this.parentElement.querySelector('h3').textContent;
            alert(`Thank you for your interest in "${whitepaperTitle}". The download would start in a real application.`);
        });
    });

    // Handle event registrations
    const registerButtons = document.querySelectorAll('.register-event');
    registerButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const eventTitle = this.parentElement.querySelector('h3').textContent;
            showEventRegistration(eventTitle);
        });
    });

    function showEventRegistration(eventTitle) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Register for ${eventTitle}</h2>
                <form id="event-registration-form">
                    <input type="text" placeholder="Full Name" required>
                    <input type="email" placeholder="Email" required>
                    <button type="submit" class="btn btn-primary">Register</button>
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

        const form = modal.querySelector('#event-registration-form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert(`Thank you for registering for "${eventTitle}". You would receive a confirmation email in a real application.`);
            document.body.removeChild(modal);
        });
    }

    // Handle newsletter subscription
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}! You would receive a confirmation email in a real application.`);
            this.reset();
        });
    }

    // Optional: Add a search functionality for resources
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search resources...';
    searchInput.classList.add('resource-search');
    document.querySelector('#resources-hero .container').appendChild(searchInput);

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const allResources = document.querySelectorAll('.blog-card, .whitepaper-card, .event-item');
        
        allResources.forEach(resource => {
            const text = resource.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                resource.style.display = '';
            } else {
                resource.style.display = 'none';
            }
        });
    });
});