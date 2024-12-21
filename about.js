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

    
  document.addEventListener("DOMContentLoaded", () => {
    // Select all team member cards
    const teamMembers = document.querySelectorAll(".team-member, .member");

    teamMembers.forEach(member => {
        const image = member.querySelector("img");

        // Hide images by default
        image.style.display = "none";

        // Add click event to toggle visibility
        member.addEventListener("click", () => {
            if (image.style.display === "none") {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
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


