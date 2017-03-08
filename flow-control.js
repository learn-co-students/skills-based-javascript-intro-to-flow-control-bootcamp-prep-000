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
    } else if (age <= 12) {
        return ("You are a kid")
    } else {
        return ("You are a grownup")
    }
}

function ternaryTeenager(age) {
    return age >= 13 && age <= 19 ? "You are a teenager" :
        "You are not a teenager"
}

function switchAge(age) {
  var ages =13 >= age &&  age <= 19;
  switch (ages) {
    case ages === true:
      return ("You are a teenager")
      break;
    default:
      return("You are not a teenager")

  }

    }
}
