function basicTeenager(age) {
  if (age <= 19 && age >= 13) {
    return "You are a teenager!"
  }
  else {
    return undefined
  }
}

function teenager(age) {
  if (age > 19 || age < 13) {
    return "You are not a teenager"
  }
  else {
    return "You are a teenager!"
  }
}

function ageChecker(age) {
  if (age <= 12) {
    return "You are a kid"
  }
  else if (age >= 19) {
    return "You are a grownup"
  }
  else {
    return "You are a teenager!"
  }
}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  var test = "You are a teenager"
  switch(age) {
    case 13:
      return test;
    case 14:
      return test;
      break;
    case 15:
      return test;
      break;
    case 16:
      return test;
      break;
    case 17:
      return test;
      break;
    case 18:
      return test;
      break;
    case 19:
      return test;
      break;
    default:
      return "You have an age";
  }
}
