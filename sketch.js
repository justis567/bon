var ballon
var backgroundImg
var database
var ballonPosition=database.ref('ballon/height')
ballonPosition.on("value",readPosition,showError)

function preload() {
   backgroundImg = loadImage("pro-C35 images/Hot Air Ballon-01.png")
   ballon = loadImage("pro-C35 images/Hot Air Ballon-01.png")
  
  
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
    ballon = createSprite(50, 400, 50, 50);

}

function draw() {
 
 if(keyDown(LEFT_ARROW)){
   ballon.x = ballon.x-10
 }
 else if(keyDown(RIGHT_ARROW)){
   ballon.x = ballon.x +10
 }
 else if(keyDown(UP_ARROW)){
   ballon.y = ballon.y-10
 }
 else if(keyDown(DOWN_ARROW)){
   ballon.y = ballon.y +10
 }
 
 
 
 
 
  if(backgroundImg){
    background(backgroundImg)
       }
  drawSprites();
}




function updateHeight(x,y){
  database.ref('ballon/height').set({
    'x': height.x+x,
    'y':height.y+y
})
}

function readHheight(data){
  height = data.val()
  ballon.x = height.x
  ballon.y = height.y
}

function showError() {
  console.log("Error in writing to the database")
}
