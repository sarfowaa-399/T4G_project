   //js for footer valid email subscription
   document.addEventListener("DOMContentLoaded", () => {
    const subscribeButton = document.querySelector(".subscribe button");
    const emailInput = document.querySelector(".subscribe input");

    subscribeButton.addEventListener("click", () => {
        const email = emailInput.value.trim(); // Get email input value and trim whitespace

        // Check if the email is not empty and has a valid format
        if (email === "") {
            alert("Please enter your email address.");
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
        } else {
            alert(`Thank you for subscribing with: ${email}`);
            emailInput.value = ""; // Clear the input field after success
        }
    });

    // Email validation function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
        return emailRegex.test(email);
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Function to display error messages
    function showError(input, message) {
        const inputGroup = input.parentElement; // Target the parent div (.input-grp)
        let errorElement = inputGroup.querySelector(".error-message");

        // If no error element exists, create one
        if (!errorElement) {
            errorElement = document.createElement("small");
            errorElement.className = "error-message";
            inputGroup.appendChild(errorElement);
        }
        errorElement.style.color = "red";
        errorElement.textContent = message;

        // Add error styling to the input field
        input.style.borderColor = "red";
    }

    // Function to clear error messages
    function clearError(input) {
        const inputGroup = input.parentElement;
        const errorElement = inputGroup.querySelector(".error-message");
        if (errorElement) {
            errorElement.remove();
        }
        input.style.borderColor = "#ccc"; // Reset input border color
    }

    // Function to validate email format
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    

    // Event Listener for form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the form from submitting by default

        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        let isFormValid = true;

        // Validate email field
        if (emailValue === "") {
            showError(emailInput, "Email is required.");
            isFormValid = false;
        } else if (!isValidEmail(emailValue)) {
            showError(emailInput, "Please enter a valid email address.");
            isFormValid = false;
        } else {
            clearError(emailInput);
        }

        // Validate password field
        if (passwordValue === "") {
            showError(passwordInput, "Password is required.");
            isFormValid = false;
        } else {
            clearError(passwordInput);
        }

        // If the form is valid, simulate a successful login
        if (isFormValid) {
            alert("Login successful!"); // Replace this with your backend logic
            form.reset(); // Clear the form
        }
    });

    // Event Listeners to clear error on input
    emailInput.addEventListener("input", () => clearError(emailInput));
    passwordInput.addEventListener("input", () => clearError(passwordInput));
});
