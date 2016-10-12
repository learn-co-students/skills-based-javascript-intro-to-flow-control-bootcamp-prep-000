function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return ("You are a teenager!")
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return ("You are a teenager!")
  } else {
    return ("You are not a teenager")
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return ("You are a teenager!")
  } elseif (age <= 12) {
      return ("You are a kid")
  } else {
      return ("You are a grownup")
  }
}

function ternaryTeenager(age) {
  if (age >= 13 && age <= 19) ?
  return ("You are a teenager") :
  return ("You are not a teenager")
}

function switchAge(age) {
  switch(age) {
    case 13 >= 19:
      return ("You are a teenager")
      break;
    default:
      return ("You are not a teenager")
  }
}
