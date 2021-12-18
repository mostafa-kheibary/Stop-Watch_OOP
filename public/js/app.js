const text = document.querySelector(".display h2");
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const container = document.querySelector('.top');
const icon = document.querySelector('#icon');

// the watch Object
function Watch() {
    let count = 0.0;
    let Timmer;
    let isplay = false;
    function stop() {
        clearInterval(Timmer);
        isplay = false;
    }
    function IconChange() {
        if (icon.className.includes('pause')) {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
        else {
            icon.classList.add('fa-pause');
            icon.classList.remove('fa-play');
        }
    }
    function ColorChange() {
        start.classList.toggle('active-color');
        container.classList.toggle('active-color');
    }
    // start method
    this.start = function () {
        IconChange();
        ColorChange();
        if (!isplay) {
            Timmer = setInterval(() => {
                count += 0.01;
                text.innerHTML = count.toFixed(2);
            }, 10);
            isplay = true;
        }
        else {
            // for click again to stop
            stop();
        }
    }
    // reset method
    this.reset = function () {
        count = 0;
        text.innerHTML = count;
    }
}
const StopWatch = new Watch();


// event for reset and start stop watch
start.addEventListener('click', () => {
    StopWatch.start();
});
reset.addEventListener('click', () => {
    StopWatch.reset()
});