const sh = document.querySelector("#second");
const mh = document.querySelector("#minute");
const hh = document.querySelector("#hour");

function setDate() {
    const now = new Date();
    const secondsHandDegrees = (now.getSeconds() / 60) * 360;
    const minuteHandDegrees = (now.getMinutes() / 60) * 360;
    const hoursHandDegrees = (now.getHours() / 12) * 360;

    console.log(secondsHandDegrees, minuteHandDegrees, hoursHandDegrees);

    sh.style.transform = `rotate(${secondsHandDegrees + 90}deg)`;
    mh.style.transform = `rotate(${minuteHandDegrees + 90}deg)`;
    hh.style.transform = `rotate(${hoursHandDegrees + 90}deg)`;
}

// Loop every second
setInterval(setDate, 1000);