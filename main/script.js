var weight = localStorage.getItem("weight") || 187;
var rizz = 100;

var clickerRank = 1;

var baseWeightGain = 1;
var weightMultiplier = 1;
var clickWeight = baseWeightGain * weightMultiplier;

var passiveGain = 0;


setInterval(function(){
  clickWeight = baseWeightGain * weightMultiplier;
                        
  passiveGain = (chefs.amount * chefs.boost) + (badHealthAdvisors.amount * badHealthAdvisors.boost) + (discordMods.amount * discordMods.boost) + (testThing.amount * testThing.boost);
},1);

function gainWeight(){
  weight += clickWeight;
  localStorage.setItem("weight", weight);
}

//loop 
setInterval(function(){
  weight+=passiveGain;
}, 1000);

//loop main
setInterval(function(){
  document.getElementById("weightDisplay").innerHTML = localStorage.getItem("weight") + "lbs";
  document.getElementById("rizzDisplay").innerHTML = abbvNum(rizz, 1) + "% rizz";
  rizz = 100 - 0.5*((weight-130)/2);
}, 1000);

  
$("#baseClick").text("Base click weight gain: " + abbvNum(baseWeightGain));
  $("#clickMult").text("Weight gain multiplier: " + abbvNum(weightMultiplier));
  $("#weightGainPerClick").text("Total weight gain/click: " + abbvNum(clickWeight));
  $('#Info').text("Info");
  $('#tubbyTapper').text("Tubby Tapper");

  if(developerMode === true){

    $("#developerConsole").css("display", "block");
  }else{
    $("#developerConsole").css("display", "none");
  }
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
;1;
