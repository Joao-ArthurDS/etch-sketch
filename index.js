let x;
const grid = document.querySelector('div#grid');

x = 16;

grid.style['display'] = 'flex';
grid.style['flex-wrap'] = 'wrap';

const newWidth = (window.innerWidth / x) -2; //minus 2 to set the border at 1px
const newHeight = (window.innerHeight / x) -2;

for (let i = 0; i < x; i++){
    for (let j = 0; j < x; j++){
        const div = document.createElement('div');
        div.classList.add('square');

        div.style.width = `${newWidth}px`;
        div.style.height = `${newHeight}px`;
        div.innerHTML = `${i} - ${j}`
        grid.appendChild(div);
    }
}

//window.addEventListener('resize', resizeElement); //maybe