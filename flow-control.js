function basicTeenager(age) {
  if (12 < age && age < 20) {
    return "You are a teenager!"
  }
  else {
    return undefined
    }
}

function teenager(age) {
  if (12 < age && age < 20) {
    return "You are a teenager!"
}
  else if (age <= 12 || age >= 20) {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  }
  else if (age <= 12) {
    return "You are a kid"
  }
  else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager"
  }
  
  else {
    return "You are not a teenager"
  }
}

function switchAge(age) {
  case age >= 13 && age <= 20:
      console.log("You have an age")
      break; // break out of switch statement once code executed
  default:  // all other cases
      console.log()"You are a teenager")
}