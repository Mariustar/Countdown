export default class Timer {
  constructor(durationInput, startButton, pauseButton, resetButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.resetButton = resetButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
      this.onPause = callbacks.onPause;
      this.onReset = callbacks.onReset;
      this.onChange = callbacks.onChange;
    }
    startButton.addEventListener("click", this.start);
    pauseButton.addEventListener("click", this.pause);
    resetButton.addEventListener("click", this.reset);
    durationInput.addEventListener("input", this.onChange);
  }

  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.intervalId = setInterval(this.tick, 20);
    this.startButton.classList.add("unclickable");
  };

  pause = () => {
    if (this.onPause) {
      this.onPause(this.timeRemaining);
    }
    clearInterval(this.intervalId);
    this.startButton.classList.remove("unclickable");
  };

  reset = () => {
    if (this.onReset) {
      this.onReset();
    }
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining -= 0.02;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
      if (this.onChange) {
        this.onChange();
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
