var pwd;
var developerMode = false;
/*function secret(){
  pwd = window.prompt("Activate developer mode >> enter password:");
  if(pwd == "Patrick200lbs"){
    
    
    alert("Developer mode activated");
    developerMode = true;
  }else {
    
    alert("Incorrect password. Try again or quit.")
    
  }
}

function getPassword() {
  const val = document.querySelector('devPass').value;
  if(val == "Patrick200lbs"){
    alert("Developer mode activated");
    developerMode = true;
}else {
  alert("Incorrect password. Try again or quit.")
}
}*/
function checkPassword() {
  var passwordInput = document.getElementById("passwordInput").value;
  if (passwordInput === "Patrick200lbs") {
    developerMode = true;
    alert("Devmode enabled");
  } else {
    alert("Incorrect password try again or quit");
  }
}

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


  var weight = localStorage.getItem("weight");
    if (weight == null) {
        weight = 100;
    }
    localStorage.setItem("weight", weight);
//var weight = <?php echo $weight; ?>;
var weight = 187;
localStorage.setItem("weight", weight);
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
}
if (weight == null) {
  weight = 187;
}
//loop 
setInterval(function(){
  weight+=passiveGain;
}, 1000);

//loop main
setInterval(function(){
  document.getElementById("weightDisplay").innerHTML = localStorage.getItem("weight");
  document.getElementById("rizzDisplay").innerHTML = abbvNum(rizz, 1) + "% rizz";
  rizz = 100 - 0.5*((weight-130)/2);
  
$("#baseClick").text("Base click weight gain: " + abbvNum(baseWeightGain));
  $("#clickMult").text("Weight gain multiplier: " + abbv4Num(weightMultiplier));
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
},1);
