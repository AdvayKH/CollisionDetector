function setup() {
  createCanvas(800,400);

  moving_rect = createSprite(300, 200, 50, 30);
  fixed_rect = createSprite(600, 200, 40, 80);

  fixed_rect.debug = true;
  moving_rect.debug = true;

  fixed_rect.shapeColor = "green";
  moving_rect.shapeColor = "green";

}

function draw() {
  background(230);
  moving_rect.x = mouseX;
  moving_rect.y = mouseY;
  fill("black");
  text("distance between rects : ", 100, 180);
  text(fixed_rect.x-moving_rect.x, 100,200);
  text(moving_rect.x-fixed_rect.x, 100,220);
  text("width addition : ", 100, 20);
  text(fixed_rect.width/2 + moving_rect.width/2, 100,50);

  if (Math.abs(fixed_rect.x-moving_rect.x) < fixed_rect.width/2 + moving_rect.width/2 &&
    
    Math.abs(fixed_rect.y-moving_rect.y) < fixed_rect.height/2 + moving_rect.height/2 
   ) {
    fixed_rect.shapeColor = "red";
    moving_rect.shapeColor = "red";
  } else {
    fixed_rect.shapeColor = "green";
    moving_rect.shapeColor = "green";
  }

  drawSprites();
}