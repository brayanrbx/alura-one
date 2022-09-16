const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

var style = canvas.style;
canvas.width = 600;
canvas.height = 400;
style.display = 'block';
style.border = '1px solid black';
style.marginLeft = "auto";
style.marginRight = "auto";
style.backgroundColor = "lightgrey";

const PI = Math.PI;
let i = 1;

function drawCircle(color, x, y, radio, startAngle, endAngle) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radio, startAngle, endAngle);
    ctx.fill();
};

drawCircle("orange", 300, 200, 100, 0, (2 * PI));
drawCircle("yellow", 300, 200, 75, 0, (2 * PI));
drawCircle("purple", 300, 200, 50, 0, (2 * PI));
drawCircle("green", 400, 200, 50, 0, (2 * PI));
drawCircle("blue", 200, 200, 50, 0, (2 * PI));
drawCircle("red", 300, 100, 50, 0, (2 * PI));
drawCircle("violet", 300, 300, 50, 0, (2 * PI));

