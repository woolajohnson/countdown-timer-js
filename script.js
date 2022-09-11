// Selections

const days = document.querySelector('.number-day');
const hours = document.querySelector('.number-hour');
const minutes = document.querySelector('.number-minute');
const seconds = document.querySelector('.number-second');

// Computations

function countDown() {
    // targetDay - currentDay = Output

    const targetDay = new Date('January 1, 2023 00:00:00').getTime();
    const currentDay = new Date().getTime();

    const outPutDay = targetDay - currentDay;

    // equivalent milliseconds to days, hours, minutes, seconds

    const textSeconds = 1000;
    const textMinutes = textSeconds * 60;
    const textHours = textMinutes * 60;
    const textDays = textHours * 24;

    // compute each value

    const finalDays = Math.floor(outPutDay / textDays);
    const finalHours = Math.floor((outPutDay % textDays) / textHours);
    const finalMinutes = Math.floor((outPutDay % textHours) / textMinutes);
    const finalSeconds = Math.floor((outPutDay % textMinutes) / textSeconds);

    // display the numbers

    days.innerText = finalDays;
    hours.innerText = finalHours;
    minutes.innerText = finalMinutes;
    seconds.innerText = finalSeconds;
}

setInterval(countDown, 1000);