var hour = 0;
var min = 0;
var sec = 0;
var milsec = 0;
var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var milsecHeading = document.getElementById("milsec");
var interval;


function time() {
    
    milsec++
    milsecHeading.innerHTML = milsec;
    if (milsec >= 100) {
        sec++
        secHeading.innerHTML = sec
        milsec = 0;
    } else if (sec >=60) {
        sec = 0;
        min++
        minHeading.innerHTML = min;
        sec = 0;
    milsec = 0;
    secondHeading.innerHTML = sec;
    milsecHeading.innerHTML = milsec;
    } else if (min >=60) {
        hour++
        min = 0;
        hourHeading.innerHTML = hour;
        min = 0;
    sec = 0;
    milsec = 0;
    minHeading.innerHTML = min;
    secondHeading.innerHTML = sec;
    milsecHeading.innerHTML = milsec;
    }
}

function start() {
    interval = setInterval(time, 10);
    document.getElementById("start").setAttribute("disabled", "");
}
function stop() {
    document.getElementById("start").removeAttribute("disabled");
    clearInterval(interval);
}
function reset() {
    stop()
    hour = 0;
    min = 0;
    sec = 0;
    milsec = 0;
    hourHeading.innerHTML = hour;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    milsecHeading.innerHTML = milsec;

}

