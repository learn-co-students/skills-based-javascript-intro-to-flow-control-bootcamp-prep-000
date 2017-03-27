function basicTeenager(age) { /* passes partially */
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else {
    return undefined;
  }
}

function teenager(age) { /* passes completely */
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) { /* passes completely */
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else if (age <= 12) {
    return "You are a kid";
  } else {
    return "You are a grownup";
  }
}

function ternaryTeenager(age) {
  var age_check = (age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager";
  return age_check;
}

function switchAge(age) { /* passes completely */
  switch(age) {
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
