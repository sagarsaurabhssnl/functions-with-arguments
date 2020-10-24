var fixedRect, movingRect, ball;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
    createCanvas(800, 400);
    fixedRect = createSprite(200, 200, 40, 80);
    movingRect = createSprite(500, 200, 80, 40);
    // ball = createSprite(200, 100, 20, 20);
    // ball.velocityY = 2
    fixedRect.velocityY = -1;

    gameObject1 = createSprite(100, 200, 50, 50);
    gameObject2 = createSprite(200, 100, 50, 50);
    gameObject3 = createSprite(300, 100, 50, 50);
    gameObject4 = createSprite(500, 200, 50, 50);

    gameObject1.velocityX = 1;
    gameObject4.velocityX = -1;
    gameObject1.shapeColor = "pink";
    gameObject4.shapeColor = "cyan";
}

function draw() {
    background("lightblue");


    movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;

    // text("Difference: " + (movingRect.y - fixedRect.y), 300, 50);
    // text("Half of width sum: " + (movingRect.height / 2 + fixedRect.height / 2), 300, 100)




    if (isTouching(gameObject3, movingRect)) {
        movingRect.shapeColor = "blue"
        gameObject3.shapeColor = "blue "
    } else {
        movingRect.shapeColor = "green"
        gameObject3.shapeColor = "green"
    }

    if (isTouching(gameObject2, fixedRect)) {
        gameObject2.shapeColor = "yellow";
        fixedRect.shapeColor = "yellow";
    } else {
        fixedRect.shapeColor = "red";
        gameObject2.shapeColor = "red";
    }

    bounceOff(gameObject1, gameObject4);


    drawSprites();

}

function isTouching(object1, object2) {
    if (object1.x - object2.x <= object1.width / 2 + object2.width / 2 &&
        object2.x - object1.x <= object2.width / 2 + object1.width / 2 &&
        object1.y - object2.y <= object1.height / 2 + object2.height / 2 &&
        object2.y - object1.y <= object2.height / 2 + object1.height / 2) {
        return true;
    } else {
        return false;
    }
}

function bounceOff(object1, object2) {
    if (object1.x - object2.x < object1.width / 2 + object2.width / 2 &&
        object2.x - object1.x < object1.width / 2 + object2.width / 2) {
        object1.velocityX = object1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
    }

    if (object1.y - object2.y < object1.height / 2 + object2.height / 2 &&
        object2.y - object1.y < object2.height / 2 + object1.height / 2) {
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    }
}