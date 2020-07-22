// cssでpaddingを指定すると描画位置がずれる
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var prevX = -1;
var prevY = -1;
var isDrawing = false;
canvas.addEventListener('mousedown', e => {
    prevX = e.offsetX;
    prevY = e.offsetY;
    isDrawing = true;
});
window.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        let x = e.pageX - canvas.clientLeft - canvas.offsetLeft;
        let y = e.pageY - canvas.clientTop - canvas.offsetTop;
        drawLine(x, y, prevX, prevY);
        prevX = x;
        prevY = y;
    }
})
window.addEventListener('mouseup', e => {
    isDrawing = false;
})


function drawLine(x1,y1,x2,y2) {
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.closePath();
    ctx.stroke();
}

function clearCanvas() {
    ctx.clearRect(0,0,canvas.offsetWidth, canvas.offsetHeight);
}
var clearButton = document.getElementById('clear');
clearButton.onclick = clearCanvas;