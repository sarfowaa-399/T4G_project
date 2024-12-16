document.addEventListener("DOMContentLoaded", () => {
    const faqHeaders = document.querySelectorAll(".faqs h3");

    faqHeaders.forEach((header) => {
        header.addEventListener("click", () => {
            const answer = header.nextElementSibling; // Select the corresponding answer

            // Toggle "show" class
            answer.classList.toggle("show");

            // Optional: Collapse other open answers
            document.querySelectorAll(".faq-answer").forEach((faq) => {
                if (faq !== answer) {
                    faq.classList.remove("show");
                }
            });
        });
    });
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


  
