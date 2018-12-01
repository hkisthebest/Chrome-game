function Guy(){
  this.x = 90;
  this.y = height - 400; //guy falls down at the beginning
  this.gravity = 0.80;
  this.v = 0;
  this.upForce = -11.5;
  // showing the Guy
  this.show = function(){
    fill(0);
    rect(this.x, this.y, 30, 30);
  }
  //Guy jumping
  this.jump = function(){
    this.v += this.upForce;
  }
  //Grabs the guy back to ground
  this.update = function(){
    this.v += this.gravity;
    this.y += this.v;
    if(this.y > height - 80){ //pulls back guy to the ground from bottom
      this.y = height - 80;
      this.v = 0 //resets velocity back to 0
    }
  }
}
