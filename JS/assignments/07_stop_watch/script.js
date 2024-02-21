let timer = 0;
let stopwatchInterval;

const startStopwatch = () => {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(showStopwatch, 10);
  }
};

const pauseStopwatch = () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
};

const resetStopwatch = () => {
  pauseStopwatch();
  timer = 0;
  document.querySelector(".time").textContent = "00 : 00 : 00";
};

const showStopwatch = () => {
  const minute = Math.floor(timer / 100 / 60);
  const second = Math.floor((timer / 100) % 60);
  const msecond = Math.floor(timer % 100);
  timer++;

  document.querySelector(".time").textContent = `
    ${minute.toString().padStart(2, "0")} : 
    ${second.toString().padStart(2, "0")} : 
    ${msecond.toString().padStart(2, "0")} 
    `;
};
