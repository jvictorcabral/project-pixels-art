const numeroPixels = 5;

function pixelSquare() {
  const pixel = document.querySelector('#pixel-board');
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

const section = document.getElementById('color-palette');
function selected(event) {
  const color = document.querySelector('.selected')
if (color) {
  color.classList.remove('selected')
}
  event.target.classList.add('selected')
}
section.addEventListener('click', selected)