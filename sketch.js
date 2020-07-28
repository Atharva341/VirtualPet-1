//Create variables here
var dog,happyDog,database,foodS,foodStock,dog1;
function preload()
{
  //load images here
  dog1=loadImage("/images/dog.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  dog=createSprite(300,350);
  dog.addImage("d1",dog1);
  dog.scale=0.2

}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage("hd1",happydog);
 }
  drawSprites();
  //add styles here
  textSize(20);
  
  text("Note:Press Up arrow Key to feed Drago Milk!",200,200)
  
}
function readStock(data){
foodS=data.val();
}

function writeStock(x){
if(x<=10){
x=0
}else{
x=x-1
}
  database.ref('/').update({
    Food:x
  })
}

