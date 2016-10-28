function basicTeenager(age) {
  if(age >= 13 && age <= 19){
    return "You are a teenager!";
  }
}

function teenager(age) {
  var word = "", end = "";
  if(age < 13 || age > 19) {
    word = "not ";
  }
  else {
    end = "!";
  }
  return "You are " + word + "a teenager" + end;
}

function ageChecker(age) {
  var phrase = "";
  if (age < 13) {
    phrase = "You are a kid";
  }
  else if(age > 19) {
    phrase = "You are a grownup";
  }
  else {
      phrase = "You are a teenager!";
  }
  return phrase;
}

function ternaryTeenager(age) {
  var phrase;
  age >= 13 && age <= 19 ? phrase = "You are a teenager" :
  phrase = "You are not a teenager";
  return phrase;
}

function switchAge(age) {

switch (age) {
  case 13: break;
  case 14: break;
  case 15: break;
  case 16: break;
  case 17: break;
  case 18: break;
  case 19: break;
  default: return "You have an age";
}
  return "You are a teenager";
}
