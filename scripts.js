document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simple validation checks
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
        } else {
            alert("Thank you for your message, " + name + ". We will get back to you shortly.");
            form.reset(); // Reset the form after submission
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.we(String(email).toLowerCase());
    }
});
