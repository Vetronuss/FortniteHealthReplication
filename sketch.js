var w, h, heatlh, shield, healthMin, healthMax, shieldBroke = false,
  damage, keysTyped = [],
  keyNum = 0,
  shieldNeg = 0;

function setup() {
  createCanvas(600, 600);
  w = width;
  h = height;

  health = 100;

  shield = 100
  cursor(CROSS)
  keysTyped[1] = 0;
  keysTyped[2] = 0
  keysTyped[0] = 0

}

function draw() {
  health = constrain(health, 0, 100)
  shield = constrain(shield, 0, 100)
  var total = health + shield;
  background(50);
  textAlign(CENTER)
  textSize(70)
  fill(255)
  text(total, w / 2, 70)

  
  strokeWeight(1.5)
  stroke(0)
  noFill();
  rect(60, 100, w - 60 - 60, 25)
  rect(60, 140, w - 60 - 60, 25)
  noStroke();


  fill('cyan')
  rect(60, 100, (shield * 2.4) * 2, 25)


  fill('lime')
  rect(60, 140, (health * 2.4) * 2, 25)

  textAlign(LEFT)
  textSize(16)
  strokeWeight(0.5)

  stroke(255)
  fill(255)
  text("(R) - RESET (CHUG JUG)", 60, 200)
  
  textAlign(CENTER)
  text(shield, 30, 117.5)
  text(health, 30, 117.5+40)
  
  
  textAlign(LEFT)
  stroke('MediumBlue')
  fill('RoyalBlue')
  text("(B) - BIG POT: \t+50 SHIELD", 60, 225)

  stroke('cyan')
  fill('CornflowerBlue')
  text("(M) - MINI: \t+25 SHIELD, 50 MAX", 60, 250)

  stroke('red')
  fill('orange')
  text("(F) - FLOPPER: \t+50 HEALTH", 60, 300)

  stroke('blue')
  fill('BlueViolet')
  text("(S) - SLURP FISH:\t +50 SHIELD AND/OR HEALTH", 60, 275)

  stroke('crimson')
  fill('red')
  text("(K) - MED KIT: \t+100 HEALTH", 60, 325)

  stroke('BLack')
  fill('SlateGrey')
  text("(D) - KILL(DEATH)", 60, 400)
  
  stroke('purple')
  fill('magenta')
  text("(Z) - ZONE/FIRE: \t-1 HEALTH", 60, 350)

  stroke('orange')
  fill('gold')
  text("(C) - CAMPFIRE: \t+1 HEALTH", 60, 375)
  
  textAlign(CENTER);
  fill(255);
  noStroke();
  if (damage >= 200) {
    fill('gold')
  }
  textSize(30)
  if (isNaN(damage)) {} else {
    text(damage, w / 2, h - 50)
  }
  
  
}

function keyTyped() {
  if (isNaN(int(key))) {

  } else {

    keysTyped[keyNum] = int(key)
    if (keyNum >= 2) {
      keysTyped[keyNum - 2] *= 10;
    } else(keyNum >= 1) //DO NOT CHANGE THIS LINE OF CODE, THE ERROR MAKES IT WORK SOMEHOW
    {
      keysTyped[keyNum - 1] *= 10;
    }
    // console.log(keyNum)
    // console.log(int(key))
    damage = keysTyped[0] + keysTyped[1] + keysTyped[2]
    console.log(damage)
  }

  if (keyNum >= 2) {
    keyNum = 0;
    keysTyped[1] = 0;
    keysTyped[2] = 0
    keysTyped[0] = 0
  } else {
    keyNum++;

  }

  if (keyCode == 32) {

    if (shield < damage) {
      shieldNeg = shield - damage;
      console.log("damage: " + damage)
    }

    shield -= damage;
    if (shieldNeg < 0) {
      health = health + shieldNeg;
      shieldNeg = 0;
    }

    keyNum = 0;
    keysTyped[1] = 0;
    keysTyped[2] = 0
    keysTyped[0] = 0
  }

  if (key == "r") {
    console.log("RESET")
    health = 100;
    shield = 100;
    shieldNeg = 0;

  }

  if (key == "f") {
    console.log("FLOPPER: +50 HEALTH");
    health += 50;

  }

  if (key == "b") {
    console.log("BIG POT: +50 SHIELD")
    shield += 50;
  }

  if (key == "m") {
    console.log("MINI: +25 SHIELD, 50 MAX")
    if (shield <= 50){
    shield += 25;
    shield = constrain(shield, 0, 50)
    }
  }

  if (key == "s") {
    console.log("SLURP FISH: +50 SHIELD AND/OR HEALTH")
    if (health >= health / 2) {
      shield += 50 - ((health - 100) * -1)
      health += 50;
    } else {
      health += 50
    }
  }

  if (key == "k") {
    console.log("MED KIT: + 100 HEALTH")
    health += 100;
  }

  if (key == "d") {
    console.log("DEAD")
    health = 0;
    shield = 0;
  }
  if (key == "z")
  {
    console.log("ZONE/FIRE: -1 HEALTH")
    health -= 1;
  }
  if (key == "c")
  {
    console.log("CAMPFIRE: +1 HEALTH")
    health += 1;
  }


  key = NaN
  keyCode = NaN

}