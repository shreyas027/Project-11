var track, trackImg
var boy, runningBoy
var rightBoundary, leftBoundary


function preload(){
  //pre-load images
  trackImg = loadImage("path.png")

  runningBoy= loadAnimation("Runner-1.png","Runner-2.png")


}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite (200,200)
  track.addImage(trackImg)
  track.velocityY = 4;
  track.scale = 1.2;

  boy = createSprite (200,330)
  boy.addAnimation("boyRunning",runningBoy)
  boy.scale = 0.1

  rightBoundary = createSprite (380,200,50,400);
  leftBoundary= createSprite (20,200,50,400);
  
  rightBoundary.visible = false
  leftBoundary.visible = false
}

function draw() {
  background(0);

  if(track.y > 400){
    track.y = height/2;
  }

  boy.x = World.mouseX
  boy.collide(rightBoundary)
  boy.collide(leftBoundary)

  drawSprites()

}
