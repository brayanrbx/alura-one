const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

var style = canvas.style;
canvas.width = 600;
canvas.height = 400;
style.display = 'block';
style.border = '1px solid black';
style.marginLeft = "auto";
style.marginRight = "auto";

let serie2009 = [6, 47, 41, 3, 3];
let serie2019 = [81, 9, 3, 3, 4];
let colores = ["blue","green","yellow", "red","gray"];

function drawRectangle(x, y, base, altura, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, base, altura);
    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, base, altura);
};

function writeText(x , y, texto) {
    ctx.font="15px Georgia";
    ctx.fillStyle="black";
    ctx.fillText(texto, x, y);
};

function drawBar(x, y, serie, colores, texto) {
    writeText((x + 30), (y - 20), texto);
    let sumaAltura = 0;
    for (let i = 0; i < serie.length; i++) {
        drawRectangle(x, (y + sumaAltura), 100, serie[i], colores[i]);
        sumaAltura += serie[i];
    }
};

drawBar(150, 130, serie2009, colores, "2009");
drawBar(400, 130, serie2019, colores, "2019");

