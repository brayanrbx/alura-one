const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

var style = canvas.style;
canvas.width = 600;
canvas.height = 400;
style.display = 'block';
style.border = '1px solid black';
style.marginLeft = "auto";
style.marginRight = "auto";

let x = 0;
let flag = true;

function drawCircle(x, y, radio) {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, (2 * Math.PI));
    ctx.fill();
};

function clear() {
    ctx.clearRect(0, 0, 600, 400);
};

function updateCanvas() {
    if (flag) {
        clear();
        drawCircle(x, 20, 10);
        x += 5;
        if (x > canvas.width) {
            flag = false;
        }
    }
    else {
        clear();
        drawCircle(x, 20, 10);
        x -= 5;
        if (x < 0) {
            flag = true;
        }
    }
};

setInterval(updateCanvas, 200);