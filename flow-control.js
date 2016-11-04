function basicTeenager(age) {
  if(ageChecker(age) === "You are a teenager!") {
    return ageChecker(age)
  }else return
}

function teenager(age) {
  if(ageChecker(age) === "You are a teenager!") {
    return ageChecker(age)
  }else return "You are not a teenager"
}

function ageChecker(age) {
  if(12<age && age<20) {
    return "You are a teenager!"
  }else if(age<13) {
    return "You are a kid"
  }else if(age>19) {
    return "You are a grownup"
  }else return

}

function ternaryTeenager(age) {
  if(ageChecker(age) === "You are a teenager!") {
    return "You are a teenager"
  }else return "You are not a teenager"
}

function switchAge(age) {
  if(ageChecker(age) === "You are a teenager!") {
    return "You are a teenager"
  }else return "You have an age"
}
