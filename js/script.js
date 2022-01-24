
let h = document.querySelector('.h'),
    m = document.querySelector('.m'),
    s = document.querySelector('.s'),
    minutes = document.querySelector('.minutes'),
    hours = document.querySelector('.hours');

function clock() {
    let time = new Date(),
        hour = time.getHours() * 30,
        min = time.getMinutes() * 6,
        sec = time.getSeconds() * 6;


    h.style.transform = `rotate(${hour}deg)`
    m.style.transform = `rotate(${min}deg)`
    s.style.transform = `rotate(${sec}deg)`
    minutes.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    hours.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()

    setTimeout(() => {
        clock()
    }, 1000);
}
clock()

let tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem')
tabsItem.forEach((el, index) => {
    el.addEventListener('click', function (e) {
        for (let i = 0; i < tabsItem.length; i++) {
            tabsContentItem[i].classList.remove('active')
            tabsItem[i].classList.remove('active')
        }
        this.classList.add('active')
        tabsContentItem[index].classList.add('active')
    })

});




let stopWatchhours = document.querySelector('.stopwatch__hours'),
    stopWatminutes = document.querySelector('.stopwatch__minutes'),
    stopWatchseconds = document.querySelector('.stopwatch__seconds'),
    btn = document.querySelector('.stopwatch__btn'),
    indicator = document.querySelector('.tabsLink__span');

btn.addEventListener('click', function () {
    if(btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        indicator.classList.add('active')
    }
else if(btn.innerHTML == 'stop') {
    btn.innerHTML = 'clear'
    indicator.classList.remove('active')
    indicator.classList.add('active_clear')
}
    
    else if(btn.innerHTML === 'clear'){ 
    btn.innerHTML = 'start'
    indicator.classList.remove('active_clear')
}
    
})

function secunds() {
    if(btn.innerHTML == 'stop') {
        stopWatchseconds.innerHTML++
        if(stopWatchseconds.innerHTML > 59) {
            stopWatchseconds.innerHTML = 0
            stopWatminutes.innerHTML++
            if(stopWatminutes.innerHTML > 59){
                stopWatminutes.innerHTML = 0
                stopWatchhours.innerHTML++
            }
        }
        
    }else if(btn.innerHTML == 'start'){
        stopWatchseconds.innerHTML = 0
        stopWatminutes.innerHTML = 0
        stopWatchhours.innerHTML = 0
    }
    
    setTimeout(secunds, 1000);
}

secunds()
