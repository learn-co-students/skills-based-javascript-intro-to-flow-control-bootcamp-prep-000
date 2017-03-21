function basicTeenager(age) {

  if (age >= 13 && age <= 19) {

    return "You are a teenager!";
    // executed if `conditionToTest` is true

  }
}

function teenager(age) {

  if (age >= 13 && age <= 19) {

    return "You are a teenager!";
    // executed if `conditionToTest` is true

  } else {

    return "You are not a teenager";
    // executed if `conditionToTest` is false
  }

}

function ageChecker(age) {

  if (age >= 13 && age <= 19) {

    return "You are a teenager!";
    // executed if `conditionToTest` is true

  }

  else if (age <= 13) {

    return "You are a kid";
    // executed if `conditionToTest` is false
  }

  else {

    return "You are a grownup";
    // executed if `conditionToTest` is false
  }

}

function ternaryTeenager(age) {

  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager";

}

function switchAge(age) {

switch (age) {
  case (13): return "You are a teenager"

    break;

  case (14): return "You are a teenager"

    break;

  case (15): return "You are a teenager"

    break;

  case (16): return "You are a teenager"

    break;

  case (17): return "You are a teenager"

    break;

  case (18): return "You are a teenager"

    break;

  case (19): return "You are a teenager"

    break;

  default: return "You have an age"

}

}
