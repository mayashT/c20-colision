var ball1;
var ball2;

function setup() {
    createCanvas(800, 400);
    ball1 = createSprite(400, 200, 50, 50);
    ball1.shapeColor = "green";
    ball1.debug = true;
    ball2 = createSprite(400, 200, 80, 30);
    ball2.shapeColor = "green";
    ball2.debug = true;
}

function draw() {
    background("black");
    drawSprites();

    ball2.x = mouseX;
    ball2.y = mouseY;


    if (ball2.x - ball1.x < ball1.width / 2 + ball2.width / 2 &&
        ball1.x - ball2.x < ball2.width / 2 + ball1.width / 2 &&
        ball2.y - ball1.y < ball1.height / 2 + ball2.height / 2 &&
        ball1.y - ball2.y < ball2.height / 2 + ball1.height / 2) {
        ball1.shapeColor = "red";
        ball2.shapeColor = "red";
    } else {
        ball2.shapeColor = "green";
        ball1.shapeColor = "green";
    }
}