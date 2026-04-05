let x;
const grid = document.querySelector('div.grid');

grid.style['display'] = 'flex';
grid.style['flex-wrap'] = 'wrap';

for (let i = 0; i <= 16; i++){
    const div = document.createElement('div');
    
    grid.appendChild(div);
}
