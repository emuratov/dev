// Плавный скроллинг

var scrollMenu = anim(300);

function anim(duration) {
    var temp;
    return function (sel) {
        cancelAnimationFrame(temp);
        var start = performance.now();
        var from = window.pageYOffset || document.documentElement.scrollTop,
            to = document.querySelector(sel).getBoundingClientRect().top;
        requestAnimationFrame(function step(timestamp) {
            var progress = (timestamp - start) / duration;
            1 <= progress && (progress = 1);
            window.scrollTo(0, from + to * progress | 0);
            1 > progress && (temp = requestAnimationFrame(step))
        })
    }
};


// скрываем стрелочку


var element = document.querySelector('#menu');
var Visible = function (target) {
    var targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        },
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom &&
        targetPosition.right > windowPosition.left &&
        targetPosition.left < windowPosition.right) {
        // true
        console.log(document.getElementById('back'));
        document.getElementById('back').style.opacity = 0;
        // console.log('видно')
    } else {
        document.getElementById('back').style.opacity = 1;
        // console.log(' не видно')
    }
    ;
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    Visible(element);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible(element);
