function Plant(){
  this.x = width;
  this.spawn = random(height - 110, height - 70); //floor = 250 (190, 230)
  this.move = 5; //speed
  this.speed = 1.5; //controlling the speed of the guy

  //speeds up when score is higher
  if(score > 10 && score <= 20){
    this.speed = 2;
  }else if(score >20 && score <= 30){
    this.speed = 2.5;
  }else if(score >30 && score <= 40){
    this.speed = 3;
  }else if(score >40 && score <= 50){
    this.speed = 3.5;
  }else if(score >50 && score <= 60){
    this.speed = 4;
  }else if(score >60 && score <= 70){
    this.speed = 4.5;
  }else if(score >70 && score <= 80){
    this.speed = 5;
  }else if(score >80 && score <= 90){
    this.speed = 5.5;
  }else if(score >90 && score <= 100){
    this.speed = 6;
  }else if(score >100){
    this.speed = 6.5;
  }

  this.show = function(){
    rect(this.x, this.spawn, 20, height);
  }

  this.update = function(){
    this.x -= this.move * this.speed;
  }

//testing if the plant is off the screen
  this.offScreen = function(){
    if(this.x + 20 < 0){
      return true;
    }else{
      return false;
    }
  }
//testing if the guy hits the plant
  this.hit= function(guy){
    if(guy.y + 30 > this.spawn){
      if(guy.x + 30 >= this.x && guy.x <= this.x + 20){
        // frameRate(5);
        return true;
      }
    }
    else {
      return false;
    }
  }
}
