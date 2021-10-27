const numeroPixels = 5;
const pixel = document.querySelector('#pixel-board');
const section = document.getElementById('color-palette');

function pixelSquare() {
  for (let index = 0; index < numeroPixels; index += 1) {
    const divLinha = document.createElement('div');
    divLinha.className = 'linha';
    pixel.appendChild(divLinha);
    for (let i = 0; i < numeroPixels; i += 1) {
      const div = document.createElement('div');
      div.className = 'pixel';
      divLinha.appendChild(div);
    }
  }
}
pixelSquare();

let colors = 'black';

function selected(event) {
  const color = document.querySelectorAll('.color');
  for (i of color) {
    i.classList.remove('selected');
  }
  event.target.classList.add('selected');
  let test = getComputedStyle(event.target).backgroundColor; //Consegui com a ajuda do Matheus Guedes na mentoria
  colors = test;
}
section.addEventListener('click', selected);

const pixelBoard = document.querySelectorAll('.pixel');
function paintPixel(event) {
  event.target.style.backgroundColor = colors;
}
pixel.addEventListener('click', paintPixel);
