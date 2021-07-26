
var box;




function setup(){
createCanvas(500,500);
box = createSprite(250,250, 50, 50);
    
}


function draw(){
background("yellow");


if(keyDown(LEFT_ARROW)){
box.position.x=box.position.x-5
}

if(keyDown(RIGHT_ARROW)){
box.position.x=box.position.x+5
}

if(keyDown(UP_ARROW)){
box.position.y=box.position.y-5
}
if(keyDown(DOWN_ARROW)){
box.position.y=box.position.y+5
}


drawSprites();
}
