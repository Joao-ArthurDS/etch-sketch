let x;
const grid = document.querySelector('div#grid');

x = 16;

grid.style['display'] = 'flex';
grid.style['flex-wrap'] = 'wrap';

if (grid.childElementCount > 0){
    window.addEventListener('resize', resizeElement); //maybe
} else {
  resizeElement();  
}

function resizeElement(){
    grid.replaceChildren();

    const newWidth = (grid.clientWidth / x) -2; //minus 2 to set the border at 1px
    const newHeight = (grid.clientHeight / x) -2;

    for (let i = 0; i < x; i++){
        for (let j = 0; j < x; j++){
            const div = document.createElement('div');
            div.classList.add('box');

            div.style.width = `${newWidth}px`;
            div.style.height = `${newHeight}px`;
            div.innerHTML = `${i} - ${j}`;
            const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = randomColor;
            div.style.opacity = '0%';


            div.addEventListener('mouseover', paintBox);

            grid.appendChild(div);
        }
    }
}

function paintBox(){
  const element = document.getElementById("myElement");
  let currentOpacity = parseFloat(window.getComputedStyle(element).opacity) || 0;
  
  if (currentOpacity < 1) {
    element.style.opacity = (currentOpacity + 0.1).toString();
  }
}