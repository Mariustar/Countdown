import Timer from "./timer.js";

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

// @ts-ignore
const perimeter = Math.round(circle.getAttribute("r") * 2 * Math.PI);
// @ts-ignore
circle.setAttribute("stroke-dasharray", perimeter);

let currentOffset = 0;

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer Started!");
  },
  onTick() {
    circle.setAttribute("stroke-dashoffset", currentOffset);
    currentOffset -= perimeter / this.durationInput.value;
    if (currentOffset <= -perimeter) {
      currentOffset = -perimeter;
    }
  },
  onComplete() {
    console.log("Completed!");
  },
  onPause() {
    console.log("Paused!");
  },
});
