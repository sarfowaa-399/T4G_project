document.addEventListener("DOMContentLoaded", function () {
    // Use a loop to keep prompting the user until they provide a valid name
    let friend = "";

    while (!friend || friend.trim() === "") {
        friend = prompt("Please enter your name to continue:");
        if (!friend || friend.trim() === "") {
            alert("Name is required to proceed!");
        }
    }

     // Display a personalized welcome message
    alert(`Hi ${friend.trim()}, welcome to Answer Business Service ABS. Feel free to explore our various pages. Hope to get in touch 👋👋`);
});

  //blog function
document.addEventListener("DOMContentLoaded", function () {
    // Select all articles and the Load More button
    const articles = document.querySelectorAll('.blog-content article');
    const loadMoreBtn = document.getElementById('loadMore');

    // Initially hide all articles except the first
    for (let i = 1; i < articles.length; i++) {
        articles[i].style.display = 'none';
    }

    let isVisible = false;

    // Add click event to toggle visibility
    loadMoreBtn.addEventListener('click', function () {
        if (isVisible) {
            // Hide articles except the first
            for (let i = 1; i < articles.length; i++) {
                articles[i].style.display = 'none';
            }
            loadMoreBtn.textContent = 'Load More';
        } else {
            // Show all articles
            articles.forEach(article => article.style.display = 'block');
            loadMoreBtn.textContent = 'Hide Articles';
        }
        isVisible = !isVisible; // Toggle state
    });
});


// Highlight the "About Us" Text Dynamically
document.addEventListener("DOMContentLoaded", () => {
    const aboutHighlight = document.getElementById("about-highlight");
  
    setTimeout(() => {
      aboutHighlight.style.color = "#3498db";
      aboutHighlight.style.fontSize = "1.5rem";
    }, 2000); // Add effect after 2 seconds
  
    // Meet the Team Hover Alerts
    const teamMembers = document.querySelectorAll(".team-member, .member");
  
    teamMembers.forEach((member) => {
      member.addEventListener("click", () => {
        const name = member.querySelector("h3").innerText;
        const role = member.querySelector("p").innerText;
  
        alert(`You clicked on ${name}, ${role}`);
      });
    });
  });


    //js for service page
    // document.addEventListener("DOMContentLoaded", () => {
    //     // FAQ Toggle Functionality
    //     const faqsHeaders = document.querySelectorAll(".faqs h3");
    
    //     faqsHeaders.forEach(header => {
    //         header.addEventListener("click", () => {
    //             const answer = header.nextElementSibling;
    
    //             // Toggle a class for showing/hiding the answer
    //             if (answer.classList.contains("show")) {
    //                 answer.classList.remove("show");
    //                 answer.style.display = "none";
    //             } else {
    //                 answer.classList.add("show");
    //                 answer.style.display = "block";
    //             }
    //         });
    //     });
    

    // Auto-scroll Testimonials Slider
    const slider = document.querySelector(".testimonial-slider");
    let scrollAmount = 0;

    setInterval(() => {
        slider.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
        scrollAmount += 320; // Adjust this to fit your card width
        if (scrollAmount >= slider.scrollWidth) {
            scrollAmount = 0;
        }
    }, 3000);
});

   //js for login
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


  

 









