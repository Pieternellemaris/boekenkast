let mijnData;
let mijnData2;
let mijnData3;
let dataY;
let r;
let g;
let b;
let geklikt = true;
let y1 = 20 + 20 * 5; //plank ondersteuning boeken hoogte/breedte afhankelijk van grootste aantal kaartjes #1//
let

function preload() {
  mijnData = loadJSON('json/voorkant-vol.json');
  mijnData2 = loadJSON('json/meerdere-soorten.json');
  mijnData3 = loadJSON('json/count.json');
}

function setup() {
  createCanvas(700, 700);
  r = random(0, 255);
  b = random(0, 255);
  g = random(0, 255);
  console.log(mijnData);
  console.log(mijnData[0].kaartjes[0].datum);
  console.log(mijnData[0].kaartjes[0].datum[0]);
  console.log(mijnData3[12].count);
  console.log(mijnData[0].kaartjes[0].datum.length);
  console.log(mijnData[0].kaartjes.length);
  console.log(mijnData3);
  console.log(mijnData2[0].soorten[0].frontfull.length);
  console.log(mijnData2[0].soorten[0].frontfull[0].datum.length);
  console.log(mijnData2[0].soorten[1].voorenachter[1].datum[0].voor.length);
  console.log(mijnData2[0].soorten[1].voorenachter[0].datum[0].voor.length);
  console.log(mijnData3[12].verhouding);
  console.log(geklikt);
  y = 20;
}

function draw() {
  background(69, 50, 46);
randomSeed(1);
  // plank 1//
  push();
  fill(138, 102, 66);
  rect(20, y1, width, 20);
  pop();


  //boekenkast frame//
  push();
  fill(138, 102, 66);
  rect(0, 0, 20, height);
  rect(680, 0, 20, height);
  rect(0, 0, width, 20);
  rect(0, 680, width, 20);
  pop();



  //boek label//
  push();
  fill(255, 0, 0, 100);
  rect(20, y1 - 25, 12 * 20, 15);
  pop();



  y = y+ 1
  ellipse(20, y, 10, 10);
  console.log(y);
  let x = 20;

  //boeken voorkant vol en voor en achter//
  for (let i = 0; i < 30; i++) {

    r = random(0, 255) * i;
    b = random(0, 255) * i;
    g = random(0, 255) * i;

    fill(random(255), i * 5, 55 - i * 2, 150); //kleur boeken//

    if (mijnData3[i].verhouding == 1) {

      rect(20 + i * 20, y1, 20, -mijnData3[i].count * 5);
      if (geklikt) {
         push();
      fill(242, 199, 101);
      text(mijnData3[i].count, 22 + i * 20, y1 - 13);
      pop();
      }
     

    } else {
      let d = mijnData3[i].count;
      let verhouding = mijnData3[i].verhouding * 20;
     
      x = x + verhouding; //probeer ze netjes naast elkaar te krijgen??//
      fill(120,100);
      rect(x, 365, verhouding , -d * 5)
       console.log(verhouding);
       console.log(x);
     
    }
  }

  //aantal kaartjes verschijnen//
  if (
      mouseX>20 && mouseX<260 &&
      mouseY>20 && mouseY<150
      ) {
geklikt=true
    } else {
      geklikt=false
    }



}


