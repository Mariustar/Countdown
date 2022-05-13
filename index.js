import Timer from "./timer.js";

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer Started!");
  },
  onTick() {
    console.log("1 Second has elapsed!");
  },
  onComplete() {
    console.log("Completed!");
  },
});
