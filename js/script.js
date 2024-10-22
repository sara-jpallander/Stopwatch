// 1. Variables for buttons

const startStopBtn = document.querySelector('startStopBtn');
const resetBtn = document.querySelector('resetBtn');

// 2. Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// 4.0 Variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

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
                                           

/* window.setInterval(stopWatch, 1000); */