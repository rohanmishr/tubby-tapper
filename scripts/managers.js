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
var discordMods = new manager("discordMods", "Discord Mods", 5000, 550, 0);
var fatSurgeons = new manager("fatSurgeons", "Fat Surgeons", 25000, 1300, 0);
var gamers = new manager("gamers", "Gamers", 100000, 3700, 0);

function buyManager(manager){
  //buying chefs
  if(manager=="chefs" && weight >= chefs.price){
    managerPurchaseHandler(chefs);
  //buying bad health advisors
  }else if(manager=="badHealthAdvisors" && weight >= badHealthAdvisors.price){
    managerPurchaseHandler(badHealthAdvisors);
  //buying discord mods
  }else if(manager=="discordMods" && weight >= discordMods.price){
    managerPurchaseHandler(discordMods);
 // buying fat surgeons
  }else if(manager=="fatSurgeons" && weight >= fatSurgeons.price){
    managerPurchaseHandler(fatSurgeons);
  //buying gamers
  }else if(manager=="gamers" && weight >= gamers.price){
    managerPurchaseHandler(gamers);
  }
}
