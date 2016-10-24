function basicTeenager(age) {
  if (age >= 13 && age <=19) {
    return "You are a teenager!"
  }
  else {
    return undefined
  }
}

function teenager(age) {
  if (age >= 13 && age <=19) {
    return "You are a teenager!"
  }
  else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if (age > 19){
    return "You are a grownup"
  }

  else if (age < 13){
    return "You are a kid"
  }

  else {
    return "You are a teenager!"
  }
}

function ternaryTeenager(age) {

  var message = (age <= 19 && age >=13) ? "You are a teenager": "You are not a teenager"
  return message

}

function switchAge(age) {
  var teenMessage = "You are a teenager"
  var haveAge = "You have an age"
  switch(age){
    case 13: return teenMessage
    case 14: return teenMessage
    case 15: return teenMessage
    case 16: return teenMessage
    case 17: return teenMessage
    case 18: return teenMessage
    case 19: return teenMessage
    default: return haveAge

  }
}
