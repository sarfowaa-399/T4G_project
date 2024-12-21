document.addEventListener("DOMContentLoaded", function () {
    // Use a loop to keep prompting the user until they provide a valid name
    let friend = "";

    while (!friend || friend.trim() === "") {
        friend = prompt("Please enter your name to continue:");
        if (!friend || friend.trim() === "") {
            alert("Name is required to proceed!");
        }
    }
    //Display a personalized welcome message
    alert(`Hi ${friend.trim()}, welcome to Answer Business Service ABS. Feel free to explore our various pages. Hope to get in touch 👋👋`);
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

    
             // js for hero section
    document.addEventListener("DOMContentLoaded", () => {
        const heroSliderTexts = [
            "At Answers Business Services, we specialize in streamlining business registration processes for entrepreneurs and companies across Ghana.",
            "Our dedicated team assists with a wide array of registration-related services, such as renewing sole proprietorships, amending company information, filing annual returns, reprinting lost documents, and offering consultancy to help startups grow.",
            "With a commitment to customer satisfaction and efficiency, we make it easy for clients to establish and expand their businesses, freeing them from complex administrative processes.",
            "Our remote registration services ensure convenient, reliable, and hassle-free support for clients wherever they are."
        ];
    
        const sliderElement = document.querySelector(".hero-text-slider");
    
        if (sliderElement) {
            let currentIndex = 0;
            let wordIndex = 0;
            let currentWords = [];
            let interval;
    
            // Function to display text word by word
            function displayWordByWord() {
                if (wordIndex < currentWords.length) {
                    sliderElement.textContent += currentWords[wordIndex] + " ";
                    wordIndex++;
                } else {
                    clearInterval(interval); // Clear interval after completing the sentence
                    setTimeout(nextText, 2000); // Pause before moving to the next sentence
                }
            }
    
            // Function to update to the next text
            function nextText() {
                sliderElement.textContent = ""; // Clear current text
                currentIndex = (currentIndex + 1) % heroSliderTexts.length; // Move to next text
                currentWords = heroSliderTexts[currentIndex].split(" "); // Split into words
                wordIndex = 0;
                interval = setInterval(displayWordByWord, 300); // Start showing words
            }
    
            // Initialize the first sentence
            currentWords = heroSliderTexts[currentIndex].split(" ");
            interval = setInterval(displayWordByWord, 300); // Show words every 300ms
        }
    });
    
    

    

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


  

 









