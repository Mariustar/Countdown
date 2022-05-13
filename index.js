class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    startButton.addEventListener("click", this.start);
    pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    this.tick();
    this.intervalID = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.intervalID);
  };

  tick = () => {
    const timeRemaning = parseFloat(this.durationInput.value);
    this.durationInput.value = timeRemaning - 1;
  };
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
