let start1 = document.querySelector('#start');
let stop = document.querySelector('#stop');
let restart = document.querySelector('#restart');
let sec = document.querySelector('#sec');
let count = 0;
let intervalId;

function start() {
    intervalId = setInterval(function () {
        sec.textContent = count;
        count++;
    }, 1000);
}

start1.onclick = start;

stop.onclick = () => {
    clearInterval(intervalId);
}

restart.onclick = () => {
    sec.textContent = count = 0;
}




