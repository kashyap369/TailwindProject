// function for the mobile navigation
function showmenu(){
    const Mobnav = document.getElementById('mob_nav');
    Mobnav.classList.toggle('hidden');
}


// function for the popup box
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const countdownElement = document.getElementById("countdown");

    let countdown = 7; // Start from 5 seconds

    const timer = setInterval(() => {
        countdown--; // Decrease the countdown by 1
        countdownElement.textContent = countdown; // Update the countdown display

        if (countdown <= 0) {
            clearInterval(timer); // Stop the timer when countdown reaches 0
            popup.style.display = 'none'; // Hide the popup
        }
    }, 1000); // Run this code every 1000 milliseconds (1 second)
});
