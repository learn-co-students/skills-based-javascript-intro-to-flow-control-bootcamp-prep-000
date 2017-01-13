function basicTeenager(age) {
  if (age >= 13 && age <= 19) //check age between 13 & 19
  return ("You are a teenager!")//retun 'You are a teenager!'
}

function teenager(age) {
  if (age >= 13 && age <= 19){  //check age between 13 & 19
    return ("You are a teenager!")//return 'You are a teenager'
  } else {
    return ("You are not a teenager")//If age is not between 13 & 19, return 'You are not a teenger'
  }
}

function ageChecker(age) {
  if (age >= 13 && age <=19){//check age between 13 & 19
    return ("You are a teenager!")
  } else if (age <= 12) {//check age 12 or below
    return ("You are a kid")
  } else {
    return ("You are a grownup")//return 'You are a grownup' if age above 19
  }
}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ?
  "You are a teenager" :
  "You are not a teenager"
}


function switchAge(age) {
  switch (age) {
    case 13:
    return "You are a teenager"
    case 14:
    return "You are a teenager"
    case 15:
    return "You are a teenager"
    case 16:
    return "You are a teenager"
    case 17:
    return "You are a teenager"
    case 18:
    return "You are a teenager"
    case 19:
    return "You are a teenager"
    default:
    return "You have an age"

  }
}
