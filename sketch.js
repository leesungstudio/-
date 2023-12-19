let particles = [];
let rPs = [];
let yPs = [];
let bPs = [];


function setup() {
  createCanvas(400, 400);
  noStroke();
  
  rPs = createParticles(color(250, 0, 0), 100); 
  yPs = createParticles(color(250, 250, 0), 800);
  bPs = createParticles(color(0, 0, 250), 10);
}


function draw() {
  background(0);
  
  rule(rPs, rPs, -0.2);
  rule(yPs, rPs, 0.9);
  rule(bPs, rPs, -0.7);
  
  rule(rPs, rPs, -0.9);
  rule(yPs, rPs, 0.9);
  
  rule(rPs, rPs, 0.9);
  rule(bPs, rPs, -0.9);
  
  rule(yPs, bPs, -0.9);
  rule(bPs, yPs, -0.9);
  
  for (let i=0; i<particles.length; i++) {
    let p = particles[i];
    p.update();
    p.show();
  }
}


function rule(aPs, bPs, g) {
  for (let i=0; i<aPs.length; i++) {    
    for (let j=0; j<bPs.length; j++) {
      let d = p5.Vector.dist(aPs[i].pos, bPs[j].pos);
      if (d > 0.2 && d < 90) {
        let force = p5.Vector.sub(aPs[i].pos, bPs[j].pos);
        force.mult(g);
        force.div(d*d);
        aPs[i].addForce(force);
      }
    }
  }
}


function createParticles(aColor, number) {
  let group = [];
  for (let i=0; i<number; i++) {
    let p = new Particle(aColor);
    group.push(p);
    particles.push(p);
  }
  return group;
}


