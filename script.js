const container = document.querySelector(".grid");
let size= 16*16;
function makeGrid(){
    for(let i =0;i<size;i++){
        let pixel = document.createElement('div');
        pixel.className="pixel";
        pixel.style.backgroundColor="";
        pixel.textContent=i;
        container.appendChild(pixel)
    }
}
makeGrid();