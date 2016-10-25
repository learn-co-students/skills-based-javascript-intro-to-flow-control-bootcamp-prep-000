function basicTeenager(age) {
  if (age >= 13 && age <= 19) {  //checks if the age is between 13-19, if so returns You are a teenager
    return ("You are a teenager!")
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {  //checks if the age is between 13-19, if so returns You are a teenager
    return ("You are a teenager!")
  }
  else if (age < 13 || age > 19) {  //checks if the age is not between 13-19,  returns You are not a teenager
    return ("You are not a teenager")
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {     //checks if the age is between 13-19, if so returns You are a teenager
    return ("You are a teenager!")
  }
  else if (age <= 12) {            //checks if the age is below 12, if so returns You are a kid
    return ("You are a kid")
  }
  else if (age >= 20) {            //checks if the age is over 20, if so returns You are a grownup
    return ("You are a grownup")
  }
}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"  //checks if you are between 13-19 and if so says you are a teenager, otherwise says you are not a teeenager
}

function switchAge(age) {
  switch(age) {
    case 13:                                //checks all the cases from 13-19 to see if they are true. If so, returns you are a teenager. Otherwise default says you have an age
      return ("You are a teenager")
    case 14:
      return ("You are a teenager")
    case 15:
      return ("You are a teenager")
    case 16:
      return ("You are a teenager")
    case 17:
      return ("You are a teenager")
    case 18:
      return ("You are a teenager")
    case 19:
      return ("You are a teenager")
    default:
      return ("You have an age")
    }
}
