//   declaring varibles
var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var heading = document.getElementById("title");
var Interval;
var Interval1;

//   catching onclick event on the start button

buttonStart.onclick = function () {
  clearInterval(Interval);

  // calling start timer funstion on each miliseconds

  Interval = setInterval(startTimer, 10);

  heading.setAttribute("class", "animate__animated animate__flash");
};

// clearing abover setes inteval on onclick event of stop button

buttonStop.onclick = function () {
  clearInterval(Interval);
  heading.setAttribute("class", "animate__animated animate__fadeOutDown");
  setTimeout(() => {
    heading.setAttribute("class", "");
  }, 1000);
};

//   clering intevral and reseting the the varible to starting

buttonReset.onclick = function () {
  clearInterval(Interval);
  clearInterval(Interval1);
  heading.setAttribute("class", "animate__animated animate__rotateIn");
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
};

//   upadating values

function startTimer() {
  tens++;

  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}
