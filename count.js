// Set the target date and time (format: month/day/year hour:minute:second)
var targetDate = new Date("12/31/2023 23:59:59");

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Update the countdown timer
function updateCountdown() {
    var currentDate = new Date();
    var timeDifference = targetDate.getTime() - currentDate.getTime();

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the countdown timer
    document.getElementById("days").textContent = days + "d";
    document.getElementById("hours").textContent = hours + "h";
    document.getElementById("minutes").textContent = minutes + "m";
    document.getElementById("seconds").textContent = seconds + "s";
}