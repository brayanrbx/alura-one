const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

var style = canvas.style;
canvas.width = 600;
canvas.height = 400;
style.display = 'block';
style.border = '1px solid black';
style.marginLeft = "auto";
style.marginRight = "auto";
style.backgroundColor = 'green';

function draw(x, y, width, height) {
    ctx.fillStyle = 'black';
    ctx.fillRect(x, y, width, height);
};

draw(150, 100, 100, 100);
draw(350, 100, 100, 100);
draw(250, 200, 100, 120);
draw(200, 250, 50, (canvas.height - 220));
draw(350, 250, 50, (canvas.height - 220));

