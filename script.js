let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let lapCount = 0;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const laps = document.getElementById("laps");

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 1);
        startStopBtn.innerHTML = "Stop";
        running = true;
    } else {
        clearInterval(tInterval);
        running = false;
        startStopBtn.innerHTML = "Start";
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    display.innerHTML = "00:00:00";
    startStopBtn.innerHTML = "Start";
    laps.innerHTML = "";
    lapCount = 0;
}

function lap() {
    if (running) {
        lapCount++;
        const lapTime = document.createElement("li");
        lapTime.innerHTML = `Lap ${lapCount}: ${display.innerHTML}`;
        laps.appendChild(lapTime);
    }
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    display.innerHTML = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
}

startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", lap);
