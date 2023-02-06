var inventory = [];

function item(name, desc, rarity, mult) {
    this.name = name;
    this.desc = desc;
    this.mult = mult;
    this.rarity = rarity;
}

function equipment(name, desc, type, rarity, mult){
    this.name = name;
    this.desc = desc;
    this.type = type;
    this.rarity = rarity;
    this.mult = mult;
}

//define items
var relicOfWeight = new item("Relic of Weight", "From birth, Patrick was the most massive creature in the macrocosm.", "common", 1.5);
var relicOfDensity = new item("Relic of Density", "The density of Patrick's body confused scientists all over the world.", "common", 1.5);
var relicOfLowIntelligence = new item("Relic of Low Intelligence", "Patrick's low intelligence was phenomenal, being one of the least in the universe.", "common", 1.5);

//EQUIPMENTS: necklace, cloak, gauntlet, boots
var rizzNegator = new equipment("Rizz Negator", "The necklace seems to curse the wearer with reduced rizz.", "necklace", "uncommon", 2);
var gelatinousCloak = new equipment("Gelatinous Cloak", "A cloak made of gelatinous material, similar to Patrick's figure.", "cloak", "uncommon", 2);
var tubbingtonsGauntlet = new equipment("Tubbingtons Gauntlet", "A gauntlet that harnesses the power of Tubbington himself.", "gauntlet", "uncommon", 2);
var bootsOfTheGiant = new equipment("Boots of the Giant", "These boots have belonged to Patrick's kind for long, and have effects on weight gain.", "boots", "uncommon",2);

setInterval(function(){
    document.getElementById("inventoryInner").innerHTML = "";
    for(var i = 0; i<inventory.length; i++){
        document.getElementById("inventoryInner").innerHTML += "<button class='inventory-button"+inventory[i].rarity+"'>"+inventory[i].name+"</button>"
    }
})

