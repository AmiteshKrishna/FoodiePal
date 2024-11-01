document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Grab form field values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (name === '' || email === '' || subject === '' || message === '') {
            alert('Please fill in all the fields.');
            return;
        }

        // Email format validation (basic)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If validation passes, show a success message
        alert('Thank you, ' + name + '! Your message has been sent.');

        // Clear the form fields after successful submission
        form.reset();

        // Optionally, return to the same page (already stays on the same page due to preventing default behavior)
        window.location.href = window.location.href;  // Reloads the current page
    });
});