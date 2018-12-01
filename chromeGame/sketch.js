var guy;
var plant = [];
var wallSpawn;
var score = 0;
function setup() {
  createCanvas(800,300);
  stroke(125);
  guy = new Guy();
}
function draw() {
  background(51);
  // score showing
  textSize(32);
  text(score, 5, 30);
  fill(0, 102, 153);
//push a new plant to array every 75 frames
  if(frameCount % 75 == 0 ){
    plant.push(new Plant());
  }
//score++ every 100 frames
  if(frameCount % 100 == 0){
    score++;
  }

  guy.show();
  guy.update();

  rect(0, height - 50, width, height - 50); // floor

//spawning the plant
  for(var i = plant.length - 1; i >= 0; i--){
    plant[i].show();
    plant[i].update();
    if (plant[i].hit(guy)){ //if the guy hits the plant
      frameRate(0.5); //set frame to 0.5     slow motion
      setTimeout(setBackFrameRate, 1000); //setting frame back to 60
    }
//kills the plant if it's out of the frame
    if(plant[i].offScreen()){
      plant.splice(i, 1);
    }
  }
}
//key pressing function
function keyPressed(){
  if(guy.y == height - 80){ // NO DOUBLE CLICKING
    if(key == ' '){
      guy.jump();
    }
  }
}

function setBackFrameRate(){
  frameRate(60);
}
