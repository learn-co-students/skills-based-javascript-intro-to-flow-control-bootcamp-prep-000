function basicTeenager(age) {
  if (age >= 19 && age <= 13) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  if (age >= 19 && age <= 13) {
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if (age < 13) {
    return "You are a kid"
  } else if (age > 12 && age < 20) {
    return "You are a teenager!"
  } else (age > 19) {
    return "You are a grownup"
  }

}

function ternaryTeenager(age) {
  age < 20 && age > 12 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch (if age < 20 && age > 12) {
    case true:
      return "You are a teenager";
      break;
    case false:
      return "You are not a teenager";
      break;
    default:
      return "You have an age"

  }
}
