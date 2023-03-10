function buyUpgrade(upgrade){
  //clicker ranks
  if(upgrade=="bronzeClicker" && weight >= 250){
    weight -= 250;
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
  }else if(upgrade == "diamondClicker" && weight >= 100000000){
      weight -= 100000000;
      baseWeightGain = 78125;
      clickerRank = 8;
      $("#diamondClicker").css("display","none");
  }else if(upgrade == "amethystClicker" && weight >= 1000000000){
      weight -= 1000000000;
      baseWeightGain = 390625;
      clickerRank = 9;
      $("#amethystClicker").css("display","none");
  }else if(upgrade == "platinumClicker" && weight >= decodeNum('10B')){
      weight -= decodeNum('10B');
      baseWeightGain = 1953125;
      clickerRank = 10;
      $("#platinumClicker").css("display","none");
  }else if(upgrade == "plutoniumClicker" && weight >= decodeNum('100B')){
      weight -= decodeNum('100B');
      baseWeightGain = 9765625;
      clickerRank = 11;
      $("#plutoniumClicker").css("display","none");
  }else if(upgrade == "opalClicker" && weight >= decodeNum('1T')){
      weight -= decodeNum('1T');
      baseWeightGain = 48828125;
      clickerRank = 12;
      $("#opalClicker").css("display","none");
  }else if(upgrade == "titaniumClicker" && weight >= decodeNum('10T')){
      weight -= decodeNum('10T');
      baseWeightGain = 244140625;
      clickerRank = 13;
      $("#titaniumClicker").css("display","none");
  }else if(upgrade == "mithrilClicker" && weight >= decodeNum('100T')){
      weight -= decodeNum('100T');
      baseWeightGain = 1220703125;
      clickerRank = 14;
      $("#mithrilClicker").css("display","none");
  }else if(upgrade == "firecrystalClicker" && weight >= decodeNum('1qd')){
      weight -= decodeNum('1qd');
      baseWeightGain = 6103515625;
      clickerRank = 15;
      $("#firecrystalClicker").css("display","none");
  }else if(upgrade == "uraniumClicker" && weight >= decodeNum('10qd')){
      weight -= decodeNum('10qd');
      baseWeightGain = 30517578125;
      clickerRank = 16;
      $("#uraniumClicker").css("display","none");
  }else if(upgrade == "gammaClicker" && weight >= decodeNum('100qd')){
      weight -= decodeNum('100qd');
      baseWeightGain = 152587890625;
      clickerRank = 17;
      $("#gammaClicker").css("display","none");
  }else if(upgrade == "darkMatterClicker" && weight >= decodeNum('1Qn')){
      weight -= decodeNum('1Qn');
      baseWeightGain = 762939453125;
      clickerRank = 18;
      $("#darkMatterClicker").css("display","none");
  }else if(upgrade == "ecuadorianClicker" && weight >= decodeNum('10Qn')){
      weight -= decodeNum('10Qn');
      baseWeightGain = 3814697265625;
      clickerRank = 19;
      $("#ecuadorianClicker").css("display","none");
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
  }else if(upgrade == "discordServer" && weight >= 12000){
      weight -= 12000;
      weightMultiplier *= 1.5;
      $("#discordServer").css("display","none");
  }else if(upgrade == "fatImplant" && weight >= 25000){
      weight -= 25000;
      weightMultiplier *= 1.5;
      $("#fatImplant").css("display","none");
  }else if(upgrade == "KFC" && weight >= 55000){
      weight -= 55000;
      weightMultiplier *= 1.5;
      $("#KFC").css("display","none");
  }else if(upgrade == "raidShadowLegends" && weight >= 100000){
    weight -= 100000;
    weightMultiplier *= 1.5;
    $("#raidShadowLegends").css("display","none");
  }else if(upgrade == "bigMac" && weight >= 187000){
    weight -= 187000;
    weightMultiplier *= 1.5;
    $("#bigMac").css("display","none");
  }else if(upgrade == "obamaFriedChicken" && weight >= 350000){
    weight -= 350000;
    weightMultiplier *= 1.5;
    $("#obamaFriedChicken").css("display","none");
  }else if(upgrade == "supermassiveDonut" && weight >= 590000){
    weight -= 590000;
    weightMultiplier *= 1.5;
    $("#supermassiveDonut").css("display","none");
  }else if(upgrade == "burgerKingFranchise" && weight >= 1000000){
    weight -= 1000000;
    weightMultiplier *= 1.5;
    $("#burgerKingFranchise").css("display","none");
  }
}