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

const timer = new Timer(durationInput, startButton, pauseButton, resetButton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    const strokeValue = (perimeter * timeRemaining) / duration - perimeter;
    circle.setAttribute("stroke-dashoffset", strokeValue);
  },
  onComplete() {
    circle.setAttribute("stroke-dashoffset", perimeter);
  },
  onReset() {
    durationInput.value = 0;
  },
});
