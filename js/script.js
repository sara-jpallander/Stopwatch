// 1. Variables for buttons

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

// 2. Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// 4.0 Variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// 5. Variables for holding the setInterval method & timer status

let timerInterval = null;    // To stop the timer from starting as soon
                             // as the page loads.
let timerStatus = "stopped"; // For when we want to pause the timer.

/* 3.0 Stopwatch function - letting the application know when to increment 
to the next number, from seconds to minutes to hours. */

function stopWatch() {

    seconds++; // 3.1 seconds start incremeneting

    if(seconds / 60 === 1) { // 3.2 When seconds reach 60
        seconds = 0;         // reset seconds to 0 and start
        minutes++;           // incrementing minutes.

        if(minutes / 60 === 1) {
            minutes = 0;    // 3.3 When minutes reach 60
            hours++;        // reset minutes to 0 and start
        }                   // incrementing hours,
    }

    if(seconds < 10) {                             // 4.1 If seconds are
        leadingSeconds = "0" + seconds.toString(); // less than 10, add
    } else {                                       // and extra zero, 
        leadingSeconds = seconds;                  // otherwise leave it
    }                                              // as is. 

    if(minutes < 10) {
        leadingMinutes = "0" + minutes.toString(); // Same for minutes
    } else {
        leadingMinutes = minutes;
    }

    if(hours < 10) {
        leadingHours = "0" + hours.toString();    // Same for hours
    } else {
        leadingHours = hours;
    }

    let displayTimer = document.getElementById('timer').innerText = 
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds; 
    /* 3.4 to display the timer in action, in the browser */
}   // 4.2 Change variables to leadingHrs/Mins/Secs to display all zeros
                            

// 6.0 Adding functionality to the start/pause button.

startStopBtn.addEventListener('click', function(){
    /* When the play button is clicked the timeInterval will start the
    the timer and change the play icon to the pause icon. 
    The timerStatus will then be overwritten as started. */
    if(timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";
        /* timerStatus starts as stopped because we set it as such
         when we declared the variable further up so the timer isn't 
         set off when the page is loaded. */
    } else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
        /* When you press the pause button the interval will be
        cleared (0) - meaning the timer is now stopped and the pause icon
        changes back to the play icon again. */
    }
});

// 6.1 Adding functionality to the reset button.

resetBtn.addEventListener('click', function() {
    
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
});