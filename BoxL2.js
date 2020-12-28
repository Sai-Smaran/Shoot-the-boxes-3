class Box2 {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 30, 40, options);
    this.width = 30;
    this.height = 40;
    
    World.add(world, this.body);
  }
  display(){
    if (this.body.speed < 3) {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      noStroke();
      rectMode(CENTER);
      fill(63, 224, 208);
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  score(){
    if(this.Visiblity < 0 && this.Visiblity < -1005) {
      score++;
    }  
  }
};
