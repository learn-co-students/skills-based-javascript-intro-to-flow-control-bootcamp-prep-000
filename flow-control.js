function basicTeenager(age ) {

  if (age >=13 && age<=19) {
    return "You are a teenager!";
  }
}

function teenager(age) {

  if (age >=13 && age<=19) {
    return "You are a teenager!";
  }else{
    return "You are not a teenager";
  }
}

function ageChecker(age) {

  if (age >=13 && age<=19) {
    return "You are a teenager!";
  }else if (age <= 12) {
    return "You are a kid";
  }else if(age >= 20){
    return "You are a grownup";
  }
}

function ternaryTeenager(age) {

  if (age >=13 && age<=19) {
    return "You are a teenager";
  }else{
    return "You are not a teenager";
  }
}



function switchAge(age) {

  switch (age) {
    case 13:
        return "You are a teenager";
        break; // break out of switch statement once code executed
    case 14:
        return "You are a teenager";
        break; // break out of switch statement once code executed
    case 15:
        return "You are a teenager";
        break; // break out of switch statement once code executed
    case 16:
        return "You are a teenager";
        break; // break out of switch statement once code executed
    case 17:
        return "You are a teenager";
        break; // break out of switch statement once code executed
    case 18:
        return "You are a teenager";
        break; // break out of switch statement once code executed
    case 19:
        return "You are a teenager";
        break;
    default:  // all other cases
        return "You have an age";
  }


}
