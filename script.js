const container = document.querySelector(".grid")

let size= 16*16;
/*
function makeGrid(){
    for(let i =0;i<size;i++){
        let pixel = document.createElement('div');
        pixel.className="pixel";
        pixel.style.backgroundColor="blue";
        pixel.textContent=i;
        container.appendChild(pixel)
    }
}

const p = document.querySelectorAll('.pixel');
container.addEventListener('mouseover',()=>{
    container.style.backgroundColor="gray";
});

makeGrid();
*/
for(let i =0;i<size;i++){
    let pix = document.createElement('div');
    pix.className="pixel";
    container.appendChild(pix);

    pix.addEventListener('mouseover',()=>{
    pix.style.backgroundColor=document.getElementById('colorSelect').value;
    });
}

