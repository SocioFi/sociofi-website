document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('inquiry-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields.');
                return;
            }

            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // If validation passes, you would typically send the form data to a server here
            // For this example, we'll just log it to the console and show a success message
            console.log('Form submitted:', { name, email, subject, message });
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }

    // Email validation helper function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Animate form labels when input is focused
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.previousElementSibling.classList.add('active');
        });

        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.previousElementSibling.classList.remove('active');
            }
        });
    });

    // Smooth scroll to form when "Contact Us" button is clicked
    const contactButtons = document.querySelectorAll('a[href="#contact-form"]');
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#contact-form').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Load Google Maps API and initialize map (you would need to replace 'YOUR_API_KEY' with an actual Google Maps API key)
    // function initMap() {
    //     const mapDiv = document.getElementById('google-map');
    //     const map = new google.maps.Map(mapDiv, {
    //         center: { lat: 23.8103, lng: 90.4125 }, // Coordinates for Dhaka, Bangladesh
    //         zoom: 15
    //     });
    //     const marker = new google.maps.Marker({
    //         position: { lat: 23.8103, lng: 90.4125 },
    //         map: map,
    //         title: 'SocioFi Technology Office'
    //     });
    // }

    // Uncomment and use the following if you decide to implement Google Maps
    // const script = document.createElement('script');
    // script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    // script.async = true;
    // document.head.appendChild(script);
});