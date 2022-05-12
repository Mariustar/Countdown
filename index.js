class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    startButton.addEventListener("click", this.start)
  }

  start() {
    console.log(this);

  }

  // importantMethodToCall() {
  //   console.log("Important thing was called");
  // }

}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);

// console.log(this);
// const printThis = () => {
//   console.log(this);
// }


const colors= {
  printColor() {
    console.log(this);
  },
  "Marius": "Ionut"
}

const randomObject = {
  a : 1
}

randomObject.printColor = colors.printColor;

colors.printColor();
randomObject.printColor();