function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
     return ("You are a teenager!") // executed if `conditionToTest` is truthy
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return ("You are a teenager!") // executed if `conditionToTest` is truthy
  } else {
    return ("You are not a teenager") // executed if `conditionToTest` is falsey
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return ("You are a teenager!") // condition is false hence code is not executed
  } else if (age <= 12) {
    return ("You are a kid") // execute this code if `conditionToTest1` statement is falsey AND `conditionToTest2` is truthy
  } else {
    return ("You are a grownup") // execute this code if none of the other conditions are met
  }
}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch (true) {
    case (age >= 13 && age <= 19):
        return ("You are a teenager"); // code to be executed if case n is true
        break; // break out of switch statement once code executed
    case (age <= 12 && age >= 20):
        return ("You are not a teenager"); // code to be executed if case m is true
        break; // break out of switch statement once code executed
    default:  // all other cases
        return ("You have an age"); // code to be executed if case n and case m false
  }
}
