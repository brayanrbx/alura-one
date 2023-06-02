const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

var style = canvas.style;
canvas.width = 600;
canvas.height = 400;
style.display = 'block';
style.border = '1px solid black';
style.marginLeft = "auto";
style.marginRight = "auto";

function draw(xi, yi, xf, yf, p1, p2, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(xi, yi);
    ctx.lineTo(xf, yf);
    ctx.lineTo(p1, p2);
    ctx.fill();
};

draw(50, 50, 50, 400, 400, 400, "black");
draw(100, 175, 100, 350, 275, 350, "white");

