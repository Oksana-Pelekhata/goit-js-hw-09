import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const TIME_INTERVAL = 1000

let startTime = Date.now()
let selectedTime = 0;

const startBtn = document.querySelector('[data-start]')
const daysRemain = document.querySelector('[data-days]')
const hoursRemain = document.querySelector('[data-hours]')
const minsRemain = document.querySelector('[data-minutes]')
const secsRemain = document.querySelector('[data-seconds]')
const divEl = document.querySelector('.timer');
const divElAll = divEl.querySelectorAll('.field');
const inputEl = document.querySelector('#datetime-picker')

divEl.style.cssText =
  'font-size: 20px; font-weight: bolder; display: flex; justify-content: space-around; margin-top: 50px;';

divElAll.forEach(
  e =>
    (e.style.cssText =
      'display: flex; flex-direction: column; align-items: center;')
);

inputEl.style.cssText = `font-size: 20px; margin-right: 50px; padding: 8px; text-align: center;`

startBtn.style.cssText = `font-size: 20px; padding: 8px; text-align: center; min-width: 80px;`
startBtn.addEventListener('click', handleStartBtnClick)
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        selectedTime = selectedDates[0].getTime();
        console.log(selectedDates[0]);
        if (selectedTime < startTime) {
            alert("Please choose a date in the future")
            return
        }
        startBtn.disabled = false
  },
};

flatpickr("#datetime-picker", options);

function handleStartBtnClick() {
     const counterInc = setInterval(() => {
            const currentTime = Date.now()
         const deltaTime = selectedTime - currentTime
         if (deltaTime < 0) {
             clearInterval(counterInc)
             return
         }
         const { days, hours, minutes, seconds } = convertMs(deltaTime)
         console.log(`${days}:${hours}:${minutes}:${seconds}`)
         updateClockface({ days, hours, minutes, seconds })
         startBtn.disabled = true;
        }, TIME_INTERVAL)
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function updateClockface({ days, hours, minutes, seconds }) {
    daysRemain.textContent = `${days}`;
    hoursRemain.textContent = `${hours}`
    minsRemain.textContent = `${minutes}`
    secsRemain.textContent = `${seconds}`
}
