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
function ascendLoot(life){
    var hasNotChosenItem = true;
    //sub 10 loot
    if(life < 10){

    }
    //sub 100 loot

    //sub 1000 loot
    
    //sub 10000 loot
}