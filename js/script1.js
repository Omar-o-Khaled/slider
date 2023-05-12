// 1.setInterval
// 2.click number
let root = document.getElementById('root');
let imgdiv = [...document.getElementsByClassName('imgdiv')];
let circle = [...document.getElementsByClassName('circle')];
let left = document.getElementById('left');
let right = document.getElementById('right');
let time = document.querySelector('.time')

let activenum = 0;

left.addEventListener('click', leftFunction);
right.addEventListener('click', rightFunction);

function leftFunction() {
    if (activenum > 0) {
        removeAllActive();
        activenum--
        imgdiv[activenum].classList.add('active');
        circle[activenum].classList.add('activeCircle');
    } else {
        activenum = imgdiv.length - 1;
        removeAllActive();
        imgdiv[activenum].classList.add('active');
        circle[activenum].classList.add('activeCircle');
    }
    changeBodyImg(imgdiv[activenum].firstElementChild.src)
}

function rightFunction() {
    if (activenum < imgdiv.length - 1) {
        removeAllActive();
        activenum++;
        imgdiv[activenum].classList.add('active');
        circle[activenum].classList.add('activeCircle');
    } else {
        activenum = 0;
        removeAllActive();
        imgdiv[activenum].classList.add('active');
        circle[activenum].classList.add('activeCircle');
    }
    changeBodyImg(imgdiv[activenum].firstElementChild.src)
}

function removeAllActive() {
    for (let i = 0; i < imgdiv.length; i++) {
        imgdiv[i].classList.remove('active');
    }
    circle.map((ele) => {
        ele.classList.remove('activeCircle');
    });
}

function changeBodyImg(url) {
    document.body.style.backgroundImage = `url(${url})`
}
function getTime() {

    let date = new Date();
    let hour = date.toLocaleString('default', { hour: "2-digit" })
    let minute = date.toLocaleString('default', { minute: "2-digit" })
    let sec = date.toLocaleString('default', { second: "2-digit" })

    time.innerHTML = ''
    time.append(hour, ':', minute, ':', sec)
}
setInterval(() => {
    getTime()
}, 1000)

document.addEventListener('click', (e) => {
    if (e.target.className == 'circle') {
        activenum = +(e.target.innerHTML - 1)
        removeAllActive()
        imgdiv[activenum].classList.add('active');
        circle[activenum].classList.add('activeCircle');
        changeBodyImg(imgdiv[activenum].firstElementChild.src)
    }
})
function scrollSlice() {
    let changeImg = setInterval(() => {
        removeAllActive()
        rightFunction()
    }, 3000)

    root.addEventListener('mouseover', () => {
        clearInterval(changeImg)
    })
}
scrollSlice()
root.addEventListener('mouseleave', () => {
    scrollSlice()
})
