function basicTeenager(age) {
  if (age<20 && age>12)
    return "You are a teenager!"
}

function teenager(age) {
  if (age<20 && age>12)
    return "You are a teenager!"
  return "You are not a teenager"
}

function ageChecker(age) {
  if (age<20 && age>12)
    return "You are a teenager!"

  return age<13 ? "You are a kid" : "You are a grownup"
}

function ternaryTeenager(age) {
  return age<13||age>19 ? "You are not a teenager" : "You are a teenager"
}

function switchAge(age) {
  switch (age){
    case 13: return "You are a teenager";
    case 14: return "You are a teenager";
    case 15: return "You are a teenager";
    case 16: return "You are a teenager";
    case 17: return "You are a teenager";
    case 18: return "You are a teenager";
    case 19: return "You are a teenager";
    default: return "You have an age";
  }
}
