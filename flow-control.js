function basicTeenager(age) {
  if (13<=age<=19){
    return "You are a teenager!"
  }
}

function teenager(age) {
  if (13<=age<=19){
    return "You are a teenager!" else{
      return "You are not a teenager!"
    }
  }
}

function ageChecker(age) {
  if (13<=age<=19){
    return "You are a teenager!"
      } elseif (age>=12){
        return "You are a kid"
        } else {
              return "You are not a teenager!"
      }
}

function ternaryTeenager(age) {
  return 13<=age<=19 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch(age){
    case 13<=age<=19:
      return "You are a teenager";
      break;
    default:
      return "You have an age";
  }
}
