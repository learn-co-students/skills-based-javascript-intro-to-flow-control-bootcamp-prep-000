var teen  = "You are a teenager!";
var notteen  = "You are not a teenager";
var kid  = "You are a kid";
var adult  = "You are a grownup";

function basicTeenager(age) {
  if ( 12 < age && age < 20) {
    return teen;
  }
}

function teenager(age) {
  if ( age < 13 || age > 19) {
    return notteen;
  } else {
    return teen;
  }
}

function ageChecker(age) {
  if ( 12 < age && age < 20) {
    return teen;
  } else if (age <= 12) {
    return kid;
  } else if (age >= 20) {
    return adult;
  }
}

function ternaryTeenager(age) {
  return (12 < age && age < 20) ? "You are a teenager" : notteen;
}

function switchAge(age) {
  switch (age) {
    case (13):
      return "You are a teenager";
    case (14):
      return "You are a teenager";
    case (15):
      return "You are a teenager";
    case (16):
      return "You are a teenager";
    case (17):
      return "You are a teenager";
    case (18):
      return "You are a teenager";
    case (19):
      return "You are a teenager";
    default:
      return "You have an age";
  }
}
