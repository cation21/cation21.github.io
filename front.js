const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let timerInterval;
let remainingMinutes = 25;
let remainingSeconds = 0;

startButton.addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            remainingSeconds--;

            if (remainingSeconds < 0) {
                remainingSeconds = 59;
                remainingMinutes--;
            }

            if (remainingMinutes < 0) {
                clearInterval(timerInterval);
                alert('Pomodoro session complete!');

                remainingMinutes = 25;
                remainingSeconds = 0;
            }

            minutes.textContent = remainingMinutes;
            seconds.textContent = remainingSeconds.toString().padStart(2, '0');
        }, 1000);
    }
});

stopButton.addEventListener('click', () => {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;

    remainingMinutes = 25;
    remainingSeconds = 0;

    minutes.textContent = remainingMinutes;
    seconds.textContent = remainingSeconds.toString().padStart(2, '0');
});
