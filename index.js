import Timer from "./timer.js";

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

// @ts-ignore
const perimeter = Math.round(circle.getAttribute("r") * 2 * Math.PI);
// @ts-ignore
circle.setAttribute("stroke-dasharray", perimeter);

let duration = 0;

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
    console.log("Started");
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      // @ts-ignore
      (perimeter * timeRemaining) / duration - perimeter,
    );
  },
  onComplete() {
    console.log("Completed!");
  },
  onPause() {
    console.log("Paused!");
  },
});
