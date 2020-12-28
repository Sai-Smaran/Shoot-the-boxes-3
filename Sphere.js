class Poly {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'density':0.4,
        'friction':0.2
    }
    this.image = loadImage("imgs/polygon.png");
    this.body = Bodies.circle(x, y, 10, options);
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 50, 50);
    pop();
  }
};
