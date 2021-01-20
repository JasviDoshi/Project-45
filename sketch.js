var white1, white2, white3, white4, white5, white6, white7;
var black1, black2, black3, black4, black5, black6;
var rand;
var notes = [];
var check = [];
var gameStates = "start";

function setup(){
  createCanvas(600, 400);
  white1 = createSprite(250, 200, 25, 80);
  white1.shapeColor = "white";
  white2 = createSprite(300, 200, 25, 80);
  white2.shapeColor = "white";
  white3 = createSprite(350, 200, 25, 80);
  white3.shapeColor = "white";
  white4 = createSprite(400, 200, 25, 80);
  white4.shapeColor = "white";
  white5 = createSprite(450, 200, 25, 80);
  white5.shapeColor = "white";
  white6 = createSprite(500, 200, 25, 80);
  white6.shapeColor="white";
  white7 = createSprite(550, 200, 25, 80);
  white7.shapeColor="white";

  black1 = createSprite(275, 185, 20, 70);
  black1.shapeColor="black";
  black2 = createSprite(325, 185, 20, 70);
  black2.shapeColor="black";
  black3 = createSprite(375, 185, 20, 70);
  black3.shapeColor="black";
  black4 = createSprite(425, 185, 20, 70);
  black4.shapeColor="black";
  black5 = createSprite(475, 185, 20, 70);
  black5.shapeColor="black";
  black6 = createSprite(525, 185, 20, 70);
  black6.shapeColor = "black";
}

function draw(){
background("teal");

if(gameStates == "start"){

rand = Math.ceil(Math.random() * 100);
//switch will help play the random note
switch(rand) {
  case 1: //add sound of white1
  notes.push(1);
  white1.shapeColor = "red";
  text("a",250,300);
  fill("white");
  textSize(17);
  break;
  case 2: //add sound of white2
  notes.push(2);
  white2.shapeColor = "red";
  text("a",300,300);
  fill("white");
  textSize(17);
  break;
  case 3: //add sound of white3
  notes.push(3);
  white3.shapeColor = "red";
  text("a",350,300);
  fill("white");
  textSize(17);
  break;
  case 4: //add sound of white4
  notes.push(4);
  white4.shapeColor = "red";
  text("a",400,300);
  fill("white");
  textSize(17);
  break;
  case 5: //add sound of white5
  notes.push(5);
  white5.shapeColor = "red";
  text("a",450,300);
  fill("white");
  textSize(17);
  break;
  case 6: //add sound of white6
  notes.push(6);
  white6.shapeColor = "red";
  text("a",500,300);
  fill("white");
  textSize(17);
  break;
  case 7: //add sound of white7
  notes.push(7);
  white7.shapeColor = "red";
  text("a",550,300);
  fill("white");
  textSize(17);
  break;
  case 8: //add sound of black1
  notes.push(8);
  black1.shapeColor = "red";
  text("a",275,250);
  fill("white");
  textSize(17);
  break;
  case 9: //add sound of black2
  notes.push(9);
  black2.shapeColor = "red";
  text("a",325,250);
  fill("white");
  textSize(17);
  break;
  case 10: //add sound of black3
  notes.push(10);
  black3.shapeColor = "red";
  text("a",375,250);
  fill("white");
  textSize(17);
  break;
  case 11: //add sound of black4
  notes.push(11);
  black4.shapeColor = "red";
  text("a",425,250);
  fill("white");
  textSize(17);
  break;
  case 12: //add sound of black5
  notes.push(12);
  black5.shapeColor = "red";
  text("a",475,250);
  fill("white");
  textSize(17);
  break;
  case 13 : //add sound of black6
  notes.push(13);
  black6.shapeColor = "red";
  text("a",525,250);
  fill("white");
  textSize(17);
  break;
  default: break;
}
}

console.log(check);

if(gameStates === "play"){

if(keyDown("a")){
  check.push(1);
}

if(keyDown("b")){
  check.push(2);
}

if(keyDown("c")){
  check.push(3);
}

if(keyDown("d")){
  check.push(4);
}

if(keyDown("e")){
  check.push(5);
}

if(keyDown("f")){
  check.push(6);
}

if(keyDown("g")){
  check.push(7);
}

if(keyDown("h")){
  check.push(8);
}

if(keyDown("i")){
  check.push(9);
}

if(keyDown("j")){
  check.push(10);
}

if(keyDown("k")){
  check.push(11);
}

if(keyDown("l")){
  check.push(12);
}

if(keyDown("m")){
  check.push(13);
}
}

if(notes.length === 5){
  gameStates = "play";
}

drawSprites();
}