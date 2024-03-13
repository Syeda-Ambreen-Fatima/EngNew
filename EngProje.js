document.addEventListener("DOMContentLoaded", function(event) {
    // Get the welcome message element
    var welcomeMessage = document.getElementById('welcomeMessage');

    // Add event listener for scroll event
    window.addEventListener('scroll', function() {
        // Check the scroll position
        if (window.scrollY > 190) {
            // If scrolled down more than 200px, hide the welcome message
            welcomeMessage.style.opacity = '0';
        } else {
            // If not scrolled down or scrolled up, show the welcome message
            welcomeMessage.style.opacity = '1';
        }
    });

    // Wait for a short delay before showing the message
    setTimeout(function() {
        // Slide the message down
        welcomeMessage.style.top = "100px"; // Adjust the final position as needed
    }, 1000); // Adjust the delay time as needed
});