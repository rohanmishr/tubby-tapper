function craftPatrickStone(){
    for(var i = 0; i<inventory.length; i++){
        var a;
        var b;
        var c;
        if(inventory[i].name == "Relic of Weight"){
            inventory.splice(i, 1);
            a = true;
            break;
        }

        if(inventory[i].name == "Relic of Density"){
            inventory.splice(i, 1);
            break;
            b = true;
        }

        if(inventory[i].name == "Relic of Low Intelligence"){
            inventory.splice(i, 1);
            break;
            c = true;
        }
        if(a && b && c){
            inventory.push(patrickStone);
        }else{
            return false;
        }
    }
}