let numeroPixels = 5;

function pixelSquare() {
  const pixel = document.querySelector("#pixel-board")
  for (let index = 0; index < numeroPixels; index += 1) {
    const divLinha = document.createElement("div")
    divLinha.className = "linha";
    pixel.appendChild(divLinha)
    for (let i = 0; i < numeroPixels; i += 1) {
      const div = document.createElement("div")
      div.className = "pixel"
      divLinha.appendChild(div)
    }
  }
}
pixelSquare();

function selected() {
  const color = document.querySelector('.color')
  color.addEventListener('click', cor)
}

function cor() {

}
