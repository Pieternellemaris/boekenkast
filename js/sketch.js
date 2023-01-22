let mijnData;
let mijnData2;
let mijnData3;
let dataY;
let r;
let g;
let b;
let geklikt1 = true;
let geklikt2= true;
let geklikt3= true;
let geklikt4= true;
let y1 = 20 + 20 * 5; //plank ondersteuning boeken hoogte/breedte afhankelijk van grootste aantal kaartjes #1//
let y2 = y1 + 24 * 5;
let y3 = y2 + 6.5 * 15;
let d1 = 20;
let d2 = 5;
let d3= 20;

function preload() {
  mijnData3 = loadJSON('json/count.json');
}

function setup() {
  textAlign(CENTER);
  let canvas = createCanvas(680, 605);
  canvas.parent('sketch-container');
  r = random(0, 255);
  b = random(0, 255);
  g = random(0, 255);
  y = 20;
//   c1 = color(69,50,46);
//   c2 = color(121, 85, 61);

//   for(let x=0; x<width; x++){
//     n = map(x,0,width,0,1);
//     let newc = lerpColor(c1,c2,n);
//     stroke(newc);
//     line(0,x,height, x);
//   }
}

function draw() {
  textAlign(CENTER);
  background(83, 54, 36);
  randomSeed(1);

  // plank 1&2//
  push();
  fill(118, 83, 51);
  rect(20, y1, width, 20);
  rect(20, y2, width, 20);
  rect(20, y3, width, 20);
  pop();


  //boekenkast frame//
  push();
  fill(118, 83, 51);
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
      //aantal datums verschijnen//
    if (
      mouseX >  ( i * d1 +20) && mouseX < i * d1 +40 &&
      mouseY > 120-mijnData3[i].count * 5 && mouseY < 120
    ) {
      geklikt1 = true;
    } else if (
      mouseX > -620 + i * d1 && mouseX < -600 + i * d1 &&
      mouseY > y2-mijnData3[i].count * 5 && mouseY < y2) {
      geklikt2= true;
    } else if (  
      mouseX > -300 + i * d2 && mouseX < -295+ i * d2 &&
      mouseY > y3-mijnData3[i].count * 15 && mouseY < y3
      ) {
      geklikt3= true;
    } else if (  
      mouseX > x && mouseX < (x + mijnData3[i].verhouding * d1) &&
      mouseY > height-20-mijnData3[i].count * 5 && mouseY < height - 20  
    ) {
      geklikt4= true;
    }
    else {
      geklikt1 = false;
      geklikt2= false;
      geklikt3= false;
      geklikt4= false;
    }
//boeken op plank//
    if (mijnData3[i].verhouding == 1 && i > 63) { // 3de plank//

      fill(i * 3, g * 3, b * 3, 150);
      rect(-300 + i * d2, y3, d2, -mijnData3[i].count * 15);
      rect(-300 + i * d2, y3 - 0.8 * mijnData3[i].count, d2, -0.2 * mijnData3[i].count * 15); //label//
      if (geklikt3) {
        push();
        textSize(14);
        fill(i * 3, g * 3, b * 3,200);
        rect(-305 + i * d2, y3, 10, -mijnData3[i].count * 15)
        fill(0);
        text(mijnData3[i].count, -300 + i * d2, y3 - 0.8 * mijnData3[i].count);
        pop();
      }


    } else if (mijnData3[i].verhouding == 1 && i > 31) { //2de plank //
      r = random(50, 145);
      fill(r, (2 * i - 250), (2.2 * i - 250), 150);
      rect(-620 + i * d1, y2, d1, -mijnData3[i].count * 5);
      rect(-620 + i * d1, y2 - 0.8 * mijnData3[i].count, d1, -0.2 * mijnData3[i].count * 5); //label//
      if (geklikt2) {
        push();
        // r = random(1, 145); uitlaten staan//
        fill(r, (2 * i - 250), (2.2 * i - 250),200);
        rect(-620 + i * d1, y2, d1, -mijnData3[i].count * 5);
        rect(-620 + i * d1, y2 - 0.8 * mijnData3[i].count, d1, -0.2 * mijnData3[i].count * 5); //label//
        fill(242, 199, 101);
        text(mijnData3[i].count, -610 + i * d1, y2 - 1 * mijnData3[i].count);
        pop();
      }

    } else if (mijnData3[i].verhouding == 1) { //eerste plank //
      r = random(50, 145);
      fill(r, (2 * i - 250), (2.2 * i - 250), 150);
      rect(20 + i * d1, y1, d1, -mijnData3[i].count * 5);
      rect(20 + i * d1, y1 - 0.8 * mijnData3[i].count, d1, -0.2 * mijnData3[i].count * 5); //label//
      if (geklikt1) {
        push();
        fill(r, (2 * i - 250), (2.2 * i - 250),200);
        rect(20 + i * d1, y1, d1, -mijnData3[i].count * 5);
        rect(20 + i * d1, y1 - 0.8 * mijnData3[i].count, d1, -0.2 * mijnData3[i].count * 5); //label//
        fill(242, 199, 101);
        text(mijnData3[i].count, 30 + i * d1, y1 - 1 * mijnData3[i].count);
        pop();
      }
    }
    else {
      let d = mijnData3[i].count;
      let verhouding = mijnData3[i].verhouding * d3;
      r = random(1, 100);
      fill(r, (1.8 * i - 250), (2 * i - 250), 150);
      rect(x, 585, verhouding, -d * 5);
      rect(x, 585 - 0.8 * d, verhouding, -0.2 * d * 5);//label//
      if (geklikt4) {
        push();
        // r = random(1, 145); uitlaten staan//
        fill(r, (1.8 * i - 250), (2 * i - 250), 250);        rect(x, 585, verhouding, -d * 5);
        rect(x, 585 - 0.8 * d, verhouding, -0.2 * d * 5);//label//
        fill(255, 219, 151);
        text(mijnData3[i].count, x + 7, 580 - 0.8 * d);
        pop();
      }
      x = x + verhouding;
    }

  }




}


