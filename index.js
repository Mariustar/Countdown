import Timer from "./timer.js";

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const resetButton = document.querySelector("#reset");
const circle = document.querySelector("circle");

// @ts-ignore
const perimeter = Math.round(circle.getAttribute("r") * 2 * Math.PI);
// @ts-ignore
circle.setAttribute("stroke-dasharray", perimeter);

let duration = 0;
let timeElapsed = 0;
let counter = 0;

const timer = new Timer(durationInput, startButton, pauseButton, resetButton, {
  onStart(totalDuration) {
    duration = totalDuration;
    if (counter >= 1) {
      duration = totalDuration + timeElapsed;
    }
  },
  onTick(timeRemaining) {
    const strokeValue = (perimeter * timeRemaining) / duration - perimeter;
    circle.setAttribute("stroke-dashoffset", strokeValue);
    timeElapsed = duration - timeRemaining;
  },
  onComplete() {
    circle.setAttribute("stroke-dashoffset", 0);
  },
  onPause() {
    counter += 1;
  },
  onReset() {
    circle.setAttribute("stroke-dashoffset", 0);
    durationInput.value = 0;
    counter = 0;
  },
  onChange() {
    counter = 0;
  },
});
