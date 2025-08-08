let milliseconds = 0;
let totalSeconds;
let intervalId=null

function timer() {
    let my = window.prompt("Enter your timer (in minutes): ");
    totalSeconds = parseInt(my) * 60;
    milliseconds = 0;

    if (intervalId) clearInterval(intervalId); 
    start();
}
function start() {
    intervalId = setInterval(function () {
        if (milliseconds === 0) {
            if (totalSeconds === 0) {
                clearInterval(intervalId);
                totalSeconds = 0;
                milliseconds = 0;
            } else {
                totalSeconds--;
                milliseconds = 99;
            }
        } else {
            milliseconds--;
        }
        document.getElementsByClassName("child1")[0].innerText = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        document.getElementsByClassName("child2")[0].innerText = String(totalSeconds % 60).padStart(2, '0');
        document.getElementsByClassName("child3")[0].innerText = String(milliseconds).padStart(2, '0');
    }, 10); 
}

document.getElementsByClassName("btn b2")[0].addEventListener('click', function () {
    clearInterval(intervalId);

    milliseconds = 0;
    totalSeconds = 0;
    document.getElementsByClassName("child1")[0].innerText = "00";
    document.getElementsByClassName("child2")[0].innerText = "00";
    document.getElementsByClassName("child3")[0].innerText = "00";
});
