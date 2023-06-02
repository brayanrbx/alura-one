const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

var style = canvas.style;
canvas.width = 600;
canvas.height = 400;
style.display = 'block';
style.border = '1px solid black';
style.marginLeft = "auto";
style.marginRight = "auto";

let color = 0;
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black'];

function drawCircle(e) {
    let x = e.pageX - canvas.offsetLeft;
    let y = e.pageY - canvas.offsetTop;
    ctx.fillStyle = colors[color];
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, (Math.PI * 2));
    ctx.fill();
    console.log(x + "," + y);
};

function toggleColor() {
    color++;
    if (color > colors.length - 1) {
        color = 0;
    }
};

canvas.onclick = drawCircle;
canvas.oncontextmenu = toggleColor;
