function basicTeenager(age) {
  if(age>=13 && age<=19){
    return "You are a teenager!";
  }
}

function teenager(age) {
  if (basicTeenager(age)){
    return "You are a teenager!";
  }
  else {
    return "You are not a teenager";
  }

}

function ageChecker(age) {
  if (basicTeenager(age)){
    return "You are a teenager!";
  }
  else if(age <= 12) {
    return "You are a kid"
  }
  else {  // must be above 19
    return "You are a grownup"
  }

}

function ternaryTeenager(age) {
  return basicTeenager(age)?"You are a teenager":"You are not a teenager";
}

function switchAge(age) {
  var teen = "You are a teenager";
  var notTeen = "You have an age";

  switch(age){
    case 13:
      return teen;
    case 14:
    return teen;
    case 15:
     return teen;
    case 16:
     return teen;
    case 17:
     return teen;
    case 18:
     return teen;
    case 19:
     return teen;
    default:
     return notTeen
  }
}
