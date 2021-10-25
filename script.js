function pixelSquare() {
    for (let index = 0; index < 25; index++) {
        let div = document.createElement("div")
        div.className = "pixel"
        div.id = index;
        let pixel = document.querySelector("#pixel-board")
        pixel.appendChild(div)
    }
}
pixelSquare();
