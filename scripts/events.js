//handlers for game events

//IF YOU ARE HELPING WITH DEVELOPMENT, READ THIS:
//Each function is run on an event, its pretty self explanatory. If you want something to happen on
//for example, a click, you would put it in the on_CLICK function.
//If something isn't working, find the function that is run when something is clicked, and make sure
//the corresponding on_EVENT function is being called
//use rng(chance) for rng chance. 0.01 = 1%, refer to the content spreadsheet for rarity info

//rng function
function rng(chance){
    var rand = Math.random();
    if(rand < chance){
        return true;
    }
    return false;
}

function on_CLICK(){
    //loot tables
    if(rng(0.001)){
        inventory.push(relicOfWeight);
        alert("RARE DROP: Relic of Weight");
    }

    if(rng(0.001)){
        inventory.push(relicOfDensity);
        alert("RARE DROP: Relic of Density");
    }

    if(rng(0.001)){
        inventory.push(relicOfLowIntelligence);
        alert("RARE DROP: Relic of Low Intelligence");
    }
}

function on_UPGRADEBUY(){
    if(rng(0.01)){
        alert("")
    }
}

function on_MANAGERBUY(){

}