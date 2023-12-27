const countdownDisplay = document.getElementById("countdown-display");
// Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.

function renderCountdown() {
    const christmasMonth = 11; // December is 11 in JavaScript months (0-indexed)
    const christmasDate = 25;
    
    const today = new Date();
    const currentYear = today.getFullYear();

    const christmas = new Date(currentYear, christmasMonth, christmasDate);

    // Check if Christmas has already passed this year
    if (today.getMonth() === christmasMonth && today.getDate() > christmasDate) {
        christmas.setFullYear(currentYear + 1); // Set it to next year
    }

    const remainingTime = christmas - today;

    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;

    const remainingDays = Math.floor(remainingTime / oneDay);
    const remainingHours = Math.floor((remainingTime % oneDay) / oneHour);
    const remainingMinutes = Math.floor((remainingTime % oneHour) / oneMinute);
    const remainingSeconds = Math.floor((remainingTime % oneMinute) / oneSecond);

    // Display remaining time in countdownDisplay
    countdownDisplay.textContent = `${remainingDays} days : ${remainingHours} hours : ${remainingMinutes} minutes : ${remainingSeconds} seconds`;
}
renderCountdown();