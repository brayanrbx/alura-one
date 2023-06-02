const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

var style = canvas.style;
canvas.width = 600;
canvas.height = 400;
style.display = 'block';
style.border = '1px solid black';
style.marginLeft = "auto";
style.marginRight = "auto";
style.backgroundColor = 'lightgray';

let canDraw = false;
let color = 'blue';

function drawRectangle(color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function draw(e) {
    if (canDraw && ((e.pageY - canvas.offsetTop) > 50)) {
        let x = e.pageX - canvas.offsetLeft;
        let y = e.pageY - canvas.offsetTop;
        drawCircle(x, y);
    }
};

function drawCircle(x, y) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, (2 * Math.PI));
    ctx.fill();
};

function enableDraw() {
    canDraw = true;
};

function disableDraw() {
    canDraw = false;
};

function getColor(e) {
    let x = e.pageX - canvas.offsetLeft;
    let y = e.pageY - canvas.offsetTop;
    if ((x < 50) && (y < 50)) {
        color = 'red';
    }
    if ((x > 50 && x < 100) && (y < 50)) {
        color = 'green';
    }
    if ((x > 100 && x < 150) && (y < 50)) {
        color = 'blue';
    }
};

drawRectangle('red', 0, 0, 50, 50);
drawRectangle('green', 50, 0, 50, 50);
drawRectangle('blue', 100, 0, 50, 50);

canvas.onmousemove = draw;
canvas.onmousedown = enableDraw;
canvas.onmouseup = disableDraw;
canvas.onclick = getColor;

