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
    var htmlSelector = "#"+m.rawName;
    $(htmlSelector).text(m.name+" ("+abbvNum(m.price)+")");

}

//list of managers
var chefs = new manager("chefs", "Chef", 250, 5, 0);
var badHealthAdvisors = new manager("badHealthAdvisors", "Bad Health Advisors", 1500, 25, 0);
var discordMods = new manager("discordMods", "Discord Mods", 5000, 100, 0);

function buyManager(manager){
    if(manager=="chefs" && weight >= chefs.price){
      managerPurchaseHandler(chefs)
    }else if(manager=="badHealthAdvisors" && weight >= badHealthAdvisors.price){
      managerPurchaseHandler(badHealthAdvisors)
    }else if(manager="discordMods" && weight >= discordMods.price){
      managerPurchaseHandler("discordMods");
    }
}
