import * as phi from '../../lib/js/phi/phi';

function resize() {
    const box = document.getElementById('box');
    const device = {
        width: document.body.scrollWidth,
        height: document.documentElement.clientHeight
    };
    const rect = phi.similarGoldenRect(device.width, device.height);

    box.style.width = rect.x + 'px';
    box.style.height = rect.y + 'px';
    box.style.top = ((device.height - rect.y) / 2) + 'px';
    box.style.left = ((device.width - rect.x) / 2) + 'px';
    box.style.outline = (device.height + device.width) + 'px solid black';

    const squares = document.getElementsByClassName('square');
    Array.prototype.forEach.call(squares, (square) => {
        if (device.height > device.width) {
            square.classList.remove('height');
            square.classList.add('width');
            square.style.width = '100%';
            square.style.height = square.offsetWidth + 'px';
        } else {
            square.classList.remove('width');
            square.classList.add('height');
            square.style.height = '100%';
            square.style.width = square.offsetHeight + 'px';
        }
    });
}

export function toggleActive(element, active) {
    console.log('toggleActive run');
    console.log(element);
    // if (active) {
    //     element.classList.add('active');
    //     element.classList.remove('inactive');
    // } else if (active === null || active === undefined) {
    //     if (element.classList.contains('active')) {
    //         element.classList.add('inactive');
    //         element.classList.remove('active');
    //     } else {
    //         element.classList.add('active');
    //         element.classList.remove('inactive');
    //     }
    // } else {
    //     element.classList.add('inactive');
    //     element.classList.remove('active');
    // }
}

window.addEventListener('resize', resize);
resize();
