import AnalogClock from './AnalogClock.js';

document.querySelectorAll('.analog-clock').forEach(AnalogClock);

function clockLoad() {
    setInterval(AnalogClock, 1000)
}
function init() {
    window.addEventListener("load", clockLoad)
}
init()