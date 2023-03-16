const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')

const TIME_INTERVAL = 1000

let intervalId = null;

startBtn.addEventListener('click', handleStartBtnClick)
stopBtn.addEventListener('click',handleStoptBtnClick )

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function handleStartBtnClick() {
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor()
    }, TIME_INTERVAL);
    startBtn.disabled = true;
}

function handleStoptBtnClick() {
    clearInterval(intervalId)
    startBtn.disabled = false;
}

