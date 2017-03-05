function basicTeenager(age) {
if (age >=13 && age <=19)
return "You are a teenager!"
}

function teenager(age1) {
if (age1 >=13 && age1 <=19) {
  return "You are a teenager!"
} return "You are not a teenager"
}


function ageChecker(age2) {
if (age2 >=13 && age2 <=19) {
  return "You are a teenager!"
} else if (age2 <= 12){
  return "You are a kid"
} else if (age2 > 19) {
  return "You are a grownup"
}
}


function ternaryTeenager(age3) {
return age3 >=13 && age3 <=19 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age4) {
switch(age4) {
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
  case 20:
  return "You have an age";
  default:
    return "You have an age";
    break;
}
}
