const startBtn = document.querySelector('.start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
let time = 20;
const timeEl = document.querySelector('#time');
const board = document.querySelector('.board');
let score = 0;
const colors = ['#48d010', '#dcd109', '#0ad970', '#05ffe4', '#0043ad', '#ad0096', '#974c0b'];




startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up');
})

timeList.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove()
        createRandomCircle()

    }
})


function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle();
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else if (time > 0) {
        let current = --time;
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }

}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`;
    timeEl.parentNode.classList.add('hide')
}

function createRandomCircle() {
    const circle = document.createElement('div');

    circle.classList.add('circle');



    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();

    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);


    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    setColor(circle)
    board.append(circle)


}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;

}

function getRandomColor() {
    const index =Math.floor(Math.random() * colors.length);
    return colors[index]
}










