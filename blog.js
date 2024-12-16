
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


  
