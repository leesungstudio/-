class Particle {
    constructor(aColor) {
      this.pos = createVector(random(0, width), random(0, height));
      this.vel = createVector(0, 0);
      this.acc = createVector(0, 0);
      this.w = 4;
      
      this.c = aColor;
    }
    
    addForce(aForce) {
      this.acc.add(aForce);
    }
    
    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      
      this.acc = createVector(0, 0);
      this.vel.mult(0.9);
      
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.y < 0) this.pos.y = height;
      if (this.pos.y > height) this.pos.y = 0;
    }
    
    show() {
      fill(this.c);
      print(this.vel.x)
      this.w = (this.vel.x+this.vel.y) /2

      circle(this.pos.x, this.pos.y, this.w);
    }
  }