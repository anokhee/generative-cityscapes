// noise.seed(Math.random());

var canvas = document.getElementById('canvas');
var c = canvas.getContext("2d");
width = window.innerWidth;
height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// for (var x = 0; x < width; x++) {
//     for (var y = 0; y < height; y++) {
//         var value = noise.perlin2(x, 0);
//         console.log(value);
//     }
// }

setup();

function setup() {
    width = 500;
    height = 500;
    canvas.width = width;
    canvas.height = height;
    c.strokeStyle = "rgba(255, 255, 255, 1)"
    c.lineWidth = '5';
    setBackground("rgba(1, 1, 2, 1)");
    draw();
};

function draw() {
    // Basic Rectangular Building
    for (let p = 0; p < 8; p++) {
        makeRectangularBuilding();
    }

};

function makeRectangularBuilding() {
    let bldgXPos = Math.random() * width;
    let bldgWidth = Math.random() * (200 - 0) + 0;
    let bldgHeight = Math.random() * (450);

    c.beginPath();
    c.rect(bldgXPos, height - bldgHeight, bldgWidth, bldgHeight);
    c.stroke();
    c.fill();

    makeWindows(bldgXPos, bldgWidth, bldgHeight);
}

function makeWindows(bldgXPos, bldgWidth, bldgHeight) {
    let test = (bldgWidth / Math.floor(Math.random() * (10 - 1) + 1));
    let divisor = 5;
    for (let i = 0; i < bldgWidth / test; i++) {
        for (let j = 0; j < bldgHeight / test; j++) {
       
            c.beginPath();
            c.rect(bldgXPos + (i * test) + test / (divisor / 2), height - (j * test), test / divisor, test / divisor);
            c.stroke();
            c.fill();
        }
    }
}

function setBackground(color) {
    c.beginPath();
    c.rect(0, 0, width, height);
    c.fillStyle = color;
    c.fill();
    c.closePath();
}

window.onresize = function (event) {
    setup();
};