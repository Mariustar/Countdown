class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
      this.onPause = callbacks.onPause;
    }
    startButton.addEventListener("click", this.start);
    pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    this.tick();
    this.intervalID = setInterval(this.tick, 1000);
  };

  pause = () => {
    if (this.onPause) {
      this.onPause();
    }
    clearInterval(this.intervalID);
  };

  tick = () => {
    if (this.onTick) {
      this.onTick();
    }
    if (this.timeRemaining <= 1) {
      this.pause();
      this.onComplete();
      this.timeRemaining = 0;
    } else {
      this.timeRemaining -= 1;
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}

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
  onPause() {
    console.log("Timer is paused!");
  },
});
