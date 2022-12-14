const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 2.5;
ctx.strokeStyle = '#2c2c2c';

canvas.height = 500;
canvas.width = 500;

let painting = false;

function stopPainting(){
    painting  = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    x = event.offsetX;
    y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event){
painting = true;
}





if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('moseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
}
