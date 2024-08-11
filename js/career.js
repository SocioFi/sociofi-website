document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('application-modal');
    const applyButtons = document.querySelectorAll('.apply-btn');
    const closeBtn = document.querySelector('.close');
    const applicationForm = document.getElementById('application-form');
    const jobTitleSpan = document.getElementById('job-title');

    // Open modal when Apply Now button is clicked
    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const jobTitle = this.getAttribute('data-job');
            jobTitleSpan.textContent = jobTitle;
            modal.style.display = 'block';
        });
    });

    // Close modal when (x) is clicked
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        };
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Handle form submission
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const resume = document.getElementById('resume').value;
            const coverLetter = document.getElementById('cover-letter').value.trim();

            if (!name || !email || !phone || !resume || !coverLetter) {
                alert('Please fill in all fields.');
                return;
            }

            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (!isValidPhone(phone)) {
                alert('Please enter a valid phone number.');
                return;
            }

            // If validation passes, you would typically send the form data to a server here
            // For this example, we'll just log it to the console and show a success message
            console.log('Application submitted:', { 
                job: jobTitleSpan.textContent,
                name, 
                email, 
                phone, 
                resume: resume.split('\\').pop(), // Get just the file name
                coverLetter 
            });
            
            alert('Thank you for your application. We will review it and get back to you soon!');
            modal.style.display = 'none';
            applicationForm.reset();
        });
    }

    // Email validation helper function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Phone validation helper function
    function isValidPhone(phone) {
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        return phoneRegex.test(phone);
    }

    // Animate process steps
    const processSteps = document.querySelectorAll('.process-step');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });

    processSteps.forEach(step => observer.observe(step));

    // Add hover effect to process steps
    processSteps.forEach(step => {
        step.addEventListener('mouseenter', () => {
            step.style.transform = 'scale(1.05)';
            step.style.transition = 'transform 0.3s ease';
        });
        step.addEventListener('mouseleave', () => {
            step.style.transform = 'scale(1)';
        });
    });

    // Read More functionality
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const jobListing = this.closest('.job-listing');
            const jobDetails = jobListing.querySelector('.job-details');
            
            if (jobDetails.style.display === 'none') {
                jobDetails.style.display = 'block';
                this.textContent = 'Read Less';
            } else {
                jobDetails.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });

    // Add click event to show step details
    processSteps.forEach(step => {
        step.addEventListener('click', () => {
            const stepNumber = step.getAttribute('data-step');
            const stepTitle = step.querySelector('h3').textContent;
            const stepDescription = step.querySelector('p').textContent;
            
            showStepDetails(stepNumber, stepTitle, stepDescription);
        });
    });

    function showStepDetails(stepNumber, title, description) {
        const modal = document.createElement('div');
        modal.classList.add('step-details-modal');
        
        modal.innerHTML = `
            <div class="step-details-content">
                <span class="close-details">&times;</span>
                <h2>Step ${stepNumber}: ${title}</h2>
                <p>${description}</p>
                <div class="step-details-tips"></div>
            </div>
        `;

        document.body.appendChild(modal);

        // Add some tips based on the step
        const tipsContainer = modal.querySelector('.step-details-tips');
        switch(stepNumber) {
            case "1":
                tipsContainer.innerHTML = "<h4>Tips for a Great Application:</h4><ul><li>Tailor your resume to the job description</li><li>Highlight your relevant skills and experiences</li><li>Proofread your application carefully</li></ul>";
                break;
            case "2":
                tipsContainer.innerHTML = "<h4>Preparing for the Screening:</h4><ul><li>Research SocioFi Technology and our projects</li><li>Prepare to discuss your background and motivations</li><li>Have some questions ready about the role and company</li></ul>";
                break;
            case "3":
                tipsContainer.innerHTML = "<h4>Acing the Technical Assessment:</h4><ul><li>Review fundamental concepts in your field</li><li>Practice coding problems if applicable</li><li>Read the instructions carefully and manage your time</li></ul>";
                break;
            case "4":
                tipsContainer.innerHTML = "<h4>Team Interview Best Practices:</h4><ul><li>Prepare examples of your past work and challenges overcome</li><li>Be ready to discuss how you work in a team</li><li>Show enthusiasm and ask thoughtful questions</li></ul>";
                break;
            case "5":
                tipsContainer.innerHTML = "<h4>After the Final Decision:</h4><ul><li>Respond promptly to any offer or follow-up</li><li>If selected, prepare for onboarding</li><li>If not selected, ask for feedback for future improvement</li></ul>";
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

    // Job listing hover effect
    const jobListings = document.querySelectorAll('.job-listing');
    jobListings.forEach(listing => {
        listing.addEventListener('mouseenter', () => {
            listing.style.transform = 'scale(1.05)';
        });
        listing.addEventListener('mouseleave', () => {
            listing.style.transform = 'scale(1)';
        });
    });

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
});