//NAV STUFF
var tab = "dash";
var navState = false;

function toggleNav(){
  if(navState === false){
    $("#nav").css("width", "0px");
    $("#main").css("margin-left", "0px");
    navState = true;
  }else if(navState === true){
    $("#nav").css("width", "125px");
    $("#main").css("margin-left", "125px");
    navState = false;
  }
}

function navDashboard(){
  tab="dash";
  $("#uShop").css("background-color","white");
  $("#dash").css("background-color","#9900ff");
  $("#inv").css("background-color","white");
  $("#asc").css("background-color","white");
  $("#mShop").css("background-color","white");
}
function navInventory(){
  tab="inv";
  $("#uShop").css("background-color","white");
  $("#dash").css("background-color","white");
  $("#inv").css("background-color","#9900ff");
  $("#asc").css("background-color","white");
  $("#mShop").css("background-color","white");
}
function navUpgradeShop(){
  tab="uShop";
  $("#uShop").css("background-color","#9900ff");
  $("#dash").css("background-color","white");
  $("#inv").css("background-color","white");
  $("#asc").css("background-color","white");
  $("#mShop").css("background-color","white");
}
function navAscend(){
  tab="asc";
  $("#uShop").css("background-color","white");
  $("#dash").css("background-color","white");
  $("#inv").css("background-color","white");
  $("#asc").css("background-color","#9900ff");
  $("#mShop").css("background-color","white");
}
function navManagerShop(){
  tab="mShop";
  $("#uShop").css("background-color","white");
  $("#dash").css("background-color","white");
  $("#inv").css("background-color","white");
  $("#asc").css("background-color","white");
  $("#mShop").css("background-color","#9900ff");
}

//constructors
function achievement(name, lbReq, rizzReq, pts){
  this.name = name;
  this.lbReq = lbReq;
  if(rizzReq !== "none"){
    this.rizzReq = rizzReq;
  }else{
    this.rizzReq = "none";
  }
  this.pts = pts;
}

function manager(type, price, boost, amount){
  this.type = type;
  this.price = price;
  this.boost = boost;
  this.amount = amount;
}

//achievements
var patrick = new achievement("Patrick!", 200, "none", 5);
var grassAllergy = new achievement("Grass Allergy", 1000, "none", 5);

//main
var weight = 130;
var rizz = 100;

var clickerRank = 1;
var baseWeightGain = 1;
var weightMultiplier = 1;
var clickWeight = baseWeightGain * weightMultiplier;

//managers
var chefs = new manager("Chef", 250, 5, 0);
var badHealthAdvisors = new manager("Bad Health Advisors", 1500, 25, 0);
var discordMods = new manager("Chef", 5000, 100, 0);

var passiveGain = 0;

setInterval(function(){
  clickWeight = baseWeightGain * weightMultiplier;
                        
  passiveGain = (chefs.amount * chefs.boost) + (badHealthAdvisors.amount * badHealthAdvisors.boost);
},1);

function gainWeight(){
  weight += clickWeight;
}

function buyManager(manager){
  if(manager=="chef" && weight >= chefs.price){
    weight -= chefs.price;
    chefs.amount += 1;
    chefs.price *= 1.1;
    $("#chef").text("Chef ("+abbvNum(chefs.price)+")")
  }
}
function buyUpgrade(upgrade){
  //clicker ranks
  if(upgrade=="bronzeClicker" && weight >= 100){
    weight -= 100;
    baseWeightGain = 5;
    clickerRank = 2;
    $("#bronzeClicker").css("display","none");
  }else if(upgrade == "silverClicker" && weight >= 1000){
    weight -= 1000;
    baseWeightGain = 25;
    clickerRank = 3;
    $("#silverClicker").css("display","none");
  }else if(upgrade == "goldClicker" && weight >= 10000){
    weight -= 10000;
    baseWeightGain = 125;
    clickerRank = 4;
    $("#goldClicker").css("display","none");
  }else if(upgrade == "rubyClicker" && weight >= 100000){
    weight -= 100000;
    baseWeightGain = 625;
    clickerRank = 5;
    $("#rubyClicker").css("display","none");
  }else if(upgrade == "sapphireClicker" && weight >= 1000000){
    weight -= 1000000;
    baseWeightGain = 3125;
    clickerRank = 6;
    $("#sapphireClicker").css("display","none");
  }else if(upgrade == "emeraldClicker" && weight >= 10000000){
    weight -= 10000000;
    baseWeightGain = 15625;
    clickerRank = 7;
    $("#emeraldClicker").css("display","none");
  //overall upgrades
  }else if(upgrade == "packagedChips" && weight >= 200){
    weight -= 200;
    weightMultiplier *= 1.5;
    $("#packagedChips").css("display","none");
  }else if(upgrade == "burgersAndFries" && weight >= 500){
    weight -= 500;
    weightMultiplier *= 1.5;
    $("#burgersAndFries").css("display","none");
  }else if(upgrade == "xlMilkshake" && weight >= 1000){
    weight -= 1000;
    weightMultiplier *= 1.5;
    $("#xlMilkshake").css("display","none");
  }else if(upgrade == "doubleStuffedOreos" && weight >= 2500){
    weight -= 2500;
    weightMultiplier *= 1.5;
    $("#doubleStuffedOreos").css("display","none");
  }else if(upgrade == "weightGainingProgram" && weight >= 5000){
    weight -= 5000;
    weightMultiplier *= 1.5;
    $("#weightGainingProgram").css("display","none");
  }
}
//loop 
setInterval(function(){
  weight+=passiveGain;
},1000)
//loop main
setInterval(function(){
  document.getElementById("weightDisplay").innerHTML = abbvNum(weight, 1) + " lbs";
  document.getElementById("rizzDisplay").innerHTML = abbvNum(rizz, 1) + "% rizz";
  rizz = 100 - 0.5*((weight-130)/2);
  
$("#baseClick").text("Base click weight gain: " + abbvNum(baseWeightGain));
  $("#clickMult").text("Weight gain multiplier: " + abbvNum(weightMultiplier));
  $("#weightGainPerClick").text("Total weight gain/click: " + abbvNum(clickWeight));

  if(clickerRank == 1){
    $("#clicker").css("background-color","white");
  }else if(clickerRank == 2){
    $("#clicker").css("background-color","#b35900");
  }else if(clickerRank == 3){
    $("#clicker").css("background-color","#bfbfbf");
  }else if(clickerRank == 4){
    $("#clicker").css("background-color","#ffcc00");
  }else if(clickerRank == 5){
    $("#clicker").css("background-color","#e60000");
  }else if(clickerRank == 6){
    $("#clicker").css("background-color","#0000ff");
  }
  
  //MORE NAV STUFF
  if(tab=="dash"){
    $("#dashboard").css("display", "block");
  }else{
    $("#dashboard").css("display", "none");
  }

  if(tab=="uShop"){
    $("#upgradeShop").css("display", "block");
  }else{
    $("#upgradeShop").css("display", "none");
  }

  if(tab=="inv"){
    $("#inventory").css("display", "block");
  }else{
    $("#inventory").css("display", "none");
  }

  if(tab=="asc"){
    $("#ascend").css("display", "block");
  }else{
    $("#ascend").css("display", "none");
  }

  if(tab=="mShop"){
    $("#managerShop").css("display", "block");
  }else{
    $("#managerShop").css("display", "none");
  }
},1);
