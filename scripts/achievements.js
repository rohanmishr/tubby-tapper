var patrick = new achievement("Patrick!", 200, "none", 5);
var grassAllergy = new achievement("Grass Allergy", 1000, "none", 5);

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
