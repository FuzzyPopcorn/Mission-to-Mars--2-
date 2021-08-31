var gameState,playerCount;
var game, form, player;
var allPlayers;
var Rocket1, Rocket2, Rockets
var allPlayers;
var Meteor, Satellite, meteor, satellite, meteorImg, satelliteImg


//gameState = 0
//playerCount = 0;

function preload(){
  bgImg = loadImage("images/BackgroundImg.jpg")
  endImg = loadImage("images/EndingImg.png")
  rocket1Img = loadAnimation("images/rocket1.png")
  rocket1fireImg = loadAnimation("images/rocket1-fire.png")
  rocket2Img = loadAnimation("images/rocket2.png")
  rocket2fireImg = loadAnimation("images/rocket2-fire.png")
  satelliteImg = loadAnimation("images/satellite.png")
  meteorImg = loadAnimation("images/meteor.png")

}

function setup() {
  createCanvas(displayWidth-150, displayHeight-5);
  database = firebase.database();
  game = new Game(); 
  game.start();

  Meteor=new Group();
  Satellite=new Group();
}

function draw() {
  //background();
  
   if (playerCount === 2) {
     game.update(1);
     console.log("checking")
     
   
   if (gameState === 1) {
     clear(); 
     game.play();
   }

   }
    if (gameState === 2) {
    
     game.end();
   }

  
}