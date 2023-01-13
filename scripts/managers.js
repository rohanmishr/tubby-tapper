function manager(rawName, name, price, boost, amount){
    this.rawName = rawName;
    this.name = name;
    this.price = price;
    this.boost = boost;
    this.amount = amount;
}

function managerPurchaseHandler(m){
    weight -= m.price;
    m.amount += 1;
    m.price *= 1.1;
    var htmlSelector = "#"+m.rawName+"-text";
    $(htmlSelector).text(m.name+" ("+abbvNum(m.price)+")");

}

//list of managers
var chefs = new manager("chefs", "Chef", 250, 50, 0);
var badHealthAdvisors = new manager("badHealthAdvisors", "Bad Health Advisors", 1500, 250, 0);
var discordMods = new manager("discordMods", "Discord Mods", 1000, 500, 0);
var testThing = new manager("testThing", "Test Thing", 1, 1000, 0);

function buyManager(manager){
    //buying chefs
    if(manager=="chefs" && weight >= chefs.price){
      managerPurchaseHandler(chefs)
    //buying bad health advisors
    }else if(manager=="badHealthAdvisors" && weight >= badHealthAdvisors.price){
      managerPurchaseHandler(badHealthAdvisors)
    //buying discord mods
    }else if(manager="discordMods" && weight >= discordMods.price){
      managerPurchaseHandler(discordMods)
   // buying test thing
    }else if(manager="testThing" && weight >= testThing.price){
      managerPurchaseHandler(testThing)
    }
 
}