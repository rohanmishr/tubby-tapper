var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.style.border = "solid 5px black";

function hitbox(x, y, w, h, col){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.col = col;
}

var player = new hitbox(240, 240, 20, 20, "black");
var vel = 1;
var shop = new hitbox(0, 225, 100, 200, "red");

var hitboxes = [player, shop];

var Wpressed = false;
var Apressed = false;
var Spressed = false;
var Dpressed = false;

var collision_SHOP = false;
var collision_FORGE = false;

function checkCollision(){
    if(player.x + player.w > shop.x && player.x < shop.x + shop.w && player.y + player.h > shop.y && player.y < shop.y + shop.h){
        console.log("Collision: SHOP");
        collision_SHOP = true;
    }else{
        collision_SHOP = false;
    }
    
    //show menus if colliding
    if(collision_SHOP){
        document.getElementById("shop").style.display = "block";
    }else{
        document.getElementById("shop").style.display = "none";
    }
    //stop moving if colliding
    if(collision_SHOP || collision_FORGE){
        vel = 0;
    }else{
        vel = 1;
    }
}

function exitShop(){
    document.getElementById("shop").style.display = "none";
    player.x = 240;
}

document.addEventListener('keydown', function(event){
    if(event.keyCode == 87){
        Wpressed = true;
    }
    if(event.keyCode == 65){
        Apressed = true;
    }
    if(event.keyCode == 83){
        Spressed = true;
    }
    if(event.keyCode == 68){
        Dpressed = true;
    }
});

document.addEventListener('keyup', function(event){
    if(event.keyCode == 87){
        Wpressed = false;
    }
    if(event.keyCode == 65){
        Apressed = false;
    }
    if(event.keyCode == 83){
        Spressed = false;
    }
    if(event.keyCode == 68){
        Dpressed = false;
    }
});


function tick(){
    for(var i = 0; i<hitboxes.length; i++){
        ctx.fillStyle = hitboxes[i].col;
        ctx.fillRect(hitboxes[i].x, hitboxes[i].y, hitboxes[i].w, hitboxes[i].h);
    }

    if(Wpressed){
        player.y -= vel;
    }
    if(Apressed){
        player.x -= vel;
    }
    if(Spressed){
        player.y += vel;
    }
    if(Dpressed){
        player.x += vel;
    }
    checkCollision();
}
setInterval(function(){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    tick();
}, 1)
