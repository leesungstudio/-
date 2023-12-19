let particles = [];
let rPs = [];
let yPs = [];
let bPs = [];
let t, x = 0  ;
let t2 = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
  
  rPs = createParticles(color(250, 0, 0), 100); 
  yPs = createParticles(color(250, 250, 0), 800);
  bPs = createParticles(color(0, 0, 250), 10);
}


function draw() {
  background(0);

  t = sin(x);
  t2 = sin((3.14/ 2) + x);
  x += 1;
 

  rule(rPs, rPs, t2);
  rule(yPs, yPs, t2);
  rule(bPs, bPs, t2);



  rule(rPs, rPs, t);
  rule(yPs, yPs, t);
  rule(bPs, bPs, t);


  
  
 
 

  
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


