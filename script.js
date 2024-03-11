const container = document.querySelector(".grid")
sizeSelect = document.getElementById('myRange');
sizeInfo = document.getElementById('sizeInfo');
let numSize= sizeSelect.value; //16 default
//let numSize = 64;
let size= numSize*numSize;
const boxSize = 500;

function makeGrid(){
    let pixelSize=(boxSize/numSize).toString()+'px';
    container.style.gridTemplateColumns = `repeat(${numSize}, ${pixelSize})`;
    container.style.gridTemplateRows = `repeat(${numSize}, ${pixelSize})`;
    for(let i =0;i<size;i++){
        let pix = document.createElement('div');
        pix.className="pixel";
        container.appendChild(pix);

        pix.addEventListener('mouseover',()=>{
        pix.style.backgroundColor=document.getElementById('colorSelect').value;
        });
    }
}

function updateGrid() {
    numSize = sizeSelect.value;
    size = numSize ** 2;
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    makeGrid();
}

sizeSelect.onchange = function() {
    sizeInfo.textContent = `Value: ${numSize}x${numSize}`
    updateGrid();
}

function onClick(){
    let pixList= container.querySelectorAll(".pixel");
    for(let i =0;i<size;i++){
        pixList[i].style.backgroundColor="lightgray";
    }
}

makeGrid();