let section = document.querySelector('.name-page');
let text = document.querySelector('.name-page h1');

function rain() {
    let amount = 100;

    for (let i = 0; i < amount; i++) {
        let drop = document.createElement('i');
        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * section.clientWidth);
        let delay = Math.random() * -20;

        drop.style.width = 0.2 + size + 'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 11 + Math.random() * -10 + 's';

        section.appendChild(drop);
        i++
    }
}

rain()