function basicTeenager(age) {
    if(age >= 13 && age <= 19){
        return "You are a teenager!";
    }

}

function teenager(age) {
    if(age >= 13 && age <= 19){
        return "You are a teenager!";
    } else{
        return "You are not a teenager";
  }

}

function ageChecker(age) {
    if(age <= 12){
        return "You are a kid";
    } else if(age >= 19){
        return "You are a grownup";
    } else {
        return "You are a teenager!";
    }
}

function ternaryTeenager(age) {
  var ret = age < 13 ? "You are not a teenager": age > 19 ? "You are not a teenager": "You are a teenager";
  return ret;

}

function switchAge(age) {
      switch(age){
        case 13:
          return "You are a teenager";
        case 14:
          return "You are a teenager";
        case 15:
          return "You are a teenager";
        case 16:
          return "You are a teenager";
        case 17:
          return "You are a teenager";
        case 18:
          return "You are a teenager";
        case 19:
          return "You are a teenager";
        default:
          return "You have an age";
      }

}
ternaryTeenager(15)
