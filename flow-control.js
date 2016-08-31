function basicTeenager(age) {
  if(age > 12 && age < 20) return "You are a teenager!";
}

function teenager(age) {
  return age > 12 && age < 20 ? "You are a teenager!" : "You are not a teenager";
}

function ageChecker(age) {
  if (age < 13) {
    return "You are a kid";
  } else if (age > 12 && age < 20) {
    return "You are a teenager!";
  } else {
    return "You are a grownup";
  }
}

function ternaryTeenager(age) {
  return age > 12 && age < 20 ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  let message;
  switch (age > 12 && age < 20) {
    case true:
      message = "You are a teenager";
      break;
    default:
      message = "You have an age";
  }
  return message;
}
