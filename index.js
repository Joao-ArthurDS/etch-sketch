let x = 16;
const grid = document.querySelector('div#grid');
const btnResize = document.querySelector('#btnResize')

btnResize.addEventListener('click', setGridSize);

grid.style['display'] = 'flex';
grid.style['flex-wrap'] = 'wrap';

if (grid.childElementCount > 0){
    window.addEventListener('resize', resizeElement); //maybe
} else {
  resizeElement();  
}

function resizeElement(){
    grid.replaceChildren();

    const newWidth = (grid.clientWidth / x); //minus 2 to set the border at 1px
    const newHeight = (grid.clientHeight / x) ;

    for (let i = 0; i < x; i++){
        for (let j = 0; j < x; j++){
            const div = document.createElement('div');
            div.classList.add('box');

            div.style.width = `${newWidth}px`;
            div.style.height = `${newHeight}px`;
            const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = randomColor;
            div.style.opacity = '0%';


            div.addEventListener('mouseover', paintBox);

            grid.appendChild(div);
        }
    }
}

function paintBox(){
  const element = event.currentTarget; // console.log(event.currentTarget.innerHTML);
  let currentOpacity = parseFloat(window.getComputedStyle(element).opacity) || 0;
  
  if (currentOpacity < 1) {
    element.style.opacity = (currentOpacity + 0.1).toString();
  }
}

function setGridSize(){
  while (true){
    const gridSize = prompt('Set the new grid size (max of 64): ');
    
    if ( gridSize > 64 || gridSize < 1 ){
      alert('Please choose a valid number to use as grid size.');
    } else {
      x = gridSize;
      resizeElement();
      break;
    }
  }
}