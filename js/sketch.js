let mijnData;
let mijnData2;
let mijnData3;
let dataY;
let r;
let g;
let b;
let geklikt = true;
let y1 = 20 + 20 * 5; //plank ondersteuning boeken hoogte/breedte afhankelijk van grootste aantal kaartjes #1//
let y2 = y1 + 24 * 5;
let y3 = y2 + 6.5 * 15;
let d1 = 20;
let d2 = 5;

function preload() {
  mijnData3 = loadJSON('json/count.json');
}

function setup() {
  textAlign(CENTER);
  createCanvas(680, 605);
  r = random(0, 255);
  b = random(0, 255);
  g = random(0, 255);
  y = 20;
}

function draw() {
  textAlign(CENTER);
  background(101, 75, 51);
  randomSeed(1);

  // plank 1&2//
  push();
  fill(138, 102, 66);
  rect(20, y1, width, 20);
  rect(20, y2, width, 20);
  rect(20, y3, width, 20);
  pop();


  //boekenkast frame//
  push();
  fill(138, 102, 66);
  rect(0, 0, 20, height);
  rect(660, 0, 20, height);
  rect(0, 0, width, 20);
  rect(0, 585, width, 20);
  pop();


  let x = 20;
  //boeken //
  for (let i = 0; i < 231; i++) {
    r = random(20, 205);
    g = random(60, 120);
    b = random(100, 130);
    fill(r, i, i, 150);

    // fill( r , g , b ,150); //kleur boeken//
    // fill(r, i * 3, 55 + i * 20, 150); 
    if (mijnData3[i].verhouding == 1 && i > 63) { // 3de plank//

      fill(i * 3, g * 3, b * 3, 150);
      rect(-300 + i * d2, y3, d2, -mijnData3[i].count * 15);
      rect(-300 + i * d2, y3 - 0.8 * mijnData3[i].count, d2, -0.2 * mijnData3[i].count * 15); //label//
      if (geklikt) {
        push();
        fill(242, 199, 101);
        text(mijnData3[i].count, -296 + i * d2, y3 - 0.8 * mijnData3[i].count);
        pop();
      }


    } else if (mijnData3[i].verhouding == 1 && i > 31) { //2de plank //

      rect(-620 + i * d1, y2, d1, -mijnData3[i].count * 5);
      rect(-620 + i * d1, y2 - 0.8 * mijnData3[i].count, d1, -0.2 * mijnData3[i].count * 5); //label//
      if (geklikt) {
        push();
        fill(242, 199, 101);
        text(mijnData3[i].count, -610 + i * d1, y2 - 1 * mijnData3[i].count);
        pop();
      }

    } else if (mijnData3[i].verhouding == 1) { //eerste plank //

      rect(20 + i * d1, y1, d1, -mijnData3[i].count * 5);
      rect(20 + i * d1, y1 - 0.8 * mijnData3[i].count, d1, -0.2 * mijnData3[i].count * 5); //label//
      if (geklikt) {
        push();
        fill(242, 199, 101);
        text(mijnData3[i].count, 30 + i * d1, y1 - 1 * mijnData3[i].count);
        pop();
      }
    }
    else {
      let d = mijnData3[i].count;
      let verhouding = mijnData3[i].verhouding * d1;
      r = random(1, 145);
      fill(r, (2 * i - 250), (2 * i - 250), 150);
      rect(x, 585, verhouding, -d * 5);
      rect(x, 585 - 0.8 * d, verhouding, -0.2 * d * 5);//label//
      if (geklikt) {
        push();
        fill(242, 199, 101);
        text(mijnData3[i].count, x + 7, 580 - 0.8 * d);
        pop();
      }
      x = x + verhouding;
    }
  }

  //aantal datums verschijnen//
  if (
    mouseX > 20 && mouseX < width - 20 &&
    mouseY > 20 && mouseY < 120
    ||
    mouseX > 20 && mouseX < width - 20 &&
    mouseY > y1 + 20 && mouseY < y2
    ||
    mouseX > 20 && mouseX < width - 30 &&
    mouseY > y3 + 20 && mouseY < height - 20
    ||
    mouseX > 20 && mouseX < width - 35 &&
    mouseY > y2 + 20 && mouseY < y3
  ) {
    geklikt = true;
  } else {
    geklikt = false;
  }

}


