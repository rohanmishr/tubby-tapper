var life = 1;
function ascend(){
    if(window.confirm("Are you sure you want to ascend? You will lose all of your weight and upgrades, but will gain a powerful item in return!")){
        weight = 130;
        clickerRank = 1;
        //reset all managers to base price, set amount to 1

        //reset all upgrades

        //do ascending things
        life++;
        ascendLoot();

    }else{
        return;
    }
}

//refer to items.js for ascent items list
var loot10 = [];
var loot100 = [];
var loot1000 = [];
var loot10000 = [];
function ascendLoot(life){
    var hasNotChosenItem = true;
    if(life < 10){

    }
    if(life < 100){

    }
    if(life < 1000){

    }
    if(life < 10000){
        
    }
}